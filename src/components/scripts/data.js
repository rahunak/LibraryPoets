// import { v4 as uuidv4 } from "uuid";

let poets = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Francishak_Bahushevich_-_bf_1890_AD_grey.jpg/1200px-Francishak_Bahushevich_-_bf_1890_AD_grey.jpg",
    name: "Францішак Багушэвіч",
    description:
      "Беларускі паэт і пісьменнік, выдатны перадстаўнік класікі беларускай літаратуры. Яго творы адлюстроўваюць нацыянальныя гісторычныя тэмы, любоў да прыроды і паходжання.",
    id: 0,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg/640px-Kanstantyn_Mickievi%C4%8D_%28Jakub_Ko%C5%82as%29._%D0%9A%D0%B0%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D1%8B%D0%BD_%D0%9C%D1%96%D1%86%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%28%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81%29_%281925%29.jpg",
    name: "Якуб Колас",
    description:
      "Беларускі пісьменнік і паэт, адзін з самых вядомых фігур у беларускай літаратуры, аўтар вядомай драмы 'На гары'. Яго творы з'яўляюцца класікай беларускай літаратуры і адлюстроўваюць нацыянальныя гісторычныя тэмы.",
    id: 1,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bagdanovich_M_2.jpg",
    name: "Максім Багдановіч",
    description:
      "Беларускі паэт і публіцыст, які зробіў вялікі ўклад у развіццё беларускай літаратуры і культуры. Яго творы адлюстроўваюць нацыянальныя і сацыяльныя праблемы, паходжанне і нацыянальную гіднасць.",
    id: 2,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Kupala_Janka.jpg",
    name: "Янка Купала",
    description:
      "Беларускі паэт і пісьменнік, які прыняў актыўны ўдзел у нацыянальным адраджэнні Беларусі. Яго творы адлюстроўваюць нацыянальную гіднасць, палітычныя і сацыяльныя праблемы, іхнюю аснову складаюць беларускія народныя легенды і героічныя абразы.",
    id: 3,
  },
  {
    src: "https://knigogid.ru/storage/authors/1d/d7/da/30/f6/51f216511ee5aaff98b95e30c53609c7.jpg",
    name: "Іван Шамякін",
    description:
      "Беларускі пісьменнік і літаратурны крытык, вядомы сваімі даследаваннямі і крытычнымі артыкуламі пра беларускую літаратуру і культуру.",
    id: 4,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/U%C5%82adzis%C5%82a%C5%AD_Ho%C5%82ub_%28Ha%C5%82ubok%29._%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%BE%D0%BB%D1%83%D0%B1_%28%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%29_%281929%29.jpg",
    name: "Уладзіслаў Галубок",
    description:
      "Арыштавалі Галубка ў 1937 г. «традыцыйным» спосабам, на досвітку. Хутка ў мінскай кватэры драматурга адбыўся вобыск. Забралі не толькі ўсе рукапісы, але нават прыватныя рэчы тэатра. Вельмі пацярпела сям’я: старэйшаму сыну Эдуарду, навуковаму супрацоўніку, не дазволілі абараніць дысертацыю па беларускай драматургіі, дачку Багуславу прымусілі ехаць на вёску — «перавыхоўвацца» ў калгасе, малодшых сыноў выключылі з камсамола, як дзяцей ворага народа. Жонка ў адчаі спрабавала скончыць жыццё самагубствам — яе ледзь выратавалі.",
    id: 5,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/uk/thumb/2/25/%D0%A5%D0%BE%D0%B4%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-%D0%9B%D0%B5%D0%B6%D0%B5.jpeg/200px-%D0%A5%D0%BE%D0%B4%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-%D0%9B%D0%B5%D0%B6%D0%B5.jpeg",
    name: "Надзея Хадасевіч",
    description:
      "Беларуская паэтка і пісьменніца, вядомая сваімі вершамі і прозай, якія адлюстроўваюць жыццё і пачуцці жанчыны ў сучасным грамадстве.",
    id: 6,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Niakliaew2.jpg/266px-Niakliaew2.jpg",
    name: "Уладзімір Некляеў",
    description:
      "Беларускі пісьменнік, паэт і грамадскі дзеяч, актыўны ўдзельнік у барацьбе за дэмакратыю і правы чалавека ў Беларусі.",
    id: 7,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D1%80%D1%83%D0%B4%D0%BD%D1%96%D0%BA%D0%B0%D1%9E.jpg/200px-%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D1%80%D1%83%D0%B4%D0%BD%D1%96%D0%BA%D0%B0%D1%9E.jpg",
    name: "Алесь Пруднікаў",
    description:
      "Але́сь Пру́днікаў (14 красавіка 1910, вёска Стары Дзедзін Клімавіцкага павету Магілёўскай губэрні, цяпер Клімавіцкі раён Магілёўскай вобласьці — 5 жніўня 1941, вёска Утукі Кандапоскага раёну Карэла-Фінскай ССР) — беларускі паэт. Стрыечны брат пісьменьніка Паўла Пруднікава.",
    id: 8,
  },
  {
    src: "https://s5-goods.ozstatic.by/2000/388/237/101/101237388_0.jpg",
    name: "Ігар Хадановіч",
    description:
      "У Выдавецкім доме «Звязда» падрыхтавана да друку кніга Ігара Хадановіча «Чалавек з маёй біяграфіі». Шмат намаганняў дзеля нараджэння гэтай кнігі прыклаў, прыкладвае ветэран педагагічнай працы Вацлаў Матусевіч. Доўгія гады ён працаваў начальнікам аддзела адукацыі Дзяржынскага райвыканкама. Менавіта Вацлаў Іванавіч стаў ініцыятарам нараджэння новага выдання твораў Ігара Хадановіча...",
    id: 9,
  },
  {
    src: "https://mozyrlib.by/colleague/colleg_img/f12.jpg",
    name: "Міхась Лынькоў",
    description:
      "Дэбютаваў вершам у 1919 годзе (смаленская газета «Борьба»), першыя апавяданні — у 1926 годзе (бабруйская газета «Камуніст» і зборнік бабруйскага філіяла «Маладняка» — «Уздым»). Выйшлі зборнікі прозы «Апавяданні» (1927), «Гой» (1929), «Андрэй Лятун» (1930), «Саўка-агіцірнік» (1933), «На вялікай хвалі» (1934), «Баян» (1935), «Сустрэчы» (1940), «Астап» (1944), «Апошні зверыядавец» (аповесць, 1930), «За акіянам» (нататкі, апавяданні, нарысы, 1962), раман «На чырвоных лядах» (1934) і раман-эпапея ў 4 кнігах «Векапомныя дні» (1958, 2-е перапрацаванае выданне ў 1969), нарыс «Герой Савецкага Саюза Канстанцін Заслонаў» (1944), апавяданне «Агні Танганьікі» (1957), «Выбраныя творы» (1931, 1934, 1952), «Выбраныя апавяданні» (1938, 1941, 1947), Зборы твораў у 4-х (1967—68) і ў 8 тамах (1981—85).",
    id: 10,
  },
  {
    src: "https://gdb.rferl.org/00C56704-1FE4-4492-9AF8-FCBF95897E57_cx0_cy11_cw0_w1200_r1.jpg",
    name: "Рыгор Барадулін",
    description:
      "Беларускі пісьменнік і публіцыст, які прысвяціў сваю творчасць барацьбе за нацыянальныя правы і свабоду слова ў Беларусі.",
    id: 11,
  },
  {
    src: "https://www.radabnr.org/wp-content/uploads/2017/06/1924-Bykau2.jpg",
    name: "Васіль Быкаў",
    description:
      "Беларускі пісьменнік і публіцыст, аўтар вядомага рамана 'Кружак караля Бронзы'. Яго творы адлюстроўваюць гісторычныя і сацыяльныя праблемы, жыццё ў вайну і справядлівасць.",
    id: 12,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/be/thumb/d/d9/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D0%B5%D1%82%D1%80%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87.jpg/274px-%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%9F%D0%B5%D1%82%D1%80%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87.jpg",
    name: "Алесь Петрашкевіч",
    description:
      "Алесь (Аляксандр Лявонавіч) Петрашке́віч (1 мая 1930, в. Пярэвалачня, Талачынскі раён — 23 жніўня 2012, Мінск) — беларускі пісьменнік, драматург. Кандыдат гістарычных навук[2] (1967), заслужаны работнік культуры БССР (1975), лаўрэат Дзяржаўнай прэміі БССР (1976) за ўдзел у падрыхтоўцы і выданні Беларускай Савецкай Энцыклапедыі.",
    id: 13,
  },
  {
    src: "https://nashi-lyudi.by/images/33/2733.jpg",
    name: "Алесь Пісьмянкоў",
    description:
      "Магілёўская вобласць, Касцюковіцкі раён, Бялынкавічы. Пісаў творыі для дзяцей: кнігі «Заўзятары» (1993), «Ласуны — веселуны» (1997), «Мы з братам» (2003). Калі працаваў у «Вожыку» спрабаваў сябе ў сатыры. Пісаў таксама нарысы, эсэ, аўтар перакладаў. Асобныя вершы паэта пакладзены на музыку.",
    id: 14,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/%D0%90%D1%83%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D1%81%D0%B5%D1%81i%D1%8F_%D0%9D%D0%B0%D1%86%D1%8B%D1%8F%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BDi%D0%B6%D0%BD%D0%B0%D1%8F_%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%B0_2018.jpg",
    name: "Алесь Белы",
    description:
      "Беларускі пісьменнік, паэт і крытык, аўтар твораў, у якіх ён звяртаецца да пытанняў гісторыі, культуры і літаратуры Беларусі.",
    id: 15,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ale%C5%9B_Dajlidovi%C4%8D_%28Dudar%29._%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%94%D0%B0%D0%B9%D0%BB%D1%96%D0%B4%D0%BE%D0%B2%D1%96%D1%87_%28%D0%94%D1%83%D0%B4%D0%B0%D1%80%29_%281930-36%29_%282%29.jpg/259px-Ale%C5%9B_Dajlidovi%C4%8D_%28Dudar%29._%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%94%D0%B0%D0%B9%D0%BB%D1%96%D0%B4%D0%BE%D0%B2%D1%96%D1%87_%28%D0%94%D1%83%D0%B4%D0%B0%D1%80%29_%281930-36%29_%282%29.jpg",
    name: "Алесь Дудар",
    description:
      "Алесь Дуда́р (сапр.: Алякса́ндр Алякса́ндравіч Дайлідо́віч; 24 снежня 1904, в. Навасёлкі, цяпер Гомельская вобласць — 29 кастрычніка 1937, Менск, НКУС) — беларускі паэт, крытык, перакладчык.",
    id: 16,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hadanovich2011.jpg/245px-Hadanovich2011.jpg",
    name: "Андрэй Хадановіч",
    description:
      "Беларускі пісьменнік, паэт і перакладчык, вядомы сваімі лірычнымі творамі, якія адлюстроўваюць пацуху жыцця і пытанні чалавечай душы.",
    id: 17,
  },
  {
    src: "http://www.kormanews.by/wp-content/uploads/2014/09/%D0%94%D0%B5%D1%80%D1%83%D0%B6%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9.jpg",
    name: "Авяр’ян Сафонавіч",
    description:
      "Беларускі пісьменнік і публіцыст, аўтар раманаў і апавяданняў, у якіх ён даследуе палітычныя і сацыяльныя праблемы сучаснага суполкавага жыцця.",
    id: 18,
  },
  {
    src: "https://czasopis.pl/wp-content/uploads/2020/06/%D0%90%D0%BB%D1%8F%D0%BA%D1%81%D0%B5%D0%B9-%D0%9A%D0%B0%D1%80%D0%BF%D1%8E%D0%BA.jpg",
    name: "Аляксей Карпюк",
    description:
      "Беларускі пісьменнік і драматург, аўтар твораў, у якіх ён даследуе пытанні існавання, адносін і дасягнення чалавека ў сучасным суполкавым асяроддзі.",
    id: 19,
  },
  {
    src: "https://vn.mk.ua/wp-content/uploads/2021/05/70_tn-1.jpg",
    name: "Вітольд Ашурак",
    description:
      "Беларускі пісьменнік і паэт, аўтар твораў, у якіх ён звяртаецца да сацыяльных і філасофскіх праблем сучаснага суполкавага жыцця.",
    id: 20,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ivan_stadolnik.jpg/273px-Ivan_stadolnik.jpg",
    name: "Іван Канстанцінавіч Стадольнік",
    description:
      "Беларускі пісьменнік і драматург, аўтар твораў, у якіх ён даследуе палітычныя і сацыяльныя праблемы сучаснага суполкавага жыцця.",
    id: 21,
  },
];
// poets.map(poet => poet.id = uuidv4() ) можно использовать для добавления динамических ключей. Думаю здесь это излишне.

export default poets;