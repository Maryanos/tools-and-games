document.getElementById("btn-submit").addEventListener("click", function() {
    let weightKg = document.getElementById("kg").value
    let heightCm = document.getElementById("cm").value
    let heightFeet = document.getElementById("feet").value
    let heightInch = document.getElementById("inch").value
    let weightStone = document.getElementById("stone").value
    let weightPound = document.getElementById("pound").value
    let feetInchToCm = (heightFeet * 30.48) + (heightInch * 2.54);
    let stonePoundToKg = (weightStone * 6.35029) + (weightPound * 0.453592);
    let bmi = weightKg / (heightCm / 100) ** 2 || stonePoundToKg / (feetInchToCm / 100) ** 2;
    let bmiRouded = bmi.toFixed(1);

    if (isNaN(bmi) || !isFinite(bmi)) {
        document.getElementById("description").innerHTML = "<span class='danger'>Incorrect Entry! Please correct your input.</span>";
    }
    else {
        if (bmi < 18.5) {
            document.getElementById("result").innerHTML = "Your BMI is: " + "<span class='bmi-result'>" + bmiRouded + "</span>";
            document.getElementById("description").innerHTML = "<span class='danger'>You are underweight</span>";
        }
        else if (bmi < 24.9) {
            document.getElementById("result").innerHTML = "Your BMI is: " + "<span class='bmi-result'>" + bmiRouded + "</span>";
            document.getElementById("description").innerHTML = "You have a normal weight.";
        }
        else if (bmi <= 29.9) {
            document.getElementById("result").innerHTML = "Your BMI is: " + "<span class='bmi-result'>" + bmiRouded + "</span>";
            document.getElementById("description").innerHTML = "You are slightly overweight.";
        }
        else if (bmi < 39.9) {
            document.getElementById("result").innerHTML = "Your BMI is: " + "<span class='bmi-result'>" + bmiRouded + "</span>";
            document.getElementById("description").innerHTML = "You are obese.";
        }
        else {
            document.getElementById("result").innerHTML = "Your BMI is: " + "<span class='bmi-result'>" + bmiRouded + "</span>";
            document.getElementById("description").innerHTML = "<span class='danger'>You are clinically obese.</span>";
        }
    }
});

document.getElementById("metric-switch").addEventListener("click", function() {
    let imperialSwitch = document.getElementById("imperial-switch");
    let metricSwitch = document.getElementById("metric-switch");
    let imperialInput = document.getElementById("imperial-input");
    let metricInput = document.getElementById("metric-input");

    imperialSwitch.classList.remove("hide");
    metricInput.classList.remove("hide");
    metricSwitch.classList.add("hide");
    imperialInput.classList.add("hide");
})

document.getElementById("imperial-switch").addEventListener("click", function() {
    let imperialSwitch = document.getElementById("imperial-switch");
    let metricSwitch = document.getElementById("metric-switch");
    let imperialInput = document.getElementById("imperial-input");
    let metricInput = document.getElementById("metric-input");

    imperialSwitch.classList.add("hide");
    metricInput.classList.add("hide");
    metricSwitch.classList.remove("hide");
    imperialInput.classList.remove("hide");
})

document.getElementById("btn-refresh").addEventListener("click", function() {
    location.reload();
})




