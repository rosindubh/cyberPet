//phil welsby 16 aug 2021
let input = prompt("Enter your name here:") //input is the players name
const welcome = document.getElementById("welcome")
welcome.textContent = `Hello ${input} Welcome to CyberPet`;
const Dog = document.getElementById("dog");
const Cat = document.getElementById("cat");
const Rabbit = document.getElementById("rabbit");
whichPet = document.getElementById("which-pet");


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
    
//subclass dog
class dog extends animal {
    constructor(name, likesWalks) {
        super(name);
        this._likesWalks = likesWalks;
    }
}

  // subclass cat
  class cat extends animal {
    constructor(name, lovesMice) {
    super(name);
    this._lovesMice = lovesMice;}
}

  // subclass rabbit 
  class rabbit extends animal {
    constructor(name, lovesCarrots) {
    super(name);
    this._lovesCarrots = lovesCarrots;}
}

//listen for dog button
Dog.addEventListener("click", () => {
    input = new dog(input);
    welcome.textContent = `Hello my name is ${input.name} and I am a dog and my hunger is ${input.hunger}`

});
//listen for cat button
Cat.addEventListener("click", () => {
    input = new cat(input);
    welcome.textContent = `Hello my name is ${input.name} and I am a cat.`;
    whichPet.textContent = `My hunger is ${input.hunger}`;
    startGame();
    shortDelay();
});

//listen for rabbit button
Rabbit.addEventListener("click", () => {
    input = new rabbit(input);
welcome.textContent = `Hello my name is ${input.name} and I am a rabbit and my hunger is ${input.hunger}`
});


// setTimeout function
function shortDelay() {
    setTimeout(function(){ welcome.textContent = "Let's Play!"; }, 2500);
};

// start game
function startGame() {
    const hideButtons = document.getElementById("hide-buttons");
    hideButtons.style.display = 'block';
    hideButtons.style.display = 'none';
    let feedMeBtn = document.createElement('button');
    feedMeBtn.id = 'feedMe';
    feedMeBtn.innerHTML = 'Feed Me';
    document.body.appendChild(feedMeBtn);
    let playMeBtn = document.createElement('button');
    playMeBtn.id = 'playMe';
    playMeBtn.innerHTML = 'Play With Me';
    document.body.appendChild(playMeBtn);
    let thirstyMeBtn = document.createElement('button');
    thirstyMeBtn.id = 'thirstyMe';
    thirstyMeBtn.innerHTML = "I'm Thirsty";
    document.body.appendChild(thirstyMeBtn);
}