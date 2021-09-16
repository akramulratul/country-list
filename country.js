const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((countries) => displayCountries(countries));
};
loadCountries();

const displayCountries = (countries) => {
  const seeItem = document.getElementById("countries");
  countries.forEach((country) => {
    // console.log(countries);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `<h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('andora')">Details</button>`;
    // const h3 = document.createElement("h3");
    // h3.innerText = country.name;
    // div.appendChild(h3);
    // const p = document.createElement("p");
    // p.innerText = country.capital;
    // div.appendChild(p);
    seeItem.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  console.log(name);
};
