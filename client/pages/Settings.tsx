import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

/* --------------------------------------------------------------
   DATA
   -------------------------------------------------------------- */
const settingsRows = [
  { label: "Room", value: "adneudujeh Room Number", highlight: true },
  { label: "Participant", value: "Identity -llzf" },
];

const statusRows = [
  { label: "Agent Connection", value: "Connected", highlight: true },
  { label: "Participant", value: "Identity -llzf" },
];

const colors = [
  { id: 1, color: "#007AFF", label: "Blue" },
  { id: 2, color: "#34C759", label: "Green" },
  { id: 3, color: "#FC0", label: "Yellow" },
  { id: 4, color: "#FF9500", label: "Orange" },
  { id: 5, color: "#32ADE6", label: "Cyan" },
];

const modules = [
  { id: 1, title: "Introduction to AI", completed: true },
  { id: 2, title: "Machine Learning Basics", completed: true },
  { id: 3, title: "Neural Networks", completed: false, active: true },
  { id: 4, title: "Prompt Engineering", completed: false },
  { id: 5, title: "Final Assessment", completed: false },
];

const languages = [
  "English", "Spanish", "French", "German", "Chinese",
  "Japanese", "Korean", "Arabic", "Portuguese", "Russian",
];

/* --------------------------------------------------------------
   COMPONENT
   -------------------------------------------------------------- */
