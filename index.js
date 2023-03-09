let circularText = " check out my work  check out my work "
let text = document.querySelector(".text")
text.innerHTML = circularText.split("").map((char,i)=>{
    return `<span style="transform:rotate(${(i * 9.5)}deg)">${char}</span>`
}).join("")

