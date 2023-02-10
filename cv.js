

const toggleButton = document.getElementById("toggle-social-links");
const socialLinksList = document.getElementById("social-links-list");

toggleButton.addEventListener("click", function() {
  if (socialLinksList.style.display === "none") {
    socialLinksList.style.display = "block";
  } else {
    socialLinksList.style.display = "none";
  }
});

function sendEmail(emailAddress) {
  let link = `mailto:${emailAddress}`;
  window.open(link, '_blank');
}













