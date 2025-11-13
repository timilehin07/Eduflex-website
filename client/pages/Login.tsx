import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    const loginRes = await fetch(
      "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
          account_type: "customer",
        }),
      }
    );

    const loginData = await loginRes.json();
    console.log("LOGIN RESPONSE:", loginData);

    if (loginRes.ok) {
      // ✅ Get token correctly
      const token =
        loginData.data?.tokens?.access ||
        loginData.data?.tokens?.token ||
        loginData.data?.tokens?.access_token ||
        loginData.data?.token ||
        loginData.token;

      if (token) {
        // Save token
        localStorage.setItem("authToken", token);

        // Save user name
        const name =
          loginData.data?.user?.first_name ||
          loginData.data?.user?.firstname ||
          loginData.data?.user?.name;
        if (name) localStorage.setItem("userName", name);

        // Redirect
        navigate("/dashboard", { replace: true });
        return;
      } else {
        setError("Login successful but no token found in tokens object.");
      }
    } else if (loginData.message?.toLowerCase().includes("verify")) {
      const otpRes = await fetch(
        "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/otp/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            account_type: "customer",
          }),
        }
      );

      if (otpRes.ok) {
        navigate("/verify-otp", {
          state: { email: email.trim(), isNewUser: true },
          replace: true,
        });
      } else {
        setError("Failed to send code. Try again.");
      }
    } else {
      setError(loginData.message || "Invalid email or password");
    }
  } catch (err) {
    console.error("Login error:", err);
    setError("Network error. Try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen w-full flex bg-white font-host overflow-x-hidden">
      {/* LEFT SIDE - FORM (Original bg-brand-dark) */}
      <div className="w-full lg:w-1/2 bg-brand-dark relative flex items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* REMOVED BLOB — it caused overflow on mobile */}
        {/* No background blob on mobile to prevent scroll */}

        <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl border border-[#E7E8E9] p-5 sm:p-6 flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="w-full max-w-[140px] mx-auto">
            <svg
              className="w-full h-auto"
              viewBox="0 0 128 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8854_4707)">
                <path
                  d="M50.0538 25.6646V30.5369H39.5791V5.64691H49.8747V10.5193H44.8164V16.4928H49.3771V21.3651H44.8164V25.6672H50.0538V25.6646Z"
                  fill="#6346FA"
                />
                <path
                  d="M64.1955 4.47205V30.5342H59.1372V29.2911C58.1761 30.429 56.9649 30.9967 55.7536 30.9967C53.5102 30.9967 51.3721 28.9337 51.3721 24.6316V17.4492C51.3721 13.1472 53.5102 11.05 55.7536 11.05C56.9649 11.05 58.1761 11.6544 59.1372 12.7924V4.47205H64.1955ZM59.1372 17.6279C59.1372 16.4558 58.4605 15.8514 57.7838 15.8514C57.1071 15.8514 56.4303 16.4558 56.4303 17.6279V24.4555C56.4303 25.5935 57.1071 26.1979 57.7838 26.1979C58.4605 26.1979 59.1372 25.5935 59.1372 24.4555V17.6279Z"
                  fill="#6346FA"
                />
                <path
                  d="M66.0495 11.5494H71.1078V24.4557C71.1078 25.5936 71.7845 26.198 72.4612 26.198C73.1379 26.198 73.8147 25.5936 73.8147 24.4557V11.5494H78.8729V30.5369H73.8147V29.0074C72.8878 30.2872 71.4633 31.0336 70.073 31.0336C68.0059 31.0336 66.0469 29.4331 66.0469 25.7013V11.5494H66.0495Z"
                  fill="#6346FA"
                />
                <path
                  d="M86.1778 10.5166V16.4901H90.7384V21.3625H86.1778V30.5369H80.9404V5.64691H91.236V10.5193H86.1778V10.5166Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M92.4463 30.5342V4.47205H97.5046V30.5342H92.4463Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M112.04 22.2873H104.275V24.4555C104.275 25.5934 104.952 26.1978 105.629 26.1978C106.305 26.1978 106.982 25.5934 106.982 24.4555V23.1756H112.04V24.6342C112.04 28.9021 108.833 31.0334 105.629 31.0334C102.424 31.0334 99.2168 28.8994 99.2168 24.6342V17.4518C99.2168 13.1497 102.424 11.0157 105.629 11.0157C108.833 11.0157 112.04 13.1497 112.04 17.4518V22.2873ZM106.982 17.6279C106.982 16.4558 106.305 15.8513 105.629 15.8513C104.952 15.8513 104.275 16.4558 104.275 17.6279V18.6948H106.982V17.6279Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M128 30.5343H122.942V25.5568C122.942 24.3111 121.839 23.6725 120.769 23.6725C119.7 23.6725 118.56 24.3111 118.56 25.5568V30.5343H113.502V25.3781C113.502 23.6725 114.429 22.143 115.996 21.4308C114.998 20.3638 113.681 18.9421 113.681 17.1655V11.5468H118.739V16.8081C118.739 18.1248 119.737 18.8002 120.769 18.8002C121.802 18.8002 122.765 18.1248 122.765 16.8081V11.5468H127.824V17.1655C127.824 18.9421 126.504 20.3665 125.509 21.4308C127.147 22.143 128.003 23.6357 128.003 25.3781V30.5343H128Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.417 17.7542H22.7578C22.7578 20.4058 20.596 22.5661 17.9365 22.5661C15.277 22.5661 13.1152 20.4058 13.1152 17.7542H15.4561C15.4561 19.1181 16.5673 20.2297 17.9365 20.2297C19.3058 20.2297 20.417 19.1181 20.417 17.7542Z"
                  fill="#6346FA"
                />
                <path
                  d="M17.937 0.172607C8.03111 0.172607 0 8.18808 0 18.0747C0 27.9613 8.03111 35.9768 17.937 35.9768C27.8429 35.9768 35.874 27.9613 35.874 18.0747C35.874 8.18808 27.8429 0.172607 17.937 0.172607ZM28.1273 25.8852H22.1527C19.8618 25.8852 18.0028 27.7406 18.0028 30.027C18.0028 27.7406 16.1465 25.8852 13.8556 25.8852H7.74672V9.90681H13.8556C16.1465 9.90681 18.0028 11.7596 18.0028 14.0486C18.0028 11.7596 19.8618 9.90681 22.1527 9.90681H28.1273V25.8852Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8854_4707">
                  <rect
                    width="128"
                    height="35.874"
                    fill="white"
                    transform="translate(0 0.172607)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-host text-2xl font-semibold leading-[120%]">
                    Login Your Account
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                    <span className="text-[#696E7E] font-host">
                      Don't have an Account
                    </span>
                    <Link
                      to="/signup"
                      className="flex items-center gap-1 group text-[#035638] hover:underline"
                    >
                      <span>Create Account</span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33301 8.67259H12.6663M12.6663 8.67259L7.99967 4.00592M12.6663 8.67259L7.99967 13.3393"
                          stroke="#035638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm font-medium">
                        {error}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="text-[#33363E] font-host text-sm font-medium leading-[160%]"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66699 6.00592L8.47109 10.7688C9.02207 11.1545 9.29756 11.3473 9.59721 11.422C9.8619 11.488 10.1387 11.488 10.4034 11.422C10.7031 11.3473 10.9786 11.1545 11.5296 10.7688L18.3337 6.00592M5.66699 16.8393H14.3337C15.7338 16.8393 16.4339 16.8393 16.9686 16.5668C17.439 16.3271 17.8215 15.9446 18.0612 15.4742C18.3337 14.9395 18.3337 14.2394 18.3337 12.8393V7.50592C18.3337 6.10579 18.3337 5.40572 18.0612 4.87094C17.8215 4.40054 17.439 4.01809 16.9686 3.7784C16.4339 3.50592 15.7338 3.50592 14.3337 3.50592H5.66699C4.26686 3.50592 3.5668 3.50592 3.03202 3.7784C2.56161 4.01809 2.17916 4.40054 1.93948 4.87094C1.66699 5.40572 1.66699 6.10579 1.66699 7.50592V12.8393C1.66699 14.2394 1.66699 14.9395 1.93948 15.4742C2.17916 15.9446 2.56161 16.3271 3.03202 16.5668C3.5668 16.8393 4.26686 16.8393 5.66699 16.8393Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="email"
                        type="email"
                        placeholder="namesurname@gmail.com"
                        className="flex-1 text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="password"
                      className="text-[#33363E] font-host text-sm font-medium leading-[160%]"
                    >
                      Password
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="flex-1 text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex-shrink-0 w-5 h-5"
                        disabled={isLoading}
                      >
                        <svg
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.44393 2.66716C4.36161 2.57435 4.26167 2.49881 4.14993 2.44491C4.0382 2.39101 3.91687 2.35982 3.79299 2.35316C3.66911 2.3465 3.54514 2.36449 3.42826 2.40609C3.31138 2.44769 3.20392 2.51207 3.11211 2.59551C3.0203 2.67894 2.94596 2.77977 2.89341 2.89215C2.84085 3.00453 2.81112 3.12622 2.80594 3.25017C2.80076 3.37412 2.82024 3.49787 2.86324 3.61424C2.90624 3.73061 2.9719 3.83729 3.05643 3.92809L4.30643 5.307C1.61503 7.09919 0.44706 9.67106 0.39081 9.79216C0.337882 9.91215 0.310547 10.0419 0.310547 10.173C0.310547 10.3042 0.337882 10.4339 0.39081 10.5539C0.419716 10.6179 1.10409 12.1367 2.61659 13.6484C4.63847 15.6679 7.18769 16.7351 10.0002 16.7351C11.3671 16.7427 12.7217 16.4771 13.9846 15.9539L15.5541 17.6804C15.7222 17.861 15.9547 17.968 16.2011 17.9783C16.4476 17.9886 16.6882 17.9014 16.8708 17.7355C17.0534 17.5695 17.1632 17.3384 17.1764 17.092C17.1897 16.8457 17.1053 16.604 16.9416 16.4195L4.44393 2.66716ZM10.0002 14.8601C7.68847 14.8601 5.66659 14.0218 3.99159 12.3695C3.33273 11.7171 2.7658 10.978 2.30643 10.1726C2.71815 9.44528 3.7744 7.83669 5.58768 6.71247L12.626 14.4554C11.7772 14.7265 10.8912 14.863 10.0002 14.8601ZM19.6096 10.5539C19.5814 10.6172 18.9064 12.1164 17.4221 13.6132C17.3371 13.7076 17.2338 13.7837 17.1185 13.8369C17.0032 13.8902 16.8783 13.9194 16.7513 13.9229C16.6244 13.9264 16.4981 13.9041 16.38 13.8573C16.2619 13.8105 16.1546 13.7402 16.0646 13.6506C15.9745 13.5611 15.9036 13.4542 15.8561 13.3364C15.8086 13.2186 15.7855 13.0924 15.7882 12.9655C15.791 12.8385 15.8195 12.7134 15.8721 12.5978C15.9246 12.4822 16.0001 12.3785 16.0939 12.2929C16.7175 11.659 17.2554 10.9462 17.6939 10.1726C17.2348 9.36704 16.6679 8.62792 16.0088 7.97575C14.333 6.32341 12.3119 5.48513 10.0002 5.48513C9.73847 5.48513 9.47675 5.49606 9.21894 5.51794C9.0947 5.53125 8.96905 5.51959 8.84938 5.48364C8.72971 5.4477 8.61844 5.3882 8.52209 5.30863C8.42575 5.22906 8.34628 5.13104 8.28837 5.02033C8.23045 4.90961 8.19525 4.78843 8.18483 4.66392C8.17442 4.5394 8.189 4.41406 8.22772 4.29526C8.26644 4.17646 8.32851 4.0666 8.4103 3.97214C8.49208 3.87767 8.59193 3.80051 8.70396 3.74518C8.816 3.68986 8.93796 3.65748 9.06269 3.64997C9.36972 3.62341 9.68769 3.61013 10.0002 3.61013C12.8127 3.61013 15.3619 4.67809 17.3822 6.69762C18.8939 8.20934 19.5783 9.72887 19.6072 9.79216C19.6605 9.91199 19.6882 10.0416 19.6887 10.1728C19.6891 10.3039 19.6621 10.4337 19.6096 10.5539Z"
                            fill="#344054"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-white font-host text-base font-medium leading-[160%]">
                          Logging in...
                        </span>
                      </>
                    ) : (
                      <span className="text-white font-host text-base font-medium leading-[160%]">
                        Login Account
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Link
              to="/forgot-password"
              className="text-[#468FFD] text-center font-host text-base font-normal leading-[120%] hover:underline"
            >
              Forgot your Password?
            </Link>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE (Hidden on mobile) */}
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
