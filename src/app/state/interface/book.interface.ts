import { Volume } from "./volume.interface";

export interface Book {
  id: string;
  selfLink: string;
  searchInfo: { textSnippet: string } | null;
  volumeInfo: Volume;
}
