let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let p = document.querySelector("p");
    p.innerText= await call();
   
});
// let url = "https://catfact.ninja/fact";
let url = "https://icanhazdadjoke.com/";
// let main = JSON.stringify(Respoonse);
async function call(result){
  try{
    const configer = { headers: { Accept: "Application/JSON"}}; // response mde json data ala tar
    let res = await axios.get(url,configer );
    console.log(res);
    return res.data.joke;
  }catch(e){
    return "error is"
  }
}
call();