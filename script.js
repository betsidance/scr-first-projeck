const nameUser = document.querySelector(".nameUser");
const lastnameUser = document.querySelector(".lastnameUser");
const bethdayUser = document.querySelector(".bethdayUser");
const sentIbJs = document.querySelector(".sentIbJs");
const ullNew = document.querySelector(".newUl");

let users = []

 users = JSON.parse(localStorage.getItem("users")) || [];

sentIbJs.addEventListener('click', function () {

    const user = {
      name: nameUser.value,
      lastName: lastnameUser.value,
      besday: bethdayUser.value,
    };
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users));
    nameUser.value = ""
    lastnameUser.value = ''
    bethdayUser.value = ""
console.log(ullNew);
    
})

function showUser() {
    ullNew.innerHTML = ""
    users.forEach(user => {
        const li = document.createElement("li");
        li =  ` Имя: ${user.name} Фамилия: ${user.lastName} </li>
      День рождения: ${user.besday}`
    })
    ullNew.appendChild(li)
}






nameUser.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        lastnameUser.focus()
    }
})

lastnameUser.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    bethdayUser.focus();
  }
});