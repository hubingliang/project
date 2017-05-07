hoverbox.addEventListener('mousemove',function(e){

  let width = hoverbox.getBoundingClientRect().width
  let height = hoverbox.getBoundingClientRect().height
  let Xcenter = hoverbox.offsetLeft + width /2
  let Ycenter = hoverbox.offsetTop + height /2
  let mouseX = e.clientX - Xcenter
  let mouseY = e.clientY - Ycenter
  

  
  let Xpercent = mouseX / width/2
  let Ypercent = mouseY / height/2
  
  let xDeg = Xpercent * 50
  let yDeg = Ypercent * 50
  hoverbanner.style.transform = `translateZ(-100px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

box.addEventListener('onmouseout',function(e){
  hoverbanner.style.transform = 'none'
  hoverbanner.style.perspective= '0px'
  console.log('1')
})