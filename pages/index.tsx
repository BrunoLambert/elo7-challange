import "../app/styles/landing.css";
import Header from "@/app/components/Header";
import Comments from "@/app/components/Comments";
import Team from "@/app/components/Team";
import Benefits from "@/app/components/Benefits";
import JobSection from "@/app/components/Jobs/Section";

export default function Home() {
  return (
    <main className="w-screen">
      <Header />
      <Comments />
      <Team />
      <Benefits />
      <JobSection />
    </main>
  );
}
