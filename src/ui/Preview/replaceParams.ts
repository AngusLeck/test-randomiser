import { Param } from "../Test";

export const replaceParams = (params: Param[]) => (text: string) => {
  params.forEach((param) => {
    text = text.replaceAll(param.name, param.value?.toString());
  });
  return text;
};
