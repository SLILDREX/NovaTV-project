const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector('.overlay');
const day = new Date().getDay();
const date = new Date().getDate();
const month = new Date().getMonth();
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

console.log(month);

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.style.display = offScreenMenu.classList.contains('active') ? 'block' : 'none';
});

switch(day){
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

firstSpan2.textContent = date;
secondSpan2.textContent = date + 1;
thirdSpan2.textContent = date + 2;
fourthSpan2.textContent = date + 3;
fifthSpan2.textContent = date + 4;
sixthSpan2.textContent = date + 5;
seventhSpan2.textContent = date + 6;

switch(month){
  case 0:
    firstSpan3.textContent = "Януари";
    secondSpan3.textContent = "Януари";
    thirdSpan3.textContent = "Януари";
    fourthSpan3.textContent = "Януари";
    fifthSpan3.textContent = "Януари";
    sixthSpan3.textContent = "Януари";
    seventhSpan3.textContent = "Януари";
    break;
  case 1:
    firstSpan3.textContent = "Февруари";
    secondSpan3.textContent = "Февруари";
    thirdSpan3.textContent = "Февруари";
    fourthSpan3.textContent = "Февруари";
    fifthSpan3.textContent = "Февруари";
    sixthSpan3.textContent = "Февруари";
    seventhSpan3.textContent = "Февруари";
    break;
  case 2:
    firstSpan3.textContent = "Март";
    secondSpan3.textContent = "Март";
    thirdSpan3.textContent = "Март";
    fourthSpan3.textContent = "Март";
    fifthSpan3.textContent = "Март";
    sixthSpan3.textContent = "Март";
    seventhSpan3.textContent = "Март";
    break;
  case 3:
    firstSpan3.textContent = "Април";
    secondSpan3.textContent = "Април";
    thirdSpan3.textContent = "Април";
    fourthSpan3.textContent = "Април";
    fifthSpan3.textContent = "Април";
    sixthSpan3.textContent = "Април";
    seventhSpan3.textContent = "Април";
    break;
  case 4:
    firstSpan3.textContent = "Май";
    secondSpan3.textContent = "Май";
    thirdSpan3.textContent = "Май";
    fourthSpan3.textContent = "Май";
    fifthSpan3.textContent = "Май";
    sixthSpan3.textContent = "Май";
    seventhSpan3.textContent = "Май";
    break;
  case 5:
    firstSpan3.textContent = "Юни";
    secondSpan3.textContent = "Юни";
    thirdSpan3.textContent = "Юни";
    fourthSpan3.textContent = "Юни";
    fifthSpan3 .textContent = "Юни";
    sixthSpan3.textContent = "Юни";
    seventhSpan3.textContent = "Юни";
    break;
  case 6:
    firstSpan3.textContent = "Юли";
    secondSpan3.textContent = "Юли";
    thirdSpan3.textContent = "Юли";
    fourthSpan3.textContent = "Юли";
    fifthSpan3.textContent = "Юли";
    sixthSpan3.textContent = "Юли";
    seventhSpan3.textContent = "Юли";
    break;
  case 7:
    firstSpan3.textContent = "Август";
    secondSpan3.textContent = "Август";
    thirdSpan3.textContent = "Август";
    fourthSpan3.textContent = "Август";
    fifthSpan3.textContent = "Август";
    sixthSpan3.textContent = "Август";
    seventhSpan3.textContent = "Август";
    break;
  case 8:
    firstSpan3.textContent = "Септември";
    secondSpan3.textContent = "Септември";
    thirdSpan3.textContent = "Септември";
    fourthSpan3.textContent = "Септември";
    fifthSpan3.textContent = "Септември";
    sixthSpan3.textContent = "Септември";
    seventhSpan3.textContent = "Септември";
    break;
  case 9:
    firstSpan3.textContent = "Октомври";
    secondSpan3.textContent = "Октомври";
    thirdSpan3.textContent = "Октомври";
    fourthSpan3.textContent = "Октомври";
    fifthSpan3.textContent = "Октомври";
    sixthSpan3.textContent = "Октомври";
    seventhSpan3.textContent = "Октомври";
    break;
  case 10:
    firstSpan3.textContent = "Ноември";
    secondSpan3.textContent = "Ноември";
    thirdSpan3.textContent = "Ноември";
    fourthSpan3.textContent = "Ноември";
    fifthSpan3.textContent = "Ноември";
    sixthSpan3.textContent = "Ноември";
    seventhSpan3.textContent = "Ноември";
    break;
  case 11:
    firstSpan3.textContent = "Декември";
    secondSpan3.textContent = "Декември";
    thirdSpan3.textContent = "Декември";
    fourthSpan3.textContent = "Декември";
    fifthSpan3.textContent = "Декември";
    sixthSpan3.textContent = "Декември";
    seventhSpan3.textContent = "Декември";
    break;
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