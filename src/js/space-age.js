export default class SpaceAge {
  constructor(age) {
    this.ages = {};
    this.ages['Earth'] = age;
    this.expectancy = { Earth: 78.99, Mercury: 329.13, Venus: 127.40, Mars: 42.02, Jupiter: 6.66, Saturn: 2.68, Uranus: 0.94, Neptune: 0.48, Pluto: 0.32 };
  }

  ageConverter() {
    this.ages['Mercury'] = parseFloat((this.ages['Earth'] / 0.24).toFixed(2));
    this.ages['Venus'] = parseFloat((this.ages['Earth'] / 0.62).toFixed(2));
    this.ages['Mars'] = parseFloat((this.ages['Earth'] / 1.88).toFixed(2));
    this.ages['Jupiter'] = parseFloat((this.ages['Earth'] / 11.86).toFixed(2));
    this.ages['Saturn'] = parseFloat((this.ages['Earth'] / 29.46).toFixed(2));
    this.ages['Uranus'] = parseFloat((this.ages['Earth'] / 84.01).toFixed(2));
    this.ages['Neptune'] = parseFloat((this.ages['Earth'] / 164.79).toFixed(2));
    this.ages['Pluto'] = parseFloat((this.ages['Earth'] / 248.59).toFixed(2));
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