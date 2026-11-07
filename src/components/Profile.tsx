type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          className="h-32 w-32 rounded-full object-cover ring-4 ring-emerald-500/30 sm:h-36 sm:w-36"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500 text-3xl font-bold text-white sm:h-36 sm:w-36"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
        {bio}
      </p>
    </section>
  );
}
