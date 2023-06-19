import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
 
let circularText = " check out my work  check out my work "
let text = document.querySelector(".text")
text.innerHTML = circularText.split("").map((char,i)=>{
    return `<span style="transform:rotate(${(i * 9.5)}deg)">${char}</span>`
}).join("")

 
const firebaseConfig = {
  apiKey: "AIzaSyBcoHMkWW0UdL2_B2XNFojizrUg6IU8w0U",
  authDomain: "portfolio-cf063.firebaseapp.com",
  projectId: "portfolio-cf063",
  storageBucket: "portfolio-cf063.appspot.com",
  databaseURL: "https://portfolio-cf063-default-rtdb.firebaseio.com/",
  messagingSenderId: "446490667688",
  appId: "1:446490667688:web:b34d1386eb88d4915db09d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
 

let form = document.getElementById("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let message = form.message.value
    console.log(name,email,message) 
    const newKey = push(child(ref(database), 'messages')).key;
    const updates = {};
    updates['/messages/' + newKey] = {name,email,message};
    update(ref(database),updates)
    form.name.value = ""
    form.email.value = ""
    form.message.value = ""
    let tooltip = document.getElementById("tooltip")
    tooltip.style.display = "block"
    setTimeout(()=>{
        tooltip.style.display = "none"  
    },2000)
})