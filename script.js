function updateCountdown() {
    const eventDate = new Date("2025-04-27T19:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `あと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    } else {
        document.getElementById("countdown").innerText = "🎉 生誕祭が始まりました！";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();