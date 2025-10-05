import { Link, useNavigate } from "react-router-dom";

export default function SignupVerify() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup-success");
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
          to="/signup"
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

        <div className="relative w-full max-w-[449px] bg-white rounded-3xl border border-[#E7E8E9] p-6 flex flex-col items-center justify-between min-h-[495px]">
          <div className="flex items-center justify-center w-[146px] h-[46px]">
            <svg
              className="w-[128px] h-auto"
              viewBox="0 0 129 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8859_1009)">
                <path
                  d="M50.5538 25.4918V30.3641H40.0791V5.47412H50.3747V10.3465H45.3164V16.32H49.8771V21.1923H45.3164V25.4944H50.5538V25.4918Z"
                  fill="#6346FA"
                />
                <path
                  d="M64.6955 4.29932V30.3614H59.6372V29.1184C58.6761 30.2563 57.4649 30.824 56.2536 30.824C54.0102 30.824 51.8721 28.761 51.8721 24.4589V17.2765C51.8721 12.9744 54.0102 10.8773 56.2536 10.8773C57.4649 10.8773 58.6761 11.4817 59.6372 12.6196V4.29932H64.6955ZM59.6372 17.4552C59.6372 16.2831 58.9605 15.6787 58.2838 15.6787C57.6071 15.6787 56.9303 16.2831 56.9303 17.4552V24.2828C56.9303 25.4207 57.6071 26.0252 58.2838 26.0252C58.9605 26.0252 59.6372 25.4207 59.6372 24.2828V17.4552Z"
                  fill="#6346FA"
                />
                <path
                  d="M66.5495 11.377H71.6078V24.2832C71.6078 25.4211 72.2845 26.0256 72.9612 26.0256C73.6379 26.0256 74.3147 25.4211 74.3147 24.2832V11.377H79.3729V30.3644H74.3147V28.8349C73.3878 30.1148 71.9633 30.8611 70.573 30.8611C68.5059 30.8611 66.5469 29.2607 66.5469 25.5289V11.377H66.5495Z"
                  fill="#6346FA"
                />
                <path
                  d="M86.6778 10.3438V16.3173H91.2384V21.1897H86.6778V30.3641H81.4404V5.47412H91.736V10.3465H86.6778V10.3438Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M92.9463 30.3614V4.29932H98.0046V30.3614H92.9463Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M112.54 22.1149H104.775V24.283C104.775 25.4209 105.452 26.0254 106.129 26.0254C106.805 26.0254 107.482 25.4209 107.482 24.283V23.0031H112.54V24.4617C112.54 28.7296 109.333 30.8609 106.129 30.8609C102.924 30.8609 99.7168 28.727 99.7168 24.4617V17.2793C99.7168 12.9772 102.924 10.8433 106.129 10.8433C109.333 10.8433 112.54 12.9772 112.54 17.2793V22.1149ZM107.482 17.4554C107.482 16.2833 106.805 15.6788 106.129 15.6788C105.452 15.6788 104.775 16.2833 104.775 17.4554V18.5223H107.482V17.4554Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M128.5 30.3615H123.442V25.384C123.442 24.1383 122.339 23.4997 121.269 23.4997C120.2 23.4997 119.06 24.1383 119.06 25.384V30.3615H114.002V25.2053C114.002 23.4997 114.929 21.9702 116.496 21.258C115.498 20.191 114.181 18.7693 114.181 16.9927V11.374H119.239V16.6353C119.239 17.952 120.237 18.6274 121.269 18.6274C122.302 18.6274 123.265 17.952 123.265 16.6353V11.374H128.324V16.9927C128.324 18.7693 127.004 20.1937 126.009 21.258C127.647 21.9702 128.503 23.4629 128.503 25.2053V30.3615H128.5Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.917 17.5815H23.2578C23.2578 20.2332 21.096 22.3935 18.4365 22.3935C15.777 22.3935 13.6152 20.2332 13.6152 17.5815H15.9561C15.9561 18.9455 17.0673 20.0571 18.4365 20.0571C19.8058 20.0571 20.917 18.9455 20.917 17.5815Z"
                  fill="#6346FA"
                />
                <path
                  d="M18.437 0C8.53111 0 0.5 8.01547 0.5 17.9021C0.5 27.7887 8.53111 35.8042 18.437 35.8042C28.3429 35.8042 36.374 27.7887 36.374 17.9021C36.374 8.01547 28.3429 0 18.437 0ZM28.6273 25.7126H22.6527C20.3618 25.7126 18.5028 27.568 18.5028 29.8543C18.5028 27.568 16.6465 25.7126 14.3556 25.7126H8.24672V9.7342H14.3556C16.6465 9.7342 18.5028 11.587 18.5028 13.876C18.5028 11.587 20.3618 9.7342 22.6527 9.7342H28.6273V25.7126Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8859_1009">
                  <rect
                    width="128"
                    height="35.874"
                    fill="white"
                    transform="translate(0.5)"
                  />
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
                      htmlFor="otp"
                      className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                    >
                      One-Time Password
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1663 8.67855V7.01188C14.1663 4.7107 12.3009 2.84521 9.99967 2.84521C7.69849 2.84521 5.83301 4.71069 5.83301 7.01188V8.67855M9.99967 12.4285V14.0952M7.33301 17.8452H12.6663C14.0665 17.8452 14.7665 17.8452 15.3013 17.5727C15.7717 17.333 16.1542 16.9506 16.3939 16.4802C16.6663 15.9454 16.6663 15.2453 16.6663 13.8452V12.6785C16.6663 11.2784 16.6663 10.5784 16.3939 10.0436C16.1542 9.57317 15.7717 9.19072 15.3013 8.95103C14.7665 8.67855 14.0665 8.67855 12.6663 8.67855H7.33301C5.93288 8.67855 5.23281 8.67855 4.69803 8.95103C4.22763 9.19072 3.84517 9.57317 3.60549 10.0436C3.33301 10.5784 3.33301 11.2784 3.33301 12.6785V13.8452C3.33301 15.2453 3.33301 15.9454 3.60549 16.4802C3.84517 16.9506 4.22763 17.333 4.69803 17.5727C5.23281 17.8452 5.93288 17.8452 7.33301 17.8452Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="otp"
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
                  Verify Account
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
