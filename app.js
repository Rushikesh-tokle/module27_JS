function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans=two()+one();
    console.log(ans);
}

let h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
    h1.style.color=color;
    if(nextColorChange)nextColorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("blue",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("orange",1000);
            });
        });
    });
});

///javascript promise

 function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let networkSpeed=Math.floor(Math.random()*10)+1;

        if(networkSpeed>4){
            resolve("Data was saved to database");
        }else{
            reject("Data was not saved");
        }
    });
}

saveToDb("apnaCollege")
.then(()=>{
    console.log("Request Fullfilled Successfully");
    saveToDb("dusroKaCollege")
    .then(()=>{
        console.log("Request data Filled Successfully in Promise 2");
    })
})
.catch(()=>{
    console.log("Request got Rejected");
})