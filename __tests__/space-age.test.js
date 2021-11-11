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
    myAge.ageConverter();
    expect(myAge.ages['Mercury']).toEqual(129.17);
  });
  test('should convert earth age to venus age (to 2 decimal places) and add it to the ages property', () => {
    myAge.ageConverter();
    expect(myAge.ages['Venus']).toEqual(50);
  });
  test('should convert earth age to mars age (to 2 decimal places) and add it to the ages property', () => {
    myAge.ageConverter();
    expect(myAge.ages['Mars']).toEqual(16.49);
  });
  test('should convert earth age to jupiter age (to 2 decimal places) and add it to the ages property', () => {
    myAge.ageConverter();
    expect(myAge.ages['Jupiter']).toEqual(2.61);
  });
  test('should correctly create a property with the max life expectancy on each planet', () => {
    expect(myAge.expectancy['Earth']).toEqual(78.99);
    expect(myAge.expectancy['Mercury']).toEqual(329.13);
    expect(myAge.expectancy['Venus']).toEqual(127.40);
    expect(myAge.expectancy['Mars']).toEqual(42.02);
    expect(myAge.expectancy['Jupiter']).toEqual(6.66);
  });
  test('should return how many years a user has left to live on earth (on average)', () => {
    myAge.ageConverter();
    expect(myAge.yearsLeft('Earth')).toEqual(47.99);
  });
});