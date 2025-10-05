import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Explore", to: "/explore" },
  { label: "Pricing", to: "/pricing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-20 pt-6 sm:pt-8 lg:pt-7">
      <nav className="relative mx-auto max-w-[1280px] flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4 rounded-full bg-white/10 backdrop-blur-sm h-[64px] sm:h-[72px] lg:h-[80px]">
        <Link to="/" className="flex items-center">
          <svg
            className="w-[100px] sm:w-[118px] lg:w-[128px] h-auto"
            viewBox="0 0 128 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8853_4881)">
              <path
                d="M50.0528 25.4919V30.3643H39.5781V5.47429H49.8737V10.3466H44.8155V16.3201H49.3761V21.1925H44.8155V25.4946H50.0528V25.4919Z"
                fill="#6346FA"
              />
              <path
                d="M64.1945 4.29947V30.3616H59.1362V29.1185C58.1751 30.2565 56.9639 30.8241 55.7527 30.8241C53.5092 30.8241 51.3711 28.7611 51.3711 24.459V17.2767C51.3711 12.9746 53.5092 10.8774 55.7527 10.8774C56.9639 10.8774 58.1751 11.4819 59.1362 12.6198V4.29947H64.1945ZM59.1362 17.4554C59.1362 16.2833 58.4595 15.6788 57.7828 15.6788C57.1061 15.6788 56.4294 16.2833 56.4294 17.4554V24.283C56.4294 25.4209 57.1061 26.0253 57.7828 26.0253C58.4595 26.0253 59.1362 25.4209 59.1362 24.283V17.4554Z"
                fill="#6346FA"
              />
              <path
                d="M66.0495 11.3768H71.1078V24.2831C71.1078 25.421 71.7845 26.0254 72.4612 26.0254C73.1379 26.0254 73.8147 25.421 73.8147 24.2831V11.3768H78.8729V30.3643H73.8147V28.8348C72.8878 30.1146 71.4633 30.861 70.073 30.861C68.0059 30.861 66.0469 29.2605 66.0469 25.5287V11.3768H66.0495Z"
                fill="#6346FA"
              />
              <path
                d="M86.1768 10.344V16.3175H90.7374V21.1899H86.1768V30.3643H80.9395V5.47429H91.2351V10.3466H86.1768V10.344Z"
                fill="#0AEFC9"
              />
              <path
                d="M92.4453 30.3616V4.29947H97.5036V30.3616H92.4453Z"
                fill="#0AEFC9"
              />
              <path
                d="M112.038 22.1148H104.273V24.2829C104.273 25.4208 104.95 26.0253 105.627 26.0253C106.303 26.0253 106.98 25.4208 106.98 24.2829V23.003H112.038V24.4616C112.038 28.7295 108.831 30.8608 105.627 30.8608C102.422 30.8608 99.2148 28.7269 99.2148 24.4616V17.2792C99.2148 12.9771 102.422 10.8432 105.627 10.8432C108.831 10.8432 112.038 12.9771 112.038 17.2792V22.1148ZM106.98 17.4553C106.98 16.2832 106.303 15.6787 105.627 15.6787C104.95 15.6787 104.273 16.2832 104.273 17.4553V18.5223H106.98V17.4553Z"
                fill="#0AEFC9"
              />
              <path
                d="M127.998 30.3617H122.94V25.3842C122.94 24.1385 121.837 23.4999 120.767 23.4999C119.698 23.4999 118.558 24.1385 118.558 25.3842V30.3617H113.5V25.2055C113.5 23.4999 114.427 21.9704 115.994 21.2582C114.996 20.1912 113.679 18.7695 113.679 16.9929V11.3742H118.737V16.6355C118.737 17.9521 119.735 18.6276 120.767 18.6276C121.8 18.6276 122.763 17.9521 122.763 16.6355V11.3742H127.822V16.9929C127.822 18.7695 126.502 20.1939 125.507 21.2582C127.145 21.9704 128.001 23.4631 128.001 25.2055V30.3617H127.998Z"
                fill="#0AEFC9"
              />
              <path
                d="M20.417 17.5815H22.7578C22.7578 20.2332 20.596 22.3934 17.9365 22.3934C15.277 22.3934 13.1152 20.2332 13.1152 17.5815H15.4561C15.4561 18.9455 16.5673 20.0571 17.9365 20.0571C19.3058 20.0571 20.417 18.9455 20.417 17.5815Z"
                fill="#6346FA"
              />
              <path
                d="M17.937 0C8.03111 0 0 8.01547 0 17.9021C0 27.7887 8.03111 35.8042 17.937 35.8042C27.8429 35.8042 35.874 27.7887 35.874 17.9021C35.874 8.01547 27.8429 0 17.937 0ZM28.1273 25.7126H22.1527C19.8618 25.7126 18.0028 27.568 18.0028 29.8543C18.0028 27.568 16.1465 25.7126 13.8556 25.7126H7.74672V9.7342H13.8556C16.1465 9.7342 18.0028 11.587 18.0028 13.876C18.0028 11.587 19.8618 9.7342 22.1527 9.7342H28.1273V25.7126Z"
                fill="#0AEFC9"
              />
            </g>
            <defs>
              <clipPath id="clip0_8853_4881">
                <rect width="128" height="35.874" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <div className="hidden lg:flex items-center justify-between gap-1 flex-1 max-w-[338px] mx-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-2.5 py-2.5 text-white font-host text-xs font-normal hover:opacity-80 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3.5">
          <Link
            to="/login"
            className="hidden sm:flex h-[40px] sm:h-[44px] lg:h-[48px] px-3 sm:px-4 items-center justify-center gap-2 rounded-full border border-brand-purple hover:bg-brand-purple/10 transition-colors"
          >
            <span className="text-brand-cyan font-host text-sm sm:text-base font-medium">
              Sign In
            </span>
          </Link>
          <Link
            to="/login"
            className="flex h-[40px] sm:h-[44px] lg:h-[48px] px-3 sm:px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
          >
            <span className="text-white font-host text-sm sm:text-base font-medium">
              Get Started
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="flex h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 17H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full pt-4">
            <div className="px-4 sm:px-6">
              <div className="rounded-3xl border border-white/10 bg-brand-dark-800/95 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map(({ label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="px-3 py-2 rounded-full text-brand-light font-host text-base font-medium hover:bg-white/5 transition-colors text-left"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <Link
                  to="/login"
                  className="w-full h-12 px-4 flex items-center justify-center rounded-full border border-brand-purple text-brand-cyan font-host text-base font-medium hover:bg-brand-purple/10 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="w-full h-12 px-4 flex items-center justify-center rounded-full bg-brand-purple text-white font-host text-base font-medium hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
