//phil welsby 16 aug 2021
let input = prompt("Enter your name here:") //input is the players name
const welcome = document.getElementById("welcome")
welcome.textContent = `Hello ${input} Welcome to CyberPet`;
const Dog = document.getElementById("dog");
const Cat = document.getElementById("cat");
const Rabbit = document.getElementById("rabbit");

//main class
class animal {
    constructor(name) {
    this._name = name;
    this._hunger = 100;
    }
    get name() {
    return this._name;
    }
    get hunger() {
    return this._hunger;
    }
    eat() {
    this._hunger--;
    }
    }
    
//subclass
class dog extends animal {
    constructor(name, likesWalks) {
        super(name);
        this._likesWalks = likesWalks;
    }
}

Dog.addEventListener("click", () => {
    input = new dog(input);
    welcome.textContent = `Hello my name is ${input.name} and I am a dog and my hunger is ${input.hunger}`

});

Cat.addEventListener("click", () => {
    welcome.textContent = "So you want to be a Cat"
})

Rabbit.addEventListener("click", () => {
    welcome.textContent = "So you want to be a Rabbit"
})



//console.log("Hi my name is", toby.name, 'My hunger is', toby.hunger)
console.log(`Hi my name is ${input.name}. My hunger is currently ${input.hunger}`)



  // subclass rabbit 
  class rabbit extends animal {
    constructor(name, lovesCarrots) {
    super(name);
    this._lovesCarrots = lovesCarrots;}
}

const bob = new rabbit('Bob'); 
console.log(bob.name);

console.log(input);
