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
      className="block w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      {link.title}
    </a>
  );
}
