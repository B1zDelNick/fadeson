import {IRendered} from './IRendered';

export interface IPost {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: IRendered;
  content: IRendered;
  excerpt: IRendered;
  categories: number[];
  featured_media: number;
}
