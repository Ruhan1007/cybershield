function checkPassword() {

    let password =
        document.getElementById(
            "password-input"
        ).value;

    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    let strengthBar =
        document.getElementById(
            "strength-bar"
        );

    let strengthText =
        document.getElementById(
            "strength-text"
        );

    if (score === 1) {

        strengthBar.style.width = "20%";

        strengthBar.style.background =
            "red";

        strengthText.innerText =
            "Very Weak";

    }

    else if (score === 2) {

        strengthBar.style.width = "40%";

        strengthBar.style.background =
            "orange";

        strengthText.innerText =
            "Weak";

    }

    else if (score === 3) {

        strengthBar.style.width = "60%";

        strengthBar.style.background =
            "yellow";

        strengthText.innerText =
            "Moderate";

    }

    else if (score === 4) {

        strengthBar.style.width = "80%";

        strengthBar.style.background =
            "lightgreen";

        strengthText.innerText =
            "Strong";

    }

    else if (score === 5) {

        strengthBar.style.width = "100%";

        strengthBar.style.background =
            "green";

        strengthText.innerText =
            "Very Strong";

    }
}

function bruteForce() {

    let attempts =
        Math.floor(
            Math.random() * 100000
        );

    document.getElementById(
        "brute-result"
    ).innerText =
        "Password cracked after " +
        attempts +
        " attempts.";
}

setInterval(function () {

    let score =
        Math.floor(
            Math.random() * 100
        );

    document.getElementById(
        "security-score"
    ).innerText =
        score + "%";

    if (score > 70) {

        document.getElementById(
            "threat-level"
        ).innerText =
            "Low";

    }

    else if (score > 40) {

        document.getElementById(
            "threat-level"
        ).innerText =
            "Medium";

    }

    else {

        document.getElementById(
            "threat-level"
        ).innerText =
            "High";
    }

}, 5000);