export default class SpaceAge {
  constructor(age) {
    this.earthAge = age;
  }

  onMercury() {
    let mercury = (this.earthAge / 0.24).toFixed(2);
    this.mercuryAge = parseFloat(mercury);
  }

  onVenus() {
    let venus = (this.earthAge / 0.62).toFixed(2);
    this.venusAge = parseFloat(venus);
  }
}