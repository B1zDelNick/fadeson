export class IMenuItem {
  id: number;
  order:number;
  title: string;
  url: string;
  xfn: string;
  classes: string;
  children: IMenuItem[] = null;
}
