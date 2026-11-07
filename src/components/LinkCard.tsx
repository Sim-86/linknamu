"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  const recordClick = () => {
    const url = `/api/clicks/${encodeURIComponent(link.id)}`;
    // 새 탭으로 이동해도 요청이 유실되지 않도록 sendBeacon 우선 사용
    if (!navigator.sendBeacon?.(url)) {
      fetch(url, { method: "POST", keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-5 py-4 text-center text-[15px] font-semibold shadow-[0_1px_2px_rgba(150,80,40,0.05),0_10px_28px_-14px_rgba(150,80,40,0.25)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(150,80,40,0.05),0_14px_32px_-14px_rgba(150,80,40,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/80 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      {link.title}
    </a>
  );
}
