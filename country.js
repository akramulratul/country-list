const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((countries) => displayCountries(countries));
};
loadCountries();
const seeItem = document.getElementById("country");
const displayCountries = (countries) => {
  console.log(country);
  countries.forEach((country) => {
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.innerText = country.name;
    seeItem.appendChild(li);
    const p = document.createElement("p");
    p.innerText = country.capital;
    div.appendChild(p);
  });
};
