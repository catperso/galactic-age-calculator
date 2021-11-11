export default class SpaceAge {
  constructor(age) {
    this.earthAge = age;
  }

  onMercury() {
    let mercury = (this.earthAge / 0.24).toFixed(2);
    this.mercuryAge = parseFloat(mercury);
  }
}