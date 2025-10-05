import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

type Course = {
  id: string;
  title: string;
  description: string;
  lessons: string;
  progress: number;
  duration: string;
  level: string;
  aiTutor?: boolean;
  nextTopic?: string;
  dueDate?: string;
  statusLabel?: string;
  completedDate?: string;
  highlight?: boolean;
};

const tabs = [
  { id: "active", label: "Active", count: 4, icon: "play" },
  { id: "completed", label: "Completed", count: 2, icon: "check" },
  { id: "saved", label: "Saved for Later", count: 3, icon: "bookmark" },
  { id: "all", label: "All Courses", count: 5, icon: "grid" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const priorityCourse: Course = {
  id: "python-data-science",
  title: "Python for Data Science",
  description:
    "Learn Python programming with focus on data analysis and visualization",
  lessons: "16/24 lessons",
  progress: 65,
  duration: "8 weeks",
  level: "Intermediate",
  aiTutor: true,
  nextTopic: "Data Visualization with Matplotlib",
  dueDate: "15/01/2024",
  highlight: true,
};

const activeCourses: Course[] = [
  priorityCourse,
  {
    id: "digital-marketing",
    title: "Digital Marketing Fundamentals",
    description:
      "Complete guide to modern digital marketing strategies and tools",
    lessons: "5/18 lessons",
    progress: 30,
    duration: "6 weeks",
    level: "Intermediate",
    aiTutor: true,
    nextTopic: "Social Media Strategy",
    dueDate: "18/01/2024",
  },
  {
    id: "spanish-conversation",
    title: "Spanish Conversation Practice",
    description:
      "Improve your Spanish speaking skills through AI conversations",
    lessons: "4/30 lessons",
    progress: 15,
    duration: "10 weeks",
    level: "Beginner",
    aiTutor: true,
    nextTopic: "Ordering Food & Dining",
    dueDate: "21/01/2024",
  },
];

const completedCourses: Course[] = [
  {
    id: "excel-automation",
    title: "Excel Automation & VBA",
    description: "Automate your spreadsheets and build business dashboards",
    lessons: "18 lessons",
    progress: 100,
    duration: "5 weeks",
    level: "Advanced",
    completedDate: "Completed on 08/01/2024",
  },
  {
    id: "product-design",
    title: "Product Design Essentials",
    description: "Design thinking, UX fundamentals, and prototyping workflows",
    lessons: "22 lessons",
    progress: 100,
    duration: "7 weeks",
    level: "Intermediate",
    completedDate: "Completed on 04/01/2024",
  },
];

const savedCourses: Course[] = [
  {
    id: "ai-ethics",
    title: "AI Ethics & Responsible Innovation",
    description: "Frameworks for ethical AI decision making and policy",
    lessons: "16 lessons",
    progress: 0,
    duration: "4 weeks",
    level: "Intermediate",
  },
  {
    id: "business-analytics",
    title: "Business Analytics with SQL",
    description:
      "Translate business questions into analytical queries and dashboards",
    lessons: "20 lessons",
    progress: 0,
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    id: "creative-writing",
    title: "Creative Writing Lab",
    description:
      "Develop storytelling and narrative skills with weekly prompts",
    lessons: "12 lessons",
    progress: 0,
    duration: "6 weeks",
    level: "Beginner",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <div
      className={`border border-[#33363E] bg-[#222328] rounded-xl p-4 sm:p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] ${
        course.highlight ? "border-l-4 border-[#08BFA1]" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-white text-xl font-semibold">{course.title}</h3>
            <div className="px-3 py-1 rounded-full bg-[#33363E]">
              <span className="text-white text-xs font-semibold">
                {course.level}
              </span>
            </div>
            {course.completedDate && (
              <div className="px-3 py-1 rounded-full bg-[#166534]/20">
                <span className="text-[#34C759] text-xs font-semibold">
                  Completed
                </span>
              </div>
            )}
          </div>
          <p className="text-[#B6B8C0] text-sm sm:text-base mb-4 leading-6">
            {course.description}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start">
          <button className="flex items-center gap-2 px-4 py-3 bg-[#593FE1] rounded-[10px] shadow-[0_10px_40px_-10px_rgba(124,59,237,0.20)] text-white text-sm font-medium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.43994 2L13.7733 8L4.43994 14V2Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{course.progress === 100 ? "Review" : "Continue"}</span>
          </button>
          <button className="hidden sm:flex p-2.5 border border-[#E5E7EB] bg-[#33363E] rounded-[10px] text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.26683 13.3332C6.53921 13.9859 8.00289 14.1626 9.39409 13.8317C10.7853 13.5007 12.0125 12.6838 12.8547 11.5279C13.6968 10.3722 14.0984 8.95365 13.9872 7.52795C13.876 6.10225 13.2592 4.76316 12.248 3.75197C11.2368 2.74079 9.89775 2.12399 8.47206 2.01277C7.04636 1.90155 5.62781 2.30319 4.47204 3.14532C3.31627 3.98745 2.49929 5.2147 2.16831 6.6059C1.83733 7.9971 2.01412 9.46078 2.66683 10.7332L1.3335 14.6665L5.26683 13.3332Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="hidden sm:flex p-2.5 border border-[#E5E7EB] bg-[#33363E] rounded-[10px] text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.33325H4C3.64638 1.33325 3.30725 1.47373 3.0572 1.72378C2.80715 1.97382 2.66666 2.31296 2.66666 2.66659V13.3333C2.66666 13.6869 2.80715 14.0261 3.0572 14.2761C3.30725 14.5261 3.64638 14.6666 4 14.6666H12C12.3536 14.6666 12.6927 14.5261 12.9428 14.2761C13.1928 14.0261 13.3333 13.6869 13.3333 13.3333V4.66659L10 1.33325Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.3335 1.33325V3.99992C9.3335 4.35354 9.47397 4.69268 9.72402 4.94273C9.97407 5.19278 10.3132 5.33325 10.6668 5.33325H13.3335"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[#B6B8C0] text-sm">{course.lessons}</span>
          <span className="text-white text-sm">{course.progress}%</span>
        </div>
        <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7C3BED]"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#9C9FAA]">
          <div className="flex items-center gap-1">
            <ClockIcon />
            <span>{course.duration}</span>
          </div>
          {course.aiTutor ? (
            <div className="flex items-center gap-1">
              <AssistantIcon />
              <span>AI Tutor</span>
            </div>
          ) : null}
          {course.dueDate ? (
            <div className="flex items-center gap-1">
              <CalendarIcon />
              <span>Due: {course.dueDate}</span>
            </div>
          ) : null}
          {course.completedDate ? (
            <div className="flex items-center gap-1 text-[#34C759]">
              <CheckIcon />
              <span>{course.completedDate}</span>
            </div>
          ) : null}
        </div>
        {course.nextTopic ? (
          <div className="text-center py-2 rounded-lg bg-[#101113] border border-[#33363E]">
            <p className="text-[#6B7280] text-sm">
              Next Topic: <span className="text-white">{course.nextTopic}</span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 3V6L8 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AssistantIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.2797 2.5C6.28029 2.29999 6.24088 2.10191 6.1638 1.91737C6.08671 1.73284 5.97351 1.56559 5.83083 1.42545C5.68816 1.28531 5.51891 1.17511 5.33303 1.10134C5.14715 1.02757 4.94839 0.991709 4.74845 0.995876C4.54851 1.00004 4.35142 1.04415 4.16877 1.1256C3.98612 1.20705 3.82161 1.3242 3.6849 1.47017C3.54819 1.61613 3.44205 1.78796 3.37273 1.97555C3.3034 2.16313 3.27228 2.36268 3.2812 2.56248C2.9873 2.63803 2.71445 2.7795 2.48332 2.97612C2.25218 3.17275 2.06882 3.41941 1.94712 3.69739C1.82542 3.97538 1.76858 4.27741 1.78089 4.58062C1.79321 4.88383 1.87436 5.18026 2.0182 5.44748C1.76529 5.65294 1.56641 5.91708 1.43887 6.21694C1.31133 6.5168 1.25898 6.84326 1.28638 7.16796C1.31379 7.49266 1.42011 7.80575 1.5961 8.07998C1.7721 8.35422 2.01243 8.5813 2.2962 8.74148C2.26116 9.01258 2.28207 9.28802 2.35764 9.55074C2.43322 9.81346 2.56185 10.0579 2.73559 10.269C2.90934 10.4801 3.12451 10.6533 3.36781 10.7779C3.61111 10.9025 3.87739 10.976 4.15019 10.9937C4.42299 11.0114 4.69652 10.973 4.95389 10.8808C5.21127 10.7887 5.44702 10.6446 5.64658 10.4578C5.84614 10.2711 6.00529 10.0453 6.11418 9.79451C6.22308 9.54376 6.27941 9.27335 6.2797 9L6.2797 2.5Z"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.27979 2.5C6.2792 2.29999 6.31861 2.10191 6.39569 1.91737C6.47278 1.73284 6.58599 1.56559 6.72866 1.42545C6.87133 1.28531 7.04058 1.17511 7.22646 1.10134C7.41234 1.02757 7.6111 0.991709 7.81104 0.995876C8.01099 1.00004 8.20808 1.04415 8.39072 1.1256C8.57337 1.20705 8.73788 1.3242 8.87459 1.47017C9.0113 1.61613 9.11744 1.78796 9.18677 1.97555C9.2561 2.16313 9.28721 2.36268 9.27829 2.56248C9.57219 2.63803 9.84504 2.7795 10.0762 2.97612C10.3073 3.17275 10.4907 3.41941 10.6124 3.69739C10.7341 3.97538 10.7909 4.27741 10.7786 4.58062C10.7663 4.88383 10.6851 5.18026 10.5413 5.44748C10.7942 5.65294 10.9931 5.91708 11.1206 6.21694C11.2482 6.5168 11.3005 6.84326 11.2731 7.16796C11.2457 7.49266 11.1394 7.80575 10.9634 8.07998C10.7874 8.35422 10.5471 8.5813 10.2633 8.74148C10.2983 9.01258 10.2774 9.28802 10.2018 9.55074C10.1263 9.81346 9.99764 10.0579 9.8239 10.269C9.65015 10.4801 9.43499 10.6533 9.19168 10.7779C8.94838 10.9025 8.6821 10.976 8.4093 10.9937C8.1365 11.0114 7.86297 10.973 7.6056 10.8808C7.34823 10.7887 7.11248 10.6446 6.91291 10.4578C6.71335 10.2711 6.5542 10.0453 6.44531 9.79451C6.33642 9.54376 6.28008 9.27335 6.27979 9V2.5Z"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 1V3"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1V3"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 5H10.5"
        stroke="#B6B8C0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3L4.5 9L2 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TabIcon({ type }: { type: (typeof tabs)[number]["icon"] }) {
  if (type === "play") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 2L12.6667 8L4 14V2Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "check") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3334 4L6.00008 12L2.66675 8.66667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "bookmark") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6667 14L8.00008 11.3333L3.33341 14V2.66667C3.33341 2.31304 3.47389 1.97391 3.72394 1.72386C3.97398 1.47381 4.31312 1.33333 4.66675 1.33333H11.3334C11.687 1.33333 12.0261 1.47381 12.2761 1.72386C12.5262 1.97391 12.6667 2.31304 12.6667 2.66667V14Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00008 3.33333H2.66675C2.31312 3.33333 1.97398 3.47381 1.72394 3.72386C1.47389 3.97391 1.33341 4.31304 1.33341 4.66667V8C1.33341 8.35362 1.47389 8.69276 1.72394 8.94281C1.97398 9.19286 2.31312 9.33333 2.66675 9.33333H6.00008C6.3537 9.33333 6.69284 9.19286 6.94289 8.94281C7.19293 8.69276 7.33341 8.35362 7.33341 8V4.66667C7.33341 4.31304 7.19293 3.97391 6.94289 3.72386C6.69284 3.47381 6.3537 3.33333 6.00008 3.33333Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 3.33333H9.99992C9.6463 3.33333 9.30716 3.47381 9.05711 3.72386C8.80707 3.97391 8.66659 4.31304 8.66659 4.66667V8C8.66659 8.35362 8.80707 8.69276 9.05711 8.94281C9.30716 9.19286 9.6463 9.33333 9.99992 9.33333H13.3333C13.6869 9.33333 14.026 9.19286 14.2761 8.94281C14.5261 8.69276 14.6666 8.35362 14.6666 8V4.66667C14.6666 4.31304 14.5261 3.97391 14.2761 3.72386C14.026 3.47381 13.6869 3.33333 13.3333 3.33333Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00008 10.6667H2.66675C2.31312 10.6667 1.97398 10.8072 1.72394 11.0572C1.47389 11.3072 1.33341 11.6463 1.33341 12V13.3333C1.33341 13.687 1.47389 14.0261 1.72394 14.2761C1.97398 14.5262 2.31312 14.6667 2.66675 14.6667H6.00008C6.3537 14.6667 6.69284 14.5262 6.94289 14.2761C7.19293 14.0261 7.33341 13.687 7.33341 13.3333V12C7.33341 11.6463 7.19293 11.3072 6.94289 11.0572C6.69284 10.8072 6.3537 10.6667 6.00008 10.6667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 10.6667H9.99992C9.6463 10.6667 9.30716 10.8072 9.05711 11.0572C8.80707 11.3072 8.66659 11.6463 8.66659 12V13.3333C8.66659 13.687 8.80707 14.0261 9.05711 14.2761C9.30716 14.5262 9.6463 14.6667 9.99992 14.6667H13.3333C13.6869 14.6667 14.026 14.5262 14.2761 14.2761C14.5261 14.0261 14.6666 13.687 14.6666 13.3333V12C14.6666 11.6463 14.5261 11.3072 14.2761 11.0572C14.026 10.8072 13.6869 10.6667 13.3333 10.6667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MyCourses() {
  const [activeTab, setActiveTab] = useState<TabId>("active");

  const tabCourses = useMemo(() => {
    switch (activeTab) {
      case "active":
        return activeCourses;
      case "completed":
        return completedCourses;
      case "saved":
        return savedCourses;
      case "all":
        return [...activeCourses, ...completedCourses, ...savedCourses];
      default:
        return [];
    }
  }, [activeTab]);

  return (
    <div className="h-screen bg-[#101113] font-host flex overflow-hidden">
      <Sidebar currentPage="my-courses" />

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

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-[1187px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-white text-2xl sm:text-[28px] font-bold leading-tight tracking-tight mb-2">
                  My Courses
                </h1>
                <p className="text-[#6B7280] text-sm sm:text-[15px]">
                  Manage your learning journey and track your progress
                </p>
              </div>
              <Link
                to="/create-course"
                className="flex items-center gap-1 px-3 py-2.5 rounded-full bg-[#0AEFC9] shadow-[0_1px_2px_0_rgba(55,93,251,0.08)] self-start text-sm text-black font-medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3332 13.9501V3.89174C18.3332 2.89174 17.5165 2.15008 16.5248 2.23341H16.4748C14.7248 2.38341 12.0665 3.27508 10.5832 4.20841L10.4415 4.30008C10.1998 4.45008 9.79984 4.45008 9.55817 4.30008L9.34984 4.17508C7.8665 3.25008 5.2165 2.36674 3.4665 2.22508C2.47484 2.14174 1.6665 2.89174 1.6665 3.88341V13.9501C1.6665 14.7501 2.3165 15.5001 3.1165 15.6001L3.35817 15.6334C5.1665 15.8751 7.95817 16.7917 9.55817 17.6667L9.5915 17.6834C9.8165 17.8084 10.1748 17.8084 10.3915 17.6834C11.9915 16.8001 14.7915 15.8751 16.6082 15.6334L16.8832 15.6001C17.6832 15.5001 18.3332 14.7501 18.3332 13.9501Z"
                    fill="white"
                  />
                  <path
                    d="M10 4.57495V17.075"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.4585 7.07495H4.5835"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.0835 9.57495H4.5835"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Create New Course
              </Link>
            </div>

            <div className="mb-6">
              <div className="relative max-w-[448px]">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    stroke="#6B7280"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L11.1333 11.1333"
                    stroke="#6B7280"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full h-10 pl-10 pr-4 bg-white border border-[#E5E7EB] rounded-[10px] text-[#6B7280] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#0AEFC9]"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex p-1 bg-[#33363E] rounded-[10px] gap-1 overflow-x-auto">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex-1 sm:flex-initial ${
                        isActive
                          ? "bg-[#0AEFC9] text-[#030711] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                          : "text-[#6B7280]"
                      }`}
                    >
                      <TabIcon type={tab.icon} />
                      <span className="text-sm font-medium">
                        {tab.label} ({tab.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {activeTab === "active" && (
              <div className="space-y-[53px]">
                <div className="space-y-2">
                  <h2 className="text-white text-[19px] font-semibold leading-7">
                    Continue Learning - Priority Courses
                  </h2>
                  <CourseCard course={priorityCourse} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-white text-[19px] font-semibold leading-7">
                    All Active Courses
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "completed" && (
              <div className="space-y-4">
                <h2 className="text-white text-[19px] font-semibold leading-7">
                  Recently Completed
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {completedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="space-y-4">
                <h2 className="text-white text-[19px] font-semibold leading-7">
                  Saved for Later
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "all" && (
              <div className="space-y-4">
                <h2 className="text-white text-[19px] font-semibold leading-7">
                  All Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...activeCourses, ...completedCourses, ...savedCourses].map(
                    (course) => (
                      <CourseCard
                        key={`${activeTab}-${course.id}`}
                        course={course}
                      />
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
