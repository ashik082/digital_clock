const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dot = document.querySelectorAll('.dot');
const ampm = $('.ampm');
const week = $('.week');
const day = $('.day');
const month = $('.month');
const year = $('.year');
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
    day.textContent = String(now.getDate()).padStart(2, '0');
    month.textContent = String(now.getMonth() + 1).padStart(2, '0');
    year.textContent = now.getFullYear();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const todayName = days[now.getDay()];
    Array.from(week.children).forEach(dayEl => {
        dayEl.classList.toggle('active', dayEl.textContent === todayName);
    });
}
setInterval(update, 500);
