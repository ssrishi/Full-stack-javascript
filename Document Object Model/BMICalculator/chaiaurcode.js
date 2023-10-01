const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Enter a Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Enter a Valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let msg = '';
    if (bmi < 18.6) {
      msg = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      msg = 'Normal Weight';
    } else if (bmi > 24.9) {
      msg = 'OverWeight';
    }
    results.innerHTML = `<span>${bmi}</span><br>${msg}`;
  }
});
