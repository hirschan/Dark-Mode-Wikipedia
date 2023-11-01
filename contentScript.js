// Waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements on the page
    const allElements = document.querySelectorAll('*');

    // Iterate through each element and check its computed color
    allElements.forEach(element => {
        const computedStyles = window.getComputedStyle(element);
        const currentColor = computedStyles.color;
        const currentBackgroundColor = computedStyles.backgroundColor

        // Text to green from green background
        if (currentBackgroundColor === 'rgb(158, 255, 158)') { // https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations
            element.style.color = '#46a559'
            element.style.backgroundColor = '#0d1117'
        }
        // Text to red from red background
        if (currentBackgroundColor === 'rgb(255, 199, 199)') { // https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations
            element.style.color = '#e75d53'
            element.style.backgroundColor = '#0d1117'
        }
        // Text to yellow from yellow background
        if (currentBackgroundColor === 'rgb(255, 255, 136)') { // https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations
            element.style.color = '#F1e05a'
            element.style.backgroundColor = '#0d1117'
        }


        // Search button text, headline text and grey text to white
        const lightTextColors = ['rgb(32, 33, 34)', 'rgb(0, 0, 0)', 'rgb(84, 89, 93)']

        if (lightTextColors.includes(currentColor)) {
            element.style.color = '#c9d1d9'
        }


        // Grey background to lighter dark background
        if (currentBackgroundColor === 'rgb(240, 240, 240)') {
            element.style.backgroundColor = '#21262d'
        }
        if (currentColor === 'rgb(234, 236, 240)') {
            element.style.backgroundColor = '#21262d'
        }
        if (currentColor === 'rgb(255, 255, 255') {
            element.style.backgroundColor = '#21262d'
        }
        if (currentBackgroundColor === 'rgb(255, 255, 255') {
            element.style.color = '#21262d'
        }
        if (currentBackgroundColor === 'rgb(200, 200, 200)') { // https://en.wikipedia.org/wiki/Wikipedia#Language_editions
            element.style.backgroundColor = '#21262d'
        }


        // Light blue(?) background to dark
        const lightBlueBackgroundColors = ['rgb(248, 248, 248)', 'rgb(248, 252, 255)', 'rgb(205, 222, 255)', 'rgb(220, 220, 220)', 'rgb(247, 247, 247)']

        if (lightBlueBackgroundColors.includes(currentBackgroundColor)) {
            element.style.backgroundColor = '#0d1117'
        }

        // Light red to dark background
        if (currentBackgroundColor === 'rgb(255, 219, 219)') {
            element.style.backgroundColor = '#0d1117'
        }

        // Light grey/white to dark background
        if (currentBackgroundColor === 'rgb(249, 249, 249)') { // https://en.wikipedia.org/wiki/Latex
            element.style.backgroundColor = '#0d1117'
        }



        if (currentBackgroundColor === 'rgb(255, 187, 0)') { // https://en.wikipedia.org/wiki/Amateur_radio_call_signs#Formation_of_an_amateur_radio_call_sign
            element.style.color = '#0d1117'
        }

        if (currentBackgroundColor === 'rgb(255, 187, 187)') { 
            element.style.color = '#0d1117'
        }

        if (currentBackgroundColor === 'rgb(255, 255, 255)') { // https://en.wikipedia.org/wiki/Piano_key_frequencies vs. https://es.wikipedia.org/wiki/King_Crimson#Miembros_pasados
            element.style.color = '#0d1117'
        }
        if (currentBackgroundColor === 'rgb(211, 211, 211)') { 
            element.style.backgroundColor = '#0d1117'
        }


        // TODO: fix temperature tables

    });

});