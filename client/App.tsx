import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordVerify from "./pages/ResetPasswordVerify";
import ChangePassword from "./pages/ChangePassword";
import PasswordChanged from "./pages/PasswordChanged";
import Signup from "./pages/Signup";
import SignupVerify from "./pages/SignupVerify";
import SignupSuccess from "./pages/SignupSuccess";
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import CreateCourse from "./pages/CreateCourse";
import Explore from "./pages/Explore";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-verify" element={<SignupVerify />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password-verify"
            element={<ResetPasswordVerify />}
          />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          <Route path="/about" element={<PlaceholderPage title="About" />} />
          <Route
            path="/how-it-works"
            element={<PlaceholderPage title="How It Works" />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/pricing"
            element={<PlaceholderPage title="Pricing" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
