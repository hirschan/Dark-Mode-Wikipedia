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
        if (currentBackgroundColor === 'rgb(158, 255, 158)' || currentBackgroundColor === 'rgb(208, 255, 208)') {
            element.style.color = '#46a559'
            element.style.backgroundColor = '#0d1117'
        }
        // Text to red from red background
        if (currentBackgroundColor === 'rgb(255, 199, 199)' || currentBackgroundColor === 'rgb(255, 208, 208)' || currentBackgroundColor === 'rgb(255, 227, 227)') {
            element.style.color = '#e75d53'
            element.style.backgroundColor = '#0d1117'
        }
        // Text to yellow from yellow background
        if (currentBackgroundColor === 'rgb(255, 255, 136)' || currentBackgroundColor === 'rgb(255, 255, 187)' || currentBackgroundColor === 'rgb(224, 208, 255)') {
            element.style.color = '#F1e05a'
            element.style.backgroundColor = '#0d1117'
        }
        // https://en.wikipedia.org/wiki/List_of_wars_involving_Azerbaijan
        // https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations
        // https://en.wikipedia.org/wiki/Ivan_Reitman#Recurring_cast_members


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
        if (currentBackgroundColor === 'rgb(249, 249, 249)' || currentBackgroundColor === 'rgb(238, 238, 238)' || currentBackgroundColor === 'rgb(255, 255, 255)' || currentBackgroundColor === 'rgb(239, 239, 239)') {
            element.style.backgroundColor = '#0d1117'
        }
        // https://en.wikipedia.org/wiki/Latex, https://en.wikipedia.org/wiki/2023_Armenian_protests, https://en.wikipedia.org/wiki/2024_United_States_presidential_election#Forecasts, https://en.wikipedia.org/wiki/List_of_wars_involving_Azerbaijan

    });

});