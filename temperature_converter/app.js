function handleFormSubmit() {
  console.log('Submitting form!');

  const temp = document.getElementById('temp').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  if (temp === '' || isNaN(parseFloat(temp))) {
    return alert(`Temperature: ${temp} is not a valid value.`);
  }

  if (from === '' || to === '') {
    return alert(`From and To values are required.`);
  }

  const result = convertTemperature(parseFloat(temp), from, to);

  document.getElementById('result').innerHTML = `${parseFloat(temp).toFixed(
    2
  )} ${from} is ${result} ${to}`;
}

function convertTemperature(temp, from, to) {
  let result = temp;
  if (from === 'Farenheit' && to === 'Celsius') {
    result = ((temp - 32) * 5) / 9;
  } else if (from === 'Farenheit' && to === 'Kelvin') {
    result = ((temp - 32) * 5) / 9 + 273.15;
  } else if (from === 'Celsius' && to === 'Farenheit') {
    result = (temp * 9) / 5 + 32;
  } else if (from === 'Celsius' && to === 'Kelvin') {
    result = temp + 273.15;
  } else if (from === 'Kelvin' && to === 'Celsius') {
    result = temp - 273.15;
  } else if (from === 'Kelvin' && to === 'Farenheit') {
    result = (temp - 273.15) * 1.8 + 32;
  }
  return result.toFixed(2);
}
