const nameUser = document.querySelector(".nameUser");
const lastnameUser = document.querySelector(".lastnameUser");
const birthdayUser = document.querySelector(".birthdayUser");
const sentIbJs = document.querySelector(".sentIbJs");
const userList = document.querySelector(".newUl");
const hwoUserDelite = document.querySelector(".deliteUser");
const butDEeleteUser = document.querySelector(".butDeliteUser");   
const nameHwoDelite = document.querySelector(".deliteUserName");
const lastNameHwoDelite = document.querySelector(".deliteUserLastName");
const buttonHwoDeliteFilter = document.querySelector(".butDeliteUserFilter");


const users = JSON.parse(localStorage.getItem("users")) || [];

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

function perenosCherezEnter(massiv) {
    for (let i = 0; i < massiv.length-1; i++){
        let newFocys = massiv[i+1]
        
        massiv[i].addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                newFocys.focus()
            }
        })
    }
}
perenosCherezEnter([nameUser, lastnameUser, birthdayUser])
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


function hwoUserDeliteFilter(name, lastName) {
    const userDelite = users.filter(user=> user.name .trim()=== name.trim() && user.lastName.trim()===lastName.trim())
    console.log(userDelite);
    
    if (userDelite.length === 0  ) {
        console.log("Пользователь не найден");
        return
    }
    const indexsUser = users.indexOf(userDelite[0])
    users.splice(indexsUser,1)
    localStorage.setItem('users', JSON.stringify(users))
    nameHwoDelite.value = ""
    lastNameHwoDelite.value= ""

    showUser()
     console.log("Пользователь удален");

}

buttonHwoDeliteFilter.addEventListener('click', ()=> {hwoUserDeliteFilter(nameHwoDelite.value, lastNameHwoDelite.value)})



showUser()
