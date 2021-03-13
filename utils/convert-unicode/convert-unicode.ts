/**
 * HTML entity decoding function that doesn't require creating a div,
 * and decodes the "most common" HTML escaped chars.
 * It's also supports for UPPERCASED strings.
 *
 * @param {string} text the string to be decoded
 */
const decodeHTMLEntities = (text: string) => {
  const entities = [
    ["amp", "&"],
    ["apos", "'"],
    ["#x27", "'"],
    ["#x2F", "/"],
    ["#39", "'"],
    ["#47", "/"],
    ["#124", "|"],
    ["#x27", "'"],
    ["lt", "<"],
    ["gt", ">"],
    ["nbsp", " "],
    ["quot", '"'],
  ];

  let str = text;
  // eslint-disable-next-line no-plusplus
  for (let i = 0, max = entities.length; i < max; ++i)
    str = str.replace(new RegExp(`&${entities[i][0]};`, "gi"), entities[i][1]);

  const span = document.createElement("span");

  return str.replace(/&[#A-Za-z0-9]+;/gi, innerText => {
    span.innerHTML = innerText;
    return span.innerText;
  });
};

/**
 * Decodes the specified unicode text
 *
 * convertUnicode('John\u2019s newsletter')
 * output: John's newsletter
 *
 * @param text unicoded text
 * @returns decoded text
 */
export const convertUnicode = (input: string = "") => {
  if (!input) {
    return input;
  }

  return decodeHTMLEntities(input).replace(/\\u(\w{4,4})/g, (a, b) => {
    const charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
};
