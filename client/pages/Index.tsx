import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-dark font-host">
      <Header />

      <main className="px-4 sm:px-8 lg:px-20 pt-[120px] sm:pt-[140px] lg:pt-[163px] pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1280px] mx-auto">
          <section className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-16">
            <div className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 flex-1 lg:max-w-[652px]">
              <div className="inline-flex px-4 py-2.5 items-center justify-center gap-2.5 rounded-full bg-brand-dark-800">
                <span className="text-white font-host text-xs font-normal">
                  🚀 AI-Powered Learning Platform
                </span>
              </div>

              <h1 className="text-brand-light font-clash text-[40px] sm:text-[52px] lg:text-[64px] font-medium leading-[120%] tracking-[-2px]">
                Learn Anything.
                <br />
                Smarter, Faster.
              </h1>
            </div>

            <div className="flex flex-col items-start gap-12 sm:gap-14 lg:gap-16 flex-1">
              <div className="flex flex-col items-start gap-4 sm:gap-5">
                <p className="text-brand-light font-host text-base font-normal leading-[150%] tracking-[-0.3px] max-w-[452px]">
                  AI-powered courses, tailored to your goals, learning style,
                  and pace. Turn any topic into a structured learning path in
                  seconds.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
                  <Link
                    to="/login"
                    className="flex h-12 px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)] w-full sm:w-auto"
                  >
                    <span className="text-white font-host text-base font-medium leading-[160%]">
                      Start Learning for free
                    </span>
                  </Link>
                  <button className="flex h-12 px-4 items-center justify-center gap-2 rounded-full border border-brand-purple hover:bg-brand-purple/10 transition-colors w-full sm:w-auto">
                    <span className="text-brand-cyan font-host text-base font-medium leading-[160%]">
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="flex h-[400px] sm:h-[550px] lg:h-[714px] items-center justify-center rounded-3xl lg:rounded-[24px] bg-brand-grey">
            <svg
              className="w-[120px] sm:w-[150px] lg:w-[176px] h-auto"
              viewBox="0 0 176 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="29" cy="29.3242" r="29" fill="#D2D2D2" />
              <path
                d="M83.407 1.09485L116.003 57.5535H50.8105L83.407 1.09485Z"
                fill="#D2D2D2"
              />
              <rect
                x="118.877"
                y="1.04321"
                width="57.0413"
                height="56.562"
                fill="#D2D2D2"
              />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
