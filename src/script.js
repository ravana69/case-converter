var n = 0;

txt.oninput = updateTxt

$('.tabBtn').on('click', (e)=>{
  n = Number(e.currentTarget.id.substr(-1));
  gsap.to('.tabBtn', {background:(i)=>{return 'rgba(125,140,255,'+((i==n)?1:0.5)+')'}, ease:'expo'})
  updateTxt()
})

gsap.set('.tabBtn', {background:(i)=>{return 'rgba(125,140,255,'+((i==n)?1:0.5)+')'}})

function updateTxt(){
  if (n==0) txt.value = txt.value.toUpperCase();
  if (n==1) txt.value = txt.value.replace(/\w\S*/g, (t)=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase());
  if (n==2) txt.value = txt.value.toLowerCase(); 
}