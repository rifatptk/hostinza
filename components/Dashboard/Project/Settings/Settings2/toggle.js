if (typeof window !== "undefined") {
  window.onload = function() { 
  var element = document.getElementById("buildCmd");

  document
    .getElementById("toggle-build")
    .addEventListener("click", toggleBuild);
  function toggleBuild() {
    element.toggleAttribute("disabled");
    element.value = "react-scripts build";
  }

  var element2 = document.getElementById("outputDir");
  document
    .getElementById("toggle-output")
    .addEventListener("click", toggleOutput);
  function toggleOutput() {
    element2.toggleAttribute("disabled");
    element2.value = "build";
  }
  var element3 = document.getElementById("installCmd");
  document
    .getElementById("toggle-install")
    .addEventListener("click", toggleInstall);
  function toggleInstall() {
    element3.toggleAttribute("disabled");
  }
  var element4 = document.getElementById("developmentCmd");
  document
    .getElementById("toggle-development")
    .addEventListener("click", toggleDevelopment);
  function toggleDevelopment() {
    element4.toggleAttribute("disabled");
    element4.value = "brunch watch --server --port $PORT";
  }}
}