export class Pokemon{
    constructor({name, hp, attack, defense, speed, type, moves, frontSprite, backSprite}){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.type = type;
        this.moves = moves;
        this.frontSprite = frontSprite,
        this.backSprite = backSprite
    }

    decreasePP(move){
    if (move.pp > 0) {
        move.pp--;
    }
}

    
}