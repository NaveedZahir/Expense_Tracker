 const token=localStorage.getItem("token")
   async function getALl(){
    const res= await fetch(`http://localhost:3000/expense/topfive?month=6&year=2026`, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }

})
const data=await res.json()
console.log(data)
   }
   getALl()