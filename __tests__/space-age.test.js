import SpaceAge from "../src/js/space-age";

describe('SpaceAge', () => {
  let myAge;

  beforeEach(() => {
    myAge = new SpaceAge(31);
    myAge.ageConverter();
  });

  test('should correctly create a SpaceAge object with the users age in earth years', () => {
    expect(myAge.ages['Earth']).toEqual(31);
  });
  test('should convert earth age to mercury age (to 2 decimal places) and add it to the ages property', () => {
    expect(myAge.ages['Mercury']).toEqual(129.17);
  });
  test('should convert earth age to venus age (to 2 decimal places) and add it to the ages property', () => {
    expect(myAge.ages['Venus']).toEqual(50);
  });
  test('should convert earth age to mars age (to 2 decimal places) and add it to the ages property', () => {
    expect(myAge.ages['Mars']).toEqual(16.49);
  });
  test('should convert earth age to jupiter age (to 2 decimal places) and add it to the ages property', () => {
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
    expect(myAge.yearsLeft('Earth')).toEqual(47.99);
  });
  test('should calculate remaining average expectancy for chosen planet', () => {
    expect(myAge.yearsLeft('Mercury')).toEqual(199.96);
    expect(myAge.yearsLeft('Venus')).toEqual(77.40);
    expect(myAge.yearsLeft('Mars')).toEqual(25.53);
    expect(myAge.yearsLeft('Jupiter')).toEqual(4.05);
  });
   test('should return foreboding message to a user not yet at the average expectancy', () => {
    expect(myAge.foretelling('Jupiter')).toEqual('You have a mere 4.05 years left to live on Jupiter. Make the most of it!');
   });
});