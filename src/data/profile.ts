// TODO: 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘 AI 개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];
