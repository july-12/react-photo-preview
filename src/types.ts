import { DialogProps } from 'rc-dialog';
export interface IImgItem {
  id?: string;
  title?: string;
  src: string;
  desc?: string;
}

export interface IPreviewProps extends DialogProps {
  sources: IImgItem[];
  defaultCurrentIndex?: number;
}

export interface ITransform {
  translate: string;
  scale: string;
}
export interface IStore {
  sources: IImgItem[];
  currentIndex: number;
  transform?: ITransform;
  visible: boolean;
  getCurrentImg: () => IImgItem | undefined;
}

//========== context ============
export type TUpdateType<T> = React.Dispatch<React.SetStateAction<T>>;
export type TStoreUpdateType = TUpdateType<IStore>;

export type TCtxState = {
  state: IStore;
  update: TStoreUpdateType;
};
