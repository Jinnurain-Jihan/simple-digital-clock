// +,-,*,/,%

// let alo=120;
// let law=400;
// let potol=160;

// let total=alo+law+potol;

// console.log(`
//  alo ar dam   =${alo} taka
//  law ar dam   =${law} taka
//  potol ar dam =${potol} taka
// --------------------------------
//  total cost   =${total} taka

//         answer:${total} taka

// `);

let seconds=document.getElementById("seconds");
let minutes=document.getElementById("minutes");
let hours=document.getElementById("hours");
let ampm=document.getElementById("ampm");

setInterval(clock,1000);

function clock(){
    let date=new Date();
    let s=date.getSeconds();
    let m=date.getMinutes();
    let h=date.getHours();

    // let box=(h>=12) ?"pm" :"am"

    
    if(h>=12){
        ampm.innerHTML="pm";
    }else{
        ampm.innerHTML="am";
    }
    if(h>12){
        h=h-12;
    }

   

    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;

    seconds.innerHTML=s;
    minutes.innerHTML=m;
    hours.innerHTML=h;
    // ampm.innerHTML=box;
    
    

}