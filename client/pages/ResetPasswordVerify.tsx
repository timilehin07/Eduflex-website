import { Link, useNavigate } from "react-router-dom";

export default function ResetPasswordVerify() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/change-password");
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
          to="/forgot-password"
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
              <g clipPath="url(#clip0_8859_892)">
                <path
                  d="M50.0538 25.4918V30.3641H39.5791V5.47412H49.8747V10.3465H44.8164V16.32H49.3771V21.1923H44.8164V25.4944H50.0538V25.4918Z"
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
                  d="M86.1778 10.3438V16.3173H90.7384V21.1897H86.1778V30.3641H80.9404V5.47412H91.236V10.3465H86.1778V10.3438Z"
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
                  d="M128 30.3615H122.942V25.384C122.942 24.1383 121.839 23.4997 120.769 23.4997C119.7 23.4997 118.56 24.1383 118.56 25.384V30.3615H113.502V25.2053C113.502 23.4997 114.429 21.9702 115.996 21.258C114.998 20.191 113.681 18.7693 113.681 16.9927V11.374H118.739V16.6353C118.739 17.952 119.737 18.6274 120.769 18.6274C121.802 18.6274 122.765 17.952 122.765 16.6353V11.374H127.824V16.9927C127.824 18.7693 126.504 20.1937 125.509 21.258C127.147 21.9702 128.003 23.4629 128.003 25.2053V30.3615H128Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.417 17.5815H22.7578C22.7578 20.2332 20.596 22.3935 17.9365 22.3935C15.277 22.3935 13.1152 20.2332 13.1152 17.5815H15.4561C15.4561 18.9455 16.5673 20.0571 17.9365 20.0571C19.3058 20.0571 20.417 18.9455 20.417 17.5815Z"
                  fill="#6346FA"
                />
                <path
                  d="M17.937 0C8.03111 0 0 8.01547 0 17.9021C0 27.7887 8.03111 35.8042 17.937 35.8042C27.8429 35.8042 35.874 27.7887 35.874 17.9021C35.874 8.01547 27.8429 0 17.937 0ZM28.1273 25.7126H22.1527C19.8618 25.7126 18.0028 27.568 18.0028 29.8543C18.0028 27.568 16.1465 25.7126 13.8556 25.7126H7.74672V9.7342H13.8556C16.1465 9.7342 18.0028 11.587 18.0028 13.876C18.0028 11.587 19.8618 9.7342 22.1527 9.7342H28.1273V25.7126Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8859_892">
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
                    Enter 6-digit code sent to the email ololo**@gmail.com
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="otp1"
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
                          d="M14.1663 8.33333V6.66667C14.1663 4.36548 12.3009 2.5 9.99967 2.5C7.69849 2.5 5.83301 4.36548 5.83301 6.66667V8.33333M9.99967 12.0833V13.75M7.33301 17.5H12.6663C14.0665 17.5 14.7665 17.5 15.3013 17.2275C15.7717 16.9878 16.1542 16.6054 16.3939 16.135C16.6663 15.6002 16.6663 14.9001 16.6663 13.5V12.3333C16.6663 10.9332 16.6663 10.2331 16.3939 9.69836C16.1542 9.22795 15.7717 8.8455 15.3013 8.60582C14.7665 8.33333 14.0665 8.33333 12.6663 8.33333H7.33301C5.93288 8.33333 5.23281 8.33333 4.69803 8.60582C4.22763 8.8455 3.84517 9.22795 3.60549 9.69836C3.33301 10.2331 3.33301 10.9332 3.33301 12.3333V13.5C3.33301 14.9001 3.33301 15.6002 3.60549 16.135C3.84517 16.6054 4.22763 16.9878 4.69803 17.2275C5.23281 17.5 5.93288 17.5 7.33301 17.5Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="otp1"
                        type="text"
                        placeholder="Enter 6-digit codecodes"
                        maxLength={6}
                        className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="otp2"
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
                          d="M14.1663 8.33333V6.66667C14.1663 4.36548 12.3009 2.5 9.99967 2.5C7.69849 2.5 5.83301 4.36548 5.83301 6.66667V8.33333M9.99967 12.0833V13.75M7.33301 17.5H12.6663C14.0665 17.5 14.7665 17.5 15.3013 17.2275C15.7717 16.9878 16.1542 16.6054 16.3939 16.135C16.6663 15.6002 16.6663 14.9001 16.6663 13.5V12.3333C16.6663 10.9332 16.6663 10.2331 16.3939 9.69836C16.1542 9.22795 15.7717 8.8455 15.3013 8.60582C14.7665 8.33333 14.0665 8.33333 12.6663 8.33333H7.33301C5.93288 8.33333 5.23281 8.33333 4.69803 8.60582C4.22763 8.8455 3.84517 9.22795 3.60549 9.69836C3.33301 10.2331 3.33301 10.9332 3.33301 12.3333V13.5C3.33301 14.9001 3.33301 15.6002 3.60549 16.135C3.84517 16.6054 4.22763 16.9878 4.69803 17.2275C5.23281 17.5 5.93288 17.5 7.33301 17.5Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="otp2"
                        type="text"
                        placeholder="Enter 6-digit codecodes"
                        maxLength={6}
                        className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                      />
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

            <button
              type="button"
              className="text-[#468FFD] text-center font-host text-base font-normal leading-[120%] hover:underline"
            >
              Resend Code
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
