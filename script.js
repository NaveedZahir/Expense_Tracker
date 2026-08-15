const apiUrl="http://localhost:3000/user/";
let loginform=document.getElementById("loginform")
let registerform=document.getElementById("registerform")
if(registerform){
    registerform.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const name=document.querySelector("#name").value 
        const email=document.querySelector("#email").value 
        const password=document.querySelector("#password").value 
        console.log(name,email,password)
        const res=await fetch(`${apiUrl}register`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,email,password})
        })
        const data= await res.json()
        if(res.ok){
          alert("Registaration sucessfull!!")
          window.location.href="login.html"
        }
        else{
         alert(data.message|| "Registration failed")
        }
    })
}
if(loginform){
    loginform.addEventListener("submit",async(e)=>{
        e.preventDefault();
        const email=document.getElementById("email").value 
        const password=document.getElementById("password").value 
        console.log(email,password)
        const res=await fetch(`${apiUrl}login`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        const data=await res.json()
        if(res.ok){
            localStorage.setItem("token",data.token)
            window.location.href="category.html"
        }
        else{
            alert("Login failed")
        }
    })
}