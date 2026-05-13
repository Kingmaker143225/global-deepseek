



// // Page-specific initialization functions

// function initSignup() {
//   const form = document.getElementById("signupForm");
//   if (form) {
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const mobile = document.getElementById("mobile").value.trim();
//       const password = document.getElementById("password").value.trim();
//       const terms = document.getElementById("terms").checked;
      
//       if (!terms) {
//         alert("Please accept Terms of Use and Privacy Policy.");
//         return;
//       }
      
//       state.user = { name, email, mobile, password };
//       saveState();
//       navigateTo("landing");
//     });
//   }
// }

// function initLogin() {
//   const form = document.getElementById("loginForm");
//   if (form) {
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       const email = document.getElementById("loginEmail").value.trim();
//       const password = document.getElementById("loginPassword").value.trim();
      
//       if (!state.user.email) {
//         alert("Please create an account first.");
//         navigateTo("signup");
//         return;
//       }
      
//       if (email === state.user.email && password === state.user.password) {
//         navigateTo("landing");
//       } else {
//         alert("Invalid email or password.");
//       }
//     });
//   }
// }

// function initLanding() {
//   window.startOnboarding = function() {
//     const name = document.getElementById("landingName")?.value.trim();
//     if (!name) {
//       alert("Please enter your name.");
//       return;
//     }
//     state.user.name = name;
//     saveState();
//     navigateTo("country");
//   };
// }

// function initCountry() {
//   const mainContainer = document.getElementById("mainCountryChips");
//   const europeContainer = document.getElementById("europeChips");
//   const selectedSpan = document.getElementById("selectedCount");
//   const img = document.getElementById("countryImage");
  
//   if (mainContainer) {
//     mainContainer.innerHTML = mainCountries.map(c => `
//       <button class="pill ${state.countries.includes(c) ? 'active' : ''}" onclick="toggleCountry('${c.replace(/'/g, "\\'")}')">
//         ${c}${state.countries.includes(c) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
//       </button>
//     `).join("");
//   }
  
//   if (europeContainer) {
//     europeContainer.innerHTML = europeCountries.map(c => `
//       <button class="pill ${state.countries.includes(c) ? 'active' : ''}" onclick="toggleCountry('${c.replace(/'/g, "\\'")}')">
//         ${c}${state.countries.includes(c) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
//       </button>
//     `).join("");
//   }
  
//   if (selectedSpan) selectedSpan.textContent = state.countries.length;
//   if (img) img.src = getCountryImage();
  
//   window.countryNext = function() {
//     if (state.countries.length === 0) {
//       alert("Please select at least one country.");
//       return;
//     }
//     navigateTo("state");
//   };
// }

// function initState() {
//   const container = document.getElementById("stateChips");
//   const selectedContainer = document.getElementById("selectedStatesList");
  
//   if (container) {
//     container.innerHTML = domesticStates.map(s => `
//       <button class="pill ${state.states.includes(s) ? 'active' : ''}" onclick="toggleState('${s.replace(/'/g, "\\'")}')">
//         ${s}${state.states.includes(s) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
//       </button>
//     `).join("");
//   }
  
//   if (selectedContainer) {
//     if (state.states.length) {
//       selectedContainer.innerHTML = state.states.map((s, i) => `
//         <div class="selected-row">
//           <span><b style="background:#07988c; color:#fff; border-radius:50%; padding:5px 9px; margin-right:10px;">${i+1}</b>${s}</span>
//           <button onclick="toggleState('${s}')" style="border:0; background:transparent; font-size:18px; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
//         </div>
//       `).join("");
//     } else {
//       selectedContainer.innerHTML = '<p style="color:#6b7280;">No states selected yet.</p>';
//     }
//   }
  
//   window.stateNext = function() {
//     if (state.states.length === 0) {
//       alert("Please select at least one state.");
//       return;
//     }
//     navigateTo("level");
//   };
// }

// function initLevel() {
//   const container = document.getElementById("levelCards");
//   if (container) {
//     container.innerHTML = studyLevels.map(level => `
//       <button class="level-card ${state.level === level.name ? 'active' : ''}" onclick="selectLevel('${level.name}')">
//         <div class="level-card-icon">${level.icon}</div>
//         <h3>${level.name}</h3>
//         <div class="radio">${state.level === level.name ? '<i class="fa-solid fa-check"></i>' : ''}</div>
//       </button>
//     `).join("");
//   }
  
//   window.levelNext = function() {
//     if (!state.level) {
//       alert("Please select your level of study.");
//       return;
//     }
//     navigateTo("success");
//   };
// }

// function initSuccess() {
//   // No initialization needed
// }

// function initDashboard() {
//   // Dashboard already has all functionality
// }









// Page-specific initialization functions

function initSignup() {
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const password = document.getElementById("password").value.trim();
      const terms = document.getElementById("terms").checked;
      
      if (!terms) {
        alert("Please accept Terms of Use and Privacy Policy.");
        return;
      }
      
      state.user = { name, email, mobile, password };
      saveState();
      navigateTo("landing");
    });
  }
}

function initLogin() {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      
      if (!state.user.email) {
        alert("Please create an account first.");
        navigateTo("signup");
        return;
      }
      
      if (email === state.user.email && password === state.user.password) {
        navigateTo("landing");
      } else {
        alert("Invalid email or password.");
      }
    });
  }
}

