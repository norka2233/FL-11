
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

function battle(fighter1, fighter2) {
    if(fighter1.getHealth === 0) {
        console.log(`${fighter1.getName} is dead and can't fight`);
    } else if(fighter2.getHealth === 0) {
        console.log(`${fighter2.getName} is dead and can't fight`);
    } else {
        while(fighter1.getHealth > 0 && fighter2.getHealth > 0) {
            fighter1.attack(fighter2);
            if(fighter2.getHealth > 0) {
                fighter2.attack(fighter1);
            }
        }
        fighter1.getHealth === 0 ? fighter1.addLoss() : fighter1.addWin();
        fighter2.getHealth === 0 ? fighter2.addLoss() : fighter2.addWin();

    }
}
const fighterFirst = new Fighter({ name: 'John', damage: 20, agility: 25, hp: 100 });
const fighterSec = new Fighter({ name: 'Jim', damage: 10, agility: 40, hp: 120 });
