// client/pages/ChangePassword.tsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get from state or localStorage
  const email = location.state?.email || localStorage.getItem("temp_reset_email") || "";
  const resetToken = location.state?.reset_token || localStorage.getItem("temp_reset_token") || "";

  // Auto-expire temp data after 10 minutes
  useEffect(() => {
    const checkExpiry = () => {
      const savedTime = localStorage.getItem("temp_reset_time");
      if (savedTime) {
        const elapsed = Date.now() - parseInt(savedTime);
        if (elapsed > 10 * 60 * 1000) {
          localStorage.removeItem("temp_reset_email");
          localStorage.removeItem("temp_reset_otp");
          localStorage.removeItem("temp_reset_time");
          navigate("/forgot-password", { replace: true });
        }
      }
    };

    checkExpiry();
    const interval = setInterval(checkExpiry, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  // Redirect if missing data
  useEffect(() => {
    if (!email || !resetToken) {
      navigate("/forgot-password", { replace: true });
    }
  }, [email, resetToken, navigate]);

  // Password strength
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isStrong = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isStrong) {
      setError("Password must meet all strength requirements.");
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/password/reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            email: email.trim(),
            reset_token: resetToken,
            password,
            confirm_password: confirmPassword,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSuccess("Password changed successfully! Redirecting...");

        localStorage.removeItem("temp_reset_email");
        localStorage.removeItem("temp_reset_otp");
        localStorage.removeItem("temp_reset_time");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1500);
      } else {
        if (response.status === 401) {
          localStorage.removeItem("temp_reset_email");
          localStorage.removeItem("temp_reset_otp");
          localStorage.removeItem("temp_reset_time");
          setError("Session expired. Please request a new code.");
          setTimeout(() => navigate("/forgot-password", { replace: true }), 2000);
          return;
        }

        const msg = data.message || "Failed to change password.";
        const lower = msg.toLowerCase();

        if (lower.includes("not strong enough")) {
          setError("Password is not strong enough.");
        } else if (lower.includes("longer than or equal to 8")) {
          setError("Password must be at least 8 characters.");
        } else if (lower.includes("invalid") || lower.includes("expired")) {
          setError("Invalid or expired code. Please restart.");
        } else {
          setError(msg);
        }
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-host overflow-x-hidden">
      {/* LEFT SIDE - FORM */}
      <div className="w-full lg:w-1/2 bg-brand-dark relative flex items-center justify-center p-4 sm:p-6 lg:p-12">
        {/* REMOVED BLOB — caused overflow on mobile */}
        {/* <div className="absolute ... w-[793px] ..."></div> */}

        {/* BACK BUTTON - Safe on mobile */}
        <Link
          to="/forgot-password"
          className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-2 rounded bg-white hover:bg-gray-50 transition-colors z-10 text-sm"
        >
          <svg
            className="w-5 h-5"
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
          <span className="text-black font-host font-normal">Go Back</span>
        </Link>

        <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl border border-[#E7E8E9] p-5 sm:p-6 flex flex-col items-center gap-10">
          {/* LOGO - Responsive */}
          <div className="w-full max-w-[140px] mx-auto">
            <svg
              className="w-full h-auto"
              viewBox="0 0 128 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8859_924)">
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
                <path d="M92.4463 30.5342V4.47205H97.5046V30.5342H92.4463Z" fill="#0AEFC9" />
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
                <clipPath id="clip0_8859_924">
                  <rect width="128" height="35.874" fill="white" transform="translate(0 0.172852)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-host text-2xl font-semibold leading-[120%]">
                    Change Password
                  </h1>
                  <p className="text-[#838794] font-host text-base font-normal leading-[120%]">
                    Create a secure password to log in
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <p className="text-red-800 text-sm font-medium">{error}</p>
                    </div>
                  )}
                  {success && (
                    <div className="px-4 py-3 rounded-lg bg-green-50 border border-green-200">
                      <p className="text-green-800 text-sm font-medium">{success}</p>
                    </div>
                  )}

                  {/* NEW PASSWORD */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[#101828] font-host text-sm font-medium leading-[160%]">
                      New Password
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1663 8.50618V6.83952C14.1663 4.53833 12.3009 2.67285 9.99967 2.67285C7.69849 2.67285 5.83301 4.53833 5.83301 6.83952V8.50618M9.99967 12.2562V13.9229M7.33301 17.6729H12.6663C14.0665 17.6729 14.7665 17.6729 15.3013 17.4004C15.7717 17.1607 16.1542 16.7782 16.3939 16.3078C16.6663 15.773 16.6663 15.073 16.6663 13.6729V12.5062C16.6663 11.1061 16.6663 10.406 16.3939 9.87121C16.1542 9.4008 15.7717 9.01835 15.3013 8.77867C14.7665 8.50618 14.0665 8.50618 12.6663 8.50618H7.33301C5.93288 8.50618 5.23281 8.50618 4.69803 8.77867C4.22763 9.01835 3.84517 9.4008 3.60549 9.87121C3.33301 10.406 3.33301 11.1061 3.33301 12.5062V13.6729C3.33301 15.073 3.33301 15.773 3.60549 16.3078C3.84517 16.7782 4.22763 17.1607 4.69803 17.4004C5.23281 17.6729 5.93288 17.6729 7.33301 17.6729Z"
                            stroke="#00000A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full pl-10 pr-12 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)] text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-[#98A2B3] hover:text-[#00000A] transition-colors"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 10C2.5 10 5.5 4.16667 10 4.16667C14.5 4.16667 17.5 10 17.5 10C17.5 10 14.5 15.8333 10 15.8333C5.5 15.8333 2.5 10 2.5 10Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 10C2.5 10 5.5 4.16667 10 4.16667C14.5 4.16667 17.5 10 17.5 10C17.5 10 14.5 15.8333 10 15.8333C5.5 15.8333 2.5 10 2.5 10Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.5 17.5L17.5 2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[#101828] font-host text-sm font-medium leading-[160%]">
                      Confirm Password
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1663 8.50618V6.83952C14.1663 4.53833 12.3009 2.67285 9.99967 2.67285C7.69849 2.67285 5.83301 4.53833 5.83301 6.83952V8.50618M9.99967 12.2562V13.9229M7.33301 17.6729H12.6663C14.0665 17.6729 14.7665 17.6729 15.3013 17.4004C15.7717 17.1607 16.1542 16.7782 16.3939 16.3078C16.6663 15.773 16.6663 15.073 16.6663 13.6729V12.5062C16.6663 11.1061 16.6663 10.406 16.3939 9.87121C16.1542 9.4008 15.7717 9.01835 15.3013 8.77867C14.7665 8.50618 14.0665 8.50618 12.6663 8.50618H7.33301C5.93288 8.50618 5.23281 8.50618 4.69803 8.77867C4.22763 9.01835 3.84517 9.4008 3.60549 9.87121C3.33301 10.406 3.33301 11.1061 3.33301 12.5062V13.6729C3.33301 15.073 3.33301 15.773 3.60549 16.3078C3.84517 16.7782 4.22763 17.1607 4.69803 17.4004C5.23281 17.6729 5.93288 17.6729 7.33301 17.6729Z"
                            stroke="#00000A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="w-full pl-10 pr-12 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)] text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 text-[#98A2B3] hover:text-[#00000A] transition-colors"
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 10C2.5 10 5.5 4.16667 10 4.16667C14.5 4.16667 17.5 10 17.5 10C17.5 10 14.5 15.8333 10 15.8333C5.5 15.8333 2.5 10 2.5 10Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 10C2.5 10 5.5 4.16667 10 4.16667C14.5 4.16667 17.5 10 17.5 10C17.5 10 14.5 15.8333 10 15.8333C5.5 15.8333 2.5 10 2.5 10Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.5 17.5L17.5 2.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* STRENGTH INDICATORS */}
                  <div className="flex flex-wrap gap-1">
                    <div
                      className={`px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
                        hasMinLength
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      8 Characters
                    </div>
                    <div
                      className={`px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
                        hasUppercase
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      Uppercase
                    </div>
                    <div
                      className={`px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
                        hasLowercase
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      Lowercase
                    </div>
                    <div
                      className={`px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
                        hasNumber
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      A Number
                    </div>
                    <div
                      className={`px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
                        hasSpecialChar
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      Special Char
                    </div>
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON - Full Width */}
              <button
                type="submit"
                disabled={isLoading || !isStrong || !passwordsMatch}
                className="h-12 w-full rounded-full bg-brand-purple hover:bg-brand-purple/90 text-white font-host text-base font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Changing...</span>
                  </>
                ) : (
                  "Change Password"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE - Hidden on mobile/tablet */}
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
