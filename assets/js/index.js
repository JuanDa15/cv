const btn_switch = document.querySelector('#switch');

btn_switch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  btn_switch.classList.toggle('active');
})