import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const settingsRows = [
  {
    label: "Room",
    value: "adneudujeh Room Number",
    highlight: true,
  },
  {
    label: "Participant",
    value: "Identity -llzf",
  },
];

const statusRows = [
  {
    label: "Agent Connection",
    value: "Connected",
    highlight: true,
  },
  {
    label: "Participant",
    value: "Identity -llzf",
  },
];

const colors = [
  { id: 1, color: "#007AFF", label: "Blue" },
  { id: 2, color: "#34C759", label: "Green" },
  { id: 3, color: "#FC0", label: "Yellow" },
  { id: 4, color: "#FF9500", label: "Orange" },
  { id: 5, color: "#32ADE6", label: "Cyan" },
];

export default function Settings() {
  const [selectedColor, setSelectedColor] = useState(colors[0].color);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="h-screen bg-[#101113] font-host flex overflow-hidden">
      <Sidebar currentPage="settings" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header Section */}
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


<div className="flex justify-end items-center gap-2 px-4 py-3 sm:px-6 bg-[#101113] relative">
  {/* Settings Button */}
  <button
    type="button"
    onClick={() => setShowDropdown(!showDropdown)}
    className="inline-flex items-center gap-2 rounded-lg border border-[#454953] bg-[#222328] px-4 py-2 text-xs text-white transition-colors hover:border-white"
  >
    Settings
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#F9F9F9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  {showDropdown && (
    <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-[#454953] rounded-lg shadow-lg z-10">
      <ul className="flex flex-col">
        <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Profile</li>
        <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Account</li>
        <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Preferences</li>
      </ul>
    </div>
  )}

  {/* Disconnect Button */}
  <button
    type="button"
    className="inline-flex items-center gap-2 rounded-lg bg-[#FF3B30] px-4 py-2 text-xs text-white transition-colors hover:bg-[#ff625a]"
  >
    Disconnect
  </button>
</div>


        <div className="flex-1 overflow-auto">
          <div className="mx-auto flex flex-col gap-6 px-4 py-6 sm:px-6 xl:max-w-[1316px]">
            <div className="grid gap-6 xl:[grid-template-columns:minmax(0,28rem)_minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-6">
                <section className="rounded-2xl border border-[#33363E] bg-[#222328]">
                  <div className="flex items-center justify-between border-b border-[#33363E] px-4 py-3">
                    <span className="text-xs tracking-wide text-[#E7E8E9] uppercase">
                      Video
                    </span>
                    <button
                      type="button"
                      className="rounded-lg border border-[#454953] px-4 py-2 text-xs text-white transition-colors hover:border-white"
                    >
                      Upload Track
                    </button>
                  </div>
                  <div className="flex min-h-[280px] items-center justify-center px-6 py-8 text-center text-sm text-[#6b6f75]">
                    Video feed will display here once connected.
                  </div>
                </section>

                <section className="rounded-2xl border border-[#33363E] bg-[#222328]">
                  <div className="flex items-center justify-between border-b border-[#33363E] px-4 py-3">
                    <span className="text-xs tracking-wide text-[#E7E8E9] uppercase">
                      AudioWaves
                    </span>
                    <button
                      type="button"
                      className="rounded-lg bg-[#0AEFC9] px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-[#10ffd4]"
                    >
                      Upload Track
                    </button>
                  </div>
                  <div className="flex min-h-[220px] items-center justify-center px-6 py-8 text-center text-sm text-[#6b6f75]">
                    Audio visualizations will appear once audio is uploaded.
                  </div>
                </section>
              </div>

              <section className="flex flex-col rounded-2xl border border-[#454953] bg-[#222328]">
                <div className="flex items-center justify-center border-b border-[#33363E] bg-[#101113] px-4 py-3">
                  <span className="text-xs tracking-wide text-[#E7E8E9] uppercase">
                    Chat Dialogue
                  </span>
                </div>
                <div className="flex flex-1 min-h-[320px] flex-col items-center justify-center gap-4 px-6 py-10 text-center text-sm text-[#838794] md:min-h-[420px]">
                  <p className="max-w-[360px] leading-relaxed">
                    Chat messages between participants and AI agents will be
                    displayed here once the session begins.
                  </p>
                </div>
              </section>

              <section className="flex flex-col gap-8 rounded-2xl border border-[#33363E] bg-[#222328] px-6 py-6">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-base font-semibold text-white">
                    Description
                  </h2>
                  <p className="rounded-lg bg-[#101113] px-4 py-3 text-sm text-[#696E7E]">
                    A Playground for Language interpretation
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-base font-semibold text-white">
                    Settings
                  </h2>
                  <div className="flex flex-col divide-y divide-[#33363E] rounded-lg border border-[#33363E]">
                    {settingsRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-sm text-[#696E7E]">
                          {row.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm text-right ${
                              row.highlight
                                ? "text-[#007AFF]"
                                : "text-[#696E7E]"
                            }`}
                          >
                            {row.value}
                          </span>
                          {row.highlight && (
                            <span className="inline-flex h-2.5 w-2.5 rounded-full border border-[#007AFF] bg-[#222328]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-base font-semibold text-white">Status</h2>
                  <div className="flex flex-col divide-y divide-[#33363E] rounded-lg border border-[#33363E]">
                    {statusRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-sm text-[#696E7E]">
                          {row.label}
                        </span>
                        <span
                          className={`text-sm text-right ${
                            row.highlight ? "text-[#007AFF]" : "text-[#696E7E]"
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-base font-semibold text-white">
                      Microphone
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="flex items-center justify-center rounded border border-[#454953] bg-[#222328] p-2 text-white transition-colors hover:border-white"
                        aria-label="Toggle microphone"
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M19.1202 9.11986C18.7302 9.11986 18.4202 9.42986 18.4202 9.81986V11.3999C18.4202 14.9399 15.5402 17.8199 12.0002 17.8199C8.46018 17.8199 5.58018 14.9399 5.58018 11.3999V9.80986C5.58018 9.41986 5.27018 9.10986 4.88018 9.10986C4.49018 9.10986 4.18018 9.41986 4.18018 9.80986V11.3899C4.18018 15.4599 7.31018 18.8099 11.3002 19.1699V21.2999C11.3002 21.6899 11.6102 21.9999 12.0002 21.9999C12.3902 21.9999 12.7002 21.6899 12.7002 21.2999V19.1699C16.6802 18.8199 19.8202 15.4599 19.8202 11.3899V9.80986C19.8102 9.42986 19.5002 9.11986 19.1202 9.11986Z"
                            fill="#F9F9F9"
                          />
                          <path
                            d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z"
                            fill="#F9F9F9"
                          />
                        </svg>
                      </button>
                      <div className="inline-flex h-9 items-center gap-2 rounded border border-[#454953] bg-[#222328] px-4">
                        <span className="text-xs text-white">
                          Desktop Microphone
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[115px] rounded-lg border border-[#33363E] bg-[#101113]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-base font-semibold text-white">
                    Select AI Agent Color
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setSelectedColor(color.color)}
                        aria-label={`Select ${color.label}`}
                        aria-pressed={selectedColor === color.color}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101113] ${
                          selectedColor === color.color
                            ? "ring-2 ring-white ring-offset-2 ring-offset-[#222328]"
                            : ""
                        }`}
                        style={{ backgroundColor: color.color }}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
