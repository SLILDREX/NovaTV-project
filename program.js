const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');
const disableScroll = document.querySelector('body');
const firstSpan1 = document.getElementById("firstSpan1");
const secondSpan1 = document.getElementById("firstSpan2");
const thirdSpan1 = document.getElementById("firstSpan3");
const fourthSpan1 = document.getElementById("firstSpan4");
const fifthSpan1 = document.getElementById("firstSpan5");
const sixthSpan1 = document.getElementById("firstSpan6");
const seventhSpan1 = document.getElementById("firstSpan7");
const firstSpan2 = document.getElementById("secondSpan1");
const secondSpan2 = document.getElementById("secondSpan2");
const thirdSpan2 = document.getElementById("secondSpan3");
const fourthSpan2 = document.getElementById("secondSpan4");
const fifthSpan2 = document.getElementById("secondSpan5");
const sixthSpan2 = document.getElementById("secondSpan6");
const seventhSpan2 = document.getElementById("secondSpan7");
const firstSpan3 = document.getElementById("thirdSpan1");
const secondSpan3 = document.getElementById("thirdSpan2");
const thirdSpan3 = document.getElementById("thirdSpan3");
const fourthSpan3 = document.getElementById("thirdSpan4");
const fifthSpan3 = document.getElementById("thirdSpan5");
const sixthSpan3 = document.getElementById("thirdSpan6");
const seventhSpan3 = document.getElementById("thirdSpan7");
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentDayOfWeek = currentDate.getDay();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
  disableScroll.style.overflow = offScreenMenu.classList.contains('active') ? 'hidden' : 'auto';
});

const dayNames = ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"];

firstSpan1.textContent = dayNames[currentDayOfWeek % 7];
secondSpan1.textContent = dayNames[(currentDayOfWeek + 1) % 7];
thirdSpan1.textContent = dayNames[(currentDayOfWeek + 2) % 7];
fourthSpan1.textContent = dayNames[(currentDayOfWeek + 3) % 7];
fifthSpan1.textContent = dayNames[(currentDayOfWeek + 4) % 7];
sixthSpan1.textContent = dayNames[(currentDayOfWeek + 5) % 7];
seventhSpan1.textContent = dayNames[(currentDayOfWeek + 6) % 7];

firstSpan2.textContent = currentDay;
secondSpan2.textContent = (currentDay + 1) % daysInMonth || daysInMonth;
thirdSpan2.textContent = (currentDay + 2) % daysInMonth || daysInMonth;
fourthSpan2.textContent = (currentDay + 3) % daysInMonth || daysInMonth;
fifthSpan2.textContent = (currentDay + 4) % daysInMonth || daysInMonth;
sixthSpan2.textContent = (currentDay + 5) % daysInMonth || daysInMonth;
seventhSpan2.textContent = (currentDay + 6) % daysInMonth || daysInMonth;

const monthNames = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];

function getMonthName(monthIndex) {
  return monthNames[monthIndex % 12];
}

const spans = [firstSpan3, secondSpan3, thirdSpan3, fourthSpan3, fifthSpan3, sixthSpan3, seventhSpan3];

for (let i = 0; i < spans.length; i++) {
  const day = currentDay + i;
  if (day > daysInMonth) {
    spans[i].textContent = getMonthName(currentMonth + 1);
  } else {
    spans[i].textContent = getMonthName(currentMonth);
  }
}

function firstBth(){
  document.getElementById("firstDay").style.display = "block";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "none";
}

function secondBth(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "block";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "none";
}

function thirdBtn(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "block";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "none";
}

function fourthBtn(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "block";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "none";
}

function fifthBtn(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "block";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "none";
}

function sixthBtn(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "block";
  document.getElementById("seventhDay").style.display = "none";
}

function seventhBtn(){
  document.getElementById("firstDay").style.display = "none";
  document.getElementById("secondDay").style.display = "none";
  document.getElementById("thirdDay").style.display = "none";
  document.getElementById("fourthDay").style.display = "none";
  document.getElementById("fifthDay").style.display = "none";
  document.getElementById("sixthDay").style.display = "none";
  document.getElementById("seventhDay").style.display = "block";
}