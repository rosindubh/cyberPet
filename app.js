//phil welsby 18 aug 2021
let playerName = prompt("Enter your name here:") //input is the players name
hungerThreshold = 30;
thirstThreshold = 60;
boredThreshold = 70;
//animal class
class animal {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._bored = 100;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get bored() {
        return this._bored;
    }

}
theCat = new animal(playerName);
console.log(`Hi I'm the cat and my name is ${theCat.name}`);
console.log(`My hunger is a ${theCat.hunger}`);
console.log(`My thirst is a ${theCat.thirst}`);
console.log(`My bordem is a ${theCat.bored}`)
if (theCat.hunger < 30) {
    console.log(`${theCat.name} the cat is hungry, my hunger needs to be ${hungerThreshold} and it is currently ${theCat._hunger}`);
};
if (theCat.thirst < 60) {
    console.log(`${theCat.name} the cat is thirsty. My thirst needs to be ${thirstThreshold} and it's currently ${theCat.thirst} `)
};
if (theCat.bored < 60) {
    console.log(`${theCat.name} the cat is bored play with me. My bordem is ${theCat.bored} and it needs to be ${boredThreshold}`)
}
