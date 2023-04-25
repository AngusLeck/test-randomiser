import { Param } from "../Test";
import { applyToEveryOther } from "./applyToEveryOther";
import { replaceParams } from "./replaceParams";
import { safeEval } from "./safeEval";

export const evaluateExpression = (params: Param[]) => (expression: string) =>
  expression
    .split("`")
    .map(applyToEveryOther(replaceParams(params)))
    .map(applyToEveryOther(safeEval))
    .join("");
