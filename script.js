document.addEventListener("DOMContentLoaded", () => {
 
  const discoverButton = document.getElementById("discover");
  const highlightsSection = document.getElementById("highlights");
  const groupButton = document.getElementById("groupButton");
  const customPopup = document.getElementById("customPopup");
  const popupClose = document.getElementById("popupClose");

  discoverButton.addEventListener("click", () => {
    if (highlightsSection) {
      highlightsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  groupButton.addEventListener("click", () => {
    customPopup.style.display = "block"; // 팝업 표시
  });

  popupClose.addEventListener("click", () => {
    customPopup.style.display = "none"; // 팝업 닫기
  });
});
