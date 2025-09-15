/*
Language: sdbl
Author: Derevyankin Denius <derevyankindenis@mail.ru>
Description: Query language for 1C:Enterprise platform
*/

export default function (hljs) {
  return {
    name: "sdbl",
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [hljs.NUMBER_MODE],
  };
}
