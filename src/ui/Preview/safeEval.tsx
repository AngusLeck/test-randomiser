export function safeEval(exp: string): string {
  try {
    return unsafeEval(exp);
  } catch (e) {
    return "";
  }
}

function unsafeEval(exp: string): string {
  const test = /[^-+/*\d ]/g;
  if (exp.match(test)?.length) {
    throw new Error("Please only use supported characters in calculated text");
  }

  // eslint-disable-next-line no-eval
  return eval(exp.replaceAll(test, ""));
}
