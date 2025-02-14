document.addEventListener("DOMContentLoaded", function () {
  // const targetBaseUrl = "shunchizhang.github.io";
  const targetBaseUrl = "zssc.tech";
  const targetUrl = window.location.href.replace(
    window.location.host,
    targetBaseUrl
  );
  console.log(window.location.href);
  console.log(targetUrl);
  // set redirect link
  const linkElement = document.getElementById("text");
  linkElement.href = targetUrl;
  linkElement.innerText = targetUrl;
  // apply redirect
  window.location.href = targetUrl;
});
