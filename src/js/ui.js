
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("urlInput");
  const goBtn = document.getElementById("goBtn");

  // Enter key support
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      goProxy();
    }
  });

  goBtn.addEventListener("click", goProxy);

  // Quick buttons
  document.querySelectorAll(".quick-sites button").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      goToProxy(url);
    });
  });

  function goProxy() {
    const val = input.value.trim();
    if (!val) {
      input.focus();
      return;
    }
    goToProxy(val);
  }

  // Auto focus
  input.focus();
});
