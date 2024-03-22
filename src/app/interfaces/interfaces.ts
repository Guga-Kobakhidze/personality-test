// Data interface

export interface IOptions {
  answer: string;
  text: string;
  attributeVal: string;
  radioGif: string;
}

export interface QuestionProps {
  question_number: number;
  question_text: string;
  gif: string;
  options: IOptions[];
}

// Context interface

export interface ValuesContextType {
  attributes: string[];
  setAttributes: React.Dispatch<React.SetStateAction<string[]>>;
}

// Button interface

export interface IBtn {
  text: string;
  href?: string | undefined;
  error?: boolean;
}

// useRequest Interface

export interface UseRequestProps {
  url: string;
  method: string;
}