function initLanding() {
  // Set the name input value if user exists
  const nameInput = document.getElementById("landingName");
  if (nameInput && state.user.name) {
    nameInput.value = state.user.name;
  }
  
  window.startOnboarding = function() {
    const name = document.getElementById("landingName")?.value.trim();
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    state.user.name = name;
    saveState();
    
    // Navigate based on mode: Domestic goes to state, International goes to country
    if (state.mode === "domestic") {
      navigateTo("state");
    } else {
      navigateTo("country");
    }
  };
}

function initCountry() {
  const mainContainer = document.getElementById("mainCountryChips");
  const europeContainer = document.getElementById("europeChips");
  const selectedSpan = document.getElementById("selectedCount");
  const img = document.getElementById("countryImage");
  
  // Update toggle buttons to show correct active state
  const domesticBtn = document.querySelector(".toggle button:first-child");
  const internationalBtn = document.querySelector(".toggle button:last-child");
  if (domesticBtn && internationalBtn) {
    if (state.mode === "domestic") {
      domesticBtn.classList.add("active");
      internationalBtn.classList.remove("active");
    } else {
      domesticBtn.classList.remove("active");
      internationalBtn.classList.add("active");
    }
  }
  
  if (mainContainer) {
    mainContainer.innerHTML = mainCountries.map(c => `
      <button class="pill ${state.countries.includes(c) ? 'active' : ''}" onclick="toggleCountry('${c.replace(/'/g, "\\'")}')">
        ${c}${state.countries.includes(c) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
      </button>
    `).join("");
  }
  
  if (europeContainer) {
    europeContainer.innerHTML = europeCountries.map(c => `
      <button class="pill ${state.countries.includes(c) ? 'active' : ''}" onclick="toggleCountry('${c.replace(/'/g, "\\'")}')">
        ${c}${state.countries.includes(c) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
      </button>
    `).join("");
  }
  
  if (selectedSpan) selectedSpan.textContent = state.countries.length;
  if (img) img.src = getCountryImage();
  
  window.countryNext = function() {
    if (state.countries.length === 0) {
      alert("Please select at least one country.");
      return;
    }
    // FIXED: International students go directly to level page (skip state)
    navigateTo("level");
  };
}

function initState() {
  const container = document.getElementById("stateChips");
  const selectedContainer = document.getElementById("selectedStatesList");
  
  // Update toggle buttons to show correct active state
  const domesticBtn = document.querySelector(".toggle button:first-child");
  const internationalBtn = document.querySelector(".toggle button:last-child");
  if (domesticBtn && internationalBtn) {
    if (state.mode === "domestic") {
      domesticBtn.classList.add("active");
      internationalBtn.classList.remove("active");
    } else {
      domesticBtn.classList.remove("active");
      internationalBtn.classList.add("active");
    }
  }
  
  if (container) {
    container.innerHTML = domesticStates.map(s => `
      <button class="pill ${state.states.includes(s) ? 'active' : ''}" onclick="toggleState('${s.replace(/'/g, "\\'")}')">
        ${s}${state.states.includes(s) ? '<span class="check"><i class="fa-solid fa-check"></i></span>' : ''}
      </button>
    `).join("");
  }
  
  if (selectedContainer) {
    if (state.states.length) {
      selectedContainer.innerHTML = state.states.map((s, i) => `
        <div class="selected-row">
          <span><b style="background:#07988c; color:#fff; border-radius:50%; padding:5px 9px; margin-right:10px;">${i+1}</b>${s}</span>
          <button onclick="toggleState('${s}')" style="border:0; background:transparent; font-size:18px; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `).join("");
    } else {
      selectedContainer.innerHTML = '<p style="color:#6b7280;">No states selected yet.</p>';
    }
  }
  
  window.stateNext = function() {
    if (state.states.length === 0) {
      alert("Please select at least one state.");
      return;
    }
    navigateTo("level");
  };
}

function initLevel() {
  const container = document.getElementById("levelCards");
  if (container) {
    container.innerHTML = studyLevels.map(level => `
      <button class="level-card ${state.level === level.name ? 'active' : ''}" onclick="selectLevel('${level.name}')">
        <div class="level-card-icon">${level.icon}</div>
        <h3>${level.name}</h3>
        <div class="radio">${state.level === level.name ? '<i class="fa-solid fa-check"></i>' : ''}</div>
      </button>
    `).join("");
  }
  
  window.levelNext = function() {
    if (!state.level) {
      alert("Please select your level of study.");
      return;
    }
    navigateTo("success");
  };
  
  // Update back button to go to correct previous page
  const backBtn = document.querySelector(".bottom-nav .btn-circle");
  if (backBtn) {
    backBtn.onclick = function() {
      if (state.mode === "domestic") {
        navigateTo("state");
      } else {
        navigateTo("country");
      }
    };
  }
}

function initSuccess() {
  // Update user name in success page
  const userNameElement = document.getElementById("successUserName");
  if (userNameElement && state.user.name) {
    const firstName = state.user.name.split(" ")[0];
    userNameElement.innerHTML = `Awesome, ${firstName}! 🎉`;
  }
}

function initDashboard() {
  // Update user name in dashboard
  const userNameSpan = document.getElementById("dashboardUserName");
  const heroNameSpan = document.getElementById("dashboardHeroName");
  
  if (userNameSpan && state.user.name) {
    userNameSpan.textContent = state.user.name.split(" ")[0].toLowerCase();
  }
  if (heroNameSpan && state.user.name) {
    heroNameSpan.innerHTML = `${state.user.name.split(" ")[0]}! 👋`;
  }
  
  // Update wallet greeting
  const walletGreeting = document.querySelector(".dash-hero h1");
  if (walletGreeting && state.user.name) {
    walletGreeting.innerHTML = `${state.user.name.split(" ")[0]}! 👋`;
  }
}