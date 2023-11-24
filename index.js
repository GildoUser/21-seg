const items = document.querySelectorAll(".texts-presentation-letter");

function smooth(){

}
function notSmooth(){
    
}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,1500))
}
const maxitens = items.length;

let currentItem = 0;
let flag = false;
setInterval(() => {
    
    
    items.forEach((item)=>{
        item.classList.remove("current-item")
    })
//se for iugal a 4
    if(currentItem == maxitens){
        flag = true;
        console.log('entrou',currentItem)
        currentItem = 2

        items[currentItem].scrollIntoView({
            inline:"start",
            behavior:"smooth"
            
        })


    }
// se for == 3
   // else if (currentItem == maxitens-1) {
    //    console.log('to aqui hein',currentItem)
     //   items[currentItem].scrollIntoView({
    //        inline:"start",
     //       behavior:"smooth"
     //   })
    

   // }

    else{
        console.log('indo',currentItem)
        items[currentItem].scrollIntoView({
            inline:"start",
            behavior:"smooth"
        })
    }

    

    console.log(currentItem)
    items[currentItem].classList.add("current-item");
    if(flag){
        currentItem = 0;
        items[currentItem].scrollIntoView({
            inline:"start",
            behavior:"auto"
            
        })
        flag = false
    }
    currentItem ++
    
}, 1550);