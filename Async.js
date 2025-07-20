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