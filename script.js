const nameUser = document.querySelector(".nameUser");
const lastnameUser = document.querySelector(".lastnameUser");
const birthdayUser = document.querySelector(".birthdayUser");
const sentIbJs = document.querySelector(".sentIbJs");
const userList = document.querySelector(".newUl");
const hwoUserDelite = document.querySelector(".deliteUser");
const butDEeleteUser = document.querySelector(".butDeliteUser");   


let users = []

users = JSON.parse(localStorage.getItem("users")) || [];

sentIbJs.addEventListener('click', addUser)
 
function addUser() {
     if(!proverkaInput()) return
      const user = {
            name: nameUser.value,
            lastName: lastnameUser.value,
            birthday: birthdayUser.value
      }
     users.push(user)
     localStorage.setItem("users", JSON.stringify(users))
     showUser();
     cleanInput()
     }

function showUser() {
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `  <div> Имя: ${user.name}</div> 
        <div>   Фамилия: ${user.lastName}</div> 
      <div>  День рождения: ${user.birthday}</div> `;
        userList.appendChild(li);
    })
}

function cleanInput() {
  nameUser.value = "";
  lastnameUser.value = "";
  birthdayUser.value = "";
}

function proverkaInput() {
    if (!nameUser.value ||
        !lastnameUser.value ||
        !birthdayUser.value) {
        alert("Заполони поля")
        return false
    }
    return true
}

function perenosEnter(pole , next) {
    pole.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            next.focus()
        }

    })
}
perenosEnter(nameUser, lastnameUser)
perenosEnter(lastnameUser, birthdayUser)
console.log(users);

function deleteUser(nameUserHoDelite) {
    const userDeliteIndexs = users.findIndex((d) => d.name.trim() === nameUserHoDelite.trim())
    console.log(userDeliteIndexs);
    if (userDeliteIndexs === -1) {
        console.log("Пользователь не найден");
        return
    }
    users.splice(userDeliteIndexs, 1)
    localStorage.setItem("users", JSON.stringify(users))
    hwoUserDelite.value = ""
    showUser()
    console.log("Пользователь удален");
  
}
butDEeleteUser.addEventListener('click', () => { deleteUser(hwoUserDelite.value) })


showUser()
