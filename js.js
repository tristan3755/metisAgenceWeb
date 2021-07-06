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