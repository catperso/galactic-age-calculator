export default class SpaceAge {
  constructor(age) {
    this.ages = {};
    this.ages['Earth'] = age;
    this.expectancy = { Earth: 78.99, Mercury: 329.13, Venus: 127.40, Mars: 42.02, Jupiter: 6.66 };
  }

  ageConverter() {
    this.ages['Mercury'] = parseFloat((this.ages['Earth'] / 0.24).toFixed(2));
    this.ages['Venus'] = parseFloat((this.ages['Earth'] / 0.62).toFixed(2));
    this.ages['Mars'] = parseFloat((this.ages['Earth'] / 1.88).toFixed(2));
    this.ages['Jupiter'] = parseFloat((this.ages['Earth'] / 11.86).toFixed(2));
  }

  yearsLeft(planet) {
    return parseFloat((this.expectancy[planet] - this.ages[planet]).toFixed(2));
  }

  foretelling(planet) {
    let fortune = this.yearsLeft(planet);
    if (fortune > 0) {
      return `You have a mere ${fortune} years left to live on ${planet}. Make the most of it!`
    }
    if (fortune < 0) {
      return `You're currently ${-fortune} years past the average lifetime on ${planet}. Go for the high score!`
    }
    if (fortune === 0) {
      return `Most people on ${planet} are expected to die at your age. Defy expectations!`
    }
  }
}