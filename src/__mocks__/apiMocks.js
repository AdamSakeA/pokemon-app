const mockPokemon = {
  count: 1281,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/11/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon/19/",
    },
    {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon/20/",
    },
  ],
};

const mockPokemonTypes = {
  count: 20,
  next: null,
  previous: null,
  results: [
    {
      name: "normal",
      url: "https://pokeapi.co/api/v2/type/1/",
    },
    {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
    },
    {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
    },
    {
      name: "ground",
      url: "https://pokeapi.co/api/v2/type/5/",
    },
    {
      name: "rock",
      url: "https://pokeapi.co/api/v2/type/6/",
    },
    {
      name: "bug",
      url: "https://pokeapi.co/api/v2/type/7/",
    },
    {
      name: "ghost",
      url: "https://pokeapi.co/api/v2/type/8/",
    },
    {
      name: "steel",
      url: "https://pokeapi.co/api/v2/type/9/",
    },
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
    },
    {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
    },
    {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
    },
    {
      name: "electric",
      url: "https://pokeapi.co/api/v2/type/13/",
    },
    {
      name: "psychic",
      url: "https://pokeapi.co/api/v2/type/14/",
    },
    {
      name: "ice",
      url: "https://pokeapi.co/api/v2/type/15/",
    },
    {
      name: "dragon",
      url: "https://pokeapi.co/api/v2/type/16/",
    },
    {
      name: "dark",
      url: "https://pokeapi.co/api/v2/type/17/",
    },
    {
      name: "fairy",
      url: "https://pokeapi.co/api/v2/type/18/",
    },
    {
      name: "unknown",
      url: "https://pokeapi.co/api/v2/type/10001/",
    },
    {
      name: "shadow",
      url: "https://pokeapi.co/api/v2/type/10002/",
    },
  ],
};

