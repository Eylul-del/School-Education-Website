// document.addEventListener("DOMContentLoaded", () => {
//   const langSelector = document.getElementById("langSelector");
//   const languageList = document.getElementById("languageList");

//   if (!langSelector || !languageList) return;

//   // Toggle dropdown
//   langSelector.addEventListener("click", (e) => {
//     e.stopPropagation(); // prevent click from reaching window
//     languageList.classList.toggle("show");
//   });

//   // Select language + close dropdown
//   document.querySelectorAll("#languageList li").forEach(li => {
//     li.addEventListener("click", (e) => {
//       e.stopPropagation(); // stop click from bubbling to window
//       const selectedLang = li.dataset.lang;

//       // call your translation loader
//       if (typeof loadLanguage === "function") {
//         loadLanguage(selectedLang);
//       }

//       // close dropdown
//       languageList.classList.remove("show");
//     });
//   });

//   // Close if click outside
//   window.addEventListener("click", (e) => {
//     if (!langSelector.contains(e.target) && !languageList.contains(e.target)) {
//       languageList.classList.remove("show");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const langSelectors = document.querySelectorAll(".lang"); // select both language items

  langSelectors.forEach(selector => {
    const list = selector.querySelector("ul");

    if (!list) return;

    // Toggle dropdown
    selector.addEventListener("click", (e) => {
      e.stopPropagation();
      list.classList.toggle("show");
    });

    // Select language and close dropdown
    list.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", (e) => {
        e.stopPropagation();
        const selectedLang = li.dataset.lang;

        if (typeof loadLanguage === "function") {
          loadLanguage(selectedLang);
        }

        list.classList.remove("show"); // hide list after choosing
      });
    });
  });

  // Close all dropdowns when clicking outside
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".lang-dropdown ul.show").forEach(openList => {
      if (!openList.closest(".lang").contains(e.target)) {
        openList.classList.remove("show");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {

  // Helper: get value from JSON using dot notation (like "mainTitle.title")
  function getValueByKey(obj, key) {
    return key.split('.').reduce((res, part) => (res ? res[part] : null), obj);
  }

  // Translate page elements
  function translatePage(translations) {
    // Text content / innerHTML
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const text = getValueByKey(translations, key);
      if (text) el.innerHTML = text; // use innerHTML to support spans
    });

    // Alt attributes
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      const text = getValueByKey(translations, key);
      if (text) el.alt = text;
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = getValueByKey(translations, key);
      if (text) el.placeholder = text;
    });
  }

  // Load language JSON + handle direction
  async function loadLanguage(langCode) {
    try {
      const response = await fetch(`./lang/${langCode}.json`);
      if (!response.ok) throw new Error("Language file not found");

      const translations = await response.json();
      translatePage(translations);

      // Save chosen language
      localStorage.setItem("selectedLang", langCode);

      // Set direction and lang attribute
      document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = langCode;

    } catch (error) {
      console.error("Error loading translation file:", error);
    }
  }

  // Handle dropdown language selection
  document.querySelectorAll("#languageList li").forEach(li => {
    li.addEventListener("click", (e) => {
      const selectedLang = li.getAttribute("data-lang");
      loadLanguage(selectedLang);
      localStorage.setItem("selectedLang", selectedLang);
      e.stopPropagation();
    });
  });

  // Load saved or default language on startup
  const savedLang = localStorage.getItem("selectedLang") || "tr";
  loadLanguage(savedLang);
});
