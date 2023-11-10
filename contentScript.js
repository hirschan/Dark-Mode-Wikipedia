var colorNames = {
    darkBackground: '#0d1117',
    darkBackgroundLighter: '#21262d',
    greenTextColor: '#46a559',
    redTextColor: '#e75d53',
    yellowTextColor: '#F1e05a',
    whiteTextColor: '#c9d1d9'
}

// Waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements on the page
    const allElements = document.querySelectorAll('*');

    // Iterate through each element and check its computed color
    allElements.forEach(element => {
        const computedStyles = window.getComputedStyle(element);
        const currentColor = computedStyles.color;
        const currentBackgroundColor = computedStyles.backgroundColor

        // Green background -> green text, dark background
        if (currentBackgroundColor === 'rgb(158, 255, 158)' || currentBackgroundColor === 'rgb(208, 255, 208)') {
            element.style.color = colorNames.greenTextColor
            element.style.backgroundColor = colorNames.darkBackground
        }
        // Red background -> red text, dark background
        if (currentBackgroundColor === 'rgb(255, 199, 199)' || currentBackgroundColor === 'rgb(255, 208, 208)' || currentBackgroundColor === 'rgb(255, 227, 227)') {
            element.style.color = colorNames.redTextColor
            element.style.backgroundColor = colorNames.darkBackground
        }
        // Yellow background -> yellow text, dark background
        if (currentBackgroundColor === 'rgb(255, 255, 136)' || currentBackgroundColor === 'rgb(255, 255, 187)' || currentBackgroundColor === 'rgb(224, 208, 255)') {
            element.style.color = colorNames.yellowTextColor
            element.style.backgroundColor = colorNames.darkBackground
        }
        // https://en.wikipedia.org/wiki/List_of_wars_involving_Azerbaijan
        // https://en.wikipedia.org/wiki/Nordic_Defence_Cooperation#Limitations
        // https://en.wikipedia.org/wiki/Ivan_Reitman#Recurring_cast_members


        // Search button text, headline text and grey text -> white text
        const lightTextColors = ['rgb(32, 33, 34)', 'rgb(0, 0, 0)', 'rgb(84, 89, 93)']

        if (lightTextColors.includes(currentColor)) {
            element.style.color = colorNames.whiteTextColor
        }


        // Grey background t-> lighter dark background
        if (currentBackgroundColor === 'rgb(240, 240, 240)') {
            element.style.backgroundColor = colorNames.darkBackgroundLighter
        }
        if (currentColor === 'rgb(234, 236, 240)') {
            element.style.backgroundColor = colorNames.darkBackgroundLighter
        }
        if (currentColor === 'rgb(255, 255, 255') {
            element.style.backgroundColor = colorNames.darkBackgroundLighter
        }
        if (currentBackgroundColor === 'rgb(255, 255, 255') {
            element.style.color = colorNames.darkBackgroundLighter
        }
        if (currentBackgroundColor === 'rgb(200, 200, 200)') { // https://en.wikipedia.org/wiki/Wikipedia#Language_editions
            element.style.backgroundColor = colorNames.darkBackgroundLighter
        }


        // Light blue background -> dark background
        const lightBlueBackgroundColors = ['rgb(248, 248, 248)', 'rgb(248, 252, 255)', 'rgb(205, 222, 255)', 'rgb(220, 220, 220)', 'rgb(247, 247, 247)']

        if (lightBlueBackgroundColors.includes(currentBackgroundColor)) {
            element.style.backgroundColor = colorNames.darkBackground
        }

        // Light red background -> dark background
        if (currentBackgroundColor === 'rgb(255, 219, 219)') {
            element.style.backgroundColor = colorNames.darkBackground
        }

        // Light grey/white background -> dark background
        const lightGreyBackgroundColors = ['rgb(249, 249, 249)', 'rgb(238, 238, 238)', 'rgb(255, 255, 255)', 'rgb(239, 239, 239)', 'rgb(238, 238, 255)', 'rgb(253, 253, 253)', 'rgb(242, 242, 242)']
        
        if (lightGreyBackgroundColors.includes(currentBackgroundColor)) {
            element.style.backgroundColor = colorNames.darkBackground
        }
        // https://en.wikipedia.org/wiki/Latex
        // https://en.wikipedia.org/wiki/2023_Armenian_protests
        // https://en.wikipedia.org/wiki/2024_United_States_presidential_election#Forecasts
        // https://en.wikipedia.org/wiki/List_of_wars_involving_Azerbaijan
        // https://fr.wikipedia.org/wiki/Sam_Bankman-Fried

    });

});