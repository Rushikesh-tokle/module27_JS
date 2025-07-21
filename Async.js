let async={
    need:"await",
    name:"Javascript",
    launch:2014
}

let str='{"name":"Rushikesh","roll":54,"age":20,"surname":"Reddy"}';
let jsObject=JSON.parse(str);
console.log(jsObject);

let jsonFormat=JSON.stringify(jsObject);
console.log(jsonFormat);

  let url="https://catfact.ninja/fact";
    fetch(url)
    .then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
       return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
    console.log(data.fact);
    })
    .catch((err)=>{
        console.log(err);
    });

    async function getFacts() {
        let res= await fetch(url);
        let data= await res.json();
        console.log(data.fact);
    }
    getFacts();