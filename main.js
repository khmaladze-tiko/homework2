//პირველი მოდალი
var modal = document.getElementById("simpleModal");
//გახსნის ღილაკი პირველ მოდალზე
var modalBtn = document.getElementById("modalBtn");
//დახურვის ღილაკი პირველ მოდალზე
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//კლიკით გაიხსნას
modalBtn.addEventListener("click", openModal);
//კლიკით დაიხუროს
closeBtn.addEventListener("click",closeModal);

//გარეთ დაგკლიკვა
window.addEventListener("click", outsideClick);


//მოდალის გახსნის ფუნქცია
function openModal(){
    modal.style.display = "block";
    let inputText = document.querySelector(".input").value;
    let pharagrap = document.querySelector(".pharagrap");
    pharagrap.innerHTML = inputText;
}


//მოდალის დახურვის ფუნქცია
function closeModal(){
    modal.style.display = "none";
}

//გარეთ დაჭერის შემთხვევაში დახურვის ფუნქცია
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

// let inputText = document.querySelector(".input").value;
// let pharagrap = document.querySelector(".pharagrap");
// pharagrap.innerHTML = inputText;
// pharagrap = inputText;
// console.log (inputText);
// console.log (pharagrap);

