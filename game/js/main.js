'use strict';



{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0;
    };
    const words = [
        'uskw', 'uskw', 'uskw', 'uskw', 'uskw', 'uskw', 'uskw', 'uskw', 'uskw', 'uskw',
    ]
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');


    document.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }
        isPlaying = true;
        startTime = Date.now();
        setWord();
    });
    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            return;
        }

        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);
        if (loc === word.length) {
            if (words.length === 0) {
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent = `Finished! ${elapsedTime} seconds!`;

                return;
            }
            setWord();
        }
    });
}


//クイズ
{

    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([
        { q: 'アマゾ', c: ['ポロロッカ', 'パロロッカ', 'アマゾン・ハイウェー'] },
        { q: '2の8乗は？', c: ['256', '64', '1024'] },
        { q: '次のうち、最初にリリースされた言語は？', c: ['Python', 'JavaScript', 'HTML'] },
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered) {
            return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz() {
        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.className = 'disabled'
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);

        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = 'Show Score';
        }
    }

    setQuiz();


    btn.addEventListener('click', () => {

        if (btn.classList.contains('disabled')) {

            return;
        }
        btn.classList.add('disabled');

        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');

        } else {

            currentNum++;
            setQuiz();
        }
    });

    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function countUp() {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent = `${m}:${s}.${ms}`;

        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }

    function setButtonStateInitial() {

        start.disabled = false;
        stop.disabled = true;
        reset.disabled = true;

    }

    function setButtonStateRunning() {
        start.disabled = true;
        stop.disabled = false;
        reset.disabled = true;
    }

    function setButtonStateStopped() {
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = false;
    }

    setButtonStateInitial();
    start.addEventListener('click', () => {
        btn.classList.remove('disabled');
        setButtonStateRunning();
        startTime = Date.now();
        countUp();
    });
    stop.addEventListener('click', () => {
        setButtonStateStopped();
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    });
    reset.addEventListener('click', () => {
        setButtonStateInitial();
        timer.textContent = '00:00.000';
        elapsedTime = 0;

    });

}