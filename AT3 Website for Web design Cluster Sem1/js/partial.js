const partials = document.getElementsByClassName("partial");

for (const partial of partials) {
  const partialUrl = partial.getAttribute("data-url");

  fetch(partialUrl)
    .then((result) => result.text())
    .then((content) => {
      partial.outerHTML = content;
    });
}

