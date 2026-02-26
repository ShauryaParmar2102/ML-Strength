function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Toggle Help Video visibility
document.addEventListener("DOMContentLoaded", function() {
  const helpLink = document.getElementById("helpLink");
  const helpVideo = document.getElementById("helpVideo");

  helpLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Toggle display
    if (helpVideo.style.display === "none") {
      helpVideo.style.display = "block";
    } else {
      helpVideo.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Find all elements with the "partial" class
  const partials = document.querySelectorAll(".partial");
  partials.forEach(async (el) => {
    const url = el.dataset.url;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const html = await response.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  });
});
