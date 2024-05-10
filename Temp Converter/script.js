function convertTemperature() {
    const inputDegrees = parseFloat(document.getElementById('inputDegrees').value);
    const inputScale = document.getElementById('inputScale').value;

    let celsius, fahrenheit, kelvin;

    switch (inputScale) {
        case 'celsius':
            celsius = inputDegrees;
            fahrenheit = celsiusToFahrenheit(celsius);
            kelvin = celsiusToKelvin(celsius);
            break;
        case 'fahrenheit':
            fahrenheit = inputDegrees;
            celsius = fahrenheitToCelsius(fahrenheit);
            kelvin = celsiusToKelvin(celsius);
            break;
        case 'kelvin':
            kelvin = inputDegrees;
            celsius = kelvinToCelsius(kelvin);
            fahrenheit = celsiusToFahrenheit(celsius);
            break;
    }

    document.getElementById('result').innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)}</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)}</p>
        <p>Kelvin: ${kelvin.toFixed(2)}</p>
    `;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
