function calculate() {
    let html = document.querySelector('#html').value;
    let css = document.querySelector('#css').value;
    let javascript = document.querySelector('#javascript').value;
    let react = document.querySelector('#react').value;
    let node = document.querySelector('#node').value;

    let obtainedMarks = +html + +css + +javascript + +react + +node;
    let totalMarks = 500;
    let percentage = obtainedMarks / totalMarks * 100;

    let showPercentage = document.querySelector('#showPercentage');
    let showObtaimMarks = document.querySelector('#showObtaimMarks');
    let showGrade = document.querySelector('#showGrade');

    if (percentage >= 80 && percentage <= 100) {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Your Grade is A${"<sup>+</sup>"}`;
    } else if (percentage >= 70 && percentage < 80) {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Your Grade is A`;
    } else if (percentage >= 60 && percentage < 70) {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Your Grade is B`;
    } else if (percentage >= 50 && percentage < 60) {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Your Grade is C`;
    } else if (percentage >= 40 && percentage < 50) {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Your Grade is C`;
    } else {
        showPercentage.innerHTML = `Your Percentage is ${percentage}%`;
        showObtaimMarks.innerHTML = `Your Total Marks is ${obtainedMarks}`;
        showGrade.innerHTML = `Fail`;
    }

}