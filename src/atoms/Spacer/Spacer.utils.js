/**
 * Space Generator
 * - If the spacer has children, it will contain the children and attach margins to it.
 * - If the spacer doesn't have any children,
 *    -
 * @param {*} param0
 * @returns
 */

// TODO: Write test cases for getMargins

export const getMargins = ({ xy, x, y, t, r, b, l }) => {
  let margins = { t: 0, r: 0, b: 0, l: 0 };

  if (
    typeof xy === "undefined" &&
    typeof x === "undefined" &&
    typeof y === "undefined" &&
    typeof t === "undefined" &&
    typeof r === "undefined" &&
    typeof b === "undefined" &&
    typeof l === "undefined"
  ) {
    margins = { t: 1, r: 1, b: 1, l: 1 };
  }

  if (typeof xy === "number") {
    margins["t"] = xy;
    margins["r"] = xy;
    margins["b"] = xy;
    margins["l"] = xy;
  }
  if (typeof x === "number") {
    margins["r"] = x;
    margins["l"] = x;
  }
  if (typeof y === "number") {
    margins["t"] = y;
    margins["b"] = y;
  }
  if (typeof t === "number") margins["t"] = t;
  if (typeof r === "number") margins["r"] = r;
  if (typeof b === "number") margins["b"] = b;
  if (typeof l === "number") margins["l"] = l;

  return `${margins.t}rem ${margins.r}rem ${margins.b}rem ${margins.l}rem`;
};
