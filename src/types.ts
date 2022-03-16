export interface IImgItem {
  id?: string;
  title?: string;
  src: string;
  desc?: string;
}

export interface IPreviewProps {
  sources: IImgItem[];
  defaultCurrentIndex?: number;
  visible?: boolean;
}

export interface ITransform {
  translate: string;
  scale: string;
}
export interface IStore {
  sources: IImgItem[];
  currentIndex: number;
  transform?: ITransform;
  getCurrentImg: () => IImgItem | undefined;
}

export type TUpdateType<T> = React.Dispatch<React.SetStateAction<T>>;
export type TStoreUpdateType = TUpdateType<IStore>;

export type TCtxState = {
  state: IStore;
  update: TStoreUpdateType;
};
