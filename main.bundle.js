/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Library_Poets/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://Library_Poets/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Library_Poets/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n  return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n    return buf;\n  }\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://Library_Poets/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/components/scripts/data.js":
/*!****************************************!*\
  !*** ./src/components/scripts/data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nlet poets = [{\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Francishak_Bahushevich_-_bf_1890_AD_grey.jpg/1200px-Francishak_Bahushevich_-_bf_1890_AD_grey.jpg\",\n  name: \"Францішак Багушэвіч\",\n  description: \"Беларускі паэт і пісьменнік, выдатны перадстаўнік класікі беларускай літаратуры. Яго творы адлюстроўваюць нацыянальныя гісторычныя тэмы, любоў да прыроды і паходжання.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg/640px-Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg\",\n  name: \"Якуб Колас\",\n  description: \"Беларускі пісьменнік і паэт, адзін з самых вядомых фігур у беларускай літаратуры, аўтар вядомай драмы 'На гары'. Яго творы з'яўляюцца класікай беларускай літаратуры і адлюстроўваюць нацыянальныя гісторычныя тэмы.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/5/56/Bagdanovich_M_2.jpg\",\n  name: \"Максім Багдановіч\",\n  description: \"Беларускі паэт і публіцыст, які зробіў вялікі ўклад у развіццё беларускай літаратуры і культуры. Яго творы адлюстроўваюць нацыянальныя і сацыяльныя праблемы, паходжанне і нацыянальную гіднасць.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/4/45/Kupala_Janka.jpg\",\n  name: \"Янка Купала\",\n  description: \"Беларускі паэт і пісьменнік, які прыняў актыўны ўдзел у нацыянальным адраджэнні Беларусі. Яго творы адлюстроўваюць нацыянальную гіднасць, палітычныя і сацыяльныя праблемы, іхнюю аснову складаюць беларускія народныя легенды і героічныя абразы.\"\n}, {\n  src: \"https://knigogid.ru/storage/authors/1d/d7/da/30/f6/51f216511ee5aaff98b95e30c53609c7.jpg\",\n  name: \"Іван Шамякін\",\n  description: \"Беларускі пісьменнік і літаратурны крытык, вядомы сваімі даследаваннямі і крытычнымі артыкуламі пра беларускую літаратуру і культуру.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/9/97/U%C5%82adzis%C5%82a%C5%AD_Ho%C5%82ub_%28Ha%C5%82ubok%29._%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%BE%D0%BB%D1%83%D0%B1_%28%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%29_%281929%29.jpg\",\n  name: \"Уладзіслаў Галубок\",\n  description: \"Арыштавалі Галубка ў 1937 г. «традыцыйным» спосабам, на досвітку. Хутка ў мінскай кватэры драматурга адбыўся вобыск. Забралі не толькі ўсе рукапісы, але нават прыватныя рэчы тэатра. Вельмі пацярпела сям’я: старэйшаму сыну Эдуарду, навуковаму супрацоўніку, не дазволілі абараніць дысертацыю па беларускай драматургіі, дачку Багуславу прымусілі ехаць на вёску — «перавыхоўвацца» ў калгасе, малодшых сыноў выключылі з камсамола, як дзяцей ворага народа. Жонка ў адчаі спрабавала скончыць жыццё самагубствам — яе ледзь выратавалі.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/uk/thumb/2/25/%D0%A5%D0%BE%D0%B4%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-%D0%9B%D0%B5%D0%B6%D0%B5.jpeg/200px-%D0%A5%D0%BE%D0%B4%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-%D0%9B%D0%B5%D0%B6%D0%B5.jpeg\",\n  name: \"Надзея Хадасевіч\",\n  description: \"Беларуская паэтка і пісьменніца, вядомая сваімі вершамі і прозай, якія адлюстроўваюць жыццё і пачуцці жанчыны ў сучасным грамадстве.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Niakliaew2.jpg/266px-Niakliaew2.jpg\",\n  name: \"Уладзімір Некляеў\",\n  description: \"Беларускі пісьменнік, паэт і грамадскі дзеяч, актыўны ўдзельнік у барацьбе за дэмакратыю і правы чалавека ў Беларусі.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D1%80%D1%83%D0%B4%D0%BD%D1%96%D0%BA%D0%B0%D1%9E.jpg/200px-%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D1%80%D1%83%D0%B4%D0%BD%D1%96%D0%BA%D0%B0%D1%9E.jpg\",\n  name: \"Алесь Пруднікаў\",\n  description: \"Але́сь Пру́днікаў (14 красавіка 1910, вёска Стары Дзедзін Клімавіцкага павету Магілёўскай губэрні, цяпер Клімавіцкі раён Магілёўскай вобласьці — 5 жніўня 1941, вёска Утукі Кандапоскага раёну Карэла-Фінскай ССР) — беларускі паэт. Стрыечны брат пісьменьніка Паўла Пруднікава.\"\n}, {\n  src: \"https://s5-goods.ozstatic.by/2000/388/237/101/101237388_0.jpg\",\n  name: \"Ігар Хадановіч\",\n  description: \"У Выдавецкім доме «Звязда» падрыхтавана да друку кніга Ігара Хадановіча «Чалавек з маёй біяграфіі». Шмат намаганняў дзеля нараджэння гэтай кнігі прыклаў, прыкладвае ветэран педагагічнай працы Вацлаў Матусевіч. Доўгія гады ён працаваў начальнікам аддзела адукацыі Дзяржынскага райвыканкама. Менавіта Вацлаў Іванавіч стаў ініцыятарам нараджэння новага выдання твораў Ігара Хадановіча...\"\n}, {\n  src: \"https://mozyrlib.by/colleague/colleg_img/f12.jpg\",\n  name: \"Міхась Лынькоў\",\n  description: \"Дэбютаваў вершам у 1919 годзе (смаленская газета «Борьба»), першыя апавяданні — у 1926 годзе (бабруйская газета «Камуніст» і зборнік бабруйскага філіяла «Маладняка» — «Уздым»). Выйшлі зборнікі прозы «Апавяданні» (1927), «Гой» (1929), «Андрэй Лятун» (1930), «Саўка-агіцірнік» (1933), «На вялікай хвалі» (1934), «Баян» (1935), «Сустрэчы» (1940), «Астап» (1944), «Апошні зверыядавец» (аповесць, 1930), «За акіянам» (нататкі, апавяданні, нарысы, 1962), раман «На чырвоных лядах» (1934) і раман-эпапея ў 4 кнігах «Векапомныя дні» (1958, 2-е перапрацаванае выданне ў 1969), нарыс «Герой Савецкага Саюза Канстанцін Заслонаў» (1944), апавяданне «Агні Танганьікі» (1957), «Выбраныя творы» (1931, 1934, 1952), «Выбраныя апавяданні» (1938, 1941, 1947), Зборы твораў у 4-х (1967—68) і ў 8 тамах (1981—85).\"\n}, {\n  src: \"https://gdb.rferl.org/00C56704-1FE4-4492-9AF8-FCBF95897E57_cx0_cy11_cw0_w1200_r1.jpg\",\n  name: \"Рыгор Барадулін\",\n  description: \"Беларускі пісьменнік і публіцыст, які прысвяціў сваю творчасць барацьбе за нацыянальныя правы і свабоду слова ў Беларусі.\"\n}, {\n  src: \"https://www.radabnr.org/wp-content/uploads/2017/06/1924-Bykau2.jpg\",\n  name: \"Васіль Быкаў\",\n  description: \"Беларускі пісьменнік і публіцыст, аўтар вядомага рамана 'Кружак караля Бронзы'. Яго творы адлюстроўваюць гісторычныя і сацыяльныя праблемы, жыццё ў вайну і справядлівасць.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/be/thumb/d/d9/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D0%B5%D1%82%D1%80%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87.jpg/274px-%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D0%B5%D1%82%D1%80%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87.jpg\",\n  name: \"Алесь Петрашкевіч\",\n  description: \"Алесь (Аляксандр Лявонавіч) Петрашке́віч (1 мая 1930, в. Пярэвалачня, Талачынскі раён — 23 жніўня 2012, Мінск) — беларускі пісьменнік, драматург. Кандыдат гістарычных навук[2] (1967), заслужаны работнік культуры БССР (1975), лаўрэат Дзяржаўнай прэміі БССР (1976) за ўдзел у падрыхтоўцы і выданні Беларускай Савецкай Энцыклапедыі.\"\n}, {\n  src: \"https://nashi-lyudi.by/images/33/2733.jpg\",\n  name: \"Алесь Пісьмянкоў\",\n  description: \"Магілёўская вобласць, Касцюковіцкі раён, Бялынкавічы. Пісаў творыі для дзяцей: кнігі «Заўзятары» (1993), «Ласуны — веселуны» (1997), «Мы з братам» (2003). Калі працаваў у «Вожыку» спрабаваў сябе ў сатыры. Пісаў таксама нарысы, эсэ, аўтар перакладаў. Асобныя вершы паэта пакладзены на музыку.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/f/f2/%D0%90%D1%83%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D1%81%D0%B5%D1%81i%D1%8F_%D0%9D%D0%B0%D1%86%D1%8B%D1%8F%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BDi%D0%B6%D0%BD%D0%B0%D1%8F_%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%B0_2018.jpg\",\n  name: \"Алесь Белы\",\n  description: \"Беларускі пісьменнік, паэт і крытык, аўтар твораў, у якіх ён звяртаецца да пытанняў гісторыі, культуры і літаратуры Беларусі.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ale%C5%9B_Dajlidovi%C4%8D_%28Dudar%29._%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%94%D0%B0%D0%B9%D0%BB%D1%96%D0%B4%D0%BE%D0%B2%D1%96%D1%87_%28%D0%94%D1%83%D0%B4%D0%B0%D1%80%29_%281930-36%29_%282%29.jpg/259px-Ale%C5%9B_Dajlidovi%C4%8D_%28Dudar%29._%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%94%D0%B0%D0%B9%D0%BB%D1%96%D0%B4%D0%BE%D0%B2%D1%96%D1%87_%28%D0%94%D1%83%D0%B4%D0%B0%D1%80%29_%281930-36%29_%282%29.jpg\",\n  name: \"Алесь Дудар\",\n  description: \"Алесь Дуда́р (сапр.: Алякса́ндр Алякса́ндравіч Дайлідо́віч; 24 снежня 1904, в. Навасёлкі, цяпер Гомельская вобласць — 29 кастрычніка 1937, Менск, НКУС) — беларускі паэт, крытык, перакладчык.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hadanovich2011.jpg/245px-Hadanovich2011.jpg\",\n  name: \"Андрэй Хадановіч\",\n  description: \"Беларускі пісьменнік, паэт і перакладчык, вядомы сваімі лірычнымі творамі, якія адлюстроўваюць пацуху жыцця і пытанні чалавечай душы.\"\n}, {\n  src: \"http://www.kormanews.by/wp-content/uploads/2014/09/%D0%94%D0%B5%D1%80%D1%83%D0%B6%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9.jpg\",\n  name: \"Авяр’ян Сафонавіч\",\n  description: \"Беларускі пісьменнік і публіцыст, аўтар раманаў і апавяданняў, у якіх ён даследуе палітычныя і сацыяльныя праблемы сучаснага суполкавага жыцця.\"\n}, {\n  src: \"https://czasopis.pl/wp-content/uploads/2020/06/%D0%90%D0%BB%D1%8F%D0%BA%D1%81%D0%B5%D0%B9-%D0%9A%D0%B0%D1%80%D0%BF%D1%8E%D0%BA.jpg\",\n  name: \"Аляксей Карпюк\",\n  description: \"Беларускі пісьменнік і драматург, аўтар твораў, у якіх ён даследуе пытанні існавання, адносін і дасягнення чалавека ў сучасным суполкавым асяроддзі.\"\n}, {\n  src: \"https://vn.mk.ua/wp-content/uploads/2021/05/70_tn-1.jpg\",\n  name: \"Вітольд Ашурак\",\n  description: \"Беларускі пісьменнік і паэт, аўтар твораў, у якіх ён звяртаецца да сацыяльных і філасофскіх праблем сучаснага суполкавага жыцця.\"\n}, {\n  src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ivan_stadolnik.jpg/273px-Ivan_stadolnik.jpg\",\n  name: \"Іван Канстанцінавіч Стадольнік\",\n  description: \"Беларускі пісьменнік і драматург, аўтар твораў, у якіх ён даследуе палітычныя і сацыяльныя праблемы сучаснага суполкавага жыцця.\"\n}];\npoets.map(poet => poet.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (poets);\n\n//# sourceURL=webpack://Library_Poets/./src/components/scripts/data.js?");

/***/ }),

