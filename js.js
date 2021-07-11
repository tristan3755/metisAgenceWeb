let slider=document.querySelector('.slider')
let taille=slider.clientWidth
console.log(taille)
let droite=document.querySelector('.droite')
let gauche=document.querySelector('.gauche')
let compteur=0
if(compteur==0){
  gauche.style.opacity="0"
  }
droite.addEventListener('click',()=>{
  if(compteur<2){
  compteur++
  console.log(compteur)
  slider.scrollTo(taille*compteur,0)
  gauche.style.opacity='1'
}
if(compteur==2){
droite.style.opacity="0"
}
})
gauche.addEventListener('click',()=>{
  if(compteur>0){
  compteur--
  console.log(compteur)
  slider.scrollTo(taille*compteur,0)
  droite.style.opacity='1'
  } 
  if(compteur==0){
    gauche.style.opacity="0"
    }
})
/*menu*/

let btnOn=document.querySelector('.btnMenu')
let menu=document.getElementById('menu')

btnOn.addEventListener('click',()=>{
  menu.style.display='flex'
})

let btnOff=document.querySelector('.btnMenu2')
btnOff.addEventListener('click',()=>{
  menu.style.display='none'
})

let mesBtnMenus=document.querySelector('.menuA a')
mesBtnMenus.addEventListener('click',()=>{
console.log('click')
menu.style.display='none'
})
let mesBtnMenus2=document.querySelector('.menuA a:nth-child(2)')
mesBtnMenus2.addEventListener('click',()=>{
console.log('click')
menu.style.display='none'
})
let mesBtnMenus3=document.querySelector('.menuA a:nth-child(3)')
mesBtnMenus3.addEventListener('click',()=>{
console.log('click')
menu.style.display='none'
})
/*interception*/
if(window.matchMedia("(min-width:600px)").matches){
let header=document.getElementById('header')

let observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{
console.log(entry.isIntersecting)
console.log(entry.intersectionRatio)
if(entry.intersectionRatio){
  console.log('j \'y suis' )
  header.style.right='50px'
  btnOn.style.right='110px'
}else{
  btnOn.style.right='60px'
  header.style.right='0px'
}
})
});

let target = document.getElementById('prestation');
observer.observe(target);

let divGrid=document.querySelector('#grid article:nth-child(3) div:nth-child(2)')

let a1=document.querySelector('#header a')
let a2=document.querySelector('#header a:nth-child(5)')
let i1=document.querySelector('#header i')
let i2=document.querySelector('#header i:nth-child(3)')
let i3=document.querySelector('#header i:nth-child(4)')

let observer1 = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
  console.log(entry.isIntersecting)
  console.log(entry.intersectionRatio)
  if(entry.intersectionRatio){
    console.log('j \'y suis2' )
    a1.style.color="#f53b57"
    a2.style.color="#f53b57"
    i1.style.color='#f53b57'
    i2.style.color='#f53b57'
    i3.style.color='#f53b57'
  }else{
    a1.style.color="white"
    a2.style.color="white"
    i1.style.color='white'
    i2.style.color='white'
    i3.style.color='white'
  }
  })
  });
  
  let target1 = divGrid
  observer1.observe(target1);
}

let mesArticles=document.querySelector('#grid article')

mesArticles.addEventListener('click',()=>{
console.log('yo booby')
})
let mesArticles2=document.querySelector('#grid article:nth-child(2)')

mesArticles2.addEventListener('click',()=>{
console.log('yo booby2')
})

let mesArticles3=document.querySelector('#grid article:nth-child(3)')

mesArticles3.addEventListener('click',()=>{
console.log('yo booby3')
})


let observerArticles = new IntersectionObserver((entries,observer)=>{

  entries.forEach((entry)=>{
  console.log(entry.isIntersecting)
  console.log(entry.intersectionRatio)
  if(entry.intersectionRatio){
    console.log('j \'y suis article1' )
    mesArticles.style.opacity="1"
    mesArticles.style.transform='translateY(0)'
    observer.disconnect()
  }
  })
  });
  
  let targetArticle = mesArticles
  observerArticles.observe(targetArticle);

  let observerArticles1 = new IntersectionObserver((entries,observer)=>{

    entries.forEach((entry)=>{
    console.log(entry.isIntersecting)
    console.log(entry.intersectionRatio)
    if(entry.intersectionRatio){
      console.log('j \'y suis article2' )
      mesArticles2.style.opacity="1"
      mesArticles2.style.transform='translateY(0)'
      observer.disconnect()
    }
    })
    });
    
    let targetArticle1 = mesArticles2
    observerArticles1.observe(targetArticle1);

    let observerArticles2 = new IntersectionObserver((entries,observer)=>{

      entries.forEach((entry)=>{
      console.log(entry.isIntersecting)
      console.log(entry.intersectionRatio)
      if(entry.intersectionRatio){
        console.log('j \'y suis article3' )
        mesArticles3.style.opacity="1"
        mesArticles3.style.transform='translateY(0)'
        observer.disconnect()
      }
      })
      });
      
      let targetArticle2 = mesArticles3
      observerArticles2.observe(targetArticle2);
     
/*span observer*/
let blocTechno=document.getElementById('techno')
let spanTechno=document.querySelector('.spanTechno')
let observerTechno=new IntersectionObserver((entries,observer)=>{

  entries.forEach((entry)=>{
  if(entry.intersectionRatio>=0.5){
spanTechno.style.display="flex"
    observer.disconnect()
  }
  })
  },{threshold: 0.5});

  let targetspan = blocTechno
  observerTechno.observe(targetspan);

/*bg*/

monBg=document.getElementById('imgBack')

window.addEventListener('scroll',()=>{

    let valeur=window.scrollY/40

    monBg.style.backgroundPositionY=valeur*-2 + "px"

})
/*technos*/
 let techno1=document.querySelector('.techno1')

 console.log(spanTechno.clientHeight)

