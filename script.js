const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dot = document.querySelectorAll('.dot');
const ampm = $('.ampm');
const week = $('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    dot.forEach(d => {
        d.classList.toggle('invisible', showDot);
    });

    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const am_pm = h >= 12 ? 'PM' : 'AM';

    h = h % 12;
    h = h ? h : 12;

    hour.textContent = String(h).padStart(2, '0');
    min.textContent = String(m).padStart(2, '0');
    sec.textContent = String(s).padStart(2, '0');
    ampm.textContent = am_pm;

    Array.from(week.children).forEach(ele => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');
}

setInterval(update, 500);
