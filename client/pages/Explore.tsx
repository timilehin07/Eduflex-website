import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import {
  Search,
  Filter,
  Sparkles,
  TrendingUp,
  Zap,
  BookOpen,
  Code,
  Briefcase,
  Languages,
  Palette,
  GraduationCap,
  Star,
} from "lucide-react";

const categories = [
  { name: "Technology", icon: Code, color: "bg-blue-500" },
  { name: "Business", icon: Briefcase, color: "bg-green-500" },
  { name: "Languages", icon: Languages, color: "bg-purple-500" },
  { name: "Creative", icon: Palette, color: "bg-pink-500" },
  { name: "Exam Prep", icon: GraduationCap, color: "bg-orange-500" },
];

const tabs = [
  { id: "ai-suggested", label: "AI Suggested", icon: Sparkles },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "featured", label: "Featured Paths", icon: Zap },
  { id: "all", label: "All Courses", icon: BookOpen },
];

const courses = [
  {
    id: 1,
    badge: "AI Recommended",
    rating: 4.9,
    title: "Advanced Python for Your Career",
    description:
      "Based on your Python progress, this course will take you to the next level with advanced concepts",
    whyThisCourse: "Why this course?",
    reason: "Matches your learning style and career goals in data science",
    level: "Intermediate",
    duration: "6 weeks",
    effort: "3-4 hours/week",
    tags: ["Python", "Career Growth", "Advanced"],
  },
  {
    id: 2,
    badge: "AI Recommended",
    rating: 4.7,
    title: "Excel Automation & VBA",
    description:
      "Perfect continuation from your Excel journey into automation and programming",
    whyThisCourse: "Why this course?",
    reason: "Builds on your Excel expertise with programming skills",
    level: "Advanced",
    duration: "4 weeks",
    effort: "2-3 hours/week",
    tags: ["Excel", "Automation", "VBA"],
  },
];

