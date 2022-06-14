export type ArticleType = {
  id: number;
  created_at: Date;
  updatet_at: Date;
  title: string;
  body: string;
  slug: string;
  user: { name: string };
};
