import Header from "@/components/Header";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-brand-dark font-host">
      <Header />

      <main className="px-4 sm:px-8 lg:px-20 pt-[120px] sm:pt-[140px] lg:pt-[163px] pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-brand-light font-clash text-[40px] sm:text-[52px] lg:text-[64px] font-medium leading-[120%] tracking-[-2px] mb-6">
            {title}
          </h1>
          <p className="text-brand-light/60 font-host text-base sm:text-lg max-w-2xl mx-auto">
            This page is coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
