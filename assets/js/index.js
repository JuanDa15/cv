const btn_switch = document.querySelector('#switch');

const btn_toggle = document.querySelector('#toggle');

const links = document.querySelector('.links');

btn_switch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  btn_switch.classList.toggle('active');
})

btn_toggle.addEventListener('click', ()=>{
  links.classList.toggle('hide');
})
