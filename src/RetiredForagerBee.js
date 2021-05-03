class RetiredForagerBee extends ForagerBee {
  age = 40;
  job = 'gamble';
  canFly = false;
  color = 'grey';

  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
