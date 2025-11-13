import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const isNewUser = location.state?.isNewUser === true;

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // Redirect if not a new user (for signup flow)
if (!isNewUser && !location.state?.isReset) {
  navigate("/login", { replace: true });
  return null;
}

const maskEmail = (email: string) => {
  if (!email) return "your email";
  const [username, domain] = email.split("@");
  const masked = username.length > 5 ? username.substring(0, 5) + "**" : username.substring(0, 2) + "**";
  return `${masked}@${domain}`;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (otp.length !== 6) {
    setError("Please enter a 6-digit code");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const response = await fetch(
      "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/otp/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({ email, otp }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // CHECK IF IT'S PASSWORD RESET FLOW
      if (location.state?.isReset) {
        navigate("/change-password", {
          state: { email, otp }, // Pass OTP to change password
          replace: true,
        });
      } else {
        // NORMAL SIGNUP FLOW
        const token = data.token || data.access_token || data.jwt;
        if (token) localStorage.setItem("authToken", token);
        navigate("/dashboard", { replace: true });
      }
    } else {
      setError(data.message || "Invalid or expired code");
    }
  } catch (err) {
    setError("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};

const handleResend = async () => {
  setError("");
  setResendMessage("");
  setResendLoading(true);

  try {
    const response = await fetch(
      "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/otp/resend",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setResendMessage("New code sent! Check your email.");
    } else {
      setError(data.message || "Failed to resend code");
    }
  } catch (err) {
    setError("Network error. Please try again.");
  } finally {
    setResendLoading(false);
  }
};

  return (
    <div className="min-h-screen w-full flex bg-white font-host">
      <div className="w-full lg:w-1/2 bg-brand-dark relative flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div
          className="absolute top-0 left-0 w-[793px] h-[793px] rounded-full opacity-20 -translate-x-[290px] -translate-y-[239px]"
          style={{
            background: "#CED671",
            filter: "blur(198.45px)",
          }}
        />

        <Link
          to="/login"
          className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-3 rounded bg-white hover:bg-gray-50 transition-colors z-10"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4M4 12L10 18M4 12L10 6"
              stroke="#00000A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-black font-host text-base font-normal leading-[120%]">
            Go Back
          </span>
        </Link>

        <div className="relative w-full max-w-[446px] bg-white rounded-3xl border border-[#E7E8E9] p-6 flex flex-col items-center gap-12">
          <div className="flex items-center justify-center w-[146px] h-[46px]">
            <svg
              className="w-[128px] h-auto"
              viewBox="0 0 128 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8854_4781)">
                <path
                  d="M50.0538 25.4918V30.3642H39.5791V5.47418H49.8747V10.3465H44.8164V16.32H49.3771V21.1924H44.8164V25.4945H50.0538V25.4918Z"
                  fill="#6346FA"
                />
                <path
                  d="M64.1955 4.29932V30.3614H59.1372V29.1184C58.1761 30.2563 56.9649 30.824 55.7536 30.824C53.5102 30.824 51.3721 28.761 51.3721 24.4589V17.2765C51.3721 12.9744 53.5102 10.8773 55.7536 10.8773C56.9649 10.8773 58.1761 11.4817 59.1372 12.6196V4.29932H64.1955ZM59.1372 17.4552C59.1372 16.2831 58.4605 15.6787 57.7838 15.6787C57.1071 15.6787 56.4303 16.2831 56.4303 17.4552V24.2828C56.4303 25.4207 57.1071 26.0252 57.7838 26.0252C58.4605 26.0252 59.1372 25.4207 59.1372 24.2828V17.4552Z"
                  fill="#6346FA"
                />
                <path
                  d="M66.0495 11.3767H71.1078V24.2829C71.1078 25.4209 71.7845 26.0253 72.4612 26.0253C73.1379 26.0253 73.8147 25.4209 73.8147 24.2829V11.3767H78.8729V30.3642H73.8147V28.8347C72.8878 30.1145 71.4633 30.8609 70.073 30.8609C68.0059 30.8609 66.0469 29.2604 66.0469 25.5286V11.3767H66.0495Z"
                  fill="#6346FA"
                />
                <path
                  d="M86.1778 10.3439V16.3174H90.7384V21.1898H86.1778V30.3642H80.9404V5.47418H91.236V10.3465H86.1778V10.3439Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M92.4463 30.3614V4.29932H97.5046V30.3614H92.4463Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M112.04 22.1146H104.275V24.2827C104.275 25.4207 104.952 26.0251 105.629 26.0251C106.305 26.0251 106.982 25.4207 106.982 24.2827V23.0029H112.04V24.4614C112.04 28.7293 108.833 30.8607 105.629 30.8607C102.424 30.8607 99.2168 28.7267 99.2168 24.4614V17.279C99.2168 12.977 102.424 10.843 105.629 10.843C108.833 10.843 112.04 12.977 112.04 17.279V22.1146ZM106.982 17.4551C106.982 16.283 106.305 15.6786 105.629 15.6786C104.952 15.6786 104.275 16.283 104.275 17.4551V18.5221H106.982V17.4551Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M128 30.3616H122.942V25.3841C122.942 24.1384 121.839 23.4998 120.769 23.4998C119.7 23.4998 118.56 24.1384 118.56 25.3841V30.3616H113.502V25.2054C113.502 23.4998 114.429 21.9703 115.996 21.2581C114.998 20.1911 113.681 18.7693 113.681 16.9928V11.3741H118.739V16.6354C118.739 17.952 119.737 18.6274 120.769 18.6274C121.802 18.6274 122.765 17.952 122.765 16.6354V11.3741H127.824V16.9928C127.824 18.7693 126.504 20.1937 125.509 21.2581C127.147 21.9703 128.003 23.463 128.003 25.2054V30.3616H128Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.417 17.5814H22.7578C22.7578 20.2331 20.596 22.3933 17.9365 22.3933C15.277 22.3933 13.1152 20.2331 13.1152 17.5814H15.4561C15.4561 18.9454 16.5673 20.057 17.9365 20 20.057C19.3058 20.057 20.417 18.9454 20.417 17.5814Z"
                  fill="#6346FA"
                />
                <path
                  d="M17.937 -0.00012207C8.03111 -0.00012207 0 8.01535 0 17.902C0 27.7886 8.03111 35.8041 17.937 35.8041C27.8429 35.8041 35.874 27.7886 35.874 17.902C35.874 8.01535 27.8429 -0.00012207 17.937 -0.00012207ZM28.1273 25.7125H22.1527C19.8618 25.7125 18.0028 27.5678 18.0028 29.8542C18.0028 27.5678 16.1465 25.7125 13.8556 25.7125H7.74672V9.73408H13.8556C16.1465 9.73408 18.0028 11.5868 18.0028 13.8758C18.0028 11.5868 19.8618 9.73408 22.1527 9.73408H28.1273V25.7125Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8854_4781">
                  <rect width="128" height="35.874" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-host text-[32px] font-semibold leading-[120%]">
                    Verify your account
                  </h1>
                  <p className="text-[#838794] font-host text-base font-normal leading-[120%]">
                    Enter 6-digit code sent to the email {maskEmail(email)}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="otp"
                      className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                    >
                      One-Time Password
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1663 8.33321V6.66654C14.1663 4.36536 12.3009 2.49988 9.99967 2.49988C7.69849 2.49988 5.83301 4.36536 5.83301 6.66654V8.33321M9.99967 12.0832V13.7499M7.33301 17.4999H12.6663C14.0665 17.4999 14.7665 17.4999 15.3013 17.2274C15.7717 16.9877 16.1542 16.6053 16.3939 16.1349C16.6663 15.6001 16.6663 14.9 16.6663 13.4999V12.3332C16.6663 10.9331 16.6663 10.233 16.3939 9.69823C16.1542 9.22783 15.7717 8.84538 15.3013 8.60569C14.7665 8.33321 14.0665 8.33321 12.6663 8.33321H7.33301C5.93288 8.33321 5.23281 8.33321 4.69803 8.60569C4.22763 8.84538 3.84517 9.22783 3.60549 9.69823C3.33301 10.233 3.33301 10.9331 3.33301 12.3332V13.4999C3.33301 14.9 3.33301 15.6001 3.60549 16.1349C3.84517 16.6053 4.22763 16.9877 4.69803 17.2274C5.23281 17.4999 5.93288 17.4999 7.33301 17.4999Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                          setOtp(value);
                        }}
                        className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm font-medium">{error}</p>
                    </div>
                  )}

                  {resendMessage && (
                    <div className="px-4 py-3 rounded-lg bg-green-50 border border-green-200">
                      <p className="text-green-800 text-sm font-medium">{resendMessage}</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="flex h-12 px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="text-white font-host text-base font-medium leading-[160%]">
                    Verifying...
                  </span>
                ) : (
                  <span className="text-white font-host text-base font-medium leading-[160%]">
                    Login Account
                  </span>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={handleResend}
              disabled={resendLoading}
              className="text-[#468FFD] text-center font-host text-base font-normal leading-[120%] hover:underline disabled:opacity-50"
            >
              {resendLoading ? "Sending..." : "Resend Code"}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/494915144f83153c3908d0ebef3bcd2adc29906d?width=1440"
          alt="Student learning with AI"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
