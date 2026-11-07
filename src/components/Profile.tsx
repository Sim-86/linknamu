type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 위쪽이 밝은 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-gradient-to-b from-white to-white/40 p-1.5 shadow-[0_2px_4px_rgba(150,80,40,0.06),0_16px_36px_-12px_rgba(194,94,48,0.4)] dark:from-white/25 dark:to-white/5 dark:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.6)]">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          />
        ) : (
          <div
            aria-label={`${name} 프로필 사진`}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-rose-400 text-3xl font-semibold text-white sm:h-32 sm:w-32"
          >
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
