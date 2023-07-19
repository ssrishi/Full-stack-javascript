let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
        console.log(`Hitesh is peresent in all objects`);
    }

    Array.prototype.heyHitesh = function(){
        console.log(`Hitesh says hello`);
    }

    myHeros.hitesh()
