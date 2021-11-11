import SpaceAge from "../src/js/space-age";

describe('SpaceAge', () => {
  let myAge;

  beforeEach(() => {
    myAge = new SpaceAge(31);
  });

  test('should correctly create a SpaceAge object with the users age in earth years', () => {
    expect(myAge.ages['Earth']).toEqual(31);
  });
  test('should convert earth age to mercury age (to 2 decimal places) and add it to the ages property', () => {
    myAge.onMercury();
    expect(myAge.ages['Mercury']).toEqual(129.17);
  });
  test('should convert earth age to venus age (to 2 decimal places) and add it to the ages property', () => {
    myAge.onVenus();
    expect(myAge.ages['Venus']).toEqual(50);
  });
  test('should convert earth age to mars age (to 2 decimal places) and add it to the ages property', () => {
    myAge.onMars();
    expect(myAge.ages['Mars']).toEqual(16.49);
  })
});