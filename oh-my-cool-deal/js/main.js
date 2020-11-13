'use strict'; {

    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const results = ['大吉', '超大吉', 'Best Luck', 'メチャ吉'];

        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
        // // btn.textContent = results[Math.floor(Math.random() * results.length)];
        // const n = Math.random();
        // // if (n < 0.05) {
        //     btn.textContent = '大吉';
        // } else if (n < 0.2) {
        //     btn.textContent = '中吉';
        // } else {
        //     btn.textContent = '凶';
        // }
        document.getElementById('btn').style.fontSize = "28px";

    });



}