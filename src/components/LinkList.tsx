"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 빈 객체 → 모든 카드가 0회로 표시됨
  const [counts, setCounts] = useState<Counts>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Counts | null) => {
        if (cancelled || !data) return;
        // 응답 도착 전에 누른 클릭이 있으면 그만큼 더해 둔 값을 덮어쓰지 않도록 큰 값을 유지
        setCounts((prev) => {
          const next: Counts = { ...prev };
          for (const [id, n] of Object.entries(data)) {
            next[id] = Math.max(n, prev[id] ?? 0);
          }
          return next;
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const increment = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="mt-10 flex flex-col gap-3.5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClicked={() => increment(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
