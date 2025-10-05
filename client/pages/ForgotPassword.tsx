import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset-password-verify");
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
              viewBox="0 0 128 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8859_66)">
                <path
                  d="M50.0538 25.9918V30.8641H39.5791V5.97412H49.8747V10.8465H44.8164V16.82H49.3771V21.6923H44.8164V25.9944H50.0538V25.9918Z"
                  fill="#6346FA"
                />
                <path
                  d="M64.1955 4.79932V30.8614H59.1372V29.6184C58.1761 30.7563 56.9649 31.324 55.7536 31.324C53.5102 31.324 51.3721 29.261 51.3721 24.9589V17.7765C51.3721 13.4744 53.5102 11.3773 55.7536 11.3773C56.9649 11.3773 58.1761 11.9817 59.1372 13.1196V4.79932H64.1955ZM59.1372 17.9552C59.1372 16.7831 58.4605 16.1787 57.7838 16.1787C57.1071 16.1787 56.4303 16.7831 56.4303 17.9552V24.7828C56.4303 25.9207 57.1071 26.5252 57.7838 26.5252C58.4605 26.5252 59.1372 25.9207 59.1372 24.7828V17.9552Z"
                  fill="#6346FA"
                />
                <path
                  d="M66.0495 11.8767H71.1078V24.7829C71.1078 25.9209 71.7845 26.5253 72.4612 26.5253C73.1379 26.5253 73.8147 25.9209 73.8147 24.7829V11.8767H78.8729V30.8642H73.8147V29.3347C72.8878 30.6145 71.4633 31.3609 70.073 31.3609C68.0059 31.3609 66.0469 29.7604 66.0469 26.0286V11.8767H66.0495Z"
                  fill="#6346FA"
                />
                <path
                  d="M86.1778 10.8438V16.8173H90.7384V21.6897H86.1778V30.8641H80.9404V5.97412H91.236V10.8465H86.1778V10.8438Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M92.4463 30.8614V4.79932H97.5046V30.8614H92.4463Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M112.04 22.6146H104.275V24.7827C104.275 25.9207 104.952 26.5251 105.629 26.5251C106.305 26.5251 106.982 25.9207 106.982 24.7827V23.5029H112.04V24.9614C112.04 29.2293 108.833 31.3607 105.629 31.3607C102.424 31.3607 99.2168 29.2267 99.2168 24.9614V17.779C99.2168 13.477 102.424 11.343 105.629 11.343C108.833 11.343 112.04 13.477 112.04 17.779V22.6146ZM106.982 17.9551C106.982 16.783 106.305 16.1786 105.629 16.1786C104.952 16.1786 104.275 16.783 104.275 17.9551V19.0221H106.982V17.9551Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M128 30.8615H122.942V25.884C122.942 24.6383 121.839 23.9997 120.769 23.9997C119.7 23.9997 118.56 24.6383 118.56 25.884V30.8615H113.502V25.7053C113.502 23.9997 114.429 22.4702 115.996 21.758C114.998 20.691 113.681 19.2693 113.681 17.4927V11.874H118.739V17.1353C118.739 18.452 119.737 19.1274 120.769 19.1274C121.802 19.1274 122.765 18.452 122.765 17.1353V11.874H127.824V17.4927C127.824 19.2693 126.504 20.6937 125.509 21.758C127.147 22.4702 128.003 23.9629 128.003 25.7053V30.8615H128Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.417 18.0815H22.7578C22.7578 20.7332 20.596 22.8935 17.9365 22.8935C15.277 22.8935 13.1152 20.7332 13.1152 18.0815H15.4561C15.4561 19.4455 16.5673 20.5571 17.9365 20.5571C19.3058 20.5571 20.417 19.4455 20.417 18.0815Z"
                  fill="#6346FA"
                />
                <path
                  d="M17.937 0.5C8.03111 0.5 0 8.51547 0 18.4021C0 28.2887 8.03111 36.3042 17.937 36.3042C27.8429 36.3042 35.874 28.2887 35.874 18.4021C35.874 8.51547 27.8429 0.5 17.937 0.5ZM28.1273 26.2126H22.1527C19.8618 26.2126 18.0028 28.068 18.0028 30.3543C18.0028 28.068 16.1465 26.2126 13.8556 26.2126H7.74672V10.2342H13.8556C16.1465 10.2342 18.0028 12.087 18.0028 14.376C18.0028 12.087 19.8618 10.2342 22.1527 10.2342H28.1273V26.2126Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8859_66">
                  <rect
                    width="128"
                    height="35.874"
                    fill="white"
                    transform="translate(0 0.5)"
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
                    Forgot Password
                  </h1>
                  <p className="text-[#696E7E] font-host text-base font-normal leading-[120%]">
                    Input the email you on this platform
                  </p>
                </div>

                <div className="flex flex-col gap-4">
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
                          d="M1.66699 6.33325L8.47109 11.0961C9.02207 11.4818 9.29756 11.6746 9.59721 11.7493C9.8619 11.8153 10.1387 11.8153 10.4034 11.7493C10.7031 11.6746 10.9786 11.4818 11.5296 11.0961L18.3337 6.33325M5.66699 17.1666H14.3337C15.7338 17.1666 16.4339 17.1666 16.9686 16.8941C17.439 16.6544 17.8215 16.272 18.0612 15.8016C18.3337 15.2668 18.3337 14.5667 18.3337 13.1666V7.83325C18.3337 6.43312 18.3337 5.73306 18.0612 5.19828C17.8215 4.72787 17.439 4.34542 16.9686 4.10574C16.4339 3.83325 15.7338 3.83325 14.3337 3.83325H5.66699C4.26686 3.83325 3.5668 3.83325 3.03202 4.10574C2.56161 4.34542 2.17916 4.72787 1.93948 5.19828C1.66699 5.73306 1.66699 6.43312 1.66699 7.83325V13.1666C1.66699 14.5667 1.66699 15.2668 1.93948 15.8016C2.17916 16.272 2.56161 16.6544 3.03202 16.8941C3.5668 17.1666 4.26686 17.1666 5.66699 17.1666Z"
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
                        className="flex-1 text-[#98A2B3] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
                  >
                    <span className="text-white font-host text-sm font-medium leading-[20px] tracking-[-0.084px]">
                      Verify Account
                    </span>
                  </button>
                </div>
              </div>
            </div>
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