const mockTypes = {
  damage_relations: {
    double_damage_from: [
      {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
      },
      {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/",
      },
    ],
    double_damage_to: [
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
      {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
      },
    ],
    half_damage_from: [
      {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
      {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
      },
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
      {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
      },
    ],
    half_damage_to: [
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
      {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
      },
      {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
      },
      {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/",
      },
    ],
    no_damage_from: [],
    no_damage_to: [
      {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
      },
    ],
  },
  game_indices: [
    {
      game_index: 3,
      generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
      },
    },
    {
      game_index: 3,
      generation: {
        name: "generation-ii",
        url: "https://pokeapi.co/api/v2/generation/2/",
      },
    },
    {
      game_index: 3,
      generation: {
        name: "generation-iii",
        url: "https://pokeapi.co/api/v2/generation/3/",
      },
    },
    {
      game_index: 3,
      generation: {
        name: "generation-iv",
        url: "https://pokeapi.co/api/v2/generation/4/",
      },
    },
    {
      game_index: 3,
      generation: {
        name: "generation-v",
        url: "https://pokeapi.co/api/v2/generation/5/",
      },
    },
    {
      game_index: 3,
      generation: {
        name: "generation-vi",
        url: "https://pokeapi.co/api/v2/generation/6/",
      },
    },
  ],
  generation: {
    name: "generation-i",
    url: "https://pokeapi.co/api/v2/generation/1/",
  },
  id: 4,
  move_damage_class: {
    name: "physical",
    url: "https://pokeapi.co/api/v2/move-damage-class/2/",
  },
  moves: [
    {
      name: "poison-sting",
      url: "https://pokeapi.co/api/v2/move/40/",
    },
    {
      name: "acid",
      url: "https://pokeapi.co/api/v2/move/51/",
    },
    {
      name: "poison-powder",
      url: "https://pokeapi.co/api/v2/move/77/",
    },
    {
      name: "toxic",
      url: "https://pokeapi.co/api/v2/move/92/",
    },
    {
      name: "smog",
      url: "https://pokeapi.co/api/v2/move/123/",
    },
    {
      name: "sludge",
      url: "https://pokeapi.co/api/v2/move/124/",
    },
    {
      name: "poison-gas",
      url: "https://pokeapi.co/api/v2/move/139/",
    },
    {
      name: "acid-armor",
      url: "https://pokeapi.co/api/v2/move/151/",
    },
    {
      name: "sludge-bomb",
      url: "https://pokeapi.co/api/v2/move/188/",
    },
    {
      name: "poison-fang",
      url: "https://pokeapi.co/api/v2/move/305/",
    },
    {
      name: "poison-tail",
      url: "https://pokeapi.co/api/v2/move/342/",
    },
    {
      name: "gastro-acid",
      url: "https://pokeapi.co/api/v2/move/380/",
    },
    {
      name: "toxic-spikes",
      url: "https://pokeapi.co/api/v2/move/390/",
    },
    {
      name: "poison-jab",
      url: "https://pokeapi.co/api/v2/move/398/",
    },
    {
      name: "cross-poison",
      url: "https://pokeapi.co/api/v2/move/440/",
    },
    {
      name: "gunk-shot",
      url: "https://pokeapi.co/api/v2/move/441/",
    },
    {
      name: "venoshock",
      url: "https://pokeapi.co/api/v2/move/474/",
    },
    {
      name: "sludge-wave",
      url: "https://pokeapi.co/api/v2/move/482/",
    },
    {
      name: "coil",
      url: "https://pokeapi.co/api/v2/move/489/",
    },
    {
      name: "acid-spray",
      url: "https://pokeapi.co/api/v2/move/491/",
    },
    {
      name: "clear-smog",
      url: "https://pokeapi.co/api/v2/move/499/",
    },
    {
      name: "belch",
      url: "https://pokeapi.co/api/v2/move/562/",
    },
    {
      name: "venom-drench",
      url: "https://pokeapi.co/api/v2/move/599/",
    },
    {
      name: "acid-downpour--physical",
      url: "https://pokeapi.co/api/v2/move/628/",
    },
    {
      name: "acid-downpour--special",
      url: "https://pokeapi.co/api/v2/move/629/",
    },
    {
      name: "baneful-bunker",
      url: "https://pokeapi.co/api/v2/move/661/",
    },
    {
      name: "toxic-thread",
      url: "https://pokeapi.co/api/v2/move/672/",
    },
    {
      name: "purify",
      url: "https://pokeapi.co/api/v2/move/685/",
    },
    {
      name: "max-ooze",
      url: "https://pokeapi.co/api/v2/move/764/",
    },
    {
      name: "shell-side-arm",
      url: "https://pokeapi.co/api/v2/move/801/",
    },
    {
      name: "corrosive-gas",
      url: "https://pokeapi.co/api/v2/move/810/",
    },
    {
      name: "dire-claw",
      url: "https://pokeapi.co/api/v2/move/827/",
    },
    {
      name: "barb-barrage",
      url: "https://pokeapi.co/api/v2/move/839/",
    },
    {
      name: "mortal-spin",
      url: "https://pokeapi.co/api/v2/move/866/",
    },
    {
      name: "noxious-torque",
      url: "https://pokeapi.co/api/v2/move/898/",
    },
  ],
  name: "poison",
  names: [
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "どく",
    },
    {
      language: {
        name: "ko",
        url: "https://pokeapi.co/api/v2/language/3/",
      },
      name: "독",
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      name: "毒",
    },
    {
      language: {
        name: "fr",
        url: "https://pokeapi.co/api/v2/language/5/",
      },
      name: "Poison",
    },
    {
      language: {
        name: "de",
        url: "https://pokeapi.co/api/v2/language/6/",
      },
      name: "Gift",
    },
    {
      language: {
        name: "es",
        url: "https://pokeapi.co/api/v2/language/7/",
      },
      name: "Veneno",
    },
    {
      language: {
        name: "it",
        url: "https://pokeapi.co/api/v2/language/8/",
      },
      name: "Veleno",
    },
    {
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      name: "Poison",
    },
    {
      language: {
        name: "ja",
        url: "https://pokeapi.co/api/v2/language/11/",
      },
      name: "どく",
    },
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      name: "毒",
    },
  ],
  past_damage_relations: [
    {
      damage_relations: {
        double_damage_from: [
          {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
          {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/",
          },
          {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        ],
        double_damage_to: [
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
          {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        ],
        half_damage_from: [
          {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/",
          },
          {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        ],
        half_damage_to: [
          {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
          {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
          {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/",
          },
          {
            name: "ghost",
            url: "https://pokeapi.co/api/v2/type/8/",
          },
        ],
        no_damage_from: [],
        no_damage_to: [],
      },
      generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
      },
    },
  ],
  pokemon: [
    {
      pokemon: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "ekans",
        url: "https://pokeapi.co/api/v2/pokemon/23/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "arbok",
        url: "https://pokeapi.co/api/v2/pokemon/24/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidoran-f",
        url: "https://pokeapi.co/api/v2/pokemon/29/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidorina",
        url: "https://pokeapi.co/api/v2/pokemon/30/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidoqueen",
        url: "https://pokeapi.co/api/v2/pokemon/31/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidoran-m",
        url: "https://pokeapi.co/api/v2/pokemon/32/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidorino",
        url: "https://pokeapi.co/api/v2/pokemon/33/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nidoking",
        url: "https://pokeapi.co/api/v2/pokemon/34/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "zubat",
        url: "https://pokeapi.co/api/v2/pokemon/41/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "golbat",
        url: "https://pokeapi.co/api/v2/pokemon/42/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "oddish",
        url: "https://pokeapi.co/api/v2/pokemon/43/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gloom",
        url: "https://pokeapi.co/api/v2/pokemon/44/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "vileplume",
        url: "https://pokeapi.co/api/v2/pokemon/45/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venonat",
        url: "https://pokeapi.co/api/v2/pokemon/48/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venomoth",
        url: "https://pokeapi.co/api/v2/pokemon/49/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "bellsprout",
        url: "https://pokeapi.co/api/v2/pokemon/69/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "weepinbell",
        url: "https://pokeapi.co/api/v2/pokemon/70/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "victreebel",
        url: "https://pokeapi.co/api/v2/pokemon/71/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "tentacool",
        url: "https://pokeapi.co/api/v2/pokemon/72/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "tentacruel",
        url: "https://pokeapi.co/api/v2/pokemon/73/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "grimer",
        url: "https://pokeapi.co/api/v2/pokemon/88/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "muk",
        url: "https://pokeapi.co/api/v2/pokemon/89/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "gastly",
        url: "https://pokeapi.co/api/v2/pokemon/92/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "haunter",
        url: "https://pokeapi.co/api/v2/pokemon/93/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gengar",
        url: "https://pokeapi.co/api/v2/pokemon/94/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "koffing",
        url: "https://pokeapi.co/api/v2/pokemon/109/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "weezing",
        url: "https://pokeapi.co/api/v2/pokemon/110/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "spinarak",
        url: "https://pokeapi.co/api/v2/pokemon/167/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "ariados",
        url: "https://pokeapi.co/api/v2/pokemon/168/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "crobat",
        url: "https://pokeapi.co/api/v2/pokemon/169/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "qwilfish",
        url: "https://pokeapi.co/api/v2/pokemon/211/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "dustox",
        url: "https://pokeapi.co/api/v2/pokemon/269/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "roselia",
        url: "https://pokeapi.co/api/v2/pokemon/315/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gulpin",
        url: "https://pokeapi.co/api/v2/pokemon/316/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "swalot",
        url: "https://pokeapi.co/api/v2/pokemon/317/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "seviper",
        url: "https://pokeapi.co/api/v2/pokemon/336/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "budew",
        url: "https://pokeapi.co/api/v2/pokemon/406/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "roserade",
        url: "https://pokeapi.co/api/v2/pokemon/407/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "stunky",
        url: "https://pokeapi.co/api/v2/pokemon/434/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "skuntank",
        url: "https://pokeapi.co/api/v2/pokemon/435/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "skorupi",
        url: "https://pokeapi.co/api/v2/pokemon/451/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "drapion",
        url: "https://pokeapi.co/api/v2/pokemon/452/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "croagunk",
        url: "https://pokeapi.co/api/v2/pokemon/453/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "toxicroak",
        url: "https://pokeapi.co/api/v2/pokemon/454/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "venipede",
        url: "https://pokeapi.co/api/v2/pokemon/543/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "whirlipede",
        url: "https://pokeapi.co/api/v2/pokemon/544/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "scolipede",
        url: "https://pokeapi.co/api/v2/pokemon/545/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "trubbish",
        url: "https://pokeapi.co/api/v2/pokemon/568/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "garbodor",
        url: "https://pokeapi.co/api/v2/pokemon/569/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "foongus",
        url: "https://pokeapi.co/api/v2/pokemon/590/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "amoonguss",
        url: "https://pokeapi.co/api/v2/pokemon/591/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "skrelp",
        url: "https://pokeapi.co/api/v2/pokemon/690/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "dragalge",
        url: "https://pokeapi.co/api/v2/pokemon/691/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "mareanie",
        url: "https://pokeapi.co/api/v2/pokemon/747/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "toxapex",
        url: "https://pokeapi.co/api/v2/pokemon/748/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "salandit",
        url: "https://pokeapi.co/api/v2/pokemon/757/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "salazzle",
        url: "https://pokeapi.co/api/v2/pokemon/758/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nihilego",
        url: "https://pokeapi.co/api/v2/pokemon/793/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "poipole",
        url: "https://pokeapi.co/api/v2/pokemon/803/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "naganadel",
        url: "https://pokeapi.co/api/v2/pokemon/804/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "toxel",
        url: "https://pokeapi.co/api/v2/pokemon/848/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "toxtricity-amped",
        url: "https://pokeapi.co/api/v2/pokemon/849/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "eternatus",
        url: "https://pokeapi.co/api/v2/pokemon/890/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sneasler",
        url: "https://pokeapi.co/api/v2/pokemon/903/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "overqwil",
        url: "https://pokeapi.co/api/v2/pokemon/904/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "shroodle",
        url: "https://pokeapi.co/api/v2/pokemon/944/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "grafaiai",
        url: "https://pokeapi.co/api/v2/pokemon/945/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "varoom",
        url: "https://pokeapi.co/api/v2/pokemon/965/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "revavroom",
        url: "https://pokeapi.co/api/v2/pokemon/966/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "glimmet",
        url: "https://pokeapi.co/api/v2/pokemon/969/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "glimmora",
        url: "https://pokeapi.co/api/v2/pokemon/970/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "clodsire",
        url: "https://pokeapi.co/api/v2/pokemon/980/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "iron-moth",
        url: "https://pokeapi.co/api/v2/pokemon/994/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venusaur-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10033/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gengar-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10038/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "beedrill-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10090/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "grimer-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10112/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "muk-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10113/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "salazzle-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10129/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "slowbro-galar",
        url: "https://pokeapi.co/api/v2/pokemon/10165/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "weezing-galar",
        url: "https://pokeapi.co/api/v2/pokemon/10167/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "slowking-galar",
        url: "https://pokeapi.co/api/v2/pokemon/10172/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "toxtricity-low-key",
        url: "https://pokeapi.co/api/v2/pokemon/10184/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "eternatus-eternamax",
        url: "https://pokeapi.co/api/v2/pokemon/10190/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "venusaur-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10195/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gengar-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10202/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "garbodor-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10207/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "toxtricity-amped-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10219/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "toxtricity-low-key-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10228/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "qwilfish-hisui",
        url: "https://pokeapi.co/api/v2/pokemon/10234/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "sneasel-hisui",
        url: "https://pokeapi.co/api/v2/pokemon/10235/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "wooper-paldea",
        url: "https://pokeapi.co/api/v2/pokemon/10253/",
      },
      slot: 1,
    },
  ],
};

// const mockPokemonSearch = {
//   abilities: [
//     {
//       ability: {
//         name: "overgrow",
//         url: "https://pokeapi.co/api/v2/ability/65/",
//       },
//       is_hidden: false,
//       slot: 1,
//     },
//     {
//       ability: {
//         name: "chlorophyll",
//         url: "https://pokeapi.co/api/v2/ability/34/",
//       },
//       is_hidden: true,
//       slot: 3,
//     },
//   ],
//   base_experience: 64,
//   forms: [
//     {
//       name: "bulbasaur",
//       url: "https://pokeapi.co/api/v2/pokemon-form/1/",
//     },
//   ],
//   game_indices: [
//     {
//       game_index: 153,
//       version: {
//         name: "red",
//         url: "https://pokeapi.co/api/v2/version/1/",
//       },
//     },
//     {
//       game_index: 153,
//       version: {
//         name: "blue",
//         url: "https://pokeapi.co/api/v2/version/2/",
//       },
//     },
//     {
//       game_index: 153,
//       version: {
//         name: "yellow",
//         url: "https://pokeapi.co/api/v2/version/3/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "gold",
//         url: "https://pokeapi.co/api/v2/version/4/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "silver",
//         url: "https://pokeapi.co/api/v2/version/5/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "crystal",
//         url: "https://pokeapi.co/api/v2/version/6/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "ruby",
//         url: "https://pokeapi.co/api/v2/version/7/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "sapphire",
//         url: "https://pokeapi.co/api/v2/version/8/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "emerald",
//         url: "https://pokeapi.co/api/v2/version/9/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "firered",
//         url: "https://pokeapi.co/api/v2/version/10/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "leafgreen",
//         url: "https://pokeapi.co/api/v2/version/11/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "diamond",
//         url: "https://pokeapi.co/api/v2/version/12/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "pearl",
//         url: "https://pokeapi.co/api/v2/version/13/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "platinum",
//         url: "https://pokeapi.co/api/v2/version/14/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "heartgold",
//         url: "https://pokeapi.co/api/v2/version/15/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "soulsilver",
//         url: "https://pokeapi.co/api/v2/version/16/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "black",
//         url: "https://pokeapi.co/api/v2/version/17/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "white",
//         url: "https://pokeapi.co/api/v2/version/18/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "black-2",
//         url: "https://pokeapi.co/api/v2/version/21/",
//       },
//     },
//     {
//       game_index: 1,
//       version: {
//         name: "white-2",
//         url: "https://pokeapi.co/api/v2/version/22/",
//       },
//     },
//   ],
//   heigh: 7,
//   held_items: [],
//   id: 1,
//   is_default: true,
//   location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",

//   name: "bulbasaur",
//   order: 1,
//   past_types: [],
//   species: {
//     name: "bulbasaur",
//     url: "https://pokeapi.co/api/v2/pokemon-species/1/",
//   },
//   sprites: {
//     back_default:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
//     back_female: null,
//     back_shiny:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
//     back_shiny_female: null,
//     front_default:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     front_female: null,
//     front_shiny:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
//     front_shiny_female: null,
//     other: {
//       dream_world: {
//         front_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//         front_female: null,
//       },
//       home: {
//         front_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
//         front_female: null,
//         front_shiny:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
//         front_shiny_female: null,
//       },
//       officialArtwork: {
//         front_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//         front_shiny:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
//       },
//     },
//   },
//   stats: [
//     {
//       base_stat: 45,
//       effort: 0,
//       stat: {
//         name: "hp",
//         url: "https://pokeapi.co/api/v2/stat/1/",
//       },
//     },
//     {
//       base_stat: 49,
//       effort: 0,
//       stat: {
//         name: "attack",
//         url: "https://pokeapi.co/api/v2/stat/2/",
//       },
//     },
//     {
//       base_stat: 49,
//       effort: 0,
//       stat: {
//         name: "defense",
//         url: "https://pokeapi.co/api/v2/stat/3/",
//       },
//     },
//     {
//       base_stat: 65,
//       effort: 1,
//       stat: {
//         name: "special-attack",
//         url: "https://pokeapi.co/api/v2/stat/4/",
//       },
//     },
//     {
//       base_stat: 65,
//       effort: 0,
//       stat: {
//         name: "special-defense",
//         url: "https://pokeapi.co/api/v2/stat/5/",
//       },
//     },
//     {
//       base_stat: 45,
//       effort: 0,
//       stat: {
//         name: "speed",
//         url: "https://pokeapi.co/api/v2/stat/6/",
//       },
//     },
//   ],
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: "grass",
//         url: "https://pokeapi.co/api/v2/type/12/",
//       },
//     },
//     {
//       slot: 2,
//       type: {
//         name: "poison",
//         url: "https://pokeapi.co/api/v2/type/4/",
//       },
//     },
//   ],
//   weight: 69,
// };

const mockPokemonSearch = {
  name: "bulbasaur",
  sprites: {
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
    },
  },
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  abilities: [
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
    },
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
    },
  ],
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "hp", url: "https://fakeurl.com" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "attack", url: "https://fakeurl.com" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "defense", url: "https://fakeurl.com" },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: { name: "special-attack", url: "https://fakeurl.com" },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: { name: "special-defense", url: "https://fakeurl.com" },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "speed", url: "https://fakeurl.com" },
    },
  ],
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
};

