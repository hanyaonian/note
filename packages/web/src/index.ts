function setAppContent(text: string) {
  const app = document.getElementById("app");
  if (app) {
    app.textContent = text;
  }
}

(function () {
  const button = document.getElementById("req");
  button?.addEventListener("click", () => {
    fetch("/hello")
      .then((content) => {
        return content.text();
      })
      .then((text) => {
        setAppContent(text);
      });
  });
})();
