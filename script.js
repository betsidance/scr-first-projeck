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
const newDiv = document.querySelector(".newDiv")


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
    
    showUserWhisDiv()
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
/*
function perenosEnter(pole , next) {
    pole.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            next.focus()
        }

    })
}
perenosEnter(nameUser, lastnameUser)
perenosEnter(lastnameUser, birthdayUser)
*/

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



function deleteUser(nameUserHoDelite) { //
    const userDeliteIndexs = users.findIndex((d) => d.name.trim() === nameUserHoDelite.trim())
    console.log(userDeliteIndexs);
    if (userDeliteIndexs === -1) {
        console.log("Пользователь не найден");
        return
    }
    users.splice(userDeliteIndexs, 1)
    localStorage.setItem("users", JSON.stringify(users))
    hwoUserDelite.value = ""
    
    showUserWhisDiv()
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

   
    showUserWhisDiv()
     console.log("Пользователь удален");

}

buttonHwoDeliteFilter.addEventListener('click', () => { hwoUserDeliteFilter(nameHwoDelite.value, lastNameHwoDelite.value) })



function showUserWhisDiv() {
    newDiv.innerHTML = ""
    users.forEach(user => {
        const div = document.createElement("div")
        div.classList.add("showUserByDiv")
        const li = document.createElement("li")
        li.innerHTML = ` <div> Имя ${user.name} </div> 
        <div> Фамилия ${user.lastName} </div> 
        <div> День Рождения${user.birthday} </div> `;
        const button = document.createElement("button")
        button.textContent = "Удалить"
        button.addEventListener('click',() => {
            
            const indexs = users.indexOf(user)
            users.splice(indexs,1)

            localStorage.setItem("users", JSON.stringify(users))
            showUserWhisDiv()
          
        })
          const buttonChange = document.createElement("button");
        buttonChange.textContent = "Изменить";
        buttonChange.addEventListener('click', () => {
           const newDivChange = document.createElement("div")
            const newName = document.createElement("input")
            const newLastName = document.createElement("input");
            const newBihtday = document.createElement("input");
            newBihtday.type = "date"
            const newButtomChenge = document.createElement("button")
            newName.value = user.name
            newLastName.value = user.lastName
            newBihtday.value = user.birthday
            perenosCherezEnter([newName, newLastName, newBihtday])
            div.appendChild(newDivChange);
            newDivChange.appendChild(newName)
            newDivChange.appendChild(newLastName);
            newDivChange.appendChild(newBihtday);
            newDivChange.appendChild(newButtomChenge);
            newButtomChenge.textContent = "Изменить"
            newButtomChenge.addEventListener('click', () => {
                
                user.name = newName.value
                user.lastName = newLastName.value
                user.birthday = newBihtday.value;
                localStorage.setItem("users" , JSON.stringify(users))
               
                showUserWhisDiv()
                
                
            })
        })
        div.appendChild(li)
        div.appendChild(button)
        div.appendChild(buttonChange)
      
        newDiv.appendChild(div)



    });
}



function deliteUserInDiv() {
    
}





showUserWhisDiv()
