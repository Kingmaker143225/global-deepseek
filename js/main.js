






// Main Router - Loads pages dynamically
async function loadPage(page) {
  const app = document.getElementById("app");
  
  try {
    const response = await fetch(`pages/${page}.html`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    app.innerHTML = html;
    
    // Initialize page-specific functions
    if (page === "signup") initSignup();
    else if (page === "login") initLogin();
    else if (page === "landing") initLanding();
    else if (page === "country") initCountry();
    else if (page === "state") initState();
    else if (page === "level") initLevel();
    else if (page === "success") initSuccess();
    else if (page === "dashboard") initDashboard();
    
  } catch (error) {
    console.error("Page load error:", error);
    app.innerHTML = `<div class="screen" style="text-align:center; padding:60px;">
      <h2>Error loading page</h2>
      <p>Please make sure you're running with Live Server</p>
      <button class="btn btn-primary" onclick="location.reload()">Retry</button>
    </div>`;
  }
}

// Make functions globally available
window.navigateTo = navigateTo;
window.toggleCountry = toggleCountry;
window.clearCountries = clearCountries;
window.toggleState = toggleState;
window.selectLevel = selectLevel;
window.setMode = setMode;
window.resetApp = resetApp;

// Start the app
document.addEventListener("DOMContentLoaded", () => {
  loadPage(state.page);
});