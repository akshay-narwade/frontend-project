function checkEligibility() {
    const educationLevels = document.getElementsByName('education');
    let selectedLevel;
    for (const level of educationLevels) {
        if (level.checked) {
            selectedLevel = level.value;
            break;
        }
    }

    let resultText;
    switch (selectedLevel) {
        case 'High school':
        case 'UG':
            resultText = 'Eligible for the job';
            break;
        default:
            resultText = 'Not eligible for the job';
            break;
    }

    document.getElementById('result').innerText = resultText;
}
