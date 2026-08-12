function addition() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    let answer = prompt(a + " + " + b + " = ?");
    
    if (Number(answer) === a + b) {
        alert("🎉 সঠিক উত্তর!");
    } else {
        alert("❌ ভুল! সঠিক উত্তর হলো " + (a + b));
    }
}

function subtraction() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    if (b > a) {
        let temp = a;
        a = b;
        b = temp;
    }

    let answer = prompt(a + " - " + b + " = ?");

    if (Number(answer) === a - b) {
        alert("🎉 সঠিক উত্তর!");
    } else {
        alert("❌ ভুল! সঠিক উত্তর হলো " + (a - b));
    }
}

function multiplication() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    let answer = prompt(a + " × " + b + " = ?");

    if (Number(answer) === a * b) {
        alert("🎉 সঠিক উত্তর!");
    } else {
        alert("❌ ভুল! সঠিক উত্তর হলো " + (a * b));
    }
}

function division() {
    let b = Math.floor(Math.random() * 9) + 1;
    let answerNumber = Math.floor(Math.random() * 9) + 1;
    let a = b * answerNumber;

    let answer = prompt(a + " ÷ " + b + " = ?");

    if (Number(answer) === answerNumber) {
        alert("🎉 সঠিক উত্তর!");
    } else {
        alert("❌ ভুল! সঠিক উত্তর হলো " + answerNumber);
    }
}

function quiz() {
    let questions = [
        ["2 + 3 = ?", "5"],
        ["5 - 2 = ?", "3"],
        ["3 × 2 = ?", "6"],
        ["8 ÷ 2 = ?", "4"],
        ["4 + 4 = ?", "8"]
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let answer = prompt("প্রশ্ন " + (i + 1) + ": " + questions[i][0]);

        if (answer === questions[i][1]) {
            score++;
        }
    }

    alert("🏆 তোমার Score: " + score + "/5");
            }
