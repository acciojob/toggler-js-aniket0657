//your JS code here. If required.
const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("change", () => {
    const checkedToggles = [...toggles].filter(t => t.checked);

    // Only allow max 2 toggles
    if (checkedToggles.length > 2) {
      // Uncheck the first one
      checkedToggles[0].checked = false;
    }
  });
});
