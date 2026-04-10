// MAX Mission Control — Live Clock
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/New_York'
    });
    const el = document.getElementById('headerTime');
    if (el) el.textContent = time + ' EDT';
}

updateTime();
setInterval(updateTime, 1000);
