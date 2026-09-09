
const btn = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');
if (btn && links) {
  btn.addEventListener('click', () => {
    const open = links.dataset.open === '1';
    links.dataset.open = open ? '0' : '1';
    links.style.display = open ? 'none' : 'flex';
    if (!open) Object.assign(links.style,{
      position:'absolute', top:'70px', left:'0', right:'0',
      background:'#102b43', padding:'18px 5vw', flexDirection:'column',
      alignItems:'flex-start', borderTop:'1px solid rgba(255,255,255,.08)'
    });
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
