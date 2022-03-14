export interface IImgItem {
  id?: string;
  title?: string;
  src: string;
  desc?: string;
}

export interface IPreview {
  sources: IImgItem[];
  visible?: boolean;
}
