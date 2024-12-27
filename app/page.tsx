import CoverParticles from "@/components/cover-particicles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="min-h-screen h-full overflow-hidden">
    <TransitionPage />
    <div className="relative flex min-h-screen bg-no-repeat bg-gradient-to-r from-[#1a0033] via-[#220044] to-[#330066]">
      <CoverParticles />
      <div className="mx-auto my-auto w-[95%] max-w-[1200px] sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] p-4 sm:p-6 lg:p-8">
        <Introduction />
      </div>
    </div>
  </main>
  
  );
}
