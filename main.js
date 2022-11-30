allCards = [];
class Card
{
    constructor(name, elixir, type, rarity)
    {
        this.name = name;
        this.elixir = elixir;
        this.type = type;
        this.rarity = rarity;
    }
}
allCards.push(skeletons = new Card("skeletons", 1, "cycle", "common"));
allCards.push(iceSpirit = new Card("iceSpirit", 1, "cycle", "common"));
allCards.push(healSpirit = new Card("healSpirit", 1, "cycle", "common"));
allCards.push(fireSpirit = new Card("fireSpirit", 1, "cycle", "common"));
allCards.push(electroSpirit = new Card("electroSpirit", 1, "cycle", "common"));
allCards.push(goblins = new Card("goblins", 2, "cycle", "common"));
allCards.push(spearGoblins = new Card("spearGoblins", 2, "cycle", "common"));
allCards.push(bats = new Card("bats", 2, "cycle", "common"));
allCards.push(wallBreakers = new Card("wallBreakers", 2, "cycle", "epic"));
allCards.push(iceGolem = new Card("iceGolem", 2, "cycle", "rare"));
allCards.push(bomber = new Card("bomber", 2, "cycle", "common"));

allCards.push(lightning = new Card("lightning", 6, "spell", "epic"));
allCards.push(rocket = new Card("rocket", 6, "spell", "rare"));
allCards.push(fireball = new Card("fireball", 4, "spell", "rare"));
allCards.push(poison = new Card("poison", 4, "spell", "epic"));
allCards.push(freeze = new Card("freeze", 4, "spell", "epic"));
allCards.push(arrows = new Card("arrows", 3, "spell", "common"));
allCards.push(royalDelivery = new Card("royalDelivery", 3, "spell", "common"));
allCards.push(tornado = new Card("tornado", 3, "spell", "epic"));
allCards.push(clone = new Card("clone", 3, "spell", "epic"));
allCards.push(earthquake = new Card("earthquake", 3, "spell", "rare"));
allCards.push(zap = new Card("zap", 2, "spell", "common"));
allCards.push(giantSnowball = new Card("giantSnowball", 2, "spell", "common"));
allCards.push(theLog = new Card("theLog", 2, "spell", "legendary"));
allCards.push(barbarianBarrel = new Card("barbarianBarrel", 2, "spell", "epic"));
allCards.push(rage = new Card("rage", 2, "spell", "epic"));
allCards.push(mirror = new Card("mirror", 1, "spell", "epic"));

allCards.push(xbow = new Card("xbow", 6, "building", "epic"));
allCards.push(barbarianHut = new Card("barbarianHut", 7, "building", "rare"));
allCards.push(elixirCollector = new Card("elixirCollector", 6, "building", "rare"));
allCards.push(goblinHut = new Card("goblinHut", 5, "building", "rare"));
allCards.push(infernoTower = new Card("infernoTower", 5, "building", "rare"));
allCards.push(mortar = new Card("mortar", 4, "building", "common"));
allCards.push(tesla = new Card("tesla", 4, "building", "common"));
allCards.push(bombTower = new Card("bombTower", 4, "building", "rare"));
allCards.push(furnace = new Card("furnace", 4, "building", "rare"));
allCards.push(goblinCage = new Card("goblinCage", 4, "building", "rare"));
allCards.push(tombstone = new Card("tombstone", 3, "building", "rare"));
allCards.push(cannon = new Card("cannon", 3, "building", "common"));

allCards.push(witch = new Card("witch", 5, "support", "epic"));
allCards.push(executioner = new Card("executioner", 5, "support", "epic"));
allCards.push(wizard = new Card("wizard", 5, "support", "rare"));
allCards.push(babyDragon = new Card("babyDragon", 4, "support", "epic"));
allCards.push(hunter = new Card("hunter", 4, "support", "epic"));
allCards.push(electroWizard = new Card("electroWizard", 4, "support", "legendary"));
allCards.push(nightWitch = new Card("nightWitch", 4, "support", "legendary"));
allCards.push(magicArcher = new Card("magicArcher", 4, "support", "legendary"));
allCards.push(motherWitch = new Card("motherWitch", 4, "support", "legendary"));
allCards.push(pheonix = new Card("phoenix", 4, "support", "legendary"));
allCards.push(musketeer = new Card("musketeer", 4, "support", "rare"));
allCards.push(zappies = new Card("zappies", 4, "support", "rare"));
allCards.push(flyingMachine = new Card("flyingMachine", 4, "support", "rare"));
allCards.push(firecracker = new Card("firecracker", 3, "support", "common"));
allCards.push(princess = new Card("princess", 3, "support", "legendary"));
allCards.push(archers = new Card("archers", 3, "support", "common"));
allCards.push(iceWizard = new Card("iceWizard", 3, "support", "legendary"));
allCards.push(dartGoblin = new Card("dartGoblin", 3, "support", "rare"));
allCards.push(skeletonDragons = new Card("skeletonDragons", 4, "support", "common"));

