let login = document.querySelector("login");
login.addEventListener("click",()=>{
    console.log("clicked");
    fetch('http://localhost:3000/user')
    .then(response => response.text())
    .then(data => console.log(data));
})