export default function Explore() {
  const [activeTab, setActiveTab] = useState("ai-suggested");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout clicked");
    setMenuOpen(false);
  };

  return (
    <div className="h-screen bg-[#101113] font-host flex overflow-hidden">
      <Sidebar currentPage="explore" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* ===== HEADER ===== */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#33363E] bg-[#101113] flex-shrink-0">
          {/* Left Section */}
          <h2 className="text-[#E7E8E9] text-sm sm:text-base font-semibold ml-11">
            Welcome Back, John
          </h2>

          {/* Right Section */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-3 focus:outline-none"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0AEFC9] hover:bg-[#10ffd4] transition-colors">
                <span className="text-black text-2xl font-normal">DA</span>
              </div>

              {/* Show name + plan only on larger screens */}
              <div className="hidden sm:flex flex-col">
                <span className="text-white text-base">John Doe</span>
                <div className="rounded bg-[#33363E] px-2 py-1">
                  <span className="text-[#838794] text-xs">Free Plan</span>
                </div>
              </div>
            </button>

            {/* ===== DROPDOWN MENU ===== */}
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-[#1A1B1F] border border-[#33363E] rounded-lg shadow-lg z-50 p-3"
                role="menu"
                aria-label="Profile menu"
              >
                {/* Shown on mobile view only */}
                <div className="sm:hidden flex flex-col pb-3 border-b border-[#33363E] mb-3">
                  <span className="text-white text-sm font-medium">
                    John Doe
                  </span>
                  <div className="rounded bg-[#33363E] px-2 py-1 mt-1.5 w-fit">
                    <span className="text-[#838794] text-xs">Free Plan</span>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full px-3 py-2 rounded-lg bg-[#FF3B30] hover:bg-[#ff625a] text-white text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-[1136px] mx-auto space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-[#F9F9F9] text-[28px] sm:text-[30px] font-bold leading-[36px] -tracking-[0.75px]">
                  Explore & Discover
                </h1>
                <p className="text-[#E7E8E9] text-sm sm:text-[15px] leading-6">
                  Browse AI-generated courses, trending skills, or create your
                  personalized path
                </p>
              </div>
              <Link
                to="/create-course"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0AEFC9] shadow-[0_1px_2px_0_rgba(55,93,251,0.08)] hover:bg-[#0AEFC9]/90 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">
                  Create New Course
                </span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                <input
                  type="text"
                  placeholder="Search courses, skills, topics..."
                  className="w-full h-12 rounded-[10px] border border-[#E5E7EB] bg-white pl-10 pr-4 text-sm text-[#030711] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#0AEFC9]"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] border border-[#E5E7EB] bg-white text-sm font-medium text-[#030711] hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.name}
                    className="flex flex-col items-center gap-2.5 rounded-xl border border-[#33363E] bg-[#222328] p-5 text-center shadow-sm hover:border-[#0AEFC9]/20 transition-colors"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[15px] font-medium text-[#838794]">
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-1 overflow-x-auto rounded-[10px] bg-[#33363E] p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex min-w-[150px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all sm:min-w-0 sm:flex-none ${
                      isActive
                        ? "bg-[#0AEFC9] text-[#030711] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        : "text-[#6B7280] hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-[#33363E] bg-[linear-gradient(90deg,rgba(124,59,237,0.10)_0%,rgba(124,59,237,0.05)_50%,rgba(124,59,237,0)_100%)] p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 text-[#7C3BED]"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.34672C10.001 4.01341 9.93532 3.68327 9.80685 3.37572C9.67837 3.06817 9.4897 2.78941 9.25191 2.55584C9.01413 2.32228 8.73204 2.13862 8.42224 2.01566C8.11243 1.89271 7.78117 1.83295 7.44793 1.8399C7.1147 1.84684 6.78621 1.92036 6.4818 2.05611C6.17739 2.19186 5.9032 2.38712 5.67536 2.63039C5.44751 2.87366 5.27061 3.16004 5.15506 3.47268C5.03952 3.78532 4.98765 4.11791 5.00252 4.45089C4.51269 4.57684 4.05794 4.8126 3.67271 5.14031C3.28749 5.46803 2.98189 5.87912 2.77906 6.34243C2.57623 6.80574 2.48149 7.30913 2.50201 7.81448C2.52254 8.31983 2.65779 8.81388 2.89752 9.25922C2.476 9.60166 2.14454 10.0419 1.93197 10.5417C1.7194 11.0414 1.63215 11.5855 1.67782 12.1267C1.7235 12.6679 1.9007 13.1897 2.19403 13.6467C2.48735 14.1038 2.88791 14.4823 3.36085 14.7492C3.30245 15.2011 3.3373 15.6601 3.46326 16.098C3.58922 16.5359 3.8036 16.9433 4.09318 17.295C4.38275 17.6468 4.74136 17.9354 5.14687 18.1432C5.55238 18.3509 5.99617 18.4733 6.45083 18.5028C6.9055 18.5323 7.36139 18.4683 7.79034 18.3147C8.2193 18.1611 8.61221 17.9212 8.94482 17.6099C9.27743 17.2985 9.54267 16.9222 9.72416 16.5043C9.90565 16.0864 9.99953 15.6357 10 15.1801V4.34672Z"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4.34672C9.99903 4.01341 10.0647 3.68327 10.1932 3.37572C10.3217 3.06817 10.5103 2.78941 10.7481 2.55584C10.9859 2.32228 11.268 2.13862 11.5778 2.01566C11.8876 1.89271 12.2189 1.83295 12.5521 1.8399C12.8853 1.84684 13.2138 1.92036 13.5182 2.05611C13.8226 2.19186 14.0968 2.38712 14.3247 2.63039C14.5525 2.87366 14.7294 3.16004 14.845 3.47268C14.9605 3.78532 15.0124 4.11791 14.9975 4.45089C15.4873 4.57684 15.9421 4.8126 16.3273 5.14031C16.7125 5.46803 17.0181 5.87912 17.221 6.34243C17.4238 6.80574 17.5185 7.30913 17.498 7.81448C17.4775 8.31983 17.3422 8.81388 17.1025 9.25922C17.524 9.60166 17.8555 10.0419 18.0681 10.5417C18.2806 11.0414 18.3679 11.5855 18.3222 12.1267C18.2765 12.6679 18.0993 13.1897 17.806 13.6467C17.5127 14.1038 17.1121 14.4823 16.6392 14.7492C16.6976 15.2011 16.6627 15.6601 16.5368 16.098C16.4108 16.5359 16.1964 16.9433 15.9069 17.295C15.6173 17.6468 15.2587 17.9354 14.8532 18.1432C14.4477 18.3509 14.0039 18.4733 13.5492 18.5028C13.0945 18.5323 12.6386 18.4683 12.2097 18.3147C11.7807 18.1611 11.3878 17.9212 11.0552 17.6099C10.7226 17.2985 10.4574 16.9222 10.2759 16.5043C10.0944 16.0864 10.0005 15.6357 10 15.1801V4.34672Z"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 11.0135C11.8004 10.7674 11.1894 10.3193 10.7444 9.72601C10.2994 9.13269 10.0404 8.42073 10 7.68018C9.95962 8.42073 9.70056 9.13269 9.25556 9.72601C8.81057 10.3193 8.19963 10.7674 7.5 11.0135"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.666 5.59701C14.8677 5.24749 14.9818 4.85435 14.9985 4.45117"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.00244 4.45117C5.01892 4.85428 5.13272 5.24742 5.33411 5.59701"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.89746 9.26018C3.04991 9.13601 3.21305 9.02558 3.38496 8.93018"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.6152 8.93018C16.7871 9.02558 16.9503 9.13601 17.1027 9.26018"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="space-y-1">
                    <h2 className="text-white text-lg font-semibold">
                      AI-generated learning paths just for you
                    </h2>
                    <p className="text-[#E7E8E9] text-sm">
                      Based on your learning history, projects, and preferences,
                      our AI curated these courses to keep your momentum going.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-xl border border-[#33363E] bg-[#222328] p-4 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#593FE1] px-3 py-1 text-xs font-medium text-white">
                          {course.badge}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-[#FACC15]">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <button className="rounded-full border border-[#E5E7EB] px-4 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors">
                        Add to Plan
                      </button>
                    </div>

                    <div className="mt-4 space-y-2">
                      <h3 className="text-white text-lg font-semibold">
                        {course.title}
                      </h3>
                      <p className="text-[#E7E8E9] text-sm leading-6">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-4 rounded-lg border border-[#33363E] bg-[#101113] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-white text-sm font-semibold">
                            {course.whyThisCourse}
                          </p>
                          <p className="text-[#B6B8C0] text-sm">
                            {course.reason}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#33363E] px-3 py-1 text-xs text-white">
                            {course.level}
                          </span>
                          <span className="rounded-full bg-[#33363E] px-3 py-1 text-xs text-white">
                            {course.duration}
                          </span>
                          <span className="rounded-full bg-[#33363E] px-3 py-1 text-xs text-white">
                            {course.effort}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#33363E] px-3 py-1 text-xs text-[#B6B8C0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
