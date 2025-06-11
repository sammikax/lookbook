export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface ModalImageData {
  [outfitSetKey: string]: Image[];
}