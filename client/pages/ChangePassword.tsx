import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate("/password-changed");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-purple p-6 font-host">
      <div className="w-full max-w-[446px] bg-white rounded-3xl border border-[#E7E8E9] p-6 flex flex-col items-center gap-12">
        <div className="flex items-center justify-center w-[146px] h-[46px]">
          <svg
            className="w-[128px] h-auto"
            viewBox="0 0 128 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8859_924)">
              <path
                d="M50.0538 25.6646V30.537H39.5791V5.64697H49.8747V10.5193H44.8164V16.4928H49.3771V21.3652H44.8164V25.6673H50.0538V25.6646Z"
                fill="#6346FA"
              />
              <path
                d="M64.1955 4.47217V30.5343H59.1372V29.2912C58.1761 30.4292 56.9649 30.9968 55.7536 30.9968C53.5102 30.9968 51.3721 28.9338 51.3721 24.6317V17.4493C51.3721 13.1473 53.5102 11.0501 55.7536 11.0501C56.9649 11.0501 58.1761 11.6546 59.1372 12.7925V4.47217H64.1955ZM59.1372 17.6281C59.1372 16.456 58.4605 15.8515 57.7838 15.8515C57.1071 15.8515 56.4303 16.456 56.4303 17.6281V24.4557C56.4303 25.5936 57.1071 26.198 57.7838 26.198C58.4605 26.198 59.1372 25.5936 59.1372 24.4557V17.6281Z"
                fill="#6346FA"
              />
              <path
                d="M66.0495 11.5496H71.1078V24.4558C71.1078 25.5937 71.7845 26.1982 72.4612 26.1982C73.1379 26.1982 73.8147 25.5937 73.8147 24.4558V11.5496H78.8729V30.537H73.8147V29.0075C72.8878 30.2874 71.4633 31.0337 70.073 31.0337C68.0059 31.0337 66.0469 29.4333 66.0469 25.7015V11.5496H66.0495Z"
                fill="#6346FA"
              />
              <path
                d="M86.1778 10.5167V16.4902H90.7384V21.3626H86.1778V30.537H80.9404V5.64697H91.236V10.5193H86.1778V10.5167Z"
                fill="#0AEFC9"
              />
              <path
                d="M92.4463 30.5343V4.47217H97.5046V30.5343H92.4463Z"
                fill="#0AEFC9"
              />
              <path
                d="M112.04 22.2875H104.275V24.4556C104.275 25.5935 104.952 26.198 105.629 26.198C106.305 26.198 106.982 25.5935 106.982 24.4556V23.1757H112.04V24.6343C112.04 28.9022 108.833 31.0335 105.629 31.0335C102.424 31.0335 99.2168 28.8996 99.2168 24.6343V17.4519C99.2168 13.1498 102.424 11.0159 105.629 11.0159C108.833 11.0159 112.04 13.1498 112.04 17.4519V22.2875ZM106.982 17.628C106.982 16.4559 106.305 15.8514 105.629 15.8514C104.952 15.8514 104.275 16.4559 104.275 17.628V18.695H106.982V17.628Z"
                fill="#0AEFC9"
              />
              <path
                d="M128 30.5343H122.942V25.5569C122.942 24.3112 121.839 23.6726 120.769 23.6726C119.7 23.6726 118.56 24.3112 118.56 25.5569V30.5343H113.502V25.3782C113.502 23.6726 114.429 22.1431 115.996 21.4309C114.998 20.3639 113.681 18.9421 113.681 17.1656V11.5469H118.739V16.8082C118.739 18.1248 119.737 18.8002 120.769 18.8002C121.802 18.8002 122.765 18.1248 122.765 16.8082V11.5469H127.824V17.1656C127.824 18.9421 126.504 20.3665 125.509 21.4309C127.147 22.1431 128.003 23.6358 128.003 25.3782V30.5343H128Z"
                fill="#0AEFC9"
              />
              <path
                d="M20.417 17.7544H22.7578C22.7578 20.4061 20.596 22.5663 17.9365 22.5663C15.277 22.5663 13.1152 20.4061 13.1152 17.7544H15.4561C15.4561 19.1183 16.5673 20.23 17.9365 20.23C19.3058 20.23 20.417 19.1183 20.417 17.7544Z"
                fill="#6346FA"
              />
              <path
                d="M17.937 0.172852C8.03111 0.172852 0 8.18832 0 18.0749C0 27.9616 8.03111 35.977 17.937 35.977C27.8429 35.977 35.874 27.9616 35.874 18.0749C35.874 8.18832 27.8429 0.172852 17.937 0.172852ZM28.1273 25.8854H22.1527C19.8618 25.8854 18.0028 27.7408 18.0028 30.0272C18.0028 27.7408 16.1465 25.8854 13.8556 25.8854H7.74672V9.90705H13.8556C16.1465 9.90705 18.0028 11.7598 18.0028 14.0488C18.0028 11.7598 19.8618 9.90705 22.1527 9.90705H28.1273V25.8854Z"
                fill="#0AEFC9"
              />
            </g>
            <defs>
              <clipPath id="clip0_8859_924">
                <rect
                  width="128"
                  height="35.874"
                  fill="white"
                  transform="translate(0 0.172852)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h1 className="text-black font-host text-2xl font-semibold leading-[120%]">
                  Change Password
                </h1>
                <p className="text-[#838794] font-host text-base font-normal leading-[120%]">
                  Create a secure password for your account
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="newPassword"
                      className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                    >
                      New Password
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
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
                      <input
                        id="newPassword"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter 6-digit codecodes"
                        className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="confirmPassword"
                        className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                      >
                        Confirm Password
                      </label>
                      <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
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
                        <input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Enter 6-digit codecodes"
                          className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start content-start gap-1 flex-wrap">
                    <div
                      className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                        hasMinLength
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                        8 Characters
                      </span>
                    </div>
                    <div
                      className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                        hasUppercase
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                        Uppercase
                      </span>
                    </div>
                    <div
                      className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                        hasLowercase
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                        Lowercase
                      </span>
                    </div>
                    <div
                      className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                        hasNumber
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                        A Number
                      </span>
                    </div>
                    <div
                      className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                        hasSpecialChar
                          ? "border-green-500 bg-green-50"
                          : "border-[#E1E1E1] bg-[#F9FAFB]"
                      }`}
                    >
                      <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                        Special Character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex h-12 px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
            >
              <span className="text-white font-host text-base font-medium leading-[160%]">
                Login Account
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
