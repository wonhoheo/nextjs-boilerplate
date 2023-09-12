type Articles = {
  articles: Article[];
  articlesCount: 0;
};

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
};

type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
