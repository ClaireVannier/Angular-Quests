export interface MovieForm {
  identification: {
    id: string;
    title: string;
  };
  type: string;
  releaseYear: number;
  file: string;
}
