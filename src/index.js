class Hero {

    constructor(heroName, age, type) {
        this.heroName = heroName;
        this.age = age;
        this.type = type;
    }

    attack() {
        let typeAttack;

        switch(this.type) {

            case "mago":
                typeAttack = "magia";
                break;
            
            case "guerreiro":
                typeAttack = "espada";
                break;
            
            case "monge":
                typeAttack = "artes marciais";
                break;
            case "ninja":
                typeAttack = "shuriken";
                break;
            
            default:
                typeAttack = "ataque desconhecido"
        }

        console.log(`o ${this.type} atacou usando ${typeAttack}`);
    }
}

let player1 = new Hero("Mago Negro", 25, "mago");
let player2 = new Hero("Konan", 30, "guerreiro");
let player3 = new Hero("Shaolin", 47, "monge");
let player4 = new Hero("Naruto", 14, "ninja");


player1.attack();
player2.attack();
player3.attack();
player4.attack();