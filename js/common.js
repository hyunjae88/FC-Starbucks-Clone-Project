const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

//search 영역 클릭 시 입력창에 focus되도록
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// 입력창이 포커스 이벤트 호출시 search클래스에 focused클래스 추가
// 입력창에 placeholder 입력
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 입력창에 focus가 없어지는 경우 search클래스에 focused클래그 제거
// 입력창에 placeholder 제거
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
