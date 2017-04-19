box.addEventListener('mousemove',function(e){
  console.log(e.clientX,e.clientY)

  let width = box.getBoundingClientRect().width
  let height = box.getBoundingClientRect().height
  let Xcenter = box.offsetLeft + width /2
  let Ycenter = box.offsetTop + height /2
  let mouseX = e.clientX - Xcenter
  let mouseY = e.clientY - Ycenter
  

  
  let Xpercent = mouseX / width/2
  let Ypercent = mouseY / height/2
  
  let xDeg = Xpercent * 50
  let yDeg = Ypercent * 50
  banner.style.transform = `translateZ(-100px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
  
  
  
})