export default function Settings() {
  /* ---------- STATE ---------- */
  const [selectedColor, setSelectedColor] = useState(colors[0].color);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: "ai", text: "Hello! I'm your AI learning assistant. How can I help you today?" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedModule, setSelectedModule] = useState(3);
  const [showVoiceCloningModal, setShowVoiceCloningModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [videoPlaying, setVideoPlaying] = useState<{ [key: number]: boolean }>({});
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  /* ---------- REFS ---------- */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  /* ---------- LOAD VOICES ---------- */
  useEffect(() => {
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      if (available.length) setVoices(available);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  /* ---------- CLOSE DROPDOWNS ON OUTSIDE CLICK ---------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (showDropdown && !target.closest('button[aria-label="Settings dropdown"]') && !target.closest('.settings-dropdown')) {
        setShowDropdown(false);
      }
      if (showLanguageDropdown && !target.closest('button[aria-label="Language dropdown"]') && !target.closest('.language-dropdown')) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDropdown, showLanguageDropdown]);

  /* ---------- HANDLERS ---------- */
  const handleSendMessage = () => {
    if (!inputText.trim() && !attachedFile) return;

    const userMsg = {
      id: Date.now(),
      type: "user" as const,
      text: inputText || `Sent file: ${attachedFile!.name}`,
      fileName: attachedFile?.name,
      fileSize: attachedFile ? (attachedFile.size / 1024).toFixed(2) + " KB" : null,
      isFile: !!attachedFile,
    };
    setMessages((p) => [...p, userMsg]);
    setInputText("");
    setAttachedFile(null);

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        type: "ai" as const,
        text: attachedFile
          ? `I've received your document "${attachedFile!.name}". I can help you with any questions.`
          : `You said: "${inputText}". Here's a detailed explanation...`,
      };
      setMessages((p) => [...p, aiMsg]);
    }, 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAttachedFile(file);
    e.target.value = "";
  };

  const removeAttachedFile = () => setAttachedFile(null);

  const handleVoiceRecord = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    setIsRecording(true);
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = "en-US";

      rec.onresult = (ev: any) => {
        let final = "", interim = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const t = ev.results[i][0].transcript;
          ev.results[i].isFinal ? (final += t + " ") : (interim += t);
        }
        setInputText((final + interim).trim());
      };
      rec.onerror = () => setIsRecording(false);
      rec.onend = () => setIsRecording(false);
      rec.start();
      recognitionRef.current = rec;
    } else {
      alert("Speech recognition not supported.");
      setIsRecording(false);
    }
  };

  const handleGenerateVideo = (text: string) => {
    const vidMsg = {
      id: Date.now() + 1,
      type: "ai" as const,
      text: "Here's the video explanation:",
      isVideo: true,
      videoText: text,
    };
    setMessages((p) => [...p, vidMsg]);
  };

  const handlePlayAudio = (text: string) => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech not supported.");
      return;
    }
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.9;
    utter.pitch = 1;
    utter.volume = 1;

    const eng = voices.find(v => v.lang.startsWith("en")) || voices[0];
    if (eng) utter.voice = eng;

    utter.onend = () => console.log("Speech finished");
    utter.onerror = (e) => console.error("Speech error:", e);

    window.speechSynthesis.speak(utter);
  };

  const handleDownloadLesson = (text: string, ext: string) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lesson-${Date.now()}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleChatVideo = (msgId: number) => {
    const video = videoRefs.current[msgId];
    if (video) {
      video.paused ? video.play() : video.pause();
      setVideoPlaying(p => ({ ...p, [msgId]: !p[msgId] }));
    }
  };

  /* ---------- RENDER ---------- */
  return (
    <div className="flex h-screen bg-[#101113] font-sans overflow-hidden">
      {/* ---- Sidebar (fallback if missing) ---- */}
      {typeof Sidebar === "function" ? <Sidebar currentPage="settings" /> : <div className="w-64 bg-[#1A1B1F]" />}

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* ----- HEADER ----- */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#33363E] bg-[#101113]">
          <h2 className="text-[#E7E8E9] text-sm sm:text-base font-semibold ml-11">
            Welcome Back, John
          </h2>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0AEFC9] hover:bg-[#10ffd4] transition-colors">
                <span className="text-black text-2xl font-normal">DA</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white text-base">John Doe</span>
                <div className="rounded bg-[#33363E] px-2 py-1">
                  <span className="text-[#838794] text-xs">Free Plan</span>
                </div>
              </div>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1A1B1F] border border-[#33363E] rounded-lg shadow-lg z-50 p-3">
                <div className="sm:hidden flex flex-col pb-3 border-b border-[#33363E] mb-3">
                  <span className="text-white text-sm font-medium">John Doe</span>
                  <div className="rounded bg-[#33363E] px-2 py-1 mt-1.5 w-fit">
                    <span className="text-[#838794] text-xs">Free Plan</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FF3B30] hover:bg-[#ff625a] text-white text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* ----- TOP BUTTONS ----- */}
        <div className="flex justify-end items-center gap-2 px-4 py-3 sm:px-6 bg-[#101113] relative">
          <button
            type="button"
            aria-label="Settings dropdown"
            onClick={() => setShowDropdown(v => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-[#454953] bg-[#222328] px-4 py-2 text-xs text-white transition-colors hover:border-white"
          >
            Settings
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="#F9F9F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {showDropdown && (
            <div className="settings-dropdown absolute right-0 top-full mt-2 w-40 bg-[#1A1B1F] border border-[#33363E] rounded-lg shadow-lg z-10">
              <ul className="flex flex-col">
                {["Profile", "Account", "Preferences"].map(item => (
                  <li key={item} className="px-4 py-2 text-white hover:bg-[#33363E] cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="inline-flex items-center gap-2 rounded-lg bg-[#FF3B30] px-4 py-2 text-xs text-white transition-colors hover:bg-[#ff625a]">
            Disconnect
          </button>
        </div>

        {/* ----- MAIN CONTENT ----- */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto flex flex-col gap-6 px-4 py-6 sm:px-6 xl:max-w-[1400px]">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[280px_1fr_380px] xl:grid-cols-[320px_1fr_380px]">

              {/* ---- MODULES ---- */}
              <section className="rounded-2xl border border-[#33363E] bg-[#222328] p-4 h-fit">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  Learning Modules
                </h3>
                <div className="flex flex-col gap-2">
                  {modules.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModule(m.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        m.active
                          ? "bg-[#007AFF] text-white"
                          : "bg-[#101113] text-[#838794] hover:bg-[#33363E]"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          m.completed
                            ? "border-[#0AEFC9] bg-[#0AEFC9]"
                            : m.active
                            ? "border-white"
                            : "border-[#454953]"
                        }`}
                      >
                        {m.completed && (
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium">{m.title}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* ---- CHAT ---- */}
              <section className="flex flex-col rounded-2xl border border-[#33363E] bg-[#222328] overflow-hidden h-[600px] sm:h-[650px] lg:h-[calc(100vh-240px)]">
                <div className="flex items-center justify-between border-b border-[#33363E] bg-[#101113] px-4 py-3">
                  <span className="text-xs tracking-wide text-[#E7E8E9] uppercase">
                    AI Learning Assistant
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 sm:p-4 ${
                          msg.type === "user"
                            ? "bg-[#007AFF] text-white"
                            : "bg-[#101113] text-[#E7E8E9]"
                        }`}
                      >
                        {/* FILE PREVIEW */}
                        {msg.isFile && (
                          <div className="flex items-start gap-3 mb-2 p-3 bg-black/20 rounded-lg">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{msg.fileName}</p>
                              <p className="text-xs opacity-75 mt-0.5">{msg.fileSize}</p>
                            </div>
                          </div>
                        )}

                        {/* VIDEO BUBBLE */}
                        {msg.isVideo ? (
                          <div className="space-y-2">
                            <p className="text-sm">{msg.text}</p>
                            <div className="bg-black/30 rounded-lg p-3 flex flex-col items-center">
                              <div className="relative w-48 h-32 bg-gray-800 rounded-lg overflow-hidden">
                                <video
                                  ref={el => (videoRefs.current[msg.id] = el)}
                                  className="w-full h-full object-cover"
                                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%23000' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23838794' font-family='sans-serif' font-size='16'%3EVideo%3C/text%3E%3C/svg%3E"
                                >
                                  <source src="" type="video/mp4" />
                                </video>
                                <button
                                  onClick={() => toggleChatVideo(msg.id)}
                                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
                                  aria-label={videoPlaying[msg.id] ? "Pause" : "Play"}
                                >
                                  {videoPlaying[msg.id] ? (
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </button>
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-400">Video explanation</p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                        )}

                        {/* AI ACTION BUTTONS */}
                        {msg.type === "ai" && !msg.isVideo && (
                          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#33363E]">
                            <button
                              onClick={() => handlePlayAudio(msg.text)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#222328] hover:bg-[#33363E] text-xs text-white transition-colors"
                              title="Play Audio"
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
                              </svg>
                              Audio
                            </button>

                            <button
                              onClick={() => handleGenerateVideo(msg.text)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#007AFF] hover:bg-[#0066DD] text-xs text-white transition-colors"
                              title="Generate Video"
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                              </svg>
                              Video
                            </button>

                            <button
                              onClick={() => handleDownloadLesson(msg.text, "txt")}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0AEFC9] hover:bg-[#10ffd4] text-xs text-black font-medium transition-colors"
                              title="Download Lesson"
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              Save
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* INPUT AREA */}
                <div className="border-t border-[#33363E] bg-[#101113] pb-[env(safe-area-inset-bottom)]">
                  {attachedFile && (
                    <div className="px-3 sm:px-4 pt-3 pb-2">
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#222328] rounded-lg border border-[#33363E]">
                        <svg className="w-4 h-4 text-[#0AEFC9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white truncate">{attachedFile.name}</p>
                          <p className="text-[10px] text-[#838794]">{(attachedFile.size / 1024).toFixed(2)} KB</p>
                        </div>
                        <button
                          onClick={removeAttachedFile}
                          className="flex-shrink-0 p-1 hover:bg-[#33363E] rounded transition-colors"
                        >
                          <svg className="w-4 h-4 text-[#838794]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-3 sm:p-4">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 sm:p-2.5 rounded-lg bg-[#222328] hover:bg-[#33363E] text-white transition-colors flex-shrink-0"
                        title="Upload document"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                      />

                      <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        onKeyPress={e => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type your question..."
                        className="flex-1 min-w-0 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg bg-[#222328] text-white text-xs sm:text-sm placeholder-[#838794] border border-[#454953] focus:border-[#0AEFC9] focus:outline-none"
                      />

                      <button
                        onClick={handleVoiceRecord}
                        className={`p-2 sm:p-2.5 rounded-lg transition-colors flex-shrink-0 ${
                          isRecording ? "bg-[#FF3B30] text-white animate-pulse" : "bg-[#222328] hover:bg-[#33363E] text-white"
                        }`}
                        title={isRecording ? "Stop recording" : "Voice input"}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                      </button>

                      <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim() && !attachedFile}
                        className="p-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#0AEFC9] hover:bg-[#10ffd4] disabled:bg-[#33363E] disabled:cursor-not-allowed text-black font-medium transition-colors flex-shrink-0 flex items-center justify-center"
                        title="Send message"
                      >
                        <span className="hidden sm:inline text-sm">Send</span>
                        <svg className="w-4 h-4 sm:hidden" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L18.041 10l-16.038 4.116L2 10l.003-4.116zM2 10v3.586l5.293-1.647L2 10z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* ---- RIGHT SIDEBAR ---- */}
              <section className="flex flex-col gap-6">
                {/* Live Avatar */}
                <div className="rounded-2xl border border-[#33363E] bg-[#222328] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#33363E] px-4 py-3 bg-[#101113]">
                    <span className="text-xs tracking-wide text-[#E7E8E9] uppercase">Live Avatar</span>
                  </div>
                  <div className="p-6 bg-black/20 flex items-center justify-center min-h-[280px]">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#0AEFC9] to-[#007AFF] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#E7E8E9] font-medium">AI Avatar</p>
                      <p className="text-xs text-[#838794] mt-1">Live • Speaking</p>
                    </div>
                  </div>
                </div>

                {/* Settings Panel */}
                <div className="flex flex-col gap-6 rounded-2xl border border-[#33363E] bg-[#222328] px-6 py-6">
                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-base font-semibold text-white">Description</h2>
                    <p className="rounded-lg bg-[#101113] px-4 py-3 text-sm text-[#696E7E]">
                      A Playground for Language interpretation
                    </p>
                  </div>

                  {/* Language */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base font-semibold text-white">Language</h2>
                    <div className="relative">
                      <button
                        aria-label="Language dropdown"
                        onClick={() => setShowLanguageDropdown(v => !v)}
                        className="w-full px-4 py-3 rounded-lg bg-[#101113] hover:bg-[#33363E] text-left text-sm text-[#E7E8E9] border border-[#33363E] transition-colors flex items-center justify-between"
                      >
                        <span>{selectedLanguage}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {showLanguageDropdown && (
                        <div className="language-dropdown absolute top-full mt-2 w-full bg-[#222328] border border-[#33363E] rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                          {languages.map(l => (
                            <button
                              key={l}
                              onClick={() => {
                                setSelectedLanguage(l);
                                setShowLanguageDropdown(false);
                              }}
                              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                                selectedLanguage === l ? "bg-[#007AFF] text-white" : "text-[#E7E8E9] hover:bg-[#33363E]"
                              }`}
                            >
                              {l}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Selection (Voice / Avatar) */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base font-semibold text-white">Selection</h2>

                    {/* Voice Cloning */}
                    <button
                      onClick={() => setShowVoiceCloningModal(v => !v)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101113] hover:bg-[#33363E] text-left text-sm text-[#E7E8E9] border border-[#33363E] transition-colors flex items-center justify-between"
                    >
                      <span>Voice Cloning</span>
                      <svg className="w-5 h-5 text-[#0AEFC9]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {showVoiceCloningModal && (
                      <div className="p-4 rounded-lg bg-[#101113] border border-[#33363E]">
                        <div className="flex items-center justify-center p-6 border-2 border-dashed border-[#454953] rounded-lg">
                          <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-3 text-[#0AEFC9]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-[#838794] mb-2">Record your voice sample</p>
                            <button className="px-4 py-2 rounded-lg bg-[#0AEFC9] hover:bg-[#10ffd4] text-black text-xs font-medium transition-colors">
                              Start Recording
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Avatar Selection */}
                    <button
                      onClick={() => setShowAvatarModal(v => !v)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101113] hover:bg-[#33363E] text-left text-sm text-[#E7E8E9] border border-[#33363E] transition-colors flex items-center justify-between"
                    >
                      <span>Avatar Selection</span>
                      <svg className="w-5 h-5 text-[#0AEFC9]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {showAvatarModal && (
                      <div className="p-4 rounded-lg bg-[#101113] border border-[#33363E]">
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3, 4, 5, 6].map(i => (
                            <button
                              key={i}
                              className="aspect-square rounded-lg bg-[#222328] hover:bg-[#33363E] border-2 border-transparent hover:border-[#0AEFC9] transition-all flex items-center justify-center"
                            >
                              <svg className="w-8 h-8 text-[#838794]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Settings Rows */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base font-semibold text-white">Settings</h2>
                    <div className="flex flex-col divide-y divide-[#33363E] rounded-lg border border-[#33363E]">
                      {settingsRows.map(r => (
                        <div
                          key={r.label}
                          className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="text-sm text-[#696E7E]">{r.label}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm text-right ${r.highlight ? "text-[#007AFF]" : "text-[#696E7E]"}`}>
                              {r.value}
                            </span>
                            {r.highlight && <span className="inline-flex h-2.5 w-2.5 rounded-full border border-[#007AFF] bg-[#222328]" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Rows */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-base font-semibold text-white">Status</h2>
                    <div className="flex flex-col divide-y divide-[#33363E] rounded-lg border border-[#33363E]">
                      {statusRows.map(r => (
                        <div
                          key={r.label}
                          className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="text-sm text-[#696E7E]">{r.label}</span>
                          <span className={`text-sm text-right ${r.highlight ? "text-[#007AFF]" : "text-[#696E7E]"}`}>
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color Picker */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-base font-semibold text-white">Select AI Agent Color</h2>
                    <div className="flex flex-wrap items-center gap-2">
                      {colors.map(c => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedColor(c.color)}
                          aria-label={`Select ${c.label}`}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform ${
                            selectedColor === c.color ? "ring-2 ring-white ring-offset-2 ring-offset-[#222328]" : ""
                          }`}
                          style={{ backgroundColor: c.color }}
                        />
                      ))}
                    </div>
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