/***/ "./src/components/scripts/main.js":
/*!****************************************!*\
  !*** ./src/components/scripts/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/components/scripts/data.js\");\n\nfunction createPoetBlock(name, descr, link, id) {\n  if (!name) {}\n  if (!descr) {}\n  if (!link) {}\n  let mainWrap = document.createElement(\"div\");\n  mainWrap.classList.add(\"poet__wrapper\");\n  mainWrap.setAttribute(\"data-id\", id);\n  let imgWrap = document.createElement(\"div\");\n  imgWrap.classList.add(\"poet_img__wrapper\");\n  let img = document.createElement(\"img\");\n  img.setAttribute(\"src\", link);\n  img.setAttribute(\"width\", \"500\");\n  img.setAttribute(\"height\", \"300\");\n  img.classList.add(\"poet_img\");\n  imgWrap.append(img);\n  mainWrap.append(imgWrap);\n  let contentWrap = document.createElement(\"div\");\n  contentWrap.classList.add(\"poet_content__wrapper\");\n  let poetName = document.createElement(\"h3\");\n  poetName.classList.add(\"poet_name\");\n  poetName.textContent = name;\n  let poetDescr = document.createElement(\"p\");\n  poetDescr.classList.add(\"poet_description\");\n  poetDescr.textContent = descr;\n  contentWrap.append(poetName, poetDescr);\n  mainWrap.append(contentWrap);\n  return mainWrap;\n}\nfunction showPoetsBlock(allPoetsData) {\n  let poets_section = document.querySelector(\"#poets_section\");\n  allPoetsData.map(item => {\n    let {\n      name,\n      description,\n      src,\n      id\n    } = item;\n    let poetBlock = createPoetBlock(name, description, src, id);\n    poetBlock.addEventListener(\"click\", e => {\n      e.stopPropagation();\n      showPopUp(e, \".poet__wrapper\");\n    });\n    poets_section.append(poetBlock);\n  });\n}\nfunction showPopUp(e, near) {\n  let currPoetData = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(item => item.id == e.target.closest(near).dataset.id);\n  let {\n    name,\n    description,\n    src,\n    id\n  } = currPoetData;\n  let popap = document.createElement(\"div\");\n  popap.classList.add(\"popap_wrap\");\n  popap.setAttribute(\"id\", \"popap_window\");\n  let currPoet = createPoetBlock(name, description, src, id);\n  currPoet.setAttribute(\"id\", \"popap__poet_block\");\n  popap.append(currPoet);\n  document.body.append(popap);\n  document.addEventListener(\"click\", function removePopapListener(e) {\n    e.preventDefault();\n    if (e.target.closest(\"#popap__poet_block\") == null && document.querySelector(\"#popap_window\")) {\n      document.querySelector(\"#popap_window\").remove();\n      document.removeEventListener(\"click\", removePopapListener);\n    }\n  });\n  document.addEventListener('keydown', function keyDownHandler(e) {\n    if (e.keyCode == 27 && e.target.closest(\"#popap__poet_block\") == null && document.querySelector(\"#popap_window\")) {\n      // код клавиши Escape, но можно использовать e.key\n      document.querySelector(\"#popap_window\").remove();\n      document.removeEventListener(\"click\", keyDownHandler);\n    }\n  });\n}\nfunction createPoetListItem(name, src, id) {\n  let listItem = document.createElement(\"li\");\n  listItem.classList.add(\"listPoets__item\", \"li_item\");\n  let textWrap = document.createElement('p');\n  textWrap.classList.add('listPoets__text');\n  textWrap.textContent = name;\n  listItem.append(textWrap);\n  let listIcon = document.createElement(\"img\");\n  listIcon.setAttribute(\"src\", src);\n  listIcon.setAttribute(\"width\", 50);\n  listIcon.setAttribute(\"height\", 50);\n  listItem.prepend(listIcon);\n  listItem.setAttribute(\"data-id\", id);\n  listItem.addEventListener(\"click\", e => {\n    e.stopPropagation();\n    showPopUp(e, \".listPoets__item\");\n  });\n  return listItem;\n}\nfunction setSorting(type) {\n  console.log('setSorting', type);\n  document.querySelector('#listPoets').remove();\n  if (type === 'от А до Я') {\n    showListOfPoets(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toSorted(function (a, b) {\n      let nameA = a.name.toLowerCase(),\n        nameB = b.name.toLowerCase();\n      return nameA.localeCompare(nameB, 'ru');\n    }));\n  } else if (type === 'от Я до А') {\n    showListOfPoets(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toSorted(function (a, b) {\n      let nameA = a.name.toLowerCase(),\n        nameB = b.name.toLowerCase();\n      return nameB.localeCompare(nameA, 'ru');\n    }));\n  } else {\n    showListOfPoets(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n}\nfunction createSortingBlock() {\n  let sortWrap = document.createElement('div');\n  sortWrap.classList.add(\"sorting_block\");\n  let select = document.createElement(\"select\");\n  let opt = document.createElement('option');\n  opt.textContent = 'Без сортировки';\n  select.append(opt);\n  opt = document.createElement('option');\n  opt.textContent = 'от А до Я';\n  select.append(opt);\n  opt = document.createElement('option');\n  opt.textContent = 'от Я до А';\n  select.append(opt);\n  select.addEventListener('change', function (e) {\n    console.log(this.value);\n    setSorting(this.value);\n  });\n  return select;\n}\nfunction showListOfPoets(allPoetsData) {\n  //TODO добавь сортировку и UI\n\n  console.log(\"data\", allPoetsData);\n  let listPoets = document.createElement(\"ul\");\n  listPoets.classList.add(\"listPoets\", \"grid\");\n  listPoets.setAttribute(\"id\", \"listPoets\");\n  allPoetsData.map(item => {\n    const {\n      name,\n      src,\n      id\n    } = item;\n    listPoets.append(createPoetListItem(name, src, id));\n  });\n  let parent = document.querySelector(\"#list_section\");\n  parent.append(listPoets);\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let list_section = document.querySelector(\"#list_section\");\n  let poets_section = document.querySelector(\"#poets_section\");\n  document.querySelector(\"#poets_section__link\").addEventListener(\"click\", function () {\n    if (!poets_section.childNodes.length) {\n      showPoetsBlock(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    }\n    list_section.innerHTML = '';\n  });\n  document.querySelector(\"#list_section__link\").addEventListener(\"click\", function () {\n    if (!list_section.childNodes.length) {\n      showListOfPoets(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      list_section.prepend(createSortingBlock());\n    }\n    poets_section.innerHTML = '';\n  });\n});\n\n//# sourceURL=webpack://Library_Poets/./src/components/scripts/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/css/style.css */ \"./src/components/css/style.css\");\n/* harmony import */ var _components_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scss/main.scss */ \"./src/components/scss/main.scss\");\n/* harmony import */ var _components_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scss/fonts.scss */ \"./src/components/scss/fonts.scss\");\n/* harmony import */ var _components_scripts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scripts/main */ \"./src/components/scripts/main.js\");\n// css\n\n// scss\n\n\n\n// scripts\n\n\n//# sourceURL=webpack://Library_Poets/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/fonts.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/fonts.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/EBGaramond08-Regular.otf */ \"./src/components/fonts/EBGaramond08-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"EBGaramond08\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/scss/fonts.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/main.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/main.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg.jpg */ \"./src/components/images/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_title {\n  text-align: center;\n}\n\n.poets_section {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.poet__wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1vw;\n  width: 30vw;\n  border: 2px solid blueviolet;\n  border-radius: 30px;\n  background-color: #fff;\n}\n\n.poet_img__wrapper {\n  min-width: min(100%, 150px);\n  max-width: 300px;\n}\n\n.poet_img {\n  object-fit: cover;\n  width: 100%;\n  border-radius: 28px;\n}\n\n.poet_content__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1vw;\n  padding: 1vw;\n}\n\n.poet_name {\n  font-family: \"EBGaramond08\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 2rem;\n}\n\n.poet_description {\n  text-indent: 10%;\n  font-family: \"EBGaramond08\", Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 1rem;\n  width: 100%;\n}\n\n@media (max-width: 1400px) {\n  .poet__wrapper {\n    width: 48vw;\n  }\n}\n@media (max-width: 992px) {\n  .poet__wrapper {\n    width: 98vw;\n  }\n}\n.popap_wrap {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(10px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.list_section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listPoets.grid {\n  margin: 1em auto;\n  padding: 1em;\n  gap: 1em;\n  display: grid;\n  grid-auto-flow: row dense;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-auto-rows: 75px;\n  max-width: 80%;\n  border: solid;\n}\n\n.listPoets__item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5%;\n}\n\n.listPoets__text {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 50%;\n  font-family: \"EBGaramond08\";\n  font-size: 20px;\n  text-align: center;\n}\n\n.li_item {\n  color: rgb(0, 0, 0);\n  font-size: 20px;\n  text-decoration-line: underline;\n  text-underline-offset: 4px;\n  transition: all ease 300ms;\n}\n\n.li_item:hover {\n  text-underline-offset: -40%;\n  text-decoration-color: red;\n  transition: all ease 300ms;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/css/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/css/style.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* You also can use pure CSS */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/scss/fonts.scss":
/*!****************************************!*\
  !*** ./src/components/scss/fonts.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/fonts.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/scss/fonts.scss?");

/***/ }),

/***/ "./src/components/scss/main.scss":
/*!***************************************!*\
  !*** ./src/components/scss/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/scss/main.scss?");

/***/ }),

/***/ "./src/components/css/style.css":
/*!**************************************!*\
  !*** ./src/components/css/style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Library_Poets/./src/components/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Library_Poets/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/fonts/EBGaramond08-Regular.otf":
/*!*******************************************************!*\
  !*** ./src/components/fonts/EBGaramond08-Regular.otf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c71a3ff4aae35aebc47.otf\";\n\n//# sourceURL=webpack://Library_Poets/./src/components/fonts/EBGaramond08-Regular.otf?");

/***/ }),

/***/ "./src/components/images/bg.jpg":
/*!**************************************!*\
  !*** ./src/components/images/bg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55ba27f0d520fa740ba2.jpg\";\n\n//# sourceURL=webpack://Library_Poets/./src/components/images/bg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;