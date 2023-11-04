document.addEventListener("DOMContentLoaded", function () {
    const percentInput = document.getElementById("input-percent");
    const result = document.getElementById("result");
    const gradeResult = document.getElementById("grade");

    percentInput.addEventListener("input", function () {
        let percent = parseFloat(percentInput.value);

        // Ensure the input is not greater than 100
        if (!isNaN(percent) && percent > 100) {
            percentInput.value = "100";
            percent = 100;
        }

        if (isNaN(percent)) {
            gradeResult.textContent = "Invalid input";
        } else {
            if (percent >= 80) {
                gradeResult.textContent = "A+";
            } else if (percent >= 70) {
                gradeResult.textContent = "A";
            } else if (percent >= 60) {
                gradeResult.textContent = "B";
            } else if (percent >= 50) {
                gradeResult.textContent = "C";
            } else {
                gradeResult.textContent = "F";
            }
        }

        result.style.display = "block";
    });
});
