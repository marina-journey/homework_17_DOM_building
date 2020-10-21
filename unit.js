class Unit {
  constructor(type, health, stamina) { //заменила distance
    this.type = type;
    this.health = this.maxHealth = health;
    this.stamina = this.maxStamina = stamina; //заменила distance
  }

  isReadyToMove() {
    return this.stamina > 0; //заменила distance
  }
  
  isReadyToFight() {
    return this.health > 0; 
  }
  
  restore() {
    this.health = this.maxHealth;
    this.stamina = this.maxStamina; //заменила distance
  }
  
  clone() {
    return new Unit(this.type, this.maxHealth, this.maxStamina); //заменила distance
  }
}