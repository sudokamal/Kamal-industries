"use client";
import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <main className={isAdmin ? "flex-grow" : "flex-grow pt-[72px] md:pt-[84px]"}>
      {children}
    </main>
  );
}
