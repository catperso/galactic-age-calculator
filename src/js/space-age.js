export default class SpaceAge {
  constructor(age) {
    this.ages = {};
    this.ages['Earth'] = age;
  }

  onMercury() {
    let mercury = (this.ages['Earth'] / 0.24).toFixed(2);
    this.ages['Mercury'] = parseFloat(mercury);
  }

  onVenus() {
    let venus = (this.ages['Earth'] / 0.62).toFixed(2);
    this.ages['Venus'] = parseFloat(venus);
  }
}