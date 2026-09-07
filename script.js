const clock = document.querySelector('#clock');
function tick(){ clock.textContent = new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}).format(new Date())+' IST'; }
tick(); setInterval(tick,1000); document.querySelector('#year').textContent=new Date().getFullYear();

const buttons=document.querySelectorAll('.filters button'), projects=document.querySelectorAll('.project');
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;projects.forEach(project=>{project.classList.toggle('hidden',filter!=='all'&&!project.dataset.tags.includes(filter));});}));

document.querySelectorAll('.skill').forEach(item=>{let startX,startY,left,top;item.addEventListener('pointerdown',e=>{item.setPointerCapture(e.pointerId);startX=e.clientX;startY=e.clientY;left=item.offsetLeft;top=item.offsetTop;item.style.zIndex=3;});item.addEventListener('pointermove',e=>{if(startX===undefined)return;item.style.left=Math.max(0,Math.min(item.parentElement.clientWidth-item.offsetWidth,left+e.clientX-startX))+'px';item.style.top=Math.max(0,Math.min(item.parentElement.clientHeight-item.offsetHeight,top+e.clientY-startY))+'px';});item.addEventListener('pointerup',()=>{startX=undefined;item.style.zIndex='';});});
