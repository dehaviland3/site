'use strict'; {

    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    btn.addEventListener('click', () => {
        // const results = ['大吉', '超大吉', 'Best Luck', 'メチャ吉'];

        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];
        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉';
        } else if (n >= 0.05 && n < 0.5) {
            btn.textContent = 'メチャ吉';
        } else if (n > 0.5 && n < 0.8) {
            btn.textContent = 'best luck';
        } else {
            btn.textContent = '超大吉';
        }
        document.getElementById('btn').style.fontSize = "28px";

    });
    btn2.addEventListener('click', () => {
        const n = Math.random();
        if (n < 0.05) {
            btn2.textContent = '大吉';
        } else if (n >= 0.05 && n < 0.5) {
            btn2.textContent = 'メチャ吉';
        } else if (n > 0.5 && n < 0.8) {
            btn2.textContent = 'best luck';
        } else {
            btn2.textContent = '超大吉';
        }
        document.getElementById('btn2').style.fontSize = "28px";

    });
    btn3.addEventListener('click', () => {
        const n = Math.random();
        if (n < 0.05) {
            btn3.textContent = '大吉';
        } else if (n >= 0.05 && n < 0.5) {
            btn3.textContent = 'メチャ吉';
        } else if (n > 0.5 && n < 0.8) {
            btn3.textContent = 'best luck';
        } else {
            btn3.textContent = '超大吉';
        }
        document.getElementById('btn3').style.fontSize = "28px";

    });



}