
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>navLinks.classList.toggle('open'));

const current = location.pathname.split('/').pop().toLowerCase() || 'main.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  const href=(a.getAttribute('href')||'').toLowerCase();
  if(href===current) a.classList.add('active');
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('form.demo-form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const notice=form.querySelector('.notice');
    if(notice){notice.style.display='block'; notice.textContent='Thank you. Your message has been recorded for this front-end demo.';}
    form.reset();
  });
});

const search=document.querySelector('#carSearch');
if(search){
  const cards=[...document.querySelectorAll('[data-car]')];
  search.addEventListener('input',()=>{
    const q=search.value.toLowerCase().trim();
    cards.forEach(card=>card.style.display=card.dataset.car.includes(q)?'':'none');
  });
}