const mockAbility = {
  effect_changes: [],
  effect_entries: [
    {
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
      language: {
        name: "en",
        url: "https://pokeapi.co/api/v2/language/9/",
      },
      short_effect:
        "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
    },
    {
      effect:
        "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
      language: {
        name: "de",
        url: "https://pokeapi.co/api/v2/language/6/",
      },
      short_effect:
        "Erhöht den Schaden von grass Attacken um 50% wenn nur noch 1/3 der maximalen hp oder weniger übrig sind.",
    },
  ],

  id: 65,
  is_main_series: true,
  name: "overgrow",
};

const mockEffect = {
  damage_relations: {
    double_damage_from: [
      {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
      {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
      },
      {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
      },
      {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/",
      },
    ],
    double_damage_to: [
      {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
      },
      {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
      },
      {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
      },
    ],
    half_damage_from: [
      {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
      },
      {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
      },
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
      {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
      },
    ],
    half_damage_to: [
      {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
      {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
      },
      {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
      },
      {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
      },
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
      {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/",
      },
    ],
    no_damage_from: [],
    no_damage_to: [],
  },
  name: "grass",
};

module.exports.mockEffect = mockEffect;
module.exports.mockAbility = mockAbility;
module.exports.mockPokemonSearch = mockPokemonSearch;
module.exports.mockPokemon = mockPokemon;
module.exports.mockPokemonTypes = mockPokemonTypes;
module.exports.mockTypes = mockTypes;
