import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-16 pt-6 sm:pt-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-8 sm:mt-10">
        <Profile {...profile} />
      </div>
      <ul className="mt-10 flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
