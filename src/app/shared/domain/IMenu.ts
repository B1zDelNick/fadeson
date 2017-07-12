import {IMenuItem} from './IMenuItem';

export class IMenu {
  ID: number;
  slug: string;
  name: string;
  items: IMenuItem[];
}
