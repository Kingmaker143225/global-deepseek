


// Utility Functions & Data
const europeCountries = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic",
  "Denmark", "Finland", "France", "Germany", "Greece",
  "Hungary", "Ireland", "Italy", "Netherlands", "Norway",
  "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden", "Switzerland"
];

const mainCountries = [
  "Australia", "Canada", "New Zealand",
  "United Kingdom", "United States of America", "Europe"
];

const domesticStates = [
  "Andhra Pradesh", "Delhi", "Karnataka", "Kerala",
  "Tamil Nadu", "Telangana", "Maharashtra", "Gujarat"
];

const studyLevels = [
  { name: "10th Grade", icon: "🎓" },
  { name: "12th Grade", icon: "📖" },
  { name: "Degree", icon: "🧬" },
  { name: "Engineering", icon: "⚙️" },
  { name: "Masters", icon: "🏆" }
];

// Image mapping - UPDATE EXTENSIONS HERE
const countryImageMap = {
  "Australia": "images/austrila.png",
  "Canada": "images/canada.png",
  "New Zealand": "images/new zealand.png",
  "United Kingdom": "images/uk.jpeg",
  "United States of America": "images/usa.jpeg",
  "Europe": "images/europe.jpeg"
};

function getCountryImage() {
  if (state.mode === "domestic") return "images/india.jpeg";
  for (let c of state.countries) {
    if (countryImageMap[c]) return countryImageMap[c];
  }
  return "images/europe.jpeg";
}

function toggleCountry(country) {
  if (state.countries.includes(country)) {
    state.countries = state.countries.filter(c => c !== country);
  } else {
    if (state.countries.length >= 6 && country !== "Europe") {
      alert("You can select only up to 6 countries.");
      return;
    }
    state.countries.push(country);
  }
  saveState();
  loadPage("country");
}

function clearCountries() {
  state.countries = [];
  saveState();
  loadPage("country");
}

function toggleState(item) {
  if (state.states.includes(item)) {
    state.states = state.states.filter(s => s !== item);
  } else {
    if (state.states.length >= 3) {
      alert("You can select only up to 3 states.");
      return;
    }
    state.states.push(item);
  }
  saveState();
  loadPage("state");
}

function selectLevel(level) {
  state.level = level;
  saveState();
  loadPage("level");
}

function setMode(mode) {
  state.mode = mode;
  saveState();
  if (mode === "domestic") {
    loadPage("state");
  } else {
    loadPage("country");
  }
}

function resetApp() {
  localStorage.clear();
  state.page = "signup";
  state.user = {};
  state.countries = [];
  state.states = [];
  state.level = "";
  state.mode = "international";
  saveState();
  loadPage("login");
}