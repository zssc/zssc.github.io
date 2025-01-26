const baseUrl = "https://shunchizhang.github.io";
const currentPath = window.location.pathname;
const currentSearch = window.location.search;
const currentHash = window.location.hash;
const targetUrl = `${baseUrl}${currentPath}${currentSearch}${currentHash}`;

function applyRedirect() {
  window.location.href = targetUrl;
}

function setRedirectLink(linkElementId) {
  const linkElement = document.getElementById(linkElementId);
  linkElement.href = targetUrl;
  linkElement.innerText = targetUrl;
}
