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

  const MULTI_WORD_TYPES = [
    "левое соединение",
    "left join",
    "правое соединение",
    "right join",
    "полное соединение",
    "full join",
    "внутреннее соединение",
    "inner join",
    "объединить все",
    "union all",
    "для изменения",
    "for update",
    "упорядочить по",
    "order by",
    "по общие",
    "by overall",
    "только иерархия",
    "only hierarchy",
    "сгруппировать по",
    "group by",
  ];

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

  const OPERATOR = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0,
  };

  const STRING = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }],
      },
    ],
  };

  const QUOTED_IDENTIFIER = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }],
  };

  function kws_to_regex(list) {
    return regex.concat(
      /\b/,
      regex.either(
        ...list.map((kw) => {
          return kw.replace(/\s+/, "\\s+");
        })
      ),
      /\b/
    );
  }

  const MULTI_WORD_KEYWORDS = {
    scope: "keyword",
    match: kws_to_regex(MULTI_WORD_TYPES),
    relevance: 0,
  };

  return {
    name: "sdbl",
    case_insensitive: true,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: KEYWORDS, //sreduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),
      type: TYPES,
    },
    contains: [
      STRING,
      MULTI_WORD_KEYWORDS,
      hljs.NUMBER_MODE,
      OPERATOR,
      QUOTED_IDENTIFIER,
    ],
  };
}
