document.getElementById("resultForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let matricNumber = document.getElementById("matricNumber").value;
    let testScore = parseInt(document.getElementById("testScore").value);
    let examScore = parseInt(document.getElementById("examScore").value);

    let totalScore = testScore + examScore;
    let grade;

    if (totalScore >= 70) grade = "A";
    else if (totalScore >= 60) grade = "B";
    else if (totalScore >= 50) grade = "C";
    else if (totalScore >= 45) grade = "D";
    else grade = "F";

    let table = document.getElementById("resultTable");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = studentName;
    row.insertCell(1).innerHTML = matricNumber;
    row.insertCell(2).innerHTML = totalScore;
    row.insertCell(3).innerHTML = grade;

    document.getElementById("resultForm").reset();
});
