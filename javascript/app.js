const fullName = 'Rabindra Nath Tagore';
const firstName = fullName.slice(0, fullName.indexOf(' '));
const middleName = fullName.slice(
  fullName.indexOf(' ') + 1,
  fullName.lastIndexOf(' ')
);
const lastName = fullName.slice(fullName.lastIndexOf(' ') + 1, fullName.length);
console.log({ firstName, middleName, lastName });

fullName.splice;

function celsiusToFarenhite(temperatureInCelsius) {
  const temperatureInFarenhite = (temperatureInCelsius * 9) / 5 + 32;
  return temperatureInFarenhite;
}

let tc = prompt('Enter temperature in degree celsius:');
let tf = celsiusToFarenhite(tc);
alert(`${tc} degree celsius temperature in Farenhite is ${tf}`);
