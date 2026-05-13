

// State Management
const state = {
  page: localStorage.getItem("yg_page") || "signup",
  user: JSON.parse(localStorage.getItem("yg_user") || "{}"),
  countries: JSON.parse(localStorage.getItem("yg_countries") || "[]"),
  states: JSON.parse(localStorage.getItem("yg_states") || "[]"),
  level: localStorage.getItem("yg_level") || "",
  mode: localStorage.getItem("yg_mode") || "international"
};

function saveState() {
  localStorage.setItem("yg_page", state.page);
  localStorage.setItem("yg_user", JSON.stringify(state.user));
  localStorage.setItem("yg_countries", JSON.stringify(state.countries));
  localStorage.setItem("yg_states", JSON.stringify(state.states));
  localStorage.setItem("yg_level", state.level);
  localStorage.setItem("yg_mode", state.mode);
}

function navigateTo(page) {
  state.page = page;
  saveState();
  loadPage(page);
  window.scrollTo(0, 0);
}