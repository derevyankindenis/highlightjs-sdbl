/*
Language: sdbl
Author: Derevyankin Denis <derevyankindenis@mail.ru>
Description: Query language for 1C:Enterprise platform
*/

export default function (hljs) {
  const RESERVED_WORDS = [
    "выбрать",
    "select",
    "разрешенные",
    "allowed",
    "различные",
    "distinct",
    "первые",
    "top",
    "как",
    "as",
    "пустаятаблица",
    "emptytable",
    "поместить",
    "into",
    "уничтожить",
    "drop",
    "из",
    "from",
    "где",
    "where",
    "имеющие",
    "having",
    "автоупорядочивание",
    "autoorder",
    "итоги",
    "totals",
    "периодами",
    "periods",
    "индексировать",
    "index",
    "выразить",
    "cast",
    "возр",
    "asc",
    "убыв",
    "desc",
    "спецсимвол",
    "escape",
    "сгруппированопо",
    "groupedby",
  ];

  // По нескольку сло
  // "Для\\s+Изменения",
  // "(For\\s+Update(\\s+Of)?)",
  // "По(\\s+Общие)?",
  // "By(\\s+Overall)?",
  // "(Только\\s+)?Иерархия",
  // "(Only\\s+)?Hierarchy",
  // "Объединить(\\s+Все)?",
  // "Union(\\s+All)?",
  // "(Упорядочить\\s+По)",
  // "(Order\\s+By)",
  // "(Сгруппировать\\s+По(\\s+Группирующим\\s+Наборам)?)",
  // "(Group\\s+By(\\s+Grouping\\s+Set)?)",

  // "Левое",
  // "Left",
  // "Правое",
  // "Right",
  // "Полное",
  // "Full",
  // "Outer",
  // "Соединение",
  // "Join",
  // "Внутреннее",
  // "Inner",

  const TYPES = [
    "Число",
    "Number",
    "Строка",
    "String",
    "Дата",
    "Date",
    "Булево",
    "Boolean",
  ];

  const KEYWORDS = [...RESERVED_WORDS];

  return {
    name: "sdbl",
    case_insensitive: true,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: reduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),
      type: TYPES,
    },
    contains: [hljs.NUMBER_MODE],
  };
}
