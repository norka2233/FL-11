
class Fighter{
    constructor(obj) {
     this.name = obj.name;
     this.damage = obj.damage;
     this.hp = obj.hp;
     this.agility = obj.agility;
     this.win = 0;
     this.losses = 0;
     this.totalHp = obj.hp;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.hp;
    }
    dealDamage(damage) {
        if(this.hp - damage < 0) {
            this.hp = 0;
        } else {
            this.hp = damage;
        }
    }
    attack(fighter) {
        let k = 100;
        let probability = Math.random() * k;
        if(probability > fighter.getAgility) {
            fighter.dealDamage(this.damage);
            console.log(`${this.getName} make ${this.getDamage} to ${fighter.getName}`);
            
        } else {
            console.log(`${fighter.getName} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.getName}, Wins: ${this.win}, Losses: ${this.losses}`);
    }
    heal(hpAmount) {
        if (this.hp + hpAmount >= this.totalHp) {
            return this.getHealth;
        } else {
            this.hp += hpAmount;
        }
    }
    addWin() {
        this.win++;
    }
    addLoss() {
        this.losses++;
    }
}

function battle(fighterOne, fighterTwo) {
    if(fighterOne.getHealth === 0) {
        console.log(`${fighterOne.getName} is dead and can't fight`);
    } else if(fighterTwo.getHealth === 0) {
        console.log(`${fighterTwo.getName} is dead and can't fight`);
    } else {
        while(fighterOne.getHealth > 0 && fighterTwo.getHealth > 0) {
            fighterOne.attack(fighterTwo);
            if(fighterTwo.getHealth > 0) {
                fighterTwo.attack(fighterOne);
            }
        }
        fighterOne.getHealth === 0 ? fighterOne.addLoss() : fighterOne.addWin();
        fighterTwo.getHealth === 0 ? fighterTwo.addLoss() : fighterTwo.addWin();

    }
}
const fighterFirst = new Fighter({ name: 'John', damage: 20, agility: 25, hp: 100 });
const fighterSec = new Fighter({ name: 'Jim', damage: 10, agility: 40, hp: 120 });
