const VILLAGERS = [
  {
    "name": "Adeline",
    "loved": [
      "Coffee",
      "Gazpacho",
      "Lemon Pie",
      "Middlemist",
      "Mistril Ingot",
      "Peaches and Cream",
      "Perfect Pink Diamond",
      "Plum Blossom",
      "Pumpkin Pie",
      "Cup of Tea"
    ],
    "liked": [
      "Candied Lemon Peel",
      "Ore Diamond",
      "Heather",
      "Lemon",
      "Sour Lemon Cake",
      "Lemonade",
      "Ore Mistril",
      "Paper",
      "Peach",
      "Pineshroom Toast",
      "Ore Pink Diamond",
      "Pumpkin Stew",
      "Red Wine",
      "Snapdragon",
      "Spicy Cheddar Biscuit",
      "Tulip",
      "Vegetable Soup",
      "White Wine",
      "Wildberry Pie",
      "Wildberry Scone"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Mushroomy",
      "Weird Gift"
    ],
    "hated": [
      "Morel Mushroom"
    ]
  },
  {
    "name": "Balor",
    "loved": [
      "Alda Gem Bracelet",
      "Apple Honey Curry",
      "Chili Coconut Curry",
      "Deluxe Curry",
      "Family Crest Pendant",
      "Perfect Diamond",
      "Perfect Emerald",
      "Perfect Pink Diamond",
      "Perfect Ruby",
      "Perfect Sapphire"
    ],
    "liked": [
      "Cauliflower Curry",
      "Chickpea Curry",
      "Crystal Rose",
      "Ore Diamond",
      "Ore Emerald",
      "Fog Orchid",
      "Frost Lily",
      "Gold Ingot",
      "Ore Gold",
      "Golden Cookies",
      "Golden Cheesecake",
      "Jasmine",
      "Perfect Gold Ore",
      "Ore Pink Diamond",
      "Rose",
      "Ore Ruby",
      "Rusted Treasure Chest",
      "Ore Sapphire",
      "Sapphire Betta",
      "Snowdrop Anemone"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Ant"
    ]
  },
  {
    "name": "Caldarus",
    "loved": [
      "Apple Honey Curry",
      "Fried Rice",
      "Harvest Plate",
      "Mont Blanc",
      "Seafood Boil",
      "Seafood Snow Pea Noodles",
      "Spring Galette",
      "Statuette of Caldarus",
      "Sushi Platter",
      "Veggie Sub Sandwich"
    ],
    "liked": [
      "Beet Soup",
      "Breath of Fire",
      "Chili Coconut Curry",
      "Caldosian Chocolate Cake",
      "Crab Cakes",
      "Fish Tacos",
      "Golden Cheesecake",
      "Golden Cookies",
      "Ice Cream Sundae",
      "Incredibly Hot Pot",
      "Lobster Roll",
      "Marigold",
      "Mushroom Steak Dinner",
      "Perch Risotto",
      "Spirit Mushroom Tea",
      "Pumpkin Pie",
      "Sea Bream Rice",
      "Spell Fruit Parfait",
      "Vegetable Pot Pie",
      "Vegetable Quiche"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Dragon Part",
      "Weird Gift"
    ],
    "hated": [
      "Unknown Dragon Statuette"
    ]
  },
  {
    "name": "Celine",
    "loved": [
      "Breath of Fire",
      "Crystal Rose",
      "Essence Blossom",
      "Frost Lily",
      "Hydrangea",
      "Middlemist",
      "Plum Blossom",
      "Rose",
      "Snowdrop Anemone",
      "Temple Flower"
    ],
    "liked": [
      "Catmint",
      "Celosia",
      "Chrysanthemum",
      "Cosmos",
      "Crocus",
      "Daffodil",
      "Daisy",
      "Dandelion",
      "Heather",
      "Iris",
      "Jasmine",
      "Lilac",
      "Marigold",
      "Poinsettia",
      "Rose Tea",
      "Snapdragon",
      "Spring Salad",
      "Sunflower",
      "Tulip",
      "Viola"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Caterpillar"
    ]
  },
  {
    "name": "Darcy",
    "loved": [
      "Chocolate",
      "Coconut Milk",
      "Crystal Berries",
      "Golden Cheesecake",
      "Golden Cookies",
      "Golden Egg",
      "Golden Cow Milk",
      "Cow Milk",
      "Spell Fruit",
      "Sugar"
    ],
    "liked": [
      "Apple",
      "Blackberry",
      "Blueberry",
      "Cherry",
      "Coconut",
      "Cranberry",
      "Moon Fruit",
      "Egg",
      "Flour",
      "Glowberry",
      "Lemon",
      "Orange",
      "Peach",
      "Pear",
      "Pomegranate",
      "Strawberry",
      "Tea",
      "Wild Berries",
      "Wild Grapes",
      "Wintergreen Berry"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Ant"
    ]
  },
  {
    "name": "Dell",
    "loved": [
      "Alda Bronze Sword",
      "Aldarian Sword",
      "Apple Juice",
      "Bullfrog",
      "Caldosian Sword",
      "Chocolate",
      "Golden Cookies",
      "Hermit Crab",
      "Ice Cream Sundae",
      "Jam Sandwich"
    ],
    "liked": [
      "Apple",
      "Basic Wood",
      "Blackberry",
      "Caramel Candy",
      "Cattail",
      "Clay",
      "Frog",
      "Glowberry Cookies",
      "Grape Juice",
      "Grilled Cheese",
      "Hot Cocoa",
      "Sour Lemon Cake",
      "Lemonade",
      "Lightning Dragonfly",
      "Monster Cookie",
      "Pudding",
      "Snail",
      "Ore Stone",
      "Trail Mix",
      "Turtle"
    ],
    "disliked": [
      "Junk",
      "Weird Gift",
      "Caffeine",
      "Alcohol"
    ],
    "hated": [
      "Broccoli"
    ]
  },
  {
    "name": "Dozy",
    "loved": [
      "Basic Wood",
      "Hard Boiled Egg",
      "Catfish",
      "Crystalline Cricket",
      "Golden Duck Egg",
      "Golden Egg",
      "Hard Wood",
      "Dog Treat",
      "Petrified Wood",
      "Tiny Dinosaur Skeleton"
    ],
    "liked": [
      "Butterfly",
      "Carrot",
      "Cicada",
      "Cod",
      "Cricket",
      "Duck Egg",
      "Egg",
      "Firefly",
      "Fuzzy Moth",
      "Grasshopper",
      "Mackerel",
      "Monster Shell",
      "Monster Whisker",
      "Pumpkin",
      "Red Snapper",
      "Rockroot",
      "Salmon",
      "Sardine",
      "Sod",
      "Tuna"
    ],
    "disliked": [
      "Junk",
      "Citrus",
      "Choco",
      "Caffeine",
      "Alcohol",
      "Weird Gift"
    ],
    "hated": [
      "Chili Pepper"
    ]
  },
  {
    "name": "Eiland",
    "loved": [
      "Caldosian Chocolate Cake",
      "Coconut Cream Pie",
      "Glowberry Cookies",
      "Golden Cheesecake",
      "Golden Cookies",
      "Ice Cream Sundae",
      "Mont Blanc",
      "Pumpkin Pie",
      "Spell Fruit Parfait",
      "Strawberry Shortcake"
    ],
    "liked": [
      "Apple Pie",
      "Berries and Cream",
      "Candied Lemon Peel",
      "Candied Strawberries",
      "Caramelized Moon Fruit",
      "Caramel Candy",
      "Cherry Cobbler",
      "Cherry Tart",
      "Chocolate",
      "Crystal Berry Pie",
      "Sour Lemon Cake",
      "Lemon Pie",
      "Peaches and Cream",
      "Pomegranate Sorbet",
      "Pudding",
      "Roasted Rice Tea",
      "Strawberries and Cream",
      "Sweet Sesame Balls",
      "Wildberry Pie",
      "Wintergreen Ice Cream"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Frog"
    ]
  },
  {
    "name": "Elsie",
    "loved": [
      "Alda Feather Pendant",
      "Cranberry Orange Scone",
      "Crystal Rose",
      "Jasmine Tea",
      "Mont Blanc",
      "Paper",
      "Perfect Diamond",
      "Poached Pear",
      "Rose",
      "Wildberry Scone"
    ],
    "liked": [
      "Blackberry Jam",
      "Blueberry Jam",
      "Cherry Tart",
      "Chrysanthemum",
      "Cosmos",
      "Crystal Berry Pie",
      "Ore Diamond",
      "Iris",
      "Jasmine",
      "Lilac",
      "Marmalade",
      "Moon Fruit Cake",
      "Pomegranate Sorbet",
      "Quiche",
      "Red Wine",
      "Rosehip Jam",
      "Rose Hip",
      "Tulip",
      "White Wine",
      "Wild Berry Jam"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Praying Mantis"
    ]
  },
  {
    "name": "Errol",
    "loved": [
      "Baked Sweetroot",
      "Braised Burdock",
      "Clam Chowder",
      "Fish Skewer",
      "Miners Helmet",
      "Miners Mushroom Stew",
      "Pan Fried Bream",
      "Perch Risotto",
      "Shard Mass",
      "White Wine"
    ],
    "liked": [
      "Apple",
      "Beer",
      "Breaded Catfish",
      "Canned Sardines",
      "Ore Copper",
      "Fish Stew",
      "Ore Gold",
      "Hot Toddy",
      "Ore Iron",
      "Ore Mistril",
      "Latte",
      "Mocha",
      "Pear",
      "Peat",
      "Pomegranate",
      "Red Wine",
      "Ore Silver",
      "Sweetroot",
      "Upper Mines Mushroom",
      "Wintergreen Ice Cream"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Hard Boiled Egg"
    ]
  },
  {
    "name": "Hayden",
    "loved": [
      "Golden Butter",
      "Golden Cheese",
      "Golden Duck Egg",
      "Golden Duck Mayonnaise",
      "Golden Egg",
      "Golden Mayonnaise",
      "Golden Cow Milk",
      "Pumpkin Pie",
      "Stone Horse",
      "Vegetable Quiche"
    ],
    "liked": [
      "Apple Pie",
      "Butter",
      "Cheese",
      "Coconut Cream Pie",
      "Coffee",
      "Crystal Berry Pie",
      "Duck Egg",
      "Duck Mayonnaise",
      "Egg",
      "Lemon Pie",
      "Loaded Baked Potato",
      "Mayonnaise",
      "Cow Milk",
      "Mushroom Steak Dinner",
      "Pumpkin Stew",
      "Quiche",
      "Sweet Potato Pie",
      "Cup of Tea",
      "Vegetable Pot Pie",
      "Wildberry Pie"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Fishy",
      "Weird Gift"
    ],
    "hated": [
      "Sushi Platter"
    ]
  },
  {
    "name": "Hemlock",
    "loved": [
      "Beer",
      "Chili Coconut Curry",
      "Crayfish Etouffee",
      "Crispy Fried Earthshroom",
      "Caldosian Drinking Horn",
      "Hot Toddy",
      "Incredibly Hot Pot",
      "White Wine",
      "Wild Grapes",
      "Spicy Corn"
    ],
    "liked": [
      "Basil",
      "Chili Pepper",
      "Coffee",
      "Crunchy Chickpeas",
      "Dried Squid",
      "Honey",
      "Lemon",
      "Roasted Chestnuts",
      "Rock Salt",
      "Sesame Broccoli",
      "Spicy Cheddar Biscuit",
      "Grape Juice",
      "Spicy Crab Sushi",
      "Spicy Water Chestnuts",
      "Summer Salad",
      "Tea",
      "Thyme",
      "Toasted Sunflower Seeds",
      "Trail Mix",
      "Water Chestnut Fritters"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Newt"
    ]
  },
  {
    "name": "Henrietta",
    "loved": [
      "Berry Bowl",
      "Animal Currency",
      "Corn",
      "Glowberry",
      "Grilled Corn",
      "Strawberry",
      "Watermelon",
      "Quality Small Animal Feed",
      "Deluxe Small Animal Feed",
      "Ultimate Small Animal Feed"
    ],
    "liked": [
      "Apple",
      "Blackberry",
      "Blueberry",
      "Broccoli",
      "Cherry",
      "Chestnut",
      "Coconut",
      "Cranberry",
      "Cucumber",
      "Grass Seed",
      "Moon Fruit",
      "Orange",
      "Peach",
      "Pear",
      "Peas",
      "Pomegranate",
      "Pumpkin",
      "Wild Berries",
      "Wild Grapes",
      "Wintergreen Berry"
    ],
    "disliked": [
      "Junk",
      "Citrus",
      "Choco",
      "Caffeine",
      "Alcohol",
      "Weird Gift"
    ],
    "hated": [
      "Garlic"
    ]
  },
  {
    "name": "Holt",
    "loved": [
      "Flour",
      "Gazpacho",
      "Hard Wood",
      "Loaded Baked Potato",
      "Baked Potato",
      "Stone Horse",
      "Narrows Moss",
      "Coffee",
      "Watermelon",
      "Wheat"
    ],
    "liked": [
      "Potato",
      "Beet",
      "Broccoli",
      "Cabbage",
      "Carrot",
      "Cauliflower",
      "Chili Pepper",
      "Corn",
      "Cranberry",
      "Cucumber",
      "Daikon Radish",
      "Onion",
      "Peas",
      "Pumpkin",
      "Rice Stalk",
      "Snow Peas",
      "Strawberry",
      "Sugar Cane",
      "Sweet Potato",
      "Turnip"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Puddle Spider"
    ]
  },
  {
    "name": "Josephine",
    "loved": [
      "Jasmine Tea",
      "Green Tea",
      "Lavender Tea",
      "Quiche",
      "Roasted Rice Tea",
      "Rose Tea",
      "Cup of Tea",
      "Incredibly Hot Pot",
      "Chili Coconut Curry",
      "Crayfish Etouffee"
    ],
    "liked": [
      "Breath of Fire",
      "Chili Pepper",
      "Curry Powder",
      "Essence Blossom",
      "Flour",
      "Honey",
      "Jam Sandwich",
      "Jasmine",
      "Oil",
      "Rice",
      "Rose",
      "Soy Sauce",
      "Spicy Cheddar Biscuit",
      "Spicy Corn",
      "Spicy Crab Sushi",
      "Spicy Water Chestnuts",
      "Sugar",
      "Sunflower",
      "Tea",
      "Wild Berry Jam"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Worm"
    ]
  },
  {
    "name": "Juniper",
    "loved": [
      "Ancient Royal Scepter",
      "Black Tablet",
      "Crystal Rose",
      "Fish Tacos",
      "Golden Cookies",
      "Hardened Essence",
      "Moon Fruit Cake",
      "Mushroom Brew",
      "Pizza",
      "Spell Fruit Parfait"
    ],
    "liked": [
      "Crunchy Chickpeas",
      "Crystal",
      "Fog Orchid",
      "Frog",
      "Latte",
      "Middlemist",
      "Morel Mushroom",
      "Nettle",
      "Newt",
      "Night Queen",
      "Essence Blossom",
      "Poinsettia",
      "Red Toadstool",
      "Red Wine",
      "Monster Powder",
      "Shadow Flower",
      "Spell Fruit",
      "Toasted Sunflower Seeds",
      "Water Chestnut Fritters",
      "White Wine"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Sod"
    ]
  },
  {
    "name": "Landen",
    "loved": [
      "Coconut Cream Pie",
      "Golden Bristle",
      "Golden Bull Horn",
      "Golden Cheesecake",
      "Golden Cookies",
      "Golden Duck Feather",
      "Golden Horse Hair",
      "Golden Feather",
      "Hard Wood",
      "Shard Mass"
    ],
    "liked": [
      "Basic Wood",
      "Bristle",
      "Bull Horn",
      "Canned Sardines",
      "Clay",
      "Coconut",
      "Coconut Milk",
      "Crystal",
      "Deep Sea Soup",
      "Duck Feather",
      "Glass",
      "Horse Hair",
      "Obsidian",
      "Paper",
      "Feather",
      "Ore Stone",
      "Shards",
      "Tomato Soup",
      "Vegetable Pot Pie",
      "Vegetable Soup"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Roly Poly"
    ]
  },
  {
    "name": "Louis",
    "loved": [
      "Golden Alpaca Wool",
      "Golden Bristle",
      "Golden Duck Feather",
      "Golden Feather",
      "Golden Horse Hair",
      "Golden Rabbit Wool",
      "Golden Sheep Wool",
      "Middlemist",
      "Red Wine",
      "White Wine"
    ],
    "liked": [
      "Alpaca Wool",
      "Breath of Fire",
      "Bristle",
      "Cattail",
      "Celosia",
      "Crystal",
      "Crystal Rose",
      "Duck Feather",
      "Essence Blossom",
      "Feather",
      "Cup of Tea",
      "Frost Lily",
      "Horse Hair",
      "Lilac",
      "Marigold",
      "Rabbit Wool",
      "Shadow Flower",
      "Snapdragon",
      "Viola",
      "Sheep Wool"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Fuzzy Moth"
    ]
  },
  {
    "name": "Luc",
    "loved": [
      "Amber Trapped Insect",
      "Bumblebee",
      "Copper Beetle",
      "Fairy Bee",
      "Grilled Cheese",
      "Jewel Beetle",
      "Rhinoceros Beetle",
      "Roly Poly",
      "Sea Scarab",
      "Strobe Firefly"
    ],
    "liked": [
      "Ant",
      "Butterfly",
      "Cave Shrimp",
      "Cheese",
      "Chocolate",
      "Cricket",
      "Fuzzy Moth",
      "Hot Cocoa",
      "Hummingbird Hawk Moth",
      "Inchworm",
      "Jam Sandwich",
      "Mistmoth",
      "Monarch Butterfly",
      "Orchid Mantis",
      "Pond Skater",
      "Praying Mantis",
      "Puddle Spider",
      "River Snail",
      "Snowball Beetle",
      "Worm"
    ],
    "disliked": [
      "Junk",
      "Weird Gift",
      "Caffeine",
      "Alcohol"
    ],
    "hated": [
      "Frog"
    ]
  },
  {
    "name": "Maple",
    "loved": [
      "Ancient Horn Circlet",
      "Berries and Cream",
      "Chocolate",
      "Hot Cocoa",
      "Lemon Pie",
      "Lost Crown of Aldaria",
      "Middlemist",
      "Monarch Butterfly",
      "Mont Blanc",
      "Stone Shell"
    ],
    "liked": [
      "Blackberry",
      "Blue Conch Shell",
      "Cheese",
      "Daisy",
      "Glowberry Cookies",
      "Golden Cookies",
      "Grilled Cheese",
      "Ice Cream Sundae",
      "Jam Sandwich",
      "Pink Scallop Shell",
      "Pomegranate Sorbet",
      "Pudding",
      "Sand Dollar",
      "Spirula Shell",
      "Strawberry Shortcake",
      "Sunflower",
      "Trail Mix",
      "Tulip",
      "Wildberry Pie",
      "Wintergreen Ice Cream"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Caffeine",
      "Alcohol"
    ],
    "hated": [
      "Peat"
    ]
  },
  {
    "name": "March",
    "loved": [
      "Dragon Forged Bracelet",
      "Gold Ingot",
      "Meteorite",
      "Mistril Ingot",
      "Perfect Copper Ore",
      "Perfect Gold Ore",
      "Perfect Iron Ore",
      "Perfect Mistril Ore",
      "Perfect Silver Ore",
      "Sushi Platter"
    ],
    "liked": [
      "Beer",
      "Chocolate",
      "Caldosian Chocolate Cake",
      "Coffee",
      "Copper Ingot",
      "Ore Copper",
      "Ore Gold",
      "Grilled Eel Rice Bowl",
      "Hot Cocoa",
      "Iron Ingot",
      "Ore Iron",
      "Ore Mistril",
      "Mocha",
      "Perch Risotto",
      "Red Snapper Sushi",
      "Sea Bream Rice",
      "Sesame Tuna Bowl",
      "Silver Ingot",
      "Ore Silver",
      "Spicy Crab Sushi"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Archaeology",
      "Flower",
      "Forageable",
      "Weird Gift"
    ],
    "hated": [
      "Redhead Worm"
    ]
  },
  {
    "name": "Merri",
    "loved": [
      "Golden Alpaca Wool",
      "Golden Bristle",
      "Golden Bull Horn",
      "Golden Duck Feather",
      "Golden Horse Hair",
      "Golden Rabbit Wool",
      "Golden Feather",
      "Golden Sheep Wool",
      "Perfect Diamond",
      "Perfect Pink Diamond"
    ],
    "liked": [
      "Alpaca Wool",
      "Basic Wood",
      "Bristle",
      "Bull Horn",
      "Clay",
      "Coral",
      "Crystal",
      "Ore Diamond",
      "Duck Feather",
      "Glass",
      "Hard Wood",
      "Horse Hair",
      "Latte",
      "Obsidian",
      "Paper",
      "Ore Pink Diamond",
      "Rabbit Wool",
      "Feather",
      "Sheep Wool",
      "Ore Stone"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Snail"
    ]
  },
  {
    "name": "Nora",
    "loved": [
      "Ancient Gold Coin",
      "Cherry Cobbler",
      "Fried Rice",
      "Onion Soup",
      "Peaches and Cream",
      "Pumpkin Stew",
      "Roasted Cauliflower",
      "Roasted Sweet Potato",
      "Sauteed Snow Peas",
      "Toasted Sunflower Seeds"
    ],
    "liked": [
      "Baked Potato",
      "Beet Salad",
      "Braised Burdock",
      "Braised Carrots",
      "Butter",
      "Cabbage Slaw",
      "Candied Lemon Peel",
      "Coconut Milk",
      "Coffee",
      "Cucumber Salad",
      "Grilled Corn",
      "Latte",
      "Poached Pear",
      "Salted Watermelon",
      "Sesame Broccoli",
      "Simmered Daikon",
      "Sliced Turnip",
      "Spicy Water Chestnuts",
      "Strawberries and Cream",
      "Tomato Soup"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Narrows Moss"
    ]
  },
  {
    "name": "Olric",
    "loved": [
      "Perfect Copper Ore",
      "Perfect Diamond",
      "Perfect Emerald",
      "Perfect Gold Ore",
      "Perfect Iron Ore",
      "Perfect Mistril Ore",
      "Perfect Pink Diamond",
      "Perfect Ruby",
      "Perfect Sapphire",
      "Perfect Silver Ore"
    ],
    "liked": [
      "Ore Copper",
      "Crystal",
      "Ore Diamond",
      "Ore Emerald",
      "Ore Gold",
      "Hard Boiled Egg",
      "Ore Iron",
      "Miners Mushroom Stew",
      "Ore Mistril",
      "Obsidian",
      "Ore Pink Diamond",
      "Rock With a Hole",
      "Rockroot",
      "Ore Ruby",
      "Ore Sapphire",
      "Ore Silver",
      "Ore Stone",
      "Stone Horse",
      "Rock Statue",
      "Weightless Stone"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Rockbiter"
    ]
  },
  {
    "name": "Reina",
    "loved": [
      "Apple Honey Curry",
      "Breaded Catfish",
      "Cabbage Slaw",
      "Ice Cream Sundae",
      "Incredibly Hot Pot",
      "Rosemary Garlic Noodles",
      "Seafood Boil",
      "Seafood Snow Pea Noodles",
      "Spell Fruit Parfait",
      "Sushi Platter"
    ],
    "liked": [
      "Cauliflower Curry",
      "Cheese",
      "Cod With Thyme",
      "Coffee",
      "Crystal Berry Pie",
      "Daffodil",
      "Deep Sea Soup",
      "Flour",
      "Garlic",
      "Garlic Bread",
      "Grilled Cheese",
      "Iced Coffee",
      "Miners Mushroom Stew",
      "Pizza",
      "Rice",
      "Spicy Cheddar Biscuit",
      "Sugar",
      "Turnip and Potato Gratin",
      "Upper Mines Mushroom",
      "Wildberry Pie"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Tunnel Millipede"
    ]
  },
  {
    "name": "Ryis",
    "loved": [
      "Golden Bristle",
      "Golden Bull Horn",
      "Golden Cheesecake",
      "Golden Cookies",
      "Golden Duck Feather",
      "Golden Feather",
      "Golden Horse Hair",
      "Hard Wood",
      "Lobster Roll",
      "Veggie Sub Sandwich"
    ],
    "liked": [
      "Basic Wood",
      "Beer",
      "Bread",
      "Bristle",
      "Bull Horn",
      "Clay",
      "Cranberry Orange Scone",
      "Crystal",
      "Duck Feather",
      "Feather",
      "Garlic Bread",
      "Glass",
      "Glowberry Cookies",
      "Horse Hair",
      "Iced Coffee",
      "Lilac",
      "Obsidian",
      "Paper",
      "Ore Stone",
      "Strawberry Shortcake"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Pond Skater"
    ]
  },
  {
    "name": "Seridia",
    "loved": [
      "Dragon Forged Fang",
      "Dragon Forged Core",
      "Dragon Forged Horn",
      "Dragon Forged Powder",
      "Dragon Pact Tablet",
      "Monster Mash",
      "Perfect Mistril Ore",
      "Spell Fruit Parfait",
      "Hardened Essence",
      "Unknown Dragon Statuette"
    ],
    "liked": [
      "Void Powder",
      "Void Pearl",
      "Void Stone",
      "Void Herb",
      "Essence Blossom",
      "Monster Cookie",
      "Monster Horn",
      "Monster Powder",
      "Monster Shell",
      "Monster Fang",
      "Monster Whisker",
      "Monster Block",
      "Monster Wing",
      "Night Queen",
      "Ore Pink Diamond",
      "Plum Blossom",
      "Ancient Royal Scepter",
      "Dragon Forged Bracelet",
      "Purple Mushroom",
      "Red Toadstool"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Dragon Part",
      "Weird Gift"
    ],
    "hated": [
      "Statuette of Caldarus"
    ]
  },
  {
    "name": "Stillwell",
    "loved": [
      "Fog Orchid",
      "Black Tablet",
      "Weightless Stone",
      "Red Wine"
    ],
    "liked": [
      "Caramelized Moon Fruit",
      "Caramel Candy",
      "Cherry Cobbler",
      "Cherry Tart",
      "Chocolate",
      "Coffee",
      "Crystal",
      "Crystal Berries",
      "Crystal Rose",
      "Crystal Wing Moth",
      "Cup of Tea",
      "Glass",
      "Middlemist",
      "Muttering Cube",
      "Night Queen",
      "Red Toadstool",
      "Shadow Flower",
      "Shardfin",
      "Strawberry Shortcake",
      "Wintergreen Ice Cream"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Sunflower"
    ]
  },
  {
    "name": "Taliferro",
    "loved": [
      "Apple Honey Curry",
      "Beet Soup",
      "Fried Rice",
      "Harvest Plate",
      "Mont Blanc",
      "Seafood Boil",
      "Seafood Snow Pea Noodles",
      "Spell Fruit Parfait",
      "Spring Galette",
      "Sushi Platter"
    ],
    "liked": [
      "Chili Coconut Curry",
      "Coconut Cream Pie",
      "Crab Cakes",
      "Fish Tacos",
      "Glowberry Cookies",
      "Golden Cheesecake",
      "Golden Cookies",
      "Herb Salad",
      "Ice Cream Sundae",
      "Incredibly Hot Pot",
      "Lobster Roll",
      "Mushroom Steak Dinner",
      "Perch Risotto",
      "Pumpkin Pie",
      "Red Wine",
      "Sea Bream Rice",
      "Vegetable Pot Pie",
      "Vegetable Quiche",
      "Veggie Sub Sandwich",
      "White Wine"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Monster Mash"
    ]
  },
  {
    "name": "Terithia",
    "loved": [
      "Cod With Thyme",
      "Fish Stew",
      "Giant Fish Scale",
      "Lobster Roll",
      "Perch Risotto",
      "Rubber Fish",
      "Sea Bream Rice",
      "Seafood Boil",
      "Seafood Snow Pea Noodles",
      "Sushi Platter"
    ],
    "liked": [
      "Breaded Catfish",
      "Canned Sardines",
      "Clam Chowder",
      "Crayfish Etouffee",
      "Deep Sea Soup",
      "Dried Squid",
      "Fish Skewer",
      "Fish Tacos",
      "Grilled Eel Rice Bowl",
      "Horseradish Salmon",
      "Mackerel Sashimi",
      "Pan Fried Bream",
      "Pan Fried Salmon",
      "Pan Fried Snapper",
      "Red Snapper Sushi",
      "Salmon Sashimi",
      "Sesame Tuna Bowl",
      "Smoked Trout Soup",
      "Spicy Crab Sushi",
      "Tuna Sashimi"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Fiber"
    ]
  },
  {
    "name": "Valen",
    "loved": [
      "Beet",
      "Beet Salad",
      "Beet Soup",
      "Deep Sea Soup",
      "Dragon Scale",
      "Harvest Plate",
      "Rosemary Garlic Noodles",
      "Summer Salad",
      "Sushi Platter",
      "Vegetable Soup"
    ],
    "liked": [
      "Coffee",
      "Cucumber",
      "Cucumber Salad",
      "Dandelion",
      "Garlic",
      "Green Tea",
      "Herb Salad",
      "Honey",
      "Nettle",
      "Pan Fried Salmon",
      "Red Wine",
      "Rose Hip",
      "Rosehip Jam",
      "Rosemary",
      "Seaweed",
      "Seaweed Salad",
      "Spring Salad",
      "Sweetroot",
      "Underseaweed",
      "White Wine"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Red Toadstool"
    ]
  },
  {
    "name": "Vera",
    "loved": [
      "Beet Soup",
      "Chili Coconut Curry",
      "Gazpacho",
      "Harvest Plate",
      "Mushroom Steak Dinner",
      "Pomegranate Sorbet",
      "Summer Salad",
      "Sweet Potato Pie",
      "Vegetable Pot Pie",
      "Winter Stew"
    ],
    "liked": [
      "Beet Salad",
      "Braised Burdock",
      "Cauliflower Curry",
      "Chickpea Curry",
      "Coconut Milk",
      "Cranberry Juice",
      "Crispy Fried Earthshroom",
      "Cucumber Salad",
      "Orange Juice",
      "Pomegranate",
      "Pomegranate Juice",
      "Roasted Cauliflower",
      "Salted Watermelon",
      "Sauteed Snow Peas",
      "Seaweed Salad",
      "Sesame Broccoli",
      "Simmered Daikon",
      "Steamed Broccoli",
      "Tide Salad",
      "Turnip and Cabbage Salad"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Fishable",
      "Animal Product",
      "Weird Gift"
    ],
    "hated": [
      "Clam"
    ]
  },
  {
    "name": "Wheedle",
    "loved": [
      "Ancient Gold Coin",
      "Coin Lump",
      "Fiber",
      "Perfect Diamond",
      "Perfect Emerald",
      "Perfect Gold Ore",
      "Perfect Pink Diamond",
      "Perfect Ruby",
      "Perfect Sapphire",
      "Ore Pink Diamond"
    ],
    "liked": [
      "Ore Diamond",
      "Ore Emerald",
      "Gold Ingot",
      "Ore Gold",
      "Golden Alpaca Wool",
      "Golden Bristle",
      "Golden Bull Horn",
      "Golden Cheesecake",
      "Golden Cookies",
      "Golden Duck Egg",
      "Golden Duck Feather",
      "Golden Egg",
      "Golden Feather",
      "Golden Horse Hair",
      "Golden Rabbit Wool",
      "Golden Sheep Wool",
      "Dragon Forged Bracelet",
      "Ore Ruby",
      "Rusted Treasure Chest",
      "Ore Sapphire"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Criminal Confession"
    ]
  },
  {
    "name": "Zorel",
    "loved": [
      "Middlemist",
      "Sunflower",
      "Heather",
      "Morel Mushroom"
    ],
    "liked": [
      "Mushroom Rice",
      "Red Toadstool",
      "Upper Mines Mushroom",
      "Glowing Mushroom",
      "Miners Mushroom Stew",
      "Wild Mushroom",
      "Dandelion",
      "Fiddlehead",
      "Nettle",
      "Wild Leek",
      "Fennel",
      "Sage"
    ],
    "disliked": [
      "Junk",
      "Bugs",
      "Weird Gift"
    ],
    "hated": [
      "Cicada"
    ]
  },
  {
    "name": "Priestess",
    "loved": [],
    "liked": [],
    "disliked": [],
    "hated": []
  }
];

const SOURCE_URL = "https://beebom.com/fields-of-mistria-gift-guide/";
const SOURCE_DATE = "2026-11-22";

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VILLAGERS, SOURCE_URL, SOURCE_DATE };
}
