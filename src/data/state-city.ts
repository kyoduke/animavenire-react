interface City {
  city_ID: number;
  cityName: string;
}

interface State {
  id: number;
  stateName: string;
  abv: string;
  cities: Array<City>;
}

const statesData: Array<State> = [
  {
    id: 12,
    stateName: "Acre",
    abv: "AC",
    cities: [
      {
        city_ID: 1200013,
        cityName: "Acrelândia",
      },
      {
        city_ID: 1200054,
        cityName: "Assis Brasil",
      },
      {
        city_ID: 1200104,
        cityName: "Brasiléia",
      },
      {
        city_ID: 1200138,
        cityName: "Bujari",
      },
      {
        city_ID: 1200179,
        cityName: "Capixaba",
      },
      {
        city_ID: 1200203,
        cityName: "Cruzeiro do Sul",
      },
      {
        city_ID: 1200252,
        cityName: "Epitaciolândia",
      },
      {
        city_ID: 1200302,
        cityName: "Feijó",
      },
      {
        city_ID: 1200328,
        cityName: "Jordão",
      },
      {
        city_ID: 1200336,
        cityName: "Mâncio Lima",
      },
      {
        city_ID: 1200344,
        cityName: "Manoel Urbano",
      },
      {
        city_ID: 1200351,
        cityName: "Marechal Thaumaturgo",
      },
      {
        city_ID: 1200385,
        cityName: "Plácido de Castro",
      },
      {
        city_ID: 1200807,
        cityName: "Porto Acre",
      },
      {
        city_ID: 1200393,
        cityName: "Porto Walter",
      },
      {
        city_ID: 1200401,
        cityName: "Rio Branco",
      },
      {
        city_ID: 1200427,
        cityName: "Rodrigues Alves",
      },
      {
        city_ID: 1200435,
        cityName: "Santa Rosa do Purus",
      },
      {
        city_ID: 1200500,
        cityName: "Sena Madureira",
      },
      {
        city_ID: 1200450,
        cityName: "Senador Guiomard",
      },
      {
        city_ID: 1200609,
        cityName: "Tarauacá",
      },
      {
        city_ID: 1200708,
        cityName: "Xapuri",
      },
    ],
  },
  {
    id: 27,
    stateName: "Alagoas",
    abv: "AL",
    cities: [
      {
        city_ID: 2700102,
        cityName: "Água Branca",
      },
      {
        city_ID: 2700201,
        cityName: "Anadia",
      },
      {
        city_ID: 2700300,
        cityName: "Arapiraca",
      },
      {
        city_ID: 2700409,
        cityName: "Atalaia",
      },
      {
        city_ID: 2700508,
        cityName: "Barra de Santo Antônio",
      },
      {
        city_ID: 2700607,
        cityName: "Barra de São Miguel",
      },
      {
        city_ID: 2700706,
        cityName: "Batalha",
      },
      {
        city_ID: 2700805,
        cityName: "Belém",
      },
      {
        city_ID: 2700904,
        cityName: "Belo Monte",
      },
      {
        city_ID: 2701001,
        cityName: "Boca da Mata",
      },
      {
        city_ID: 2701100,
        cityName: "Branquinha",
      },
      {
        city_ID: 2701209,
        cityName: "Cacimbinhas",
      },
      {
        city_ID: 2701308,
        cityName: "Cajueiro",
      },
      {
        city_ID: 2701357,
        cityName: "Campestre",
      },
      {
        city_ID: 2701407,
        cityName: "Campo Alegre",
      },
      {
        city_ID: 2701506,
        cityName: "Campo Grande",
      },
      {
        city_ID: 2701605,
        cityName: "Canapi",
      },
      {
        city_ID: 2701704,
        cityName: "Capela",
      },
      {
        city_ID: 2701803,
        cityName: "Carneiros",
      },
      {
        city_ID: 2701902,
        cityName: "Chã Preta",
      },
      {
        city_ID: 2702009,
        cityName: "Coité do Nóia",
      },
      {
        city_ID: 2702108,
        cityName: "Colônia Leopoldina",
      },
      {
        city_ID: 2702207,
        cityName: "Coqueiro Seco",
      },
      {
        city_ID: 2702306,
        cityName: "Coruripe",
      },
      {
        city_ID: 2702355,
        cityName: "Craíbas",
      },
      {
        city_ID: 2702405,
        cityName: "Delmiro Gouveia",
      },
      {
        city_ID: 2702504,
        cityName: "Dois Riachos",
      },
      {
        city_ID: 2702553,
        cityName: "Estrela de Alagoas",
      },
      {
        city_ID: 2702603,
        cityName: "Feira Grande",
      },
      {
        city_ID: 2702702,
        cityName: "Feliz Deserto",
      },
      {
        city_ID: 2702801,
        cityName: "Flexeiras",
      },
      {
        city_ID: 2702900,
        cityName: "Girau do Ponciano",
      },
      {
        city_ID: 2703007,
        cityName: "Ibateguara",
      },
      {
        city_ID: 2703106,
        cityName: "Igaci",
      },
      {
        city_ID: 2703205,
        cityName: "Igreja Nova",
      },
      {
        city_ID: 2703304,
        cityName: "Inhapi",
      },
      {
        city_ID: 2703403,
        cityName: "Jacaré dos Homens",
      },
      {
        city_ID: 2703502,
        cityName: "Jacuípe",
      },
      {
        city_ID: 2703601,
        cityName: "Japaratinga",
      },
      {
        city_ID: 2703700,
        cityName: "Jaramataia",
      },
      {
        city_ID: 2703759,
        cityName: "Jequiá da Praia",
      },
      {
        city_ID: 2703809,
        cityName: "Joaquim Gomes",
      },
      {
        city_ID: 2703908,
        cityName: "Jundiá",
      },
      {
        city_ID: 2704005,
        cityName: "Junqueiro",
      },
      {
        city_ID: 2704104,
        cityName: "Lagoa da Canoa",
      },
      {
        city_ID: 2704203,
        cityName: "Limoeiro de Anadia",
      },
      {
        city_ID: 2704302,
        cityName: "Maceió",
      },
      {
        city_ID: 2704401,
        cityName: "Major Isidoro",
      },
      {
        city_ID: 2704906,
        cityName: "Mar Vermelho",
      },
      {
        city_ID: 2704500,
        cityName: "Maragogi",
      },
      {
        city_ID: 2704609,
        cityName: "Maravilha",
      },
      {
        city_ID: 2704708,
        cityName: "Marechal Deodoro",
      },
      {
        city_ID: 2704807,
        cityName: "Maribondo",
      },
      {
        city_ID: 2705002,
        cityName: "Mata Grande",
      },
      {
        city_ID: 2705101,
        cityName: "Matriz de Camaragibe",
      },
      {
        city_ID: 2705200,
        cityName: "Messias",
      },
      {
        city_ID: 2705309,
        cityName: "Minador do Negrão",
      },
      {
        city_ID: 2705408,
        cityName: "Monteirópolis",
      },
      {
        city_ID: 2705507,
        cityName: "Murici",
      },
      {
        city_ID: 2705606,
        cityName: "Novo Lino",
      },
      {
        city_ID: 2705705,
        cityName: "Olho d'Água das Flores",
      },
      {
        city_ID: 2705804,
        cityName: "Olho d'Água do Casado",
      },
      {
        city_ID: 2705903,
        cityName: "Olho d'Água Grande",
      },
      {
        city_ID: 2706000,
        cityName: "Olivença",
      },
      {
        city_ID: 2706109,
        cityName: "Ouro Branco",
      },
      {
        city_ID: 2706208,
        cityName: "Palestina",
      },
      {
        city_ID: 2706307,
        cityName: "Palmeira dos Índios",
      },
      {
        city_ID: 2706406,
        cityName: "Pão de Açúcar",
      },
      {
        city_ID: 2706422,
        cityName: "Pariconha",
      },
      {
        city_ID: 2706448,
        cityName: "Paripueira",
      },
      {
        city_ID: 2706505,
        cityName: "Passo de Camaragibe",
      },
      {
        city_ID: 2706604,
        cityName: "Paulo Jacinto",
      },
      {
        city_ID: 2706703,
        cityName: "Penedo",
      },
      {
        city_ID: 2706802,
        cityName: "Piaçabuçu",
      },
      {
        city_ID: 2706901,
        cityName: "Pilar",
      },
      {
        city_ID: 2707008,
        cityName: "Pindoba",
      },
      {
        city_ID: 2707107,
        cityName: "Piranhas",
      },
      {
        city_ID: 2707206,
        cityName: "Poço das Trincheiras",
      },
      {
        city_ID: 2707305,
        cityName: "Porto Calvo",
      },
      {
        city_ID: 2707404,
        cityName: "Porto de Pedras",
      },
      {
        city_ID: 2707503,
        cityName: "Porto Real do Colégio",
      },
      {
        city_ID: 2707602,
        cityName: "Quebrangulo",
      },
      {
        city_ID: 2707701,
        cityName: "Rio Largo",
      },
      {
        city_ID: 2707800,
        cityName: "Roteiro",
      },
      {
        city_ID: 2707909,
        cityName: "Santa Luzia do Norte",
      },
      {
        city_ID: 2708006,
        cityName: "Santana do Ipanema",
      },
      {
        city_ID: 2708105,
        cityName: "Santana do Mundaú",
      },
      {
        city_ID: 2708204,
        cityName: "São Brás",
      },
      {
        city_ID: 2708303,
        cityName: "São José da Laje",
      },
      {
        city_ID: 2708402,
        cityName: "São José da Tapera",
      },
      {
        city_ID: 2708501,
        cityName: "São Luís do Quitunde",
      },
      {
        city_ID: 2708600,
        cityName: "São Miguel dos Campos",
      },
      {
        city_ID: 2708709,
        cityName: "São Miguel dos Milagres",
      },
      {
        city_ID: 2708808,
        cityName: "São Sebastião",
      },
      {
        city_ID: 2708907,
        cityName: "Satuba",
      },
      {
        city_ID: 2708956,
        cityName: "Senador Rui Palmeira",
      },
      {
        city_ID: 2709004,
        cityName: "Tanque d'Arca",
      },
      {
        city_ID: 2709103,
        cityName: "Taquarana",
      },
      {
        city_ID: 2709152,
        cityName: "Teotônio Vilela",
      },
      {
        city_ID: 2709202,
        cityName: "Traipu",
      },
      {
        city_ID: 2709301,
        cityName: "União dos Palmares",
      },
      {
        city_ID: 2709400,
        cityName: "Viçosa",
      },
    ],
  },
  {
    id: 16,
    stateName: "Amapá",
    abv: "AP",
    cities: [
      {
        city_ID: 1600105,
        cityName: "Amapá",
      },
      {
        city_ID: 1600204,
        cityName: "Calçoene",
      },
      {
        city_ID: 1600212,
        cityName: "Cutias",
      },
      {
        city_ID: 1600238,
        cityName: "Ferreira Gomes",
      },
      {
        city_ID: 1600253,
        cityName: "Itaubal",
      },
      {
        city_ID: 1600279,
        cityName: "Laranjal do Jari",
      },
      {
        city_ID: 1600303,
        cityName: "Macapá",
      },
      {
        city_ID: 1600402,
        cityName: "Mazagão",
      },
      {
        city_ID: 1600501,
        cityName: "Oiapoque",
      },
      {
        city_ID: 1600154,
        cityName: "Pedra Branca do Amapari",
      },
      {
        city_ID: 1600535,
        cityName: "Porto Grande",
      },
      {
        city_ID: 1600550,
        cityName: "Pracuúba",
      },
      {
        city_ID: 1600600,
        cityName: "Santana",
      },
      {
        city_ID: 1600055,
        cityName: "Serra do Navio",
      },
      {
        city_ID: 1600709,
        cityName: "Tartarugalzinho",
      },
      {
        city_ID: 1600808,
        cityName: "Vitória do Jari",
      },
    ],
  },
  {
    id: 13,
    stateName: "Amazonas",
    abv: "AM",
    cities: [
      {
        city_ID: 1300029,
        cityName: "Alvarães",
      },
      {
        city_ID: 1300060,
        cityName: "Amaturá",
      },
      {
        city_ID: 1300086,
        cityName: "Anamã",
      },
      {
        city_ID: 1300102,
        cityName: "Anori",
      },
      {
        city_ID: 1300144,
        cityName: "Apuí",
      },
      {
        city_ID: 1300201,
        cityName: "Atalaia do Norte",
      },
      {
        city_ID: 1300300,
        cityName: "Autazes",
      },
      {
        city_ID: 1300409,
        cityName: "Barcelos",
      },
      {
        city_ID: 1300508,
        cityName: "Barreirinha",
      },
      {
        city_ID: 1300607,
        cityName: "Benjamin Constant",
      },
      {
        city_ID: 1300631,
        cityName: "Beruri",
      },
      {
        city_ID: 1300680,
        cityName: "Boa Vista do Ramos",
      },
      {
        city_ID: 1300706,
        cityName: "Boca do Acre",
      },
      {
        city_ID: 1300805,
        cityName: "Borba",
      },
      {
        city_ID: 1300839,
        cityName: "Caapiranga",
      },
      {
        city_ID: 1300904,
        cityName: "Canutama",
      },
      {
        city_ID: 1301001,
        cityName: "Carauari",
      },
      {
        city_ID: 1301100,
        cityName: "Careiro",
      },
      {
        city_ID: 1301159,
        cityName: "Careiro da Várzea",
      },
      {
        city_ID: 1301209,
        cityName: "Coari",
      },
      {
        city_ID: 1301308,
        cityName: "Codajás",
      },
      {
        city_ID: 1301407,
        cityName: "Eirunepé",
      },
      {
        city_ID: 1301506,
        cityName: "Envira",
      },
      {
        city_ID: 1301605,
        cityName: "Fonte Boa",
      },
      {
        city_ID: 1301654,
        cityName: "Guajará",
      },
      {
        city_ID: 1301704,
        cityName: "Humaitá",
      },
      {
        city_ID: 1301803,
        cityName: "Ipixuna",
      },
      {
        city_ID: 1301852,
        cityName: "Iranduba",
      },
      {
        city_ID: 1301902,
        cityName: "Itacoatiara",
      },
      {
        city_ID: 1301951,
        cityName: "Itamarati",
      },
      {
        city_ID: 1302009,
        cityName: "Itapiranga",
      },
      {
        city_ID: 1302108,
        cityName: "Japurá",
      },
      {
        city_ID: 1302207,
        cityName: "Juruá",
      },
      {
        city_ID: 1302306,
        cityName: "Jutaí",
      },
      {
        city_ID: 1302405,
        cityName: "Lábrea",
      },
      {
        city_ID: 1302504,
        cityName: "Manacapuru",
      },
      {
        city_ID: 1302553,
        cityName: "Manaquiri",
      },
      {
        city_ID: 1302603,
        cityName: "Manaus",
      },
      {
        city_ID: 1302702,
        cityName: "Manicoré",
      },
      {
        city_ID: 1302801,
        cityName: "Maraã",
      },
      {
        city_ID: 1302900,
        cityName: "Maués",
      },
      {
        city_ID: 1303007,
        cityName: "Nhamundá",
      },
      {
        city_ID: 1303106,
        cityName: "Nova Olinda do Norte",
      },
      {
        city_ID: 1303205,
        cityName: "Novo Airão",
      },
      {
        city_ID: 1303304,
        cityName: "Novo Aripuanã",
      },
      {
        city_ID: 1303403,
        cityName: "Parintins",
      },
      {
        city_ID: 1303502,
        cityName: "Pauini",
      },
      {
        city_ID: 1303536,
        cityName: "Presidente Figueiredo",
      },
      {
        city_ID: 1303569,
        cityName: "Rio Preto da Eva",
      },
      {
        city_ID: 1303601,
        cityName: "Santa Isabel do Rio Negro",
      },
      {
        city_ID: 1303700,
        cityName: "Santo Antônio do Içá",
      },
      {
        city_ID: 1303809,
        cityName: "São Gabriel da Cachoeira",
      },
      {
        city_ID: 1303908,
        cityName: "São Paulo de Olivença",
      },
      {
        city_ID: 1303957,
        cityName: "São Sebastião do Uatumã",
      },
      {
        city_ID: 1304005,
        cityName: "Silves",
      },
      {
        city_ID: 1304062,
        cityName: "Tabatinga",
      },
      {
        city_ID: 1304104,
        cityName: "Tapauá",
      },
      {
        city_ID: 1304203,
        cityName: "Tefé",
      },
      {
        city_ID: 1304237,
        cityName: "Tonantins",
      },
      {
        city_ID: 1304260,
        cityName: "Uarini",
      },
      {
        city_ID: 1304302,
        cityName: "Urucará",
      },
      {
        city_ID: 1304401,
        cityName: "Urucurituba",
      },
    ],
  },
  {
    id: 29,
    stateName: "Bahia",
    abv: "BA",
    cities: [
      {
        city_ID: 2900108,
        cityName: "Abaíra",
      },
      {
        city_ID: 2900207,
        cityName: "Abaré",
      },
      {
        city_ID: 2900306,
        cityName: "Acajutiba",
      },
      {
        city_ID: 2900355,
        cityName: "Adustina",
      },
      {
        city_ID: 2900405,
        cityName: "Água Fria",
      },
      {
        city_ID: 2900603,
        cityName: "Aiquara",
      },
      {
        city_ID: 2900702,
        cityName: "Alagoinhas",
      },
      {
        city_ID: 2900801,
        cityName: "Alcobaça",
      },
      {
        city_ID: 2900900,
        cityName: "Almadina",
      },
      {
        city_ID: 2901007,
        cityName: "Amargosa",
      },
      {
        city_ID: 2901106,
        cityName: "Amélia Rodrigues",
      },
      {
        city_ID: 2901155,
        cityName: "América Dourada",
      },
      {
        city_ID: 2901205,
        cityName: "Anagé",
      },
      {
        city_ID: 2901304,
        cityName: "Andaraí",
      },
      {
        city_ID: 2901353,
        cityName: "Andorinha",
      },
      {
        city_ID: 2901403,
        cityName: "Angical",
      },
      {
        city_ID: 2901502,
        cityName: "Anguera",
      },
      {
        city_ID: 2901601,
        cityName: "Antas",
      },
      {
        city_ID: 2901700,
        cityName: "Antônio Cardoso",
      },
      {
        city_ID: 2901809,
        cityName: "Antônio Gonçalves",
      },
      {
        city_ID: 2901908,
        cityName: "Aporá",
      },
      {
        city_ID: 2901957,
        cityName: "Apuarema",
      },
      {
        city_ID: 2902054,
        cityName: "Araçás",
      },
      {
        city_ID: 2902005,
        cityName: "Aracatu",
      },
      {
        city_ID: 2902104,
        cityName: "Araci",
      },
      {
        city_ID: 2902203,
        cityName: "Aramari",
      },
      {
        city_ID: 2902252,
        cityName: "Arataca",
      },
      {
        city_ID: 2902302,
        cityName: "Aratuípe",
      },
      {
        city_ID: 2902401,
        cityName: "Aurelino Leal",
      },
      {
        city_ID: 2902500,
        cityName: "Baianópolis",
      },
      {
        city_ID: 2902609,
        cityName: "Baixa Grande",
      },
      {
        city_ID: 2902658,
        cityName: "Banzaê",
      },
      {
        city_ID: 2902708,
        cityName: "Barra",
      },
      {
        city_ID: 2902807,
        cityName: "Barra da Estiva",
      },
      {
        city_ID: 2902906,
        cityName: "Barra do Choça",
      },
      {
        city_ID: 2903003,
        cityName: "Barra do Mendes",
      },
      {
        city_ID: 2903102,
        cityName: "Barra do Rocha",
      },
      {
        city_ID: 2903201,
        cityName: "Barreiras",
      },
      {
        city_ID: 2903235,
        cityName: "Barro Alto",
      },
      {
        city_ID: 2903300,
        cityName: "Barro Preto",
      },
      {
        city_ID: 2903276,
        cityName: "Barrocas",
      },
      {
        city_ID: 2903409,
        cityName: "Belmonte",
      },
      {
        city_ID: 2903508,
        cityName: "Belo Campo",
      },
      {
        city_ID: 2903607,
        cityName: "Biritinga",
      },
      {
        city_ID: 2903706,
        cityName: "Boa Nova",
      },
      {
        city_ID: 2903805,
        cityName: "Boa Vista do Tupim",
      },
      {
        city_ID: 2903904,
        cityName: "Bom Jesus da Lapa",
      },
      {
        city_ID: 2903953,
        cityName: "Bom Jesus da Serra",
      },
      {
        city_ID: 2904001,
        cityName: "Boninal",
      },
      {
        city_ID: 2904050,
        cityName: "Bonito",
      },
      {
        city_ID: 2904100,
        cityName: "Boquira",
      },
      {
        city_ID: 2904209,
        cityName: "Botuporã",
      },
      {
        city_ID: 2904308,
        cityName: "Brejões",
      },
      {
        city_ID: 2904407,
        cityName: "Brejolândia",
      },
      {
        city_ID: 2904506,
        cityName: "Brotas de Macaúbas",
      },
      {
        city_ID: 2904605,
        cityName: "Brumado",
      },
      {
        city_ID: 2904704,
        cityName: "Buerarema",
      },
      {
        city_ID: 2904753,
        cityName: "Buritirama",
      },
      {
        city_ID: 2904803,
        cityName: "Caatiba",
      },
      {
        city_ID: 2904852,
        cityName: "Cabaceiras do Paraguaçu",
      },
      {
        city_ID: 2904902,
        cityName: "Cachoeira",
      },
      {
        city_ID: 2905008,
        cityName: "Caculé",
      },
      {
        city_ID: 2905107,
        cityName: "Caém",
      },
      {
        city_ID: 2905156,
        cityName: "Caetanos",
      },
      {
        city_ID: 2905206,
        cityName: "Caetité",
      },
      {
        city_ID: 2905305,
        cityName: "Cafarnaum",
      },
      {
        city_ID: 2905404,
        cityName: "Cairu",
      },
      {
        city_ID: 2905503,
        cityName: "Caldeirão Grande",
      },
      {
        city_ID: 2905602,
        cityName: "Camacan",
      },
      {
        city_ID: 2905701,
        cityName: "Camaçari",
      },
      {
        city_ID: 2905800,
        cityName: "Camamu",
      },
      {
        city_ID: 2905909,
        cityName: "Campo Alegre de Lourdes",
      },
      {
        city_ID: 2906006,
        cityName: "Campo Formoso",
      },
      {
        city_ID: 2906105,
        cityName: "Canápolis",
      },
      {
        city_ID: 2906204,
        cityName: "Canarana",
      },
      {
        city_ID: 2906303,
        cityName: "Canavieiras",
      },
      {
        city_ID: 2906402,
        cityName: "Candeal",
      },
      {
        city_ID: 2906501,
        cityName: "Candeias",
      },
      {
        city_ID: 2906600,
        cityName: "Candiba",
      },
      {
        city_ID: 2906709,
        cityName: "Cândido Sales",
      },
      {
        city_ID: 2906808,
        cityName: "Cansanção",
      },
      {
        city_ID: 2906824,
        cityName: "Canudos",
      },
      {
        city_ID: 2906857,
        cityName: "Capela do Alto Alegre",
      },
      {
        city_ID: 2906873,
        cityName: "Capim Grosso",
      },
      {
        city_ID: 2906899,
        cityName: "Caraíbas",
      },
      {
        city_ID: 2906907,
        cityName: "Caravelas",
      },
      {
        city_ID: 2907004,
        cityName: "Cardeal da Silva",
      },
      {
        city_ID: 2907103,
        cityName: "Carinhanha",
      },
      {
        city_ID: 2907202,
        cityName: "Casa Nova",
      },
      {
        city_ID: 2907301,
        cityName: "Castro Alves",
      },
      {
        city_ID: 2907400,
        cityName: "Catolândia",
      },
      {
        city_ID: 2907509,
        cityName: "Catu",
      },
      {
        city_ID: 2907558,
        cityName: "Caturama",
      },
      {
        city_ID: 2907608,
        cityName: "Central",
      },
      {
        city_ID: 2907707,
        cityName: "Chorrochó",
      },
      {
        city_ID: 2907806,
        cityName: "Cícero Dantas",
      },
      {
        city_ID: 2907905,
        cityName: "Cipó",
      },
      {
        city_ID: 2908002,
        cityName: "Coaraci",
      },
      {
        city_ID: 2908101,
        cityName: "Cocos",
      },
      {
        city_ID: 2908200,
        cityName: "Conceição da Feira",
      },
      {
        city_ID: 2908309,
        cityName: "Conceição do Almeida",
      },
      {
        city_ID: 2908408,
        cityName: "Conceição do Coité",
      },
      {
        city_ID: 2908507,
        cityName: "Conceição do Jacuípe",
      },
      {
        city_ID: 2908606,
        cityName: "Conde",
      },
      {
        city_ID: 2908705,
        cityName: "Condeúba",
      },
      {
        city_ID: 2908804,
        cityName: "Contendas do Sincorá",
      },
      {
        city_ID: 2908903,
        cityName: "Coração de Maria",
      },
      {
        city_ID: 2909000,
        cityName: "Cordeiros",
      },
      {
        city_ID: 2909109,
        cityName: "Coribe",
      },
      {
        city_ID: 2909208,
        cityName: "Coronel João Sá",
      },
      {
        city_ID: 2909307,
        cityName: "Correntina",
      },
      {
        city_ID: 2909406,
        cityName: "Cotegipe",
      },
      {
        city_ID: 2909505,
        cityName: "Cravolândia",
      },
      {
        city_ID: 2909604,
        cityName: "Crisópolis",
      },
      {
        city_ID: 2909703,
        cityName: "Cristópolis",
      },
      {
        city_ID: 2909802,
        cityName: "Cruz das Almas",
      },
      {
        city_ID: 2909901,
        cityName: "Curaçá",
      },
      {
        city_ID: 2910008,
        cityName: "Dário Meira",
      },
      {
        city_ID: 2910057,
        cityName: "Dias d'Ávila",
      },
      {
        city_ID: 2910107,
        cityName: "Dom Basílio",
      },
      {
        city_ID: 2910206,
        cityName: "Dom Macedo Costa",
      },
      {
        city_ID: 2910305,
        cityName: "Elísio Medrado",
      },
      {
        city_ID: 2910404,
        cityName: "Encruzilhada",
      },
      {
        city_ID: 2910503,
        cityName: "Entre Rios",
      },
      {
        city_ID: 2900504,
        cityName: "Érico Cardoso",
      },
      {
        city_ID: 2910602,
        cityName: "Esplanada",
      },
      {
        city_ID: 2910701,
        cityName: "Euclides da Cunha",
      },
      {
        city_ID: 2910727,
        cityName: "Eunápolis",
      },
      {
        city_ID: 2910750,
        cityName: "Fátima",
      },
      {
        city_ID: 2910776,
        cityName: "Feira da Mata",
      },
      {
        city_ID: 2910800,
        cityName: "Feira de Santana",
      },
      {
        city_ID: 2910859,
        cityName: "Filadélfia",
      },
      {
        city_ID: 2910909,
        cityName: "Firmino Alves",
      },
      {
        city_ID: 2911006,
        cityName: "Floresta Azul",
      },
      {
        city_ID: 2911105,
        cityName: "Formosa do Rio Preto",
      },
      {
        city_ID: 2911204,
        cityName: "Gandu",
      },
      {
        city_ID: 2911253,
        cityName: "Gavião",
      },
      {
        city_ID: 2911303,
        cityName: "Gentio do Ouro",
      },
      {
        city_ID: 2911402,
        cityName: "Glória",
      },
      {
        city_ID: 2911501,
        cityName: "Gongogi",
      },
      {
        city_ID: 2911600,
        cityName: "Governador Mangabeira",
      },
      {
        city_ID: 2911659,
        cityName: "Guajeru",
      },
      {
        city_ID: 2911709,
        cityName: "Guanambi",
      },
      {
        city_ID: 2911808,
        cityName: "Guaratinga",
      },
      {
        city_ID: 2911857,
        cityName: "Heliópolis",
      },
      {
        city_ID: 2911907,
        cityName: "Iaçu",
      },
      {
        city_ID: 2912004,
        cityName: "Ibiassucê",
      },
      {
        city_ID: 2912103,
        cityName: "Ibicaraí",
      },
      {
        city_ID: 2912202,
        cityName: "Ibicoara",
      },
      {
        city_ID: 2912301,
        cityName: "Ibicuí",
      },
      {
        city_ID: 2912400,
        cityName: "Ibipeba",
      },
      {
        city_ID: 2912509,
        cityName: "Ibipitanga",
      },
      {
        city_ID: 2912608,
        cityName: "Ibiquera",
      },
      {
        city_ID: 2912707,
        cityName: "Ibirapitanga",
      },
      {
        city_ID: 2912806,
        cityName: "Ibirapuã",
      },
      {
        city_ID: 2912905,
        cityName: "Ibirataia",
      },
      {
        city_ID: 2913002,
        cityName: "Ibitiara",
      },
      {
        city_ID: 2913101,
        cityName: "Ibititá",
      },
      {
        city_ID: 2913200,
        cityName: "Ibotirama",
      },
      {
        city_ID: 2913309,
        cityName: "Ichu",
      },
      {
        city_ID: 2913408,
        cityName: "Igaporã",
      },
      {
        city_ID: 2913457,
        cityName: "Igrapiúna",
      },
      {
        city_ID: 2913507,
        cityName: "Iguaí",
      },
      {
        city_ID: 2913606,
        cityName: "Ilhéus",
      },
      {
        city_ID: 2913705,
        cityName: "Inhambupe",
      },
      {
        city_ID: 2913804,
        cityName: "Ipecaetá",
      },
      {
        city_ID: 2913903,
        cityName: "Ipiaú",
      },
      {
        city_ID: 2914000,
        cityName: "Ipirá",
      },
      {
        city_ID: 2914109,
        cityName: "Ipupiara",
      },
      {
        city_ID: 2914208,
        cityName: "Irajuba",
      },
      {
        city_ID: 2914307,
        cityName: "Iramaia",
      },
      {
        city_ID: 2914406,
        cityName: "Iraquara",
      },
      {
        city_ID: 2914505,
        cityName: "Irará",
      },
      {
        city_ID: 2914604,
        cityName: "Irecê",
      },
      {
        city_ID: 2914653,
        cityName: "Itabela",
      },
      {
        city_ID: 2914703,
        cityName: "Itaberaba",
      },
      {
        city_ID: 2914802,
        cityName: "Itabuna",
      },
      {
        city_ID: 2914901,
        cityName: "Itacaré",
      },
      {
        city_ID: 2915007,
        cityName: "Itaeté",
      },
      {
        city_ID: 2915106,
        cityName: "Itagi",
      },
      {
        city_ID: 2915205,
        cityName: "Itagibá",
      },
      {
        city_ID: 2915304,
        cityName: "Itagimirim",
      },
      {
        city_ID: 2915353,
        cityName: "Itaguaçu da Bahia",
      },
      {
        city_ID: 2915403,
        cityName: "Itaju do Colônia",
      },
      {
        city_ID: 2915502,
        cityName: "Itajuípe",
      },
      {
        city_ID: 2915601,
        cityName: "Itamaraju",
      },
      {
        city_ID: 2915700,
        cityName: "Itamari",
      },
      {
        city_ID: 2915809,
        cityName: "Itambé",
      },
      {
        city_ID: 2915908,
        cityName: "Itanagra",
      },
      {
        city_ID: 2916005,
        cityName: "Itanhém",
      },
      {
        city_ID: 2916104,
        cityName: "Itaparica",
      },
      {
        city_ID: 2916203,
        cityName: "Itapé",
      },
      {
        city_ID: 2916302,
        cityName: "Itapebi",
      },
      {
        city_ID: 2916401,
        cityName: "Itapetinga",
      },
      {
        city_ID: 2916500,
        cityName: "Itapicuru",
      },
      {
        city_ID: 2916609,
        cityName: "Itapitanga",
      },
      {
        city_ID: 2916708,
        cityName: "Itaquara",
      },
      {
        city_ID: 2916807,
        cityName: "Itarantim",
      },
      {
        city_ID: 2916856,
        cityName: "Itatim",
      },
      {
        city_ID: 2916906,
        cityName: "Itiruçu",
      },
      {
        city_ID: 2917003,
        cityName: "Itiúba",
      },
      {
        city_ID: 2917102,
        cityName: "Itororó",
      },
      {
        city_ID: 2917201,
        cityName: "Ituaçu",
      },
      {
        city_ID: 2917300,
        cityName: "Ituberá",
      },
      {
        city_ID: 2917334,
        cityName: "Iuiu",
      },
      {
        city_ID: 2917359,
        cityName: "Jaborandi",
      },
      {
        city_ID: 2917409,
        cityName: "Jacaraci",
      },
      {
        city_ID: 2917508,
        cityName: "Jacobina",
      },
      {
        city_ID: 2917607,
        cityName: "Jaguaquara",
      },
      {
        city_ID: 2917706,
        cityName: "Jaguarari",
      },
      {
        city_ID: 2917805,
        cityName: "Jaguaripe",
      },
      {
        city_ID: 2917904,
        cityName: "Jandaíra",
      },
      {
        city_ID: 2918001,
        cityName: "Jequié",
      },
      {
        city_ID: 2918100,
        cityName: "Jeremoabo",
      },
      {
        city_ID: 2918209,
        cityName: "Jiquiriçá",
      },
      {
        city_ID: 2918308,
        cityName: "Jitaúna",
      },
      {
        city_ID: 2918357,
        cityName: "João Dourado",
      },
      {
        city_ID: 2918407,
        cityName: "Juazeiro",
      },
      {
        city_ID: 2918456,
        cityName: "Jucuruçu",
      },
      {
        city_ID: 2918506,
        cityName: "Jussara",
      },
      {
        city_ID: 2918555,
        cityName: "Jussari",
      },
      {
        city_ID: 2918605,
        cityName: "Jussiape",
      },
      {
        city_ID: 2918704,
        cityName: "Lafaiete Coutinho",
      },
      {
        city_ID: 2918753,
        cityName: "Lagoa Real",
      },
      {
        city_ID: 2918803,
        cityName: "Laje",
      },
      {
        city_ID: 2918902,
        cityName: "Lajedão",
      },
      {
        city_ID: 2919009,
        cityName: "Lajedinho",
      },
      {
        city_ID: 2919058,
        cityName: "Lajedo do Tabocal",
      },
      {
        city_ID: 2919108,
        cityName: "Lamarão",
      },
      {
        city_ID: 2919157,
        cityName: "Lapão",
      },
      {
        city_ID: 2919207,
        cityName: "Lauro de Freitas",
      },
      {
        city_ID: 2919306,
        cityName: "Lençóis",
      },
      {
        city_ID: 2919405,
        cityName: "Licínio de Almeida",
      },
      {
        city_ID: 2919504,
        cityName: "Livramento de Nossa Senhora",
      },
      {
        city_ID: 2919553,
        cityName: "Luís Eduardo Magalhães",
      },
      {
        city_ID: 2919603,
        cityName: "Macajuba",
      },
      {
        city_ID: 2919702,
        cityName: "Macarani",
      },
      {
        city_ID: 2919801,
        cityName: "Macaúbas",
      },
      {
        city_ID: 2919900,
        cityName: "Macururé",
      },
      {
        city_ID: 2919926,
        cityName: "Madre de Deus",
      },
      {
        city_ID: 2919959,
        cityName: "Maetinga",
      },
      {
        city_ID: 2920007,
        cityName: "Maiquinique",
      },
      {
        city_ID: 2920106,
        cityName: "Mairi",
      },
      {
        city_ID: 2920205,
        cityName: "Malhada",
      },
      {
        city_ID: 2920304,
        cityName: "Malhada de Pedras",
      },
      {
        city_ID: 2920403,
        cityName: "Manoel Vitorino",
      },
      {
        city_ID: 2920452,
        cityName: "Mansidão",
      },
      {
        city_ID: 2920502,
        cityName: "Maracás",
      },
      {
        city_ID: 2920601,
        cityName: "Maragogipe",
      },
      {
        city_ID: 2920700,
        cityName: "Maraú",
      },
      {
        city_ID: 2920809,
        cityName: "Marcionílio Souza",
      },
      {
        city_ID: 2920908,
        cityName: "Mascote",
      },
      {
        city_ID: 2921005,
        cityName: "Mata de São João",
      },
      {
        city_ID: 2921054,
        cityName: "Matina",
      },
      {
        city_ID: 2921104,
        cityName: "Medeiros Neto",
      },
      {
        city_ID: 2921203,
        cityName: "Miguel Calmon",
      },
      {
        city_ID: 2921302,
        cityName: "Milagres",
      },
      {
        city_ID: 2921401,
        cityName: "Mirangaba",
      },
      {
        city_ID: 2921450,
        cityName: "Mirante",
      },
      {
        city_ID: 2921500,
        cityName: "Monte Santo",
      },
      {
        city_ID: 2921609,
        cityName: "Morpará",
      },
      {
        city_ID: 2921708,
        cityName: "Morro do Chapéu",
      },
      {
        city_ID: 2921807,
        cityName: "Mortugaba",
      },
      {
        city_ID: 2921906,
        cityName: "Mucugê",
      },
      {
        city_ID: 2922003,
        cityName: "Mucuri",
      },
      {
        city_ID: 2922052,
        cityName: "Mulungu do Morro",
      },
      {
        city_ID: 2922102,
        cityName: "Mundo Novo",
      },
      {
        city_ID: 2922201,
        cityName: "Muniz Ferreira",
      },
      {
        city_ID: 2922250,
        cityName: "Muquém do São Francisco",
      },
      {
        city_ID: 2922300,
        cityName: "Muritiba",
      },
      {
        city_ID: 2922409,
        cityName: "Mutuípe",
      },
      {
        city_ID: 2922508,
        cityName: "Nazaré",
      },
      {
        city_ID: 2922607,
        cityName: "Nilo Peçanha",
      },
      {
        city_ID: 2922656,
        cityName: "Nordestina",
      },
      {
        city_ID: 2922706,
        cityName: "Nova Canaã",
      },
      {
        city_ID: 2922730,
        cityName: "Nova Fátima",
      },
      {
        city_ID: 2922755,
        cityName: "Nova Ibiá",
      },
      {
        city_ID: 2922805,
        cityName: "Nova Itarana",
      },
      {
        city_ID: 2922854,
        cityName: "Nova Redenção",
      },
      {
        city_ID: 2922904,
        cityName: "Nova Soure",
      },
      {
        city_ID: 2923001,
        cityName: "Nova Viçosa",
      },
      {
        city_ID: 2923035,
        cityName: "Novo Horizonte",
      },
      {
        city_ID: 2923050,
        cityName: "Novo Triunfo",
      },
      {
        city_ID: 2923100,
        cityName: "Olindina",
      },
      {
        city_ID: 2923209,
        cityName: "Oliveira dos Brejinhos",
      },
      {
        city_ID: 2923308,
        cityName: "Ouriçangas",
      },
      {
        city_ID: 2923357,
        cityName: "Ourolândia",
      },
      {
        city_ID: 2923407,
        cityName: "Palmas de Monte Alto",
      },
      {
        city_ID: 2923506,
        cityName: "Palmeiras",
      },
      {
        city_ID: 2923605,
        cityName: "Paramirim",
      },
      {
        city_ID: 2923704,
        cityName: "Paratinga",
      },
      {
        city_ID: 2923803,
        cityName: "Paripiranga",
      },
      {
        city_ID: 2923902,
        cityName: "Pau Brasil",
      },
      {
        city_ID: 2924009,
        cityName: "Paulo Afonso",
      },
      {
        city_ID: 2924058,
        cityName: "Pé de Serra",
      },
      {
        city_ID: 2924108,
        cityName: "Pedrão",
      },
      {
        city_ID: 2924207,
        cityName: "Pedro Alexandre",
      },
      {
        city_ID: 2924306,
        cityName: "Piatã",
      },
      {
        city_ID: 2924405,
        cityName: "Pilão Arcado",
      },
      {
        city_ID: 2924504,
        cityName: "Pindaí",
      },
      {
        city_ID: 2924603,
        cityName: "Pindobaçu",
      },
      {
        city_ID: 2924652,
        cityName: "Pintadas",
      },
      {
        city_ID: 2924678,
        cityName: "Piraí do Norte",
      },
      {
        city_ID: 2924702,
        cityName: "Piripá",
      },
      {
        city_ID: 2924801,
        cityName: "Piritiba",
      },
      {
        city_ID: 2924900,
        cityName: "Planaltino",
      },
      {
        city_ID: 2925006,
        cityName: "Planalto",
      },
      {
        city_ID: 2925105,
        cityName: "Poções",
      },
      {
        city_ID: 2925204,
        cityName: "Pojuca",
      },
      {
        city_ID: 2925253,
        cityName: "Ponto Novo",
      },
      {
        city_ID: 2925303,
        cityName: "Porto Seguro",
      },
      {
        city_ID: 2925402,
        cityName: "Potiraguá",
      },
      {
        city_ID: 2925501,
        cityName: "Prado",
      },
      {
        city_ID: 2925600,
        cityName: "Presidente Dutra",
      },
      {
        city_ID: 2925709,
        cityName: "Presidente Jânio Quadros",
      },
      {
        city_ID: 2925758,
        cityName: "Presidente Tancredo Neves",
      },
      {
        city_ID: 2925808,
        cityName: "Queimadas",
      },
      {
        city_ID: 2925907,
        cityName: "Quijingue",
      },
      {
        city_ID: 2925931,
        cityName: "Quixabeira",
      },
      {
        city_ID: 2925956,
        cityName: "Rafael Jambeiro",
      },
      {
        city_ID: 2926004,
        cityName: "Remanso",
      },
      {
        city_ID: 2926103,
        cityName: "Retirolândia",
      },
      {
        city_ID: 2926202,
        cityName: "Riachão das Neves",
      },
      {
        city_ID: 2926301,
        cityName: "Riachão do Jacuípe",
      },
      {
        city_ID: 2926400,
        cityName: "Riacho de Santana",
      },
      {
        city_ID: 2926509,
        cityName: "Ribeira do Amparo",
      },
      {
        city_ID: 2926608,
        cityName: "Ribeira do Pombal",
      },
      {
        city_ID: 2926657,
        cityName: "Ribeirão do Largo",
      },
      {
        city_ID: 2926707,
        cityName: "Rio de Contas",
      },
      {
        city_ID: 2926806,
        cityName: "Rio do Antônio",
      },
      {
        city_ID: 2926905,
        cityName: "Rio do Pires",
      },
      {
        city_ID: 2927002,
        cityName: "Rio Real",
      },
      {
        city_ID: 2927101,
        cityName: "Rodelas",
      },
      {
        city_ID: 2927200,
        cityName: "Ruy Barbosa",
      },
      {
        city_ID: 2927309,
        cityName: "Salinas da Margarida",
      },
      {
        city_ID: 2927408,
        cityName: "Salvador",
      },
      {
        city_ID: 2927507,
        cityName: "Santa Bárbara",
      },
      {
        city_ID: 2927606,
        cityName: "Santa Brígida",
      },
      {
        city_ID: 2927705,
        cityName: "Santa Cruz Cabrália",
      },
      {
        city_ID: 2927804,
        cityName: "Santa Cruz da Vitória",
      },
      {
        city_ID: 2927903,
        cityName: "Santa Inês",
      },
      {
        city_ID: 2928059,
        cityName: "Santa Luzia",
      },
      {
        city_ID: 2928109,
        cityName: "Santa Maria da Vitória",
      },
      {
        city_ID: 2928406,
        cityName: "Santa Rita de Cássia",
      },
      {
        city_ID: 2928505,
        cityName: "Santa Terezinha",
      },
      {
        city_ID: 2928000,
        cityName: "Santaluz",
      },
      {
        city_ID: 2928208,
        cityName: "Santana",
      },
      {
        city_ID: 2928307,
        cityName: "Santanópolis",
      },
      {
        city_ID: 2928604,
        cityName: "Santo Amaro",
      },
      {
        city_ID: 2928703,
        cityName: "Santo Antônio de Jesus",
      },
      {
        city_ID: 2928802,
        cityName: "Santo Estêvão",
      },
      {
        city_ID: 2928901,
        cityName: "São Desidério",
      },
      {
        city_ID: 2928950,
        cityName: "São Domingos",
      },
      {
        city_ID: 2929107,
        cityName: "São Felipe",
      },
      {
        city_ID: 2929008,
        cityName: "São Félix",
      },
      {
        city_ID: 2929057,
        cityName: "São Félix do Coribe",
      },
      {
        city_ID: 2929206,
        cityName: "São Francisco do Conde",
      },
      {
        city_ID: 2929255,
        cityName: "São Gabriel",
      },
      {
        city_ID: 2929305,
        cityName: "São Gonçalo dos Campos",
      },
      {
        city_ID: 2929354,
        cityName: "São José da Vitória",
      },
      {
        city_ID: 2929370,
        cityName: "São José do Jacuípe",
      },
      {
        city_ID: 2929404,
        cityName: "São Miguel das Matas",
      },
      {
        city_ID: 2929503,
        cityName: "São Sebastião do Passé",
      },
      {
        city_ID: 2929602,
        cityName: "Sapeaçu",
      },
      {
        city_ID: 2929701,
        cityName: "Sátiro Dias",
      },
      {
        city_ID: 2929750,
        cityName: "Saubara",
      },
      {
        city_ID: 2929800,
        cityName: "Saúde",
      },
      {
        city_ID: 2929909,
        cityName: "Seabra",
      },
      {
        city_ID: 2930006,
        cityName: "Sebastião Laranjeiras",
      },
      {
        city_ID: 2930105,
        cityName: "Senhor do Bonfim",
      },
      {
        city_ID: 2930204,
        cityName: "Sento Sé",
      },
      {
        city_ID: 2930154,
        cityName: "Serra do Ramalho",
      },
      {
        city_ID: 2930303,
        cityName: "Serra Dourada",
      },
      {
        city_ID: 2930402,
        cityName: "Serra Preta",
      },
      {
        city_ID: 2930501,
        cityName: "Serrinha",
      },
      {
        city_ID: 2930600,
        cityName: "Serrolândia",
      },
      {
        city_ID: 2930709,
        cityName: "Simões Filho",
      },
      {
        city_ID: 2930758,
        cityName: "Sítio do Mato",
      },
      {
        city_ID: 2930766,
        cityName: "Sítio do Quinto",
      },
      {
        city_ID: 2930774,
        cityName: "Sobradinho",
      },
      {
        city_ID: 2930808,
        cityName: "Souto Soares",
      },
      {
        city_ID: 2930907,
        cityName: "Tabocas do Brejo Velho",
      },
      {
        city_ID: 2931004,
        cityName: "Tanhaçu",
      },
      {
        city_ID: 2931053,
        cityName: "Tanque Novo",
      },
      {
        city_ID: 2931103,
        cityName: "Tanquinho",
      },
      {
        city_ID: 2931202,
        cityName: "Taperoá",
      },
      {
        city_ID: 2931301,
        cityName: "Tapiramutá",
      },
      {
        city_ID: 2931350,
        cityName: "Teixeira de Freitas",
      },
      {
        city_ID: 2931400,
        cityName: "Teodoro Sampaio",
      },
      {
        city_ID: 2931509,
        cityName: "Teofilândia",
      },
      {
        city_ID: 2931608,
        cityName: "Teolândia",
      },
      {
        city_ID: 2931707,
        cityName: "Terra Nova",
      },
      {
        city_ID: 2931806,
        cityName: "Tremedal",
      },
      {
        city_ID: 2931905,
        cityName: "Tucano",
      },
      {
        city_ID: 2932002,
        cityName: "Uauá",
      },
      {
        city_ID: 2932101,
        cityName: "Ubaíra",
      },
      {
        city_ID: 2932200,
        cityName: "Ubaitaba",
      },
      {
        city_ID: 2932309,
        cityName: "Ubatã",
      },
      {
        city_ID: 2932408,
        cityName: "Uibaí",
      },
      {
        city_ID: 2932457,
        cityName: "Umburanas",
      },
      {
        city_ID: 2932507,
        cityName: "Una",
      },
      {
        city_ID: 2932606,
        cityName: "Urandi",
      },
      {
        city_ID: 2932705,
        cityName: "Uruçuca",
      },
      {
        city_ID: 2932804,
        cityName: "Utinga",
      },
      {
        city_ID: 2932903,
        cityName: "Valença",
      },
      {
        city_ID: 2933000,
        cityName: "Valente",
      },
      {
        city_ID: 2933059,
        cityName: "Várzea da Roça",
      },
      {
        city_ID: 2933109,
        cityName: "Várzea do Poço",
      },
      {
        city_ID: 2933158,
        cityName: "Várzea Nova",
      },
      {
        city_ID: 2933174,
        cityName: "Varzedo",
      },
      {
        city_ID: 2933208,
        cityName: "Vera Cruz",
      },
      {
        city_ID: 2933257,
        cityName: "Vereda",
      },
      {
        city_ID: 2933307,
        cityName: "Vitória da Conquista",
      },
      {
        city_ID: 2933406,
        cityName: "Wagner",
      },
      {
        city_ID: 2933455,
        cityName: "Wanderley",
      },
      {
        city_ID: 2933505,
        cityName: "Wenceslau Guimarães",
      },
      {
        city_ID: 2933604,
        cityName: "Xique-Xique",
      },
    ],
  },
  {
    id: 23,
    stateName: "Ceará",
    abv: "CE",
    cities: [
      {
        city_ID: 2300101,
        cityName: "Abaiara",
      },
      {
        city_ID: 2300150,
        cityName: "Acarape",
      },
      {
        city_ID: 2300200,
        cityName: "Acaraú",
      },
      {
        city_ID: 2300309,
        cityName: "Acopiara",
      },
      {
        city_ID: 2300408,
        cityName: "Aiuaba",
      },
      {
        city_ID: 2300507,
        cityName: "Alcântaras",
      },
      {
        city_ID: 2300606,
        cityName: "Altaneira",
      },
      {
        city_ID: 2300705,
        cityName: "Alto Santo",
      },
      {
        city_ID: 2300754,
        cityName: "Amontada",
      },
      {
        city_ID: 2300804,
        cityName: "Antonina do Norte",
      },
      {
        city_ID: 2300903,
        cityName: "Apuiarés",
      },
      {
        city_ID: 2301000,
        cityName: "Aquiraz",
      },
      {
        city_ID: 2301109,
        cityName: "Aracati",
      },
      {
        city_ID: 2301208,
        cityName: "Aracoiaba",
      },
      {
        city_ID: 2301257,
        cityName: "Ararendá",
      },
      {
        city_ID: 2301307,
        cityName: "Araripe",
      },
      {
        city_ID: 2301406,
        cityName: "Aratuba",
      },
      {
        city_ID: 2301505,
        cityName: "Arneiroz",
      },
      {
        city_ID: 2301604,
        cityName: "Assaré",
      },
      {
        city_ID: 2301703,
        cityName: "Aurora",
      },
      {
        city_ID: 2301802,
        cityName: "Baixio",
      },
      {
        city_ID: 2301851,
        cityName: "Banabuiú",
      },
      {
        city_ID: 2301901,
        cityName: "Barbalha",
      },
      {
        city_ID: 2301950,
        cityName: "Barreira",
      },
      {
        city_ID: 2302008,
        cityName: "Barro",
      },
      {
        city_ID: 2302057,
        cityName: "Barroquinha",
      },
      {
        city_ID: 2302107,
        cityName: "Baturité",
      },
      {
        city_ID: 2302206,
        cityName: "Beberibe",
      },
      {
        city_ID: 2302305,
        cityName: "Bela Cruz",
      },
      {
        city_ID: 2302404,
        cityName: "Boa Viagem",
      },
      {
        city_ID: 2302503,
        cityName: "Brejo Santo",
      },
      {
        city_ID: 2302602,
        cityName: "Camocim",
      },
      {
        city_ID: 2302701,
        cityName: "Campos Sales",
      },
      {
        city_ID: 2302800,
        cityName: "Canindé",
      },
      {
        city_ID: 2302909,
        cityName: "Capistrano",
      },
      {
        city_ID: 2303006,
        cityName: "Caridade",
      },
      {
        city_ID: 2303105,
        cityName: "Cariré",
      },
      {
        city_ID: 2303204,
        cityName: "Caririaçu",
      },
      {
        city_ID: 2303303,
        cityName: "Cariús",
      },
      {
        city_ID: 2303402,
        cityName: "Carnaubal",
      },
      {
        city_ID: 2303501,
        cityName: "Cascavel",
      },
      {
        city_ID: 2303600,
        cityName: "Catarina",
      },
      {
        city_ID: 2303659,
        cityName: "Catunda",
      },
      {
        city_ID: 2303709,
        cityName: "Caucaia",
      },
      {
        city_ID: 2303808,
        cityName: "Cedro",
      },
      {
        city_ID: 2303907,
        cityName: "Chaval",
      },
      {
        city_ID: 2303931,
        cityName: "Choró",
      },
      {
        city_ID: 2303956,
        cityName: "Chorozinho",
      },
      {
        city_ID: 2304004,
        cityName: "Coreaú",
      },
      {
        city_ID: 2304103,
        cityName: "Crateús",
      },
      {
        city_ID: 2304202,
        cityName: "Crato",
      },
      {
        city_ID: 2304236,
        cityName: "Croatá",
      },
      {
        city_ID: 2304251,
        cityName: "Cruz",
      },
      {
        city_ID: 2304269,
        cityName: "Deputado Irapuan Pinheiro",
      },
      {
        city_ID: 2304277,
        cityName: "Ererê",
      },
      {
        city_ID: 2304285,
        cityName: "Eusébio",
      },
      {
        city_ID: 2304301,
        cityName: "Farias Brito",
      },
      {
        city_ID: 2304350,
        cityName: "Forquilha",
      },
      {
        city_ID: 2304400,
        cityName: "Fortaleza",
      },
      {
        city_ID: 2304459,
        cityName: "Fortim",
      },
      {
        city_ID: 2304509,
        cityName: "Frecheirinha",
      },
      {
        city_ID: 2304608,
        cityName: "General Sampaio",
      },
      {
        city_ID: 2304657,
        cityName: "Graça",
      },
      {
        city_ID: 2304707,
        cityName: "Granja",
      },
      {
        city_ID: 2304806,
        cityName: "Granjeiro",
      },
      {
        city_ID: 2304905,
        cityName: "Groaíras",
      },
      {
        city_ID: 2304954,
        cityName: "Guaiúba",
      },
      {
        city_ID: 2305001,
        cityName: "Guaraciaba do Norte",
      },
      {
        city_ID: 2305100,
        cityName: "Guaramiranga",
      },
      {
        city_ID: 2305209,
        cityName: "Hidrolândia",
      },
      {
        city_ID: 2305233,
        cityName: "Horizonte",
      },
      {
        city_ID: 2305266,
        cityName: "Ibaretama",
      },
      {
        city_ID: 2305308,
        cityName: "Ibiapina",
      },
      {
        city_ID: 2305332,
        cityName: "Ibicuitinga",
      },
      {
        city_ID: 2305357,
        cityName: "Icapuí",
      },
      {
        city_ID: 2305407,
        cityName: "Icó",
      },
      {
        city_ID: 2305506,
        cityName: "Iguatu",
      },
      {
        city_ID: 2305605,
        cityName: "Independência",
      },
      {
        city_ID: 2305654,
        cityName: "Ipaporanga",
      },
      {
        city_ID: 2305704,
        cityName: "Ipaumirim",
      },
      {
        city_ID: 2305803,
        cityName: "Ipu",
      },
      {
        city_ID: 2305902,
        cityName: "Ipueiras",
      },
      {
        city_ID: 2306009,
        cityName: "Iracema",
      },
      {
        city_ID: 2306108,
        cityName: "Irauçuba",
      },
      {
        city_ID: 2306207,
        cityName: "Itaiçaba",
      },
      {
        city_ID: 2306256,
        cityName: "Itaitinga",
      },
      {
        city_ID: 2306306,
        cityName: "Itapajé",
      },
      {
        city_ID: 2306405,
        cityName: "Itapipoca",
      },
      {
        city_ID: 2306504,
        cityName: "Itapiúna",
      },
      {
        city_ID: 2306553,
        cityName: "Itarema",
      },
      {
        city_ID: 2306603,
        cityName: "Itatira",
      },
      {
        city_ID: 2306702,
        cityName: "Jaguaretama",
      },
      {
        city_ID: 2306801,
        cityName: "Jaguaribara",
      },
      {
        city_ID: 2306900,
        cityName: "Jaguaribe",
      },
      {
        city_ID: 2307007,
        cityName: "Jaguaruana",
      },
      {
        city_ID: 2307106,
        cityName: "Jardim",
      },
      {
        city_ID: 2307205,
        cityName: "Jati",
      },
      {
        city_ID: 2307254,
        cityName: "Jijoca de Jericoacoara",
      },
      {
        city_ID: 2307304,
        cityName: "Juazeiro do Norte",
      },
      {
        city_ID: 2307403,
        cityName: "Jucás",
      },
      {
        city_ID: 2307502,
        cityName: "Lavras da Mangabeira",
      },
      {
        city_ID: 2307601,
        cityName: "Limoeiro do Norte",
      },
      {
        city_ID: 2307635,
        cityName: "Madalena",
      },
      {
        city_ID: 2307650,
        cityName: "Maracanaú",
      },
      {
        city_ID: 2307700,
        cityName: "Maranguape",
      },
      {
        city_ID: 2307809,
        cityName: "Marco",
      },
      {
        city_ID: 2307908,
        cityName: "Martinópole",
      },
      {
        city_ID: 2308005,
        cityName: "Massapê",
      },
      {
        city_ID: 2308104,
        cityName: "Mauriti",
      },
      {
        city_ID: 2308203,
        cityName: "Meruoca",
      },
      {
        city_ID: 2308302,
        cityName: "Milagres",
      },
      {
        city_ID: 2308351,
        cityName: "Milhã",
      },
      {
        city_ID: 2308377,
        cityName: "Miraíma",
      },
      {
        city_ID: 2308401,
        cityName: "Missão Velha",
      },
      {
        city_ID: 2308500,
        cityName: "Mombaça",
      },
      {
        city_ID: 2308609,
        cityName: "Monsenhor Tabosa",
      },
      {
        city_ID: 2308708,
        cityName: "Morada Nova",
      },
      {
        city_ID: 2308807,
        cityName: "Moraújo",
      },
      {
        city_ID: 2308906,
        cityName: "Morrinhos",
      },
      {
        city_ID: 2309003,
        cityName: "Mucambo",
      },
      {
        city_ID: 2309102,
        cityName: "Mulungu",
      },
      {
        city_ID: 2309201,
        cityName: "Nova Olinda",
      },
      {
        city_ID: 2309300,
        cityName: "Nova Russas",
      },
      {
        city_ID: 2309409,
        cityName: "Novo Oriente",
      },
      {
        city_ID: 2309458,
        cityName: "Ocara",
      },
      {
        city_ID: 2309508,
        cityName: "Orós",
      },
      {
        city_ID: 2309607,
        cityName: "Pacajus",
      },
      {
        city_ID: 2309706,
        cityName: "Pacatuba",
      },
      {
        city_ID: 2309805,
        cityName: "Pacoti",
      },
      {
        city_ID: 2309904,
        cityName: "Pacujá",
      },
      {
        city_ID: 2310001,
        cityName: "Palhano",
      },
      {
        city_ID: 2310100,
        cityName: "Palmácia",
      },
      {
        city_ID: 2310209,
        cityName: "Paracuru",
      },
      {
        city_ID: 2310258,
        cityName: "Paraipaba",
      },
      {
        city_ID: 2310308,
        cityName: "Parambu",
      },
      {
        city_ID: 2310407,
        cityName: "Paramoti",
      },
      {
        city_ID: 2310506,
        cityName: "Pedra Branca",
      },
      {
        city_ID: 2310605,
        cityName: "Penaforte",
      },
      {
        city_ID: 2310704,
        cityName: "Pentecoste",
      },
      {
        city_ID: 2310803,
        cityName: "Pereiro",
      },
      {
        city_ID: 2310852,
        cityName: "Pindoretama",
      },
      {
        city_ID: 2310902,
        cityName: "Piquet Carneiro",
      },
      {
        city_ID: 2310951,
        cityName: "Pires Ferreira",
      },
      {
        city_ID: 2311009,
        cityName: "Poranga",
      },
      {
        city_ID: 2311108,
        cityName: "Porteiras",
      },
      {
        city_ID: 2311207,
        cityName: "Potengi",
      },
      {
        city_ID: 2311231,
        cityName: "Potiretama",
      },
      {
        city_ID: 2311264,
        cityName: "Quiterianópolis",
      },
      {
        city_ID: 2311306,
        cityName: "Quixadá",
      },
      {
        city_ID: 2311355,
        cityName: "Quixelô",
      },
      {
        city_ID: 2311405,
        cityName: "Quixeramobim",
      },
      {
        city_ID: 2311504,
        cityName: "Quixeré",
      },
      {
        city_ID: 2311603,
        cityName: "Redenção",
      },
      {
        city_ID: 2311702,
        cityName: "Reriutaba",
      },
      {
        city_ID: 2311801,
        cityName: "Russas",
      },
      {
        city_ID: 2311900,
        cityName: "Saboeiro",
      },
      {
        city_ID: 2311959,
        cityName: "Salitre",
      },
      {
        city_ID: 2312205,
        cityName: "Santa Quitéria",
      },
      {
        city_ID: 2312007,
        cityName: "Santana do Acaraú",
      },
      {
        city_ID: 2312106,
        cityName: "Santana do Cariri",
      },
      {
        city_ID: 2312304,
        cityName: "São Benedito",
      },
      {
        city_ID: 2312403,
        cityName: "São Gonçalo do Amarante",
      },
      {
        city_ID: 2312502,
        cityName: "São João do Jaguaribe",
      },
      {
        city_ID: 2312601,
        cityName: "São Luís do Curu",
      },
      {
        city_ID: 2312700,
        cityName: "Senador Pompeu",
      },
      {
        city_ID: 2312809,
        cityName: "Senador Sá",
      },
      {
        city_ID: 2312908,
        cityName: "Sobral",
      },
      {
        city_ID: 2313005,
        cityName: "Solonópole",
      },
      {
        city_ID: 2313104,
        cityName: "Tabuleiro do Norte",
      },
      {
        city_ID: 2313203,
        cityName: "Tamboril",
      },
      {
        city_ID: 2313252,
        cityName: "Tarrafas",
      },
      {
        city_ID: 2313302,
        cityName: "Tauá",
      },
      {
        city_ID: 2313351,
        cityName: "Tejuçuoca",
      },
      {
        city_ID: 2313401,
        cityName: "Tianguá",
      },
      {
        city_ID: 2313500,
        cityName: "Trairi",
      },
      {
        city_ID: 2313559,
        cityName: "Tururu",
      },
      {
        city_ID: 2313609,
        cityName: "Ubajara",
      },
      {
        city_ID: 2313708,
        cityName: "Umari",
      },
      {
        city_ID: 2313757,
        cityName: "Umirim",
      },
      {
        city_ID: 2313807,
        cityName: "Uruburetama",
      },
      {
        city_ID: 2313906,
        cityName: "Uruoca",
      },
      {
        city_ID: 2313955,
        cityName: "Varjota",
      },
      {
        city_ID: 2314003,
        cityName: "Várzea Alegre",
      },
      {
        city_ID: 2314102,
        cityName: "Viçosa do Ceará",
      },
    ],
  },
  {
    id: 53,
    stateName: "Distrito Federal",
    abv: "DF",
    cities: [
      {
        city_ID: 5300108,
        cityName: "Brasília",
      },
      {
        city_ID: 5300109,
        cityName: "Águas Claras",
      },
      {
        city_ID: 5300110,
        cityName: "Arniqueira",
      },
      {
        city_ID: 5300111,
        cityName: "Brazlândia",
      },
      {
        city_ID: 5300112,
        cityName: "Candangolândia",
      },
      {
        city_ID: 5300113,
        cityName: "Ceilândia",
      },
      {
        city_ID: 5300114,
        cityName: "Cruzeiro",
      },
      {
        city_ID: 5300115,
        cityName: "Fercal",
      },
      {
        city_ID: 5300116,
        cityName: "Gama",
      },
      {
        city_ID: 5300117,
        cityName: "Guará",
      },
      {
        city_ID: 5300118,
        cityName: "Itapoã",
      },
      {
        city_ID: 5300119,
        cityName: "Jardim Botânico",
      },
      {
        city_ID: 5300120,
        cityName: "Lago Norte",
      },
      {
        city_ID: 5300121,
        cityName: "Lago Sul",
      },
      {
        city_ID: 5300122,
        cityName: "Núcleo Bandeirante",
      },
      {
        city_ID: 5300123,
        cityName: "Paranoá",
      },
      {
        city_ID: 5300124,
        cityName: "Park Way",
      },
      {
        city_ID: 5300125,
        cityName: "Planaltina",
      },
      {
        city_ID: 5300126,
        cityName: "Plano Piloto",
      },
      {
        city_ID: 5300127,
        cityName: "Recanto das Emas",
      },
      {
        city_ID: 5300128,
        cityName: "Riacho Fundo",
      },
      {
        city_ID: 5300129,
        cityName: "Riacho Fundo II",
      },
      {
        city_ID: 5300130,
        cityName: "Samambaia",
      },
      {
        city_ID: 5300131,
        cityName: "Santa Maria",
      },
      {
        city_ID: 5300132,
        cityName: "São Sebastião",
      },
      {
        city_ID: 5300133,
        cityName: "Estrutural",
      },
      {
        city_ID: 5300134,
        cityName: "SIA",
      },
      {
        city_ID: 5300135,
        cityName: "Sobradinho",
      },
      {
        city_ID: 5300136,
        cityName: "Sobradinho II",
      },
      {
        city_ID: 5300137,
        cityName: "Sol Nascente",
      },
      {
        city_ID: 5300138,
        cityName: "Pôr do Sol",
      },
      {
        city_ID: 5300139,
        cityName: "Sudoeste",
      },
      {
        city_ID: 5300140,
        cityName: "Octogonal",
      },
      {
        city_ID: 5300141,
        cityName: "Taguatinga",
      },
      {
        city_ID: 5300142,
        cityName: "Varjão",
      },
      {
        city_ID: 5300143,
        cityName: "Vicente Pires",
      },
    ],
  },
  {
    id: 32,
    stateName: "Espírito Santo",
    abv: "ES",
    cities: [
      {
        city_ID: 3200102,
        cityName: "Afonso Cláudio",
      },
      {
        city_ID: 3200169,
        cityName: "Água Doce do Norte",
      },
      {
        city_ID: 3200136,
        cityName: "Águia Branca",
      },
      {
        city_ID: 3200201,
        cityName: "Alegre",
      },
      {
        city_ID: 3200300,
        cityName: "Alfredo Chaves",
      },
      {
        city_ID: 3200359,
        cityName: "Alto Rio Novo",
      },
      {
        city_ID: 3200409,
        cityName: "Anchieta",
      },
      {
        city_ID: 3200508,
        cityName: "Apiacá",
      },
      {
        city_ID: 3200607,
        cityName: "Aracruz",
      },
      {
        city_ID: 3200706,
        cityName: "Atílio Vivacqua",
      },
      {
        city_ID: 3200805,
        cityName: "Baixo Guandu",
      },
      {
        city_ID: 3200904,
        cityName: "Barra de São Francisco",
      },
      {
        city_ID: 3201001,
        cityName: "Boa Esperança",
      },
      {
        city_ID: 3201100,
        cityName: "Bom Jesus do Norte",
      },
      {
        city_ID: 3201159,
        cityName: "Brejetuba",
      },
      {
        city_ID: 3201209,
        cityName: "Cachoeiro de Itapemirim",
      },
      {
        city_ID: 3201308,
        cityName: "Cariacica",
      },
      {
        city_ID: 3201407,
        cityName: "Castelo",
      },
      {
        city_ID: 3201506,
        cityName: "Colatina",
      },
      {
        city_ID: 3201605,
        cityName: "Conceição da Barra",
      },
      {
        city_ID: 3201704,
        cityName: "Conceição do Castelo",
      },
      {
        city_ID: 3201803,
        cityName: "Divino de São Lourenço",
      },
      {
        city_ID: 3201902,
        cityName: "Domingos Martins",
      },
      {
        city_ID: 3202009,
        cityName: "Dores do Rio Preto",
      },
      {
        city_ID: 3202108,
        cityName: "Ecoporanga",
      },
      {
        city_ID: 3202207,
        cityName: "Fundão",
      },
      {
        city_ID: 3202256,
        cityName: "Governador Lindenberg",
      },
      {
        city_ID: 3202306,
        cityName: "Guaçuí",
      },
      {
        city_ID: 3202405,
        cityName: "Guarapari",
      },
      {
        city_ID: 3202454,
        cityName: "Ibatiba",
      },
      {
        city_ID: 3202504,
        cityName: "Ibiraçu",
      },
      {
        city_ID: 3202553,
        cityName: "Ibitirama",
      },
      {
        city_ID: 3202603,
        cityName: "Iconha",
      },
      {
        city_ID: 3202652,
        cityName: "Irupi",
      },
      {
        city_ID: 3202702,
        cityName: "Itaguaçu",
      },
      {
        city_ID: 3202801,
        cityName: "Itapemirim",
      },
      {
        city_ID: 3202900,
        cityName: "Itarana",
      },
      {
        city_ID: 3203007,
        cityName: "Iúna",
      },
      {
        city_ID: 3203056,
        cityName: "Jaguaré",
      },
      {
        city_ID: 3203106,
        cityName: "Jerônimo Monteiro",
      },
      {
        city_ID: 3203130,
        cityName: "João Neiva",
      },
      {
        city_ID: 3203163,
        cityName: "Laranja da Terra",
      },
      {
        city_ID: 3203205,
        cityName: "Linhares",
      },
      {
        city_ID: 3203304,
        cityName: "Mantenópolis",
      },
      {
        city_ID: 3203320,
        cityName: "Marataízes",
      },
      {
        city_ID: 3203346,
        cityName: "Marechal Floriano",
      },
      {
        city_ID: 3203353,
        cityName: "Marilândia",
      },
      {
        city_ID: 3203403,
        cityName: "Mimoso do Sul",
      },
      {
        city_ID: 3203502,
        cityName: "Montanha",
      },
      {
        city_ID: 3203601,
        cityName: "Mucurici",
      },
      {
        city_ID: 3203700,
        cityName: "Muniz Freire",
      },
      {
        city_ID: 3203809,
        cityName: "Muqui",
      },
      {
        city_ID: 3203908,
        cityName: "Nova Venécia",
      },
      {
        city_ID: 3204005,
        cityName: "Pancas",
      },
      {
        city_ID: 3204054,
        cityName: "Pedro Canário",
      },
      {
        city_ID: 3204104,
        cityName: "Pinheiros",
      },
      {
        city_ID: 3204203,
        cityName: "Piúma",
      },
      {
        city_ID: 3204252,
        cityName: "Ponto Belo",
      },
      {
        city_ID: 3204302,
        cityName: "Presidente Kennedy",
      },
      {
        city_ID: 3204351,
        cityName: "Rio Bananal",
      },
      {
        city_ID: 3204401,
        cityName: "Rio Novo do Sul",
      },
      {
        city_ID: 3204500,
        cityName: "Santa Leopoldina",
      },
      {
        city_ID: 3204559,
        cityName: "Santa Maria de Jetibá",
      },
      {
        city_ID: 3204609,
        cityName: "Santa Teresa",
      },
      {
        city_ID: 3204658,
        cityName: "São Domingos do Norte",
      },
      {
        city_ID: 3204708,
        cityName: "São Gabriel da Palha",
      },
      {
        city_ID: 3204807,
        cityName: "São José do Calçado",
      },
      {
        city_ID: 3204906,
        cityName: "São Mateus",
      },
      {
        city_ID: 3204955,
        cityName: "São Roque do Canaã",
      },
      {
        city_ID: 3205002,
        cityName: "Serra",
      },
      {
        city_ID: 3205010,
        cityName: "Sooretama",
      },
      {
        city_ID: 3205036,
        cityName: "Vargem Alta",
      },
      {
        city_ID: 3205069,
        cityName: "Venda Nova do Imigrante",
      },
      {
        city_ID: 3205101,
        cityName: "Viana",
      },
      {
        city_ID: 3205150,
        cityName: "Vila Pavão",
      },
      {
        city_ID: 3205176,
        cityName: "Vila Valério",
      },
      {
        city_ID: 3205200,
        cityName: "Vila Velha",
      },
      {
        city_ID: 3205309,
        cityName: "Vitória",
      },
    ],
  },
  {
    id: 52,
    stateName: "Goiás",
    abv: "GO",
    cities: [
      {
        city_ID: 5200050,
        cityName: "Abadia de Goiás",
      },
      {
        city_ID: 5200100,
        cityName: "Abadiânia",
      },
      {
        city_ID: 5200134,
        cityName: "Acreúna",
      },
      {
        city_ID: 5200159,
        cityName: "Adelândia",
      },
      {
        city_ID: 5200175,
        cityName: "Água Fria de Goiás",
      },
      {
        city_ID: 5200209,
        cityName: "Água Limpa",
      },
      {
        city_ID: 5200258,
        cityName: "Águas Lindas de Goiás",
      },
      {
        city_ID: 5200308,
        cityName: "Alexânia",
      },
      {
        city_ID: 5200506,
        cityName: "Aloândia",
      },
      {
        city_ID: 5200555,
        cityName: "Alto Horizonte",
      },
      {
        city_ID: 5200605,
        cityName: "Alto Paraíso de Goiás",
      },
      {
        city_ID: 5200803,
        cityName: "Alvorada do Norte",
      },
      {
        city_ID: 5200829,
        cityName: "Amaralina",
      },
      {
        city_ID: 5200852,
        cityName: "Americano do Brasil",
      },
      {
        city_ID: 5200902,
        cityName: "Amorinópolis",
      },
      {
        city_ID: 5201108,
        cityName: "Anápolis",
      },
      {
        city_ID: 5201207,
        cityName: "Anhanguera",
      },
      {
        city_ID: 5201306,
        cityName: "Anicuns",
      },
      {
        city_ID: 5201405,
        cityName: "Aparecida de Goiânia",
      },
      {
        city_ID: 5201454,
        cityName: "Aparecida do Rio Doce",
      },
      {
        city_ID: 5201504,
        cityName: "Aporé",
      },
      {
        city_ID: 5201603,
        cityName: "Araçu",
      },
      {
        city_ID: 5201702,
        cityName: "Aragarças",
      },
      {
        city_ID: 5201801,
        cityName: "Aragoiânia",
      },
      {
        city_ID: 5202155,
        cityName: "Araguapaz",
      },
      {
        city_ID: 5202353,
        cityName: "Arenópolis",
      },
      {
        city_ID: 5202502,
        cityName: "Aruanã",
      },
      {
        city_ID: 5202601,
        cityName: "Aurilândia",
      },
      {
        city_ID: 5202809,
        cityName: "Avelinópolis",
      },
      {
        city_ID: 5203104,
        cityName: "Baliza",
      },
      {
        city_ID: 5203203,
        cityName: "Barro Alto",
      },
      {
        city_ID: 5203302,
        cityName: "Bela Vista de Goiás",
      },
      {
        city_ID: 5203401,
        cityName: "Bom Jardim de Goiás",
      },
      {
        city_ID: 5203500,
        cityName: "Bom Jesus de Goiás",
      },
      {
        city_ID: 5203559,
        cityName: "Bonfinópolis",
      },
      {
        city_ID: 5203575,
        cityName: "Bonópolis",
      },
      {
        city_ID: 5203609,
        cityName: "Brazabrantes",
      },
      {
        city_ID: 5203807,
        cityName: "Britânia",
      },
      {
        city_ID: 5203906,
        cityName: "Buriti Alegre",
      },
      {
        city_ID: 5203939,
        cityName: "Buriti de Goiás",
      },
      {
        city_ID: 5203962,
        cityName: "Buritinópolis",
      },
      {
        city_ID: 5204003,
        cityName: "Cabeceiras",
      },
      {
        city_ID: 5204102,
        cityName: "Cachoeira Alta",
      },
      {
        city_ID: 5204201,
        cityName: "Cachoeira de Goiás",
      },
      {
        city_ID: 5204250,
        cityName: "Cachoeira Dourada",
      },
      {
        city_ID: 5204300,
        cityName: "Caçu",
      },
      {
        city_ID: 5204409,
        cityName: "Caiapônia",
      },
      {
        city_ID: 5204508,
        cityName: "Caldas Novas",
      },
      {
        city_ID: 5204557,
        cityName: "Caldazinha",
      },
      {
        city_ID: 5204607,
        cityName: "Campestre de Goiás",
      },
      {
        city_ID: 5204656,
        cityName: "Campinaçu",
      },
      {
        city_ID: 5204706,
        cityName: "Campinorte",
      },
      {
        city_ID: 5204805,
        cityName: "Campo Alegre de Goiás",
      },
      {
        city_ID: 5204854,
        cityName: "Campo Limpo de Goiás",
      },
      {
        city_ID: 5204904,
        cityName: "Campos Belos",
      },
      {
        city_ID: 5204953,
        cityName: "Campos Verdes",
      },
      {
        city_ID: 5205000,
        cityName: "Carmo do Rio Verde",
      },
      {
        city_ID: 5205059,
        cityName: "Castelândia",
      },
      {
        city_ID: 5205109,
        cityName: "Catalão",
      },
      {
        city_ID: 5205208,
        cityName: "Caturaí",
      },
      {
        city_ID: 5205307,
        cityName: "Cavalcante",
      },
      {
        city_ID: 5205406,
        cityName: "Ceres",
      },
      {
        city_ID: 5205455,
        cityName: "Cezarina",
      },
      {
        city_ID: 5205471,
        cityName: "Chapadão do Céu",
      },
      {
        city_ID: 5205497,
        cityName: "Cidade Ocidental",
      },
      {
        city_ID: 5205513,
        cityName: "Cocalzinho de Goiás",
      },
      {
        city_ID: 5205521,
        cityName: "Colinas do Sul",
      },
      {
        city_ID: 5205703,
        cityName: "Córrego do Ouro",
      },
      {
        city_ID: 5205802,
        cityName: "Corumbá de Goiás",
      },
      {
        city_ID: 5205901,
        cityName: "Corumbaíba",
      },
      {
        city_ID: 5206206,
        cityName: "Cristalina",
      },
      {
        city_ID: 5206305,
        cityName: "Cristianópolis",
      },
      {
        city_ID: 5206404,
        cityName: "Crixás",
      },
      {
        city_ID: 5206503,
        cityName: "Cromínia",
      },
      {
        city_ID: 5206602,
        cityName: "Cumari",
      },
      {
        city_ID: 5206701,
        cityName: "Damianópolis",
      },
      {
        city_ID: 5206800,
        cityName: "Damolândia",
      },
      {
        city_ID: 5206909,
        cityName: "Davinópolis",
      },
      {
        city_ID: 5207105,
        cityName: "Diorama",
      },
      {
        city_ID: 5208301,
        cityName: "Divinópolis de Goiás",
      },
      {
        city_ID: 5207253,
        cityName: "Doverlândia",
      },
      {
        city_ID: 5207352,
        cityName: "Edealina",
      },
      {
        city_ID: 5207402,
        cityName: "Edéia",
      },
      {
        city_ID: 5207501,
        cityName: "Estrela do Norte",
      },
      {
        city_ID: 5207535,
        cityName: "Faina",
      },
      {
        city_ID: 5207600,
        cityName: "Fazenda Nova",
      },
      {
        city_ID: 5207808,
        cityName: "Firminópolis",
      },
      {
        city_ID: 5207907,
        cityName: "Flores de Goiás",
      },
      {
        city_ID: 5208004,
        cityName: "Formosa",
      },
      {
        city_ID: 5208103,
        cityName: "Formoso",
      },
      {
        city_ID: 5208152,
        cityName: "Gameleira de Goiás",
      },
      {
        city_ID: 5208400,
        cityName: "Goianápolis",
      },
      {
        city_ID: 5208509,
        cityName: "Goiandira",
      },
      {
        city_ID: 5208608,
        cityName: "Goianésia",
      },
      {
        city_ID: 5208707,
        cityName: "Goiânia",
      },
      {
        city_ID: 5208806,
        cityName: "Goianira",
      },
      {
        city_ID: 5208905,
        cityName: "Goiás",
      },
      {
        city_ID: 5209101,
        cityName: "Goiatuba",
      },
      {
        city_ID: 5209150,
        cityName: "Gouvelândia",
      },
      {
        city_ID: 5209200,
        cityName: "Guapó",
      },
      {
        city_ID: 5209291,
        cityName: "Guaraíta",
      },
      {
        city_ID: 5209408,
        cityName: "Guarani de Goiás",
      },
      {
        city_ID: 5209457,
        cityName: "Guarinos",
      },
      {
        city_ID: 5209606,
        cityName: "Heitoraí",
      },
      {
        city_ID: 5209705,
        cityName: "Hidrolândia",
      },
      {
        city_ID: 5209804,
        cityName: "Hidrolina",
      },
      {
        city_ID: 5209903,
        cityName: "Iaciara",
      },
      {
        city_ID: 5209937,
        cityName: "Inaciolândia",
      },
      {
        city_ID: 5209952,
        cityName: "Indiara",
      },
      {
        city_ID: 5210000,
        cityName: "Inhumas",
      },
      {
        city_ID: 5210109,
        cityName: "Ipameri",
      },
      {
        city_ID: 5210158,
        cityName: "Ipiranga de Goiás",
      },
      {
        city_ID: 5210208,
        cityName: "Iporá",
      },
      {
        city_ID: 5210307,
        cityName: "Israelândia",
      },
      {
        city_ID: 5210406,
        cityName: "Itaberaí",
      },
      {
        city_ID: 5210562,
        cityName: "Itaguari",
      },
      {
        city_ID: 5210604,
        cityName: "Itaguaru",
      },
      {
        city_ID: 5210802,
        cityName: "Itajá",
      },
      {
        city_ID: 5210901,
        cityName: "Itapaci",
      },
      {
        city_ID: 5211008,
        cityName: "Itapirapuã",
      },
      {
        city_ID: 5211206,
        cityName: "Itapuranga",
      },
      {
        city_ID: 5211305,
        cityName: "Itarumã",
      },
      {
        city_ID: 5211404,
        cityName: "Itauçu",
      },
      {
        city_ID: 5211503,
        cityName: "Itumbiara",
      },
      {
        city_ID: 5211602,
        cityName: "Ivolândia",
      },
      {
        city_ID: 5211701,
        cityName: "Jandaia",
      },
      {
        city_ID: 5211800,
        cityName: "Jaraguá",
      },
      {
        city_ID: 5211909,
        cityName: "Jataí",
      },
      {
        city_ID: 5212006,
        cityName: "Jaupaci",
      },
      {
        city_ID: 5212055,
        cityName: "Jesúpolis",
      },
      {
        city_ID: 5212105,
        cityName: "Joviânia",
      },
      {
        city_ID: 5212204,
        cityName: "Jussara",
      },
      {
        city_ID: 5212253,
        cityName: "Lagoa Santa",
      },
      {
        city_ID: 5212303,
        cityName: "Leopoldo de Bulhões",
      },
      {
        city_ID: 5212501,
        cityName: "Luziânia",
      },
      {
        city_ID: 5212600,
        cityName: "Mairipotaba",
      },
      {
        city_ID: 5212709,
        cityName: "Mambaí",
      },
      {
        city_ID: 5212808,
        cityName: "Mara Rosa",
      },
      {
        city_ID: 5212907,
        cityName: "Marzagão",
      },
      {
        city_ID: 5212956,
        cityName: "Matrinchã",
      },
      {
        city_ID: 5213004,
        cityName: "Maurilândia",
      },
      {
        city_ID: 5213053,
        cityName: "Mimoso de Goiás",
      },
      {
        city_ID: 5213087,
        cityName: "Minaçu",
      },
      {
        city_ID: 5213103,
        cityName: "Mineiros",
      },
      {
        city_ID: 5213400,
        cityName: "Moiporá",
      },
      {
        city_ID: 5213509,
        cityName: "Monte Alegre de Goiás",
      },
      {
        city_ID: 5213707,
        cityName: "Montes Claros de Goiás",
      },
      {
        city_ID: 5213756,
        cityName: "Montividiu",
      },
      {
        city_ID: 5213772,
        cityName: "Montividiu do Norte",
      },
      {
        city_ID: 5213806,
        cityName: "Morrinhos",
      },
      {
        city_ID: 5213855,
        cityName: "Morro Agudo de Goiás",
      },
      {
        city_ID: 5213905,
        cityName: "Mossâmedes",
      },
      {
        city_ID: 5214002,
        cityName: "Mozarlândia",
      },
      {
        city_ID: 5214051,
        cityName: "Mundo Novo",
      },
      {
        city_ID: 5214101,
        cityName: "Mutunópolis",
      },
      {
        city_ID: 5214408,
        cityName: "Nazário",
      },
      {
        city_ID: 5214507,
        cityName: "Nerópolis",
      },
      {
        city_ID: 5214606,
        cityName: "Niquelândia",
      },
      {
        city_ID: 5214705,
        cityName: "Nova América",
      },
      {
        city_ID: 5214804,
        cityName: "Nova Aurora",
      },
      {
        city_ID: 5214838,
        cityName: "Nova Crixás",
      },
      {
        city_ID: 5214861,
        cityName: "Nova Glória",
      },
      {
        city_ID: 5214879,
        cityName: "Nova Iguaçu de Goiás",
      },
      {
        city_ID: 5214903,
        cityName: "Nova Roma",
      },
      {
        city_ID: 5215009,
        cityName: "Nova Veneza",
      },
      {
        city_ID: 5215207,
        cityName: "Novo Brasil",
      },
      {
        city_ID: 5215231,
        cityName: "Novo Gama",
      },
      {
        city_ID: 5215256,
        cityName: "Novo Planalto",
      },
      {
        city_ID: 5215306,
        cityName: "Orizona",
      },
      {
        city_ID: 5215405,
        cityName: "Ouro Verde de Goiás",
      },
      {
        city_ID: 5215504,
        cityName: "Ouvidor",
      },
      {
        city_ID: 5215603,
        cityName: "Padre Bernardo",
      },
      {
        city_ID: 5215652,
        cityName: "Palestina de Goiás",
      },
      {
        city_ID: 5215702,
        cityName: "Palmeiras de Goiás",
      },
      {
        city_ID: 5215801,
        cityName: "Palmelo",
      },
      {
        city_ID: 5215900,
        cityName: "Palminópolis",
      },
      {
        city_ID: 5216007,
        cityName: "Panamá",
      },
      {
        city_ID: 5216304,
        cityName: "Paranaiguara",
      },
      {
        city_ID: 5216403,
        cityName: "Paraúna",
      },
      {
        city_ID: 5216452,
        cityName: "Perolândia",
      },
      {
        city_ID: 5216809,
        cityName: "Petrolina de Goiás",
      },
      {
        city_ID: 5216908,
        cityName: "Pilar de Goiás",
      },
      {
        city_ID: 5217104,
        cityName: "Piracanjuba",
      },
      {
        city_ID: 5217203,
        cityName: "Piranhas",
      },
      {
        city_ID: 5217302,
        cityName: "Pirenópolis",
      },
      {
        city_ID: 5217401,
        cityName: "Pires do Rio",
      },
      {
        city_ID: 5217609,
        cityName: "Planaltina",
      },
      {
        city_ID: 5217708,
        cityName: "Pontalina",
      },
      {
        city_ID: 5218003,
        cityName: "Porangatu",
      },
      {
        city_ID: 5218052,
        cityName: "Porteirão",
      },
      {
        city_ID: 5218102,
        cityName: "Portelândia",
      },
      {
        city_ID: 5218300,
        cityName: "Posse",
      },
      {
        city_ID: 5218391,
        cityName: "Professor Jamil",
      },
      {
        city_ID: 5218508,
        cityName: "Quirinópolis",
      },
      {
        city_ID: 5218607,
        cityName: "Rialma",
      },
      {
        city_ID: 5218706,
        cityName: "Rianápolis",
      },
      {
        city_ID: 5218789,
        cityName: "Rio Quente",
      },
      {
        city_ID: 5218805,
        cityName: "Rio Verde",
      },
      {
        city_ID: 5218904,
        cityName: "Rubiataba",
      },
      {
        city_ID: 5219001,
        cityName: "Sanclerlândia",
      },
      {
        city_ID: 5219100,
        cityName: "Santa Bárbara de Goiás",
      },
      {
        city_ID: 5219209,
        cityName: "Santa Cruz de Goiás",
      },
      {
        city_ID: 5219258,
        cityName: "Santa Fé de Goiás",
      },
      {
        city_ID: 5219308,
        cityName: "Santa Helena de Goiás",
      },
      {
        city_ID: 5219357,
        cityName: "Santa Isabel",
      },
      {
        city_ID: 5219407,
        cityName: "Santa Rita do Araguaia",
      },
      {
        city_ID: 5219456,
        cityName: "Santa Rita do Novo Destino",
      },
      {
        city_ID: 5219506,
        cityName: "Santa Rosa de Goiás",
      },
      {
        city_ID: 5219605,
        cityName: "Santa Tereza de Goiás",
      },
      {
        city_ID: 5219704,
        cityName: "Santa Terezinha de Goiás",
      },
      {
        city_ID: 5219712,
        cityName: "Santo Antônio da Barra",
      },
      {
        city_ID: 5219738,
        cityName: "Santo Antônio de Goiás",
      },
      {
        city_ID: 5219753,
        cityName: "Santo Antônio do Descoberto",
      },
      {
        city_ID: 5219803,
        cityName: "São Domingos",
      },
      {
        city_ID: 5219902,
        cityName: "São Francisco de Goiás",
      },
      {
        city_ID: 5220058,
        cityName: "São João da Paraúna",
      },
      {
        city_ID: 5220009,
        cityName: "São João d'Aliança",
      },
      {
        city_ID: 5220108,
        cityName: "São Luís de Montes Belos",
      },
      {
        city_ID: 5220157,
        cityName: "São Luiz do Norte",
      },
      {
        city_ID: 5220207,
        cityName: "São Miguel do Araguaia",
      },
      {
        city_ID: 5220264,
        cityName: "São Miguel do Passa Quatro",
      },
      {
        city_ID: 5220280,
        cityName: "São Patrício",
      },
      {
        city_ID: 5220405,
        cityName: "São Simão",
      },
      {
        city_ID: 5220454,
        cityName: "Senador Canedo",
      },
      {
        city_ID: 5220504,
        cityName: "Serranópolis",
      },
      {
        city_ID: 5220603,
        cityName: "Silvânia",
      },
      {
        city_ID: 5220686,
        cityName: "Simolândia",
      },
      {
        city_ID: 5220702,
        cityName: "Sítio d'Abadia",
      },
      {
        city_ID: 5221007,
        cityName: "Taquaral de Goiás",
      },
      {
        city_ID: 5221080,
        cityName: "Teresina de Goiás",
      },
      {
        city_ID: 5221197,
        cityName: "Terezópolis de Goiás",
      },
      {
        city_ID: 5221304,
        cityName: "Três Ranchos",
      },
      {
        city_ID: 5221403,
        cityName: "Trindade",
      },
      {
        city_ID: 5221452,
        cityName: "Trombas",
      },
      {
        city_ID: 5221502,
        cityName: "Turvânia",
      },
      {
        city_ID: 5221551,
        cityName: "Turvelândia",
      },
      {
        city_ID: 5221577,
        cityName: "Uirapuru",
      },
      {
        city_ID: 5221601,
        cityName: "Uruaçu",
      },
      {
        city_ID: 5221700,
        cityName: "Uruana",
      },
      {
        city_ID: 5221809,
        cityName: "Urutaí",
      },
      {
        city_ID: 5221858,
        cityName: "Valparaíso de Goiás",
      },
      {
        city_ID: 5221908,
        cityName: "Varjão",
      },
      {
        city_ID: 5222005,
        cityName: "Vianópolis",
      },
      {
        city_ID: 5222054,
        cityName: "Vicentinópolis",
      },
      {
        city_ID: 5222203,
        cityName: "Vila Boa",
      },
      {
        city_ID: 5222302,
        cityName: "Vila Propício",
      },
    ],
  },
  {
    id: 21,
    stateName: "Maranhão",
    abv: "MA",
    cities: [
      {
        city_ID: 2100055,
        cityName: "Açailândia",
      },
      {
        city_ID: 2100105,
        cityName: "Afonso Cunha",
      },
      {
        city_ID: 2100154,
        cityName: "Água Doce do Maranhão",
      },
      {
        city_ID: 2100204,
        cityName: "Alcântara",
      },
      {
        city_ID: 2100303,
        cityName: "Aldeias Altas",
      },
      {
        city_ID: 2100402,
        cityName: "Altamira do Maranhão",
      },
      {
        city_ID: 2100436,
        cityName: "Alto Alegre do Maranhão",
      },
      {
        city_ID: 2100477,
        cityName: "Alto Alegre do Pindaré",
      },
      {
        city_ID: 2100501,
        cityName: "Alto Parnaíba",
      },
      {
        city_ID: 2100550,
        cityName: "Amapá do Maranhão",
      },
      {
        city_ID: 2100600,
        cityName: "Amarante do Maranhão",
      },
      {
        city_ID: 2100709,
        cityName: "Anajatuba",
      },
      {
        city_ID: 2100808,
        cityName: "Anapurus",
      },
      {
        city_ID: 2100832,
        cityName: "Apicum-Açu",
      },
      {
        city_ID: 2100873,
        cityName: "Araguanã",
      },
      {
        city_ID: 2100907,
        cityName: "Araioses",
      },
      {
        city_ID: 2100956,
        cityName: "Arame",
      },
      {
        city_ID: 2101004,
        cityName: "Arari",
      },
      {
        city_ID: 2101103,
        cityName: "Axixá",
      },
      {
        city_ID: 2101202,
        cityName: "Bacabal",
      },
      {
        city_ID: 2101251,
        cityName: "Bacabeira",
      },
      {
        city_ID: 2101301,
        cityName: "Bacuri",
      },
      {
        city_ID: 2101350,
        cityName: "Bacurituba",
      },
      {
        city_ID: 2101400,
        cityName: "Balsas",
      },
      {
        city_ID: 2101509,
        cityName: "Barão de Grajaú",
      },
      {
        city_ID: 2101608,
        cityName: "Barra do Corda",
      },
      {
        city_ID: 2101707,
        cityName: "Barreirinhas",
      },
      {
        city_ID: 2101772,
        cityName: "Bela Vista do Maranhão",
      },
      {
        city_ID: 2101731,
        cityName: "Belágua",
      },
      {
        city_ID: 2101806,
        cityName: "Benedito Leite",
      },
      {
        city_ID: 2101905,
        cityName: "Bequimão",
      },
      {
        city_ID: 2101939,
        cityName: "Bernardo do Mearim",
      },
      {
        city_ID: 2101970,
        cityName: "Boa Vista do Gurupi",
      },
      {
        city_ID: 2102002,
        cityName: "Bom Jardim",
      },
      {
        city_ID: 2102036,
        cityName: "Bom Jesus das Selvas",
      },
      {
        city_ID: 2102077,
        cityName: "Bom Lugar",
      },
      {
        city_ID: 2102101,
        cityName: "Brejo",
      },
      {
        city_ID: 2102150,
        cityName: "Brejo de Areia",
      },
      {
        city_ID: 2102200,
        cityName: "Buriti",
      },
      {
        city_ID: 2102309,
        cityName: "Buriti Bravo",
      },
      {
        city_ID: 2102325,
        cityName: "Buriticupu",
      },
      {
        city_ID: 2102358,
        cityName: "Buritirana",
      },
      {
        city_ID: 2102374,
        cityName: "Cachoeira Grande",
      },
      {
        city_ID: 2102408,
        cityName: "Cajapió",
      },
      {
        city_ID: 2102507,
        cityName: "Cajari",
      },
      {
        city_ID: 2102556,
        cityName: "Campestre do Maranhão",
      },
      {
        city_ID: 2102606,
        cityName: "Cândido Mendes",
      },
      {
        city_ID: 2102705,
        cityName: "Cantanhede",
      },
      {
        city_ID: 2102754,
        cityName: "Capinzal do Norte",
      },
      {
        city_ID: 2102804,
        cityName: "Carolina",
      },
      {
        city_ID: 2102903,
        cityName: "Carutapera",
      },
      {
        city_ID: 2103000,
        cityName: "Caxias",
      },
      {
        city_ID: 2103109,
        cityName: "Cedral",
      },
      {
        city_ID: 2103125,
        cityName: "Central do Maranhão",
      },
      {
        city_ID: 2103158,
        cityName: "Centro do Guilherme",
      },
      {
        city_ID: 2103174,
        cityName: "Centro Novo do Maranhão",
      },
      {
        city_ID: 2103208,
        cityName: "Chapadinha",
      },
      {
        city_ID: 2103257,
        cityName: "Cidelândia",
      },
      {
        city_ID: 2103307,
        cityName: "Codó",
      },
      {
        city_ID: 2103406,
        cityName: "Coelho Neto",
      },
      {
        city_ID: 2103505,
        cityName: "Colinas",
      },
      {
        city_ID: 2103554,
        cityName: "Conceição do Lago-Açu",
      },
      {
        city_ID: 2103604,
        cityName: "Coroatá",
      },
      {
        city_ID: 2103703,
        cityName: "Cururupu",
      },
      {
        city_ID: 2103752,
        cityName: "Davinópolis",
      },
      {
        city_ID: 2103802,
        cityName: "Dom Pedro",
      },
      {
        city_ID: 2103901,
        cityName: "Duque Bacelar",
      },
      {
        city_ID: 2104008,
        cityName: "Esperantinópolis",
      },
      {
        city_ID: 2104057,
        cityName: "Estreito",
      },
      {
        city_ID: 2104073,
        cityName: "Feira Nova do Maranhão",
      },
      {
        city_ID: 2104081,
        cityName: "Fernando Falcão",
      },
      {
        city_ID: 2104099,
        cityName: "Formosa da Serra Negra",
      },
      {
        city_ID: 2104107,
        cityName: "Fortaleza dos Nogueiras",
      },
      {
        city_ID: 2104206,
        cityName: "Fortuna",
      },
      {
        city_ID: 2104305,
        cityName: "Godofredo Viana",
      },
      {
        city_ID: 2104404,
        cityName: "Gonçalves Dias",
      },
      {
        city_ID: 2104503,
        cityName: "Governador Archer",
      },
      {
        city_ID: 2104552,
        cityName: "Governador Edison Lobão",
      },
      {
        city_ID: 2104602,
        cityName: "Governador Eugênio Barros",
      },
      {
        city_ID: 2104628,
        cityName: "Governador Luiz Rocha",
      },
      {
        city_ID: 2104651,
        cityName: "Governador Newton Bello",
      },
      {
        city_ID: 2104677,
        cityName: "Governador Nunes Freire",
      },
      {
        city_ID: 2104701,
        cityName: "Graça Aranha",
      },
      {
        city_ID: 2104800,
        cityName: "Grajaú",
      },
      {
        city_ID: 2104909,
        cityName: "Guimarães",
      },
      {
        city_ID: 2105005,
        cityName: "Humberto de Campos",
      },
      {
        city_ID: 2105104,
        cityName: "Icatu",
      },
      {
        city_ID: 2105153,
        cityName: "Igarapé do Meio",
      },
      {
        city_ID: 2105203,
        cityName: "Igarapé Grande",
      },
      {
        city_ID: 2105302,
        cityName: "Imperatriz",
      },
      {
        city_ID: 2105351,
        cityName: "Itaipava do Grajaú",
      },
      {
        city_ID: 2105401,
        cityName: "Itapecuru Mirim",
      },
      {
        city_ID: 2105427,
        cityName: "Itinga do Maranhão",
      },
      {
        city_ID: 2105450,
        cityName: "Jatobá",
      },
      {
        city_ID: 2105476,
        cityName: "Jenipapo dos Vieiras",
      },
      {
        city_ID: 2105500,
        cityName: "João Lisboa",
      },
      {
        city_ID: 2105609,
        cityName: "Joselândia",
      },
      {
        city_ID: 2105658,
        cityName: "Junco do Maranhão",
      },
      {
        city_ID: 2105708,
        cityName: "Lago da Pedra",
      },
      {
        city_ID: 2105807,
        cityName: "Lago do Junco",
      },
      {
        city_ID: 2105948,
        cityName: "Lago dos Rodrigues",
      },
      {
        city_ID: 2105906,
        cityName: "Lago Verde",
      },
      {
        city_ID: 2105922,
        cityName: "Lagoa do Mato",
      },
      {
        city_ID: 2105963,
        cityName: "Lagoa Grande do Maranhão",
      },
      {
        city_ID: 2105989,
        cityName: "Lajeado Novo",
      },
      {
        city_ID: 2106003,
        cityName: "Lima Campos",
      },
      {
        city_ID: 2106102,
        cityName: "Loreto",
      },
      {
        city_ID: 2106201,
        cityName: "Luís Domingues",
      },
      {
        city_ID: 2106300,
        cityName: "Magalhães de Almeida",
      },
      {
        city_ID: 2106326,
        cityName: "Maracaçumé",
      },
      {
        city_ID: 2106359,
        cityName: "Marajá do Sena",
      },
      {
        city_ID: 2106375,
        cityName: "Maranhãozinho",
      },
      {
        city_ID: 2106409,
        cityName: "Mata Roma",
      },
      {
        city_ID: 2106508,
        cityName: "Matinha",
      },
      {
        city_ID: 2106607,
        cityName: "Matões",
      },
      {
        city_ID: 2106631,
        cityName: "Matões do Norte",
      },
      {
        city_ID: 2106672,
        cityName: "Milagres do Maranhão",
      },
      {
        city_ID: 2106706,
        cityName: "Mirador",
      },
      {
        city_ID: 2106755,
        cityName: "Miranda do Norte",
      },
      {
        city_ID: 2106805,
        cityName: "Mirinzal",
      },
      {
        city_ID: 2106904,
        cityName: "Monção",
      },
      {
        city_ID: 2107001,
        cityName: "Montes Altos",
      },
      {
        city_ID: 2107100,
        cityName: "Morros",
      },
      {
        city_ID: 2107209,
        cityName: "Nina Rodrigues",
      },
      {
        city_ID: 2107258,
        cityName: "Nova Colinas",
      },
      {
        city_ID: 2107308,
        cityName: "Nova Iorque",
      },
      {
        city_ID: 2107357,
        cityName: "Nova Olinda do Maranhão",
      },
      {
        city_ID: 2107407,
        cityName: "Olho d'Água das Cunhãs",
      },
      {
        city_ID: 2107456,
        cityName: "Olinda Nova do Maranhão",
      },
      {
        city_ID: 2107506,
        cityName: "Paço do Lumiar",
      },
      {
        city_ID: 2107605,
        cityName: "Palmeirândia",
      },
      {
        city_ID: 2107704,
        cityName: "Paraibano",
      },
      {
        city_ID: 2107803,
        cityName: "Parnarama",
      },
      {
        city_ID: 2107902,
        cityName: "Passagem Franca",
      },
      {
        city_ID: 2108009,
        cityName: "Pastos Bons",
      },
      {
        city_ID: 2108058,
        cityName: "Paulino Neves",
      },
      {
        city_ID: 2108108,
        cityName: "Paulo Ramos",
      },
      {
        city_ID: 2108207,
        cityName: "Pedreiras",
      },
      {
        city_ID: 2108256,
        cityName: "Pedro do Rosário",
      },
      {
        city_ID: 2108306,
        cityName: "Penalva",
      },
      {
        city_ID: 2108405,
        cityName: "Peri Mirim",
      },
      {
        city_ID: 2108454,
        cityName: "Peritoró",
      },
      {
        city_ID: 2108504,
        cityName: "Pindaré-Mirim",
      },
      {
        city_ID: 2108603,
        cityName: "Pinheiro",
      },
      {
        city_ID: 2108702,
        cityName: "Pio XII",
      },
      {
        city_ID: 2108801,
        cityName: "Pirapemas",
      },
      {
        city_ID: 2108900,
        cityName: "Poção de Pedras",
      },
      {
        city_ID: 2109007,
        cityName: "Porto Franco",
      },
      {
        city_ID: 2109056,
        cityName: "Porto Rico do Maranhão",
      },
      {
        city_ID: 2109106,
        cityName: "Presidente Dutra",
      },
      {
        city_ID: 2109205,
        cityName: "Presidente Juscelino",
      },
      {
        city_ID: 2109239,
        cityName: "Presidente Médici",
      },
      {
        city_ID: 2109270,
        cityName: "Presidente Sarney",
      },
      {
        city_ID: 2109304,
        cityName: "Presidente Vargas",
      },
      {
        city_ID: 2109403,
        cityName: "Primeira Cruz",
      },
      {
        city_ID: 2109452,
        cityName: "Raposa",
      },
      {
        city_ID: 2109502,
        cityName: "Riachão",
      },
      {
        city_ID: 2109551,
        cityName: "Ribamar Fiquene",
      },
      {
        city_ID: 2109601,
        cityName: "Rosário",
      },
      {
        city_ID: 2109700,
        cityName: "Sambaíba",
      },
      {
        city_ID: 2109759,
        cityName: "Santa Filomena do Maranhão",
      },
      {
        city_ID: 2109809,
        cityName: "Santa Helena",
      },
      {
        city_ID: 2109908,
        cityName: "Santa Inês",
      },
      {
        city_ID: 2110005,
        cityName: "Santa Luzia",
      },
      {
        city_ID: 2110039,
        cityName: "Santa Luzia do Paruá",
      },
      {
        city_ID: 2110104,
        cityName: "Santa Quitéria do Maranhão",
      },
      {
        city_ID: 2110203,
        cityName: "Santa Rita",
      },
      {
        city_ID: 2110237,
        cityName: "Santana do Maranhão",
      },
      {
        city_ID: 2110278,
        cityName: "Santo Amaro do Maranhão",
      },
      {
        city_ID: 2110302,
        cityName: "Santo Antônio dos Lopes",
      },
      {
        city_ID: 2110401,
        cityName: "São Benedito do Rio Preto",
      },
      {
        city_ID: 2110500,
        cityName: "São Bento",
      },
      {
        city_ID: 2110609,
        cityName: "São Bernardo",
      },
      {
        city_ID: 2110658,
        cityName: "São Domingos do Azeitão",
      },
      {
        city_ID: 2110708,
        cityName: "São Domingos do Maranhão",
      },
      {
        city_ID: 2110807,
        cityName: "São Félix de Balsas",
      },
      {
        city_ID: 2110856,
        cityName: "São Francisco do Brejão",
      },
      {
        city_ID: 2110906,
        cityName: "São Francisco do Maranhão",
      },
      {
        city_ID: 2111003,
        cityName: "São João Batista",
      },
      {
        city_ID: 2111029,
        cityName: "São João do Carú",
      },
      {
        city_ID: 2111052,
        cityName: "São João do Paraíso",
      },
      {
        city_ID: 2111078,
        cityName: "São João do Soter",
      },
      {
        city_ID: 2111102,
        cityName: "São João dos Patos",
      },
      {
        city_ID: 2111201,
        cityName: "São José de Ribamar",
      },
      {
        city_ID: 2111250,
        cityName: "São José dos Basílios",
      },
      {
        city_ID: 2111300,
        cityName: "São Luís",
      },
      {
        city_ID: 2111409,
        cityName: "São Luís Gonzaga do Maranhão",
      },
      {
        city_ID: 2111508,
        cityName: "São Mateus do Maranhão",
      },
      {
        city_ID: 2111532,
        cityName: "São Pedro da Água Branca",
      },
      {
        city_ID: 2111573,
        cityName: "São Pedro dos Crentes",
      },
      {
        city_ID: 2111607,
        cityName: "São Raimundo das Mangabeiras",
      },
      {
        city_ID: 2111631,
        cityName: "São Raimundo do Doca Bezerra",
      },
      {
        city_ID: 2111672,
        cityName: "São Roberto",
      },
      {
        city_ID: 2111706,
        cityName: "São Vicente Ferrer",
      },
      {
        city_ID: 2111722,
        cityName: "Satubinha",
      },
      {
        city_ID: 2111748,
        cityName: "Senador Alexandre Costa",
      },
      {
        city_ID: 2111763,
        cityName: "Senador La Rocque",
      },
      {
        city_ID: 2111789,
        cityName: "Serrano do Maranhão",
      },
      {
        city_ID: 2111805,
        cityName: "Sítio Novo",
      },
      {
        city_ID: 2111904,
        cityName: "Sucupira do Norte",
      },
      {
        city_ID: 2111953,
        cityName: "Sucupira do Riachão",
      },
      {
        city_ID: 2112001,
        cityName: "Tasso Fragoso",
      },
      {
        city_ID: 2112100,
        cityName: "Timbiras",
      },
      {
        city_ID: 2112209,
        cityName: "Timon",
      },
      {
        city_ID: 2112233,
        cityName: "Trizidela do Vale",
      },
      {
        city_ID: 2112274,
        cityName: "Tufilândia",
      },
      {
        city_ID: 2112308,
        cityName: "Tuntum",
      },
      {
        city_ID: 2112407,
        cityName: "Turiaçu",
      },
      {
        city_ID: 2112456,
        cityName: "Turilândia",
      },
      {
        city_ID: 2112506,
        cityName: "Tutóia",
      },
      {
        city_ID: 2112605,
        cityName: "Urbano Santos",
      },
      {
        city_ID: 2112704,
        cityName: "Vargem Grande",
      },
      {
        city_ID: 2112803,
        cityName: "Viana",
      },
      {
        city_ID: 2112852,
        cityName: "Vila Nova dos Martírios",
      },
      {
        city_ID: 2112902,
        cityName: "Vitória do Mearim",
      },
      {
        city_ID: 2113009,
        cityName: "Vitorino Freire",
      },
      {
        city_ID: 2114007,
        cityName: "Zé Doca",
      },
    ],
  },
  {
    id: 51,
    stateName: "Mato Grosso",
    abv: "MT",
    cities: [
      {
        city_ID: 5100102,
        cityName: "Acorizal",
      },
      {
        city_ID: 5100201,
        cityName: "Água Boa",
      },
      {
        city_ID: 5100250,
        cityName: "Alta Floresta",
      },
      {
        city_ID: 5100300,
        cityName: "Alto Araguaia",
      },
      {
        city_ID: 5100359,
        cityName: "Alto Boa Vista",
      },
      {
        city_ID: 5100409,
        cityName: "Alto Garças",
      },
      {
        city_ID: 5100508,
        cityName: "Alto Paraguai",
      },
      {
        city_ID: 5100607,
        cityName: "Alto Taquari",
      },
      {
        city_ID: 5100805,
        cityName: "Apiacás",
      },
      {
        city_ID: 5101001,
        cityName: "Araguaiana",
      },
      {
        city_ID: 5101209,
        cityName: "Araguainha",
      },
      {
        city_ID: 5101258,
        cityName: "Araputanga",
      },
      {
        city_ID: 5101308,
        cityName: "Arenápolis",
      },
      {
        city_ID: 5101407,
        cityName: "Aripuanã",
      },
      {
        city_ID: 5101605,
        cityName: "Barão de Melgaço",
      },
      {
        city_ID: 5101704,
        cityName: "Barra do Bugres",
      },
      {
        city_ID: 5101803,
        cityName: "Barra do Garças",
      },
      {
        city_ID: 5101852,
        cityName: "Bom Jesus do Araguaia",
      },
      {
        city_ID: 5101902,
        cityName: "Brasnorte",
      },
      {
        city_ID: 5102504,
        cityName: "Cáceres",
      },
      {
        city_ID: 5102603,
        cityName: "Campinápolis",
      },
      {
        city_ID: 5102637,
        cityName: "Campo Novo do Parecis",
      },
      {
        city_ID: 5102678,
        cityName: "Campo Verde",
      },
      {
        city_ID: 5102686,
        cityName: "Campos de Júlio",
      },
      {
        city_ID: 5102694,
        cityName: "Canabrava do Norte",
      },
      {
        city_ID: 5102702,
        cityName: "Canarana",
      },
      {
        city_ID: 5102793,
        cityName: "Carlinda",
      },
      {
        city_ID: 5102850,
        cityName: "Castanheira",
      },
      {
        city_ID: 5103007,
        cityName: "Chapada dos Guimarães",
      },
      {
        city_ID: 5103056,
        cityName: "Cláudia",
      },
      {
        city_ID: 5103106,
        cityName: "Cocalinho",
      },
      {
        city_ID: 5103205,
        cityName: "Colíder",
      },
      {
        city_ID: 5103254,
        cityName: "Colniza",
      },
      {
        city_ID: 5103304,
        cityName: "Comodoro",
      },
      {
        city_ID: 5103353,
        cityName: "Confresa",
      },
      {
        city_ID: 5103361,
        cityName: "Conquista D'Oeste",
      },
      {
        city_ID: 5103379,
        cityName: "Cotriguaçu",
      },
      {
        city_ID: 5103403,
        cityName: "Cuiabá",
      },
      {
        city_ID: 5103437,
        cityName: "Curvelândia",
      },
      {
        city_ID: 5103452,
        cityName: "Denise",
      },
      {
        city_ID: 5103502,
        cityName: "Diamantino",
      },
      {
        city_ID: 5103601,
        cityName: "Dom Aquino",
      },
      {
        city_ID: 5103700,
        cityName: "Feliz Natal",
      },
      {
        city_ID: 5103809,
        cityName: "Figueirópolis D'Oeste",
      },
      {
        city_ID: 5103858,
        cityName: "Gaúcha do Norte",
      },
      {
        city_ID: 5103908,
        cityName: "General Carneiro",
      },
      {
        city_ID: 5103957,
        cityName: "Glória D'Oeste",
      },
      {
        city_ID: 5104104,
        cityName: "Guarantã do Norte",
      },
      {
        city_ID: 5104203,
        cityName: "Guiratinga",
      },
      {
        city_ID: 5104500,
        cityName: "Indiavaí",
      },
      {
        city_ID: 5104526,
        cityName: "Ipiranga do Norte",
      },
      {
        city_ID: 5104542,
        cityName: "Itanhangá",
      },
      {
        city_ID: 5104559,
        cityName: "Itaúba",
      },
      {
        city_ID: 5104609,
        cityName: "Itiquira",
      },
      {
        city_ID: 5104807,
        cityName: "Jaciara",
      },
      {
        city_ID: 5104906,
        cityName: "Jangada",
      },
      {
        city_ID: 5105002,
        cityName: "Jauru",
      },
      {
        city_ID: 5105101,
        cityName: "Juara",
      },
      {
        city_ID: 5105150,
        cityName: "Juína",
      },
      {
        city_ID: 5105176,
        cityName: "Juruena",
      },
      {
        city_ID: 5105200,
        cityName: "Juscimeira",
      },
      {
        city_ID: 5105234,
        cityName: "Lambari D'Oeste",
      },
      {
        city_ID: 5105259,
        cityName: "Lucas do Rio Verde",
      },
      {
        city_ID: 5105309,
        cityName: "Luciara",
      },
      {
        city_ID: 5105580,
        cityName: "Marcelândia",
      },
      {
        city_ID: 5105606,
        cityName: "Matupá",
      },
      {
        city_ID: 5105622,
        cityName: "Mirassol d'Oeste",
      },
      {
        city_ID: 5105903,
        cityName: "Nobres",
      },
      {
        city_ID: 5106000,
        cityName: "Nortelândia",
      },
      {
        city_ID: 5106109,
        cityName: "Nossa Senhora do Livramento",
      },
      {
        city_ID: 5106158,
        cityName: "Nova Bandeirantes",
      },
      {
        city_ID: 5106208,
        cityName: "Nova Brasilândia",
      },
      {
        city_ID: 5106216,
        cityName: "Nova Canaã do Norte",
      },
      {
        city_ID: 5108808,
        cityName: "Nova Guarita",
      },
      {
        city_ID: 5106182,
        cityName: "Nova Lacerda",
      },
      {
        city_ID: 5108857,
        cityName: "Nova Marilândia",
      },
      {
        city_ID: 5108907,
        cityName: "Nova Maringá",
      },
      {
        city_ID: 5108956,
        cityName: "Nova Monte Verde",
      },
      {
        city_ID: 5106224,
        cityName: "Nova Mutum",
      },
      {
        city_ID: 5106174,
        cityName: "Nova Nazaré",
      },
      {
        city_ID: 5106232,
        cityName: "Nova Olímpia",
      },
      {
        city_ID: 5106190,
        cityName: "Nova Santa Helena",
      },
      {
        city_ID: 5106240,
        cityName: "Nova Ubiratã",
      },
      {
        city_ID: 5106257,
        cityName: "Nova Xavantina",
      },
      {
        city_ID: 5106273,
        cityName: "Novo Horizonte do Norte",
      },
      {
        city_ID: 5106265,
        cityName: "Novo Mundo",
      },
      {
        city_ID: 5106315,
        cityName: "Novo Santo Antônio",
      },
      {
        city_ID: 5106281,
        cityName: "Novo São Joaquim",
      },
      {
        city_ID: 5106299,
        cityName: "Paranaíta",
      },
      {
        city_ID: 5106307,
        cityName: "Paranatinga",
      },
      {
        city_ID: 5106372,
        cityName: "Pedra Preta",
      },
      {
        city_ID: 5106422,
        cityName: "Peixoto de Azevedo",
      },
      {
        city_ID: 5106455,
        cityName: "Planalto da Serra",
      },
      {
        city_ID: 5106505,
        cityName: "Poconé",
      },
      {
        city_ID: 5106653,
        cityName: "Pontal do Araguaia",
      },
      {
        city_ID: 5106703,
        cityName: "Ponte Branca",
      },
      {
        city_ID: 5106752,
        cityName: "Pontes e Lacerda",
      },
      {
        city_ID: 5106778,
        cityName: "Porto Alegre do Norte",
      },
      {
        city_ID: 5106802,
        cityName: "Porto dos Gaúchos",
      },
      {
        city_ID: 5106828,
        cityName: "Porto Esperidião",
      },
      {
        city_ID: 5106851,
        cityName: "Porto Estrela",
      },
      {
        city_ID: 5107008,
        cityName: "Poxoréu",
      },
      {
        city_ID: 5107040,
        cityName: "Primavera do Leste",
      },
      {
        city_ID: 5107065,
        cityName: "Querência",
      },
      {
        city_ID: 5107156,
        cityName: "Reserva do Cabaçal",
      },
      {
        city_ID: 5107180,
        cityName: "Ribeirão Cascalheira",
      },
      {
        city_ID: 5107198,
        cityName: "Ribeirãozinho",
      },
      {
        city_ID: 5107206,
        cityName: "Rio Branco",
      },
      {
        city_ID: 5107578,
        cityName: "Rondolândia",
      },
      {
        city_ID: 5107602,
        cityName: "Rondonópolis",
      },
      {
        city_ID: 5107701,
        cityName: "Rosário Oeste",
      },
      {
        city_ID: 5107750,
        cityName: "Salto do Céu",
      },
      {
        city_ID: 5107248,
        cityName: "Santa Carmem",
      },
      {
        city_ID: 5107743,
        cityName: "Santa Cruz do Xingu",
      },
      {
        city_ID: 5107768,
        cityName: "Santa Rita do Trivelato",
      },
      {
        city_ID: 5107776,
        cityName: "Santa Terezinha",
      },
      {
        city_ID: 5107263,
        cityName: "Santo Afonso",
      },
      {
        city_ID: 5107792,
        cityName: "Santo Antônio do Leste",
      },
      {
        city_ID: 5107800,
        cityName: "Santo Antônio do Leverger",
      },
      {
        city_ID: 5107859,
        cityName: "São Félix do Araguaia",
      },
      {
        city_ID: 5107297,
        cityName: "São José do Povo",
      },
      {
        city_ID: 5107305,
        cityName: "São José do Rio Claro",
      },
      {
        city_ID: 5107354,
        cityName: "São José do Xingu",
      },
      {
        city_ID: 5107107,
        cityName: "São José dos Quatro Marcos",
      },
      {
        city_ID: 5107404,
        cityName: "São Pedro da Cipa",
      },
      {
        city_ID: 5107875,
        cityName: "Sapezal",
      },
      {
        city_ID: 5107883,
        cityName: "Serra Nova Dourada",
      },
      {
        city_ID: 5107909,
        cityName: "Sinop",
      },
      {
        city_ID: 5107925,
        cityName: "Sorriso",
      },
      {
        city_ID: 5107941,
        cityName: "Tabaporã",
      },
      {
        city_ID: 5107958,
        cityName: "Tangará da Serra",
      },
      {
        city_ID: 5108006,
        cityName: "Tapurah",
      },
      {
        city_ID: 5108055,
        cityName: "Terra Nova do Norte",
      },
      {
        city_ID: 5108105,
        cityName: "Tesouro",
      },
      {
        city_ID: 5108204,
        cityName: "Torixoréu",
      },
      {
        city_ID: 5108303,
        cityName: "União do Sul",
      },
      {
        city_ID: 5108352,
        cityName: "Vale de São Domingos",
      },
      {
        city_ID: 5108402,
        cityName: "Várzea Grande",
      },
      {
        city_ID: 5108501,
        cityName: "Vera",
      },
      {
        city_ID: 5105507,
        cityName: "Vila Bela da Santíssima Trindade",
      },
      {
        city_ID: 5108600,
        cityName: "Vila Rica",
      },
    ],
  },
  {
    id: 50,
    stateName: "Mato Grosso do Sul",
    abv: "MS",
    cities: [
      {
        city_ID: 5000203,
        cityName: "Água Clara",
      },
      {
        city_ID: 5000252,
        cityName: "Alcinópolis",
      },
      {
        city_ID: 5000609,
        cityName: "Amambai",
      },
      {
        city_ID: 5000708,
        cityName: "Anastácio",
      },
      {
        city_ID: 5000807,
        cityName: "Anaurilândia",
      },
      {
        city_ID: 5000856,
        cityName: "Angélica",
      },
      {
        city_ID: 5000906,
        cityName: "Antônio João",
      },
      {
        city_ID: 5001003,
        cityName: "Aparecida do Taboado",
      },
      {
        city_ID: 5001102,
        cityName: "Aquidauana",
      },
      {
        city_ID: 5001243,
        cityName: "Aral Moreira",
      },
      {
        city_ID: 5001508,
        cityName: "Bandeirantes",
      },
      {
        city_ID: 5001904,
        cityName: "Bataguassu",
      },
      {
        city_ID: 5002001,
        cityName: "Batayporã",
      },
      {
        city_ID: 5002100,
        cityName: "Bela Vista",
      },
      {
        city_ID: 5002159,
        cityName: "Bodoquena",
      },
      {
        city_ID: 5002209,
        cityName: "Bonito",
      },
      {
        city_ID: 5002308,
        cityName: "Brasilândia",
      },
      {
        city_ID: 5002407,
        cityName: "Caarapó",
      },
      {
        city_ID: 5002605,
        cityName: "Camapuã",
      },
      {
        city_ID: 5002704,
        cityName: "Campo Grande",
      },
      {
        city_ID: 5002803,
        cityName: "Caracol",
      },
      {
        city_ID: 5002902,
        cityName: "Cassilândia",
      },
      {
        city_ID: 5002951,
        cityName: "Chapadão do Sul",
      },
      {
        city_ID: 5003108,
        cityName: "Corguinho",
      },
      {
        city_ID: 5003157,
        cityName: "Coronel Sapucaia",
      },
      {
        city_ID: 5003207,
        cityName: "Corumbá",
      },
      {
        city_ID: 5003256,
        cityName: "Costa Rica",
      },
      {
        city_ID: 5003306,
        cityName: "Coxim",
      },
      {
        city_ID: 5003454,
        cityName: "Deodápolis",
      },
      {
        city_ID: 5003488,
        cityName: "Dois Irmãos do Buriti",
      },
      {
        city_ID: 5003504,
        cityName: "Douradina",
      },
      {
        city_ID: 5003702,
        cityName: "Dourados",
      },
      {
        city_ID: 5003751,
        cityName: "Eldorado",
      },
      {
        city_ID: 5003801,
        cityName: "Fátima do Sul",
      },
      {
        city_ID: 5003900,
        cityName: "Figueirão",
      },
      {
        city_ID: 5004007,
        cityName: "Glória de Dourados",
      },
      {
        city_ID: 5004106,
        cityName: "Guia Lopes da Laguna",
      },
      {
        city_ID: 5004304,
        cityName: "Iguatemi",
      },
      {
        city_ID: 5004403,
        cityName: "Inocência",
      },
      {
        city_ID: 5004502,
        cityName: "Itaporã",
      },
      {
        city_ID: 5004601,
        cityName: "Itaquiraí",
      },
      {
        city_ID: 5004700,
        cityName: "Ivinhema",
      },
      {
        city_ID: 5004809,
        cityName: "Japorã",
      },
      {
        city_ID: 5004908,
        cityName: "Jaraguari",
      },
      {
        city_ID: 5005004,
        cityName: "Jardim",
      },
      {
        city_ID: 5005103,
        cityName: "Jateí",
      },
      {
        city_ID: 5005152,
        cityName: "Juti",
      },
      {
        city_ID: 5005202,
        cityName: "Ladário",
      },
      {
        city_ID: 5005251,
        cityName: "Laguna Carapã",
      },
      {
        city_ID: 5005400,
        cityName: "Maracaju",
      },
      {
        city_ID: 5005608,
        cityName: "Miranda",
      },
      {
        city_ID: 5005681,
        cityName: "Mundo Novo",
      },
      {
        city_ID: 5005707,
        cityName: "Naviraí",
      },
      {
        city_ID: 5005806,
        cityName: "Nioaque",
      },
      {
        city_ID: 5006002,
        cityName: "Nova Alvorada do Sul",
      },
      {
        city_ID: 5006200,
        cityName: "Nova Andradina",
      },
      {
        city_ID: 5006259,
        cityName: "Novo Horizonte do Sul",
      },
      {
        city_ID: 5006275,
        cityName: "Paraíso das Águas",
      },
      {
        city_ID: 5006309,
        cityName: "Paranaíba",
      },
      {
        city_ID: 5006358,
        cityName: "Paranhos",
      },
      {
        city_ID: 5006408,
        cityName: "Pedro Gomes",
      },
      {
        city_ID: 5006606,
        cityName: "Ponta Porã",
      },
      {
        city_ID: 5006903,
        cityName: "Porto Murtinho",
      },
      {
        city_ID: 5007109,
        cityName: "Ribas do Rio Pardo",
      },
      {
        city_ID: 5007208,
        cityName: "Rio Brilhante",
      },
      {
        city_ID: 5007307,
        cityName: "Rio Negro",
      },
      {
        city_ID: 5007406,
        cityName: "Rio Verde de Mato Grosso",
      },
      {
        city_ID: 5007505,
        cityName: "Rochedo",
      },
      {
        city_ID: 5007554,
        cityName: "Santa Rita do Pardo",
      },
      {
        city_ID: 5007695,
        cityName: "São Gabriel do Oeste",
      },
      {
        city_ID: 5007802,
        cityName: "Selvíria",
      },
      {
        city_ID: 5007703,
        cityName: "Sete Quedas",
      },
      {
        city_ID: 5007901,
        cityName: "Sidrolândia",
      },
      {
        city_ID: 5007935,
        cityName: "Sonora",
      },
      {
        city_ID: 5007950,
        cityName: "Tacuru",
      },
      {
        city_ID: 5007976,
        cityName: "Taquarussu",
      },
      {
        city_ID: 5008008,
        cityName: "Terenos",
      },
      {
        city_ID: 5008305,
        cityName: "Três Lagoas",
      },
      {
        city_ID: 5008404,
        cityName: "Vicentina",
      },
    ],
  },
  {
    id: 31,
    stateName: "Minas Gerais",
    abv: "MG",
    cities: [
      {
        city_ID: 3100104,
        cityName: "Abadia dos Dourados",
      },
      {
        city_ID: 3100203,
        cityName: "Abaeté",
      },
      {
        city_ID: 3100302,
        cityName: "Abre Campo",
      },
      {
        city_ID: 3100401,
        cityName: "Acaiaca",
      },
      {
        city_ID: 3100500,
        cityName: "Açucena",
      },
      {
        city_ID: 3100609,
        cityName: "Água Boa",
      },
      {
        city_ID: 3100708,
        cityName: "Água Comprida",
      },
      {
        city_ID: 3100807,
        cityName: "Aguanil",
      },
      {
        city_ID: 3100906,
        cityName: "Águas Formosas",
      },
      {
        city_ID: 3101003,
        cityName: "Águas Vermelhas",
      },
      {
        city_ID: 3101102,
        cityName: "Aimorés",
      },
      {
        city_ID: 3101201,
        cityName: "Aiuruoca",
      },
      {
        city_ID: 3101300,
        cityName: "Alagoa",
      },
      {
        city_ID: 3101409,
        cityName: "Albertina",
      },
      {
        city_ID: 3101508,
        cityName: "Além Paraíba",
      },
      {
        city_ID: 3101607,
        cityName: "Alfenas",
      },
      {
        city_ID: 3101631,
        cityName: "Alfredo Vasconcelos",
      },
      {
        city_ID: 3101706,
        cityName: "Almenara",
      },
      {
        city_ID: 3101805,
        cityName: "Alpercata",
      },
      {
        city_ID: 3101904,
        cityName: "Alpinópolis",
      },
      {
        city_ID: 3102001,
        cityName: "Alterosa",
      },
      {
        city_ID: 3102050,
        cityName: "Alto Caparaó",
      },
      {
        city_ID: 3153509,
        cityName: "Alto Jequitibá",
      },
      {
        city_ID: 3102100,
        cityName: "Alto Rio Doce",
      },
      {
        city_ID: 3102209,
        cityName: "Alvarenga",
      },
      {
        city_ID: 3102308,
        cityName: "Alvinópolis",
      },
      {
        city_ID: 3102407,
        cityName: "Alvorada de Minas",
      },
      {
        city_ID: 3102506,
        cityName: "Amparo do Serra",
      },
      {
        city_ID: 3102605,
        cityName: "Andradas",
      },
      {
        city_ID: 3102803,
        cityName: "Andrelândia",
      },
      {
        city_ID: 3102852,
        cityName: "Angelândia",
      },
      {
        city_ID: 3102902,
        cityName: "Antônio Carlos",
      },
      {
        city_ID: 3103009,
        cityName: "Antônio Dias",
      },
      {
        city_ID: 3103108,
        cityName: "Antônio Prado de Minas",
      },
      {
        city_ID: 3103207,
        cityName: "Araçaí",
      },
      {
        city_ID: 3103306,
        cityName: "Aracitaba",
      },
      {
        city_ID: 3103405,
        cityName: "Araçuaí",
      },
      {
        city_ID: 3103504,
        cityName: "Araguari",
      },
      {
        city_ID: 3103603,
        cityName: "Arantina",
      },
      {
        city_ID: 3103702,
        cityName: "Araponga",
      },
      {
        city_ID: 3103751,
        cityName: "Araporã",
      },
      {
        city_ID: 3103801,
        cityName: "Arapuá",
      },
      {
        city_ID: 3103900,
        cityName: "Araújos",
      },
      {
        city_ID: 3104007,
        cityName: "Araxá",
      },
      {
        city_ID: 3104106,
        cityName: "Arceburgo",
      },
      {
        city_ID: 3104205,
        cityName: "Arcos",
      },
      {
        city_ID: 3104304,
        cityName: "Areado",
      },
      {
        city_ID: 3104403,
        cityName: "Argirita",
      },
      {
        city_ID: 3104452,
        cityName: "Aricanduva",
      },
      {
        city_ID: 3104502,
        cityName: "Arinos",
      },
      {
        city_ID: 3104601,
        cityName: "Astolfo Dutra",
      },
      {
        city_ID: 3104700,
        cityName: "Ataléia",
      },
      {
        city_ID: 3104809,
        cityName: "Augusto de Lima",
      },
      {
        city_ID: 3104908,
        cityName: "Baependi",
      },
      {
        city_ID: 3105004,
        cityName: "Baldim",
      },
      {
        city_ID: 3105103,
        cityName: "Bambuí",
      },
      {
        city_ID: 3105202,
        cityName: "Bandeira",
      },
      {
        city_ID: 3105301,
        cityName: "Bandeira do Sul",
      },
      {
        city_ID: 3105400,
        cityName: "Barão de Cocais",
      },
      {
        city_ID: 3105509,
        cityName: "Barão de Monte Alto",
      },
      {
        city_ID: 3105608,
        cityName: "Barbacena",
      },
      {
        city_ID: 3105707,
        cityName: "Barra Longa",
      },
      {
        city_ID: 3105905,
        cityName: "Barroso",
      },
      {
        city_ID: 3106002,
        cityName: "Bela Vista de Minas",
      },
      {
        city_ID: 3106101,
        cityName: "Belmiro Braga",
      },
      {
        city_ID: 3106200,
        cityName: "Belo Horizonte",
      },
      {
        city_ID: 3106309,
        cityName: "Belo Oriente",
      },
      {
        city_ID: 3106408,
        cityName: "Belo Vale",
      },
      {
        city_ID: 3106507,
        cityName: "Berilo",
      },
      {
        city_ID: 3106655,
        cityName: "Berizal",
      },
      {
        city_ID: 3106606,
        cityName: "Bertópolis",
      },
      {
        city_ID: 3106705,
        cityName: "Betim",
      },
      {
        city_ID: 3106804,
        cityName: "Bias Fortes",
      },
      {
        city_ID: 3106903,
        cityName: "Bicas",
      },
      {
        city_ID: 3107000,
        cityName: "Biquinhas",
      },
      {
        city_ID: 3107109,
        cityName: "Boa Esperança",
      },
      {
        city_ID: 3107208,
        cityName: "Bocaina de Minas",
      },
      {
        city_ID: 3107307,
        cityName: "Bocaiúva",
      },
      {
        city_ID: 3107406,
        cityName: "Bom Despacho",
      },
      {
        city_ID: 3107505,
        cityName: "Bom Jardim de Minas",
      },
      {
        city_ID: 3107604,
        cityName: "Bom Jesus da Penha",
      },
      {
        city_ID: 3107703,
        cityName: "Bom Jesus do Amparo",
      },
      {
        city_ID: 3107802,
        cityName: "Bom Jesus do Galho",
      },
      {
        city_ID: 3107901,
        cityName: "Bom Repouso",
      },
      {
        city_ID: 3108008,
        cityName: "Bom Sucesso",
      },
      {
        city_ID: 3108107,
        cityName: "Bonfim",
      },
      {
        city_ID: 3108206,
        cityName: "Bonfinópolis de Minas",
      },
      {
        city_ID: 3108255,
        cityName: "Bonito de Minas",
      },
      {
        city_ID: 3108305,
        cityName: "Borda da Mata",
      },
      {
        city_ID: 3108404,
        cityName: "Botelhos",
      },
      {
        city_ID: 3108503,
        cityName: "Botumirim",
      },
      {
        city_ID: 3108701,
        cityName: "Brás Pires",
      },
      {
        city_ID: 3108552,
        cityName: "Brasilândia de Minas",
      },
      {
        city_ID: 3108602,
        cityName: "Brasília de Minas",
      },
      {
        city_ID: 3108800,
        cityName: "Braúnas",
      },
      {
        city_ID: 3108909,
        cityName: "Brazópolis",
      },
      {
        city_ID: 3109006,
        cityName: "Brumadinho",
      },
      {
        city_ID: 3109105,
        cityName: "Bueno Brandão",
      },
      {
        city_ID: 3109204,
        cityName: "Buenópolis",
      },
      {
        city_ID: 3109253,
        cityName: "Bugre",
      },
      {
        city_ID: 3109303,
        cityName: "Buritis",
      },
      {
        city_ID: 3109402,
        cityName: "Buritizeiro",
      },
      {
        city_ID: 3109451,
        cityName: "Cabeceira Grande",
      },
      {
        city_ID: 3109501,
        cityName: "Cabo Verde",
      },
      {
        city_ID: 3109600,
        cityName: "Cachoeira da Prata",
      },
      {
        city_ID: 3109709,
        cityName: "Cachoeira de Minas",
      },
      {
        city_ID: 3102704,
        cityName: "Cachoeira de Pajeú",
      },
      {
        city_ID: 3109808,
        cityName: "Cachoeira Dourada",
      },
      {
        city_ID: 3109907,
        cityName: "Caetanópolis",
      },
      {
        city_ID: 3110004,
        cityName: "Caeté",
      },
      {
        city_ID: 3110103,
        cityName: "Caiana",
      },
      {
        city_ID: 3110202,
        cityName: "Cajuri",
      },
      {
        city_ID: 3110301,
        cityName: "Caldas",
      },
      {
        city_ID: 3110400,
        cityName: "Camacho",
      },
      {
        city_ID: 3110509,
        cityName: "Camanducaia",
      },
      {
        city_ID: 3110608,
        cityName: "Cambuí",
      },
      {
        city_ID: 3110707,
        cityName: "Cambuquira",
      },
      {
        city_ID: 3110806,
        cityName: "Campanário",
      },
      {
        city_ID: 3110905,
        cityName: "Campanha",
      },
      {
        city_ID: 3111002,
        cityName: "Campestre",
      },
      {
        city_ID: 3111101,
        cityName: "Campina Verde",
      },
      {
        city_ID: 3111150,
        cityName: "Campo Azul",
      },
      {
        city_ID: 3111200,
        cityName: "Campo Belo",
      },
      {
        city_ID: 3111309,
        cityName: "Campo do Meio",
      },
      {
        city_ID: 3111408,
        cityName: "Campo Florido",
      },
      {
        city_ID: 3111507,
        cityName: "Campos Altos",
      },
      {
        city_ID: 3111606,
        cityName: "Campos Gerais",
      },
      {
        city_ID: 3111903,
        cityName: "Cana Verde",
      },
      {
        city_ID: 3111705,
        cityName: "Canaã",
      },
      {
        city_ID: 3111804,
        cityName: "Canápolis",
      },
      {
        city_ID: 3112000,
        cityName: "Candeias",
      },
      {
        city_ID: 3112059,
        cityName: "Cantagalo",
      },
      {
        city_ID: 3112109,
        cityName: "Caparaó",
      },
      {
        city_ID: 3112208,
        cityName: "Capela Nova",
      },
      {
        city_ID: 3112307,
        cityName: "Capelinha",
      },
      {
        city_ID: 3112406,
        cityName: "Capetinga",
      },
      {
        city_ID: 3112505,
        cityName: "Capim Branco",
      },
      {
        city_ID: 3112604,
        cityName: "Capinópolis",
      },
      {
        city_ID: 3112653,
        cityName: "Capitão Andrade",
      },
      {
        city_ID: 3112703,
        cityName: "Capitão Enéas",
      },
      {
        city_ID: 3112802,
        cityName: "Capitólio",
      },
      {
        city_ID: 3112901,
        cityName: "Caputira",
      },
      {
        city_ID: 3113008,
        cityName: "Caraí",
      },
      {
        city_ID: 3113107,
        cityName: "Caranaíba",
      },
      {
        city_ID: 3113206,
        cityName: "Carandaí",
      },
      {
        city_ID: 3113305,
        cityName: "Carangola",
      },
      {
        city_ID: 3113404,
        cityName: "Caratinga",
      },
      {
        city_ID: 3113503,
        cityName: "Carbonita",
      },
      {
        city_ID: 3113602,
        cityName: "Careaçu",
      },
      {
        city_ID: 3113701,
        cityName: "Carlos Chagas",
      },
      {
        city_ID: 3113800,
        cityName: "Carmésia",
      },
      {
        city_ID: 3113909,
        cityName: "Carmo da Cachoeira",
      },
      {
        city_ID: 3114006,
        cityName: "Carmo da Mata",
      },
      {
        city_ID: 3114105,
        cityName: "Carmo de Minas",
      },
      {
        city_ID: 3114204,
        cityName: "Carmo do Cajuru",
      },
      {
        city_ID: 3114303,
        cityName: "Carmo do Paranaíba",
      },
      {
        city_ID: 3114402,
        cityName: "Carmo do Rio Claro",
      },
      {
        city_ID: 3114501,
        cityName: "Carmópolis de Minas",
      },
      {
        city_ID: 3114550,
        cityName: "Carneirinho",
      },
      {
        city_ID: 3114600,
        cityName: "Carrancas",
      },
      {
        city_ID: 3114709,
        cityName: "Carvalhópolis",
      },
      {
        city_ID: 3114808,
        cityName: "Carvalhos",
      },
      {
        city_ID: 3114907,
        cityName: "Casa Grande",
      },
      {
        city_ID: 3115003,
        cityName: "Cascalho Rico",
      },
      {
        city_ID: 3115102,
        cityName: "Cássia",
      },
      {
        city_ID: 3115300,
        cityName: "Cataguases",
      },
      {
        city_ID: 3115359,
        cityName: "Catas Altas",
      },
      {
        city_ID: 3115409,
        cityName: "Catas Altas da Noruega",
      },
      {
        city_ID: 3115458,
        cityName: "Catuji",
      },
      {
        city_ID: 3115474,
        cityName: "Catuti",
      },
      {
        city_ID: 3115508,
        cityName: "Caxambu",
      },
      {
        city_ID: 3115607,
        cityName: "Cedro do Abaeté",
      },
      {
        city_ID: 3115706,
        cityName: "Central de Minas",
      },
      {
        city_ID: 3115805,
        cityName: "Centralina",
      },
      {
        city_ID: 3115904,
        cityName: "Chácara",
      },
      {
        city_ID: 3116001,
        cityName: "Chalé",
      },
      {
        city_ID: 3116100,
        cityName: "Chapada do Norte",
      },
      {
        city_ID: 3116159,
        cityName: "Chapada Gaúcha",
      },
      {
        city_ID: 3116209,
        cityName: "Chiador",
      },
      {
        city_ID: 3116308,
        cityName: "Cipotânea",
      },
      {
        city_ID: 3116407,
        cityName: "Claraval",
      },
      {
        city_ID: 3116506,
        cityName: "Claro dos Poções",
      },
      {
        city_ID: 3116605,
        cityName: "Cláudio",
      },
      {
        city_ID: 3116704,
        cityName: "Coimbra",
      },
      {
        city_ID: 3116803,
        cityName: "Coluna",
      },
      {
        city_ID: 3116902,
        cityName: "Comendador Gomes",
      },
      {
        city_ID: 3117009,
        cityName: "Comercinho",
      },
      {
        city_ID: 3117108,
        cityName: "Conceição da Aparecida",
      },
      {
        city_ID: 3115201,
        cityName: "Conceição da Barra de Minas",
      },
      {
        city_ID: 3117306,
        cityName: "Conceição das Alagoas",
      },
      {
        city_ID: 3117207,
        cityName: "Conceição das Pedras",
      },
      {
        city_ID: 3117405,
        cityName: "Conceição de Ipanema",
      },
      {
        city_ID: 3117504,
        cityName: "Conceição do Mato Dentro",
      },
      {
        city_ID: 3117603,
        cityName: "Conceição do Pará",
      },
      {
        city_ID: 3117702,
        cityName: "Conceição do Rio Verde",
      },
      {
        city_ID: 3117801,
        cityName: "Conceição dos Ouros",
      },
      {
        city_ID: 3117836,
        cityName: "Cônego Marinho",
      },
      {
        city_ID: 3117876,
        cityName: "Confins",
      },
      {
        city_ID: 3117900,
        cityName: "Congonhal",
      },
      {
        city_ID: 3118007,
        cityName: "Congonhas",
      },
      {
        city_ID: 3118106,
        cityName: "Congonhas do Norte",
      },
      {
        city_ID: 3118205,
        cityName: "Conquista",
      },
      {
        city_ID: 3118304,
        cityName: "Conselheiro Lafaiete",
      },
      {
        city_ID: 3118403,
        cityName: "Conselheiro Pena",
      },
      {
        city_ID: 3118502,
        cityName: "Consolação",
      },
      {
        city_ID: 3118601,
        cityName: "Contagem",
      },
      {
        city_ID: 3118700,
        cityName: "Coqueiral",
      },
      {
        city_ID: 3118809,
        cityName: "Coração de Jesus",
      },
      {
        city_ID: 3118908,
        cityName: "Cordisburgo",
      },
      {
        city_ID: 3119005,
        cityName: "Cordislândia",
      },
      {
        city_ID: 3119104,
        cityName: "Corinto",
      },
      {
        city_ID: 3119203,
        cityName: "Coroaci",
      },
      {
        city_ID: 3119302,
        cityName: "Coromandel",
      },
      {
        city_ID: 3119401,
        cityName: "Coronel Fabriciano",
      },
      {
        city_ID: 3119500,
        cityName: "Coronel Murta",
      },
      {
        city_ID: 3119609,
        cityName: "Coronel Pacheco",
      },
      {
        city_ID: 3119708,
        cityName: "Coronel Xavier Chaves",
      },
      {
        city_ID: 3119807,
        cityName: "Córrego Danta",
      },
      {
        city_ID: 3119906,
        cityName: "Córrego do Bom Jesus",
      },
      {
        city_ID: 3119955,
        cityName: "Córrego Fundo",
      },
      {
        city_ID: 3120003,
        cityName: "Córrego Novo",
      },
      {
        city_ID: 3120102,
        cityName: "Couto de Magalhães de Minas",
      },
      {
        city_ID: 3120151,
        cityName: "Crisólita",
      },
      {
        city_ID: 3120201,
        cityName: "Cristais",
      },
      {
        city_ID: 3120300,
        cityName: "Cristália",
      },
      {
        city_ID: 3120409,
        cityName: "Cristiano Otoni",
      },
      {
        city_ID: 3120508,
        cityName: "Cristina",
      },
      {
        city_ID: 3120607,
        cityName: "Crucilândia",
      },
      {
        city_ID: 3120706,
        cityName: "Cruzeiro da Fortaleza",
      },
      {
        city_ID: 3120805,
        cityName: "Cruzília",
      },
      {
        city_ID: 3120839,
        cityName: "Cuparaque",
      },
      {
        city_ID: 3120870,
        cityName: "Curral de Dentro",
      },
      {
        city_ID: 3120904,
        cityName: "Curvelo",
      },
      {
        city_ID: 3121001,
        cityName: "Datas",
      },
      {
        city_ID: 3121100,
        cityName: "Delfim Moreira",
      },
      {
        city_ID: 3121209,
        cityName: "Delfinópolis",
      },
      {
        city_ID: 3121258,
        cityName: "Delta",
      },
      {
        city_ID: 3121308,
        cityName: "Descoberto",
      },
      {
        city_ID: 3121407,
        cityName: "Desterro de Entre Rios",
      },
      {
        city_ID: 3121506,
        cityName: "Desterro do Melo",
      },
      {
        city_ID: 3121605,
        cityName: "Diamantina",
      },
      {
        city_ID: 3121704,
        cityName: "Diogo de Vasconcelos",
      },
      {
        city_ID: 3121803,
        cityName: "Dionísio",
      },
      {
        city_ID: 3121902,
        cityName: "Divinésia",
      },
      {
        city_ID: 3122009,
        cityName: "Divino",
      },
      {
        city_ID: 3122108,
        cityName: "Divino das Laranjeiras",
      },
      {
        city_ID: 3122207,
        cityName: "Divinolândia de Minas",
      },
      {
        city_ID: 3122306,
        cityName: "Divinópolis",
      },
      {
        city_ID: 3122355,
        cityName: "Divisa Alegre",
      },
      {
        city_ID: 3122405,
        cityName: "Divisa Nova",
      },
      {
        city_ID: 3122454,
        cityName: "Divisópolis",
      },
      {
        city_ID: 3122470,
        cityName: "Dom Bosco",
      },
      {
        city_ID: 3122504,
        cityName: "Dom Cavati",
      },
      {
        city_ID: 3122603,
        cityName: "Dom Joaquim",
      },
      {
        city_ID: 3122702,
        cityName: "Dom Silvério",
      },
      {
        city_ID: 3122801,
        cityName: "Dom Viçoso",
      },
      {
        city_ID: 3122900,
        cityName: "Dona Eusébia",
      },
      {
        city_ID: 3123007,
        cityName: "Dores de Campos",
      },
      {
        city_ID: 3123106,
        cityName: "Dores de Guanhães",
      },
      {
        city_ID: 3123205,
        cityName: "Dores do Indaiá",
      },
      {
        city_ID: 3123304,
        cityName: "Dores do Turvo",
      },
      {
        city_ID: 3123403,
        cityName: "Doresópolis",
      },
      {
        city_ID: 3123502,
        cityName: "Douradoquara",
      },
      {
        city_ID: 3123528,
        cityName: "Durandé",
      },
      {
        city_ID: 3123601,
        cityName: "Elói Mendes",
      },
      {
        city_ID: 3123700,
        cityName: "Engenheiro Caldas",
      },
      {
        city_ID: 3123809,
        cityName: "Engenheiro Navarro",
      },
      {
        city_ID: 3123858,
        cityName: "Entre Folhas",
      },
      {
        city_ID: 3123908,
        cityName: "Entre Rios de Minas",
      },
      {
        city_ID: 3124005,
        cityName: "Ervália",
      },
      {
        city_ID: 3124104,
        cityName: "Esmeraldas",
      },
      {
        city_ID: 3124203,
        cityName: "Espera Feliz",
      },
      {
        city_ID: 3124302,
        cityName: "Espinosa",
      },
      {
        city_ID: 3124401,
        cityName: "Espírito Santo do Dourado",
      },
      {
        city_ID: 3124500,
        cityName: "Estiva",
      },
      {
        city_ID: 3124609,
        cityName: "Estrela Dalva",
      },
      {
        city_ID: 3124708,
        cityName: "Estrela do Indaiá",
      },
      {
        city_ID: 3124807,
        cityName: "Estrela do Sul",
      },
      {
        city_ID: 3124906,
        cityName: "Eugenópolis",
      },
      {
        city_ID: 3125002,
        cityName: "Ewbank da Câmara",
      },
      {
        city_ID: 3125101,
        cityName: "Extrema",
      },
      {
        city_ID: 3125200,
        cityName: "Fama",
      },
      {
        city_ID: 3125309,
        cityName: "Faria Lemos",
      },
      {
        city_ID: 3125408,
        cityName: "Felício dos Santos",
      },
      {
        city_ID: 3125606,
        cityName: "Felisburgo",
      },
      {
        city_ID: 3125705,
        cityName: "Felixlândia",
      },
      {
        city_ID: 3125804,
        cityName: "Fernandes Tourinho",
      },
      {
        city_ID: 3125903,
        cityName: "Ferros",
      },
      {
        city_ID: 3125952,
        cityName: "Fervedouro",
      },
      {
        city_ID: 3126000,
        cityName: "Florestal",
      },
      {
        city_ID: 3126109,
        cityName: "Formiga",
      },
      {
        city_ID: 3126208,
        cityName: "Formoso",
      },
      {
        city_ID: 3126307,
        cityName: "Fortaleza de Minas",
      },
      {
        city_ID: 3126406,
        cityName: "Fortuna de Minas",
      },
      {
        city_ID: 3126505,
        cityName: "Francisco Badaró",
      },
      {
        city_ID: 3126604,
        cityName: "Francisco Dumont",
      },
      {
        city_ID: 3126703,
        cityName: "Francisco Sá",
      },
      {
        city_ID: 3126752,
        cityName: "Franciscópolis",
      },
      {
        city_ID: 3126802,
        cityName: "Frei Gaspar",
      },
      {
        city_ID: 3126901,
        cityName: "Frei Inocêncio",
      },
      {
        city_ID: 3126950,
        cityName: "Frei Lagonegro",
      },
      {
        city_ID: 3127008,
        cityName: "Fronteira",
      },
      {
        city_ID: 3127057,
        cityName: "Fronteira dos Vales",
      },
      {
        city_ID: 3127073,
        cityName: "Fruta de Leite",
      },
      {
        city_ID: 3127107,
        cityName: "Frutal",
      },
      {
        city_ID: 3127206,
        cityName: "Funilândia",
      },
      {
        city_ID: 3127305,
        cityName: "Galiléia",
      },
      {
        city_ID: 3127339,
        cityName: "Gameleiras",
      },
      {
        city_ID: 3127354,
        cityName: "Glaucilândia",
      },
      {
        city_ID: 3127370,
        cityName: "Goiabeira",
      },
      {
        city_ID: 3127388,
        cityName: "Goianá",
      },
      {
        city_ID: 3127404,
        cityName: "Gonçalves",
      },
      {
        city_ID: 3127503,
        cityName: "Gonzaga",
      },
      {
        city_ID: 3127602,
        cityName: "Gouveia",
      },
      {
        city_ID: 3127701,
        cityName: "Governador Valadares",
      },
      {
        city_ID: 3127800,
        cityName: "Grão Mogol",
      },
      {
        city_ID: 3127909,
        cityName: "Grupiara",
      },
      {
        city_ID: 3128006,
        cityName: "Guanhães",
      },
      {
        city_ID: 3128105,
        cityName: "Guapé",
      },
      {
        city_ID: 3128204,
        cityName: "Guaraciaba",
      },
      {
        city_ID: 3128253,
        cityName: "Guaraciama",
      },
      {
        city_ID: 3128303,
        cityName: "Guaranésia",
      },
      {
        city_ID: 3128402,
        cityName: "Guarani",
      },
      {
        city_ID: 3128501,
        cityName: "Guarará",
      },
      {
        city_ID: 3128600,
        cityName: "Guarda-Mor",
      },
      {
        city_ID: 3128709,
        cityName: "Guaxupé",
      },
      {
        city_ID: 3128808,
        cityName: "Guidoval",
      },
      {
        city_ID: 3128907,
        cityName: "Guimarânia",
      },
      {
        city_ID: 3129004,
        cityName: "Guiricema",
      },
      {
        city_ID: 3129103,
        cityName: "Gurinhatã",
      },
      {
        city_ID: 3129202,
        cityName: "Heliodora",
      },
      {
        city_ID: 3129301,
        cityName: "Iapu",
      },
      {
        city_ID: 3129400,
        cityName: "Ibertioga",
      },
      {
        city_ID: 3129509,
        cityName: "Ibiá",
      },
      {
        city_ID: 3129608,
        cityName: "Ibiaí",
      },
      {
        city_ID: 3129657,
        cityName: "Ibiracatu",
      },
      {
        city_ID: 3129707,
        cityName: "Ibiraci",
      },
      {
        city_ID: 3129806,
        cityName: "Ibirité",
      },
      {
        city_ID: 3129905,
        cityName: "Ibitiúra de Minas",
      },
      {
        city_ID: 3130002,
        cityName: "Ibituruna",
      },
      {
        city_ID: 3130051,
        cityName: "Icaraí de Minas",
      },
      {
        city_ID: 3130101,
        cityName: "Igarapé",
      },
      {
        city_ID: 3130200,
        cityName: "Igaratinga",
      },
      {
        city_ID: 3130309,
        cityName: "Iguatama",
      },
      {
        city_ID: 3130408,
        cityName: "Ijaci",
      },
      {
        city_ID: 3130507,
        cityName: "Ilicínea",
      },
      {
        city_ID: 3130556,
        cityName: "Imbé de Minas",
      },
      {
        city_ID: 3130606,
        cityName: "Inconfidentes",
      },
      {
        city_ID: 3130655,
        cityName: "Indaiabira",
      },
      {
        city_ID: 3130705,
        cityName: "Indianópolis",
      },
      {
        city_ID: 3130804,
        cityName: "Ingaí",
      },
      {
        city_ID: 3130903,
        cityName: "Inhapim",
      },
      {
        city_ID: 3131000,
        cityName: "Inhaúma",
      },
      {
        city_ID: 3131109,
        cityName: "Inimutaba",
      },
      {
        city_ID: 3131158,
        cityName: "Ipaba",
      },
      {
        city_ID: 3131208,
        cityName: "Ipanema",
      },
      {
        city_ID: 3131307,
        cityName: "Ipatinga",
      },
      {
        city_ID: 3131406,
        cityName: "Ipiaçu",
      },
      {
        city_ID: 3131505,
        cityName: "Ipuiúna",
      },
      {
        city_ID: 3131604,
        cityName: "Iraí de Minas",
      },
      {
        city_ID: 3131703,
        cityName: "Itabira",
      },
      {
        city_ID: 3131802,
        cityName: "Itabirinha",
      },
      {
        city_ID: 3131901,
        cityName: "Itabirito",
      },
      {
        city_ID: 3132008,
        cityName: "Itacambira",
      },
      {
        city_ID: 3132107,
        cityName: "Itacarambi",
      },
      {
        city_ID: 3132206,
        cityName: "Itaguara",
      },
      {
        city_ID: 3132305,
        cityName: "Itaipé",
      },
      {
        city_ID: 3132404,
        cityName: "Itajubá",
      },
      {
        city_ID: 3132503,
        cityName: "Itamarandiba",
      },
      {
        city_ID: 3132602,
        cityName: "Itamarati de Minas",
      },
      {
        city_ID: 3132701,
        cityName: "Itambacuri",
      },
      {
        city_ID: 3132800,
        cityName: "Itambé do Mato Dentro",
      },
      {
        city_ID: 3132909,
        cityName: "Itamogi",
      },
      {
        city_ID: 3133006,
        cityName: "Itamonte",
      },
      {
        city_ID: 3133105,
        cityName: "Itanhandu",
      },
      {
        city_ID: 3133204,
        cityName: "Itanhomi",
      },
      {
        city_ID: 3133303,
        cityName: "Itaobim",
      },
      {
        city_ID: 3133402,
        cityName: "Itapagipe",
      },
      {
        city_ID: 3133501,
        cityName: "Itapecerica",
      },
      {
        city_ID: 3133600,
        cityName: "Itapeva",
      },
      {
        city_ID: 3133709,
        cityName: "Itatiaiuçu",
      },
      {
        city_ID: 3133758,
        cityName: "Itaú de Minas",
      },
      {
        city_ID: 3133808,
        cityName: "Itaúna",
      },
      {
        city_ID: 3133907,
        cityName: "Itaverava",
      },
      {
        city_ID: 3134004,
        cityName: "Itinga",
      },
      {
        city_ID: 3134103,
        cityName: "Itueta",
      },
      {
        city_ID: 3134202,
        cityName: "Ituiutaba",
      },
      {
        city_ID: 3134301,
        cityName: "Itumirim",
      },
      {
        city_ID: 3134400,
        cityName: "Iturama",
      },
      {
        city_ID: 3134509,
        cityName: "Itutinga",
      },
      {
        city_ID: 3134608,
        cityName: "Jaboticatubas",
      },
      {
        city_ID: 3134707,
        cityName: "Jacinto",
      },
      {
        city_ID: 3134806,
        cityName: "Jacuí",
      },
      {
        city_ID: 3134905,
        cityName: "Jacutinga",
      },
      {
        city_ID: 3135001,
        cityName: "Jaguaraçu",
      },
      {
        city_ID: 3135050,
        cityName: "Jaíba",
      },
      {
        city_ID: 3135076,
        cityName: "Jampruca",
      },
      {
        city_ID: 3135100,
        cityName: "Janaúba",
      },
      {
        city_ID: 3135209,
        cityName: "Januária",
      },
      {
        city_ID: 3135308,
        cityName: "Japaraíba",
      },
      {
        city_ID: 3135357,
        cityName: "Japonvar",
      },
      {
        city_ID: 3135407,
        cityName: "Jeceaba",
      },
      {
        city_ID: 3135456,
        cityName: "Jenipapo de Minas",
      },
      {
        city_ID: 3135506,
        cityName: "Jequeri",
      },
      {
        city_ID: 3135605,
        cityName: "Jequitaí",
      },
      {
        city_ID: 3135704,
        cityName: "Jequitibá",
      },
      {
        city_ID: 3135803,
        cityName: "Jequitinhonha",
      },
      {
        city_ID: 3135902,
        cityName: "Jesuânia",
      },
      {
        city_ID: 3136009,
        cityName: "Joaíma",
      },
      {
        city_ID: 3136108,
        cityName: "Joanésia",
      },
      {
        city_ID: 3136207,
        cityName: "João Monlevade",
      },
      {
        city_ID: 3136306,
        cityName: "João Pinheiro",
      },
      {
        city_ID: 3136405,
        cityName: "Joaquim Felício",
      },
      {
        city_ID: 3136504,
        cityName: "Jordânia",
      },
      {
        city_ID: 3136520,
        cityName: "José Gonçalves de Minas",
      },
      {
        city_ID: 3136553,
        cityName: "José Raydan",
      },
      {
        city_ID: 3136579,
        cityName: "Josenópolis",
      },
      {
        city_ID: 3136652,
        cityName: "Juatuba",
      },
      {
        city_ID: 3136702,
        cityName: "Juiz de Fora",
      },
      {
        city_ID: 3136801,
        cityName: "Juramento",
      },
      {
        city_ID: 3136900,
        cityName: "Juruaia",
      },
      {
        city_ID: 3136959,
        cityName: "Juvenília",
      },
      {
        city_ID: 3137007,
        cityName: "Ladainha",
      },
      {
        city_ID: 3137106,
        cityName: "Lagamar",
      },
      {
        city_ID: 3137205,
        cityName: "Lagoa da Prata",
      },
      {
        city_ID: 3137304,
        cityName: "Lagoa dos Patos",
      },
      {
        city_ID: 3137403,
        cityName: "Lagoa Dourada",
      },
      {
        city_ID: 3137502,
        cityName: "Lagoa Formosa",
      },
      {
        city_ID: 3137536,
        cityName: "Lagoa Grande",
      },
      {
        city_ID: 3137601,
        cityName: "Lagoa Santa",
      },
      {
        city_ID: 3137700,
        cityName: "Lajinha",
      },
      {
        city_ID: 3137809,
        cityName: "Lambari",
      },
      {
        city_ID: 3137908,
        cityName: "Lamim",
      },
      {
        city_ID: 3138005,
        cityName: "Laranjal",
      },
      {
        city_ID: 3138104,
        cityName: "Lassance",
      },
      {
        city_ID: 3138203,
        cityName: "Lavras",
      },
      {
        city_ID: 3138302,
        cityName: "Leandro Ferreira",
      },
      {
        city_ID: 3138351,
        cityName: "Leme do Prado",
      },
      {
        city_ID: 3138401,
        cityName: "Leopoldina",
      },
      {
        city_ID: 3138500,
        cityName: "Liberdade",
      },
      {
        city_ID: 3138609,
        cityName: "Lima Duarte",
      },
      {
        city_ID: 3138625,
        cityName: "Limeira do Oeste",
      },
      {
        city_ID: 3138658,
        cityName: "Lontra",
      },
      {
        city_ID: 3138674,
        cityName: "Luisburgo",
      },
      {
        city_ID: 3138682,
        cityName: "Luislândia",
      },
      {
        city_ID: 3138708,
        cityName: "Luminárias",
      },
      {
        city_ID: 3138807,
        cityName: "Luz",
      },
      {
        city_ID: 3138906,
        cityName: "Machacalis",
      },
      {
        city_ID: 3139003,
        cityName: "Machado",
      },
      {
        city_ID: 3139102,
        cityName: "Madre de Deus de Minas",
      },
      {
        city_ID: 3139201,
        cityName: "Malacacheta",
      },
      {
        city_ID: 3139250,
        cityName: "Mamonas",
      },
      {
        city_ID: 3139300,
        cityName: "Manga",
      },
      {
        city_ID: 3139409,
        cityName: "Manhuaçu",
      },
      {
        city_ID: 3139508,
        cityName: "Manhumirim",
      },
      {
        city_ID: 3139607,
        cityName: "Mantena",
      },
      {
        city_ID: 3139805,
        cityName: "Mar de Espanha",
      },
      {
        city_ID: 3139706,
        cityName: "Maravilhas",
      },
      {
        city_ID: 3139904,
        cityName: "Maria da Fé",
      },
      {
        city_ID: 3140001,
        cityName: "Mariana",
      },
      {
        city_ID: 3140100,
        cityName: "Marilac",
      },
      {
        city_ID: 3140159,
        cityName: "Mário Campos",
      },
      {
        city_ID: 3140209,
        cityName: "Maripá de Minas",
      },
      {
        city_ID: 3140308,
        cityName: "Marliéria",
      },
      {
        city_ID: 3140407,
        cityName: "Marmelópolis",
      },
      {
        city_ID: 3140506,
        cityName: "Martinho Campos",
      },
      {
        city_ID: 3140530,
        cityName: "Martins Soares",
      },
      {
        city_ID: 3140555,
        cityName: "Mata Verde",
      },
      {
        city_ID: 3140605,
        cityName: "Materlândia",
      },
      {
        city_ID: 3140704,
        cityName: "Mateus Leme",
      },
      {
        city_ID: 3171501,
        cityName: "Mathias Lobato",
      },
      {
        city_ID: 3140803,
        cityName: "Matias Barbosa",
      },
      {
        city_ID: 3140852,
        cityName: "Matias Cardoso",
      },
      {
        city_ID: 3140902,
        cityName: "Matipó",
      },
      {
        city_ID: 3141009,
        cityName: "Mato Verde",
      },
      {
        city_ID: 3141108,
        cityName: "Matozinhos",
      },
      {
        city_ID: 3141207,
        cityName: "Matutina",
      },
      {
        city_ID: 3141306,
        cityName: "Medeiros",
      },
      {
        city_ID: 3141405,
        cityName: "Medina",
      },
      {
        city_ID: 3141504,
        cityName: "Mendes Pimentel",
      },
      {
        city_ID: 3141603,
        cityName: "Mercês",
      },
      {
        city_ID: 3141702,
        cityName: "Mesquita",
      },
      {
        city_ID: 3141801,
        cityName: "Minas Novas",
      },
      {
        city_ID: 3141900,
        cityName: "Minduri",
      },
      {
        city_ID: 3142007,
        cityName: "Mirabela",
      },
      {
        city_ID: 3142106,
        cityName: "Miradouro",
      },
      {
        city_ID: 3142205,
        cityName: "Miraí",
      },
      {
        city_ID: 3142254,
        cityName: "Miravânia",
      },
      {
        city_ID: 3142304,
        cityName: "Moeda",
      },
      {
        city_ID: 3142403,
        cityName: "Moema",
      },
      {
        city_ID: 3142502,
        cityName: "Monjolos",
      },
      {
        city_ID: 3142601,
        cityName: "Monsenhor Paulo",
      },
      {
        city_ID: 3142700,
        cityName: "Montalvânia",
      },
      {
        city_ID: 3142809,
        cityName: "Monte Alegre de Minas",
      },
      {
        city_ID: 3142908,
        cityName: "Monte Azul",
      },
      {
        city_ID: 3143005,
        cityName: "Monte Belo",
      },
      {
        city_ID: 3143104,
        cityName: "Monte Carmelo",
      },
      {
        city_ID: 3143153,
        cityName: "Monte Formoso",
      },
      {
        city_ID: 3143203,
        cityName: "Monte Santo de Minas",
      },
      {
        city_ID: 3143401,
        cityName: "Monte Sião",
      },
      {
        city_ID: 3143302,
        cityName: "Montes Claros",
      },
      {
        city_ID: 3143450,
        cityName: "Montezuma",
      },
      {
        city_ID: 3143500,
        cityName: "Morada Nova de Minas",
      },
      {
        city_ID: 3143609,
        cityName: "Morro da Garça",
      },
      {
        city_ID: 3143708,
        cityName: "Morro do Pilar",
      },
      {
        city_ID: 3143807,
        cityName: "Munhoz",
      },
      {
        city_ID: 3143906,
        cityName: "Muriaé",
      },
      {
        city_ID: 3144003,
        cityName: "Mutum",
      },
      {
        city_ID: 3144102,
        cityName: "Muzambinho",
      },
      {
        city_ID: 3144201,
        cityName: "Nacip Raydan",
      },
      {
        city_ID: 3144300,
        cityName: "Nanuque",
      },
      {
        city_ID: 3144359,
        cityName: "Naque",
      },
      {
        city_ID: 3144375,
        cityName: "Natalândia",
      },
      {
        city_ID: 3144409,
        cityName: "Natércia",
      },
      {
        city_ID: 3144508,
        cityName: "Nazareno",
      },
      {
        city_ID: 3144607,
        cityName: "Nepomuceno",
      },
      {
        city_ID: 3144656,
        cityName: "Ninheira",
      },
      {
        city_ID: 3144672,
        cityName: "Nova Belém",
      },
      {
        city_ID: 3144706,
        cityName: "Nova Era",
      },
      {
        city_ID: 3144805,
        cityName: "Nova Lima",
      },
      {
        city_ID: 3144904,
        cityName: "Nova Módica",
      },
      {
        city_ID: 3145000,
        cityName: "Nova Ponte",
      },
      {
        city_ID: 3145059,
        cityName: "Nova Porteirinha",
      },
      {
        city_ID: 3145109,
        cityName: "Nova Resende",
      },
      {
        city_ID: 3145208,
        cityName: "Nova Serrana",
      },
      {
        city_ID: 3136603,
        cityName: "Nova União",
      },
      {
        city_ID: 3145307,
        cityName: "Novo Cruzeiro",
      },
      {
        city_ID: 3145356,
        cityName: "Novo Oriente de Minas",
      },
      {
        city_ID: 3145372,
        cityName: "Novorizonte",
      },
      {
        city_ID: 3145406,
        cityName: "Olaria",
      },
      {
        city_ID: 3145455,
        cityName: "Olhos-d'Água",
      },
      {
        city_ID: 3145505,
        cityName: "Olímpio Noronha",
      },
      {
        city_ID: 3145604,
        cityName: "Oliveira",
      },
      {
        city_ID: 3145703,
        cityName: "Oliveira Fortes",
      },
      {
        city_ID: 3145802,
        cityName: "Onça de Pitangui",
      },
      {
        city_ID: 3145851,
        cityName: "Oratórios",
      },
      {
        city_ID: 3145877,
        cityName: "Orizânia",
      },
      {
        city_ID: 3145901,
        cityName: "Ouro Branco",
      },
      {
        city_ID: 3146008,
        cityName: "Ouro Fino",
      },
      {
        city_ID: 3146107,
        cityName: "Ouro Preto",
      },
      {
        city_ID: 3146206,
        cityName: "Ouro Verde de Minas",
      },
      {
        city_ID: 3146255,
        cityName: "Padre Carvalho",
      },
      {
        city_ID: 3146305,
        cityName: "Padre Paraíso",
      },
      {
        city_ID: 3146552,
        cityName: "Pai Pedro",
      },
      {
        city_ID: 3146404,
        cityName: "Paineiras",
      },
      {
        city_ID: 3146503,
        cityName: "Pains",
      },
      {
        city_ID: 3146602,
        cityName: "Paiva",
      },
      {
        city_ID: 3146701,
        cityName: "Palma",
      },
      {
        city_ID: 3146750,
        cityName: "Palmópolis",
      },
      {
        city_ID: 3146909,
        cityName: "Papagaios",
      },
      {
        city_ID: 3147105,
        cityName: "Pará de Minas",
      },
      {
        city_ID: 3147006,
        cityName: "Paracatu",
      },
      {
        city_ID: 3147204,
        cityName: "Paraguaçu",
      },
      {
        city_ID: 3147303,
        cityName: "Paraisópolis",
      },
      {
        city_ID: 3147402,
        cityName: "Paraopeba",
      },
      {
        city_ID: 3147600,
        cityName: "Passa Quatro",
      },
      {
        city_ID: 3147709,
        cityName: "Passa Tempo",
      },
      {
        city_ID: 3147808,
        cityName: "Passa Vinte",
      },
      {
        city_ID: 3147501,
        cityName: "Passabém",
      },
      {
        city_ID: 3147907,
        cityName: "Passos",
      },
      {
        city_ID: 3147956,
        cityName: "Patis",
      },
      {
        city_ID: 3148004,
        cityName: "Patos de Minas",
      },
      {
        city_ID: 3148103,
        cityName: "Patrocínio",
      },
      {
        city_ID: 3148202,
        cityName: "Patrocínio do Muriaé",
      },
      {
        city_ID: 3148301,
        cityName: "Paula Cândido",
      },
      {
        city_ID: 3148400,
        cityName: "Paulistas",
      },
      {
        city_ID: 3148509,
        cityName: "Pavão",
      },
      {
        city_ID: 3148608,
        cityName: "Peçanha",
      },
      {
        city_ID: 3148707,
        cityName: "Pedra Azul",
      },
      {
        city_ID: 3148756,
        cityName: "Pedra Bonita",
      },
      {
        city_ID: 3148806,
        cityName: "Pedra do Anta",
      },
      {
        city_ID: 3148905,
        cityName: "Pedra do Indaiá",
      },
      {
        city_ID: 3149002,
        cityName: "Pedra Dourada",
      },
      {
        city_ID: 3149101,
        cityName: "Pedralva",
      },
      {
        city_ID: 3149150,
        cityName: "Pedras de Maria da Cruz",
      },
      {
        city_ID: 3149200,
        cityName: "Pedrinópolis",
      },
      {
        city_ID: 3149309,
        cityName: "Pedro Leopoldo",
      },
      {
        city_ID: 3149408,
        cityName: "Pedro Teixeira",
      },
      {
        city_ID: 3149507,
        cityName: "Pequeri",
      },
      {
        city_ID: 3149606,
        cityName: "Pequi",
      },
      {
        city_ID: 3149705,
        cityName: "Perdigão",
      },
      {
        city_ID: 3149804,
        cityName: "Perdizes",
      },
      {
        city_ID: 3149903,
        cityName: "Perdões",
      },
      {
        city_ID: 3149952,
        cityName: "Periquito",
      },
      {
        city_ID: 3150000,
        cityName: "Pescador",
      },
      {
        city_ID: 3150109,
        cityName: "Piau",
      },
      {
        city_ID: 3150158,
        cityName: "Piedade de Caratinga",
      },
      {
        city_ID: 3150208,
        cityName: "Piedade de Ponte Nova",
      },
      {
        city_ID: 3150307,
        cityName: "Piedade do Rio Grande",
      },
      {
        city_ID: 3150406,
        cityName: "Piedade dos Gerais",
      },
      {
        city_ID: 3150505,
        cityName: "Pimenta",
      },
      {
        city_ID: 3150539,
        cityName: "Pingo d'Água",
      },
      {
        city_ID: 3150570,
        cityName: "Pintópolis",
      },
      {
        city_ID: 3150604,
        cityName: "Piracema",
      },
      {
        city_ID: 3150703,
        cityName: "Pirajuba",
      },
      {
        city_ID: 3150802,
        cityName: "Piranga",
      },
      {
        city_ID: 3150901,
        cityName: "Piranguçu",
      },
      {
        city_ID: 3151008,
        cityName: "Piranguinho",
      },
      {
        city_ID: 3151107,
        cityName: "Pirapetinga",
      },
      {
        city_ID: 3151206,
        cityName: "Pirapora",
      },
      {
        city_ID: 3151305,
        cityName: "Piraúba",
      },
      {
        city_ID: 3151404,
        cityName: "Pitangui",
      },
      {
        city_ID: 3151503,
        cityName: "Piumhi",
      },
      {
        city_ID: 3151602,
        cityName: "Planura",
      },
      {
        city_ID: 3151701,
        cityName: "Poço Fundo",
      },
      {
        city_ID: 3151800,
        cityName: "Poços de Caldas",
      },
      {
        city_ID: 3151909,
        cityName: "Pocrane",
      },
      {
        city_ID: 3152006,
        cityName: "Pompéu",
      },
      {
        city_ID: 3152105,
        cityName: "Ponte Nova",
      },
      {
        city_ID: 3152131,
        cityName: "Ponto Chique",
      },
      {
        city_ID: 3152170,
        cityName: "Ponto dos Volantes",
      },
      {
        city_ID: 3152204,
        cityName: "Porteirinha",
      },
      {
        city_ID: 3152303,
        cityName: "Porto Firme",
      },
      {
        city_ID: 3152402,
        cityName: "Poté",
      },
      {
        city_ID: 3152501,
        cityName: "Pouso Alegre",
      },
      {
        city_ID: 3152600,
        cityName: "Pouso Alto",
      },
      {
        city_ID: 3152709,
        cityName: "Prados",
      },
      {
        city_ID: 3152808,
        cityName: "Prata",
      },
      {
        city_ID: 3152907,
        cityName: "Pratápolis",
      },
      {
        city_ID: 3153004,
        cityName: "Pratinha",
      },
      {
        city_ID: 3153103,
        cityName: "Presidente Bernardes",
      },
      {
        city_ID: 3153202,
        cityName: "Presidente Juscelino",
      },
      {
        city_ID: 3153301,
        cityName: "Presidente Kubitschek",
      },
      {
        city_ID: 3153400,
        cityName: "Presidente Olegário",
      },
      {
        city_ID: 3153608,
        cityName: "Prudente de Morais",
      },
      {
        city_ID: 3153707,
        cityName: "Quartel Geral",
      },
      {
        city_ID: 3153806,
        cityName: "Queluzito",
      },
      {
        city_ID: 3153905,
        cityName: "Raposos",
      },
      {
        city_ID: 3154002,
        cityName: "Raul Soares",
      },
      {
        city_ID: 3154101,
        cityName: "Recreio",
      },
      {
        city_ID: 3154150,
        cityName: "Reduto",
      },
      {
        city_ID: 3154200,
        cityName: "Resende Costa",
      },
      {
        city_ID: 3154309,
        cityName: "Resplendor",
      },
      {
        city_ID: 3154408,
        cityName: "Ressaquinha",
      },
      {
        city_ID: 3154457,
        cityName: "Riachinho",
      },
      {
        city_ID: 3154507,
        cityName: "Riacho dos Machados",
      },
      {
        city_ID: 3154606,
        cityName: "Ribeirão das Neves",
      },
      {
        city_ID: 3154705,
        cityName: "Ribeirão Vermelho",
      },
      {
        city_ID: 3154804,
        cityName: "Rio Acima",
      },
      {
        city_ID: 3154903,
        cityName: "Rio Casca",
      },
      {
        city_ID: 3155108,
        cityName: "Rio do Prado",
      },
      {
        city_ID: 3155009,
        cityName: "Rio Doce",
      },
      {
        city_ID: 3155207,
        cityName: "Rio Espera",
      },
      {
        city_ID: 3155306,
        cityName: "Rio Manso",
      },
      {
        city_ID: 3155405,
        cityName: "Rio Novo",
      },
      {
        city_ID: 3155504,
        cityName: "Rio Paranaíba",
      },
      {
        city_ID: 3155603,
        cityName: "Rio Pardo de Minas",
      },
      {
        city_ID: 3155702,
        cityName: "Rio Piracicaba",
      },
      {
        city_ID: 3155801,
        cityName: "Rio Pomba",
      },
      {
        city_ID: 3155900,
        cityName: "Rio Preto",
      },
      {
        city_ID: 3156007,
        cityName: "Rio Vermelho",
      },
      {
        city_ID: 3156106,
        cityName: "Ritápolis",
      },
      {
        city_ID: 3156205,
        cityName: "Rochedo de Minas",
      },
      {
        city_ID: 3156304,
        cityName: "Rodeiro",
      },
      {
        city_ID: 3156403,
        cityName: "Romaria",
      },
      {
        city_ID: 3156452,
        cityName: "Rosário da Limeira",
      },
      {
        city_ID: 3156502,
        cityName: "Rubelita",
      },
      {
        city_ID: 3156601,
        cityName: "Rubim",
      },
      {
        city_ID: 3156700,
        cityName: "Sabará",
      },
      {
        city_ID: 3156809,
        cityName: "Sabinópolis",
      },
      {
        city_ID: 3156908,
        cityName: "Sacramento",
      },
      {
        city_ID: 3157005,
        cityName: "Salinas",
      },
      {
        city_ID: 3157104,
        cityName: "Salto da Divisa",
      },
      {
        city_ID: 3157203,
        cityName: "Santa Bárbara",
      },
      {
        city_ID: 3157252,
        cityName: "Santa Bárbara do Leste",
      },
      {
        city_ID: 3157278,
        cityName: "Santa Bárbara do Monte Verde",
      },
      {
        city_ID: 3157302,
        cityName: "Santa Bárbara do Tugúrio",
      },
      {
        city_ID: 3157336,
        cityName: "Santa Cruz de Minas",
      },
      {
        city_ID: 3157377,
        cityName: "Santa Cruz de Salinas",
      },
      {
        city_ID: 3157401,
        cityName: "Santa Cruz do Escalvado",
      },
      {
        city_ID: 3157500,
        cityName: "Santa Efigênia de Minas",
      },
      {
        city_ID: 3157609,
        cityName: "Santa Fé de Minas",
      },
      {
        city_ID: 3157658,
        cityName: "Santa Helena de Minas",
      },
      {
        city_ID: 3157708,
        cityName: "Santa Juliana",
      },
      {
        city_ID: 3157807,
        cityName: "Santa Luzia",
      },
      {
        city_ID: 3157906,
        cityName: "Santa Margarida",
      },
      {
        city_ID: 3158003,
        cityName: "Santa Maria de Itabira",
      },
      {
        city_ID: 3158102,
        cityName: "Santa Maria do Salto",
      },
      {
        city_ID: 3158201,
        cityName: "Santa Maria do Suaçuí",
      },
      {
        city_ID: 3159209,
        cityName: "Santa Rita de Caldas",
      },
      {
        city_ID: 3159407,
        cityName: "Santa Rita de Ibitipoca",
      },
      {
        city_ID: 3159308,
        cityName: "Santa Rita de Jacutinga",
      },
      {
        city_ID: 3159357,
        cityName: "Santa Rita de Minas",
      },
      {
        city_ID: 3159506,
        cityName: "Santa Rita do Itueto",
      },
      {
        city_ID: 3159605,
        cityName: "Santa Rita do Sapucaí",
      },
      {
        city_ID: 3159704,
        cityName: "Santa Rosa da Serra",
      },
      {
        city_ID: 3159803,
        cityName: "Santa Vitória",
      },
      {
        city_ID: 3158300,
        cityName: "Santana da Vargem",
      },
      {
        city_ID: 3158409,
        cityName: "Santana de Cataguases",
      },
      {
        city_ID: 3158508,
        cityName: "Santana de Pirapama",
      },
      {
        city_ID: 3158607,
        cityName: "Santana do Deserto",
      },
      {
        city_ID: 3158706,
        cityName: "Santana do Garambéu",
      },
      {
        city_ID: 3158805,
        cityName: "Santana do Jacaré",
      },
      {
        city_ID: 3158904,
        cityName: "Santana do Manhuaçu",
      },
      {
        city_ID: 3158953,
        cityName: "Santana do Paraíso",
      },
      {
        city_ID: 3159001,
        cityName: "Santana do Riacho",
      },
      {
        city_ID: 3159100,
        cityName: "Santana dos Montes",
      },
      {
        city_ID: 3159902,
        cityName: "Santo Antônio do Amparo",
      },
      {
        city_ID: 3160009,
        cityName: "Santo Antônio do Aventureiro",
      },
      {
        city_ID: 3160108,
        cityName: "Santo Antônio do Grama",
      },
      {
        city_ID: 3160207,
        cityName: "Santo Antônio do Itambé",
      },
      {
        city_ID: 3160306,
        cityName: "Santo Antônio do Jacinto",
      },
      {
        city_ID: 3160405,
        cityName: "Santo Antônio do Monte",
      },
      {
        city_ID: 3160454,
        cityName: "Santo Antônio do Retiro",
      },
      {
        city_ID: 3160504,
        cityName: "Santo Antônio do Rio Abaixo",
      },
      {
        city_ID: 3160603,
        cityName: "Santo Hipólito",
      },
      {
        city_ID: 3160702,
        cityName: "Santos Dumont",
      },
      {
        city_ID: 3160801,
        cityName: "São Bento Abade",
      },
      {
        city_ID: 3160900,
        cityName: "São Brás do Suaçuí",
      },
      {
        city_ID: 3160959,
        cityName: "São Domingos das Dores",
      },
      {
        city_ID: 3161007,
        cityName: "São Domingos do Prata",
      },
      {
        city_ID: 3161056,
        cityName: "São Félix de Minas",
      },
      {
        city_ID: 3161106,
        cityName: "São Francisco",
      },
      {
        city_ID: 3161205,
        cityName: "São Francisco de Paula",
      },
      {
        city_ID: 3161304,
        cityName: "São Francisco de Sales",
      },
      {
        city_ID: 3161403,
        cityName: "São Francisco do Glória",
      },
      {
        city_ID: 3161502,
        cityName: "São Geraldo",
      },
      {
        city_ID: 3161601,
        cityName: "São Geraldo da Piedade",
      },
      {
        city_ID: 3161650,
        cityName: "São Geraldo do Baixio",
      },
      {
        city_ID: 3161700,
        cityName: "São Gonçalo do Abaeté",
      },
      {
        city_ID: 3161809,
        cityName: "São Gonçalo do Pará",
      },
      {
        city_ID: 3161908,
        cityName: "São Gonçalo do Rio Abaixo",
      },
      {
        city_ID: 3125507,
        cityName: "São Gonçalo do Rio Preto",
      },
      {
        city_ID: 3162005,
        cityName: "São Gonçalo do Sapucaí",
      },
      {
        city_ID: 3162104,
        cityName: "São Gotardo",
      },
      {
        city_ID: 3162203,
        cityName: "São João Batista do Glória",
      },
      {
        city_ID: 3162252,
        cityName: "São João da Lagoa",
      },
      {
        city_ID: 3162302,
        cityName: "São João da Mata",
      },
      {
        city_ID: 3162401,
        cityName: "São João da Ponte",
      },
      {
        city_ID: 3162450,
        cityName: "São João das Missões",
      },
      {
        city_ID: 3162500,
        cityName: "São João del Rei",
      },
      {
        city_ID: 3162559,
        cityName: "São João do Manhuaçu",
      },
      {
        city_ID: 3162575,
        cityName: "São João do Manteninha",
      },
      {
        city_ID: 3162609,
        cityName: "São João do Oriente",
      },
      {
        city_ID: 3162658,
        cityName: "São João do Pacuí",
      },
      {
        city_ID: 3162708,
        cityName: "São João do Paraíso",
      },
      {
        city_ID: 3162807,
        cityName: "São João Evangelista",
      },
      {
        city_ID: 3162906,
        cityName: "São João Nepomuceno",
      },
      {
        city_ID: 3162922,
        cityName: "São Joaquim de Bicas",
      },
      {
        city_ID: 3162948,
        cityName: "São José da Barra",
      },
      {
        city_ID: 3162955,
        cityName: "São José da Lapa",
      },
      {
        city_ID: 3163003,
        cityName: "São José da Safira",
      },
      {
        city_ID: 3163102,
        cityName: "São José da Varginha",
      },
      {
        city_ID: 3163201,
        cityName: "São José do Alegre",
      },
      {
        city_ID: 3163300,
        cityName: "São José do Divino",
      },
      {
        city_ID: 3163409,
        cityName: "São José do Goiabal",
      },
      {
        city_ID: 3163508,
        cityName: "São José do Jacuri",
      },
      {
        city_ID: 3163607,
        cityName: "São José do Mantimento",
      },
      {
        city_ID: 3163706,
        cityName: "São Lourenço",
      },
      {
        city_ID: 3163805,
        cityName: "São Miguel do Anta",
      },
      {
        city_ID: 3163904,
        cityName: "São Pedro da União",
      },
      {
        city_ID: 3164100,
        cityName: "São Pedro do Suaçuí",
      },
      {
        city_ID: 3164001,
        cityName: "São Pedro dos Ferros",
      },
      {
        city_ID: 3164209,
        cityName: "São Romão",
      },
      {
        city_ID: 3164308,
        cityName: "São Roque de Minas",
      },
      {
        city_ID: 3164407,
        cityName: "São Sebastião da Bela Vista",
      },
      {
        city_ID: 3164431,
        cityName: "São Sebastião da Vargem Alegre",
      },
      {
        city_ID: 3164472,
        cityName: "São Sebastião do Anta",
      },
      {
        city_ID: 3164506,
        cityName: "São Sebastião do Maranhão",
      },
      {
        city_ID: 3164605,
        cityName: "São Sebastião do Oeste",
      },
      {
        city_ID: 3164704,
        cityName: "São Sebastião do Paraíso",
      },
      {
        city_ID: 3164803,
        cityName: "São Sebastião do Rio Preto",
      },
      {
        city_ID: 3164902,
        cityName: "São Sebastião do Rio Verde",
      },
      {
        city_ID: 3165206,
        cityName: "São Thomé das Letras",
      },
      {
        city_ID: 3165008,
        cityName: "São Tiago",
      },
      {
        city_ID: 3165107,
        cityName: "São Tomás de Aquino",
      },
      {
        city_ID: 3165305,
        cityName: "São Vicente de Minas",
      },
      {
        city_ID: 3165404,
        cityName: "Sapucaí-Mirim",
      },
      {
        city_ID: 3165503,
        cityName: "Sardoá",
      },
      {
        city_ID: 3165537,
        cityName: "Sarzedo",
      },
      {
        city_ID: 3165560,
        cityName: "Sem-Peixe",
      },
      {
        city_ID: 3165578,
        cityName: "Senador Amaral",
      },
      {
        city_ID: 3165602,
        cityName: "Senador Cortes",
      },
      {
        city_ID: 3165701,
        cityName: "Senador Firmino",
      },
      {
        city_ID: 3165800,
        cityName: "Senador José Bento",
      },
      {
        city_ID: 3165909,
        cityName: "Senador Modestino Gonçalves",
      },
      {
        city_ID: 3166006,
        cityName: "Senhora de Oliveira",
      },
      {
        city_ID: 3166105,
        cityName: "Senhora do Porto",
      },
      {
        city_ID: 3166204,
        cityName: "Senhora dos Remédios",
      },
      {
        city_ID: 3166303,
        cityName: "Sericita",
      },
      {
        city_ID: 3166402,
        cityName: "Seritinga",
      },
      {
        city_ID: 3166501,
        cityName: "Serra Azul de Minas",
      },
      {
        city_ID: 3166600,
        cityName: "Serra da Saudade",
      },
      {
        city_ID: 3166808,
        cityName: "Serra do Salitre",
      },
      {
        city_ID: 3166709,
        cityName: "Serra dos Aimorés",
      },
      {
        city_ID: 3166907,
        cityName: "Serrania",
      },
      {
        city_ID: 3166956,
        cityName: "Serranópolis de Minas",
      },
      {
        city_ID: 3167004,
        cityName: "Serranos",
      },
      {
        city_ID: 3167103,
        cityName: "Serro",
      },
      {
        city_ID: 3167202,
        cityName: "Sete Lagoas",
      },
      {
        city_ID: 3165552,
        cityName: "Setubinha",
      },
      {
        city_ID: 3167301,
        cityName: "Silveirânia",
      },
      {
        city_ID: 3167400,
        cityName: "Silvianópolis",
      },
      {
        city_ID: 3167509,
        cityName: "Simão Pereira",
      },
      {
        city_ID: 3167608,
        cityName: "Simonésia",
      },
      {
        city_ID: 3167707,
        cityName: "Sobrália",
      },
      {
        city_ID: 3167806,
        cityName: "Soledade de Minas",
      },
      {
        city_ID: 3167905,
        cityName: "Tabuleiro",
      },
      {
        city_ID: 3168002,
        cityName: "Taiobeiras",
      },
      {
        city_ID: 3168051,
        cityName: "Taparuba",
      },
      {
        city_ID: 3168101,
        cityName: "Tapira",
      },
      {
        city_ID: 3168200,
        cityName: "Tapiraí",
      },
      {
        city_ID: 3168309,
        cityName: "Taquaraçu de Minas",
      },
      {
        city_ID: 3168408,
        cityName: "Tarumirim",
      },
      {
        city_ID: 3168507,
        cityName: "Teixeiras",
      },
      {
        city_ID: 3168606,
        cityName: "Teófilo Otoni",
      },
      {
        city_ID: 3168705,
        cityName: "Timóteo",
      },
      {
        city_ID: 3168804,
        cityName: "Tiradentes",
      },
      {
        city_ID: 3168903,
        cityName: "Tiros",
      },
      {
        city_ID: 3169000,
        cityName: "Tocantins",
      },
      {
        city_ID: 3169059,
        cityName: "Tocos do Moji",
      },
      {
        city_ID: 3169109,
        cityName: "Toledo",
      },
      {
        city_ID: 3169208,
        cityName: "Tombos",
      },
      {
        city_ID: 3169307,
        cityName: "Três Corações",
      },
      {
        city_ID: 3169356,
        cityName: "Três Marias",
      },
      {
        city_ID: 3169406,
        cityName: "Três Pontas",
      },
      {
        city_ID: 3169505,
        cityName: "Tumiritinga",
      },
      {
        city_ID: 3169604,
        cityName: "Tupaciguara",
      },
      {
        city_ID: 3169703,
        cityName: "Turmalina",
      },
      {
        city_ID: 3169802,
        cityName: "Turvolândia",
      },
      {
        city_ID: 3169901,
        cityName: "Ubá",
      },
      {
        city_ID: 3170008,
        cityName: "Ubaí",
      },
      {
        city_ID: 3170057,
        cityName: "Ubaporanga",
      },
      {
        city_ID: 3170107,
        cityName: "Uberaba",
      },
      {
        city_ID: 3170206,
        cityName: "Uberlândia",
      },
      {
        city_ID: 3170305,
        cityName: "Umburatiba",
      },
      {
        city_ID: 3170404,
        cityName: "Unaí",
      },
      {
        city_ID: 3170438,
        cityName: "União de Minas",
      },
      {
        city_ID: 3170479,
        cityName: "Uruana de Minas",
      },
      {
        city_ID: 3170503,
        cityName: "Urucânia",
      },
      {
        city_ID: 3170529,
        cityName: "Urucuia",
      },
      {
        city_ID: 3170578,
        cityName: "Vargem Alegre",
      },
      {
        city_ID: 3170602,
        cityName: "Vargem Bonita",
      },
      {
        city_ID: 3170651,
        cityName: "Vargem Grande do Rio Pardo",
      },
      {
        city_ID: 3170701,
        cityName: "Varginha",
      },
      {
        city_ID: 3170750,
        cityName: "Varjão de Minas",
      },
      {
        city_ID: 3170800,
        cityName: "Várzea da Palma",
      },
      {
        city_ID: 3170909,
        cityName: "Varzelândia",
      },
      {
        city_ID: 3171006,
        cityName: "Vazante",
      },
      {
        city_ID: 3171030,
        cityName: "Verdelândia",
      },
      {
        city_ID: 3171071,
        cityName: "Veredinha",
      },
      {
        city_ID: 3171105,
        cityName: "Veríssimo",
      },
      {
        city_ID: 3171154,
        cityName: "Vermelho Novo",
      },
      {
        city_ID: 3171204,
        cityName: "Vespasiano",
      },
      {
        city_ID: 3171303,
        cityName: "Viçosa",
      },
      {
        city_ID: 3171402,
        cityName: "Vieiras",
      },
      {
        city_ID: 3171600,
        cityName: "Virgem da Lapa",
      },
      {
        city_ID: 3171709,
        cityName: "Virgínia",
      },
      {
        city_ID: 3171808,
        cityName: "Virginópolis",
      },
      {
        city_ID: 3171907,
        cityName: "Virgolândia",
      },
      {
        city_ID: 3172004,
        cityName: "Visconde do Rio Branco",
      },
      {
        city_ID: 3172103,
        cityName: "Volta Grande",
      },
      {
        city_ID: 3172202,
        cityName: "Wenceslau Braz",
      },
    ],
  },
  {
    id: 15,
    stateName: "Pará",
    abv: "PA",
    cities: [
      {
        city_ID: 1500107,
        cityName: "Abaetetuba",
      },
      {
        city_ID: 1500131,
        cityName: "Abel Figueiredo",
      },
      {
        city_ID: 1500206,
        cityName: "Acará",
      },
      {
        city_ID: 1500305,
        cityName: "Afuá",
      },
      {
        city_ID: 1500347,
        cityName: "Água Azul do Norte",
      },
      {
        city_ID: 1500404,
        cityName: "Alenquer",
      },
      {
        city_ID: 1500503,
        cityName: "Almeirim",
      },
      {
        city_ID: 1500602,
        cityName: "Altamira",
      },
      {
        city_ID: 1500701,
        cityName: "Anajás",
      },
      {
        city_ID: 1500800,
        cityName: "Ananindeua",
      },
      {
        city_ID: 1500859,
        cityName: "Anapu",
      },
      {
        city_ID: 1500909,
        cityName: "Augusto Corrêa",
      },
      {
        city_ID: 1500958,
        cityName: "Aurora do Pará",
      },
      {
        city_ID: 1501006,
        cityName: "Aveiro",
      },
      {
        city_ID: 1501105,
        cityName: "Bagre",
      },
      {
        city_ID: 1501204,
        cityName: "Baião",
      },
      {
        city_ID: 1501253,
        cityName: "Bannach",
      },
      {
        city_ID: 1501303,
        cityName: "Barcarena",
      },
      {
        city_ID: 1501402,
        cityName: "Belém",
      },
      {
        city_ID: 1501451,
        cityName: "Belterra",
      },
      {
        city_ID: 1501501,
        cityName: "Benevides",
      },
      {
        city_ID: 1501576,
        cityName: "Bom Jesus do Tocantins",
      },
      {
        city_ID: 1501600,
        cityName: "Bonito",
      },
      {
        city_ID: 1501709,
        cityName: "Bragança",
      },
      {
        city_ID: 1501725,
        cityName: "Brasil Novo",
      },
      {
        city_ID: 1501758,
        cityName: "Brejo Grande do Araguaia",
      },
      {
        city_ID: 1501782,
        cityName: "Breu Branco",
      },
      {
        city_ID: 1501808,
        cityName: "Breves",
      },
      {
        city_ID: 1501907,
        cityName: "Bujaru",
      },
      {
        city_ID: 1502004,
        cityName: "Cachoeira do Arari",
      },
      {
        city_ID: 1501956,
        cityName: "Cachoeira do Piriá",
      },
      {
        city_ID: 1502103,
        cityName: "Cametá",
      },
      {
        city_ID: 1502152,
        cityName: "Canaã dos Carajás",
      },
      {
        city_ID: 1502202,
        cityName: "Capanema",
      },
      {
        city_ID: 1502301,
        cityName: "Capitão Poço",
      },
      {
        city_ID: 1502400,
        cityName: "Castanhal",
      },
      {
        city_ID: 1502509,
        cityName: "Chaves",
      },
      {
        city_ID: 1502608,
        cityName: "Colares",
      },
      {
        city_ID: 1502707,
        cityName: "Conceição do Araguaia",
      },
      {
        city_ID: 1502756,
        cityName: "Concórdia do Pará",
      },
      {
        city_ID: 1502764,
        cityName: "Cumaru do Norte",
      },
      {
        city_ID: 1502772,
        cityName: "Curionópolis",
      },
      {
        city_ID: 1502806,
        cityName: "Curralinho",
      },
      {
        city_ID: 1502855,
        cityName: "Curuá",
      },
      {
        city_ID: 1502905,
        cityName: "Curuçá",
      },
      {
        city_ID: 1502939,
        cityName: "Dom Eliseu",
      },
      {
        city_ID: 1502954,
        cityName: "Eldorado do Carajás",
      },
      {
        city_ID: 1503002,
        cityName: "Faro",
      },
      {
        city_ID: 1503044,
        cityName: "Floresta do Araguaia",
      },
      {
        city_ID: 1503077,
        cityName: "Garrafão do Norte",
      },
      {
        city_ID: 1503093,
        cityName: "Goianésia do Pará",
      },
      {
        city_ID: 1503101,
        cityName: "Gurupá",
      },
      {
        city_ID: 1503200,
        cityName: "Igarapé-Açu",
      },
      {
        city_ID: 1503309,
        cityName: "Igarapé-Miri",
      },
      {
        city_ID: 1503408,
        cityName: "Inhangapi",
      },
      {
        city_ID: 1503457,
        cityName: "Ipixuna do Pará",
      },
      {
        city_ID: 1503507,
        cityName: "Irituia",
      },
      {
        city_ID: 1503606,
        cityName: "Itaituba",
      },
      {
        city_ID: 1503705,
        cityName: "Itupiranga",
      },
      {
        city_ID: 1503754,
        cityName: "Jacareacanga",
      },
      {
        city_ID: 1503804,
        cityName: "Jacundá",
      },
      {
        city_ID: 1503903,
        cityName: "Juruti",
      },
      {
        city_ID: 1504000,
        cityName: "Limoeiro do Ajuru",
      },
      {
        city_ID: 1504059,
        cityName: "Mãe do Rio",
      },
      {
        city_ID: 1504109,
        cityName: "Magalhães Barata",
      },
      {
        city_ID: 1504208,
        cityName: "Marabá",
      },
      {
        city_ID: 1504307,
        cityName: "Maracanã",
      },
      {
        city_ID: 1504406,
        cityName: "Marapanim",
      },
      {
        city_ID: 1504422,
        cityName: "Marituba",
      },
      {
        city_ID: 1504455,
        cityName: "Medicilândia",
      },
      {
        city_ID: 1504505,
        cityName: "Melgaço",
      },
      {
        city_ID: 1504604,
        cityName: "Mocajuba",
      },
      {
        city_ID: 1504703,
        cityName: "Moju",
      },
      {
        city_ID: 1504752,
        cityName: "Mojuí dos Campos",
      },
      {
        city_ID: 1504802,
        cityName: "Monte Alegre",
      },
      {
        city_ID: 1504901,
        cityName: "Muaná",
      },
      {
        city_ID: 1504950,
        cityName: "Nova Esperança do Piriá",
      },
      {
        city_ID: 1504976,
        cityName: "Nova Ipixuna",
      },
      {
        city_ID: 1505007,
        cityName: "Nova Timboteua",
      },
      {
        city_ID: 1505031,
        cityName: "Novo Progresso",
      },
      {
        city_ID: 1505064,
        cityName: "Novo Repartimento",
      },
      {
        city_ID: 1505106,
        cityName: "Óbidos",
      },
      {
        city_ID: 1505205,
        cityName: "Oeiras do Pará",
      },
      {
        city_ID: 1505304,
        cityName: "Oriximiná",
      },
      {
        city_ID: 1505403,
        cityName: "Ourém",
      },
      {
        city_ID: 1505437,
        cityName: "Ourilândia do Norte",
      },
      {
        city_ID: 1505486,
        cityName: "Pacajá",
      },
      {
        city_ID: 1505494,
        cityName: "Palestina do Pará",
      },
      {
        city_ID: 1505502,
        cityName: "Paragominas",
      },
      {
        city_ID: 1505536,
        cityName: "Parauapebas",
      },
      {
        city_ID: 1505551,
        cityName: "Pau D'Arco",
      },
      {
        city_ID: 1505601,
        cityName: "Peixe-Boi",
      },
      {
        city_ID: 1505635,
        cityName: "Piçarra",
      },
      {
        city_ID: 1505650,
        cityName: "Placas",
      },
      {
        city_ID: 1505700,
        cityName: "Ponta de Pedras",
      },
      {
        city_ID: 1505809,
        cityName: "Portel",
      },
      {
        city_ID: 1505908,
        cityName: "Porto de Moz",
      },
      {
        city_ID: 1506005,
        cityName: "Prainha",
      },
      {
        city_ID: 1506104,
        cityName: "Primavera",
      },
      {
        city_ID: 1506112,
        cityName: "Quatipuru",
      },
      {
        city_ID: 1506138,
        cityName: "Redenção",
      },
      {
        city_ID: 1506161,
        cityName: "Rio Maria",
      },
      {
        city_ID: 1506187,
        cityName: "Rondon do Pará",
      },
      {
        city_ID: 1506195,
        cityName: "Rurópolis",
      },
      {
        city_ID: 1506203,
        cityName: "Salinópolis",
      },
      {
        city_ID: 1506302,
        cityName: "Salvaterra",
      },
      {
        city_ID: 1506351,
        cityName: "Santa Bárbara do Pará",
      },
      {
        city_ID: 1506401,
        cityName: "Santa Cruz do Arari",
      },
      {
        city_ID: 1506500,
        cityName: "Santa Izabel do Pará",
      },
      {
        city_ID: 1506559,
        cityName: "Santa Luzia do Pará",
      },
      {
        city_ID: 1506583,
        cityName: "Santa Maria das Barreiras",
      },
      {
        city_ID: 1506609,
        cityName: "Santa Maria do Pará",
      },
      {
        city_ID: 1506708,
        cityName: "Santana do Araguaia",
      },
      {
        city_ID: 1506807,
        cityName: "Santarém",
      },
      {
        city_ID: 1506906,
        cityName: "Santarém Novo",
      },
      {
        city_ID: 1507003,
        cityName: "Santo Antônio do Tauá",
      },
      {
        city_ID: 1507102,
        cityName: "São Caetano de Odivelas",
      },
      {
        city_ID: 1507151,
        cityName: "São Domingos do Araguaia",
      },
      {
        city_ID: 1507201,
        cityName: "São Domingos do Capim",
      },
      {
        city_ID: 1507300,
        cityName: "São Félix do Xingu",
      },
      {
        city_ID: 1507409,
        cityName: "São Francisco do Pará",
      },
      {
        city_ID: 1507458,
        cityName: "São Geraldo do Araguaia",
      },
      {
        city_ID: 1507466,
        cityName: "São João da Ponta",
      },
      {
        city_ID: 1507474,
        cityName: "São João de Pirabas",
      },
      {
        city_ID: 1507508,
        cityName: "São João do Araguaia",
      },
      {
        city_ID: 1507607,
        cityName: "São Miguel do Guamá",
      },
      {
        city_ID: 1507706,
        cityName: "São Sebastião da Boa Vista",
      },
      {
        city_ID: 1507755,
        cityName: "Sapucaia",
      },
      {
        city_ID: 1507805,
        cityName: "Senador José Porfírio",
      },
      {
        city_ID: 1507904,
        cityName: "Soure",
      },
      {
        city_ID: 1507953,
        cityName: "Tailândia",
      },
      {
        city_ID: 1507961,
        cityName: "Terra Alta",
      },
      {
        city_ID: 1507979,
        cityName: "Terra Santa",
      },
      {
        city_ID: 1508001,
        cityName: "Tomé-Açu",
      },
      {
        city_ID: 1508035,
        cityName: "Tracuateua",
      },
      {
        city_ID: 1508050,
        cityName: "Trairão",
      },
      {
        city_ID: 1508084,
        cityName: "Tucumã",
      },
      {
        city_ID: 1508100,
        cityName: "Tucuruí",
      },
      {
        city_ID: 1508126,
        cityName: "Ulianópolis",
      },
      {
        city_ID: 1508159,
        cityName: "Uruará",
      },
      {
        city_ID: 1508209,
        cityName: "Vigia",
      },
      {
        city_ID: 1508308,
        cityName: "Viseu",
      },
      {
        city_ID: 1508357,
        cityName: "Vitória do Xingu",
      },
      {
        city_ID: 1508407,
        cityName: "Xinguara",
      },
    ],
  },
  {
    id: 25,
    stateName: "Paraíba",
    abv: "PB",
    cities: [
      {
        city_ID: 2500106,
        cityName: "Água Branca",
      },
      {
        city_ID: 2500205,
        cityName: "Aguiar",
      },
      {
        city_ID: 2500304,
        cityName: "Alagoa Grande",
      },
      {
        city_ID: 2500403,
        cityName: "Alagoa Nova",
      },
      {
        city_ID: 2500502,
        cityName: "Alagoinha",
      },
      {
        city_ID: 2500536,
        cityName: "Alcantil",
      },
      {
        city_ID: 2500577,
        cityName: "Algodão de Jandaíra",
      },
      {
        city_ID: 2500601,
        cityName: "Alhandra",
      },
      {
        city_ID: 2500734,
        cityName: "Amparo",
      },
      {
        city_ID: 2500775,
        cityName: "Aparecida",
      },
      {
        city_ID: 2500809,
        cityName: "Araçagi",
      },
      {
        city_ID: 2500908,
        cityName: "Arara",
      },
      {
        city_ID: 2501005,
        cityName: "Araruna",
      },
      {
        city_ID: 2501104,
        cityName: "Areia",
      },
      {
        city_ID: 2501153,
        cityName: "Areia de Baraúnas",
      },
      {
        city_ID: 2501203,
        cityName: "Areial",
      },
      {
        city_ID: 2501302,
        cityName: "Aroeiras",
      },
      {
        city_ID: 2501351,
        cityName: "Assunção",
      },
      {
        city_ID: 2501401,
        cityName: "Baía da Traição",
      },
      {
        city_ID: 2501500,
        cityName: "Bananeiras",
      },
      {
        city_ID: 2501534,
        cityName: "Baraúna",
      },
      {
        city_ID: 2501609,
        cityName: "Barra de Santa Rosa",
      },
      {
        city_ID: 2501575,
        cityName: "Barra de Santana",
      },
      {
        city_ID: 2501708,
        cityName: "Barra de São Miguel",
      },
      {
        city_ID: 2501807,
        cityName: "Bayeux",
      },
      {
        city_ID: 2501906,
        cityName: "Belém",
      },
      {
        city_ID: 2502003,
        cityName: "Belém do Brejo do Cruz",
      },
      {
        city_ID: 2502052,
        cityName: "Bernardino Batista",
      },
      {
        city_ID: 2502102,
        cityName: "Boa Ventura",
      },
      {
        city_ID: 2502151,
        cityName: "Boa Vista",
      },
      {
        city_ID: 2502201,
        cityName: "Bom Jesus",
      },
      {
        city_ID: 2502300,
        cityName: "Bom Sucesso",
      },
      {
        city_ID: 2502409,
        cityName: "Bonito de Santa Fé",
      },
      {
        city_ID: 2502508,
        cityName: "Boqueirão",
      },
      {
        city_ID: 2502706,
        cityName: "Borborema",
      },
      {
        city_ID: 2502805,
        cityName: "Brejo do Cruz",
      },
      {
        city_ID: 2502904,
        cityName: "Brejo dos Santos",
      },
      {
        city_ID: 2503001,
        cityName: "Caaporã",
      },
      {
        city_ID: 2503100,
        cityName: "Cabaceiras",
      },
      {
        city_ID: 2503209,
        cityName: "Cabedelo",
      },
      {
        city_ID: 2503308,
        cityName: "Cachoeira dos Índios",
      },
      {
        city_ID: 2503407,
        cityName: "Cacimba de Areia",
      },
      {
        city_ID: 2503506,
        cityName: "Cacimba de Dentro",
      },
      {
        city_ID: 2503555,
        cityName: "Cacimbas",
      },
      {
        city_ID: 2503605,
        cityName: "Caiçara",
      },
      {
        city_ID: 2503704,
        cityName: "Cajazeiras",
      },
      {
        city_ID: 2503753,
        cityName: "Cajazeirinhas",
      },
      {
        city_ID: 2503803,
        cityName: "Caldas Brandão",
      },
      {
        city_ID: 2503902,
        cityName: "Camalaú",
      },
      {
        city_ID: 2504009,
        cityName: "Campina Grande",
      },
      {
        city_ID: 2504033,
        cityName: "Capim",
      },
      {
        city_ID: 2504074,
        cityName: "Caraúbas",
      },
      {
        city_ID: 2504108,
        cityName: "Carrapateira",
      },
      {
        city_ID: 2504157,
        cityName: "Casserengue",
      },
      {
        city_ID: 2504207,
        cityName: "Catingueira",
      },
      {
        city_ID: 2504306,
        cityName: "Catolé do Rocha",
      },
      {
        city_ID: 2504355,
        cityName: "Caturité",
      },
      {
        city_ID: 2504405,
        cityName: "Conceição",
      },
      {
        city_ID: 2504504,
        cityName: "Condado",
      },
      {
        city_ID: 2504603,
        cityName: "Conde",
      },
      {
        city_ID: 2504702,
        cityName: "Congo",
      },
      {
        city_ID: 2504801,
        cityName: "Coremas",
      },
      {
        city_ID: 2504850,
        cityName: "Coxixola",
      },
      {
        city_ID: 2504900,
        cityName: "Cruz do Espírito Santo",
      },
      {
        city_ID: 2505006,
        cityName: "Cubati",
      },
      {
        city_ID: 2505105,
        cityName: "Cuité",
      },
      {
        city_ID: 2505238,
        cityName: "Cuité de Mamanguape",
      },
      {
        city_ID: 2505204,
        cityName: "Cuitegi",
      },
      {
        city_ID: 2505279,
        cityName: "Curral de Cima",
      },
      {
        city_ID: 2505303,
        cityName: "Curral Velho",
      },
      {
        city_ID: 2505352,
        cityName: "Damião",
      },
      {
        city_ID: 2505402,
        cityName: "Desterro",
      },
      {
        city_ID: 2505600,
        cityName: "Diamante",
      },
      {
        city_ID: 2505709,
        cityName: "Dona Inês",
      },
      {
        city_ID: 2505808,
        cityName: "Duas Estradas",
      },
      {
        city_ID: 2505907,
        cityName: "Emas",
      },
      {
        city_ID: 2506004,
        cityName: "Esperança",
      },
      {
        city_ID: 2506103,
        cityName: "Fagundes",
      },
      {
        city_ID: 2506202,
        cityName: "Frei Martinho",
      },
      {
        city_ID: 2506251,
        cityName: "Gado Bravo",
      },
      {
        city_ID: 2506301,
        cityName: "Guarabira",
      },
      {
        city_ID: 2506400,
        cityName: "Gurinhém",
      },
      {
        city_ID: 2506509,
        cityName: "Gurjão",
      },
      {
        city_ID: 2506608,
        cityName: "Ibiara",
      },
      {
        city_ID: 2502607,
        cityName: "Igaracy",
      },
      {
        city_ID: 2506707,
        cityName: "Imaculada",
      },
      {
        city_ID: 2506806,
        cityName: "Ingá",
      },
      {
        city_ID: 2506905,
        cityName: "Itabaiana",
      },
      {
        city_ID: 2507002,
        cityName: "Itaporanga",
      },
      {
        city_ID: 2507101,
        cityName: "Itapororoca",
      },
      {
        city_ID: 2507200,
        cityName: "Itatuba",
      },
      {
        city_ID: 2507309,
        cityName: "Jacaraú",
      },
      {
        city_ID: 2507408,
        cityName: "Jericó",
      },
      {
        city_ID: 2507507,
        cityName: "João Pessoa",
      },
      {
        city_ID: 2513653,
        cityName: "Joca Claudino",
      },
      {
        city_ID: 2507606,
        cityName: "Juarez Távora",
      },
      {
        city_ID: 2507705,
        cityName: "Juazeirinho",
      },
      {
        city_ID: 2507804,
        cityName: "Junco do Seridó",
      },
      {
        city_ID: 2507903,
        cityName: "Juripiranga",
      },
      {
        city_ID: 2508000,
        cityName: "Juru",
      },
      {
        city_ID: 2508109,
        cityName: "Lagoa",
      },
      {
        city_ID: 2508208,
        cityName: "Lagoa de Dentro",
      },
      {
        city_ID: 2508307,
        cityName: "Lagoa Seca",
      },
      {
        city_ID: 2508406,
        cityName: "Lastro",
      },
      {
        city_ID: 2508505,
        cityName: "Livramento",
      },
      {
        city_ID: 2508554,
        cityName: "Logradouro",
      },
      {
        city_ID: 2508604,
        cityName: "Lucena",
      },
      {
        city_ID: 2508703,
        cityName: "Mãe d'Água",
      },
      {
        city_ID: 2508802,
        cityName: "Malta",
      },
      {
        city_ID: 2508901,
        cityName: "Mamanguape",
      },
      {
        city_ID: 2509008,
        cityName: "Manaíra",
      },
      {
        city_ID: 2509057,
        cityName: "Marcação",
      },
      {
        city_ID: 2509107,
        cityName: "Mari",
      },
      {
        city_ID: 2509156,
        cityName: "Marizópolis",
      },
      {
        city_ID: 2509206,
        cityName: "Massaranduba",
      },
      {
        city_ID: 2509305,
        cityName: "Mataraca",
      },
      {
        city_ID: 2509339,
        cityName: "Matinhas",
      },
      {
        city_ID: 2509370,
        cityName: "Mato Grosso",
      },
      {
        city_ID: 2509396,
        cityName: "Maturéia",
      },
      {
        city_ID: 2509404,
        cityName: "Mogeiro",
      },
      {
        city_ID: 2509503,
        cityName: "Montadas",
      },
      {
        city_ID: 2509602,
        cityName: "Monte Horebe",
      },
      {
        city_ID: 2509701,
        cityName: "Monteiro",
      },
      {
        city_ID: 2509800,
        cityName: "Mulungu",
      },
      {
        city_ID: 2509909,
        cityName: "Natuba",
      },
      {
        city_ID: 2510006,
        cityName: "Nazarezinho",
      },
      {
        city_ID: 2510105,
        cityName: "Nova Floresta",
      },
      {
        city_ID: 2510204,
        cityName: "Nova Olinda",
      },
      {
        city_ID: 2510303,
        cityName: "Nova Palmeira",
      },
      {
        city_ID: 2510402,
        cityName: "Olho d'Água",
      },
      {
        city_ID: 2510501,
        cityName: "Olivedos",
      },
      {
        city_ID: 2510600,
        cityName: "Ouro Velho",
      },
      {
        city_ID: 2510659,
        cityName: "Parari",
      },
      {
        city_ID: 2510709,
        cityName: "Passagem",
      },
      {
        city_ID: 2510808,
        cityName: "Patos",
      },
      {
        city_ID: 2510907,
        cityName: "Paulista",
      },
      {
        city_ID: 2511004,
        cityName: "Pedra Branca",
      },
      {
        city_ID: 2511103,
        cityName: "Pedra Lavrada",
      },
      {
        city_ID: 2511202,
        cityName: "Pedras de Fogo",
      },
      {
        city_ID: 2512721,
        cityName: "Pedro Régis",
      },
      {
        city_ID: 2511301,
        cityName: "Piancó",
      },
      {
        city_ID: 2511400,
        cityName: "Picuí",
      },
      {
        city_ID: 2511509,
        cityName: "Pilar",
      },
      {
        city_ID: 2511608,
        cityName: "Pilões",
      },
      {
        city_ID: 2511707,
        cityName: "Pilõezinhos",
      },
      {
        city_ID: 2511806,
        cityName: "Pirpirituba",
      },
      {
        city_ID: 2511905,
        cityName: "Pitimbu",
      },
      {
        city_ID: 2512002,
        cityName: "Pocinhos",
      },
      {
        city_ID: 2512036,
        cityName: "Poço Dantas",
      },
      {
        city_ID: 2512077,
        cityName: "Poço de José de Moura",
      },
      {
        city_ID: 2512101,
        cityName: "Pombal",
      },
      {
        city_ID: 2512200,
        cityName: "Prata",
      },
      {
        city_ID: 2512309,
        cityName: "Princesa Isabel",
      },
      {
        city_ID: 2512408,
        cityName: "Puxinanã",
      },
      {
        city_ID: 2512507,
        cityName: "Queimadas",
      },
      {
        city_ID: 2512606,
        cityName: "Quixaba",
      },
      {
        city_ID: 2512705,
        cityName: "Remígio",
      },
      {
        city_ID: 2512747,
        cityName: "Riachão",
      },
      {
        city_ID: 2512754,
        cityName: "Riachão do Bacamarte",
      },
      {
        city_ID: 2512762,
        cityName: "Riachão do Poço",
      },
      {
        city_ID: 2512788,
        cityName: "Riacho de Santo Antônio",
      },
      {
        city_ID: 2512804,
        cityName: "Riacho dos Cavalos",
      },
      {
        city_ID: 2512903,
        cityName: "Rio Tinto",
      },
      {
        city_ID: 2513000,
        cityName: "Salgadinho",
      },
      {
        city_ID: 2513109,
        cityName: "Salgado de São Félix",
      },
      {
        city_ID: 2513158,
        cityName: "Santa Cecília",
      },
      {
        city_ID: 2513208,
        cityName: "Santa Cruz",
      },
      {
        city_ID: 2513307,
        cityName: "Santa Helena",
      },
      {
        city_ID: 2513356,
        cityName: "Santa Inês",
      },
      {
        city_ID: 2513406,
        cityName: "Santa Luzia",
      },
      {
        city_ID: 2513703,
        cityName: "Santa Rita",
      },
      {
        city_ID: 2513802,
        cityName: "Santa Teresinha",
      },
      {
        city_ID: 2513505,
        cityName: "Santana de Mangueira",
      },
      {
        city_ID: 2513604,
        cityName: "Santana dos Garrotes",
      },
      {
        city_ID: 2513851,
        cityName: "Santo André",
      },
      {
        city_ID: 2513927,
        cityName: "São Bentinho",
      },
      {
        city_ID: 2513901,
        cityName: "São Bento",
      },
      {
        city_ID: 2513968,
        cityName: "São Domingos",
      },
      {
        city_ID: 2513943,
        cityName: "São Domingos do Cariri",
      },
      {
        city_ID: 2513984,
        cityName: "São Francisco",
      },
      {
        city_ID: 2514008,
        cityName: "São João do Cariri",
      },
      {
        city_ID: 2500700,
        cityName: "São João do Rio do Peixe",
      },
      {
        city_ID: 2514107,
        cityName: "São João do Tigre",
      },
      {
        city_ID: 2514206,
        cityName: "São José da Lagoa Tapada",
      },
      {
        city_ID: 2514305,
        cityName: "São José de Caiana",
      },
      {
        city_ID: 2514404,
        cityName: "São José de Espinharas",
      },
      {
        city_ID: 2514503,
        cityName: "São José de Piranhas",
      },
      {
        city_ID: 2514552,
        cityName: "São José de Princesa",
      },
      {
        city_ID: 2514602,
        cityName: "São José do Bonfim",
      },
      {
        city_ID: 2514651,
        cityName: "São José do Brejo do Cruz",
      },
      {
        city_ID: 2514701,
        cityName: "São José do Sabugi",
      },
      {
        city_ID: 2514800,
        cityName: "São José dos Cordeiros",
      },
      {
        city_ID: 2514453,
        cityName: "São José dos Ramos",
      },
      {
        city_ID: 2514909,
        cityName: "São Mamede",
      },
      {
        city_ID: 2515005,
        cityName: "São Miguel de Taipu",
      },
      {
        city_ID: 2515104,
        cityName: "São Sebastião de Lagoa de Roça",
      },
      {
        city_ID: 2515203,
        cityName: "São Sebastião do Umbuzeiro",
      },
      {
        city_ID: 2515401,
        cityName: "São Vicente do Seridó",
      },
      {
        city_ID: 2515302,
        cityName: "Sapé",
      },
      {
        city_ID: 2515500,
        cityName: "Serra Branca",
      },
      {
        city_ID: 2515609,
        cityName: "Serra da Raiz",
      },
      {
        city_ID: 2515708,
        cityName: "Serra Grande",
      },
      {
        city_ID: 2515807,
        cityName: "Serra Redonda",
      },
      {
        city_ID: 2515906,
        cityName: "Serraria",
      },
      {
        city_ID: 2515930,
        cityName: "Sertãozinho",
      },
      {
        city_ID: 2515971,
        cityName: "Sobrado",
      },
      {
        city_ID: 2516003,
        cityName: "Solânea",
      },
      {
        city_ID: 2516102,
        cityName: "Soledade",
      },
      {
        city_ID: 2516151,
        cityName: "Sossêgo",
      },
      {
        city_ID: 2516201,
        cityName: "Sousa",
      },
      {
        city_ID: 2516300,
        cityName: "Sumé",
      },
      {
        city_ID: 2516409,
        cityName: "Tacima",
      },
      {
        city_ID: 2516508,
        cityName: "Taperoá",
      },
      {
        city_ID: 2516607,
        cityName: "Tavares",
      },
      {
        city_ID: 2516706,
        cityName: "Teixeira",
      },
      {
        city_ID: 2516755,
        cityName: "Tenório",
      },
      {
        city_ID: 2516805,
        cityName: "Triunfo",
      },
      {
        city_ID: 2516904,
        cityName: "Uiraúna",
      },
      {
        city_ID: 2517001,
        cityName: "Umbuzeiro",
      },
      {
        city_ID: 2517100,
        cityName: "Várzea",
      },
      {
        city_ID: 2517209,
        cityName: "Vieirópolis",
      },
      {
        city_ID: 2505501,
        cityName: "Vista Serrana",
      },
      {
        city_ID: 2517407,
        cityName: "Zabelê",
      },
    ],
  },
  {
    id: 41,
    stateName: "Paraná",
    abv: "PR",
    cities: [
      {
        city_ID: 4100103,
        cityName: "Abatiá",
      },
      {
        city_ID: 4100202,
        cityName: "Adrianópolis",
      },
      {
        city_ID: 4100301,
        cityName: "Agudos do Sul",
      },
      {
        city_ID: 4100400,
        cityName: "Almirante Tamandaré",
      },
      {
        city_ID: 4100459,
        cityName: "Altamira do Paraná",
      },
      {
        city_ID: 4128625,
        cityName: "Alto Paraíso",
      },
      {
        city_ID: 4100608,
        cityName: "Alto Paraná",
      },
      {
        city_ID: 4100707,
        cityName: "Alto Piquiri",
      },
      {
        city_ID: 4100509,
        cityName: "Altônia",
      },
      {
        city_ID: 4100806,
        cityName: "Alvorada do Sul",
      },
      {
        city_ID: 4100905,
        cityName: "Amaporã",
      },
      {
        city_ID: 4101002,
        cityName: "Ampére",
      },
      {
        city_ID: 4101051,
        cityName: "Anahy",
      },
      {
        city_ID: 4101101,
        cityName: "Andirá",
      },
      {
        city_ID: 4101150,
        cityName: "Ângulo",
      },
      {
        city_ID: 4101200,
        cityName: "Antonina",
      },
      {
        city_ID: 4101309,
        cityName: "Antônio Olinto",
      },
      {
        city_ID: 4101408,
        cityName: "Apucarana",
      },
      {
        city_ID: 4101507,
        cityName: "Arapongas",
      },
      {
        city_ID: 4101606,
        cityName: "Arapoti",
      },
      {
        city_ID: 4101655,
        cityName: "Arapuã",
      },
      {
        city_ID: 4101705,
        cityName: "Araruna",
      },
      {
        city_ID: 4101804,
        cityName: "Araucária",
      },
      {
        city_ID: 4101853,
        cityName: "Ariranha do Ivaí",
      },
      {
        city_ID: 4101903,
        cityName: "Assaí",
      },
      {
        city_ID: 4102000,
        cityName: "Assis Chateaubriand",
      },
      {
        city_ID: 4102109,
        cityName: "Astorga",
      },
      {
        city_ID: 4102208,
        cityName: "Atalaia",
      },
      {
        city_ID: 4102307,
        cityName: "Balsa Nova",
      },
      {
        city_ID: 4102406,
        cityName: "Bandeirantes",
      },
      {
        city_ID: 4102505,
        cityName: "Barbosa Ferraz",
      },
      {
        city_ID: 4102703,
        cityName: "Barra do Jacaré",
      },
      {
        city_ID: 4102604,
        cityName: "Barracão",
      },
      {
        city_ID: 4102752,
        cityName: "Bela Vista da Caroba",
      },
      {
        city_ID: 4102802,
        cityName: "Bela Vista do Paraíso",
      },
      {
        city_ID: 4102901,
        cityName: "Bituruna",
      },
      {
        city_ID: 4103008,
        cityName: "Boa Esperança",
      },
      {
        city_ID: 4103024,
        cityName: "Boa Esperança do Iguaçu",
      },
      {
        city_ID: 4103040,
        cityName: "Boa Ventura de São Roque",
      },
      {
        city_ID: 4103057,
        cityName: "Boa Vista da Aparecida",
      },
      {
        city_ID: 4103107,
        cityName: "Bocaiúva do Sul",
      },
      {
        city_ID: 4103156,
        cityName: "Bom Jesus do Sul",
      },
      {
        city_ID: 4103206,
        cityName: "Bom Sucesso",
      },
      {
        city_ID: 4103222,
        cityName: "Bom Sucesso do Sul",
      },
      {
        city_ID: 4103305,
        cityName: "Borrazópolis",
      },
      {
        city_ID: 4103354,
        cityName: "Braganey",
      },
      {
        city_ID: 4103370,
        cityName: "Brasilândia do Sul",
      },
      {
        city_ID: 4103404,
        cityName: "Cafeara",
      },
      {
        city_ID: 4103453,
        cityName: "Cafelândia",
      },
      {
        city_ID: 4103479,
        cityName: "Cafezal do Sul",
      },
      {
        city_ID: 4103503,
        cityName: "Califórnia",
      },
      {
        city_ID: 4103602,
        cityName: "Cambará",
      },
      {
        city_ID: 4103701,
        cityName: "Cambé",
      },
      {
        city_ID: 4103800,
        cityName: "Cambira",
      },
      {
        city_ID: 4103909,
        cityName: "Campina da Lagoa",
      },
      {
        city_ID: 4103958,
        cityName: "Campina do Simão",
      },
      {
        city_ID: 4104006,
        cityName: "Campina Grande do Sul",
      },
      {
        city_ID: 4104055,
        cityName: "Campo Bonito",
      },
      {
        city_ID: 4104105,
        cityName: "Campo do Tenente",
      },
      {
        city_ID: 4104204,
        cityName: "Campo Largo",
      },
      {
        city_ID: 4104253,
        cityName: "Campo Magro",
      },
      {
        city_ID: 4104303,
        cityName: "Campo Mourão",
      },
      {
        city_ID: 4104402,
        cityName: "Cândido de Abreu",
      },
      {
        city_ID: 4104428,
        cityName: "Candói",
      },
      {
        city_ID: 4104451,
        cityName: "Cantagalo",
      },
      {
        city_ID: 4104501,
        cityName: "Capanema",
      },
      {
        city_ID: 4104600,
        cityName: "Capitão Leônidas Marques",
      },
      {
        city_ID: 4104659,
        cityName: "Carambeí",
      },
      {
        city_ID: 4104709,
        cityName: "Carlópolis",
      },
      {
        city_ID: 4104808,
        cityName: "Cascavel",
      },
      {
        city_ID: 4104907,
        cityName: "Castro",
      },
      {
        city_ID: 4105003,
        cityName: "Catanduvas",
      },
      {
        city_ID: 4105102,
        cityName: "Centenário do Sul",
      },
      {
        city_ID: 4105201,
        cityName: "Cerro Azul",
      },
      {
        city_ID: 4105300,
        cityName: "Céu Azul",
      },
      {
        city_ID: 4105409,
        cityName: "Chopinzinho",
      },
      {
        city_ID: 4105508,
        cityName: "Cianorte",
      },
      {
        city_ID: 4105607,
        cityName: "Cidade Gaúcha",
      },
      {
        city_ID: 4105706,
        cityName: "Clevelândia",
      },
      {
        city_ID: 4105805,
        cityName: "Colombo",
      },
      {
        city_ID: 4105904,
        cityName: "Colorado",
      },
      {
        city_ID: 4106001,
        cityName: "Congonhinhas",
      },
      {
        city_ID: 4106100,
        cityName: "Conselheiro Mairinck",
      },
      {
        city_ID: 4106209,
        cityName: "Contenda",
      },
      {
        city_ID: 4106308,
        cityName: "Corbélia",
      },
      {
        city_ID: 4106407,
        cityName: "Cornélio Procópio",
      },
      {
        city_ID: 4106456,
        cityName: "Coronel Domingos Soares",
      },
      {
        city_ID: 4106506,
        cityName: "Coronel Vivida",
      },
      {
        city_ID: 4106555,
        cityName: "Corumbataí do Sul",
      },
      {
        city_ID: 4106803,
        cityName: "Cruz Machado",
      },
      {
        city_ID: 4106571,
        cityName: "Cruzeiro do Iguaçu",
      },
      {
        city_ID: 4106605,
        cityName: "Cruzeiro do Oeste",
      },
      {
        city_ID: 4106704,
        cityName: "Cruzeiro do Sul",
      },
      {
        city_ID: 4106852,
        cityName: "Cruzmaltina",
      },
      {
        city_ID: 4106902,
        cityName: "Curitiba",
      },
      {
        city_ID: 4107009,
        cityName: "Curiúva",
      },
      {
        city_ID: 4107108,
        cityName: "Diamante do Norte",
      },
      {
        city_ID: 4107124,
        cityName: "Diamante do Sul",
      },
      {
        city_ID: 4107157,
        cityName: "Diamante D'Oeste",
      },
      {
        city_ID: 4107207,
        cityName: "Dois Vizinhos",
      },
      {
        city_ID: 4107256,
        cityName: "Douradina",
      },
      {
        city_ID: 4107306,
        cityName: "Doutor Camargo",
      },
      {
        city_ID: 4128633,
        cityName: "Doutor Ulysses",
      },
      {
        city_ID: 4107405,
        cityName: "Enéas Marques",
      },
      {
        city_ID: 4107504,
        cityName: "Engenheiro Beltrão",
      },
      {
        city_ID: 4107538,
        cityName: "Entre Rios do Oeste",
      },
      {
        city_ID: 4107520,
        cityName: "Esperança Nova",
      },
      {
        city_ID: 4107546,
        cityName: "Espigão Alto do Iguaçu",
      },
      {
        city_ID: 4107553,
        cityName: "Farol",
      },
      {
        city_ID: 4107603,
        cityName: "Faxinal",
      },
      {
        city_ID: 4107652,
        cityName: "Fazenda Rio Grande",
      },
      {
        city_ID: 4107702,
        cityName: "Fênix",
      },
      {
        city_ID: 4107736,
        cityName: "Fernandes Pinheiro",
      },
      {
        city_ID: 4107751,
        cityName: "Figueira",
      },
      {
        city_ID: 4107850,
        cityName: "Flor da Serra do Sul",
      },
      {
        city_ID: 4107801,
        cityName: "Floraí",
      },
      {
        city_ID: 4107900,
        cityName: "Floresta",
      },
      {
        city_ID: 4108007,
        cityName: "Florestópolis",
      },
      {
        city_ID: 4108106,
        cityName: "Flórida",
      },
      {
        city_ID: 4108205,
        cityName: "Formosa do Oeste",
      },
      {
        city_ID: 4108304,
        cityName: "Foz do Iguaçu",
      },
      {
        city_ID: 4108452,
        cityName: "Foz do Jordão",
      },
      {
        city_ID: 4108320,
        cityName: "Francisco Alves",
      },
      {
        city_ID: 4108403,
        cityName: "Francisco Beltrão",
      },
      {
        city_ID: 4108502,
        cityName: "General Carneiro",
      },
      {
        city_ID: 4108551,
        cityName: "Godoy Moreira",
      },
      {
        city_ID: 4108601,
        cityName: "Goioerê",
      },
      {
        city_ID: 4108650,
        cityName: "Goioxim",
      },
      {
        city_ID: 4108700,
        cityName: "Grandes Rios",
      },
      {
        city_ID: 4108809,
        cityName: "Guaíra",
      },
      {
        city_ID: 4108908,
        cityName: "Guairaçá",
      },
      {
        city_ID: 4108957,
        cityName: "Guamiranga",
      },
      {
        city_ID: 4109005,
        cityName: "Guapirama",
      },
      {
        city_ID: 4109104,
        cityName: "Guaporema",
      },
      {
        city_ID: 4109203,
        cityName: "Guaraci",
      },
      {
        city_ID: 4109302,
        cityName: "Guaraniaçu",
      },
      {
        city_ID: 4109401,
        cityName: "Guarapuava",
      },
      {
        city_ID: 4109500,
        cityName: "Guaraqueçaba",
      },
      {
        city_ID: 4109609,
        cityName: "Guaratuba",
      },
      {
        city_ID: 4109658,
        cityName: "Honório Serpa",
      },
      {
        city_ID: 4109708,
        cityName: "Ibaiti",
      },
      {
        city_ID: 4109757,
        cityName: "Ibema",
      },
      {
        city_ID: 4109807,
        cityName: "Ibiporã",
      },
      {
        city_ID: 4109906,
        cityName: "Icaraíma",
      },
      {
        city_ID: 4110003,
        cityName: "Iguaraçu",
      },
      {
        city_ID: 4110052,
        cityName: "Iguatu",
      },
      {
        city_ID: 4110078,
        cityName: "Imbaú",
      },
      {
        city_ID: 4110102,
        cityName: "Imbituva",
      },
      {
        city_ID: 4110201,
        cityName: "Inácio Martins",
      },
      {
        city_ID: 4110300,
        cityName: "Inajá",
      },
      {
        city_ID: 4110409,
        cityName: "Indianópolis",
      },
      {
        city_ID: 4110508,
        cityName: "Ipiranga",
      },
      {
        city_ID: 4110607,
        cityName: "Iporã",
      },
      {
        city_ID: 4110656,
        cityName: "Iracema do Oeste",
      },
      {
        city_ID: 4110706,
        cityName: "Irati",
      },
      {
        city_ID: 4110805,
        cityName: "Iretama",
      },
      {
        city_ID: 4110904,
        cityName: "Itaguajé",
      },
      {
        city_ID: 4110953,
        cityName: "Itaipulândia",
      },
      {
        city_ID: 4111001,
        cityName: "Itambaracá",
      },
      {
        city_ID: 4111100,
        cityName: "Itambé",
      },
      {
        city_ID: 4111209,
        cityName: "Itapejara d'Oeste",
      },
      {
        city_ID: 4111258,
        cityName: "Itaperuçu",
      },
      {
        city_ID: 4111308,
        cityName: "Itaúna do Sul",
      },
      {
        city_ID: 4111407,
        cityName: "Ivaí",
      },
      {
        city_ID: 4111506,
        cityName: "Ivaiporã",
      },
      {
        city_ID: 4111555,
        cityName: "Ivaté",
      },
      {
        city_ID: 4111605,
        cityName: "Ivatuba",
      },
      {
        city_ID: 4111704,
        cityName: "Jaboti",
      },
      {
        city_ID: 4111803,
        cityName: "Jacarezinho",
      },
      {
        city_ID: 4111902,
        cityName: "Jaguapitã",
      },
      {
        city_ID: 4112009,
        cityName: "Jaguariaíva",
      },
      {
        city_ID: 4112108,
        cityName: "Jandaia do Sul",
      },
      {
        city_ID: 4112207,
        cityName: "Janiópolis",
      },
      {
        city_ID: 4112306,
        cityName: "Japira",
      },
      {
        city_ID: 4112405,
        cityName: "Japurá",
      },
      {
        city_ID: 4112504,
        cityName: "Jardim Alegre",
      },
      {
        city_ID: 4112603,
        cityName: "Jardim Olinda",
      },
      {
        city_ID: 4112702,
        cityName: "Jataizinho",
      },
      {
        city_ID: 4112751,
        cityName: "Jesuítas",
      },
      {
        city_ID: 4112801,
        cityName: "Joaquim Távora",
      },
      {
        city_ID: 4112900,
        cityName: "Jundiaí do Sul",
      },
      {
        city_ID: 4112959,
        cityName: "Juranda",
      },
      {
        city_ID: 4113007,
        cityName: "Jussara",
      },
      {
        city_ID: 4113106,
        cityName: "Kaloré",
      },
      {
        city_ID: 4113205,
        cityName: "Lapa",
      },
      {
        city_ID: 4113254,
        cityName: "Laranjal",
      },
      {
        city_ID: 4113304,
        cityName: "Laranjeiras do Sul",
      },
      {
        city_ID: 4113403,
        cityName: "Leópolis",
      },
      {
        city_ID: 4113429,
        cityName: "Lidianópolis",
      },
      {
        city_ID: 4113452,
        cityName: "Lindoeste",
      },
      {
        city_ID: 4113502,
        cityName: "Loanda",
      },
      {
        city_ID: 4113601,
        cityName: "Lobato",
      },
      {
        city_ID: 4113700,
        cityName: "Londrina",
      },
      {
        city_ID: 4113734,
        cityName: "Luiziana",
      },
      {
        city_ID: 4113759,
        cityName: "Lunardelli",
      },
      {
        city_ID: 4113809,
        cityName: "Lupionópolis",
      },
      {
        city_ID: 4113908,
        cityName: "Mallet",
      },
      {
        city_ID: 4114005,
        cityName: "Mamborê",
      },
      {
        city_ID: 4114104,
        cityName: "Mandaguaçu",
      },
      {
        city_ID: 4114203,
        cityName: "Mandaguari",
      },
      {
        city_ID: 4114302,
        cityName: "Mandirituba",
      },
      {
        city_ID: 4114351,
        cityName: "Manfrinópolis",
      },
      {
        city_ID: 4114401,
        cityName: "Mangueirinha",
      },
      {
        city_ID: 4114500,
        cityName: "Manoel Ribas",
      },
      {
        city_ID: 4114609,
        cityName: "Marechal Cândido Rondon",
      },
      {
        city_ID: 4114708,
        cityName: "Maria Helena",
      },
      {
        city_ID: 4114807,
        cityName: "Marialva",
      },
      {
        city_ID: 4114906,
        cityName: "Marilândia do Sul",
      },
      {
        city_ID: 4115002,
        cityName: "Marilena",
      },
      {
        city_ID: 4115101,
        cityName: "Mariluz",
      },
      {
        city_ID: 4115200,
        cityName: "Maringá",
      },
      {
        city_ID: 4115309,
        cityName: "Mariópolis",
      },
      {
        city_ID: 4115358,
        cityName: "Maripá",
      },
      {
        city_ID: 4115408,
        cityName: "Marmeleiro",
      },
      {
        city_ID: 4115457,
        cityName: "Marquinho",
      },
      {
        city_ID: 4115507,
        cityName: "Marumbi",
      },
      {
        city_ID: 4115606,
        cityName: "Matelândia",
      },
      {
        city_ID: 4115705,
        cityName: "Matinhos",
      },
      {
        city_ID: 4115739,
        cityName: "Mato Rico",
      },
      {
        city_ID: 4115754,
        cityName: "Mauá da Serra",
      },
      {
        city_ID: 4115804,
        cityName: "Medianeira",
      },
      {
        city_ID: 4115853,
        cityName: "Mercedes",
      },
      {
        city_ID: 4115903,
        cityName: "Mirador",
      },
      {
        city_ID: 4116000,
        cityName: "Miraselva",
      },
      {
        city_ID: 4116059,
        cityName: "Missal",
      },
      {
        city_ID: 4116109,
        cityName: "Moreira Sales",
      },
      {
        city_ID: 4116208,
        cityName: "Morretes",
      },
      {
        city_ID: 4116307,
        cityName: "Munhoz de Melo",
      },
      {
        city_ID: 4116406,
        cityName: "Nossa Senhora das Graças",
      },
      {
        city_ID: 4116505,
        cityName: "Nova Aliança do Ivaí",
      },
      {
        city_ID: 4116604,
        cityName: "Nova América da Colina",
      },
      {
        city_ID: 4116703,
        cityName: "Nova Aurora",
      },
      {
        city_ID: 4116802,
        cityName: "Nova Cantu",
      },
      {
        city_ID: 4116901,
        cityName: "Nova Esperança",
      },
      {
        city_ID: 4116950,
        cityName: "Nova Esperança do Sudoeste",
      },
      {
        city_ID: 4117008,
        cityName: "Nova Fátima",
      },
      {
        city_ID: 4117057,
        cityName: "Nova Laranjeiras",
      },
      {
        city_ID: 4117107,
        cityName: "Nova Londrina",
      },
      {
        city_ID: 4117206,
        cityName: "Nova Olímpia",
      },
      {
        city_ID: 4117255,
        cityName: "Nova Prata do Iguaçu",
      },
      {
        city_ID: 4117214,
        cityName: "Nova Santa Bárbara",
      },
      {
        city_ID: 4117222,
        cityName: "Nova Santa Rosa",
      },
      {
        city_ID: 4117271,
        cityName: "Nova Tebas",
      },
      {
        city_ID: 4117297,
        cityName: "Novo Itacolomi",
      },
      {
        city_ID: 4117305,
        cityName: "Ortigueira",
      },
      {
        city_ID: 4117404,
        cityName: "Ourizona",
      },
      {
        city_ID: 4117453,
        cityName: "Ouro Verde do Oeste",
      },
      {
        city_ID: 4117503,
        cityName: "Paiçandu",
      },
      {
        city_ID: 4117602,
        cityName: "Palmas",
      },
      {
        city_ID: 4117701,
        cityName: "Palmeira",
      },
      {
        city_ID: 4117800,
        cityName: "Palmital",
      },
      {
        city_ID: 4117909,
        cityName: "Palotina",
      },
      {
        city_ID: 4118006,
        cityName: "Paraíso do Norte",
      },
      {
        city_ID: 4118105,
        cityName: "Paranacity",
      },
      {
        city_ID: 4118204,
        cityName: "Paranaguá",
      },
      {
        city_ID: 4118303,
        cityName: "Paranapoema",
      },
      {
        city_ID: 4118402,
        cityName: "Paranavaí",
      },
      {
        city_ID: 4118451,
        cityName: "Pato Bragado",
      },
      {
        city_ID: 4118501,
        cityName: "Pato Branco",
      },
      {
        city_ID: 4118600,
        cityName: "Paula Freitas",
      },
      {
        city_ID: 4118709,
        cityName: "Paulo Frontin",
      },
      {
        city_ID: 4118808,
        cityName: "Peabiru",
      },
      {
        city_ID: 4118857,
        cityName: "Perobal",
      },
      {
        city_ID: 4118907,
        cityName: "Pérola",
      },
      {
        city_ID: 4119004,
        cityName: "Pérola d'Oeste",
      },
      {
        city_ID: 4119103,
        cityName: "Piên",
      },
      {
        city_ID: 4119152,
        cityName: "Pinhais",
      },
      {
        city_ID: 4119251,
        cityName: "Pinhal de São Bento",
      },
      {
        city_ID: 4119202,
        cityName: "Pinhalão",
      },
      {
        city_ID: 4119301,
        cityName: "Pinhão",
      },
      {
        city_ID: 4119400,
        cityName: "Piraí do Sul",
      },
      {
        city_ID: 4119509,
        cityName: "Piraquara",
      },
      {
        city_ID: 4119608,
        cityName: "Pitanga",
      },
      {
        city_ID: 4119657,
        cityName: "Pitangueiras",
      },
      {
        city_ID: 4119707,
        cityName: "Planaltina do Paraná",
      },
      {
        city_ID: 4119806,
        cityName: "Planalto",
      },
      {
        city_ID: 4119905,
        cityName: "Ponta Grossa",
      },
      {
        city_ID: 4119954,
        cityName: "Pontal do Paraná",
      },
      {
        city_ID: 4120002,
        cityName: "Porecatu",
      },
      {
        city_ID: 4120101,
        cityName: "Porto Amazonas",
      },
      {
        city_ID: 4120150,
        cityName: "Porto Barreiro",
      },
      {
        city_ID: 4120200,
        cityName: "Porto Rico",
      },
      {
        city_ID: 4120309,
        cityName: "Porto Vitória",
      },
      {
        city_ID: 4120333,
        cityName: "Prado Ferreira",
      },
      {
        city_ID: 4120358,
        cityName: "Pranchita",
      },
      {
        city_ID: 4120408,
        cityName: "Presidente Castelo Branco",
      },
      {
        city_ID: 4120507,
        cityName: "Primeiro de Maio",
      },
      {
        city_ID: 4120606,
        cityName: "Prudentópolis",
      },
      {
        city_ID: 4120655,
        cityName: "Quarto Centenário",
      },
      {
        city_ID: 4120705,
        cityName: "Quatiguá",
      },
      {
        city_ID: 4120804,
        cityName: "Quatro Barras",
      },
      {
        city_ID: 4120853,
        cityName: "Quatro Pontes",
      },
      {
        city_ID: 4120903,
        cityName: "Quedas do Iguaçu",
      },
      {
        city_ID: 4121000,
        cityName: "Querência do Norte",
      },
      {
        city_ID: 4121109,
        cityName: "Quinta do Sol",
      },
      {
        city_ID: 4121208,
        cityName: "Quitandinha",
      },
      {
        city_ID: 4121257,
        cityName: "Ramilândia",
      },
      {
        city_ID: 4121307,
        cityName: "Rancho Alegre",
      },
      {
        city_ID: 4121356,
        cityName: "Rancho Alegre D'Oeste",
      },
      {
        city_ID: 4121406,
        cityName: "Realeza",
      },
      {
        city_ID: 4121505,
        cityName: "Rebouças",
      },
      {
        city_ID: 4121604,
        cityName: "Renascença",
      },
      {
        city_ID: 4121703,
        cityName: "Reserva",
      },
      {
        city_ID: 4121752,
        cityName: "Reserva do Iguaçu",
      },
      {
        city_ID: 4121802,
        cityName: "Ribeirão Claro",
      },
      {
        city_ID: 4121901,
        cityName: "Ribeirão do Pinhal",
      },
      {
        city_ID: 4122008,
        cityName: "Rio Azul",
      },
      {
        city_ID: 4122107,
        cityName: "Rio Bom",
      },
      {
        city_ID: 4122156,
        cityName: "Rio Bonito do Iguaçu",
      },
      {
        city_ID: 4122172,
        cityName: "Rio Branco do Ivaí",
      },
      {
        city_ID: 4122206,
        cityName: "Rio Branco do Sul",
      },
      {
        city_ID: 4122305,
        cityName: "Rio Negro",
      },
      {
        city_ID: 4122404,
        cityName: "Rolândia",
      },
      {
        city_ID: 4122503,
        cityName: "Roncador",
      },
      {
        city_ID: 4122602,
        cityName: "Rondon",
      },
      {
        city_ID: 4122651,
        cityName: "Rosário do Ivaí",
      },
      {
        city_ID: 4122701,
        cityName: "Sabáudia",
      },
      {
        city_ID: 4122800,
        cityName: "Salgado Filho",
      },
      {
        city_ID: 4122909,
        cityName: "Salto do Itararé",
      },
      {
        city_ID: 4123006,
        cityName: "Salto do Lontra",
      },
      {
        city_ID: 4123105,
        cityName: "Santa Amélia",
      },
      {
        city_ID: 4123204,
        cityName: "Santa Cecília do Pavão",
      },
      {
        city_ID: 4123303,
        cityName: "Santa Cruz de Monte Castelo",
      },
      {
        city_ID: 4123402,
        cityName: "Santa Fé",
      },
      {
        city_ID: 4123501,
        cityName: "Santa Helena",
      },
      {
        city_ID: 4123600,
        cityName: "Santa Inês",
      },
      {
        city_ID: 4123709,
        cityName: "Santa Isabel do Ivaí",
      },
      {
        city_ID: 4123808,
        cityName: "Santa Izabel do Oeste",
      },
      {
        city_ID: 4123824,
        cityName: "Santa Lúcia",
      },
      {
        city_ID: 4123857,
        cityName: "Santa Maria do Oeste",
      },
      {
        city_ID: 4123907,
        cityName: "Santa Mariana",
      },
      {
        city_ID: 4123956,
        cityName: "Santa Mônica",
      },
      {
        city_ID: 4124020,
        cityName: "Santa Tereza do Oeste",
      },
      {
        city_ID: 4124053,
        cityName: "Santa Terezinha de Itaipu",
      },
      {
        city_ID: 4124004,
        cityName: "Santana do Itararé",
      },
      {
        city_ID: 4124103,
        cityName: "Santo Antônio da Platina",
      },
      {
        city_ID: 4124202,
        cityName: "Santo Antônio do Caiuá",
      },
      {
        city_ID: 4124301,
        cityName: "Santo Antônio do Paraíso",
      },
      {
        city_ID: 4124400,
        cityName: "Santo Antônio do Sudoeste",
      },
      {
        city_ID: 4124509,
        cityName: "Santo Inácio",
      },
      {
        city_ID: 4124608,
        cityName: "São Carlos do Ivaí",
      },
      {
        city_ID: 4124707,
        cityName: "São Jerônimo da Serra",
      },
      {
        city_ID: 4124806,
        cityName: "São João",
      },
      {
        city_ID: 4124905,
        cityName: "São João do Caiuá",
      },
      {
        city_ID: 4125001,
        cityName: "São João do Ivaí",
      },
      {
        city_ID: 4125100,
        cityName: "São João do Triunfo",
      },
      {
        city_ID: 4125308,
        cityName: "São Jorge do Ivaí",
      },
      {
        city_ID: 4125357,
        cityName: "São Jorge do Patrocínio",
      },
      {
        city_ID: 4125209,
        cityName: "São Jorge d'Oeste",
      },
      {
        city_ID: 4125407,
        cityName: "São José da Boa Vista",
      },
      {
        city_ID: 4125456,
        cityName: "São José das Palmeiras",
      },
      {
        city_ID: 4125506,
        cityName: "São José dos Pinhais",
      },
      {
        city_ID: 4125555,
        cityName: "São Manoel do Paraná",
      },
      {
        city_ID: 4125605,
        cityName: "São Mateus do Sul",
      },
      {
        city_ID: 4125704,
        cityName: "São Miguel do Iguaçu",
      },
      {
        city_ID: 4125753,
        cityName: "São Pedro do Iguaçu",
      },
      {
        city_ID: 4125803,
        cityName: "São Pedro do Ivaí",
      },
      {
        city_ID: 4125902,
        cityName: "São Pedro do Paraná",
      },
      {
        city_ID: 4126009,
        cityName: "São Sebastião da Amoreira",
      },
      {
        city_ID: 4126108,
        cityName: "São Tomé",
      },
      {
        city_ID: 4126207,
        cityName: "Sapopema",
      },
      {
        city_ID: 4126256,
        cityName: "Sarandi",
      },
      {
        city_ID: 4126272,
        cityName: "Saudade do Iguaçu",
      },
      {
        city_ID: 4126306,
        cityName: "Sengés",
      },
      {
        city_ID: 4126355,
        cityName: "Serranópolis do Iguaçu",
      },
      {
        city_ID: 4126405,
        cityName: "Sertaneja",
      },
      {
        city_ID: 4126504,
        cityName: "Sertanópolis",
      },
      {
        city_ID: 4126603,
        cityName: "Siqueira Campos",
      },
      {
        city_ID: 4126652,
        cityName: "Sulina",
      },
      {
        city_ID: 4126678,
        cityName: "Tamarana",
      },
      {
        city_ID: 4126702,
        cityName: "Tamboara",
      },
      {
        city_ID: 4126801,
        cityName: "Tapejara",
      },
      {
        city_ID: 4126900,
        cityName: "Tapira",
      },
      {
        city_ID: 4127007,
        cityName: "Teixeira Soares",
      },
      {
        city_ID: 4127106,
        cityName: "Telêmaco Borba",
      },
      {
        city_ID: 4127205,
        cityName: "Terra Boa",
      },
      {
        city_ID: 4127304,
        cityName: "Terra Rica",
      },
      {
        city_ID: 4127403,
        cityName: "Terra Roxa",
      },
      {
        city_ID: 4127502,
        cityName: "Tibagi",
      },
      {
        city_ID: 4127601,
        cityName: "Tijucas do Sul",
      },
      {
        city_ID: 4127700,
        cityName: "Toledo",
      },
      {
        city_ID: 4127809,
        cityName: "Tomazina",
      },
      {
        city_ID: 4127858,
        cityName: "Três Barras do Paraná",
      },
      {
        city_ID: 4127882,
        cityName: "Tunas do Paraná",
      },
      {
        city_ID: 4127908,
        cityName: "Tuneiras do Oeste",
      },
      {
        city_ID: 4127957,
        cityName: "Tupãssi",
      },
      {
        city_ID: 4127965,
        cityName: "Turvo",
      },
      {
        city_ID: 4128005,
        cityName: "Ubiratã",
      },
      {
        city_ID: 4128104,
        cityName: "Umuarama",
      },
      {
        city_ID: 4128203,
        cityName: "União da Vitória",
      },
      {
        city_ID: 4128302,
        cityName: "Uniflor",
      },
      {
        city_ID: 4128401,
        cityName: "Uraí",
      },
      {
        city_ID: 4128534,
        cityName: "Ventania",
      },
      {
        city_ID: 4128559,
        cityName: "Vera Cruz do Oeste",
      },
      {
        city_ID: 4128609,
        cityName: "Verê",
      },
      {
        city_ID: 4128658,
        cityName: "Virmond",
      },
      {
        city_ID: 4128708,
        cityName: "Vitorino",
      },
      {
        city_ID: 4128500,
        cityName: "Wenceslau Braz",
      },
      {
        city_ID: 4128807,
        cityName: "Xambrê",
      },
    ],
  },
  {
    id: 26,
    stateName: "Pernambuco",
    abv: "PE",
    cities: [
      {
        city_ID: 2600054,
        cityName: "Abreu e Lima",
      },
      {
        city_ID: 2600104,
        cityName: "Afogados da Ingazeira",
      },
      {
        city_ID: 2600203,
        cityName: "Afrânio",
      },
      {
        city_ID: 2600302,
        cityName: "Agrestina",
      },
      {
        city_ID: 2600401,
        cityName: "Água Preta",
      },
      {
        city_ID: 2600500,
        cityName: "Águas Belas",
      },
      {
        city_ID: 2600609,
        cityName: "Alagoinha",
      },
      {
        city_ID: 2600708,
        cityName: "Aliança",
      },
      {
        city_ID: 2600807,
        cityName: "Altinho",
      },
      {
        city_ID: 2600906,
        cityName: "Amaraji",
      },
      {
        city_ID: 2601003,
        cityName: "Angelim",
      },
      {
        city_ID: 2601052,
        cityName: "Araçoiaba",
      },
      {
        city_ID: 2601102,
        cityName: "Araripina",
      },
      {
        city_ID: 2601201,
        cityName: "Arcoverde",
      },
      {
        city_ID: 2601300,
        cityName: "Barra de Guabiraba",
      },
      {
        city_ID: 2601409,
        cityName: "Barreiros",
      },
      {
        city_ID: 2601508,
        cityName: "Belém de Maria",
      },
      {
        city_ID: 2601607,
        cityName: "Belém do São Francisco",
      },
      {
        city_ID: 2601706,
        cityName: "Belo Jardim",
      },
      {
        city_ID: 2601805,
        cityName: "Betânia",
      },
      {
        city_ID: 2601904,
        cityName: "Bezerros",
      },
      {
        city_ID: 2602001,
        cityName: "Bodocó",
      },
      {
        city_ID: 2602100,
        cityName: "Bom Conselho",
      },
      {
        city_ID: 2602209,
        cityName: "Bom Jardim",
      },
      {
        city_ID: 2602308,
        cityName: "Bonito",
      },
      {
        city_ID: 2602407,
        cityName: "Brejão",
      },
      {
        city_ID: 2602506,
        cityName: "Brejinho",
      },
      {
        city_ID: 2602605,
        cityName: "Brejo da Madre de Deus",
      },
      {
        city_ID: 2602704,
        cityName: "Buenos Aires",
      },
      {
        city_ID: 2602803,
        cityName: "Buíque",
      },
      {
        city_ID: 2602902,
        cityName: "Cabo de Santo Agostinho",
      },
      {
        city_ID: 2603009,
        cityName: "Cabrobó",
      },
      {
        city_ID: 2603108,
        cityName: "Cachoeirinha",
      },
      {
        city_ID: 2603207,
        cityName: "Caetés",
      },
      {
        city_ID: 2603306,
        cityName: "Calçado",
      },
      {
        city_ID: 2603405,
        cityName: "Calumbi",
      },
      {
        city_ID: 2603454,
        cityName: "Camaragibe",
      },
      {
        city_ID: 2603504,
        cityName: "Camocim de São Félix",
      },
      {
        city_ID: 2603603,
        cityName: "Camutanga",
      },
      {
        city_ID: 2603702,
        cityName: "Canhotinho",
      },
      {
        city_ID: 2603801,
        cityName: "Capoeiras",
      },
      {
        city_ID: 2603900,
        cityName: "Carnaíba",
      },
      {
        city_ID: 2603926,
        cityName: "Carnaubeira da Penha",
      },
      {
        city_ID: 2604007,
        cityName: "Carpina",
      },
      {
        city_ID: 2604106,
        cityName: "Caruaru",
      },
      {
        city_ID: 2604155,
        cityName: "Casinhas",
      },
      {
        city_ID: 2604205,
        cityName: "Catende",
      },
      {
        city_ID: 2604304,
        cityName: "Cedro",
      },
      {
        city_ID: 2604403,
        cityName: "Chã de Alegria",
      },
      {
        city_ID: 2604502,
        cityName: "Chã Grande",
      },
      {
        city_ID: 2604601,
        cityName: "Condado",
      },
      {
        city_ID: 2604700,
        cityName: "Correntes",
      },
      {
        city_ID: 2604809,
        cityName: "Cortês",
      },
      {
        city_ID: 2604908,
        cityName: "Cumaru",
      },
      {
        city_ID: 2605004,
        cityName: "Cupira",
      },
      {
        city_ID: 2605103,
        cityName: "Custódia",
      },
      {
        city_ID: 2605152,
        cityName: "Dormentes",
      },
      {
        city_ID: 2605202,
        cityName: "Escada",
      },
      {
        city_ID: 2605301,
        cityName: "Exu",
      },
      {
        city_ID: 2605400,
        cityName: "Feira Nova",
      },
      {
        city_ID: 2605459,
        cityName: "Fernando de Noronha",
      },
      {
        city_ID: 2605509,
        cityName: "Ferreiros",
      },
      {
        city_ID: 2605608,
        cityName: "Flores",
      },
      {
        city_ID: 2605707,
        cityName: "Floresta",
      },
      {
        city_ID: 2605806,
        cityName: "Frei Miguelinho",
      },
      {
        city_ID: 2605905,
        cityName: "Gameleira",
      },
      {
        city_ID: 2606002,
        cityName: "Garanhuns",
      },
      {
        city_ID: 2606101,
        cityName: "Glória do Goitá",
      },
      {
        city_ID: 2606200,
        cityName: "Goiana",
      },
      {
        city_ID: 2606309,
        cityName: "Granito",
      },
      {
        city_ID: 2606408,
        cityName: "Gravatá",
      },
      {
        city_ID: 2606507,
        cityName: "Iati",
      },
      {
        city_ID: 2606606,
        cityName: "Ibimirim",
      },
      {
        city_ID: 2606705,
        cityName: "Ibirajuba",
      },
      {
        city_ID: 2606804,
        cityName: "Igarassu",
      },
      {
        city_ID: 2606903,
        cityName: "Iguaracy",
      },
      {
        city_ID: 2607604,
        cityName: "Ilha de Itamaracá",
      },
      {
        city_ID: 2607000,
        cityName: "Inajá",
      },
      {
        city_ID: 2607109,
        cityName: "Ingazeira",
      },
      {
        city_ID: 2607208,
        cityName: "Ipojuca",
      },
      {
        city_ID: 2607307,
        cityName: "Ipubi",
      },
      {
        city_ID: 2607406,
        cityName: "Itacuruba",
      },
      {
        city_ID: 2607505,
        cityName: "Itaíba",
      },
      {
        city_ID: 2607653,
        cityName: "Itambé",
      },
      {
        city_ID: 2607703,
        cityName: "Itapetim",
      },
      {
        city_ID: 2607752,
        cityName: "Itapissuma",
      },
      {
        city_ID: 2607802,
        cityName: "Itaquitinga",
      },
      {
        city_ID: 2607901,
        cityName: "Jaboatão dos Guararapes",
      },
      {
        city_ID: 2607950,
        cityName: "Jaqueira",
      },
      {
        city_ID: 2608008,
        cityName: "Jataúba",
      },
      {
        city_ID: 2608057,
        cityName: "Jatobá",
      },
      {
        city_ID: 2608107,
        cityName: "João Alfredo",
      },
      {
        city_ID: 2608206,
        cityName: "Joaquim Nabuco",
      },
      {
        city_ID: 2608255,
        cityName: "Jucati",
      },
      {
        city_ID: 2608305,
        cityName: "Jupi",
      },
      {
        city_ID: 2608404,
        cityName: "Jurema",
      },
      {
        city_ID: 2608503,
        cityName: "Lagoa de Itaenga",
      },
      {
        city_ID: 2608453,
        cityName: "Lagoa do Carro",
      },
      {
        city_ID: 2608602,
        cityName: "Lagoa do Ouro",
      },
      {
        city_ID: 2608701,
        cityName: "Lagoa dos Gatos",
      },
      {
        city_ID: 2608750,
        cityName: "Lagoa Grande",
      },
      {
        city_ID: 2608800,
        cityName: "Lajedo",
      },
      {
        city_ID: 2608909,
        cityName: "Limoeiro",
      },
      {
        city_ID: 2609006,
        cityName: "Macaparana",
      },
      {
        city_ID: 2609105,
        cityName: "Machados",
      },
      {
        city_ID: 2609154,
        cityName: "Manari",
      },
      {
        city_ID: 2609204,
        cityName: "Maraial",
      },
      {
        city_ID: 2609303,
        cityName: "Mirandiba",
      },
      {
        city_ID: 2614303,
        cityName: "Moreilândia",
      },
      {
        city_ID: 2609402,
        cityName: "Moreno",
      },
      {
        city_ID: 2609501,
        cityName: "Nazaré da Mata",
      },
      {
        city_ID: 2609600,
        cityName: "Olinda",
      },
      {
        city_ID: 2609709,
        cityName: "Orobó",
      },
      {
        city_ID: 2609808,
        cityName: "Orocó",
      },
      {
        city_ID: 2609907,
        cityName: "Ouricuri",
      },
      {
        city_ID: 2610004,
        cityName: "Palmares",
      },
      {
        city_ID: 2610103,
        cityName: "Palmeirina",
      },
      {
        city_ID: 2610202,
        cityName: "Panelas",
      },
      {
        city_ID: 2610301,
        cityName: "Paranatama",
      },
      {
        city_ID: 2610400,
        cityName: "Parnamirim",
      },
      {
        city_ID: 2610509,
        cityName: "Passira",
      },
      {
        city_ID: 2610608,
        cityName: "Paudalho",
      },
      {
        city_ID: 2610707,
        cityName: "Paulista",
      },
      {
        city_ID: 2610806,
        cityName: "Pedra",
      },
      {
        city_ID: 2610905,
        cityName: "Pesqueira",
      },
      {
        city_ID: 2611002,
        cityName: "Petrolândia",
      },
      {
        city_ID: 2611101,
        cityName: "Petrolina",
      },
      {
        city_ID: 2611200,
        cityName: "Poção",
      },
      {
        city_ID: 2611309,
        cityName: "Pombos",
      },
      {
        city_ID: 2611408,
        cityName: "Primavera",
      },
      {
        city_ID: 2611507,
        cityName: "Quipapá",
      },
      {
        city_ID: 2611533,
        cityName: "Quixaba",
      },
      {
        city_ID: 2611606,
        cityName: "Recife",
      },
      {
        city_ID: 2611705,
        cityName: "Riacho das Almas",
      },
      {
        city_ID: 2611804,
        cityName: "Ribeirão",
      },
      {
        city_ID: 2611903,
        cityName: "Rio Formoso",
      },
      {
        city_ID: 2612000,
        cityName: "Sairé",
      },
      {
        city_ID: 2612109,
        cityName: "Salgadinho",
      },
      {
        city_ID: 2612208,
        cityName: "Salgueiro",
      },
      {
        city_ID: 2612307,
        cityName: "Saloá",
      },
      {
        city_ID: 2612406,
        cityName: "Sanharó",
      },
      {
        city_ID: 2612455,
        cityName: "Santa Cruz",
      },
      {
        city_ID: 2612471,
        cityName: "Santa Cruz da Baixa Verde",
      },
      {
        city_ID: 2612505,
        cityName: "Santa Cruz do Capibaribe",
      },
      {
        city_ID: 2612554,
        cityName: "Santa Filomena",
      },
      {
        city_ID: 2612604,
        cityName: "Santa Maria da Boa Vista",
      },
      {
        city_ID: 2612703,
        cityName: "Santa Maria do Cambucá",
      },
      {
        city_ID: 2612802,
        cityName: "Santa Terezinha",
      },
      {
        city_ID: 2612901,
        cityName: "São Benedito do Sul",
      },
      {
        city_ID: 2613008,
        cityName: "São Bento do Una",
      },
      {
        city_ID: 2613107,
        cityName: "São Caitano",
      },
      {
        city_ID: 2613206,
        cityName: "São João",
      },
      {
        city_ID: 2613305,
        cityName: "São Joaquim do Monte",
      },
      {
        city_ID: 2613404,
        cityName: "São José da Coroa Grande",
      },
      {
        city_ID: 2613503,
        cityName: "São José do Belmonte",
      },
      {
        city_ID: 2613602,
        cityName: "São José do Egito",
      },
      {
        city_ID: 2613701,
        cityName: "São Lourenço da Mata",
      },
      {
        city_ID: 2613800,
        cityName: "São Vicente Férrer",
      },
      {
        city_ID: 2613909,
        cityName: "Serra Talhada",
      },
      {
        city_ID: 2614006,
        cityName: "Serrita",
      },
      {
        city_ID: 2614105,
        cityName: "Sertânia",
      },
      {
        city_ID: 2614204,
        cityName: "Sirinhaém",
      },
      {
        city_ID: 2614402,
        cityName: "Solidão",
      },
      {
        city_ID: 2614501,
        cityName: "Surubim",
      },
      {
        city_ID: 2614600,
        cityName: "Tabira",
      },
      {
        city_ID: 2614709,
        cityName: "Tacaimbó",
      },
      {
        city_ID: 2614808,
        cityName: "Tacaratu",
      },
      {
        city_ID: 2614857,
        cityName: "Tamandaré",
      },
      {
        city_ID: 2615003,
        cityName: "Taquaritinga do Norte",
      },
      {
        city_ID: 2615102,
        cityName: "Terezinha",
      },
      {
        city_ID: 2615201,
        cityName: "Terra Nova",
      },
      {
        city_ID: 2615300,
        cityName: "Timbaúba",
      },
      {
        city_ID: 2615409,
        cityName: "Toritama",
      },
      {
        city_ID: 2615508,
        cityName: "Tracunhaém",
      },
      {
        city_ID: 2615607,
        cityName: "Trindade",
      },
      {
        city_ID: 2615706,
        cityName: "Triunfo",
      },
      {
        city_ID: 2615805,
        cityName: "Tupanatinga",
      },
      {
        city_ID: 2615904,
        cityName: "Tuparetama",
      },
      {
        city_ID: 2616001,
        cityName: "Venturosa",
      },
      {
        city_ID: 2616100,
        cityName: "Verdejante",
      },
      {
        city_ID: 2616183,
        cityName: "Vertente do Lério",
      },
      {
        city_ID: 2616209,
        cityName: "Vertentes",
      },
      {
        city_ID: 2616308,
        cityName: "Vicência",
      },
      {
        city_ID: 2616407,
        cityName: "Vitória de Santo Antão",
      },
      {
        city_ID: 2616506,
        cityName: "Xexéu",
      },
    ],
  },
  {
    id: 22,
    stateName: "Piauí",
    abv: "PI",
    cities: [
      {
        city_ID: 2200053,
        cityName: "Acauã",
      },
      {
        city_ID: 2200103,
        cityName: "Agricolândia",
      },
      {
        city_ID: 2200202,
        cityName: "Água Branca",
      },
      {
        city_ID: 2200251,
        cityName: "Alagoinha do Piauí",
      },
      {
        city_ID: 2200277,
        cityName: "Alegrete do Piauí",
      },
      {
        city_ID: 2200301,
        cityName: "Alto Longá",
      },
      {
        city_ID: 2200400,
        cityName: "Altos",
      },
      {
        city_ID: 2200459,
        cityName: "Alvorada do Gurguéia",
      },
      {
        city_ID: 2200509,
        cityName: "Amarante",
      },
      {
        city_ID: 2200608,
        cityName: "Angical do Piauí",
      },
      {
        city_ID: 2200707,
        cityName: "Anísio de Abreu",
      },
      {
        city_ID: 2200806,
        cityName: "Antônio Almeida",
      },
      {
        city_ID: 2200905,
        cityName: "Aroazes",
      },
      {
        city_ID: 2200954,
        cityName: "Aroeiras do Itaim",
      },
      {
        city_ID: 2201002,
        cityName: "Arraial",
      },
      {
        city_ID: 2201051,
        cityName: "Assunção do Piauí",
      },
      {
        city_ID: 2201101,
        cityName: "Avelino Lopes",
      },
      {
        city_ID: 2201150,
        cityName: "Baixa Grande do Ribeiro",
      },
      {
        city_ID: 2201176,
        cityName: "Barra D'Alcântara",
      },
      {
        city_ID: 2201200,
        cityName: "Barras",
      },
      {
        city_ID: 2201309,
        cityName: "Barreiras do Piauí",
      },
      {
        city_ID: 2201408,
        cityName: "Barro Duro",
      },
      {
        city_ID: 2201507,
        cityName: "Batalha",
      },
      {
        city_ID: 2201556,
        cityName: "Bela Vista do Piauí",
      },
      {
        city_ID: 2201572,
        cityName: "Belém do Piauí",
      },
      {
        city_ID: 2201606,
        cityName: "Beneditinos",
      },
      {
        city_ID: 2201705,
        cityName: "Bertolínia",
      },
      {
        city_ID: 2201739,
        cityName: "Betânia do Piauí",
      },
      {
        city_ID: 2201770,
        cityName: "Boa Hora",
      },
      {
        city_ID: 2201804,
        cityName: "Bocaina",
      },
      {
        city_ID: 2201903,
        cityName: "Bom Jesus",
      },
      {
        city_ID: 2201919,
        cityName: "Bom Princípio do Piauí",
      },
      {
        city_ID: 2201929,
        cityName: "Bonfim do Piauí",
      },
      {
        city_ID: 2201945,
        cityName: "Boqueirão do Piauí",
      },
      {
        city_ID: 2201960,
        cityName: "Brasileira",
      },
      {
        city_ID: 2201988,
        cityName: "Brejo do Piauí",
      },
      {
        city_ID: 2202000,
        cityName: "Buriti dos Lopes",
      },
      {
        city_ID: 2202026,
        cityName: "Buriti dos Montes",
      },
      {
        city_ID: 2202059,
        cityName: "Cabeceiras do Piauí",
      },
      {
        city_ID: 2202075,
        cityName: "Cajazeiras do Piauí",
      },
      {
        city_ID: 2202083,
        cityName: "Cajueiro da Praia",
      },
      {
        city_ID: 2202091,
        cityName: "Caldeirão Grande do Piauí",
      },
      {
        city_ID: 2202109,
        cityName: "Campinas do Piauí",
      },
      {
        city_ID: 2202117,
        cityName: "Campo Alegre do Fidalgo",
      },
      {
        city_ID: 2202133,
        cityName: "Campo Grande do Piauí",
      },
      {
        city_ID: 2202174,
        cityName: "Campo Largo do Piauí",
      },
      {
        city_ID: 2202208,
        cityName: "Campo Maior",
      },
      {
        city_ID: 2202251,
        cityName: "Canavieira",
      },
      {
        city_ID: 2202307,
        cityName: "Canto do Buriti",
      },
      {
        city_ID: 2202406,
        cityName: "Capitão de Campos",
      },
      {
        city_ID: 2202455,
        cityName: "Capitão Gervásio Oliveira",
      },
      {
        city_ID: 2202505,
        cityName: "Caracol",
      },
      {
        city_ID: 2202539,
        cityName: "Caraúbas do Piauí",
      },
      {
        city_ID: 2202554,
        cityName: "Caridade do Piauí",
      },
      {
        city_ID: 2202604,
        cityName: "Castelo do Piauí",
      },
      {
        city_ID: 2202653,
        cityName: "Caxingó",
      },
      {
        city_ID: 2202703,
        cityName: "Cocal",
      },
      {
        city_ID: 2202711,
        cityName: "Cocal de Telha",
      },
      {
        city_ID: 2202729,
        cityName: "Cocal dos Alves",
      },
      {
        city_ID: 2202737,
        cityName: "Coivaras",
      },
      {
        city_ID: 2202752,
        cityName: "Colônia do Gurguéia",
      },
      {
        city_ID: 2202778,
        cityName: "Colônia do Piauí",
      },
      {
        city_ID: 2202802,
        cityName: "Conceição do Canindé",
      },
      {
        city_ID: 2202851,
        cityName: "Coronel José Dias",
      },
      {
        city_ID: 2202901,
        cityName: "Corrente",
      },
      {
        city_ID: 2203008,
        cityName: "Cristalândia do Piauí",
      },
      {
        city_ID: 2203107,
        cityName: "Cristino Castro",
      },
      {
        city_ID: 2203206,
        cityName: "Curimatá",
      },
      {
        city_ID: 2203230,
        cityName: "Currais",
      },
      {
        city_ID: 2203271,
        cityName: "Curral Novo do Piauí",
      },
      {
        city_ID: 2203255,
        cityName: "Curralinhos",
      },
      {
        city_ID: 2203305,
        cityName: "Demerval Lobão",
      },
      {
        city_ID: 2203354,
        cityName: "Dirceu Arcoverde",
      },
      {
        city_ID: 2203404,
        cityName: "Dom Expedito Lopes",
      },
      {
        city_ID: 2203453,
        cityName: "Dom Inocêncio",
      },
      {
        city_ID: 2203420,
        cityName: "Domingos Mourão",
      },
      {
        city_ID: 2203503,
        cityName: "Elesbão Veloso",
      },
      {
        city_ID: 2203602,
        cityName: "Eliseu Martins",
      },
      {
        city_ID: 2203701,
        cityName: "Esperantina",
      },
      {
        city_ID: 2203750,
        cityName: "Fartura do Piauí",
      },
      {
        city_ID: 2203800,
        cityName: "Flores do Piauí",
      },
      {
        city_ID: 2203859,
        cityName: "Floresta do Piauí",
      },
      {
        city_ID: 2203909,
        cityName: "Floriano",
      },
      {
        city_ID: 2204006,
        cityName: "Francinópolis",
      },
      {
        city_ID: 2204105,
        cityName: "Francisco Ayres",
      },
      {
        city_ID: 2204154,
        cityName: "Francisco Macedo",
      },
      {
        city_ID: 2204204,
        cityName: "Francisco Santos",
      },
      {
        city_ID: 2204303,
        cityName: "Fronteiras",
      },
      {
        city_ID: 2204352,
        cityName: "Geminiano",
      },
      {
        city_ID: 2204402,
        cityName: "Gilbués",
      },
      {
        city_ID: 2204501,
        cityName: "Guadalupe",
      },
      {
        city_ID: 2204550,
        cityName: "Guaribas",
      },
      {
        city_ID: 2204600,
        cityName: "Hugo Napoleão",
      },
      {
        city_ID: 2204659,
        cityName: "Ilha Grande",
      },
      {
        city_ID: 2204709,
        cityName: "Inhuma",
      },
      {
        city_ID: 2204808,
        cityName: "Ipiranga do Piauí",
      },
      {
        city_ID: 2204907,
        cityName: "Isaías Coelho",
      },
      {
        city_ID: 2205003,
        cityName: "Itainópolis",
      },
      {
        city_ID: 2205102,
        cityName: "Itaueira",
      },
      {
        city_ID: 2205151,
        cityName: "Jacobina do Piauí",
      },
      {
        city_ID: 2205201,
        cityName: "Jaicós",
      },
      {
        city_ID: 2205250,
        cityName: "Jardim do Mulato",
      },
      {
        city_ID: 2205276,
        cityName: "Jatobá do Piauí",
      },
      {
        city_ID: 2205300,
        cityName: "Jerumenha",
      },
      {
        city_ID: 2205359,
        cityName: "João Costa",
      },
      {
        city_ID: 2205409,
        cityName: "Joaquim Pires",
      },
      {
        city_ID: 2205458,
        cityName: "Joca Marques",
      },
      {
        city_ID: 2205508,
        cityName: "José de Freitas",
      },
      {
        city_ID: 2205516,
        cityName: "Juazeiro do Piauí",
      },
      {
        city_ID: 2205524,
        cityName: "Júlio Borges",
      },
      {
        city_ID: 2205532,
        cityName: "Jurema",
      },
      {
        city_ID: 2205557,
        cityName: "Lagoa Alegre",
      },
      {
        city_ID: 2205573,
        cityName: "Lagoa de São Francisco",
      },
      {
        city_ID: 2205565,
        cityName: "Lagoa do Barro do Piauí",
      },
      {
        city_ID: 2205581,
        cityName: "Lagoa do Piauí",
      },
      {
        city_ID: 2205599,
        cityName: "Lagoa do Sítio",
      },
      {
        city_ID: 2205540,
        cityName: "Lagoinha do Piauí",
      },
      {
        city_ID: 2205607,
        cityName: "Landri Sales",
      },
      {
        city_ID: 2205706,
        cityName: "Luís Correia",
      },
      {
        city_ID: 2205805,
        cityName: "Luzilândia",
      },
      {
        city_ID: 2205854,
        cityName: "Madeiro",
      },
      {
        city_ID: 2205904,
        cityName: "Manoel Emídio",
      },
      {
        city_ID: 2205953,
        cityName: "Marcolândia",
      },
      {
        city_ID: 2206001,
        cityName: "Marcos Parente",
      },
      {
        city_ID: 2206050,
        cityName: "Massapê do Piauí",
      },
      {
        city_ID: 2206100,
        cityName: "Matias Olímpio",
      },
      {
        city_ID: 2206209,
        cityName: "Miguel Alves",
      },
      {
        city_ID: 2206308,
        cityName: "Miguel Leão",
      },
      {
        city_ID: 2206357,
        cityName: "Milton Brandão",
      },
      {
        city_ID: 2206407,
        cityName: "Monsenhor Gil",
      },
      {
        city_ID: 2206506,
        cityName: "Monsenhor Hipólito",
      },
      {
        city_ID: 2206605,
        cityName: "Monte Alegre do Piauí",
      },
      {
        city_ID: 2206654,
        cityName: "Morro Cabeça no Tempo",
      },
      {
        city_ID: 2206670,
        cityName: "Morro do Chapéu do Piauí",
      },
      {
        city_ID: 2206696,
        cityName: "Murici dos Portelas",
      },
      {
        city_ID: 2206704,
        cityName: "Nazaré do Piauí",
      },
      {
        city_ID: 2206720,
        cityName: "Nazária",
      },
      {
        city_ID: 2206753,
        cityName: "Nossa Senhora de Nazaré",
      },
      {
        city_ID: 2206803,
        cityName: "Nossa Senhora dos Remédios",
      },
      {
        city_ID: 2207959,
        cityName: "Nova Santa Rita",
      },
      {
        city_ID: 2206902,
        cityName: "Novo Oriente do Piauí",
      },
      {
        city_ID: 2206951,
        cityName: "Novo Santo Antônio",
      },
      {
        city_ID: 2207009,
        cityName: "Oeiras",
      },
      {
        city_ID: 2207108,
        cityName: "Olho D'Água do Piauí",
      },
      {
        city_ID: 2207207,
        cityName: "Padre Marcos",
      },
      {
        city_ID: 2207306,
        cityName: "Paes Landim",
      },
      {
        city_ID: 2207355,
        cityName: "Pajeú do Piauí",
      },
      {
        city_ID: 2207405,
        cityName: "Palmeira do Piauí",
      },
      {
        city_ID: 2207504,
        cityName: "Palmeirais",
      },
      {
        city_ID: 2207553,
        cityName: "Paquetá",
      },
      {
        city_ID: 2207603,
        cityName: "Parnaguá",
      },
      {
        city_ID: 2207702,
        cityName: "Parnaíba",
      },
      {
        city_ID: 2207751,
        cityName: "Passagem Franca do Piauí",
      },
      {
        city_ID: 2207777,
        cityName: "Patos do Piauí",
      },
      {
        city_ID: 2207793,
        cityName: "Pau D'Arco do Piauí",
      },
      {
        city_ID: 2207801,
        cityName: "Paulistana",
      },
      {
        city_ID: 2207850,
        cityName: "Pavussu",
      },
      {
        city_ID: 2207900,
        cityName: "Pedro II",
      },
      {
        city_ID: 2207934,
        cityName: "Pedro Laurentino",
      },
      {
        city_ID: 2208007,
        cityName: "Picos",
      },
      {
        city_ID: 2208106,
        cityName: "Pimenteiras",
      },
      {
        city_ID: 2208205,
        cityName: "Pio IX",
      },
      {
        city_ID: 2208304,
        cityName: "Piracuruca",
      },
      {
        city_ID: 2208403,
        cityName: "Piripiri",
      },
      {
        city_ID: 2208502,
        cityName: "Porto",
      },
      {
        city_ID: 2208551,
        cityName: "Porto Alegre do Piauí",
      },
      {
        city_ID: 2208601,
        cityName: "Prata do Piauí",
      },
      {
        city_ID: 2208650,
        cityName: "Queimada Nova",
      },
      {
        city_ID: 2208700,
        cityName: "Redenção do Gurguéia",
      },
      {
        city_ID: 2208809,
        cityName: "Regeneração",
      },
      {
        city_ID: 2208858,
        cityName: "Riacho Frio",
      },
      {
        city_ID: 2208874,
        cityName: "Ribeira do Piauí",
      },
      {
        city_ID: 2208908,
        cityName: "Ribeiro Gonçalves",
      },
      {
        city_ID: 2209005,
        cityName: "Rio Grande do Piauí",
      },
      {
        city_ID: 2209104,
        cityName: "Santa Cruz do Piauí",
      },
      {
        city_ID: 2209153,
        cityName: "Santa Cruz dos Milagres",
      },
      {
        city_ID: 2209203,
        cityName: "Santa Filomena",
      },
      {
        city_ID: 2209302,
        cityName: "Santa Luz",
      },
      {
        city_ID: 2209377,
        cityName: "Santa Rosa do Piauí",
      },
      {
        city_ID: 2209351,
        cityName: "Santana do Piauí",
      },
      {
        city_ID: 2209401,
        cityName: "Santo Antônio de Lisboa",
      },
      {
        city_ID: 2209450,
        cityName: "Santo Antônio dos Milagres",
      },
      {
        city_ID: 2209500,
        cityName: "Santo Inácio do Piauí",
      },
      {
        city_ID: 2209559,
        cityName: "São Braz do Piauí",
      },
      {
        city_ID: 2209609,
        cityName: "São Félix do Piauí",
      },
      {
        city_ID: 2209658,
        cityName: "São Francisco de Assis do Piauí",
      },
      {
        city_ID: 2209708,
        cityName: "São Francisco do Piauí",
      },
      {
        city_ID: 2209757,
        cityName: "São Gonçalo do Gurguéia",
      },
      {
        city_ID: 2209807,
        cityName: "São Gonçalo do Piauí",
      },
      {
        city_ID: 2209856,
        cityName: "São João da Canabrava",
      },
      {
        city_ID: 2209872,
        cityName: "São João da Fronteira",
      },
      {
        city_ID: 2209906,
        cityName: "São João da Serra",
      },
      {
        city_ID: 2209955,
        cityName: "São João da Varjota",
      },
      {
        city_ID: 2209971,
        cityName: "São João do Arraial",
      },
      {
        city_ID: 2210003,
        cityName: "São João do Piauí",
      },
      {
        city_ID: 2210052,
        cityName: "São José do Divino",
      },
      {
        city_ID: 2210102,
        cityName: "São José do Peixe",
      },
      {
        city_ID: 2210201,
        cityName: "São José do Piauí",
      },
      {
        city_ID: 2210300,
        cityName: "São Julião",
      },
      {
        city_ID: 2210359,
        cityName: "São Lourenço do Piauí",
      },
      {
        city_ID: 2210375,
        cityName: "São Luis do Piauí",
      },
      {
        city_ID: 2210383,
        cityName: "São Miguel da Baixa Grande",
      },
      {
        city_ID: 2210391,
        cityName: "São Miguel do Fidalgo",
      },
      {
        city_ID: 2210409,
        cityName: "São Miguel do Tapuio",
      },
      {
        city_ID: 2210508,
        cityName: "São Pedro do Piauí",
      },
      {
        city_ID: 2210607,
        cityName: "São Raimundo Nonato",
      },
      {
        city_ID: 2210623,
        cityName: "Sebastião Barros",
      },
      {
        city_ID: 2210631,
        cityName: "Sebastião Leal",
      },
      {
        city_ID: 2210656,
        cityName: "Sigefredo Pacheco",
      },
      {
        city_ID: 2210706,
        cityName: "Simões",
      },
      {
        city_ID: 2210805,
        cityName: "Simplício Mendes",
      },
      {
        city_ID: 2210904,
        cityName: "Socorro do Piauí",
      },
      {
        city_ID: 2210938,
        cityName: "Sussuapara",
      },
      {
        city_ID: 2210953,
        cityName: "Tamboril do Piauí",
      },
      {
        city_ID: 2210979,
        cityName: "Tanque do Piauí",
      },
      {
        city_ID: 2211001,
        cityName: "Teresina",
      },
      {
        city_ID: 2211100,
        cityName: "União",
      },
      {
        city_ID: 2211209,
        cityName: "Uruçuí",
      },
      {
        city_ID: 2211308,
        cityName: "Valença do Piauí",
      },
      {
        city_ID: 2211357,
        cityName: "Várzea Branca",
      },
      {
        city_ID: 2211407,
        cityName: "Várzea Grande",
      },
      {
        city_ID: 2211506,
        cityName: "Vera Mendes",
      },
      {
        city_ID: 2211605,
        cityName: "Vila Nova do Piauí",
      },
      {
        city_ID: 2211704,
        cityName: "Wall Ferraz",
      },
    ],
  },
  {
    id: 33,
    stateName: "Rio de Janeiro",
    abv: "RJ",
    cities: [
      {
        city_ID: 3300100,
        cityName: "Angra dos Reis",
      },
      {
        city_ID: 3300159,
        cityName: "Aperibé",
      },
      {
        city_ID: 3300209,
        cityName: "Araruama",
      },
      {
        city_ID: 3300225,
        cityName: "Areal",
      },
      {
        city_ID: 3300233,
        cityName: "Armação dos Búzios",
      },
      {
        city_ID: 3300258,
        cityName: "Arraial do Cabo",
      },
      {
        city_ID: 3300308,
        cityName: "Barra do Piraí",
      },
      {
        city_ID: 3300407,
        cityName: "Barra Mansa",
      },
      {
        city_ID: 3300456,
        cityName: "Belford Roxo",
      },
      {
        city_ID: 3300506,
        cityName: "Bom Jardim",
      },
      {
        city_ID: 3300605,
        cityName: "Bom Jesus do Itabapoana",
      },
      {
        city_ID: 3300704,
        cityName: "Cabo Frio",
      },
      {
        city_ID: 3300803,
        cityName: "Cachoeiras de Macacu",
      },
      {
        city_ID: 3300902,
        cityName: "Cambuci",
      },
      {
        city_ID: 3301009,
        cityName: "Campos dos Goytacazes",
      },
      {
        city_ID: 3301108,
        cityName: "Cantagalo",
      },
      {
        city_ID: 3300936,
        cityName: "Carapebus",
      },
      {
        city_ID: 3301157,
        cityName: "Cardoso Moreira",
      },
      {
        city_ID: 3301207,
        cityName: "Carmo",
      },
      {
        city_ID: 3301306,
        cityName: "Casimiro de Abreu",
      },
      {
        city_ID: 3300951,
        cityName: "Comendador Levy Gasparian",
      },
      {
        city_ID: 3301405,
        cityName: "Conceição de Macabu",
      },
      {
        city_ID: 3301504,
        cityName: "Cordeiro",
      },
      {
        city_ID: 3301603,
        cityName: "Duas Barras",
      },
      {
        city_ID: 3301702,
        cityName: "Duque de Caxias",
      },
      {
        city_ID: 3301801,
        cityName: "Engenheiro Paulo de Frontin",
      },
      {
        city_ID: 3301850,
        cityName: "Guapimirim",
      },
      {
        city_ID: 3301876,
        cityName: "Iguaba Grande",
      },
      {
        city_ID: 3301900,
        cityName: "Itaboraí",
      },
      {
        city_ID: 3302007,
        cityName: "Itaguaí",
      },
      {
        city_ID: 3302056,
        cityName: "Italva",
      },
      {
        city_ID: 3302106,
        cityName: "Itaocara",
      },
      {
        city_ID: 3302205,
        cityName: "Itaperuna",
      },
      {
        city_ID: 3302254,
        cityName: "Itatiaia",
      },
      {
        city_ID: 3302270,
        cityName: "Japeri",
      },
      {
        city_ID: 3302304,
        cityName: "Laje do Muriaé",
      },
      {
        city_ID: 3302403,
        cityName: "Macaé",
      },
      {
        city_ID: 3302452,
        cityName: "Macuco",
      },
      {
        city_ID: 3302502,
        cityName: "Magé",
      },
      {
        city_ID: 3302601,
        cityName: "Mangaratiba",
      },
      {
        city_ID: 3302700,
        cityName: "Maricá",
      },
      {
        city_ID: 3302809,
        cityName: "Mendes",
      },
      {
        city_ID: 3302858,
        cityName: "Mesquita",
      },
      {
        city_ID: 3302908,
        cityName: "Miguel Pereira",
      },
      {
        city_ID: 3303005,
        cityName: "Miracema",
      },
      {
        city_ID: 3303104,
        cityName: "Natividade",
      },
      {
        city_ID: 3303203,
        cityName: "Nilópolis",
      },
      {
        city_ID: 3303302,
        cityName: "Niterói",
      },
      {
        city_ID: 3303401,
        cityName: "Nova Friburgo",
      },
      {
        city_ID: 3303500,
        cityName: "Nova Iguaçu",
      },
      {
        city_ID: 3303609,
        cityName: "Paracambi",
      },
      {
        city_ID: 3303708,
        cityName: "Paraíba do Sul",
      },
      {
        city_ID: 3303807,
        cityName: "Parati",
      },
      {
        city_ID: 3303856,
        cityName: "Paty do Alferes",
      },
      {
        city_ID: 3303906,
        cityName: "Petrópolis",
      },
      {
        city_ID: 3303955,
        cityName: "Pinheiral",
      },
      {
        city_ID: 3304003,
        cityName: "Piraí",
      },
      {
        city_ID: 3304102,
        cityName: "Porciúncula",
      },
      {
        city_ID: 3304110,
        cityName: "Porto Real",
      },
      {
        city_ID: 3304128,
        cityName: "Quatis",
      },
      {
        city_ID: 3304144,
        cityName: "Queimados",
      },
      {
        city_ID: 3304151,
        cityName: "Quissamã",
      },
      {
        city_ID: 3304201,
        cityName: "Resende",
      },
      {
        city_ID: 3304300,
        cityName: "Rio Bonito",
      },
      {
        city_ID: 3304409,
        cityName: "Rio Claro",
      },
      {
        city_ID: 3304508,
        cityName: "Rio das Flores",
      },
      {
        city_ID: 3304524,
        cityName: "Rio das Ostras",
      },
      {
        city_ID: 3304557,
        cityName: "Rio de Janeiro",
      },
      {
        city_ID: 3304607,
        cityName: "Santa Maria Madalena",
      },
      {
        city_ID: 3304706,
        cityName: "Santo Antônio de Pádua",
      },
      {
        city_ID: 3304805,
        cityName: "São Fidélis",
      },
      {
        city_ID: 3304755,
        cityName: "São Francisco de Itabapoana",
      },
      {
        city_ID: 3304904,
        cityName: "São Gonçalo",
      },
      {
        city_ID: 3305000,
        cityName: "São João da Barra",
      },
      {
        city_ID: 3305109,
        cityName: "São João de Meriti",
      },
      {
        city_ID: 3305133,
        cityName: "São José de Ubá",
      },
      {
        city_ID: 3305158,
        cityName: "São José do Vale do Rio Preto",
      },
      {
        city_ID: 3305208,
        cityName: "São Pedro da Aldeia",
      },
      {
        city_ID: 3305307,
        cityName: "São Sebastião do Alto",
      },
      {
        city_ID: 3305406,
        cityName: "Sapucaia",
      },
      {
        city_ID: 3305505,
        cityName: "Saquarema",
      },
      {
        city_ID: 3305554,
        cityName: "Seropédica",
      },
      {
        city_ID: 3305604,
        cityName: "Silva Jardim",
      },
      {
        city_ID: 3305703,
        cityName: "Sumidouro",
      },
      {
        city_ID: 3305752,
        cityName: "Tanguá",
      },
      {
        city_ID: 3305802,
        cityName: "Teresópolis",
      },
      {
        city_ID: 3305901,
        cityName: "Trajano de Moraes",
      },
      {
        city_ID: 3306008,
        cityName: "Três Rios",
      },
      {
        city_ID: 3306107,
        cityName: "Valença",
      },
      {
        city_ID: 3306156,
        cityName: "Varre-Sai",
      },
      {
        city_ID: 3306206,
        cityName: "Vassouras",
      },
      {
        city_ID: 3306305,
        cityName: "Volta Redonda",
      },
    ],
  },
  {
    id: 24,
    stateName: "Rio Grande do Norte",
    abv: "RN",
    cities: [
      {
        city_ID: 2400109,
        cityName: "Acari",
      },
      {
        city_ID: 2400208,
        cityName: "Açu",
      },
      {
        city_ID: 2400307,
        cityName: "Afonso Bezerra",
      },
      {
        city_ID: 2400406,
        cityName: "Água Nova",
      },
      {
        city_ID: 2400505,
        cityName: "Alexandria",
      },
      {
        city_ID: 2400604,
        cityName: "Almino Afonso",
      },
      {
        city_ID: 2400703,
        cityName: "Alto do Rodrigues",
      },
      {
        city_ID: 2400802,
        cityName: "Angicos",
      },
      {
        city_ID: 2400901,
        cityName: "Antônio Martins",
      },
      {
        city_ID: 2401008,
        cityName: "Apodi",
      },
      {
        city_ID: 2401107,
        cityName: "Areia Branca",
      },
      {
        city_ID: 2401206,
        cityName: "Arês",
      },
      {
        city_ID: 2401305,
        cityName: "Augusto Severo",
      },
      {
        city_ID: 2401404,
        cityName: "Baía Formosa",
      },
      {
        city_ID: 2401453,
        cityName: "Baraúna",
      },
      {
        city_ID: 2401503,
        cityName: "Barcelona",
      },
      {
        city_ID: 2401602,
        cityName: "Bento Fernandes",
      },
      {
        city_ID: 2401651,
        cityName: "Bodó",
      },
      {
        city_ID: 2401701,
        cityName: "Bom Jesus",
      },
      {
        city_ID: 2401800,
        cityName: "Brejinho",
      },
      {
        city_ID: 2401859,
        cityName: "Caiçara do Norte",
      },
      {
        city_ID: 2401909,
        cityName: "Caiçara do Rio do Vento",
      },
      {
        city_ID: 2402006,
        cityName: "Caicó",
      },
      {
        city_ID: 2402105,
        cityName: "Campo Redondo",
      },
      {
        city_ID: 2402204,
        cityName: "Canguaretama",
      },
      {
        city_ID: 2402303,
        cityName: "Caraúbas",
      },
      {
        city_ID: 2402402,
        cityName: "Carnaúba dos Dantas",
      },
      {
        city_ID: 2402501,
        cityName: "Carnaubais",
      },
      {
        city_ID: 2402600,
        cityName: "Ceará-Mirim",
      },
      {
        city_ID: 2402709,
        cityName: "Cerro Corá",
      },
      {
        city_ID: 2402808,
        cityName: "Coronel Ezequiel",
      },
      {
        city_ID: 2402907,
        cityName: "Coronel João Pessoa",
      },
      {
        city_ID: 2403004,
        cityName: "Cruzeta",
      },
      {
        city_ID: 2403103,
        cityName: "Currais Novos",
      },
      {
        city_ID: 2403202,
        cityName: "Doutor Severiano",
      },
      {
        city_ID: 2403301,
        cityName: "Encanto",
      },
      {
        city_ID: 2403400,
        cityName: "Equador",
      },
      {
        city_ID: 2403509,
        cityName: "Espírito Santo",
      },
      {
        city_ID: 2403608,
        cityName: "Extremoz",
      },
      {
        city_ID: 2403707,
        cityName: "Felipe Guerra",
      },
      {
        city_ID: 2403756,
        cityName: "Fernando Pedroza",
      },
      {
        city_ID: 2403806,
        cityName: "Florânia",
      },
      {
        city_ID: 2403905,
        cityName: "Francisco Dantas",
      },
      {
        city_ID: 2404002,
        cityName: "Frutuoso Gomes",
      },
      {
        city_ID: 2404101,
        cityName: "Galinhos",
      },
      {
        city_ID: 2404200,
        cityName: "Goianinha",
      },
      {
        city_ID: 2404309,
        cityName: "Governador Dix-Sept Rosado",
      },
      {
        city_ID: 2404408,
        cityName: "Grossos",
      },
      {
        city_ID: 2404507,
        cityName: "Guamaré",
      },
      {
        city_ID: 2404606,
        cityName: "Ielmo Marinho",
      },
      {
        city_ID: 2404705,
        cityName: "Ipanguaçu",
      },
      {
        city_ID: 2404804,
        cityName: "Ipueira",
      },
      {
        city_ID: 2404853,
        cityName: "Itajá",
      },
      {
        city_ID: 2404903,
        cityName: "Itaú",
      },
      {
        city_ID: 2405009,
        cityName: "Jaçanã",
      },
      {
        city_ID: 2405108,
        cityName: "Jandaíra",
      },
      {
        city_ID: 2405207,
        cityName: "Janduís",
      },
      {
        city_ID: 2405306,
        cityName: "Januário Cicco",
      },
      {
        city_ID: 2405405,
        cityName: "Japi",
      },
      {
        city_ID: 2405504,
        cityName: "Jardim de Angicos",
      },
      {
        city_ID: 2405603,
        cityName: "Jardim de Piranhas",
      },
      {
        city_ID: 2405702,
        cityName: "Jardim do Seridó",
      },
      {
        city_ID: 2405801,
        cityName: "João Câmara",
      },
      {
        city_ID: 2405900,
        cityName: "João Dias",
      },
      {
        city_ID: 2406007,
        cityName: "José da Penha",
      },
      {
        city_ID: 2406106,
        cityName: "Jucurutu",
      },
      {
        city_ID: 2406155,
        cityName: "Jundiá",
      },
      {
        city_ID: 2406205,
        cityName: "Lagoa d'Anta",
      },
      {
        city_ID: 2406304,
        cityName: "Lagoa de Pedras",
      },
      {
        city_ID: 2406403,
        cityName: "Lagoa de Velhos",
      },
      {
        city_ID: 2406502,
        cityName: "Lagoa Nova",
      },
      {
        city_ID: 2406601,
        cityName: "Lagoa Salgada",
      },
      {
        city_ID: 2406700,
        cityName: "Lajes",
      },
      {
        city_ID: 2406809,
        cityName: "Lajes Pintadas",
      },
      {
        city_ID: 2406908,
        cityName: "Lucrécia",
      },
      {
        city_ID: 2407005,
        cityName: "Luís Gomes",
      },
      {
        city_ID: 2407104,
        cityName: "Macaíba",
      },
      {
        city_ID: 2407203,
        cityName: "Macau",
      },
      {
        city_ID: 2407252,
        cityName: "Major Sales",
      },
      {
        city_ID: 2407302,
        cityName: "Marcelino Vieira",
      },
      {
        city_ID: 2407401,
        cityName: "Martins",
      },
      {
        city_ID: 2407500,
        cityName: "Maxaranguape",
      },
      {
        city_ID: 2407609,
        cityName: "Messias Targino",
      },
      {
        city_ID: 2407708,
        cityName: "Montanhas",
      },
      {
        city_ID: 2407807,
        cityName: "Monte Alegre",
      },
      {
        city_ID: 2407906,
        cityName: "Monte das Gameleiras",
      },
      {
        city_ID: 2408003,
        cityName: "Mossoró",
      },
      {
        city_ID: 2408102,
        cityName: "Natal",
      },
      {
        city_ID: 2408201,
        cityName: "Nísia Floresta",
      },
      {
        city_ID: 2408300,
        cityName: "Nova Cruz",
      },
      {
        city_ID: 2408409,
        cityName: "Olho d'Água do Borges",
      },
      {
        city_ID: 2408508,
        cityName: "Ouro Branco",
      },
      {
        city_ID: 2408607,
        cityName: "Paraná",
      },
      {
        city_ID: 2408706,
        cityName: "Paraú",
      },
      {
        city_ID: 2408805,
        cityName: "Parazinho",
      },
      {
        city_ID: 2408904,
        cityName: "Parelhas",
      },
      {
        city_ID: 2403251,
        cityName: "Parnamirim",
      },
      {
        city_ID: 2409100,
        cityName: "Passa e Fica",
      },
      {
        city_ID: 2409209,
        cityName: "Passagem",
      },
      {
        city_ID: 2409308,
        cityName: "Patu",
      },
      {
        city_ID: 2409407,
        cityName: "Pau dos Ferros",
      },
      {
        city_ID: 2409506,
        cityName: "Pedra Grande",
      },
      {
        city_ID: 2409605,
        cityName: "Pedra Preta",
      },
      {
        city_ID: 2409704,
        cityName: "Pedro Avelino",
      },
      {
        city_ID: 2409803,
        cityName: "Pedro Velho",
      },
      {
        city_ID: 2409902,
        cityName: "Pendências",
      },
      {
        city_ID: 2410009,
        cityName: "Pilões",
      },
      {
        city_ID: 2410108,
        cityName: "Poço Branco",
      },
      {
        city_ID: 2410207,
        cityName: "Portalegre",
      },
      {
        city_ID: 2410256,
        cityName: "Porto do Mangue",
      },
      {
        city_ID: 2410405,
        cityName: "Pureza",
      },
      {
        city_ID: 2410504,
        cityName: "Rafael Fernandes",
      },
      {
        city_ID: 2410603,
        cityName: "Rafael Godeiro",
      },
      {
        city_ID: 2410702,
        cityName: "Riacho da Cruz",
      },
      {
        city_ID: 2410801,
        cityName: "Riacho de Santana",
      },
      {
        city_ID: 2410900,
        cityName: "Riachuelo",
      },
      {
        city_ID: 2408953,
        cityName: "Rio do Fogo",
      },
      {
        city_ID: 2411007,
        cityName: "Rodolfo Fernandes",
      },
      {
        city_ID: 2411106,
        cityName: "Ruy Barbosa",
      },
      {
        city_ID: 2411205,
        cityName: "Santa Cruz",
      },
      {
        city_ID: 2409332,
        cityName: "Santa Maria",
      },
      {
        city_ID: 2411403,
        cityName: "Santana do Matos",
      },
      {
        city_ID: 2411429,
        cityName: "Santana do Seridó",
      },
      {
        city_ID: 2411502,
        cityName: "Santo Antônio",
      },
      {
        city_ID: 2411601,
        cityName: "São Bento do Norte",
      },
      {
        city_ID: 2411700,
        cityName: "São Bento do Trairí",
      },
      {
        city_ID: 2411809,
        cityName: "São Fernando",
      },
      {
        city_ID: 2411908,
        cityName: "São Francisco do Oeste",
      },
      {
        city_ID: 2412005,
        cityName: "São Gonçalo do Amarante",
      },
      {
        city_ID: 2412104,
        cityName: "São João do Sabugi",
      },
      {
        city_ID: 2412203,
        cityName: "São José de Mipibu",
      },
      {
        city_ID: 2412302,
        cityName: "São José do Campestre",
      },
      {
        city_ID: 2412401,
        cityName: "São José do Seridó",
      },
      {
        city_ID: 2412500,
        cityName: "São Miguel",
      },
      {
        city_ID: 2412559,
        cityName: "São Miguel do Gostoso",
      },
      {
        city_ID: 2412609,
        cityName: "São Paulo do Potengi",
      },
      {
        city_ID: 2412708,
        cityName: "São Pedro",
      },
      {
        city_ID: 2412807,
        cityName: "São Rafael",
      },
      {
        city_ID: 2412906,
        cityName: "São Tomé",
      },
      {
        city_ID: 2413003,
        cityName: "São Vicente",
      },
      {
        city_ID: 2413102,
        cityName: "Senador Elói de Souza",
      },
      {
        city_ID: 2413201,
        cityName: "Senador Georgino Avelino",
      },
      {
        city_ID: 2410306,
        cityName: "Serra Caiada",
      },
      {
        city_ID: 2413300,
        cityName: "Serra de São Bento",
      },
      {
        city_ID: 2413359,
        cityName: "Serra do Mel",
      },
      {
        city_ID: 2413409,
        cityName: "Serra Negra do Norte",
      },
      {
        city_ID: 2413508,
        cityName: "Serrinha",
      },
      {
        city_ID: 2413557,
        cityName: "Serrinha dos Pintos",
      },
      {
        city_ID: 2413607,
        cityName: "Severiano Melo",
      },
      {
        city_ID: 2413706,
        cityName: "Sítio Novo",
      },
      {
        city_ID: 2413805,
        cityName: "Taboleiro Grande",
      },
      {
        city_ID: 2413904,
        cityName: "Taipu",
      },
      {
        city_ID: 2414001,
        cityName: "Tangará",
      },
      {
        city_ID: 2414100,
        cityName: "Tenente Ananias",
      },
      {
        city_ID: 2414159,
        cityName: "Tenente Laurentino Cruz",
      },
      {
        city_ID: 2411056,
        cityName: "Tibau",
      },
      {
        city_ID: 2414209,
        cityName: "Tibau do Sul",
      },
      {
        city_ID: 2414308,
        cityName: "Timbaúba dos Batistas",
      },
      {
        city_ID: 2414407,
        cityName: "Touros",
      },
      {
        city_ID: 2414456,
        cityName: "Triunfo Potiguar",
      },
      {
        city_ID: 2414506,
        cityName: "Umarizal",
      },
      {
        city_ID: 2414605,
        cityName: "Upanema",
      },
      {
        city_ID: 2414704,
        cityName: "Várzea",
      },
      {
        city_ID: 2414753,
        cityName: "Venha-Ver",
      },
      {
        city_ID: 2414803,
        cityName: "Vera Cruz",
      },
      {
        city_ID: 2414902,
        cityName: "Viçosa",
      },
      {
        city_ID: 2415008,
        cityName: "Vila Flor",
      },
    ],
  },
  {
    id: 43,
    stateName: "Rio Grande do Sul",
    abv: "RS",
    cities: [
      {
        city_ID: 4300034,
        cityName: "Aceguá",
      },
      {
        city_ID: 4300059,
        cityName: "Água Santa",
      },
      {
        city_ID: 4300109,
        cityName: "Agudo",
      },
      {
        city_ID: 4300208,
        cityName: "Ajuricaba",
      },
      {
        city_ID: 4300307,
        cityName: "Alecrim",
      },
      {
        city_ID: 4300406,
        cityName: "Alegrete",
      },
      {
        city_ID: 4300455,
        cityName: "Alegria",
      },
      {
        city_ID: 4300471,
        cityName: "Almirante Tamandaré do Sul",
      },
      {
        city_ID: 4300505,
        cityName: "Alpestre",
      },
      {
        city_ID: 4300554,
        cityName: "Alto Alegre",
      },
      {
        city_ID: 4300570,
        cityName: "Alto Feliz",
      },
      {
        city_ID: 4300604,
        cityName: "Alvorada",
      },
      {
        city_ID: 4300638,
        cityName: "Amaral Ferrador",
      },
      {
        city_ID: 4300646,
        cityName: "Ametista do Sul",
      },
      {
        city_ID: 4300661,
        cityName: "André da Rocha",
      },
      {
        city_ID: 4300703,
        cityName: "Anta Gorda",
      },
      {
        city_ID: 4300802,
        cityName: "Antônio Prado",
      },
      {
        city_ID: 4300851,
        cityName: "Arambaré",
      },
      {
        city_ID: 4300877,
        cityName: "Araricá",
      },
      {
        city_ID: 4300901,
        cityName: "Aratiba",
      },
      {
        city_ID: 4301008,
        cityName: "Arroio do Meio",
      },
      {
        city_ID: 4301073,
        cityName: "Arroio do Padre",
      },
      {
        city_ID: 4301057,
        cityName: "Arroio do Sal",
      },
      {
        city_ID: 4301206,
        cityName: "Arroio do Tigre",
      },
      {
        city_ID: 4301107,
        cityName: "Arroio dos Ratos",
      },
      {
        city_ID: 4301305,
        cityName: "Arroio Grande",
      },
      {
        city_ID: 4301404,
        cityName: "Arvorezinha",
      },
      {
        city_ID: 4301503,
        cityName: "Augusto Pestana",
      },
      {
        city_ID: 4301552,
        cityName: "Áurea",
      },
      {
        city_ID: 4301602,
        cityName: "Bagé",
      },
      {
        city_ID: 4301636,
        cityName: "Balneário Pinhal",
      },
      {
        city_ID: 4301651,
        cityName: "Barão",
      },
      {
        city_ID: 4301701,
        cityName: "Barão de Cotegipe",
      },
      {
        city_ID: 4301750,
        cityName: "Barão do Triunfo",
      },
      {
        city_ID: 4301859,
        cityName: "Barra do Guarita",
      },
      {
        city_ID: 4301875,
        cityName: "Barra do Quaraí",
      },
      {
        city_ID: 4301909,
        cityName: "Barra do Ribeiro",
      },
      {
        city_ID: 4301925,
        cityName: "Barra do Rio Azul",
      },
      {
        city_ID: 4301958,
        cityName: "Barra Funda",
      },
      {
        city_ID: 4301800,
        cityName: "Barracão",
      },
      {
        city_ID: 4302006,
        cityName: "Barros Cassal",
      },
      {
        city_ID: 4302055,
        cityName: "Benjamin Constant do Sul",
      },
      {
        city_ID: 4302105,
        cityName: "Bento Gonçalves",
      },
      {
        city_ID: 4302154,
        cityName: "Boa Vista das Missões",
      },
      {
        city_ID: 4302204,
        cityName: "Boa Vista do Buricá",
      },
      {
        city_ID: 4302220,
        cityName: "Boa Vista do Cadeado",
      },
      {
        city_ID: 4302238,
        cityName: "Boa Vista do Incra",
      },
      {
        city_ID: 4302253,
        cityName: "Boa Vista do Sul",
      },
      {
        city_ID: 4302303,
        cityName: "Bom Jesus",
      },
      {
        city_ID: 4302352,
        cityName: "Bom Princípio",
      },
      {
        city_ID: 4302378,
        cityName: "Bom Progresso",
      },
      {
        city_ID: 4302402,
        cityName: "Bom Retiro do Sul",
      },
      {
        city_ID: 4302451,
        cityName: "Boqueirão do Leão",
      },
      {
        city_ID: 4302501,
        cityName: "Bossoroca",
      },
      {
        city_ID: 4302584,
        cityName: "Bozano",
      },
      {
        city_ID: 4302600,
        cityName: "Braga",
      },
      {
        city_ID: 4302659,
        cityName: "Brochier",
      },
      {
        city_ID: 4302709,
        cityName: "Butiá",
      },
      {
        city_ID: 4302808,
        cityName: "Caçapava do Sul",
      },
      {
        city_ID: 4302907,
        cityName: "Cacequi",
      },
      {
        city_ID: 4303004,
        cityName: "Cachoeira do Sul",
      },
      {
        city_ID: 4303103,
        cityName: "Cachoeirinha",
      },
      {
        city_ID: 4303202,
        cityName: "Cacique Doble",
      },
      {
        city_ID: 4303301,
        cityName: "Caibaté",
      },
      {
        city_ID: 4303400,
        cityName: "Caiçara",
      },
      {
        city_ID: 4303509,
        cityName: "Camaquã",
      },
      {
        city_ID: 4303558,
        cityName: "Camargo",
      },
      {
        city_ID: 4303608,
        cityName: "Cambará do Sul",
      },
      {
        city_ID: 4303673,
        cityName: "Campestre da Serra",
      },
      {
        city_ID: 4303707,
        cityName: "Campina das Missões",
      },
      {
        city_ID: 4303806,
        cityName: "Campinas do Sul",
      },
      {
        city_ID: 4303905,
        cityName: "Campo Bom",
      },
      {
        city_ID: 4304002,
        cityName: "Campo Novo",
      },
      {
        city_ID: 4304101,
        cityName: "Campos Borges",
      },
      {
        city_ID: 4304200,
        cityName: "Candelária",
      },
      {
        city_ID: 4304309,
        cityName: "Cândido Godói",
      },
      {
        city_ID: 4304358,
        cityName: "Candiota",
      },
      {
        city_ID: 4304408,
        cityName: "Canela",
      },
      {
        city_ID: 4304507,
        cityName: "Canguçu",
      },
      {
        city_ID: 4304606,
        cityName: "Canoas",
      },
      {
        city_ID: 4304614,
        cityName: "Canudos do Vale",
      },
      {
        city_ID: 4304622,
        cityName: "Capão Bonito do Sul",
      },
      {
        city_ID: 4304630,
        cityName: "Capão da Canoa",
      },
      {
        city_ID: 4304655,
        cityName: "Capão do Cipó",
      },
      {
        city_ID: 4304663,
        cityName: "Capão do Leão",
      },
      {
        city_ID: 4304689,
        cityName: "Capela de Santana",
      },
      {
        city_ID: 4304697,
        cityName: "Capitão",
      },
      {
        city_ID: 4304671,
        cityName: "Capivari do Sul",
      },
      {
        city_ID: 4304713,
        cityName: "Caraá",
      },
      {
        city_ID: 4304705,
        cityName: "Carazinho",
      },
      {
        city_ID: 4304804,
        cityName: "Carlos Barbosa",
      },
      {
        city_ID: 4304853,
        cityName: "Carlos Gomes",
      },
      {
        city_ID: 4304903,
        cityName: "Casca",
      },
      {
        city_ID: 4304952,
        cityName: "Caseiros",
      },
      {
        city_ID: 4305009,
        cityName: "Catuípe",
      },
      {
        city_ID: 4305108,
        cityName: "Caxias do Sul",
      },
      {
        city_ID: 4305116,
        cityName: "Centenário",
      },
      {
        city_ID: 4305124,
        cityName: "Cerrito",
      },
      {
        city_ID: 4305132,
        cityName: "Cerro Branco",
      },
      {
        city_ID: 4305157,
        cityName: "Cerro Grande",
      },
      {
        city_ID: 4305173,
        cityName: "Cerro Grande do Sul",
      },
      {
        city_ID: 4305207,
        cityName: "Cerro Largo",
      },
      {
        city_ID: 4305306,
        cityName: "Chapada",
      },
      {
        city_ID: 4305355,
        cityName: "Charqueadas",
      },
      {
        city_ID: 4305371,
        cityName: "Charrua",
      },
      {
        city_ID: 4305405,
        cityName: "Chiapetta",
      },
      {
        city_ID: 4305439,
        cityName: "Chuí",
      },
      {
        city_ID: 4305447,
        cityName: "Chuvisca",
      },
      {
        city_ID: 4305454,
        cityName: "Cidreira",
      },
      {
        city_ID: 4305504,
        cityName: "Ciríaco",
      },
      {
        city_ID: 4305587,
        cityName: "Colinas",
      },
      {
        city_ID: 4305603,
        cityName: "Colorado",
      },
      {
        city_ID: 4305702,
        cityName: "Condor",
      },
      {
        city_ID: 4305801,
        cityName: "Constantina",
      },
      {
        city_ID: 4305835,
        cityName: "Coqueiro Baixo",
      },
      {
        city_ID: 4305850,
        cityName: "Coqueiros do Sul",
      },
      {
        city_ID: 4305871,
        cityName: "Coronel Barros",
      },
      {
        city_ID: 4305900,
        cityName: "Coronel Bicaco",
      },
      {
        city_ID: 4305934,
        cityName: "Coronel Pilar",
      },
      {
        city_ID: 4305959,
        cityName: "Cotiporã",
      },
      {
        city_ID: 4305975,
        cityName: "Coxilha",
      },
      {
        city_ID: 4306007,
        cityName: "Crissiumal",
      },
      {
        city_ID: 4306056,
        cityName: "Cristal",
      },
      {
        city_ID: 4306072,
        cityName: "Cristal do Sul",
      },
      {
        city_ID: 4306106,
        cityName: "Cruz Alta",
      },
      {
        city_ID: 4306130,
        cityName: "Cruzaltense",
      },
      {
        city_ID: 4306205,
        cityName: "Cruzeiro do Sul",
      },
      {
        city_ID: 4306304,
        cityName: "David Canabarro",
      },
      {
        city_ID: 4306320,
        cityName: "Derrubadas",
      },
      {
        city_ID: 4306353,
        cityName: "Dezesseis de Novembro",
      },
      {
        city_ID: 4306379,
        cityName: "Dilermando de Aguiar",
      },
      {
        city_ID: 4306403,
        cityName: "Dois Irmãos",
      },
      {
        city_ID: 4306429,
        cityName: "Dois Irmãos das Missões",
      },
      {
        city_ID: 4306452,
        cityName: "Dois Lajeados",
      },
      {
        city_ID: 4306502,
        cityName: "Dom Feliciano",
      },
      {
        city_ID: 4306601,
        cityName: "Dom Pedrito",
      },
      {
        city_ID: 4306551,
        cityName: "Dom Pedro de Alcântara",
      },
      {
        city_ID: 4306700,
        cityName: "Dona Francisca",
      },
      {
        city_ID: 4306734,
        cityName: "Doutor Maurício Cardoso",
      },
      {
        city_ID: 4306759,
        cityName: "Doutor Ricardo",
      },
      {
        city_ID: 4306767,
        cityName: "Eldorado do Sul",
      },
      {
        city_ID: 4306809,
        cityName: "Encantado",
      },
      {
        city_ID: 4306908,
        cityName: "Encruzilhada do Sul",
      },
      {
        city_ID: 4306924,
        cityName: "Engenho Velho",
      },
      {
        city_ID: 4306957,
        cityName: "Entre Rios do Sul",
      },
      {
        city_ID: 4306932,
        cityName: "Entre-Ijuís",
      },
      {
        city_ID: 4306973,
        cityName: "Erebango",
      },
      {
        city_ID: 4307005,
        cityName: "Erechim",
      },
      {
        city_ID: 4307054,
        cityName: "Ernestina",
      },
      {
        city_ID: 4307203,
        cityName: "Erval Grande",
      },
      {
        city_ID: 4307302,
        cityName: "Erval Seco",
      },
      {
        city_ID: 4307401,
        cityName: "Esmeralda",
      },
      {
        city_ID: 4307450,
        cityName: "Esperança do Sul",
      },
      {
        city_ID: 4307500,
        cityName: "Espumoso",
      },
      {
        city_ID: 4307559,
        cityName: "Estação",
      },
      {
        city_ID: 4307609,
        cityName: "Estância Velha",
      },
      {
        city_ID: 4307708,
        cityName: "Esteio",
      },
      {
        city_ID: 4307807,
        cityName: "Estrela",
      },
      {
        city_ID: 4307815,
        cityName: "Estrela Velha",
      },
      {
        city_ID: 4307831,
        cityName: "Eugênio de Castro",
      },
      {
        city_ID: 4307864,
        cityName: "Fagundes Varela",
      },
      {
        city_ID: 4307906,
        cityName: "Farroupilha",
      },
      {
        city_ID: 4308003,
        cityName: "Faxinal do Soturno",
      },
      {
        city_ID: 4308052,
        cityName: "Faxinalzinho",
      },
      {
        city_ID: 4308078,
        cityName: "Fazenda Vilanova",
      },
      {
        city_ID: 4308102,
        cityName: "Feliz",
      },
      {
        city_ID: 4308201,
        cityName: "Flores da Cunha",
      },
      {
        city_ID: 4308250,
        cityName: "Floriano Peixoto",
      },
      {
        city_ID: 4308300,
        cityName: "Fontoura Xavier",
      },
      {
        city_ID: 4308409,
        cityName: "Formigueiro",
      },
      {
        city_ID: 4308433,
        cityName: "Forquetinha",
      },
      {
        city_ID: 4308458,
        cityName: "Fortaleza dos Valos",
      },
      {
        city_ID: 4308508,
        cityName: "Frederico Westphalen",
      },
      {
        city_ID: 4308607,
        cityName: "Garibaldi",
      },
      {
        city_ID: 4308656,
        cityName: "Garruchos",
      },
      {
        city_ID: 4308706,
        cityName: "Gaurama",
      },
      {
        city_ID: 4308805,
        cityName: "General Câmara",
      },
      {
        city_ID: 4308854,
        cityName: "Gentil",
      },
      {
        city_ID: 4308904,
        cityName: "Getúlio Vargas",
      },
      {
        city_ID: 4309001,
        cityName: "Giruá",
      },
      {
        city_ID: 4309050,
        cityName: "Glorinha",
      },
      {
        city_ID: 4309100,
        cityName: "Gramado",
      },
      {
        city_ID: 4309126,
        cityName: "Gramado dos Loureiros",
      },
      {
        city_ID: 4309159,
        cityName: "Gramado Xavier",
      },
      {
        city_ID: 4309209,
        cityName: "Gravataí",
      },
      {
        city_ID: 4309258,
        cityName: "Guabiju",
      },
      {
        city_ID: 4309308,
        cityName: "Guaíba",
      },
      {
        city_ID: 4309407,
        cityName: "Guaporé",
      },
      {
        city_ID: 4309506,
        cityName: "Guarani das Missões",
      },
      {
        city_ID: 4309555,
        cityName: "Harmonia",
      },
      {
        city_ID: 4307104,
        cityName: "Herval",
      },
      {
        city_ID: 4309571,
        cityName: "Herveiras",
      },
      {
        city_ID: 4309605,
        cityName: "Horizontina",
      },
      {
        city_ID: 4309654,
        cityName: "Hulha Negra",
      },
      {
        city_ID: 4309704,
        cityName: "Humaitá",
      },
      {
        city_ID: 4309753,
        cityName: "Ibarama",
      },
      {
        city_ID: 4309803,
        cityName: "Ibiaçá",
      },
      {
        city_ID: 4309902,
        cityName: "Ibiraiaras",
      },
      {
        city_ID: 4309951,
        cityName: "Ibirapuitã",
      },
      {
        city_ID: 4310009,
        cityName: "Ibirubá",
      },
      {
        city_ID: 4310108,
        cityName: "Igrejinha",
      },
      {
        city_ID: 4310207,
        cityName: "Ijuí",
      },
      {
        city_ID: 4310306,
        cityName: "Ilópolis",
      },
      {
        city_ID: 4310330,
        cityName: "Imbé",
      },
      {
        city_ID: 4310363,
        cityName: "Imigrante",
      },
      {
        city_ID: 4310405,
        cityName: "Independência",
      },
      {
        city_ID: 4310413,
        cityName: "Inhacorá",
      },
      {
        city_ID: 4310439,
        cityName: "Ipê",
      },
      {
        city_ID: 4310462,
        cityName: "Ipiranga do Sul",
      },
      {
        city_ID: 4310504,
        cityName: "Iraí",
      },
      {
        city_ID: 4310538,
        cityName: "Itaara",
      },
      {
        city_ID: 4310553,
        cityName: "Itacurubi",
      },
      {
        city_ID: 4310579,
        cityName: "Itapuca",
      },
      {
        city_ID: 4310603,
        cityName: "Itaqui",
      },
      {
        city_ID: 4310652,
        cityName: "Itati",
      },
      {
        city_ID: 4310702,
        cityName: "Itatiba do Sul",
      },
      {
        city_ID: 4310751,
        cityName: "Ivorá",
      },
      {
        city_ID: 4310801,
        cityName: "Ivoti",
      },
      {
        city_ID: 4310850,
        cityName: "Jaboticaba",
      },
      {
        city_ID: 4310876,
        cityName: "Jacuizinho",
      },
      {
        city_ID: 4310900,
        cityName: "Jacutinga",
      },
      {
        city_ID: 4311007,
        cityName: "Jaguarão",
      },
      {
        city_ID: 4311106,
        cityName: "Jaguari",
      },
      {
        city_ID: 4311122,
        cityName: "Jaquirana",
      },
      {
        city_ID: 4311130,
        cityName: "Jari",
      },
      {
        city_ID: 4311155,
        cityName: "Jóia",
      },
      {
        city_ID: 4311205,
        cityName: "Júlio de Castilhos",
      },
      {
        city_ID: 4311239,
        cityName: "Lagoa Bonita do Sul",
      },
      {
        city_ID: 4311270,
        cityName: "Lagoa dos Três Cantos",
      },
      {
        city_ID: 4311304,
        cityName: "Lagoa Vermelha",
      },
      {
        city_ID: 4311254,
        cityName: "Lagoão",
      },
      {
        city_ID: 4311403,
        cityName: "Lajeado",
      },
      {
        city_ID: 4311429,
        cityName: "Lajeado do Bugre",
      },
      {
        city_ID: 4311502,
        cityName: "Lavras do Sul",
      },
      {
        city_ID: 4311601,
        cityName: "Liberato Salzano",
      },
      {
        city_ID: 4311627,
        cityName: "Lindolfo Collor",
      },
      {
        city_ID: 4311643,
        cityName: "Linha Nova",
      },
      {
        city_ID: 4311718,
        cityName: "Maçambará",
      },
      {
        city_ID: 4311700,
        cityName: "Machadinho",
      },
      {
        city_ID: 4311734,
        cityName: "Mampituba",
      },
      {
        city_ID: 4311759,
        cityName: "Manoel Viana",
      },
      {
        city_ID: 4311775,
        cityName: "Maquiné",
      },
      {
        city_ID: 4311791,
        cityName: "Maratá",
      },
      {
        city_ID: 4311809,
        cityName: "Marau",
      },
      {
        city_ID: 4311908,
        cityName: "Marcelino Ramos",
      },
      {
        city_ID: 4311981,
        cityName: "Mariana Pimentel",
      },
      {
        city_ID: 4312005,
        cityName: "Mariano Moro",
      },
      {
        city_ID: 4312054,
        cityName: "Marques de Souza",
      },
      {
        city_ID: 4312104,
        cityName: "Mata",
      },
      {
        city_ID: 4312138,
        cityName: "Mato Castelhano",
      },
      {
        city_ID: 4312153,
        cityName: "Mato Leitão",
      },
      {
        city_ID: 4312179,
        cityName: "Mato Queimado",
      },
      {
        city_ID: 4312203,
        cityName: "Maximiliano de Almeida",
      },
      {
        city_ID: 4312252,
        cityName: "Minas do Leão",
      },
      {
        city_ID: 4312302,
        cityName: "Miraguaí",
      },
      {
        city_ID: 4312351,
        cityName: "Montauri",
      },
      {
        city_ID: 4312377,
        cityName: "Monte Alegre dos Campos",
      },
      {
        city_ID: 4312385,
        cityName: "Monte Belo do Sul",
      },
      {
        city_ID: 4312401,
        cityName: "Montenegro",
      },
      {
        city_ID: 4312427,
        cityName: "Mormaço",
      },
      {
        city_ID: 4312443,
        cityName: "Morrinhos do Sul",
      },
      {
        city_ID: 4312450,
        cityName: "Morro Redondo",
      },
      {
        city_ID: 4312476,
        cityName: "Morro Reuter",
      },
      {
        city_ID: 4312500,
        cityName: "Mostardas",
      },
      {
        city_ID: 4312609,
        cityName: "Muçum",
      },
      {
        city_ID: 4312617,
        cityName: "Muitos Capões",
      },
      {
        city_ID: 4312625,
        cityName: "Muliterno",
      },
      {
        city_ID: 4312658,
        cityName: "Não-Me-Toque",
      },
      {
        city_ID: 4312674,
        cityName: "Nicolau Vergueiro",
      },
      {
        city_ID: 4312708,
        cityName: "Nonoai",
      },
      {
        city_ID: 4312757,
        cityName: "Nova Alvorada",
      },
      {
        city_ID: 4312807,
        cityName: "Nova Araçá",
      },
      {
        city_ID: 4312906,
        cityName: "Nova Bassano",
      },
      {
        city_ID: 4312955,
        cityName: "Nova Boa Vista",
      },
      {
        city_ID: 4313003,
        cityName: "Nova Bréscia",
      },
      {
        city_ID: 4313011,
        cityName: "Nova Candelária",
      },
      {
        city_ID: 4313037,
        cityName: "Nova Esperança do Sul",
      },
      {
        city_ID: 4313060,
        cityName: "Nova Hartz",
      },
      {
        city_ID: 4313086,
        cityName: "Nova Pádua",
      },
      {
        city_ID: 4313102,
        cityName: "Nova Palma",
      },
      {
        city_ID: 4313201,
        cityName: "Nova Petrópolis",
      },
      {
        city_ID: 4313300,
        cityName: "Nova Prata",
      },
      {
        city_ID: 4313334,
        cityName: "Nova Ramada",
      },
      {
        city_ID: 4313359,
        cityName: "Nova Roma do Sul",
      },
      {
        city_ID: 4313375,
        cityName: "Nova Santa Rita",
      },
      {
        city_ID: 4313490,
        cityName: "Novo Barreiro",
      },
      {
        city_ID: 4313391,
        cityName: "Novo Cabrais",
      },
      {
        city_ID: 4313409,
        cityName: "Novo Hamburgo",
      },
      {
        city_ID: 4313425,
        cityName: "Novo Machado",
      },
      {
        city_ID: 4313441,
        cityName: "Novo Tiradentes",
      },
      {
        city_ID: 4313466,
        cityName: "Novo Xingu",
      },
      {
        city_ID: 4313508,
        cityName: "Osório",
      },
      {
        city_ID: 4313607,
        cityName: "Paim Filho",
      },
      {
        city_ID: 4313656,
        cityName: "Palmares do Sul",
      },
      {
        city_ID: 4313706,
        cityName: "Palmeira das Missões",
      },
      {
        city_ID: 4313805,
        cityName: "Palmitinho",
      },
      {
        city_ID: 4313904,
        cityName: "Panambi",
      },
      {
        city_ID: 4313953,
        cityName: "Pantano Grande",
      },
      {
        city_ID: 4314001,
        cityName: "Paraí",
      },
      {
        city_ID: 4314027,
        cityName: "Paraíso do Sul",
      },
      {
        city_ID: 4314035,
        cityName: "Pareci Novo",
      },
      {
        city_ID: 4314050,
        cityName: "Parobé",
      },
      {
        city_ID: 4314068,
        cityName: "Passa Sete",
      },
      {
        city_ID: 4314076,
        cityName: "Passo do Sobrado",
      },
      {
        city_ID: 4314100,
        cityName: "Passo Fundo",
      },
      {
        city_ID: 4314134,
        cityName: "Paulo Bento",
      },
      {
        city_ID: 4314159,
        cityName: "Paverama",
      },
      {
        city_ID: 4314175,
        cityName: "Pedras Altas",
      },
      {
        city_ID: 4314209,
        cityName: "Pedro Osório",
      },
      {
        city_ID: 4314308,
        cityName: "Pejuçara",
      },
      {
        city_ID: 4314407,
        cityName: "Pelotas",
      },
      {
        city_ID: 4314423,
        cityName: "Picada Café",
      },
      {
        city_ID: 4314456,
        cityName: "Pinhal",
      },
      {
        city_ID: 4314464,
        cityName: "Pinhal da Serra",
      },
      {
        city_ID: 4314472,
        cityName: "Pinhal Grande",
      },
      {
        city_ID: 4314498,
        cityName: "Pinheirinho do Vale",
      },
      {
        city_ID: 4314506,
        cityName: "Pinheiro Machado",
      },
      {
        city_ID: 4314548,
        cityName: "Pinto Bandeira",
      },
      {
        city_ID: 4314555,
        cityName: "Pirapó",
      },
      {
        city_ID: 4314605,
        cityName: "Piratini",
      },
      {
        city_ID: 4314704,
        cityName: "Planalto",
      },
      {
        city_ID: 4314753,
        cityName: "Poço das Antas",
      },
      {
        city_ID: 4314779,
        cityName: "Pontão",
      },
      {
        city_ID: 4314787,
        cityName: "Ponte Preta",
      },
      {
        city_ID: 4314803,
        cityName: "Portão",
      },
      {
        city_ID: 4314902,
        cityName: "Porto Alegre",
      },
      {
        city_ID: 4315008,
        cityName: "Porto Lucena",
      },
      {
        city_ID: 4315057,
        cityName: "Porto Mauá",
      },
      {
        city_ID: 4315073,
        cityName: "Porto Vera Cruz",
      },
      {
        city_ID: 4315107,
        cityName: "Porto Xavier",
      },
      {
        city_ID: 4315131,
        cityName: "Pouso Novo",
      },
      {
        city_ID: 4315149,
        cityName: "Presidente Lucena",
      },
      {
        city_ID: 4315156,
        cityName: "Progresso",
      },
      {
        city_ID: 4315172,
        cityName: "Protásio Alves",
      },
      {
        city_ID: 4315206,
        cityName: "Putinga",
      },
      {
        city_ID: 4315305,
        cityName: "Quaraí",
      },
      {
        city_ID: 4315313,
        cityName: "Quatro Irmãos",
      },
      {
        city_ID: 4315321,
        cityName: "Quevedos",
      },
      {
        city_ID: 4315354,
        cityName: "Quinze de Novembro",
      },
      {
        city_ID: 4315404,
        cityName: "Redentora",
      },
      {
        city_ID: 4315453,
        cityName: "Relvado",
      },
      {
        city_ID: 4315503,
        cityName: "Restinga Sêca",
      },
      {
        city_ID: 4315552,
        cityName: "Rio dos Índios",
      },
      {
        city_ID: 4315602,
        cityName: "Rio Grande",
      },
      {
        city_ID: 4315701,
        cityName: "Rio Pardo",
      },
      {
        city_ID: 4315750,
        cityName: "Riozinho",
      },
      {
        city_ID: 4315800,
        cityName: "Roca Sales",
      },
      {
        city_ID: 4315909,
        cityName: "Rodeio Bonito",
      },
      {
        city_ID: 4315958,
        cityName: "Rolador",
      },
      {
        city_ID: 4316006,
        cityName: "Rolante",
      },
      {
        city_ID: 4316105,
        cityName: "Ronda Alta",
      },
      {
        city_ID: 4316204,
        cityName: "Rondinha",
      },
      {
        city_ID: 4316303,
        cityName: "Roque Gonzales",
      },
      {
        city_ID: 4316402,
        cityName: "Rosário do Sul",
      },
      {
        city_ID: 4316428,
        cityName: "Sagrada Família",
      },
      {
        city_ID: 4316436,
        cityName: "Saldanha Marinho",
      },
      {
        city_ID: 4316451,
        cityName: "Salto do Jacuí",
      },
      {
        city_ID: 4316477,
        cityName: "Salvador das Missões",
      },
      {
        city_ID: 4316501,
        cityName: "Salvador do Sul",
      },
      {
        city_ID: 4316600,
        cityName: "Sananduva",
      },
      {
        city_ID: 4316709,
        cityName: "Santa Bárbara do Sul",
      },
      {
        city_ID: 4316733,
        cityName: "Santa Cecília do Sul",
      },
      {
        city_ID: 4316758,
        cityName: "Santa Clara do Sul",
      },
      {
        city_ID: 4316808,
        cityName: "Santa Cruz do Sul",
      },
      {
        city_ID: 4316972,
        cityName: "Santa Margarida do Sul",
      },
      {
        city_ID: 4316907,
        cityName: "Santa Maria",
      },
      {
        city_ID: 4316956,
        cityName: "Santa Maria do Herval",
      },
      {
        city_ID: 4317202,
        cityName: "Santa Rosa",
      },
      {
        city_ID: 4317251,
        cityName: "Santa Tereza",
      },
      {
        city_ID: 4317301,
        cityName: "Santa Vitória do Palmar",
      },
      {
        city_ID: 4317004,
        cityName: "Santana da Boa Vista",
      },
      {
        city_ID: 4317103,
        cityName: "Sant'Ana do Livramento",
      },
      {
        city_ID: 4317400,
        cityName: "Santiago",
      },
      {
        city_ID: 4317509,
        cityName: "Santo Ângelo",
      },
      {
        city_ID: 4317608,
        cityName: "Santo Antônio da Patrulha",
      },
      {
        city_ID: 4317707,
        cityName: "Santo Antônio das Missões",
      },
      {
        city_ID: 4317558,
        cityName: "Santo Antônio do Palma",
      },
      {
        city_ID: 4317756,
        cityName: "Santo Antônio do Planalto",
      },
      {
        city_ID: 4317806,
        cityName: "Santo Augusto",
      },
      {
        city_ID: 4317905,
        cityName: "Santo Cristo",
      },
      {
        city_ID: 4317954,
        cityName: "Santo Expedito do Sul",
      },
      {
        city_ID: 4318002,
        cityName: "São Borja",
      },
      {
        city_ID: 4318051,
        cityName: "São Domingos do Sul",
      },
      {
        city_ID: 4318101,
        cityName: "São Francisco de Assis",
      },
      {
        city_ID: 4318200,
        cityName: "São Francisco de Paula",
      },
      {
        city_ID: 4318309,
        cityName: "São Gabriel",
      },
      {
        city_ID: 4318408,
        cityName: "São Jerônimo",
      },
      {
        city_ID: 4318424,
        cityName: "São João da Urtiga",
      },
      {
        city_ID: 4318432,
        cityName: "São João do Polêsine",
      },
      {
        city_ID: 4318440,
        cityName: "São Jorge",
      },
      {
        city_ID: 4318457,
        cityName: "São José das Missões",
      },
      {
        city_ID: 4318465,
        cityName: "São José do Herval",
      },
      {
        city_ID: 4318481,
        cityName: "São José do Hortêncio",
      },
      {
        city_ID: 4318499,
        cityName: "São José do Inhacorá",
      },
      {
        city_ID: 4318507,
        cityName: "São José do Norte",
      },
      {
        city_ID: 4318606,
        cityName: "São José do Ouro",
      },
      {
        city_ID: 4318614,
        cityName: "São José do Sul",
      },
      {
        city_ID: 4318622,
        cityName: "São José dos Ausentes",
      },
      {
        city_ID: 4318705,
        cityName: "São Leopoldo",
      },
      {
        city_ID: 4318804,
        cityName: "São Lourenço do Sul",
      },
      {
        city_ID: 4318903,
        cityName: "São Luiz Gonzaga",
      },
      {
        city_ID: 4319000,
        cityName: "São Marcos",
      },
      {
        city_ID: 4319109,
        cityName: "São Martinho",
      },
      {
        city_ID: 4319125,
        cityName: "São Martinho da Serra",
      },
      {
        city_ID: 4319158,
        cityName: "São Miguel das Missões",
      },
      {
        city_ID: 4319208,
        cityName: "São Nicolau",
      },
      {
        city_ID: 4319307,
        cityName: "São Paulo das Missões",
      },
      {
        city_ID: 4319356,
        cityName: "São Pedro da Serra",
      },
      {
        city_ID: 4319364,
        cityName: "São Pedro das Missões",
      },
      {
        city_ID: 4319372,
        cityName: "São Pedro do Butiá",
      },
      {
        city_ID: 4319406,
        cityName: "São Pedro do Sul",
      },
      {
        city_ID: 4319505,
        cityName: "São Sebastião do Caí",
      },
      {
        city_ID: 4319604,
        cityName: "São Sepé",
      },
      {
        city_ID: 4319703,
        cityName: "São Valentim",
      },
      {
        city_ID: 4319711,
        cityName: "São Valentim do Sul",
      },
      {
        city_ID: 4319737,
        cityName: "São Valério do Sul",
      },
      {
        city_ID: 4319752,
        cityName: "São Vendelino",
      },
      {
        city_ID: 4319802,
        cityName: "São Vicente do Sul",
      },
      {
        city_ID: 4319901,
        cityName: "Sapiranga",
      },
      {
        city_ID: 4320008,
        cityName: "Sapucaia do Sul",
      },
      {
        city_ID: 4320107,
        cityName: "Sarandi",
      },
      {
        city_ID: 4320206,
        cityName: "Seberi",
      },
      {
        city_ID: 4320230,
        cityName: "Sede Nova",
      },
      {
        city_ID: 4320263,
        cityName: "Segredo",
      },
      {
        city_ID: 4320305,
        cityName: "Selbach",
      },
      {
        city_ID: 4320321,
        cityName: "Senador Salgado Filho",
      },
      {
        city_ID: 4320354,
        cityName: "Sentinela do Sul",
      },
      {
        city_ID: 4320404,
        cityName: "Serafina Corrêa",
      },
      {
        city_ID: 4320453,
        cityName: "Sério",
      },
      {
        city_ID: 4320503,
        cityName: "Sertão",
      },
      {
        city_ID: 4320552,
        cityName: "Sertão Santana",
      },
      {
        city_ID: 4320578,
        cityName: "Sete de Setembro",
      },
      {
        city_ID: 4320602,
        cityName: "Severiano de Almeida",
      },
      {
        city_ID: 4320651,
        cityName: "Silveira Martins",
      },
      {
        city_ID: 4320677,
        cityName: "Sinimbu",
      },
      {
        city_ID: 4320701,
        cityName: "Sobradinho",
      },
      {
        city_ID: 4320800,
        cityName: "Soledade",
      },
      {
        city_ID: 4320859,
        cityName: "Tabaí",
      },
      {
        city_ID: 4320909,
        cityName: "Tapejara",
      },
      {
        city_ID: 4321006,
        cityName: "Tapera",
      },
      {
        city_ID: 4321105,
        cityName: "Tapes",
      },
      {
        city_ID: 4321204,
        cityName: "Taquara",
      },
      {
        city_ID: 4321303,
        cityName: "Taquari",
      },
      {
        city_ID: 4321329,
        cityName: "Taquaruçu do Sul",
      },
      {
        city_ID: 4321352,
        cityName: "Tavares",
      },
      {
        city_ID: 4321402,
        cityName: "Tenente Portela",
      },
      {
        city_ID: 4321436,
        cityName: "Terra de Areia",
      },
      {
        city_ID: 4321451,
        cityName: "Teutônia",
      },
      {
        city_ID: 4321469,
        cityName: "Tio Hugo",
      },
      {
        city_ID: 4321477,
        cityName: "Tiradentes do Sul",
      },
      {
        city_ID: 4321493,
        cityName: "Toropi",
      },
      {
        city_ID: 4321501,
        cityName: "Torres",
      },
      {
        city_ID: 4321600,
        cityName: "Tramandaí",
      },
      {
        city_ID: 4321626,
        cityName: "Travesseiro",
      },
      {
        city_ID: 4321634,
        cityName: "Três Arroios",
      },
      {
        city_ID: 4321667,
        cityName: "Três Cachoeiras",
      },
      {
        city_ID: 4321709,
        cityName: "Três Coroas",
      },
      {
        city_ID: 4321808,
        cityName: "Três de Maio",
      },
      {
        city_ID: 4321832,
        cityName: "Três Forquilhas",
      },
      {
        city_ID: 4321857,
        cityName: "Três Palmeiras",
      },
      {
        city_ID: 4321907,
        cityName: "Três Passos",
      },
      {
        city_ID: 4321956,
        cityName: "Trindade do Sul",
      },
      {
        city_ID: 4322004,
        cityName: "Triunfo",
      },
      {
        city_ID: 4322103,
        cityName: "Tucunduva",
      },
      {
        city_ID: 4322152,
        cityName: "Tunas",
      },
      {
        city_ID: 4322186,
        cityName: "Tupanci do Sul",
      },
      {
        city_ID: 4322202,
        cityName: "Tupanciretã",
      },
      {
        city_ID: 4322251,
        cityName: "Tupandi",
      },
      {
        city_ID: 4322301,
        cityName: "Tuparendi",
      },
      {
        city_ID: 4322327,
        cityName: "Turuçu",
      },
      {
        city_ID: 4322343,
        cityName: "Ubiretama",
      },
      {
        city_ID: 4322350,
        cityName: "União da Serra",
      },
      {
        city_ID: 4322376,
        cityName: "Unistalda",
      },
      {
        city_ID: 4322400,
        cityName: "Uruguaiana",
      },
      {
        city_ID: 4322509,
        cityName: "Vacaria",
      },
      {
        city_ID: 4322533,
        cityName: "Vale do Sol",
      },
      {
        city_ID: 4322541,
        cityName: "Vale Real",
      },
      {
        city_ID: 4322525,
        cityName: "Vale Verde",
      },
      {
        city_ID: 4322558,
        cityName: "Vanini",
      },
      {
        city_ID: 4322608,
        cityName: "Venâncio Aires",
      },
      {
        city_ID: 4322707,
        cityName: "Vera Cruz",
      },
      {
        city_ID: 4322806,
        cityName: "Veranópolis",
      },
      {
        city_ID: 4322855,
        cityName: "Vespasiano Corrêa",
      },
      {
        city_ID: 4322905,
        cityName: "Viadutos",
      },
      {
        city_ID: 4323002,
        cityName: "Viamão",
      },
      {
        city_ID: 4323101,
        cityName: "Vicente Dutra",
      },
      {
        city_ID: 4323200,
        cityName: "Victor Graeff",
      },
      {
        city_ID: 4323309,
        cityName: "Vila Flores",
      },
      {
        city_ID: 4323358,
        cityName: "Vila Lângaro",
      },
      {
        city_ID: 4323408,
        cityName: "Vila Maria",
      },
      {
        city_ID: 4323457,
        cityName: "Vila Nova do Sul",
      },
      {
        city_ID: 4323507,
        cityName: "Vista Alegre",
      },
      {
        city_ID: 4323606,
        cityName: "Vista Alegre do Prata",
      },
      {
        city_ID: 4323705,
        cityName: "Vista Gaúcha",
      },
      {
        city_ID: 4323754,
        cityName: "Vitória das Missões",
      },
      {
        city_ID: 4323770,
        cityName: "Westfália",
      },
      {
        city_ID: 4323804,
        cityName: "Xangri-lá",
      },
    ],
  },
  {
    id: 11,
    stateName: "Rondônia",
    abv: "RO",
    cities: [
      {
        city_ID: 1100015,
        cityName: "Alta Floresta D'Oeste",
      },
      {
        city_ID: 1100379,
        cityName: "Alto Alegre dos Parecis",
      },
      {
        city_ID: 1100403,
        cityName: "Alto Paraíso",
      },
      {
        city_ID: 1100346,
        cityName: "Alvorada D'Oeste",
      },
      {
        city_ID: 1100023,
        cityName: "Ariquemes",
      },
      {
        city_ID: 1100452,
        cityName: "Buritis",
      },
      {
        city_ID: 1100031,
        cityName: "Cabixi",
      },
      {
        city_ID: 1100601,
        cityName: "Cacaulândia",
      },
      {
        city_ID: 1100049,
        cityName: "Cacoal",
      },
      {
        city_ID: 1100700,
        cityName: "Campo Novo de Rondônia",
      },
      {
        city_ID: 1100809,
        cityName: "Candeias do Jamari",
      },
      {
        city_ID: 1100908,
        cityName: "Castanheiras",
      },
      {
        city_ID: 1100056,
        cityName: "Cerejeiras",
      },
      {
        city_ID: 1100924,
        cityName: "Chupinguaia",
      },
      {
        city_ID: 1100064,
        cityName: "Colorado do Oeste",
      },
      {
        city_ID: 1100072,
        cityName: "Corumbiara",
      },
      {
        city_ID: 1100080,
        cityName: "Costa Marques",
      },
      {
        city_ID: 1100940,
        cityName: "Cujubim",
      },
      {
        city_ID: 1100098,
        cityName: "Espigão D'Oeste",
      },
      {
        city_ID: 1101005,
        cityName: "Governador Jorge Teixeira",
      },
      {
        city_ID: 1100106,
        cityName: "Guajará-Mirim",
      },
      {
        city_ID: 1101104,
        cityName: "Itapuã do Oeste",
      },
      {
        city_ID: 1100114,
        cityName: "Jaru",
      },
      {
        city_ID: 1100122,
        cityName: "Ji-Paraná",
      },
      {
        city_ID: 1100130,
        cityName: "Machadinho D'Oeste",
      },
      {
        city_ID: 1101203,
        cityName: "Ministro Andreazza",
      },
      {
        city_ID: 1101302,
        cityName: "Mirante da Serra",
      },
      {
        city_ID: 1101401,
        cityName: "Monte Negro",
      },
      {
        city_ID: 1100148,
        cityName: "Nova Brasilândia D'Oeste",
      },
      {
        city_ID: 1100338,
        cityName: "Nova Mamoré",
      },
      {
        city_ID: 1101435,
        cityName: "Nova União",
      },
      {
        city_ID: 1100502,
        cityName: "Novo Horizonte do Oeste",
      },
      {
        city_ID: 1100155,
        cityName: "Ouro Preto do Oeste",
      },
      {
        city_ID: 1101450,
        cityName: "Parecis",
      },
      {
        city_ID: 1100189,
        cityName: "Pimenta Bueno",
      },
      {
        city_ID: 1101468,
        cityName: "Pimenteiras do Oeste",
      },
      {
        city_ID: 1100205,
        cityName: "Porto Velho",
      },
      {
        city_ID: 1100254,
        cityName: "Presidente Médici",
      },
      {
        city_ID: 1101476,
        cityName: "Primavera de Rondônia",
      },
      {
        city_ID: 1100262,
        cityName: "Rio Crespo",
      },
      {
        city_ID: 1100288,
        cityName: "Rolim de Moura",
      },
      {
        city_ID: 1100296,
        cityName: "Santa Luzia D'Oeste",
      },
      {
        city_ID: 1101484,
        cityName: "São Felipe D'Oeste",
      },
      {
        city_ID: 1101492,
        cityName: "São Francisco do Guaporé",
      },
      {
        city_ID: 1100320,
        cityName: "São Miguel do Guaporé",
      },
      {
        city_ID: 1101500,
        cityName: "Seringueiras",
      },
      {
        city_ID: 1101559,
        cityName: "Teixeirópolis",
      },
      {
        city_ID: 1101609,
        cityName: "Theobroma",
      },
      {
        city_ID: 1101708,
        cityName: "Urupá",
      },
      {
        city_ID: 1101757,
        cityName: "Vale do Anari",
      },
      {
        city_ID: 1101807,
        cityName: "Vale do Paraíso",
      },
      {
        city_ID: 1100304,
        cityName: "Vilhena",
      },
    ],
  },
  {
    id: 14,
    stateName: "Roraima",
    abv: "RR",
    cities: [
      {
        city_ID: 1400050,
        cityName: "Alto Alegre",
      },
      {
        city_ID: 1400027,
        cityName: "Amajari",
      },
      {
        city_ID: 1400100,
        cityName: "Boa Vista",
      },
      {
        city_ID: 1400159,
        cityName: "Bonfim",
      },
      {
        city_ID: 1400175,
        cityName: "Cantá",
      },
      {
        city_ID: 1400209,
        cityName: "Caracaraí",
      },
      {
        city_ID: 1400233,
        cityName: "Caroebe",
      },
      {
        city_ID: 1400282,
        cityName: "Iracema",
      },
      {
        city_ID: 1400308,
        cityName: "Mucajaí",
      },
      {
        city_ID: 1400407,
        cityName: "Normandia",
      },
      {
        city_ID: 1400456,
        cityName: "Pacaraima",
      },
      {
        city_ID: 1400472,
        cityName: "Rorainópolis",
      },
      {
        city_ID: 1400506,
        cityName: "São João da Baliza",
      },
      {
        city_ID: 1400605,
        cityName: "São Luiz",
      },
      {
        city_ID: 1400704,
        cityName: "Uiramutã",
      },
    ],
  },
  {
    id: 42,
    stateName: "Santa Catarina",
    abv: "SC",
    cities: [
      {
        city_ID: 4200051,
        cityName: "Abdon Batista",
      },
      {
        city_ID: 4200101,
        cityName: "Abelardo Luz",
      },
      {
        city_ID: 4200200,
        cityName: "Agrolândia",
      },
      {
        city_ID: 4200309,
        cityName: "Agronômica",
      },
      {
        city_ID: 4200408,
        cityName: "Água Doce",
      },
      {
        city_ID: 4200507,
        cityName: "Águas de Chapecó",
      },
      {
        city_ID: 4200556,
        cityName: "Águas Frias",
      },
      {
        city_ID: 4200606,
        cityName: "Águas Mornas",
      },
      {
        city_ID: 4200705,
        cityName: "Alfredo Wagner",
      },
      {
        city_ID: 4200754,
        cityName: "Alto Bela Vista",
      },
      {
        city_ID: 4200804,
        cityName: "Anchieta",
      },
      {
        city_ID: 4200903,
        cityName: "Angelina",
      },
      {
        city_ID: 4201000,
        cityName: "Anita Garibaldi",
      },
      {
        city_ID: 4201109,
        cityName: "Anitápolis",
      },
      {
        city_ID: 4201208,
        cityName: "Antônio Carlos",
      },
      {
        city_ID: 4201257,
        cityName: "Apiúna",
      },
      {
        city_ID: 4201273,
        cityName: "Arabutã",
      },
      {
        city_ID: 4201307,
        cityName: "Araquari",
      },
      {
        city_ID: 4201406,
        cityName: "Araranguá",
      },
      {
        city_ID: 4201505,
        cityName: "Armazém",
      },
      {
        city_ID: 4201604,
        cityName: "Arroio Trinta",
      },
      {
        city_ID: 4201653,
        cityName: "Arvoredo",
      },
      {
        city_ID: 4201703,
        cityName: "Ascurra",
      },
      {
        city_ID: 4201802,
        cityName: "Atalanta",
      },
      {
        city_ID: 4201901,
        cityName: "Aurora",
      },
      {
        city_ID: 4201950,
        cityName: "Balneário Arroio do Silva",
      },
      {
        city_ID: 4202057,
        cityName: "Balneário Barra do Sul",
      },
      {
        city_ID: 4202008,
        cityName: "Balneário Camboriú",
      },
      {
        city_ID: 4202073,
        cityName: "Balneário Gaivota",
      },
      {
        city_ID: 4212809,
        cityName: "Balneário Piçarras",
      },
      {
        city_ID: 4220000,
        cityName: "Balneário Rincão",
      },
      {
        city_ID: 4202081,
        cityName: "Bandeirante",
      },
      {
        city_ID: 4202099,
        cityName: "Barra Bonita",
      },
      {
        city_ID: 4202107,
        cityName: "Barra Velha",
      },
      {
        city_ID: 4202131,
        cityName: "Bela Vista do Toldo",
      },
      {
        city_ID: 4202156,
        cityName: "Belmonte",
      },
      {
        city_ID: 4202206,
        cityName: "Benedito Novo",
      },
      {
        city_ID: 4202305,
        cityName: "Biguaçu",
      },
      {
        city_ID: 4202404,
        cityName: "Blumenau",
      },
      {
        city_ID: 4202438,
        cityName: "Bocaina do Sul",
      },
      {
        city_ID: 4202503,
        cityName: "Bom Jardim da Serra",
      },
      {
        city_ID: 4202537,
        cityName: "Bom Jesus",
      },
      {
        city_ID: 4202578,
        cityName: "Bom Jesus do Oeste",
      },
      {
        city_ID: 4202602,
        cityName: "Bom Retiro",
      },
      {
        city_ID: 4202453,
        cityName: "Bombinhas",
      },
      {
        city_ID: 4202701,
        cityName: "Botuverá",
      },
      {
        city_ID: 4202800,
        cityName: "Braço do Norte",
      },
      {
        city_ID: 4202859,
        cityName: "Braço do Trombudo",
      },
      {
        city_ID: 4202875,
        cityName: "Brunópolis",
      },
      {
        city_ID: 4202909,
        cityName: "Brusque",
      },
      {
        city_ID: 4203006,
        cityName: "Caçador",
      },
      {
        city_ID: 4203105,
        cityName: "Caibi",
      },
      {
        city_ID: 4203154,
        cityName: "Calmon",
      },
      {
        city_ID: 4203204,
        cityName: "Camboriú",
      },
      {
        city_ID: 4203303,
        cityName: "Campo Alegre",
      },
      {
        city_ID: 4203402,
        cityName: "Campo Belo do Sul",
      },
      {
        city_ID: 4203501,
        cityName: "Campo Erê",
      },
      {
        city_ID: 4203600,
        cityName: "Campos Novos",
      },
      {
        city_ID: 4203709,
        cityName: "Canelinha",
      },
      {
        city_ID: 4203808,
        cityName: "Canoinhas",
      },
      {
        city_ID: 4203253,
        cityName: "Capão Alto",
      },
      {
        city_ID: 4203907,
        cityName: "Capinzal",
      },
      {
        city_ID: 4203956,
        cityName: "Capivari de Baixo",
      },
      {
        city_ID: 4204004,
        cityName: "Catanduvas",
      },
      {
        city_ID: 4204103,
        cityName: "Caxambu do Sul",
      },
      {
        city_ID: 4204152,
        cityName: "Celso Ramos",
      },
      {
        city_ID: 4204178,
        cityName: "Cerro Negro",
      },
      {
        city_ID: 4204194,
        cityName: "Chapadão do Lageado",
      },
      {
        city_ID: 4204202,
        cityName: "Chapecó",
      },
      {
        city_ID: 4204251,
        cityName: "Cocal do Sul",
      },
      {
        city_ID: 4204301,
        cityName: "Concórdia",
      },
      {
        city_ID: 4204350,
        cityName: "Cordilheira Alta",
      },
      {
        city_ID: 4204400,
        cityName: "Coronel Freitas",
      },
      {
        city_ID: 4204459,
        cityName: "Coronel Martins",
      },
      {
        city_ID: 4204558,
        cityName: "Correia Pinto",
      },
      {
        city_ID: 4204509,
        cityName: "Corupá",
      },
      {
        city_ID: 4204608,
        cityName: "Criciúma",
      },
      {
        city_ID: 4204707,
        cityName: "Cunha Porã",
      },
      {
        city_ID: 4204756,
        cityName: "Cunhataí",
      },
      {
        city_ID: 4204806,
        cityName: "Curitibanos",
      },
      {
        city_ID: 4204905,
        cityName: "Descanso",
      },
      {
        city_ID: 4205001,
        cityName: "Dionísio Cerqueira",
      },
      {
        city_ID: 4205100,
        cityName: "Dona Emma",
      },
      {
        city_ID: 4205159,
        cityName: "Doutor Pedrinho",
      },
      {
        city_ID: 4205175,
        cityName: "Entre Rios",
      },
      {
        city_ID: 4205191,
        cityName: "Ermo",
      },
      {
        city_ID: 4205209,
        cityName: "Erval Velho",
      },
      {
        city_ID: 4205308,
        cityName: "Faxinal dos Guedes",
      },
      {
        city_ID: 4205357,
        cityName: "Flor do Sertão",
      },
      {
        city_ID: 4205407,
        cityName: "Florianópolis",
      },
      {
        city_ID: 4205431,
        cityName: "Formosa do Sul",
      },
      {
        city_ID: 4205456,
        cityName: "Forquilhinha",
      },
      {
        city_ID: 4205506,
        cityName: "Fraiburgo",
      },
      {
        city_ID: 4205555,
        cityName: "Frei Rogério",
      },
      {
        city_ID: 4205605,
        cityName: "Galvão",
      },
      {
        city_ID: 4205704,
        cityName: "Garopaba",
      },
      {
        city_ID: 4205803,
        cityName: "Garuva",
      },
      {
        city_ID: 4205902,
        cityName: "Gaspar",
      },
      {
        city_ID: 4206009,
        cityName: "Governador Celso Ramos",
      },
      {
        city_ID: 4206108,
        cityName: "Grão Pará",
      },
      {
        city_ID: 4206207,
        cityName: "Gravatal",
      },
      {
        city_ID: 4206306,
        cityName: "Guabiruba",
      },
      {
        city_ID: 4206405,
        cityName: "Guaraciaba",
      },
      {
        city_ID: 4206504,
        cityName: "Guaramirim",
      },
      {
        city_ID: 4206603,
        cityName: "Guarujá do Sul",
      },
      {
        city_ID: 4206652,
        cityName: "Guatambú",
      },
      {
        city_ID: 4206702,
        cityName: "Herval d'Oeste",
      },
      {
        city_ID: 4206751,
        cityName: "Ibiam",
      },
      {
        city_ID: 4206801,
        cityName: "Ibicaré",
      },
      {
        city_ID: 4206900,
        cityName: "Ibirama",
      },
      {
        city_ID: 4207007,
        cityName: "Içara",
      },
      {
        city_ID: 4207106,
        cityName: "Ilhota",
      },
      {
        city_ID: 4207205,
        cityName: "Imaruí",
      },
      {
        city_ID: 4207304,
        cityName: "Imbituba",
      },
      {
        city_ID: 4207403,
        cityName: "Imbuia",
      },
      {
        city_ID: 4207502,
        cityName: "Indaial",
      },
      {
        city_ID: 4207577,
        cityName: "Iomerê",
      },
      {
        city_ID: 4207601,
        cityName: "Ipira",
      },
      {
        city_ID: 4207650,
        cityName: "Iporã do Oeste",
      },
      {
        city_ID: 4207684,
        cityName: "Ipuaçu",
      },
      {
        city_ID: 4207700,
        cityName: "Ipumirim",
      },
      {
        city_ID: 4207759,
        cityName: "Iraceminha",
      },
      {
        city_ID: 4207809,
        cityName: "Irani",
      },
      {
        city_ID: 4207858,
        cityName: "Irati",
      },
      {
        city_ID: 4207908,
        cityName: "Irineópolis",
      },
      {
        city_ID: 4208005,
        cityName: "Itá",
      },
      {
        city_ID: 4208104,
        cityName: "Itaiópolis",
      },
      {
        city_ID: 4208203,
        cityName: "Itajaí",
      },
      {
        city_ID: 4208302,
        cityName: "Itapema",
      },
      {
        city_ID: 4208401,
        cityName: "Itapiranga",
      },
      {
        city_ID: 4208450,
        cityName: "Itapoá",
      },
      {
        city_ID: 4208500,
        cityName: "Ituporanga",
      },
      {
        city_ID: 4208609,
        cityName: "Jaborá",
      },
      {
        city_ID: 4208708,
        cityName: "Jacinto Machado",
      },
      {
        city_ID: 4208807,
        cityName: "Jaguaruna",
      },
      {
        city_ID: 4208906,
        cityName: "Jaraguá do Sul",
      },
      {
        city_ID: 4208955,
        cityName: "Jardinópolis",
      },
      {
        city_ID: 4209003,
        cityName: "Joaçaba",
      },
      {
        city_ID: 4209102,
        cityName: "Joinville",
      },
      {
        city_ID: 4209151,
        cityName: "José Boiteux",
      },
      {
        city_ID: 4209177,
        cityName: "Jupiá",
      },
      {
        city_ID: 4209201,
        cityName: "Lacerdópolis",
      },
      {
        city_ID: 4209300,
        cityName: "Lages",
      },
      {
        city_ID: 4209409,
        cityName: "Laguna",
      },
      {
        city_ID: 4209458,
        cityName: "Lajeado Grande",
      },
      {
        city_ID: 4209508,
        cityName: "Laurentino",
      },
      {
        city_ID: 4209607,
        cityName: "Lauro Müller",
      },
      {
        city_ID: 4209706,
        cityName: "Lebon Régis",
      },
      {
        city_ID: 4209805,
        cityName: "Leoberto Leal",
      },
      {
        city_ID: 4209854,
        cityName: "Lindóia do Sul",
      },
      {
        city_ID: 4209904,
        cityName: "Lontras",
      },
      {
        city_ID: 4210001,
        cityName: "Luiz Alves",
      },
      {
        city_ID: 4210035,
        cityName: "Luzerna",
      },
      {
        city_ID: 4210050,
        cityName: "Macieira",
      },
      {
        city_ID: 4210100,
        cityName: "Mafra",
      },
      {
        city_ID: 4210209,
        cityName: "Major Gercino",
      },
      {
        city_ID: 4210308,
        cityName: "Major Vieira",
      },
      {
        city_ID: 4210407,
        cityName: "Maracajá",
      },
      {
        city_ID: 4210506,
        cityName: "Maravilha",
      },
      {
        city_ID: 4210555,
        cityName: "Marema",
      },
      {
        city_ID: 4210605,
        cityName: "Massaranduba",
      },
      {
        city_ID: 4210704,
        cityName: "Matos Costa",
      },
      {
        city_ID: 4210803,
        cityName: "Meleiro",
      },
      {
        city_ID: 4210852,
        cityName: "Mirim Doce",
      },
      {
        city_ID: 4210902,
        cityName: "Modelo",
      },
      {
        city_ID: 4211009,
        cityName: "Mondaí",
      },
      {
        city_ID: 4211058,
        cityName: "Monte Carlo",
      },
      {
        city_ID: 4211108,
        cityName: "Monte Castelo",
      },
      {
        city_ID: 4211207,
        cityName: "Morro da Fumaça",
      },
      {
        city_ID: 4211256,
        cityName: "Morro Grande",
      },
      {
        city_ID: 4211306,
        cityName: "Navegantes",
      },
      {
        city_ID: 4211405,
        cityName: "Nova Erechim",
      },
      {
        city_ID: 4211454,
        cityName: "Nova Itaberaba",
      },
      {
        city_ID: 4211504,
        cityName: "Nova Trento",
      },
      {
        city_ID: 4211603,
        cityName: "Nova Veneza",
      },
      {
        city_ID: 4211652,
        cityName: "Novo Horizonte",
      },
      {
        city_ID: 4211702,
        cityName: "Orleans",
      },
      {
        city_ID: 4211751,
        cityName: "Otacílio Costa",
      },
      {
        city_ID: 4211801,
        cityName: "Ouro",
      },
      {
        city_ID: 4211850,
        cityName: "Ouro Verde",
      },
      {
        city_ID: 4211876,
        cityName: "Paial",
      },
      {
        city_ID: 4211892,
        cityName: "Painel",
      },
      {
        city_ID: 4211900,
        cityName: "Palhoça",
      },
      {
        city_ID: 4212007,
        cityName: "Palma Sola",
      },
      {
        city_ID: 4212056,
        cityName: "Palmeira",
      },
      {
        city_ID: 4212106,
        cityName: "Palmitos",
      },
      {
        city_ID: 4212205,
        cityName: "Papanduva",
      },
      {
        city_ID: 4212239,
        cityName: "Paraíso",
      },
      {
        city_ID: 4212254,
        cityName: "Passo de Torres",
      },
      {
        city_ID: 4212270,
        cityName: "Passos Maia",
      },
      {
        city_ID: 4212304,
        cityName: "Paulo Lopes",
      },
      {
        city_ID: 4212403,
        cityName: "Pedras Grandes",
      },
      {
        city_ID: 4212502,
        cityName: "Penha",
      },
      {
        city_ID: 4212601,
        cityName: "Peritiba",
      },
      {
        city_ID: 4212650,
        cityName: "Pescaria Brava",
      },
      {
        city_ID: 4212700,
        cityName: "Petrolândia",
      },
      {
        city_ID: 4212908,
        cityName: "Pinhalzinho",
      },
      {
        city_ID: 4213005,
        cityName: "Pinheiro Preto",
      },
      {
        city_ID: 4213104,
        cityName: "Piratuba",
      },
      {
        city_ID: 4213153,
        cityName: "Planalto Alegre",
      },
      {
        city_ID: 4213203,
        cityName: "Pomerode",
      },
      {
        city_ID: 4213302,
        cityName: "Ponte Alta",
      },
      {
        city_ID: 4213351,
        cityName: "Ponte Alta do Norte",
      },
      {
        city_ID: 4213401,
        cityName: "Ponte Serrada",
      },
      {
        city_ID: 4213500,
        cityName: "Porto Belo",
      },
      {
        city_ID: 4213609,
        cityName: "Porto União",
      },
      {
        city_ID: 4213708,
        cityName: "Pouso Redondo",
      },
      {
        city_ID: 4213807,
        cityName: "Praia Grande",
      },
      {
        city_ID: 4213906,
        cityName: "Presidente Castello Branco",
      },
      {
        city_ID: 4214003,
        cityName: "Presidente Getúlio",
      },
      {
        city_ID: 4214102,
        cityName: "Presidente Nereu",
      },
      {
        city_ID: 4214151,
        cityName: "Princesa",
      },
      {
        city_ID: 4214201,
        cityName: "Quilombo",
      },
      {
        city_ID: 4214300,
        cityName: "Rancho Queimado",
      },
      {
        city_ID: 4214409,
        cityName: "Rio das Antas",
      },
      {
        city_ID: 4214508,
        cityName: "Rio do Campo",
      },
      {
        city_ID: 4214607,
        cityName: "Rio do Oeste",
      },
      {
        city_ID: 4214805,
        cityName: "Rio do Sul",
      },
      {
        city_ID: 4214706,
        cityName: "Rio dos Cedros",
      },
      {
        city_ID: 4214904,
        cityName: "Rio Fortuna",
      },
      {
        city_ID: 4215000,
        cityName: "Rio Negrinho",
      },
      {
        city_ID: 4215059,
        cityName: "Rio Rufino",
      },
      {
        city_ID: 4215075,
        cityName: "Riqueza",
      },
      {
        city_ID: 4215109,
        cityName: "Rodeio",
      },
      {
        city_ID: 4215208,
        cityName: "Romelândia",
      },
      {
        city_ID: 4215307,
        cityName: "Salete",
      },
      {
        city_ID: 4215356,
        cityName: "Saltinho",
      },
      {
        city_ID: 4215406,
        cityName: "Salto Veloso",
      },
      {
        city_ID: 4215455,
        cityName: "Sangão",
      },
      {
        city_ID: 4215505,
        cityName: "Santa Cecília",
      },
      {
        city_ID: 4215554,
        cityName: "Santa Helena",
      },
      {
        city_ID: 4215604,
        cityName: "Santa Rosa de Lima",
      },
      {
        city_ID: 4215653,
        cityName: "Santa Rosa do Sul",
      },
      {
        city_ID: 4215679,
        cityName: "Santa Terezinha",
      },
      {
        city_ID: 4215687,
        cityName: "Santa Terezinha do Progresso",
      },
      {
        city_ID: 4215695,
        cityName: "Santiago do Sul",
      },
      {
        city_ID: 4215703,
        cityName: "Santo Amaro da Imperatriz",
      },
      {
        city_ID: 4215802,
        cityName: "São Bento do Sul",
      },
      {
        city_ID: 4215752,
        cityName: "São Bernardino",
      },
      {
        city_ID: 4215901,
        cityName: "São Bonifácio",
      },
      {
        city_ID: 4216008,
        cityName: "São Carlos",
      },
      {
        city_ID: 4216057,
        cityName: "São Cristóvão do Sul",
      },
      {
        city_ID: 4216107,
        cityName: "São Domingos",
      },
      {
        city_ID: 4216206,
        cityName: "São Francisco do Sul",
      },
      {
        city_ID: 4216305,
        cityName: "São João Batista",
      },
      {
        city_ID: 4216354,
        cityName: "São João do Itaperiú",
      },
      {
        city_ID: 4216255,
        cityName: "São João do Oeste",
      },
      {
        city_ID: 4216404,
        cityName: "São João do Sul",
      },
      {
        city_ID: 4216503,
        cityName: "São Joaquim",
      },
      {
        city_ID: 4216602,
        cityName: "São José",
      },
      {
        city_ID: 4216701,
        cityName: "São José do Cedro",
      },
      {
        city_ID: 4216800,
        cityName: "São José do Cerrito",
      },
      {
        city_ID: 4216909,
        cityName: "São Lourenço do Oeste",
      },
      {
        city_ID: 4217006,
        cityName: "São Ludgero",
      },
      {
        city_ID: 4217105,
        cityName: "São Martinho",
      },
      {
        city_ID: 4217154,
        cityName: "São Miguel da Boa Vista",
      },
      {
        city_ID: 4217204,
        cityName: "São Miguel do Oeste",
      },
      {
        city_ID: 4217253,
        cityName: "São Pedro de Alcântara",
      },
      {
        city_ID: 4217303,
        cityName: "Saudades",
      },
      {
        city_ID: 4217402,
        cityName: "Schroeder",
      },
      {
        city_ID: 4217501,
        cityName: "Seara",
      },
      {
        city_ID: 4217550,
        cityName: "Serra Alta",
      },
      {
        city_ID: 4217600,
        cityName: "Siderópolis",
      },
      {
        city_ID: 4217709,
        cityName: "Sombrio",
      },
      {
        city_ID: 4217758,
        cityName: "Sul Brasil",
      },
      {
        city_ID: 4217808,
        cityName: "Taió",
      },
      {
        city_ID: 4217907,
        cityName: "Tangará",
      },
      {
        city_ID: 4217956,
        cityName: "Tigrinhos",
      },
      {
        city_ID: 4218004,
        cityName: "Tijucas",
      },
      {
        city_ID: 4218103,
        cityName: "Timbé do Sul",
      },
      {
        city_ID: 4218202,
        cityName: "Timbó",
      },
      {
        city_ID: 4218251,
        cityName: "Timbó Grande",
      },
      {
        city_ID: 4218301,
        cityName: "Três Barras",
      },
      {
        city_ID: 4218350,
        cityName: "Treviso",
      },
      {
        city_ID: 4218400,
        cityName: "Treze de Maio",
      },
      {
        city_ID: 4218509,
        cityName: "Treze Tílias",
      },
      {
        city_ID: 4218608,
        cityName: "Trombudo Central",
      },
      {
        city_ID: 4218707,
        cityName: "Tubarão",
      },
      {
        city_ID: 4218756,
        cityName: "Tunápolis",
      },
      {
        city_ID: 4218806,
        cityName: "Turvo",
      },
      {
        city_ID: 4218855,
        cityName: "União do Oeste",
      },
      {
        city_ID: 4218905,
        cityName: "Urubici",
      },
      {
        city_ID: 4218954,
        cityName: "Urupema",
      },
      {
        city_ID: 4219002,
        cityName: "Urussanga",
      },
      {
        city_ID: 4219101,
        cityName: "Vargeão",
      },
      {
        city_ID: 4219150,
        cityName: "Vargem",
      },
      {
        city_ID: 4219176,
        cityName: "Vargem Bonita",
      },
      {
        city_ID: 4219200,
        cityName: "Vidal Ramos",
      },
      {
        city_ID: 4219309,
        cityName: "Videira",
      },
      {
        city_ID: 4219358,
        cityName: "Vitor Meireles",
      },
      {
        city_ID: 4219408,
        cityName: "Witmarsum",
      },
      {
        city_ID: 4219507,
        cityName: "Xanxerê",
      },
      {
        city_ID: 4219606,
        cityName: "Xavantina",
      },
      {
        city_ID: 4219705,
        cityName: "Xaxim",
      },
      {
        city_ID: 4219853,
        cityName: "Zortéa",
      },
    ],
  },
  {
    id: 35,
    stateName: "São Paulo",
    abv: "SP",
    cities: [
      {
        city_ID: 3500105,
        cityName: "Adamantina",
      },
      {
        city_ID: 3500204,
        cityName: "Adolfo",
      },
      {
        city_ID: 3500303,
        cityName: "Aguaí",
      },
      {
        city_ID: 3500402,
        cityName: "Águas da Prata",
      },
      {
        city_ID: 3500501,
        cityName: "Águas de Lindóia",
      },
      {
        city_ID: 3500550,
        cityName: "Águas de Santa Bárbara",
      },
      {
        city_ID: 3500600,
        cityName: "Águas de São Pedro",
      },
      {
        city_ID: 3500709,
        cityName: "Agudos",
      },
      {
        city_ID: 3500758,
        cityName: "Alambari",
      },
      {
        city_ID: 3500808,
        cityName: "Alfredo Marcondes",
      },
      {
        city_ID: 3500907,
        cityName: "Altair",
      },
      {
        city_ID: 3501004,
        cityName: "Altinópolis",
      },
      {
        city_ID: 3501103,
        cityName: "Alto Alegre",
      },
      {
        city_ID: 3501152,
        cityName: "Alumínio",
      },
      {
        city_ID: 3501202,
        cityName: "Álvares Florence",
      },
      {
        city_ID: 3501301,
        cityName: "Álvares Machado",
      },
      {
        city_ID: 3501400,
        cityName: "Álvaro de Carvalho",
      },
      {
        city_ID: 3501509,
        cityName: "Alvinlândia",
      },
      {
        city_ID: 3501608,
        cityName: "Americana",
      },
      {
        city_ID: 3501707,
        cityName: "Américo Brasiliense",
      },
      {
        city_ID: 3501806,
        cityName: "Américo de Campos",
      },
      {
        city_ID: 3501905,
        cityName: "Amparo",
      },
      {
        city_ID: 3502002,
        cityName: "Analândia",
      },
      {
        city_ID: 3502101,
        cityName: "Andradina",
      },
      {
        city_ID: 3502200,
        cityName: "Angatuba",
      },
      {
        city_ID: 3502309,
        cityName: "Anhembi",
      },
      {
        city_ID: 3502408,
        cityName: "Anhumas",
      },
      {
        city_ID: 3502507,
        cityName: "Aparecida",
      },
      {
        city_ID: 3502606,
        cityName: "Aparecida d'Oeste",
      },
      {
        city_ID: 3502705,
        cityName: "Apiaí",
      },
      {
        city_ID: 3502754,
        cityName: "Araçariguama",
      },
      {
        city_ID: 3502804,
        cityName: "Araçatuba",
      },
      {
        city_ID: 3502903,
        cityName: "Araçoiaba da Serra",
      },
      {
        city_ID: 3503000,
        cityName: "Aramina",
      },
      {
        city_ID: 3503109,
        cityName: "Arandu",
      },
      {
        city_ID: 3503158,
        cityName: "Arapeí",
      },
      {
        city_ID: 3503208,
        cityName: "Araraquara",
      },
      {
        city_ID: 3503307,
        cityName: "Araras",
      },
      {
        city_ID: 3503356,
        cityName: "Arco-Íris",
      },
      {
        city_ID: 3503406,
        cityName: "Arealva",
      },
      {
        city_ID: 3503505,
        cityName: "Areias",
      },
      {
        city_ID: 3503604,
        cityName: "Areiópolis",
      },
      {
        city_ID: 3503703,
        cityName: "Ariranha",
      },
      {
        city_ID: 3503802,
        cityName: "Artur Nogueira",
      },
      {
        city_ID: 3503901,
        cityName: "Arujá",
      },
      {
        city_ID: 3503950,
        cityName: "Aspásia",
      },
      {
        city_ID: 3504008,
        cityName: "Assis",
      },
      {
        city_ID: 3504107,
        cityName: "Atibaia",
      },
      {
        city_ID: 3504206,
        cityName: "Auriflama",
      },
      {
        city_ID: 3504305,
        cityName: "Avaí",
      },
      {
        city_ID: 3504404,
        cityName: "Avanhandava",
      },
      {
        city_ID: 3504503,
        cityName: "Avaré",
      },
      {
        city_ID: 3504602,
        cityName: "Bady Bassitt",
      },
      {
        city_ID: 3504701,
        cityName: "Balbinos",
      },
      {
        city_ID: 3504800,
        cityName: "Bálsamo",
      },
      {
        city_ID: 3504909,
        cityName: "Bananal",
      },
      {
        city_ID: 3505005,
        cityName: "Barão de Antonina",
      },
      {
        city_ID: 3505104,
        cityName: "Barbosa",
      },
      {
        city_ID: 3505203,
        cityName: "Bariri",
      },
      {
        city_ID: 3505302,
        cityName: "Barra Bonita",
      },
      {
        city_ID: 3505351,
        cityName: "Barra do Chapéu",
      },
      {
        city_ID: 3505401,
        cityName: "Barra do Turvo",
      },
      {
        city_ID: 3505500,
        cityName: "Barretos",
      },
      {
        city_ID: 3505609,
        cityName: "Barrinha",
      },
      {
        city_ID: 3505708,
        cityName: "Barueri",
      },
      {
        city_ID: 3505807,
        cityName: "Bastos",
      },
      {
        city_ID: 3505906,
        cityName: "Batatais",
      },
      {
        city_ID: 3506003,
        cityName: "Bauru",
      },
      {
        city_ID: 3506102,
        cityName: "Bebedouro",
      },
      {
        city_ID: 3506201,
        cityName: "Bento de Abreu",
      },
      {
        city_ID: 3506300,
        cityName: "Bernardino de Campos",
      },
      {
        city_ID: 3506359,
        cityName: "Bertioga",
      },
      {
        city_ID: 3506409,
        cityName: "Bilac",
      },
      {
        city_ID: 3506508,
        cityName: "Birigui",
      },
      {
        city_ID: 3506607,
        cityName: "Biritiba Mirim",
      },
      {
        city_ID: 3506706,
        cityName: "Boa Esperança do Sul",
      },
      {
        city_ID: 3506805,
        cityName: "Bocaina",
      },
      {
        city_ID: 3506904,
        cityName: "Bofete",
      },
      {
        city_ID: 3507001,
        cityName: "Boituva",
      },
      {
        city_ID: 3507100,
        cityName: "Bom Jesus dos Perdões",
      },
      {
        city_ID: 3507159,
        cityName: "Bom Sucesso de Itararé",
      },
      {
        city_ID: 3507209,
        cityName: "Borá",
      },
      {
        city_ID: 3507308,
        cityName: "Boracéia",
      },
      {
        city_ID: 3507407,
        cityName: "Borborema",
      },
      {
        city_ID: 3507456,
        cityName: "Borebi",
      },
      {
        city_ID: 3507506,
        cityName: "Botucatu",
      },
      {
        city_ID: 3507605,
        cityName: "Bragança Paulista",
      },
      {
        city_ID: 3507704,
        cityName: "Braúna",
      },
      {
        city_ID: 3507753,
        cityName: "Brejo Alegre",
      },
      {
        city_ID: 3507803,
        cityName: "Brodowski",
      },
      {
        city_ID: 3507902,
        cityName: "Brotas",
      },
      {
        city_ID: 3508009,
        cityName: "Buri",
      },
      {
        city_ID: 3508108,
        cityName: "Buritama",
      },
      {
        city_ID: 3508207,
        cityName: "Buritizal",
      },
      {
        city_ID: 3508306,
        cityName: "Cabrália Paulista",
      },
      {
        city_ID: 3508405,
        cityName: "Cabreúva",
      },
      {
        city_ID: 3508504,
        cityName: "Caçapava",
      },
      {
        city_ID: 3508603,
        cityName: "Cachoeira Paulista",
      },
      {
        city_ID: 3508702,
        cityName: "Caconde",
      },
      {
        city_ID: 3508801,
        cityName: "Cafelândia",
      },
      {
        city_ID: 3508900,
        cityName: "Caiabu",
      },
      {
        city_ID: 3509007,
        cityName: "Caieiras",
      },
      {
        city_ID: 3509106,
        cityName: "Caiuá",
      },
      {
        city_ID: 3509205,
        cityName: "Cajamar",
      },
      {
        city_ID: 3509254,
        cityName: "Cajati",
      },
      {
        city_ID: 3509304,
        cityName: "Cajobi",
      },
      {
        city_ID: 3509403,
        cityName: "Cajuru",
      },
      {
        city_ID: 3509452,
        cityName: "Campina do Monte Alegre",
      },
      {
        city_ID: 3509502,
        cityName: "Campinas",
      },
      {
        city_ID: 3509601,
        cityName: "Campo Limpo Paulista",
      },
      {
        city_ID: 3509700,
        cityName: "Campos do Jordão",
      },
      {
        city_ID: 3509809,
        cityName: "Campos Novos Paulista",
      },
      {
        city_ID: 3509908,
        cityName: "Cananéia",
      },
      {
        city_ID: 3509957,
        cityName: "Canas",
      },
      {
        city_ID: 3510005,
        cityName: "Cândido Mota",
      },
      {
        city_ID: 3510104,
        cityName: "Cândido Rodrigues",
      },
      {
        city_ID: 3510153,
        cityName: "Canitar",
      },
      {
        city_ID: 3510203,
        cityName: "Capão Bonito",
      },
      {
        city_ID: 3510302,
        cityName: "Capela do Alto",
      },
      {
        city_ID: 3510401,
        cityName: "Capivari",
      },
      {
        city_ID: 3510500,
        cityName: "Caraguatatuba",
      },
      {
        city_ID: 3510609,
        cityName: "Carapicuíba",
      },
      {
        city_ID: 3510708,
        cityName: "Cardoso",
      },
      {
        city_ID: 3510807,
        cityName: "Casa Branca",
      },
      {
        city_ID: 3510906,
        cityName: "Cássia dos Coqueiros",
      },
      {
        city_ID: 3511003,
        cityName: "Castilho",
      },
      {
        city_ID: 3511102,
        cityName: "Catanduva",
      },
      {
        city_ID: 3511201,
        cityName: "Catiguá",
      },
      {
        city_ID: 3511300,
        cityName: "Cedral",
      },
      {
        city_ID: 3511409,
        cityName: "Cerqueira César",
      },
      {
        city_ID: 3511508,
        cityName: "Cerquilho",
      },
      {
        city_ID: 3511607,
        cityName: "Cesário Lange",
      },
      {
        city_ID: 3511706,
        cityName: "Charqueada",
      },
      {
        city_ID: 3557204,
        cityName: "Chavantes",
      },
      {
        city_ID: 3511904,
        cityName: "Clementina",
      },
      {
        city_ID: 3512001,
        cityName: "Colina",
      },
      {
        city_ID: 3512100,
        cityName: "Colômbia",
      },
      {
        city_ID: 3512209,
        cityName: "Conchal",
      },
      {
        city_ID: 3512308,
        cityName: "Conchas",
      },
      {
        city_ID: 3512407,
        cityName: "Cordeirópolis",
      },
      {
        city_ID: 3512506,
        cityName: "Coroados",
      },
      {
        city_ID: 3512605,
        cityName: "Coronel Macedo",
      },
      {
        city_ID: 3512704,
        cityName: "Corumbataí",
      },
      {
        city_ID: 3512803,
        cityName: "Cosmópolis",
      },
      {
        city_ID: 3512902,
        cityName: "Cosmorama",
      },
      {
        city_ID: 3513009,
        cityName: "Cotia",
      },
      {
        city_ID: 3513108,
        cityName: "Cravinhos",
      },
      {
        city_ID: 3513207,
        cityName: "Cristais Paulista",
      },
      {
        city_ID: 3513306,
        cityName: "Cruzália",
      },
      {
        city_ID: 3513405,
        cityName: "Cruzeiro",
      },
      {
        city_ID: 3513504,
        cityName: "Cubatão",
      },
      {
        city_ID: 3513603,
        cityName: "Cunha",
      },
      {
        city_ID: 3513702,
        cityName: "Descalvado",
      },
      {
        city_ID: 3513801,
        cityName: "Diadema",
      },
      {
        city_ID: 3513850,
        cityName: "Dirce Reis",
      },
      {
        city_ID: 3513900,
        cityName: "Divinolândia",
      },
      {
        city_ID: 3514007,
        cityName: "Dobrada",
      },
      {
        city_ID: 3514106,
        cityName: "Dois Córregos",
      },
      {
        city_ID: 3514205,
        cityName: "Dolcinópolis",
      },
      {
        city_ID: 3514304,
        cityName: "Dourado",
      },
      {
        city_ID: 3514403,
        cityName: "Dracena",
      },
      {
        city_ID: 3514502,
        cityName: "Duartina",
      },
      {
        city_ID: 3514601,
        cityName: "Dumont",
      },
      {
        city_ID: 3514700,
        cityName: "Echaporã",
      },
      {
        city_ID: 3514809,
        cityName: "Eldorado",
      },
      {
        city_ID: 3514908,
        cityName: "Elias Fausto",
      },
      {
        city_ID: 3514924,
        cityName: "Elisiário",
      },
      {
        city_ID: 3514957,
        cityName: "Embaúba",
      },
      {
        city_ID: 3515004,
        cityName: "Embu das Artes",
      },
      {
        city_ID: 3515103,
        cityName: "Embu-Guaçu",
      },
      {
        city_ID: 3515129,
        cityName: "Emilianópolis",
      },
      {
        city_ID: 3515152,
        cityName: "Engenheiro Coelho",
      },
      {
        city_ID: 3515186,
        cityName: "Espírito Santo do Pinhal",
      },
      {
        city_ID: 3515194,
        cityName: "Espírito Santo do Turvo",
      },
      {
        city_ID: 3557303,
        cityName: "Estiva Gerbi",
      },
      {
        city_ID: 3515301,
        cityName: "Estrela do Norte",
      },
      {
        city_ID: 3515202,
        cityName: "Estrela d'Oeste",
      },
      {
        city_ID: 3515350,
        cityName: "Euclides da Cunha Paulista",
      },
      {
        city_ID: 3515400,
        cityName: "Fartura",
      },
      {
        city_ID: 3515608,
        cityName: "Fernando Prestes",
      },
      {
        city_ID: 3515509,
        cityName: "Fernandópolis",
      },
      {
        city_ID: 3515657,
        cityName: "Fernão",
      },
      {
        city_ID: 3515707,
        cityName: "Ferraz de Vasconcelos",
      },
      {
        city_ID: 3515806,
        cityName: "Flora Rica",
      },
      {
        city_ID: 3515905,
        cityName: "Floreal",
      },
      {
        city_ID: 3516002,
        cityName: "Flórida Paulista",
      },
      {
        city_ID: 3516101,
        cityName: "Florínea",
      },
      {
        city_ID: 3516200,
        cityName: "Franca",
      },
      {
        city_ID: 3516309,
        cityName: "Francisco Morato",
      },
      {
        city_ID: 3516408,
        cityName: "Franco da Rocha",
      },
      {
        city_ID: 3516507,
        cityName: "Gabriel Monteiro",
      },
      {
        city_ID: 3516606,
        cityName: "Gália",
      },
      {
        city_ID: 3516705,
        cityName: "Garça",
      },
      {
        city_ID: 3516804,
        cityName: "Gastão Vidigal",
      },
      {
        city_ID: 3516853,
        cityName: "Gavião Peixoto",
      },
      {
        city_ID: 3516903,
        cityName: "General Salgado",
      },
      {
        city_ID: 3517000,
        cityName: "Getulina",
      },
      {
        city_ID: 3517109,
        cityName: "Glicério",
      },
      {
        city_ID: 3517208,
        cityName: "Guaiçara",
      },
      {
        city_ID: 3517307,
        cityName: "Guaimbê",
      },
      {
        city_ID: 3517406,
        cityName: "Guaíra",
      },
      {
        city_ID: 3517505,
        cityName: "Guapiaçu",
      },
      {
        city_ID: 3517604,
        cityName: "Guapiara",
      },
      {
        city_ID: 3517703,
        cityName: "Guará",
      },
      {
        city_ID: 3517802,
        cityName: "Guaraçaí",
      },
      {
        city_ID: 3517901,
        cityName: "Guaraci",
      },
      {
        city_ID: 3518008,
        cityName: "Guarani d'Oeste",
      },
      {
        city_ID: 3518107,
        cityName: "Guarantã",
      },
      {
        city_ID: 3518206,
        cityName: "Guararapes",
      },
      {
        city_ID: 3518305,
        cityName: "Guararema",
      },
      {
        city_ID: 3518404,
        cityName: "Guaratinguetá",
      },
      {
        city_ID: 3518503,
        cityName: "Guareí",
      },
      {
        city_ID: 3518602,
        cityName: "Guariba",
      },
      {
        city_ID: 3518701,
        cityName: "Guarujá",
      },
      {
        city_ID: 3518800,
        cityName: "Guarulhos",
      },
      {
        city_ID: 3518859,
        cityName: "Guatapará",
      },
      {
        city_ID: 3518909,
        cityName: "Guzolândia",
      },
      {
        city_ID: 3519006,
        cityName: "Herculândia",
      },
      {
        city_ID: 3519055,
        cityName: "Holambra",
      },
      {
        city_ID: 3519071,
        cityName: "Hortolândia",
      },
      {
        city_ID: 3519105,
        cityName: "Iacanga",
      },
      {
        city_ID: 3519204,
        cityName: "Iacri",
      },
      {
        city_ID: 3519253,
        cityName: "Iaras",
      },
      {
        city_ID: 3519303,
        cityName: "Ibaté",
      },
      {
        city_ID: 3519402,
        cityName: "Ibirá",
      },
      {
        city_ID: 3519501,
        cityName: "Ibirarema",
      },
      {
        city_ID: 3519600,
        cityName: "Ibitinga",
      },
      {
        city_ID: 3519709,
        cityName: "Ibiúna",
      },
      {
        city_ID: 3519808,
        cityName: "Icém",
      },
      {
        city_ID: 3519907,
        cityName: "Iepê",
      },
      {
        city_ID: 3520004,
        cityName: "Igaraçu do Tietê",
      },
      {
        city_ID: 3520103,
        cityName: "Igarapava",
      },
      {
        city_ID: 3520202,
        cityName: "Igaratá",
      },
      {
        city_ID: 3520301,
        cityName: "Iguape",
      },
      {
        city_ID: 3520426,
        cityName: "Ilha Comprida",
      },
      {
        city_ID: 3520442,
        cityName: "Ilha Solteira",
      },
      {
        city_ID: 3520400,
        cityName: "Ilhabela",
      },
      {
        city_ID: 3520509,
        cityName: "Indaiatuba",
      },
      {
        city_ID: 3520608,
        cityName: "Indiana",
      },
      {
        city_ID: 3520707,
        cityName: "Indiaporã",
      },
      {
        city_ID: 3520806,
        cityName: "Inúbia Paulista",
      },
      {
        city_ID: 3520905,
        cityName: "Ipaussu",
      },
      {
        city_ID: 3521002,
        cityName: "Iperó",
      },
      {
        city_ID: 3521101,
        cityName: "Ipeúna",
      },
      {
        city_ID: 3521150,
        cityName: "Ipiguá",
      },
      {
        city_ID: 3521200,
        cityName: "Iporanga",
      },
      {
        city_ID: 3521309,
        cityName: "Ipuã",
      },
      {
        city_ID: 3521408,
        cityName: "Iracemápolis",
      },
      {
        city_ID: 3521507,
        cityName: "Irapuã",
      },
      {
        city_ID: 3521606,
        cityName: "Irapuru",
      },
      {
        city_ID: 3521705,
        cityName: "Itaberá",
      },
      {
        city_ID: 3521804,
        cityName: "Itaí",
      },
      {
        city_ID: 3521903,
        cityName: "Itajobi",
      },
      {
        city_ID: 3522000,
        cityName: "Itaju",
      },
      {
        city_ID: 3522109,
        cityName: "Itanhaém",
      },
      {
        city_ID: 3522158,
        cityName: "Itaoca",
      },
      {
        city_ID: 3522208,
        cityName: "Itapecerica da Serra",
      },
      {
        city_ID: 3522307,
        cityName: "Itapetininga",
      },
      {
        city_ID: 3522406,
        cityName: "Itapeva",
      },
      {
        city_ID: 3522505,
        cityName: "Itapevi",
      },
      {
        city_ID: 3522604,
        cityName: "Itapira",
      },
      {
        city_ID: 3522653,
        cityName: "Itapirapuã Paulista",
      },
      {
        city_ID: 3522703,
        cityName: "Itápolis",
      },
      {
        city_ID: 3522802,
        cityName: "Itaporanga",
      },
      {
        city_ID: 3522901,
        cityName: "Itapuí",
      },
      {
        city_ID: 3523008,
        cityName: "Itapura",
      },
      {
        city_ID: 3523107,
        cityName: "Itaquaquecetuba",
      },
      {
        city_ID: 3523206,
        cityName: "Itararé",
      },
      {
        city_ID: 3523305,
        cityName: "Itariri",
      },
      {
        city_ID: 3523404,
        cityName: "Itatiba",
      },
      {
        city_ID: 3523503,
        cityName: "Itatinga",
      },
      {
        city_ID: 3523602,
        cityName: "Itirapina",
      },
      {
        city_ID: 3523701,
        cityName: "Itirapuã",
      },
      {
        city_ID: 3523800,
        cityName: "Itobi",
      },
      {
        city_ID: 3523909,
        cityName: "Itu",
      },
      {
        city_ID: 3524006,
        cityName: "Itupeva",
      },
      {
        city_ID: 3524105,
        cityName: "Ituverava",
      },
      {
        city_ID: 3524204,
        cityName: "Jaborandi",
      },
      {
        city_ID: 3524303,
        cityName: "Jaboticabal",
      },
      {
        city_ID: 3524402,
        cityName: "Jacareí",
      },
      {
        city_ID: 3524501,
        cityName: "Jaci",
      },
      {
        city_ID: 3524600,
        cityName: "Jacupiranga",
      },
      {
        city_ID: 3524709,
        cityName: "Jaguariúna",
      },
      {
        city_ID: 3524808,
        cityName: "Jales",
      },
      {
        city_ID: 3524907,
        cityName: "Jambeiro",
      },
      {
        city_ID: 3525003,
        cityName: "Jandira",
      },
      {
        city_ID: 3525102,
        cityName: "Jardinópolis",
      },
      {
        city_ID: 3525201,
        cityName: "Jarinu",
      },
      {
        city_ID: 3525300,
        cityName: "Jaú",
      },
      {
        city_ID: 3525409,
        cityName: "Jeriquara",
      },
      {
        city_ID: 3525508,
        cityName: "Joanópolis",
      },
      {
        city_ID: 3525607,
        cityName: "João Ramalho",
      },
      {
        city_ID: 3525706,
        cityName: "José Bonifácio",
      },
      {
        city_ID: 3525805,
        cityName: "Júlio Mesquita",
      },
      {
        city_ID: 3525854,
        cityName: "Jumirim",
      },
      {
        city_ID: 3525904,
        cityName: "Jundiaí",
      },
      {
        city_ID: 3526001,
        cityName: "Junqueirópolis",
      },
      {
        city_ID: 3526100,
        cityName: "Juquiá",
      },
      {
        city_ID: 3526209,
        cityName: "Juquitiba",
      },
      {
        city_ID: 3526308,
        cityName: "Lagoinha",
      },
      {
        city_ID: 3526407,
        cityName: "Laranjal Paulista",
      },
      {
        city_ID: 3526506,
        cityName: "Lavínia",
      },
      {
        city_ID: 3526605,
        cityName: "Lavrinhas",
      },
      {
        city_ID: 3526704,
        cityName: "Leme",
      },
      {
        city_ID: 3526803,
        cityName: "Lençóis Paulista",
      },
      {
        city_ID: 3526902,
        cityName: "Limeira",
      },
      {
        city_ID: 3527009,
        cityName: "Lindóia",
      },
      {
        city_ID: 3527108,
        cityName: "Lins",
      },
      {
        city_ID: 3527207,
        cityName: "Lorena",
      },
      {
        city_ID: 3527256,
        cityName: "Lourdes",
      },
      {
        city_ID: 3527306,
        cityName: "Louveira",
      },
      {
        city_ID: 3527405,
        cityName: "Lucélia",
      },
      {
        city_ID: 3527504,
        cityName: "Lucianópolis",
      },
      {
        city_ID: 3527603,
        cityName: "Luís Antônio",
      },
      {
        city_ID: 3527702,
        cityName: "Luiziânia",
      },
      {
        city_ID: 3527801,
        cityName: "Lupércio",
      },
      {
        city_ID: 3527900,
        cityName: "Lutécia",
      },
      {
        city_ID: 3528007,
        cityName: "Macatuba",
      },
      {
        city_ID: 3528106,
        cityName: "Macaubal",
      },
      {
        city_ID: 3528205,
        cityName: "Macedônia",
      },
      {
        city_ID: 3528304,
        cityName: "Magda",
      },
      {
        city_ID: 3528403,
        cityName: "Mairinque",
      },
      {
        city_ID: 3528502,
        cityName: "Mairiporã",
      },
      {
        city_ID: 3528601,
        cityName: "Manduri",
      },
      {
        city_ID: 3528700,
        cityName: "Marabá Paulista",
      },
      {
        city_ID: 3528809,
        cityName: "Maracaí",
      },
      {
        city_ID: 3528858,
        cityName: "Marapoama",
      },
      {
        city_ID: 3528908,
        cityName: "Mariápolis",
      },
      {
        city_ID: 3529005,
        cityName: "Marília",
      },
      {
        city_ID: 3529104,
        cityName: "Marinópolis",
      },
      {
        city_ID: 3529203,
        cityName: "Martinópolis",
      },
      {
        city_ID: 3529302,
        cityName: "Matão",
      },
      {
        city_ID: 3529401,
        cityName: "Mauá",
      },
      {
        city_ID: 3529500,
        cityName: "Mendonça",
      },
      {
        city_ID: 3529609,
        cityName: "Meridiano",
      },
      {
        city_ID: 3529658,
        cityName: "Mesópolis",
      },
      {
        city_ID: 3529708,
        cityName: "Miguelópolis",
      },
      {
        city_ID: 3529807,
        cityName: "Mineiros do Tietê",
      },
      {
        city_ID: 3530003,
        cityName: "Mira Estrela",
      },
      {
        city_ID: 3529906,
        cityName: "Miracatu",
      },
      {
        city_ID: 3530102,
        cityName: "Mirandópolis",
      },
      {
        city_ID: 3530201,
        cityName: "Mirante do Paranapanema",
      },
      {
        city_ID: 3530300,
        cityName: "Mirassol",
      },
      {
        city_ID: 3530409,
        cityName: "Mirassolândia",
      },
      {
        city_ID: 3530508,
        cityName: "Mococa",
      },
      {
        city_ID: 3530607,
        cityName: "Mogi das Cruzes",
      },
      {
        city_ID: 3530706,
        cityName: "Mogi Guaçu",
      },
      {
        city_ID: 3530805,
        cityName: "Mogi Mirim",
      },
      {
        city_ID: 3530904,
        cityName: "Mombuca",
      },
      {
        city_ID: 3531001,
        cityName: "Monções",
      },
      {
        city_ID: 3531100,
        cityName: "Mongaguá",
      },
      {
        city_ID: 3531209,
        cityName: "Monte Alegre do Sul",
      },
      {
        city_ID: 3531308,
        cityName: "Monte Alto",
      },
      {
        city_ID: 3531407,
        cityName: "Monte Aprazível",
      },
      {
        city_ID: 3531506,
        cityName: "Monte Azul Paulista",
      },
      {
        city_ID: 3531605,
        cityName: "Monte Castelo",
      },
      {
        city_ID: 3531803,
        cityName: "Monte Mor",
      },
      {
        city_ID: 3531704,
        cityName: "Monteiro Lobato",
      },
      {
        city_ID: 3531902,
        cityName: "Morro Agudo",
      },
      {
        city_ID: 3532009,
        cityName: "Morungaba",
      },
      {
        city_ID: 3532058,
        cityName: "Motuca",
      },
      {
        city_ID: 3532108,
        cityName: "Murutinga do Sul",
      },
      {
        city_ID: 3532157,
        cityName: "Nantes",
      },
      {
        city_ID: 3532207,
        cityName: "Narandiba",
      },
      {
        city_ID: 3532306,
        cityName: "Natividade da Serra",
      },
      {
        city_ID: 3532405,
        cityName: "Nazaré Paulista",
      },
      {
        city_ID: 3532504,
        cityName: "Neves Paulista",
      },
      {
        city_ID: 3532603,
        cityName: "Nhandeara",
      },
      {
        city_ID: 3532702,
        cityName: "Nipoã",
      },
      {
        city_ID: 3532801,
        cityName: "Nova Aliança",
      },
      {
        city_ID: 3532827,
        cityName: "Nova Campina",
      },
      {
        city_ID: 3532843,
        cityName: "Nova Canaã Paulista",
      },
      {
        city_ID: 3532868,
        cityName: "Nova Castilho",
      },
      {
        city_ID: 3532900,
        cityName: "Nova Europa",
      },
      {
        city_ID: 3533007,
        cityName: "Nova Granada",
      },
      {
        city_ID: 3533106,
        cityName: "Nova Guataporanga",
      },
      {
        city_ID: 3533205,
        cityName: "Nova Independência",
      },
      {
        city_ID: 3533304,
        cityName: "Nova Luzitânia",
      },
      {
        city_ID: 3533403,
        cityName: "Nova Odessa",
      },
      {
        city_ID: 3533254,
        cityName: "Novais",
      },
      {
        city_ID: 3533502,
        cityName: "Novo Horizonte",
      },
      {
        city_ID: 3533601,
        cityName: "Nuporanga",
      },
      {
        city_ID: 3533700,
        cityName: "Ocauçu",
      },
      {
        city_ID: 3533809,
        cityName: "Óleo",
      },
      {
        city_ID: 3533908,
        cityName: "Olímpia",
      },
      {
        city_ID: 3534005,
        cityName: "Onda Verde",
      },
      {
        city_ID: 3534104,
        cityName: "Oriente",
      },
      {
        city_ID: 3534203,
        cityName: "Orindiúva",
      },
      {
        city_ID: 3534302,
        cityName: "Orlândia",
      },
      {
        city_ID: 3534401,
        cityName: "Osasco",
      },
      {
        city_ID: 3534500,
        cityName: "Oscar Bressane",
      },
      {
        city_ID: 3534609,
        cityName: "Osvaldo Cruz",
      },
      {
        city_ID: 3534708,
        cityName: "Ourinhos",
      },
      {
        city_ID: 3534807,
        cityName: "Ouro Verde",
      },
      {
        city_ID: 3534757,
        cityName: "Ouroeste",
      },
      {
        city_ID: 3534906,
        cityName: "Pacaembu",
      },
      {
        city_ID: 3535002,
        cityName: "Palestina",
      },
      {
        city_ID: 3535101,
        cityName: "Palmares Paulista",
      },
      {
        city_ID: 3535200,
        cityName: "Palmeira d'Oeste",
      },
      {
        city_ID: 3535309,
        cityName: "Palmital",
      },
      {
        city_ID: 3535408,
        cityName: "Panorama",
      },
      {
        city_ID: 3535507,
        cityName: "Paraguaçu Paulista",
      },
      {
        city_ID: 3535606,
        cityName: "Paraibuna",
      },
      {
        city_ID: 3535705,
        cityName: "Paraíso",
      },
      {
        city_ID: 3535804,
        cityName: "Paranapanema",
      },
      {
        city_ID: 3535903,
        cityName: "Paranapuã",
      },
      {
        city_ID: 3536000,
        cityName: "Parapuã",
      },
      {
        city_ID: 3536109,
        cityName: "Pardinho",
      },
      {
        city_ID: 3536208,
        cityName: "Pariquera-Açu",
      },
      {
        city_ID: 3536257,
        cityName: "Parisi",
      },
      {
        city_ID: 3536307,
        cityName: "Patrocínio Paulista",
      },
      {
        city_ID: 3536406,
        cityName: "Paulicéia",
      },
      {
        city_ID: 3536505,
        cityName: "Paulínia",
      },
      {
        city_ID: 3536570,
        cityName: "Paulistânia",
      },
      {
        city_ID: 3536604,
        cityName: "Paulo de Faria",
      },
      {
        city_ID: 3536703,
        cityName: "Pederneiras",
      },
      {
        city_ID: 3536802,
        cityName: "Pedra Bela",
      },
      {
        city_ID: 3536901,
        cityName: "Pedranópolis",
      },
      {
        city_ID: 3537008,
        cityName: "Pedregulho",
      },
      {
        city_ID: 3537107,
        cityName: "Pedreira",
      },
      {
        city_ID: 3537156,
        cityName: "Pedrinhas Paulista",
      },
      {
        city_ID: 3537206,
        cityName: "Pedro de Toledo",
      },
      {
        city_ID: 3537305,
        cityName: "Penápolis",
      },
      {
        city_ID: 3537404,
        cityName: "Pereira Barreto",
      },
      {
        city_ID: 3537503,
        cityName: "Pereiras",
      },
      {
        city_ID: 3537602,
        cityName: "Peruíbe",
      },
      {
        city_ID: 3537701,
        cityName: "Piacatu",
      },
      {
        city_ID: 3537800,
        cityName: "Piedade",
      },
      {
        city_ID: 3537909,
        cityName: "Pilar do Sul",
      },
      {
        city_ID: 3538006,
        cityName: "Pindamonhangaba",
      },
      {
        city_ID: 3538105,
        cityName: "Pindorama",
      },
      {
        city_ID: 3538204,
        cityName: "Pinhalzinho",
      },
      {
        city_ID: 3538303,
        cityName: "Piquerobi",
      },
      {
        city_ID: 3538501,
        cityName: "Piquete",
      },
      {
        city_ID: 3538600,
        cityName: "Piracaia",
      },
      {
        city_ID: 3538709,
        cityName: "Piracicaba",
      },
      {
        city_ID: 3538808,
        cityName: "Piraju",
      },
      {
        city_ID: 3538907,
        cityName: "Pirajuí",
      },
      {
        city_ID: 3539004,
        cityName: "Pirangi",
      },
      {
        city_ID: 3539103,
        cityName: "Pirapora do Bom Jesus",
      },
      {
        city_ID: 3539202,
        cityName: "Pirapozinho",
      },
      {
        city_ID: 3539301,
        cityName: "Pirassununga",
      },
      {
        city_ID: 3539400,
        cityName: "Piratininga",
      },
      {
        city_ID: 3539509,
        cityName: "Pitangueiras",
      },
      {
        city_ID: 3539608,
        cityName: "Planalto",
      },
      {
        city_ID: 3539707,
        cityName: "Platina",
      },
      {
        city_ID: 3539806,
        cityName: "Poá",
      },
      {
        city_ID: 3539905,
        cityName: "Poloni",
      },
      {
        city_ID: 3540002,
        cityName: "Pompéia",
      },
      {
        city_ID: 3540101,
        cityName: "Pongaí",
      },
      {
        city_ID: 3540200,
        cityName: "Pontal",
      },
      {
        city_ID: 3540259,
        cityName: "Pontalinda",
      },
      {
        city_ID: 3540309,
        cityName: "Pontes Gestal",
      },
      {
        city_ID: 3540408,
        cityName: "Populina",
      },
      {
        city_ID: 3540507,
        cityName: "Porangaba",
      },
      {
        city_ID: 3540606,
        cityName: "Porto Feliz",
      },
      {
        city_ID: 3540705,
        cityName: "Porto Ferreira",
      },
      {
        city_ID: 3540754,
        cityName: "Potim",
      },
      {
        city_ID: 3540804,
        cityName: "Potirendaba",
      },
      {
        city_ID: 3540853,
        cityName: "Pracinha",
      },
      {
        city_ID: 3540903,
        cityName: "Pradópolis",
      },
      {
        city_ID: 3541000,
        cityName: "Praia Grande",
      },
      {
        city_ID: 3541059,
        cityName: "Pratânia",
      },
      {
        city_ID: 3541109,
        cityName: "Presidente Alves",
      },
      {
        city_ID: 3541208,
        cityName: "Presidente Bernardes",
      },
      {
        city_ID: 3541307,
        cityName: "Presidente Epitácio",
      },
      {
        city_ID: 3541406,
        cityName: "Presidente Prudente",
      },
      {
        city_ID: 3541505,
        cityName: "Presidente Venceslau",
      },
      {
        city_ID: 3541604,
        cityName: "Promissão",
      },
      {
        city_ID: 3541653,
        cityName: "Quadra",
      },
      {
        city_ID: 3541703,
        cityName: "Quatá",
      },
      {
        city_ID: 3541802,
        cityName: "Queiroz",
      },
      {
        city_ID: 3541901,
        cityName: "Queluz",
      },
      {
        city_ID: 3542008,
        cityName: "Quintana",
      },
      {
        city_ID: 3542107,
        cityName: "Rafard",
      },
      {
        city_ID: 3542206,
        cityName: "Rancharia",
      },
      {
        city_ID: 3542305,
        cityName: "Redenção da Serra",
      },
      {
        city_ID: 3542404,
        cityName: "Regente Feijó",
      },
      {
        city_ID: 3542503,
        cityName: "Reginópolis",
      },
      {
        city_ID: 3542602,
        cityName: "Registro",
      },
      {
        city_ID: 3542701,
        cityName: "Restinga",
      },
      {
        city_ID: 3542800,
        cityName: "Ribeira",
      },
      {
        city_ID: 3542909,
        cityName: "Ribeirão Bonito",
      },
      {
        city_ID: 3543006,
        cityName: "Ribeirão Branco",
      },
      {
        city_ID: 3543105,
        cityName: "Ribeirão Corrente",
      },
      {
        city_ID: 3543204,
        cityName: "Ribeirão do Sul",
      },
      {
        city_ID: 3543238,
        cityName: "Ribeirão dos Índios",
      },
      {
        city_ID: 3543253,
        cityName: "Ribeirão Grande",
      },
      {
        city_ID: 3543303,
        cityName: "Ribeirão Pires",
      },
      {
        city_ID: 3543402,
        cityName: "Ribeirão Preto",
      },
      {
        city_ID: 3543600,
        cityName: "Rifaina",
      },
      {
        city_ID: 3543709,
        cityName: "Rincão",
      },
      {
        city_ID: 3543808,
        cityName: "Rinópolis",
      },
      {
        city_ID: 3543907,
        cityName: "Rio Claro",
      },
      {
        city_ID: 3544004,
        cityName: "Rio das Pedras",
      },
      {
        city_ID: 3544103,
        cityName: "Rio Grande da Serra",
      },
      {
        city_ID: 3544202,
        cityName: "Riolândia",
      },
      {
        city_ID: 3543501,
        cityName: "Riversul",
      },
      {
        city_ID: 3544251,
        cityName: "Rosana",
      },
      {
        city_ID: 3544301,
        cityName: "Roseira",
      },
      {
        city_ID: 3544400,
        cityName: "Rubiácea",
      },
      {
        city_ID: 3544509,
        cityName: "Rubinéia",
      },
      {
        city_ID: 3544608,
        cityName: "Sabino",
      },
      {
        city_ID: 3544707,
        cityName: "Sagres",
      },
      {
        city_ID: 3544806,
        cityName: "Sales",
      },
      {
        city_ID: 3544905,
        cityName: "Sales Oliveira",
      },
      {
        city_ID: 3545001,
        cityName: "Salesópolis",
      },
      {
        city_ID: 3545100,
        cityName: "Salmourão",
      },
      {
        city_ID: 3545159,
        cityName: "Saltinho",
      },
      {
        city_ID: 3545209,
        cityName: "Salto",
      },
      {
        city_ID: 3545308,
        cityName: "Salto de Pirapora",
      },
      {
        city_ID: 3545407,
        cityName: "Salto Grande",
      },
      {
        city_ID: 3545506,
        cityName: "Sandovalina",
      },
      {
        city_ID: 3545605,
        cityName: "Santa Adélia",
      },
      {
        city_ID: 3545704,
        cityName: "Santa Albertina",
      },
      {
        city_ID: 3545803,
        cityName: "Santa Bárbara d'Oeste",
      },
      {
        city_ID: 3546009,
        cityName: "Santa Branca",
      },
      {
        city_ID: 3546108,
        cityName: "Santa Clara d'Oeste",
      },
      {
        city_ID: 3546207,
        cityName: "Santa Cruz da Conceição",
      },
      {
        city_ID: 3546256,
        cityName: "Santa Cruz da Esperança",
      },
      {
        city_ID: 3546306,
        cityName: "Santa Cruz das Palmeiras",
      },
      {
        city_ID: 3546405,
        cityName: "Santa Cruz do Rio Pardo",
      },
      {
        city_ID: 3546504,
        cityName: "Santa Ernestina",
      },
      {
        city_ID: 3546603,
        cityName: "Santa Fé do Sul",
      },
      {
        city_ID: 3546702,
        cityName: "Santa Gertrudes",
      },
      {
        city_ID: 3546801,
        cityName: "Santa Isabel",
      },
      {
        city_ID: 3546900,
        cityName: "Santa Lúcia",
      },
      {
        city_ID: 3547007,
        cityName: "Santa Maria da Serra",
      },
      {
        city_ID: 3547106,
        cityName: "Santa Mercedes",
      },
      {
        city_ID: 3547502,
        cityName: "Santa Rita do Passa Quatro",
      },
      {
        city_ID: 3547403,
        cityName: "Santa Rita d'Oeste",
      },
      {
        city_ID: 3547601,
        cityName: "Santa Rosa de Viterbo",
      },
      {
        city_ID: 3547650,
        cityName: "Santa Salete",
      },
      {
        city_ID: 3547205,
        cityName: "Santana da Ponte Pensa",
      },
      {
        city_ID: 3547304,
        cityName: "Santana de Parnaíba",
      },
      {
        city_ID: 3547700,
        cityName: "Santo Anastácio",
      },
      {
        city_ID: 3547809,
        cityName: "Santo André",
      },
      {
        city_ID: 3547908,
        cityName: "Santo Antônio da Alegria",
      },
      {
        city_ID: 3548005,
        cityName: "Santo Antônio de Posse",
      },
      {
        city_ID: 3548054,
        cityName: "Santo Antônio do Aracanguá",
      },
      {
        city_ID: 3548104,
        cityName: "Santo Antônio do Jardim",
      },
      {
        city_ID: 3548203,
        cityName: "Santo Antônio do Pinhal",
      },
      {
        city_ID: 3548302,
        cityName: "Santo Expedito",
      },
      {
        city_ID: 3548401,
        cityName: "Santópolis do Aguapeí",
      },
      {
        city_ID: 3548500,
        cityName: "Santos",
      },
      {
        city_ID: 3548609,
        cityName: "São Bento do Sapucaí",
      },
      {
        city_ID: 3548708,
        cityName: "São Bernardo do Campo",
      },
      {
        city_ID: 3548807,
        cityName: "São Caetano do Sul",
      },
      {
        city_ID: 3548906,
        cityName: "São Carlos",
      },
      {
        city_ID: 3549003,
        cityName: "São Francisco",
      },
      {
        city_ID: 3549102,
        cityName: "São João da Boa Vista",
      },
      {
        city_ID: 3549201,
        cityName: "São João das Duas Pontes",
      },
      {
        city_ID: 3549250,
        cityName: "São João de Iracema",
      },
      {
        city_ID: 3549300,
        cityName: "São João do Pau d'Alho",
      },
      {
        city_ID: 3549409,
        cityName: "São Joaquim da Barra",
      },
      {
        city_ID: 3549508,
        cityName: "São José da Bela Vista",
      },
      {
        city_ID: 3549607,
        cityName: "São José do Barreiro",
      },
      {
        city_ID: 3549706,
        cityName: "São José do Rio Pardo",
      },
      {
        city_ID: 3549805,
        cityName: "São José do Rio Preto",
      },
      {
        city_ID: 3549904,
        cityName: "São José dos Campos",
      },
      {
        city_ID: 3549953,
        cityName: "São Lourenço da Serra",
      },
      {
        city_ID: 3550001,
        cityName: "São Luiz do Paraitinga",
      },
      {
        city_ID: 3550100,
        cityName: "São Manuel",
      },
      {
        city_ID: 3550209,
        cityName: "São Miguel Arcanjo",
      },
      {
        city_ID: 3550308,
        cityName: "São Paulo",
      },
      {
        city_ID: 3550407,
        cityName: "São Pedro",
      },
      {
        city_ID: 3550506,
        cityName: "São Pedro do Turvo",
      },
      {
        city_ID: 3550605,
        cityName: "São Roque",
      },
      {
        city_ID: 3550704,
        cityName: "São Sebastião",
      },
      {
        city_ID: 3550803,
        cityName: "São Sebastião da Grama",
      },
      {
        city_ID: 3550902,
        cityName: "São Simão",
      },
      {
        city_ID: 3551009,
        cityName: "São Vicente",
      },
      {
        city_ID: 3551108,
        cityName: "Sarapuí",
      },
      {
        city_ID: 3551207,
        cityName: "Sarutaiá",
      },
      {
        city_ID: 3551306,
        cityName: "Sebastianópolis do Sul",
      },
      {
        city_ID: 3551405,
        cityName: "Serra Azul",
      },
      {
        city_ID: 3551603,
        cityName: "Serra Negra",
      },
      {
        city_ID: 3551504,
        cityName: "Serrana",
      },
      {
        city_ID: 3551702,
        cityName: "Sertãozinho",
      },
      {
        city_ID: 3551801,
        cityName: "Sete Barras",
      },
      {
        city_ID: 3551900,
        cityName: "Severínia",
      },
      {
        city_ID: 3552007,
        cityName: "Silveiras",
      },
      {
        city_ID: 3552106,
        cityName: "Socorro",
      },
      {
        city_ID: 3552205,
        cityName: "Sorocaba",
      },
      {
        city_ID: 3552304,
        cityName: "Sud Mennucci",
      },
      {
        city_ID: 3552403,
        cityName: "Sumaré",
      },
      {
        city_ID: 3552551,
        cityName: "Suzanápolis",
      },
      {
        city_ID: 3552502,
        cityName: "Suzano",
      },
      {
        city_ID: 3552601,
        cityName: "Tabapuã",
      },
      {
        city_ID: 3552700,
        cityName: "Tabatinga",
      },
      {
        city_ID: 3552809,
        cityName: "Taboão da Serra",
      },
      {
        city_ID: 3552908,
        cityName: "Taciba",
      },
      {
        city_ID: 3553005,
        cityName: "Taguaí",
      },
      {
        city_ID: 3553104,
        cityName: "Taiaçu",
      },
      {
        city_ID: 3553203,
        cityName: "Taiúva",
      },
      {
        city_ID: 3553302,
        cityName: "Tambaú",
      },
      {
        city_ID: 3553401,
        cityName: "Tanabi",
      },
      {
        city_ID: 3553500,
        cityName: "Tapiraí",
      },
      {
        city_ID: 3553609,
        cityName: "Tapiratiba",
      },
      {
        city_ID: 3553658,
        cityName: "Taquaral",
      },
      {
        city_ID: 3553708,
        cityName: "Taquaritinga",
      },
      {
        city_ID: 3553807,
        cityName: "Taquarituba",
      },
      {
        city_ID: 3553856,
        cityName: "Taquarivaí",
      },
      {
        city_ID: 3553906,
        cityName: "Tarabai",
      },
      {
        city_ID: 3553955,
        cityName: "Tarumã",
      },
      {
        city_ID: 3554003,
        cityName: "Tatuí",
      },
      {
        city_ID: 3554102,
        cityName: "Taubaté",
      },
      {
        city_ID: 3554201,
        cityName: "Tejupá",
      },
      {
        city_ID: 3554300,
        cityName: "Teodoro Sampaio",
      },
      {
        city_ID: 3554409,
        cityName: "Terra Roxa",
      },
      {
        city_ID: 3554508,
        cityName: "Tietê",
      },
      {
        city_ID: 3554607,
        cityName: "Timburi",
      },
      {
        city_ID: 3554656,
        cityName: "Torre de Pedra",
      },
      {
        city_ID: 3554706,
        cityName: "Torrinha",
      },
      {
        city_ID: 3554755,
        cityName: "Trabiju",
      },
      {
        city_ID: 3554805,
        cityName: "Tremembé",
      },
      {
        city_ID: 3554904,
        cityName: "Três Fronteiras",
      },
      {
        city_ID: 3554953,
        cityName: "Tuiuti",
      },
      {
        city_ID: 3555000,
        cityName: "Tupã",
      },
      {
        city_ID: 3555109,
        cityName: "Tupi Paulista",
      },
      {
        city_ID: 3555208,
        cityName: "Turiúba",
      },
      {
        city_ID: 3555307,
        cityName: "Turmalina",
      },
      {
        city_ID: 3555356,
        cityName: "Ubarana",
      },
      {
        city_ID: 3555406,
        cityName: "Ubatuba",
      },
      {
        city_ID: 3555505,
        cityName: "Ubirajara",
      },
      {
        city_ID: 3555604,
        cityName: "Uchoa",
      },
      {
        city_ID: 3555703,
        cityName: "União Paulista",
      },
      {
        city_ID: 3555802,
        cityName: "Urânia",
      },
      {
        city_ID: 3555901,
        cityName: "Uru",
      },
      {
        city_ID: 3556008,
        cityName: "Urupês",
      },
      {
        city_ID: 3556107,
        cityName: "Valentim Gentil",
      },
      {
        city_ID: 3556206,
        cityName: "Valinhos",
      },
      {
        city_ID: 3556305,
        cityName: "Valparaíso",
      },
      {
        city_ID: 3556354,
        cityName: "Vargem",
      },
      {
        city_ID: 3556404,
        cityName: "Vargem Grande do Sul",
      },
      {
        city_ID: 3556453,
        cityName: "Vargem Grande Paulista",
      },
      {
        city_ID: 3556503,
        cityName: "Várzea Paulista",
      },
      {
        city_ID: 3556602,
        cityName: "Vera Cruz",
      },
      {
        city_ID: 3556701,
        cityName: "Vinhedo",
      },
      {
        city_ID: 3556800,
        cityName: "Viradouro",
      },
      {
        city_ID: 3556909,
        cityName: "Vista Alegre do Alto",
      },
      {
        city_ID: 3556958,
        cityName: "Vitória Brasil",
      },
      {
        city_ID: 3557006,
        cityName: "Votorantim",
      },
      {
        city_ID: 3557105,
        cityName: "Votuporanga",
      },
      {
        city_ID: 3557154,
        cityName: "Zacarias",
      },
    ],
  },
  {
    id: 28,
    stateName: "Sergipe",
    abv: "SE",
    cities: [
      {
        city_ID: 2800100,
        cityName: "Amparo de São Francisco",
      },
      {
        city_ID: 2800209,
        cityName: "Aquidabã",
      },
      {
        city_ID: 2800308,
        cityName: "Aracaju",
      },
      {
        city_ID: 2800407,
        cityName: "Arauá",
      },
      {
        city_ID: 2800506,
        cityName: "Areia Branca",
      },
      {
        city_ID: 2800605,
        cityName: "Barra dos Coqueiros",
      },
      {
        city_ID: 2800670,
        cityName: "Boquim",
      },
      {
        city_ID: 2800704,
        cityName: "Brejo Grande",
      },
      {
        city_ID: 2801009,
        cityName: "Campo do Brito",
      },
      {
        city_ID: 2801108,
        cityName: "Canhoba",
      },
      {
        city_ID: 2801207,
        cityName: "Canindé de São Francisco",
      },
      {
        city_ID: 2801306,
        cityName: "Capela",
      },
      {
        city_ID: 2801405,
        cityName: "Carira",
      },
      {
        city_ID: 2801504,
        cityName: "Carmópolis",
      },
      {
        city_ID: 2801603,
        cityName: "Cedro de São João",
      },
      {
        city_ID: 2801702,
        cityName: "Cristinápolis",
      },
      {
        city_ID: 2801900,
        cityName: "Cumbe",
      },
      {
        city_ID: 2802007,
        cityName: "Divina Pastora",
      },
      {
        city_ID: 2802106,
        cityName: "Estância",
      },
      {
        city_ID: 2802205,
        cityName: "Feira Nova",
      },
      {
        city_ID: 2802304,
        cityName: "Frei Paulo",
      },
      {
        city_ID: 2802403,
        cityName: "Gararu",
      },
      {
        city_ID: 2802502,
        cityName: "General Maynard",
      },
      {
        city_ID: 2802601,
        cityName: "Gracho Cardoso",
      },
      {
        city_ID: 2802700,
        cityName: "Ilha das Flores",
      },
      {
        city_ID: 2802809,
        cityName: "Indiaroba",
      },
      {
        city_ID: 2802908,
        cityName: "Itabaiana",
      },
      {
        city_ID: 2803005,
        cityName: "Itabaianinha",
      },
      {
        city_ID: 2803104,
        cityName: "Itabi",
      },
      {
        city_ID: 2803203,
        cityName: "Itaporanga d'Ajuda",
      },
      {
        city_ID: 2803302,
        cityName: "Japaratuba",
      },
      {
        city_ID: 2803401,
        cityName: "Japoatã",
      },
      {
        city_ID: 2803500,
        cityName: "Lagarto",
      },
      {
        city_ID: 2803609,
        cityName: "Laranjeiras",
      },
      {
        city_ID: 2803708,
        cityName: "Macambira",
      },
      {
        city_ID: 2803807,
        cityName: "Malhada dos Bois",
      },
      {
        city_ID: 2803906,
        cityName: "Malhador",
      },
      {
        city_ID: 2804003,
        cityName: "Maruim",
      },
      {
        city_ID: 2804102,
        cityName: "Moita Bonita",
      },
      {
        city_ID: 2804201,
        cityName: "Monte Alegre de Sergipe",
      },
      {
        city_ID: 2804300,
        cityName: "Muribeca",
      },
      {
        city_ID: 2804409,
        cityName: "Neópolis",
      },
      {
        city_ID: 2804458,
        cityName: "Nossa Senhora Aparecida",
      },
      {
        city_ID: 2804508,
        cityName: "Nossa Senhora da Glória",
      },
      {
        city_ID: 2804607,
        cityName: "Nossa Senhora das Dores",
      },
      {
        city_ID: 2804706,
        cityName: "Nossa Senhora de Lourdes",
      },
      {
        city_ID: 2804805,
        cityName: "Nossa Senhora do Socorro",
      },
      {
        city_ID: 2804904,
        cityName: "Pacatuba",
      },
      {
        city_ID: 2805000,
        cityName: "Pedra Mole",
      },
      {
        city_ID: 2805109,
        cityName: "Pedrinhas",
      },
      {
        city_ID: 2805208,
        cityName: "Pinhão",
      },
      {
        city_ID: 2805307,
        cityName: "Pirambu",
      },
      {
        city_ID: 2805406,
        cityName: "Poço Redondo",
      },
      {
        city_ID: 2805505,
        cityName: "Poço Verde",
      },
      {
        city_ID: 2805604,
        cityName: "Porto da Folha",
      },
      {
        city_ID: 2805703,
        cityName: "Propriá",
      },
      {
        city_ID: 2805802,
        cityName: "Riachão do Dantas",
      },
      {
        city_ID: 2805901,
        cityName: "Riachuelo",
      },
      {
        city_ID: 2806008,
        cityName: "Ribeirópolis",
      },
      {
        city_ID: 2806107,
        cityName: "Rosário do Catete",
      },
      {
        city_ID: 2806206,
        cityName: "Salgado",
      },
      {
        city_ID: 2806305,
        cityName: "Santa Luzia do Itanhy",
      },
      {
        city_ID: 2806503,
        cityName: "Santa Rosa de Lima",
      },
      {
        city_ID: 2806404,
        cityName: "Santana do São Francisco",
      },
      {
        city_ID: 2806602,
        cityName: "Santo Amaro das Brotas",
      },
      {
        city_ID: 2806701,
        cityName: "São Cristóvão",
      },
      {
        city_ID: 2806800,
        cityName: "São Domingos",
      },
      {
        city_ID: 2806909,
        cityName: "São Francisco",
      },
      {
        city_ID: 2807006,
        cityName: "São Miguel do Aleixo",
      },
      {
        city_ID: 2807105,
        cityName: "Simão Dias",
      },
      {
        city_ID: 2807204,
        cityName: "Siriri",
      },
      {
        city_ID: 2807303,
        cityName: "Telha",
      },
      {
        city_ID: 2807402,
        cityName: "Tobias Barreto",
      },
      {
        city_ID: 2807501,
        cityName: "Tomar do Geru",
      },
      {
        city_ID: 2807600,
        cityName: "Umbaúba",
      },
    ],
  },
  {
    id: 17,
    stateName: "Tocantins",
    abv: "TO",
    cities: [
      {
        city_ID: 1700251,
        cityName: "Abreulândia",
      },
      {
        city_ID: 1700301,
        cityName: "Aguiarnópolis",
      },
      {
        city_ID: 1700350,
        cityName: "Aliança do Tocantins",
      },
      {
        city_ID: 1700400,
        cityName: "Almas",
      },
      {
        city_ID: 1700707,
        cityName: "Alvorada",
      },
      {
        city_ID: 1701002,
        cityName: "Ananás",
      },
      {
        city_ID: 1701051,
        cityName: "Angico",
      },
      {
        city_ID: 1701101,
        cityName: "Aparecida do Rio Negro",
      },
      {
        city_ID: 1701309,
        cityName: "Aragominas",
      },
      {
        city_ID: 1701903,
        cityName: "Araguacema",
      },
      {
        city_ID: 1702000,
        cityName: "Araguaçu",
      },
      {
        city_ID: 1702109,
        cityName: "Araguaína",
      },
      {
        city_ID: 1702158,
        cityName: "Araguanã",
      },
      {
        city_ID: 1702208,
        cityName: "Araguatins",
      },
      {
        city_ID: 1702307,
        cityName: "Arapoema",
      },
      {
        city_ID: 1702406,
        cityName: "Arraias",
      },
      {
        city_ID: 1702554,
        cityName: "Augustinópolis",
      },
      {
        city_ID: 1702703,
        cityName: "Aurora do Tocantins",
      },
      {
        city_ID: 1702901,
        cityName: "Axixá do Tocantins",
      },
      {
        city_ID: 1703008,
        cityName: "Babaçulândia",
      },
      {
        city_ID: 1703057,
        cityName: "Bandeirantes do Tocantins",
      },
      {
        city_ID: 1703073,
        cityName: "Barra do Ouro",
      },
      {
        city_ID: 1703107,
        cityName: "Barrolândia",
      },
      {
        city_ID: 1703206,
        cityName: "Bernardo Sayão",
      },
      {
        city_ID: 1703305,
        cityName: "Bom Jesus do Tocantins",
      },
      {
        city_ID: 1703602,
        cityName: "Brasilândia do Tocantins",
      },
      {
        city_ID: 1703701,
        cityName: "Brejinho de Nazaré",
      },
      {
        city_ID: 1703800,
        cityName: "Buriti do Tocantins",
      },
      {
        city_ID: 1703826,
        cityName: "Cachoeirinha",
      },
      {
        city_ID: 1703842,
        cityName: "Campos Lindos",
      },
      {
        city_ID: 1703867,
        cityName: "Cariri do Tocantins",
      },
      {
        city_ID: 1703883,
        cityName: "Carmolândia",
      },
      {
        city_ID: 1703891,
        cityName: "Carrasco Bonito",
      },
      {
        city_ID: 1703909,
        cityName: "Caseara",
      },
      {
        city_ID: 1704105,
        cityName: "Centenário",
      },
      {
        city_ID: 1705102,
        cityName: "Chapada da Natividade",
      },
      {
        city_ID: 1704600,
        cityName: "Chapada de Areia",
      },
      {
        city_ID: 1705508,
        cityName: "Colinas do Tocantins",
      },
      {
        city_ID: 1716703,
        cityName: "Colméia",
      },
      {
        city_ID: 1705557,
        cityName: "Combinado",
      },
      {
        city_ID: 1705607,
        cityName: "Conceição do Tocantins",
      },
      {
        city_ID: 1706001,
        cityName: "Couto Magalhães",
      },
      {
        city_ID: 1706100,
        cityName: "Cristalândia",
      },
      {
        city_ID: 1706258,
        cityName: "Crixás do Tocantins",
      },
      {
        city_ID: 1706506,
        cityName: "Darcinópolis",
      },
      {
        city_ID: 1707009,
        cityName: "Dianópolis",
      },
      {
        city_ID: 1707108,
        cityName: "Divinópolis do Tocantins",
      },
      {
        city_ID: 1707207,
        cityName: "Dois Irmãos do Tocantins",
      },
      {
        city_ID: 1707306,
        cityName: "Dueré",
      },
      {
        city_ID: 1707405,
        cityName: "Esperantina",
      },
      {
        city_ID: 1707553,
        cityName: "Fátima",
      },
      {
        city_ID: 1707652,
        cityName: "Figueirópolis",
      },
      {
        city_ID: 1707702,
        cityName: "Filadélfia",
      },
      {
        city_ID: 1708205,
        cityName: "Formoso do Araguaia",
      },
      {
        city_ID: 1708254,
        cityName: "Fortaleza do Tabocão",
      },
      {
        city_ID: 1708304,
        cityName: "Goianorte",
      },
      {
        city_ID: 1709005,
        cityName: "Goiatins",
      },
      {
        city_ID: 1709302,
        cityName: "Guaraí",
      },
      {
        city_ID: 1709500,
        cityName: "Gurupi",
      },
      {
        city_ID: 1709807,
        cityName: "Ipueiras",
      },
      {
        city_ID: 1710508,
        cityName: "Itacajá",
      },
      {
        city_ID: 1710706,
        cityName: "Itaguatins",
      },
      {
        city_ID: 1710904,
        cityName: "Itapiratins",
      },
      {
        city_ID: 1711100,
        cityName: "Itaporã do Tocantins",
      },
      {
        city_ID: 1711506,
        cityName: "Jaú do Tocantins",
      },
      {
        city_ID: 1711803,
        cityName: "Juarina",
      },
      {
        city_ID: 1711902,
        cityName: "Lagoa da Confusão",
      },
      {
        city_ID: 1711951,
        cityName: "Lagoa do Tocantins",
      },
      {
        city_ID: 1712009,
        cityName: "Lajeado",
      },
      {
        city_ID: 1712157,
        cityName: "Lavandeira",
      },
      {
        city_ID: 1712405,
        cityName: "Lizarda",
      },
      {
        city_ID: 1712454,
        cityName: "Luzinópolis",
      },
      {
        city_ID: 1712504,
        cityName: "Marianópolis do Tocantins",
      },
      {
        city_ID: 1712702,
        cityName: "Mateiros",
      },
      {
        city_ID: 1712801,
        cityName: "Maurilândia do Tocantins",
      },
      {
        city_ID: 1713205,
        cityName: "Miracema do Tocantins",
      },
      {
        city_ID: 1713304,
        cityName: "Miranorte",
      },
      {
        city_ID: 1713601,
        cityName: "Monte do Carmo",
      },
      {
        city_ID: 1713700,
        cityName: "Monte Santo do Tocantins",
      },
      {
        city_ID: 1713957,
        cityName: "Muricilândia",
      },
      {
        city_ID: 1714203,
        cityName: "Natividade",
      },
      {
        city_ID: 1714302,
        cityName: "Nazaré",
      },
      {
        city_ID: 1714880,
        cityName: "Nova Olinda",
      },
      {
        city_ID: 1715002,
        cityName: "Nova Rosalândia",
      },
      {
        city_ID: 1715101,
        cityName: "Novo Acordo",
      },
      {
        city_ID: 1715150,
        cityName: "Novo Alegre",
      },
      {
        city_ID: 1715259,
        cityName: "Novo Jardim",
      },
      {
        city_ID: 1715507,
        cityName: "Oliveira de Fátima",
      },
      {
        city_ID: 1721000,
        cityName: "Palmas",
      },
      {
        city_ID: 1715705,
        cityName: "Palmeirante",
      },
      {
        city_ID: 1713809,
        cityName: "Palmeiras do Tocantins",
      },
      {
        city_ID: 1715754,
        cityName: "Palmeirópolis",
      },
      {
        city_ID: 1716109,
        cityName: "Paraíso do Tocantins",
      },
      {
        city_ID: 1716208,
        cityName: "Paranã",
      },
      {
        city_ID: 1716307,
        cityName: "Pau D'Arco",
      },
      {
        city_ID: 1716505,
        cityName: "Pedro Afonso",
      },
      {
        city_ID: 1716604,
        cityName: "Peixe",
      },
      {
        city_ID: 1716653,
        cityName: "Pequizeiro",
      },
      {
        city_ID: 1717008,
        cityName: "Pindorama do Tocantins",
      },
      {
        city_ID: 1717206,
        cityName: "Piraquê",
      },
      {
        city_ID: 1717503,
        cityName: "Pium",
      },
      {
        city_ID: 1717800,
        cityName: "Ponte Alta do Bom Jesus",
      },
      {
        city_ID: 1717909,
        cityName: "Ponte Alta do Tocantins",
      },
      {
        city_ID: 1718006,
        cityName: "Porto Alegre do Tocantins",
      },
      {
        city_ID: 1718204,
        cityName: "Porto Nacional",
      },
      {
        city_ID: 1718303,
        cityName: "Praia Norte",
      },
      {
        city_ID: 1718402,
        cityName: "Presidente Kennedy",
      },
      {
        city_ID: 1718451,
        cityName: "Pugmil",
      },
      {
        city_ID: 1718501,
        cityName: "Recursolândia",
      },
      {
        city_ID: 1718550,
        cityName: "Riachinho",
      },
      {
        city_ID: 1718659,
        cityName: "Rio da Conceição",
      },
      {
        city_ID: 1718709,
        cityName: "Rio dos Bois",
      },
      {
        city_ID: 1718758,
        cityName: "Rio Sono",
      },
      {
        city_ID: 1718808,
        cityName: "Sampaio",
      },
      {
        city_ID: 1718840,
        cityName: "Sandolândia",
      },
      {
        city_ID: 1718865,
        cityName: "Santa Fé do Araguaia",
      },
      {
        city_ID: 1718881,
        cityName: "Santa Maria do Tocantins",
      },
      {
        city_ID: 1718899,
        cityName: "Santa Rita do Tocantins",
      },
      {
        city_ID: 1718907,
        cityName: "Santa Rosa do Tocantins",
      },
      {
        city_ID: 1719004,
        cityName: "Santa Tereza do Tocantins",
      },
      {
        city_ID: 1720002,
        cityName: "Santa Terezinha do Tocantins",
      },
      {
        city_ID: 1720101,
        cityName: "São Bento do Tocantins",
      },
      {
        city_ID: 1720150,
        cityName: "São Félix do Tocantins",
      },
      {
        city_ID: 1720200,
        cityName: "São Miguel do Tocantins",
      },
      {
        city_ID: 1720259,
        cityName: "São Salvador do Tocantins",
      },
      {
        city_ID: 1720309,
        cityName: "São Sebastião do Tocantins",
      },
      {
        city_ID: 1720499,
        cityName: "São Valério",
      },
      {
        city_ID: 1720655,
        cityName: "Silvanópolis",
      },
      {
        city_ID: 1720804,
        cityName: "Sítio Novo do Tocantins",
      },
      {
        city_ID: 1720853,
        cityName: "Sucupira",
      },
      {
        city_ID: 1720903,
        cityName: "Taguatinga",
      },
      {
        city_ID: 1720937,
        cityName: "Taipas do Tocantins",
      },
      {
        city_ID: 1720978,
        cityName: "Talismã",
      },
      {
        city_ID: 1721109,
        cityName: "Tocantínia",
      },
      {
        city_ID: 1721208,
        cityName: "Tocantinópolis",
      },
      {
        city_ID: 1721257,
        cityName: "Tupirama",
      },
      {
        city_ID: 1721307,
        cityName: "Tupiratins",
      },
      {
        city_ID: 1722081,
        cityName: "Wanderlândia",
      },
      {
        city_ID: 1722107,
        cityName: "Xambioá",
      },
    ],
  },
];

export { statesData };
