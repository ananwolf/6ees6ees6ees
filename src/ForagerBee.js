class ForagerBee extends Bee {
  age = 10;
  job = 'find pollen';
  canFly = true;
  treasureChest = [];

  forage(item) {
    this.treasureChest.push(item);
  }
};
