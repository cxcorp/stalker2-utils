export const range = (start: number, end: number) =>
  Array(end - start)
    .fill(0)
    .map((_, i) => i + start);

export const mod24 = (value: number) => ((value % 24) + 24) % 24;

type Falsy = undefined | false | 0 | "";

export const classnames = (
  ...classes: (string | Falsy | Record<string, boolean | Falsy>)[]
): string => {
  const output: string[] = [];

  for (const candidate of classes) {
    if (!candidate) {
      continue;
    }

    if (typeof candidate === "object") {
      for (const [key, value] of Object.entries(candidate)) {
        if (value) {
          output.push(key);
        }
      }
    } else {
      output.push(candidate);
    }
  }

  return output.join(" ");
};
