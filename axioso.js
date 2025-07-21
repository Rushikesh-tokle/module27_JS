//  let url="https://catfact.ninja/fact";

//  async function getFact(){
//     try{
//         h1=document.querySelector("h1");
//         let res= await axios.get(url);
//         let fct=res.data.fact;
//         console.log(fct);
//        h1.innerHTML=fct;
//     }catch(err){
//         console.log(err);
//     }
//  }
//  getFact();


 let url2="https://icanhazdadjoke.com/";

 async function getJoke(){
  const config={headers:{Accept:"application/json"}}

  let rep=await axios.get(url2,config);
  console.log(rep.data);
 }
 getJoke();