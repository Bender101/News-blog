import { User } from "entities/User";

export enum ArticleBlockType {
  IMAGE = "IMAGE",
  CODE = "CODE",
  TEXT = "TEXT",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleImageBlock
  | ArticleCodeBlock
  | ArticleTextBlock;

export enum ArticleView {
  BIG = "BIG",
  SMALL = "SMALL",
}

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
