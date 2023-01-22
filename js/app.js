let lenOfPassRange = document.querySelector(".lenOfPass input");
let thumb = document.querySelector(".lenOfPass .thumb");
let track = document.querySelector(".lenOfPass .track");
let lenNum = document.querySelector('#lenNum');
let lvl = document.querySelector("#lvl");
let co = document.querySelector(".co");
let pp = document.querySelector(".pp");

lenOfPassRange.oninput = function(e){
    let val = +e.target.value;

    lenNum.textContent = val

    track.style.width = `${6.5 * (val - 6)}%`;

    if(val >= 5 && val <= 10){
        lvl.textContent = "EASY";
    }else if(val >= 11 && val <= 15){
        lvl.textContent = "MEDIUM";
    }else if(val >= 16 && val <= 20){
        lvl.textContent = "HARD";
    }
}

co.addEventListener("click", (e)=>{
    navigator.clipboard.writeText(pp.textContent);
    console.log("Copyed")
});




const numbers = ["0","1","2","3","4","5","6","7","8","9"]

const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["!","@","#","$","%","^","&","*","(",")"];

let all = [upper, lower, numbers, symbols];

let chose = document.querySelectorAll(".aboutPass input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e)=>{
    let ch = [];
    chose.forEach((l)=>{
        ch.push(l.checked);
    })

    let x = []
    for(let i=0; i<ch.length; i++){
        if(ch[i] == true){
            x.push(i)
        }
    }


    if(x.length > 0){
        res = ""
        for(let i = 0; i<+lenNum.textContent; i++){
            let y = all[x[Math.floor(Math.random() * x.length)]];
            res += y[Math.floor(Math.random() * y.length)]
        }
        pp.textContent = res;
    }

})

chose.forEach((l)=>{
    l.addEventListener('click', (e)=>{
        let ch = [];
        chose.forEach((l)=>{
            ch.push(l.checked);
        })

        let x = []
        for(let i=0; i<ch.length; i++){
            if(ch[i] == true){
                x.push(i)
            }
        }

        if(x.length == 1){
            lenNum.textContent = "5";
            lenOfPassRange.value = 5;
            track.style.width = `0%`;
            lvl.textContent = "EASY";
        }else if(x.length == 2){
            lenNum.textContent = "10";
            lenOfPassRange.value = 10;
            track.style.width = `${6.5 * (10 - 6)}%`;
            lvl.textContent = "MEDIUM";
        }else if(x.length == 3){
            lenNum.textContent = "15";
            lenOfPassRange.value = 15;
            track.style.width = `${6.5 * (15 - 6)}%`;
            lvl.textContent = "MEDIUM";
        }else if(x.length == 4){
            lenNum.textContent = "20";
            lenOfPassRange.value = 20;
            track.style.width = `${6.5 * (20 - 6)}%`;
            lvl.textContent = "HARD";
        }
    })
})

