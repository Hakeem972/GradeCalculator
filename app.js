function calculateResult() {
    let userNumber = document.getElementById('number').value
    let calculatedPercentage = userNumber / 750 * 100
    console.log(calculatedPercentage)

    if (calculatedPercentage >= 80) {
        alert("Congrats You got A+ Grade")
    }

    else if (calculatedPercentage >= 70) {
        alert("Congrats You got A Grade")
    }

    else if (calculatedPercentage >= 60) {
        alert("Congrats You got B Grade")
    }

    else if (calculatedPercentage >= 50) {
        alert("Congrats You got C Grade")
    }

    else if (calculatedPercentage >= 40){
        alert("Ooops! You are Fail")
            }

            else {
                alert ("Please enter a valid Numbers")
            }
}