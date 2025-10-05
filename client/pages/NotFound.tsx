import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-dark font-host">
      <Header />
      <main className="px-4 sm:px-8 lg:px-20 pt-[120px] sm:pt-[140px] lg:pt-[163px] pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-brand-light font-clash mb-4">
            404
          </h1>
          <p className="text-xl text-brand-light/60 mb-8 font-host">
            Oops! Page not found
          </p>
          <Link
            to="/"
            className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
          >
            <span className="text-white font-host text-base font-medium">
              Return to Home
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
