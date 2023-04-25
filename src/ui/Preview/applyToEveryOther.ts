export function applyToEveryOther<T>(
  func: (input: T) => T
): (input: T, index: number) => T {
  return (split, index) => (index % 2 ? func(split) : split);
}
