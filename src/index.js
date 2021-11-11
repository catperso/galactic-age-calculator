import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceAge from './js/space-age';

$("#age-input").submit((event) => {
  event.preventDefault();
  let userAge = $("#your-age").val();
  let yourAge = new SpaceAge(userAge);
  yourAge.ageConverter();
  $("#output").fadeIn();
});