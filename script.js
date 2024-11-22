document.getElementById('calculateBtn').addEventListener('click', function () {
    console.log("Button clicked");
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Debug: Log values to console
    console.log('Height:', height);
    console.log('Weight:', weight);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI in the input field
    document.getElementById('bmiResult').value = bmi.toFixed(2);

    console.log('Calculated BMI:', bmi); // Debug
});
