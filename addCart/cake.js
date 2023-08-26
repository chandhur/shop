var shop=document.getElementById("shop1");

let busket= [] 

let shopItem=[

    {
        id:"dftete",
        name:"Vennaila Cake",
        type:"With its outstanding vanilla flavor, pillowy soft crumb, and creamy vanilla buttercream",
        rate: 200,
        img:"img1.jpg"


    },
    {
        id:"dftetee",
        name:"PineApple Cake",
        type:"With its outstanding pineapple flavor, pillowy soft crumb, and creamy pineapple buttercream",
        rate:700,
        img:"img2.jpg"

    },
    {
        id:"dftetew",
        name:"Ice cake premium",
        type:"With its outstanding ice cake flavor, pillowy soft crumb, and creamy ice cake buttercream",
        rate:800,
        img:"img3.jpg"

    }
    

    
  
]
    
let duplicate=()=>{

    return (shop.innerHTML = shopItem .map((el)=>{
       let {id, name,type,rate,img}=el;

        return `<div class="align-self-start"  id="im2">
        <div class="item shadow p-3 mb-5 bg-white rounded" id="name-${id}" >              
        <img   class="p1" src=${img}>
        <div class="deatails">
        <h3>${name}</h3>
        <p>${type}</p>
        </div>
        <div class="price">
       <h2>Rs${rate}</h2>
       </div>
       <div class="button">
         <i  onclick="increment(${id})"class="bi bi-plus"></i>
         <div id="${id}" class="quenty"> 0 </div>
         <i  onclick="decremeat(${id})" class="bi bi-dash"></i> 
         </div>
         </div>`
         
    }).join("") );
           
 
};
duplicate();

var increment=(id)=>{


    // console.log("+")
    let selet=id;

    // console.log(id)


    let search=busket.find((ql)=>ql.id === selet.id); 

    if(search ===undefined)
    {
        busket.push({
            id:selet.id,
            item:1,
        });

    }
    else
    {
      search.item+=1;
    }

    localStorage.setItem("name",busket);
    
    // console.log(selet.id)
    // busket.push({
    //     id:selet.id,ss
    //     item:1
    // })
    //    console.log(busket);
   
    update(selet.id)
   
};
 
var decremeat=(id)=>{
 // console.log("-")ss
    let selet=id
   
    let search=busket.find((ql)=>ql.id===selet.id); 

    if(search.item === 0) return;
    // {
    //     busket.push({
    //         id:selet.id,
    //         item:1
    //     })
    // the return - value this use in this funcation
    // }
    else
    {
      search.item-=1; 
    }
    // console.log(busket)
   
    update(selet.id)
    
   
}



// the 0 to sum value
let update=(id)=>{
    let search=busket.find((x)=>x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    call();
};

let call=()=>

{
    let cartIcon=document.getElementById("cart");

    // console.log(busket.map((el) =>el.item).reduce((el,al)=>el+al,0))
   cartIcon.innerHTML= busket.map((el) =>el.item).reduce((el,al)=>el+al,0)
};

//  --------------------------local storge----------------------------------




