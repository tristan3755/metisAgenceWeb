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