allCards.push(golem = new Card("golem", 8, "wincon", "epic"));
allCards.push(electroGiant = new Card("electroGiant", 7, "wincon", "epic"));
allCards.push(pekka = new Card("pekka", 7, "wincon", "epic"));
allCards.push(lavahound = new Card("lavaHound", 7, "wincon", "legendary"));
allCards.push(megaKnight = new Card("megaKnight", 7, "wincon", "legendary"));
allCards.push(goblinBarrel = new Card("goblinBarrel", 3, "wincon", "epic"));
allCards.push(royalGiant = new Card("royalGiant", 6, "wincon", "common"));
allCards.push(goblinGiant = new Card("goblinGiant", 6, "wincon", "epic"));
allCards.push(giantSkeleton = new Card("giantSkeleton", 6, "wincon", "epic"));
allCards.push(balloon = new Card("balloon", 5, "wincon", "epic"));
allCards.push(golem = new Card("golem", 8, "wincon", "epic"));
allCards.push(ramRider = new Card("ramRider", 5, "wincon", "legendary"));
allCards.push(giant = new Card("giant", 5, "wincon", "rare"));
allCards.push(royalHogs = new Card("royalHogs", 5, "wincon", "rare"));
allCards.push(graveyard = new Card("graveyard", 5, "wincon", "legendary"));
allCards.push(goblinDrill = new Card("goblinDrill", 4, "wincon", "epic"));
allCards.push(hogRider = new Card("hogRider", 4, "wincon", "rare"));
allCards.push(battleRam = new Card("battleRam", 4, "wincon", "rare"));
allCards.push(elixirGolem = new Card("elixirGolem", 3, "wincon", "rare"));

allCards.push(eliteBarbarians = new Card("eliteBarbarians", 6, "miniTank", "common"));
allCards.push(prince = new Card("prince", 5, "miniTank", "epic"));
allCards.push(barbarians = new Card("barbarians", 5, "miniTank", "common"));
allCards.push(bowler = new Card("bowler", 5, "miniTank", "epic"));
allCards.push(cannonCart = new Card("cannonCart", 5, "miniTank", "epic"));
allCards.push(darkPrince = new Card("darkPrince", 4, "miniTank", "epic"));
allCards.push(valkyrie = new Card("valkyrie", 4, "miniTank", "rare"));
allCards.push(miniPekka = new Card("miniPekka", 4, "miniTank", "rare"));
allCards.push(battleHealer = new Card("battleHealer", 4, "miniTank", "rare"));
allCards.push(lumberjack = new Card("lumberjack", 4, "miniTank", "legendary"));
allCards.push(knight = new Card("knight", 3, "miniTank", "common"));
allCards.push(miner = new Card("miner", 3, "miniTank", "legendary"));
allCards.push(bandit = new Card("bandit", 3, "miniTank", "legendary"));
allCards.push(royalGhost = new Card("royalGhost", 3, "miniTank", "legendary"));
allCards.push(fisherman = new Card("fisherman", 3, "miniTank", "legendary"));

allCards.push(royalRecruits = new Card("royalRecruits", 7, "random", "common"));
allCards.push(minionHorde = new Card("minionHorde", 5, "random", "common"));
allCards.push(rascals = new Card("rascals", 5, "random", "common"));
allCards.push(sparky = new Card("sparky", 5, "random", "legendary"));
allCards.push(electroDragon = new Card("electroDragon", 5, "random", "epic"));
allCards.push(infernoDragon = new Card("infernoDragon", 4, "random", "legendary"));
allCards.push(skeletonArmy = new Card("skeletonArmy", 3, "random", "common"));
allCards.push(minions = new Card("minions", 3, "random", "common"));
allCards.push(goblinGang = new Card("goblinGang", 3, "random", "common"));
allCards.push(skeletonBarrel = new Card("skeletonBarrel", 3, "random", "common"));
allCards.push(guards = new Card("guards", 3, "random", "epic"));
allCards.push(megaMinion = new Card("megaMinion", 3, "random", "rare"));
allCards.push(threeMusketeers = new Card("threeMusketeers", 9, "random", "rare"));

