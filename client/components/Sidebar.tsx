import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  currentPage?: "dashboard" | "my-courses" | "explore" | "settings";
}

type NavKey = NonNullable<SidebarProps["currentPage"]>;

const NAV_ITEMS: {
  key: NavKey;
  to: string;
  label: string;
  icon: JSX.Element;
}[] = [
  {
    key: "dashboard",
    to: "/dashboard",
    label: "Overview",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43 1.5H4.005C2.3625 1.5 1.5 2.3625 1.5 3.9975V5.4225C1.5 7.0575 2.3625 7.92 3.9975 7.92H5.4225C7.0575 7.92 7.92 7.0575 7.92 5.4225V3.9975C7.9275 2.3625 7.065 1.5 5.43 1.5Z"
          fill="currentColor"
        />
        <path
          d="M14.0026 1.5H12.5776C10.9426 1.5 10.0801 2.3625 10.0801 3.9975V5.4225C10.0801 7.0575 10.9426 7.92 12.5776 7.92H14.0026C15.6376 7.92 16.5001 7.0575 16.5001 5.4225V3.9975C16.5001 2.3625 15.6376 1.5 14.0026 1.5Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M14.0026 10.0725H12.5776C10.9426 10.0725 10.0801 10.935 10.0801 12.57V13.995C10.0801 15.63 10.9426 16.4925 12.5776 16.4925H14.0026C15.6376 16.4925 16.5001 15.63 16.5001 13.995V12.57C16.5001 10.935 15.6376 10.0725 14.0026 10.0725Z"
          fill="currentColor"
        />
        <path
          d="M5.43 10.0725H4.005C2.3625 10.0725 1.5 10.935 1.5 12.57V13.995C1.5 15.6375 2.3625 16.5 3.9975 16.5H5.4225C7.0575 16.5 7.92 15.6375 7.92 14.0025V12.5775C7.9275 10.935 7.065 10.0725 5.43 10.0725Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    key: "my-courses",
    to: "/my-courses",
    label: "My Courses",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3.975V15.9975C8.8725 15.9975 8.7375 15.975 8.6325 15.915L8.6025 15.9C7.1625 15.1125 4.65 14.2875 3.0225 14.07L2.805 14.04C2.085 13.95 1.5 13.275 1.5 12.555V3.495C1.5 2.6025 2.2275 1.9275 3.12 2.0025C4.695 2.13 7.08 2.925 8.415 3.7575L8.6025 3.87C8.715 3.9375 8.8575 3.975 9 3.975Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M16.5 3.50251V12.555C16.5 13.275 15.915 13.95 15.195 14.04L14.9475 14.07C13.3125 14.2875 10.7925 15.12 9.3525 15.915C9.255 15.975 9.135 15.9975 9 15.9975V3.97501C9.1425 3.97501 9.285 3.93751 9.3975 3.87001L9.525 3.78751C10.86 2.94751 13.2525 2.14501 14.8275 2.01001H14.8725C15.765 1.93501 16.5 2.60251 16.5 3.50251Z"
          fill="currentColor"
        />
        <path
          d="M5.8125 6.92999H4.125C3.8175 6.92999 3.5625 6.67499 3.5625 6.36749C3.5625 6.05999 3.8175 5.80499 4.125 5.80499H5.8125C6.12 5.80499 6.375 6.05999 6.375 6.36749C6.375 6.67499 6.12 6.92999 5.8125 6.92999Z"
          fill="currentColor"
        />
        <path
          d="M6.375 9.17999H4.125C3.8175 9.17999 3.5625 8.92499 3.5625 8.61749C3.5625 8.30999 3.8175 8.05499 4.125 8.05499H6.375C6.6825 8.05499 6.9375 8.30999 6.9375 8.61749C6.9375 8.92499 6.6825 9.17999 6.375 9.17999Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: "explore",
    to: "/explore",
    label: "Explore Courses",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.24969 15.0075C11.9818 15.0075 15.0072 11.9821 15.0072 8.24999C15.0072 4.51793 11.9818 1.49249 8.24969 1.49249C4.51762 1.49249 1.49219 4.51793 1.49219 8.24999C1.49219 11.9821 4.51762 15.0075 8.24969 15.0075Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M9.57793 6.2175C9.10543 6.0675 8.60293 6.1575 8.24293 6.435C7.87543 6.1575 7.38793 6.0675 6.91543 6.2175C5.89543 6.5475 5.57293 7.71 5.85793 8.595C6.29293 9.9525 7.72543 10.6575 8.24293 10.6575C8.74543 10.6575 10.2079 9.9375 10.6279 8.595C10.9204 7.71 10.5979 6.5475 9.57793 6.2175Z"
          fill="currentColor"
        />
        <path
          d="M16.492 14.2125C16.2445 13.755 15.7195 13.5 15.0145 13.5C14.482 13.5 14.0246 13.7175 13.7546 14.0925C13.4846 14.4675 13.4246 14.97 13.5896 15.4725C13.9121 16.4475 14.4745 16.665 14.782 16.7025C14.827 16.71 14.872 16.71 14.9245 16.71C15.2545 16.71 15.7645 16.5675 16.2595 15.825C16.657 15.2475 16.732 14.67 16.492 14.2125Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: "settings",
    to: "/settings",
    label: "Settings",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 9.66001V8.34001C1.5 7.56001 2.1375 6.91501 2.925 6.91501C4.2825 6.91501 4.8375 5.95501 4.155 4.77751C3.765 4.10251 3.9975 3.22501 4.68 2.83501L5.9775 2.09251C6.57 1.74001 7.335 1.95001 7.6875 2.54251L7.77 2.68501C8.445 3.86251 9.555 3.86251 10.2375 2.68501L10.32 2.54251C10.6725 1.95001 11.4375 1.74001 12.03 2.09251L13.3275 2.83501C14.01 3.22501 14.2425 4.10251 13.8525 4.77751C13.17 5.95501 13.725 6.91501 15.0825 6.91501C15.8625 6.91501 16.5075 7.55251 16.5075 8.34001V9.66001C16.5075 10.44 15.87 11.085 15.0825 11.085C13.725 11.085 13.17 12.045 13.8525 13.2225C14.2425 13.905 14.01 14.775 13.3275 15.165L12.03 15.9075C11.4375 16.26 10.6725 16.05 10.32 15.4575L10.2375 15.315C9.5625 14.1375 8.4525 14.1375 7.77 15.315L7.6875 15.4575C7.335 16.05 6.57 16.26 5.9775 15.9075L4.68 15.165C3.9975 14.775 3.765 13.8975 4.155 13.2225C4.8375 12.045 4.2825 11.085 2.925 11.085C2.1375 11.085 1.5 10.44 1.5 9.66001Z"
          fill="currentColor"
          opacity="0.4"
        />
        <path
          d="M9 11.4375C10.3462 11.4375 11.4375 10.3462 11.4375 9C11.4375 7.65381 10.3462 6.5625 9 6.5625C7.65381 6.5625 6.5625 7.65381 6.5625 9C6.5625 10.3462 7.65381 11.4375 9 11.4375Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function BrandLogo({ className }: { className?: string }) {
  const clipId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 143 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M55.919 28.4792V33.9225H44.2168V6.11572H55.7189V11.5591H50.0679V18.2326H55.1629V23.6759H50.0679V28.4821H55.919V28.4792Z"
          fill="#6346FA"
        />
        <path
          d="M71.7188 4.80322V33.9195H66.0677V32.5308C64.994 33.802 63.6408 34.4362 62.2876 34.4362C59.7813 34.4362 57.3926 32.1315 57.3926 27.3252V19.3012C57.3926 14.4949 59.7813 12.152 62.2876 12.152C63.6408 12.152 64.994 12.8273 66.0677 14.0986V4.80322H71.7188ZM66.0677 19.5008C66.0677 18.1914 65.3117 17.5161 64.5557 17.5161C63.7996 17.5161 63.0436 18.1914 63.0436 19.5008V27.1285C63.0436 28.3998 63.7996 29.0751 64.5557 29.0751C65.3117 29.0751 66.0677 28.3998 66.0677 27.1285V19.5008Z"
          fill="#6346FA"
        />
        <path
          d="M73.79 12.71H79.4411V27.1286C79.4411 28.3999 80.1971 29.0752 80.9531 29.0752C81.7092 29.0752 82.4652 28.3999 82.4652 27.1286V12.71H88.1162V33.9225H82.4652V32.2138C81.4297 33.6436 79.8382 34.4774 78.285 34.4774C75.9757 34.4774 73.7871 32.6894 73.7871 28.5203V12.71H73.79Z"
          fill="#6346FA"
        />
        <path
          d="M96.2769 11.5561V18.2296H101.372V23.673H96.2769V33.9225H90.4258V6.11572H101.928V11.5591H96.2769V11.5561Z"
          fill="#0AEFC9"
        />
        <path
          d="M103.28 33.9195V4.80322H108.931V33.9195H103.28Z"
          fill="#0AEFC9"
        />
        <path
          d="M125.17 24.7063H116.495V27.1285C116.495 28.3997 117.251 29.075 118.007 29.075C118.763 29.075 119.519 28.3997 119.519 27.1285V25.6986H125.17V27.3281C125.17 32.0962 121.587 34.4772 118.007 34.4772C114.427 34.4772 110.844 32.0932 110.844 27.3281V19.304C110.844 14.4978 114.427 12.1138 118.007 12.1138C121.587 12.1138 125.17 14.4978 125.17 19.304V24.7063ZM119.519 19.5007C119.519 18.1913 118.763 17.516 118.007 17.516C117.251 17.516 116.495 18.1913 116.495 19.5007V20.6927H119.519V19.5007Z"
          fill="#0AEFC9"
        />
        <path
          d="M143 33.9196H137.349V28.3588C137.349 26.9672 136.116 26.2537 134.922 26.2537C133.728 26.2537 132.454 26.9672 132.454 28.3588V33.9196H126.803V28.1592C126.803 26.2537 127.838 24.545 129.589 23.7493C128.474 22.5573 127.003 20.9689 127.003 18.9842V12.707H132.654V18.5849C132.654 20.0558 133.769 20.8104 134.922 20.8104C136.075 20.8104 137.152 20.0558 137.152 18.5849V12.707H142.803V18.9842C142.803 20.9689 141.329 22.5602 140.217 23.7493C142.047 24.545 143.003 26.2126 143.003 28.1592V33.9196H143Z"
          fill="#0AEFC9"
        />
        <path
          d="M22.8097 19.6416H25.4249C25.4249 22.604 23.0098 25.0174 20.0386 25.0174C17.0675 25.0174 14.6523 22.604 14.6523 19.6416H17.2675C17.2675 21.1654 18.5089 22.4073 20.0386 22.4073C21.5683 22.4073 22.8097 21.1654 22.8097 19.6416Z"
          fill="#6346FA"
        />
        <path
          d="M20.039 0C8.97225 0 0 8.95479 0 20C0 31.0452 8.97225 40 20.039 40C31.1058 40 40.078 31.0452 40.078 20C40.078 8.95479 31.1058 0 20.039 0ZM31.4235 28.7258H24.7487C22.1894 28.7258 20.1125 30.7986 20.1125 33.3529C20.1125 30.7986 18.0386 28.7258 15.4793 28.7258H8.65454V10.8749H15.4793C18.0386 10.8749 20.1125 12.9448 20.1125 15.5021C20.1125 12.9448 22.1894 10.8749 24.7487 10.8749H31.4235V28.7258Z"
          fill="#0AEFC9"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="143" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8097 19.6416H25.4249C25.4249 22.604 23.0098 25.0174 20.0386 25.0174C17.0675 25.0174 14.6523 22.604 14.6523 19.6416H17.2675C17.2675 21.1654 18.5089 22.4073 20.0386 22.4073C21.5683 22.4073 22.8097 21.1654 22.8097 19.6416Z"
        fill="#6346FA"
      />
      <path
        d="M20.039 0C8.97225 0 0 8.95479 0 20C0 31.0452 8.97225 40 20.039 40C31.1058 40 40.078 31.0452 40.078 20C40.078 8.95479 31.1058 0 20.039 0ZM31.4235 28.7258H24.7487C22.1894 28.7258 20.1125 30.7986 20.1125 33.3529C20.1125 30.7986 18.0386 28.7258 15.4793 28.7258H8.65454V10.8749H15.4793C18.0386 10.8749 20.1125 12.9448 20.1125 15.5021C20.1125 12.9448 22.1894 10.8749 24.7487 10.8749H31.4235V28.7258Z"
        fill="#0AEFC9"
      />
    </svg>
  );
}

