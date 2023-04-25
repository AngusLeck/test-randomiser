import { Question } from "../Test";

export const examples: Question[] = [
  {
    __type_name__: "short-answer",
    params: [{ name: "a", range: { min: 3, max: 7 }, value: 5 }],
    question: "If $x^2 - `a**2` = 0$ find all possible solutions $x$.",
    answer: "$x = \\pm `a`$",
  },
  {
    __type_name__: "short-answer",
    params: [{ name: "a", range: { min: 2, max: 6 }, value: 4 }],
    question: "Evaluate $\\displaystyle \\int_{0}^{`a`} 4x^3 + `a`\\ dx$.",
    answer: "$`a**4 + a**2`$",
  },
  {
    __type_name__: "short-answer",
    params: [{ name: "a", range: { min: 1, max: 3 }, value: 2 }],
    question:
      "Express $\\displaystyle \\frac{x}{x^2 - `3*a*2 + 3`x + `9*a**2 + a*9`}$ in the form $\\displaystyle \\frac{A}{x - B} + \\frac{C}{x - D}$",
    answer:
      "$\\displaystyle \\frac{-`a`}{x-`3*a`} + \\frac{`a+1`}{x - `3*a + 3`}$",
  },
];
