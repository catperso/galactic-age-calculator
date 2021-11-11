import SpaceAge from "../src/js/space-age";

describe('SpaceAge', () => {
  let myAge;

  beforeEach(() => {
    myAge = new SpaceAge(31);
  });

  test('should correctly create a SpaceAge object with the users age in earth years', () => {
    expect(myAge.ages['Earth']).toEqual(31);
  });
  test('should convert earth age to mercury age (to 2 decimal places) and add it as a new property to the object', () => {
    myAge.onMercury();
    expect(myAge.ages['Mercury']).toEqual(129.17);
  });
  test('should convert earth age to venus age (to 2 decimal places) and add it as a new property to the object', () => {
    myAge.onVenus();
    expect(myAge.ages['Venus']).toEqual(50);
  });
});