export default function Sidebar({ currentPage }: SidebarProps) {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("sidebar-collapsed", String(isCollapsed));
  }, [isCollapsed]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const activeKey =
    currentPage ??
    NAV_ITEMS.find((item) => location.pathname.startsWith(item.to))?.key ??
    "dashboard";

  const toggleMobileSidebar = () => setIsMobileOpen((prev) => !prev);
  const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

  return (
    <>
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/60"
            onClick={toggleMobileSidebar}
          />
          <aside className="relative z-10 flex h-full w-[80%] max-w-[320px] flex-col gap-[68px] overflow-y-auto border-r border-[#454953] bg-[#101113] p-6 shadow-[0_16px_32px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <BrandLogo className="h-10 w-[143px]" />
              <button
                type="button"
                onClick={toggleMobileSidebar}
                className="rounded-full border border-[#454953] p-2 text-[#838794] transition-colors hover:border-white hover:text-white"
                aria-label="Close sidebar"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-[14px]">
              {NAV_ITEMS.map((item) => {
                const isActive = item.key === activeKey;
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-md px-4 py-[14px] text-base transition-colors ${
                      isActive
                        ? "rounded-full bg-[#593FE1] text-[#DFEBFB]"
                        : "text-[#838794] hover:bg-[#33363E]"
                    }`}
                    onClick={toggleMobileSidebar}
                  >
                    <span className="flex h-5 w-5 items-center justify-center text-current">
                      {item.icon}
                    </span>
                    <span className="font-normal">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      <aside
        className={`hidden lg:flex h-screen shrink-0 flex-col border-r border-[#454953] bg-[#101113] sticky top-0 overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "w-[96px] p-4" : "w-[253px] p-6"
        }`}
      >
        <div
          className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} w-full`}
        >
          {isCollapsed ? (
            <BrandMark className="h-10 w-10" />
          ) : (
            <BrandLogo className="h-10 w-[143px]" />
          )}
          <button
            type="button"
            onClick={toggleCollapsed}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#454953] text-[#838794] transition-colors hover:border-white hover:text-white"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={`h-5 w-5 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav
          className={`flex flex-col gap-[14px] w-full ${isCollapsed ? "mt-12" : "mt-[68px]"}`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <Link
                key={item.key}
                to={item.to}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center rounded-md py-[14px] text-base transition-colors ${
                  isCollapsed ? "justify-center px-0" : "gap-2 px-4"
                } ${
                  isActive
                    ? "rounded-full bg-[#593FE1] text-[#DFEBFB]"
                    : "text-[#838794] hover:bg-[#33363E]"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <span className="flex h-5 w-5 items-center justify-center text-current">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-normal">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      <button
        type="button"
        onClick={toggleMobileSidebar}
        className={`lg:hidden fixed left-4 top-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#454953] bg-[#101113]/90 text-[#838794] transition-colors hover:border-white hover:text-white ${
          isMobileOpen ? "hidden" : ""
        }`}
        aria-label="Open sidebar"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9702 15V9C21.9702 4 19.9702 2 14.9702 2H8.97021C3.97021 2 1.97021 4 1.97021 9V15C1.97021 20 3.97021 22 8.97021 22H14.9702C19.9702 22 21.9702 20 21.9702 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.97021 2V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
