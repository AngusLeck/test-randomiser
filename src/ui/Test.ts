export interface Test {
  displayName: string;
  description: string;
  questions: Question[];
  length: number;
}

export type Question<T extends QuestionType = QuestionType> =
  T extends QuestionType
    ? {
        __type_name__: T;
        params: Param[];
        question: string;
        answer: string;
      }
    : never;

export type QuestionType = "short-answer" | "multiple-choice";

export interface Param {
  name: string;
  range: { min: number; max: number };
  value: number;
}
