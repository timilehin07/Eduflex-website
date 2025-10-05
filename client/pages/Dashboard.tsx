import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="h-screen bg-[#101113] font-host flex overflow-hidden">
      <Sidebar currentPage="dashboard" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#33363E] bg-[#101113] flex-shrink-0">
          <h2 className="text-[#E7E8E9] text-sm sm:text-base font-semibold ml-11">
          Welcome Back, John
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0AEFC9]">
              <span className="text-black text-2xl font-normal">DA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-base">John Doe</span>
              <div className="rounded bg-[#33363E] px-2 py-1">
                <span className="text-[#838794] text-xs">Free Plan</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1187px] mx-auto space-y-6">
            <div className="bg-[#EFEDFF] rounded-2xl p-6 flex flex-col gap-6">
              <div className="space-y-2">
                <h1 className="text-[#222328] text-[32px] font-bold leading-tight">
                  Welcome Back, Daniel👋
                </h1>
                <p className="text-[#101113] text-base">
                  Ready to continue your learning journey? You're doing amazing!
                </p>
              </div>
              <div className="flex items-end gap-1">
                <button className="flex items-center gap-1 px-[10px] py-[10px] bg-[#0AEFC9] rounded-full shadow-[0_1px_2px_0_rgba(55,93,251,0.08)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 4.15803C4.1665 3.34873 4.1665 2.94407 4.33525 2.72101C4.48225 2.52669 4.70694 2.40644 4.95017 2.39192C5.22937 2.37525 5.56606 2.59971 6.23944 3.04863L15.0024 8.89061C15.5588 9.26154 15.837 9.44701 15.934 9.68078C16.0187 9.88516 16.0187 10.1149 15.934 10.3192C15.837 10.553 15.5588 10.7385 15.0024 11.1094L6.23944 16.9514C5.56606 17.4003 5.22937 17.6248 4.95017 17.6081C4.70694 17.5936 4.48225 17.4733 4.33525 17.279C4.1665 17.0559 4.1665 16.6513 4.1665 15.842V4.15803Z"
                      stroke="#F9F9F9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-sm font-medium px-1">
                    Continue Learning
                  </span>
                </button>
                <div className="px-[10px] py-[10px]">
                  <span className="text-[#B6B8C0] text-base">
                    7 days streak
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-[#222328] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#F9F9F9] text-sm font-medium">
                    Courses Enrolled
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.58984 4.66666V14"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.59001 12C2.4132 12 2.24363 11.9298 2.1186 11.8047C1.99358 11.6797 1.92334 11.5101 1.92334 11.3333V2.66667C1.92334 2.48986 1.99358 2.32029 2.1186 2.19526C2.24363 2.07024 2.4132 2 2.59001 2H5.92334C6.63058 2 7.30886 2.28095 7.80896 2.78105C8.30906 3.28115 8.59001 3.95942 8.59001 4.66667C8.59001 3.95942 8.87096 3.28115 9.37106 2.78105C9.87115 2.28095 10.5494 2 11.2567 2H14.59C14.7668 2 14.9364 2.07024 15.0614 2.19526C15.1864 2.32029 15.2567 2.48986 15.2567 2.66667V11.3333C15.2567 11.5101 15.1864 11.6797 15.0614 11.8047C14.9364 11.9298 14.7668 12 14.59 12H10.59C10.0596 12 9.55087 12.2107 9.17579 12.5858C8.80072 12.9609 8.59001 13.4696 8.59001 14C8.59001 13.4696 8.37929 12.9609 8.00422 12.5858C7.62915 12.2107 7.12044 12 6.59001 12H2.59001Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#F9F9F9] text-2xl font-bold mb-1">5</div>
                <div className="text-[#B6B8C0] text-xs">+2 from last month</div>
              </div>

              <div className="bg-[#222328] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#F9F9F9] text-sm font-medium">
                    Hours Learned
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 4V8L10.6667 9.33333"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#F9F9F9] text-2xl font-bold mb-1">24</div>
                <div className="text-[#B6B8C0] text-xs">
                  +12% from last week
                </div>
              </div>

              <div className="bg-[#222328] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#F9F9F9] text-sm font-medium">
                    Learning Streak
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.00016 5.99999H3.00016C2.55814 5.99999 2.13421 5.8244 1.82165 5.51183C1.50909 5.19927 1.3335 4.77535 1.3335 4.33332C1.3335 3.8913 1.50909 3.46737 1.82165 3.15481C2.13421 2.84225 2.55814 2.66666 3.00016 2.66666H4.00016"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5.99999H13C13.442 5.99999 13.866 5.8244 14.1785 5.51183C14.4911 5.19927 14.6667 4.77535 14.6667 4.33332C14.6667 3.8913 14.4911 3.46737 14.1785 3.15481C13.866 2.84225 13.442 2.66666 13 2.66666H12"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.6665 14.6667H13.3332"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.6665 9.77335V11.3333C6.6665 11.7 6.35317 11.9867 6.01984 12.14C5.23317 12.5 4.6665 13.4933 4.6665 14.6667"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.3335 9.77335V11.3333C9.3335 11.7 9.64683 11.9867 9.98016 12.14C10.7668 12.5 11.3335 13.4933 11.3335 14.6667"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1.33334H4V6.00001C4 7.06088 4.42143 8.07829 5.17157 8.82844C5.92172 9.57858 6.93913 10 8 10C9.06087 10 10.0783 9.57858 10.8284 8.82844C11.5786 8.07829 12 7.06088 12 6.00001V1.33334Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#F9F9F9] text-2xl font-bold mb-1">
                  7 days
                </div>
                <div className="text-[#B6B8C0] text-xs">Keep it up! 🔥</div>
              </div>

              <div className="bg-[#222328] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#F9F9F9] text-sm font-medium">
                    Quizzes Completed
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.288 8.59332L12.298 14.2773C12.3094 14.3443 12.3 14.413 12.2711 14.4745C12.2423 14.5359 12.1954 14.5871 12.1367 14.6212C12.078 14.6553 12.0102 14.6706 11.9426 14.6651C11.8749 14.6597 11.8105 14.6337 11.758 14.5907L9.37138 12.7993C9.25617 12.7132 9.1162 12.6667 8.97238 12.6667C8.82856 12.6667 8.6886 12.7132 8.57338 12.7993L6.18272 14.59C6.13026 14.6329 6.06596 14.6589 5.99838 14.6644C5.9308 14.6698 5.86316 14.6545 5.80449 14.6206C5.74582 14.5866 5.6989 14.5355 5.66999 14.4742C5.64109 14.4129 5.63157 14.3442 5.64272 14.2773L6.65205 8.59332"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.97021 9.33334C11.1794 9.33334 12.9702 7.54248 12.9702 5.33334C12.9702 3.1242 11.1794 1.33334 8.97021 1.33334C6.76108 1.33334 4.97021 3.1242 4.97021 5.33334C4.97021 7.54248 6.76108 9.33334 8.97021 9.33334Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#F9F9F9] text-2xl font-bold mb-1">12</div>
                <div className="text-[#B6B8C0] text-xs">+3 this week</div>
              </div>

              <div className="bg-[#222328] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#F9F9F9] text-sm font-medium">
                    AI Tutor Chats
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00021 3.33335C8.001 3.0667 7.94846 2.80259 7.84568 2.55655C7.7429 2.3105 7.59195 2.0875 7.40173 1.90064C7.2115 1.71379 6.98583 1.56686 6.73798 1.4685C6.49014 1.37014 6.22513 1.32233 5.95854 1.32789C5.69195 1.33344 5.42917 1.39225 5.18564 1.50086C4.94211 1.60946 4.72276 1.76566 4.54048 1.96028C4.3582 2.1549 4.21668 2.384 4.12425 2.63411C4.03181 2.88423 3.99032 3.1503 4.00221 3.41668C3.61035 3.51744 3.24655 3.70605 2.93837 3.96822C2.63019 4.2304 2.38571 4.55926 2.22344 4.92991C2.06118 5.30056 1.98539 5.70328 2.0018 6.10756C2.01822 6.51183 2.12643 6.90708 2.31821 7.26335C1.981 7.5373 1.71583 7.8895 1.54577 8.2893C1.37571 8.68911 1.30592 9.12441 1.34245 9.55734C1.37899 9.99027 1.52076 10.4077 1.75542 10.7734C1.99008 11.139 2.31052 11.4418 2.68888 11.6553C2.64216 12.0168 2.67004 12.3841 2.7708 12.7344C2.87157 13.0847 3.04308 13.4106 3.27474 13.692C3.50639 13.9734 3.79329 14.2043 4.11769 14.3705C4.4421 14.5367 4.79713 14.6346 5.16086 14.6582C5.5246 14.6818 5.88931 14.6306 6.23247 14.5078C6.57563 14.3849 6.88997 14.193 7.15605 13.9439C7.42214 13.6947 7.63433 13.3937 7.77952 13.0594C7.92471 12.7251 7.99982 12.3645 8.00021 12V3.33335Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.00001 3.33335C7.99922 3.0667 8.05177 2.80259 8.15455 2.55655C8.25733 2.3105 8.40827 2.0875 8.5985 1.90064C8.78872 1.71379 9.01439 1.56686 9.26224 1.4685C9.51008 1.37014 9.77509 1.32233 10.0417 1.32789C10.3083 1.33344 10.5711 1.39225 10.8146 1.50086C11.0581 1.60946 11.2775 1.76566 11.4597 1.96028C11.642 2.1549 11.7835 2.384 11.876 2.63411C11.9684 2.88423 12.0099 3.1503 11.998 3.41668C12.3899 3.51744 12.7537 3.70605 13.0619 3.96822C13.37 4.2304 13.6145 4.55926 13.7768 4.92991C13.939 5.30056 14.0148 5.70328 13.9984 6.10756C13.982 6.51183 13.8738 6.90708 13.682 7.26335C14.0192 7.5373 14.2844 7.8895 14.4545 8.2893C14.6245 8.68911 14.6943 9.12441 14.6578 9.55734C14.6212 9.99027 14.4795 10.4077 14.2448 10.7734C14.0101 11.139 13.6897 11.4418 13.3113 11.6553C13.3581 12.0168 13.3302 12.3841 13.2294 12.7344C13.1287 13.0847 12.9571 13.4106 12.7255 13.692C12.4938 13.9734 12.2069 14.2043 11.8825 14.3705C11.5581 14.5367 11.2031 14.6346 10.8394 14.6582C10.4756 14.6818 10.1109 14.6306 9.76775 14.5078C9.42459 14.3849 9.11025 14.193 8.84417 13.9439C8.57808 13.6947 8.36589 13.3937 8.2207 13.0594C8.07551 12.7251 8.0004 12.3645 8.00001 12V3.33335Z"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8.66667C9.4403 8.46977 8.95155 8.11133 8.59555 7.63667C8.23956 7.16201 8.0323 6.59245 8 6C7.9677 6.59245 7.76045 7.16201 7.40445 7.63667C7.04845 8.11133 6.5597 8.46977 6 8.66667"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.7329 4.33332C11.8943 4.05371 11.9855 3.7392 11.9989 3.41666"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.00195 3.41666C4.01514 3.73915 4.10617 4.05365 4.26729 4.33332"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.31787 7.264C2.43983 7.16467 2.57034 7.07633 2.70787 7"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.292 7C13.4295 7.07633 13.56 7.16467 13.682 7.264"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.99981 12C3.54036 12.0002 3.08865 11.8817 2.68848 11.656"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3113 11.656C12.9112 11.8817 12.4594 12.0002 12 12"
                      stroke="#B6B8C0"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#F9F9F9] text-2xl font-bold mb-1">34</div>
                <div className="text-[#B6B8C0] text-xs">+8 this week</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#222328] border border-[#33363E] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <h2 className="text-white text-[22px] font-semibold mb-2">
                      Continue Learning
                    </h2>
                    <p className="text-[#6B7280] text-sm">
                      Pick up where you left off
                    </p>
                  </div>
                  <button className="flex items-center gap-1 px-[10px] py-[10px] border border-[#0AEFC9] rounded-full shadow-[0_1px_2px_0_rgba(55,93,251,0.08)]">
                    <span className="text-[#0AEFC9] text-sm font-medium px-1">
                      View All Courses
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1261 9.99923L7.41357 6.28673L8.47407 5.22623L13.2471 9.99923L8.47407 14.7722L7.41357 13.7117L11.1261 9.99923Z"
                        fill="#0AEFC9"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#101113] border border-[#E7E8E9] rounded-xl p-4">
                    <div className="mb-3">
                      <h3 className="text-white text-base font-medium mb-1">
                        Python for Data Science
                      </h3>
                      <p className="text-[#6B7280] text-sm">
                        Next: Data Visualization with Matplotlib
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#6B7280]">65% complete</span>
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.33008 11.5C9.0915 11.5 11.3301 9.26142 11.3301 6.5C11.3301 3.73858 9.0915 1.5 6.33008 1.5C3.56865 1.5 1.33008 3.73858 1.33008 6.5C1.33008 9.26142 3.56865 11.5 6.33008 11.5Z"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.33008 3.5V6.5L8.33008 7.5"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#6B7280]">2h 30m</span>
                        </div>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-[#7C3BED] rounded-full"></div>
                      </div>
                      <button className="w-full flex items-center justify-center gap-2 py-[10px] bg-[#7C3BED] rounded-lg shadow-[0_10px_40px_-10px_rgba(124,59,237,0.20)]">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2.75L13.3333 8.75L4 14.75V2.75Z"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white text-sm font-medium">
                          Continue Learning
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#101113] border border-[#E7E8E9] rounded-xl p-4">
                    <div className="mb-3">
                      <h3 className="text-white text-base font-medium mb-1">
                        Digital Marketing Fundamentals
                      </h3>
                      <p className="text-[#6B7280] text-sm">
                        Next: Social Media Strategy
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#6B7280]">30% complete</span>
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.33008 11.5C9.0915 11.5 11.3301 9.26142 11.3301 6.5C11.3301 3.73858 9.0915 1.5 6.33008 1.5C3.56865 1.5 1.33008 3.73858 1.33008 6.5C1.33008 9.26142 3.56865 11.5 6.33008 11.5Z"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.33008 3.5V6.5L8.33008 7.5"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#6B7280]">1h 45m</span>
                        </div>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div className="h-full w-[30%] bg-[#7C3BED] rounded-full"></div>
                      </div>
                      <button className="w-full flex items-center justify-center gap-2 py-[10px] bg-[#7C3BED] rounded-lg shadow-[0_10px_40px_-10px_rgba(124,59,237,0.20)]">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2.75L13.3333 8.75L4 14.75V2.75Z"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white text-sm font-medium">
                          Continue Learning
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#101113] border border-[#E7E8E9] rounded-xl p-4">
                    <div className="mb-3">
                      <h3 className="text-white text-base font-medium mb-1">
                        Excel Advanced Formulas
                      </h3>
                      <p className="text-[#6B7280] text-sm">
                        Next: Final Project
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#6B7280]">90% complete</span>
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.37988 11.5C9.14131 11.5 11.3799 9.26142 11.3799 6.5C11.3799 3.73858 9.14131 1.5 6.37988 1.5C3.61846 1.5 1.37988 3.73858 1.37988 6.5C1.37988 9.26142 3.61846 11.5 6.37988 11.5Z"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.37988 3.5V6.5L8.37988 7.5"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#6B7280]">45m</span>
                        </div>
                      </div>
                      <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-[#7C3BED] rounded-full"></div>
                      </div>
                      <button className="w-full flex items-center justify-center gap-2 py-[10px] bg-[#7C3BED] rounded-lg shadow-[0_10px_40px_-10px_rgba(124,59,237,0.20)]">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2.75L13.3333 8.75L4 14.75V2.75Z"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white text-sm font-medium">
                          Continue Learning
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#222328] border border-[#33363E] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33325 11.6667C3.17555 11.6672 3.02094 11.623 2.88737 11.5391C2.75381 11.4553 2.64677 11.3353 2.5787 11.193C2.51063 11.0508 2.48432 10.8921 2.50283 10.7355C2.52133 10.5789 2.5839 10.4308 2.68325 10.3083L10.9332 1.80833C10.9951 1.73689 11.0795 1.68862 11.1724 1.67144C11.2653 1.65425 11.3613 1.66917 11.4447 1.71375C11.528 1.75832 11.5937 1.82991 11.631 1.91675C11.6683 2.00359 11.675 2.10053 11.6499 2.19166L10.0499 7.20833C10.0027 7.3346 9.98689 7.47043 10.0037 7.60417C10.0206 7.7379 10.0696 7.86556 10.1467 7.97618C10.2237 8.0868 10.3264 8.17709 10.446 8.23929C10.5656 8.3015 10.6984 8.33377 10.8332 8.33333H16.6666C16.8243 8.33279 16.9789 8.37701 17.1124 8.46084C17.246 8.54468 17.3531 8.6647 17.4211 8.80695C17.4892 8.94919 17.5155 9.10784 17.497 9.26444C17.4785 9.42105 17.4159 9.56919 17.3166 9.69166L9.06658 18.1917C9.00469 18.2631 8.92036 18.3114 8.82743 18.3285C8.73449 18.3457 8.63848 18.3308 8.55514 18.2862C8.4718 18.2417 8.40609 18.1701 8.3688 18.0832C8.33151 17.9964 8.32485 17.8995 8.34991 17.8083L9.94991 12.7917C9.99709 12.6654 10.0129 12.5296 9.99609 12.3958C9.97924 12.2621 9.9302 12.1344 9.85317 12.0238C9.77614 11.9132 9.67343 11.8229 9.55385 11.7607C9.43426 11.6985 9.30137 11.6662 9.16658 11.6667H3.33325Z"
                        stroke="#EAB308"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h2 className="text-white text-[22px] font-semibold">
                      Today's Learning Timer
                    </h2>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-[#0AEFC9] text-[35px] font-bold mb-4">
                      45min
                    </div>
                    <div className="h-3 bg-[#F1F5F9] rounded-full overflow-hidden mb-6">
                      <div className="h-full w-[75%] bg-[#0AEFC9] rounded-full"></div>
                    </div>
                    <p className="text-[#6B7280] text-sm mb-4">
                      Goal: 60 minutes daily
                    </p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#F1F5F9] rounded-full">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.22998 7.25C5.5615 7.25 5.87944 7.1183 6.11386 6.88388C6.34828 6.64946 6.47998 6.33152 6.47998 6C6.47998 5.31 6.22998 5 5.97998 4.5C5.44398 3.4285 5.86798 2.473 6.97998 1.5C7.22998 2.75 7.97998 3.95 8.97998 4.75C9.97998 5.55 10.48 6.5 10.48 7.5C10.48 7.95963 10.3895 8.41475 10.2136 8.83939C10.0377 9.26403 9.77986 9.64987 9.45485 9.97487C9.12985 10.2999 8.74401 10.5577 8.31937 10.7336C7.89473 10.9095 7.43961 11 6.97998 11C6.52035 11 6.06523 10.9095 5.64059 10.7336C5.21595 10.5577 4.83011 10.2999 4.50511 9.97487C4.1801 9.64987 3.92229 9.26403 3.7464 8.83939C3.57051 8.41475 3.47998 7.95963 3.47998 7.5C3.47998 6.9235 3.69648 6.353 3.97998 6C3.97998 6.33152 4.11168 6.64946 4.3461 6.88388C4.58052 7.1183 4.89846 7.25 5.22998 7.25Z"
                          stroke="#030711"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[#030711] text-xs font-semibold">
                        7 day streak
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#101113] border border-[#33363E] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 11.6667C12.6667 10.8334 13.0833 10.25 13.75 9.58335C14.5833 8.83335 15 7.75002 15 6.66669C15 5.3406 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.3406 5 6.66669C5 7.50002 5.16667 8.50002 6.25 9.58335C6.83333 10.1667 7.33333 10.8334 7.5 11.6667"
                        stroke="#EAB308"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 15H12.5"
                        stroke="#EAB308"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.3335 18.3333H11.6668"
                        stroke="#EAB308"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h2 className="text-white text-[22px] font-semibold">
                      Daily Motivation
                    </h2>
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-white text-[17px] italic">
                      "Learners who spend 15 minutes a day finish 2x faster"
                    </p>
                    <p className="text-[#6B7280] text-sm">
                      You're ahead of 78% of learners with your consistency!
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          width="16"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.18323 1.52997C8.21245 1.47094 8.25758 1.42126 8.31353 1.38652C8.36949 1.35178 8.43404 1.33337 8.4999 1.33337C8.56576 1.33337 8.63031 1.35178 8.68626 1.38652C8.74222 1.42126 8.78735 1.47094 8.81656 1.52997L10.3566 4.6493C10.458 4.85461 10.6078 5.03224 10.793 5.16694C10.9782 5.30164 11.1933 5.38938 11.4199 5.42264L14.8639 5.92664C14.9292 5.93609 14.9905 5.96362 15.0409 6.0061C15.0913 6.04859 15.1289 6.10434 15.1492 6.16704C15.1696 6.22975 15.1721 6.29691 15.1563 6.36093C15.1405 6.42495 15.1071 6.48327 15.0599 6.5293L12.5692 8.95464C12.405 9.1147 12.2821 9.31229 12.2111 9.53039C12.1402 9.74849 12.1233 9.98056 12.1619 10.2066L12.7499 13.6333C12.7614 13.6985 12.7544 13.7657 12.7296 13.8271C12.7048 13.8885 12.6632 13.9417 12.6096 13.9806C12.556 14.0196 12.4926 14.0426 12.4265 14.0472C12.3604 14.0518 12.2944 14.0378 12.2359 14.0066L9.15723 12.388C8.95438 12.2815 8.72868 12.2258 8.49956 12.2258C8.27044 12.2258 8.04475 12.2815 7.8419 12.388L4.7639 14.0066C4.70545 14.0376 4.6395 14.0515 4.57353 14.0468C4.50757 14.0421 4.44424 14.019 4.39076 13.9801C4.33728 13.9412 4.29579 13.8881 4.271 13.8268C4.24622 13.7655 4.23914 13.6984 4.25056 13.6333L4.8379 10.2073C4.8767 9.98112 4.85989 9.7489 4.78892 9.53067C4.71796 9.31243 4.59497 9.11474 4.43056 8.95464L1.9399 6.52997C1.89229 6.48399 1.85856 6.42557 1.84254 6.36135C1.82652 6.29714 1.82886 6.22971 1.84928 6.16676C1.86971 6.10381 1.90741 6.04786 1.95808 6.00529C2.00876 5.96272 2.07037 5.93524 2.1359 5.92597L5.57923 5.42264C5.80607 5.38964 6.02149 5.30201 6.20695 5.16729C6.39242 5.03258 6.54237 4.85482 6.6439 4.6493L8.18323 1.52997Z"
                            fill="#FACC15"
                            stroke="#FACC15"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.18323 1.52997C8.21245 1.47094 8.25758 1.42126 8.31353 1.38652C8.36949 1.35178 8.43404 1.33337 8.4999 1.33337C8.56576 1.33337 8.63031 1.35178 8.68626 1.38652C8.74222 1.42126 8.78735 1.47094 8.81656 1.52997L10.3566 4.6493C10.458 4.85461 10.6078 5.03224 10.793 5.16694C10.9782 5.30164 11.1933 5.38938 11.4199 5.42264L14.8639 5.92664C14.9292 5.93609 14.9905 5.96362 15.0409 6.0061C15.0913 6.04859 15.1289 6.10434 15.1492 6.16704C15.1696 6.22975 15.1721 6.29691 15.1563 6.36093C15.1405 6.42495 15.1071 6.48327 15.0599 6.5293L12.5692 8.95464C12.405 9.1147 12.2821 9.31229 12.2111 9.53039C12.1402 9.74849 12.1233 9.98056 12.1619 10.2066L12.7499 13.6333C12.7614 13.6985 12.7544 13.7657 12.7296 13.8271C12.7048 13.8885 12.6632 13.9417 12.6096 13.9806C12.556 14.0196 12.4926 14.0426 12.4265 14.0472C12.3604 14.0518 12.2944 14.0378 12.2359 14.0066L9.15723 12.388C8.95438 12.2815 8.72868 12.2258 8.49956 12.2258C8.27044 12.2258 8.04475 12.2815 7.8419 12.388L4.7639 14.0066C4.70545 14.0376 4.6395 14.0515 4.57353 14.0468C4.50757 14.0421 4.44424 14.019 4.39076 13.9801C4.33728 13.9412 4.29579 13.8881 4.271 13.8268C4.24622 13.7655 4.23914 13.6984 4.25056 13.6333L4.8379 10.2073C4.8767 9.98112 4.85989 9.7489 4.78892 9.53067C4.71796 9.31243 4.59497 9.11474 4.43056 8.95464L1.9399 6.52997C1.89229 6.48399 1.85856 6.42557 1.84254 6.36135C1.82652 6.29714 1.82886 6.22972 1.84928 6.16676C1.86971 6.10381 1.90741 6.04786 1.95808 6.00529C2.00876 5.96272 2.07037 5.93524 2.1359 5.92597L5.57923 5.42264C5.80607 5.38964 6.02149 5.30201 6.20695 5.16729C6.39242 5.03258 6.54237 4.85482 6.6439 4.6493L8.18323 1.52997Z"
                          stroke="#6B7280"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
