const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');
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
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
});

firstSpan2.textContent = currentDay;
secondSpan2.textContent = (currentDay + 1) % daysInMonth || daysInMonth;
thirdSpan2.textContent = (currentDay + 2) % daysInMonth || daysInMonth;
fourthSpan2.textContent = (currentDay + 3) % daysInMonth || daysInMonth;
fifthSpan2.textContent = (currentDay + 4) % daysInMonth || daysInMonth;
sixthSpan2.textContent = (currentDay + 5) % daysInMonth || daysInMonth;
seventhSpan2.textContent = (currentDay + 6) % daysInMonth || daysInMonth;

switch(currentDay % 7) {
  case 0:
    firstSpan1.textContent = "Неделя";
    secondSpan1.textContent = "Понеделник";
    thirdSpan1.textContent = "Вторник";
    fourthSpan1.textContent = "Сряда";
    fifthSpan1.textContent = "Четвъртък";
    sixthSpan1.textContent = "Петък";
    seventhSpan1.textContent = "Събота";
    break;
  case 1:
    firstSpan1.textContent = "Понеделник";
    secondSpan1.textContent = "Вторник";
    thirdSpan1.textContent = "Сряда";
    fourthSpan1.textContent = "Четвъртък";
    fifthSpan1.textContent = "Петък";
    sixthSpan1.textContent = "Събота";
    seventhSpan1.textContent = "Неделя";
    break;
  case 2:
    firstSpan1.textContent = "Вторник";
    secondSpan1.textContent = "Сряда";
    thirdSpan1.textContent = "Четвъртък";
    fourthSpan1.textContent = "Петък";
    fifthSpan1.textContent = "Събота";
    sixthSpan1.textContent = "Неделя";
    seventhSpan1.textContent = "Понеделник";
    break;
  case 3:
    firstSpan1.textContent = "Сряда";
    secondSpan1.textContent = "Четвъртък";
    thirdSpan1.textContent = "Петък";
    fourthSpan1.textContent = "Събота";
    fifthSpan1.textContent = "Неделя";
    sixthSpan1.textContent = "Понеделник";
    seventhSpan1.textContent = "Вторник";
    break;
  case 4:
    firstSpan1.textContent = "Четвъртък";
    secondSpan1.textContent = "Петък";
    thirdSpan1.textContent = "Събота";
    fourthSpan1.textContent = "Неделя";
    fifthSpan1.textContent = "Понеделник";
    sixthSpan1.textContent = "Вторник";
    seventhSpan1.textContent = "Сряда";
    break;
  case 5:
    firstSpan1.textContent = "Петък";
    secondSpan1.textContent = "Събота";
    thirdSpan1.textContent = "Неделя";
    fourthSpan1.textContent = "Понеделник";
    fifthSpan1.textContent = "Вторник";
    sixthSpan1.textContent = "Сряда";
    seventhSpan1.textContent = "Четвъртък";
    break;
  case 6:
    firstSpan1.textContent = "Събота";
    secondSpan1.textContent = "Неделя";
    thirdSpan1.textContent = "Понеделник";
    fourthSpan1.textContent = "Вторник";
    fifthSpan1.textContent = "Сряда";
    sixthSpan1.textContent = "Четвъртък";
    seventhSpan1.textContent = "Петък";
    break;
}

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