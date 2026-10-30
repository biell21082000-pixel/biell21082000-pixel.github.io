document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const contentSearch = document.getElementById("content-search-input");
  const status = document.getElementById("content-search-status");

  if (contentSearch && status) {
    const searchableCards = [...document.querySelectorAll(".section .cards .feature")];

    contentSearch.addEventListener("input", () => {
      const query = contentSearch.value.trim().toLowerCase();
      let visible = 0;

      searchableCards.forEach((card) => {
        const text = (card.textContent || "").toLowerCase();
        const matches = text.includes(query);
        card.hidden = !matches;

        if (matches) visible++;
      });

      if (!query) {
        status.textContent = "Pesquise por tema, dúvida ou palavra-chave.";
        return;
      }

      status.textContent = visible
        ? `${visible} conteúdo(s) encontrado(s).`
        : "Nenhum conteúdo encontrado. Tente outra palavra.";
    });
  }

  const modelSearch = document.getElementById("modelSearch");
  const modelStatus = document.getElementById("modelStatus");

  if (modelSearch && modelStatus) {
    const libraryCards = [...document.querySelectorAll(".library-card")];

    modelSearch.addEventListener("input", () => {
      const query = modelSearch.value.trim().toLowerCase();
      let visible = 0;

      libraryCards.forEach((card) => {
        const text = (card.dataset.search || card.textContent || "").toLowerCase();
        const matches = text.includes(query);
        card.hidden = !matches;

        if (matches) visible++;
      });

      modelStatus.textContent = !query
        ? "Pesquise por marca, modelo ou categoria."
        : visible
          ? `${visible} resultado(s) encontrado(s).`
          : "Nenhum resultado encontrado. Tente outra palavra.";
    });
  }
});