//there can only be 1 champion in one deck
allCards.push(goldenKnight = new Card("goldenKnight", 4, "champion", "champion"));
allCards.push(skeletonKing = new Card("skeletonKing", 4, "champion", "champion"));
allCards.push(arhcerQueen = new Card("archerQueen", 5, "champion", "champion"));
allCards.push(mightyMiner = new Card("mightyMiner", 4, "champion", "champion"));
allCards.push(monk = new Card("monk", 4, "champion", "champion"));

var cycles = [];
var spells = [];
var buildings = [];
var supports = [];
var wincons = [];
var miniTanks = [];
var randoms = [];
var champions = [];

//put each card into category to pick later
for (let i = 0; i < allCards.length; i++){
    let currentCard = allCards[i];
    if (currentCard instanceof Card){
        if (currentCard.type == "cycle"){
            cycles.push(currentCard);
        }
        else if (currentCard.type == "spell"){
            spells.push(currentCard);
        }
        else if (currentCard.type == "building"){
            buildings.push(currentCard);
        }
        else if (currentCard.type == "support"){
            supports.push(currentCard);
        }
        else if (currentCard.type == "wincon"){
            wincons.push(currentCard);
        }
        else if (currentCard.type == "miniTank"){
            miniTanks.push(currentCard);
        }
        else if (currentCard.type == "random"){
            randoms.push(currentCard);
        }
        else if (currentCard.type == "champion"){
            champions.push(currentCard);
        }
    }
}

//STUFF TO ACTUALLY RUN
var deck = [];
var randCycle;
var randBuilding;
var randMinitank;
var randomR;
var randChamp;
var randSpell;
var randSupport;
var randWincon;
var randSpell2;
var avgElixir;
// let createDeckButton = document.getElementById('deckGenerator');
// createDeckButton.addEventListener('click', CreateDeck());
document.querySelector("button").onclick = function() {
    CreateDeck();
}



function CreateDeck(){
    let totalElixir = 0;
    //first clear any previous deck
    while(deck.length > 0){
        deck.pop();
    }
    //add random cycle card
    randCycle = Math.floor(Math.random() * (cycles.length));
    totalElixir+=(cycles[randCycle]).elixir;
    deck.push(cycles[randCycle]);

    //add random spell
    randSpell = Math.floor(Math.random() * spells.length);
    totalElixir+=(spells[randSpell]).elixir;
    deck.push(spells[randSpell]);

    //add second spell
    randSpell2 = Math.floor(Math.random() * spells.length);
    while (randSpell2 == randSpell){
        randSpell2 = Math.floor(Math.random() * spells.length);
    }
    totalElixir+=(spells[randSpell2]).elixir;
    deck.push(spells[randSpell2]);

    //add random building
    randBuilding = Math.floor(Math.random() * buildings.length);
    totalElixir+=(buildings[randBuilding]).elixir;
    deck.push(buildings[randBuilding]);

    //add random support
    randSupport = Math.floor(Math.random() * supports.length);
    totalElixir+=(supports[randSupport]).elixir;
    deck.push(supports[randSupport]);

    //add random wincon
    randWincon = Math.floor(Math.random() * wincons.length);
    totalElixir+=(wincons[randWincon]).elixir;
    deck.push(wincons[randWincon]);

    //add second wincon
    // randWincon2 = Math.floor(Math.random() * wincons.length);
    // if (randWincon2 == randWincon){
    //     randWincon2 = Math.floor(Math.random() * wincons.length);
    // }
    // deck.push(wincons[randWincon2]);

    //add random minitank
    randMinitank = Math.floor(Math.random() * miniTanks.length);
    totalElixir+=(miniTanks[randMinitank]).elixir;
    deck.push(miniTanks[randMinitank]);

    //add random random or champion
    randomR = Math.floor(Math.random() * (randoms.length + champions.length));
    if (randomR >= randoms.length){
        randomR-=(randoms.length);
        let temp = randomR;
        randomR = champions[temp];
        totalElixir+=(champions[temp]).elixir;
    }
    else{
        let temp = randomR;
        randomR = randoms[temp];
        totalElixir+=(randoms[temp]).elixir;
    }
    deck.push(randomR);

    avgElixir = Math.round(totalElixir/8 * 10)/10;
    for (let i = 0; i < deck.length; i++){
        console.log(i+1);
        var cardd = deck[i];
        console.log(cardd);//test
        if (cardd instanceof Card){
            let cardNumber = 'card' + (Math.floor(i+1)).toString(); //card1
            let cardImage = 'images/' + (cardd.name).toString() + '.png';
            document.getElementById(cardNumber).src = cardImage;
        }
    }
    document.getElementById("elixir").innerHTML = "Average Elixir: " + avgElixir;

    return deck;
}