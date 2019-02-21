export interface INewsPost {
  id: string;
  timestamp: number;
  title: string;
  link: string;
  source: string;
  sourceId: number;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
    parent: number;
  }>;
  facebook: number;
  blog: boolean;
  clicks: number;
  plus_votes: number;
  minus_votes: number;
  votes: number;
  level: number;
  batch: {
    id: number;
    size: number;
  };
  category: string;
  categoryId: number;
  isCustomItem: boolean;
}
