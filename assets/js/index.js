const btn_switch = document.querySelector('#switch');

const btn_toggle = document.querySelector('#toggle');

const links = document.querySelector('.links');

const icon = document.querySelector('#toggle i');

btn_switch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  btn_switch.classList.toggle('active');
})

btn_toggle.addEventListener('click', ()=>{
  links.classList.toggle('hide');
  btn_toggle.classList.toggle('toggle_animation');

  if(icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }else{
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
})