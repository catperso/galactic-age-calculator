export default class SpaceAge {
  constructor(age) {
    this.ages = {};
    this.ages['Earth'] = age;
  }

  ageConverter() {
    this.ages['Mercury'] = parseFloat((this.ages['Earth'] / 0.24).toFixed(2));
    this.ages['Venus'] = parseFloat((this.ages['Earth'] / 0.62).toFixed(2));
    this.ages['Mars'] = parseFloat((this.ages['Earth'] / 1.88).toFixed(2));
    this.ages['Jupiter'] = parseFloat((this.ages['Earth'] / 11.86).toFixed(2));
  }
}