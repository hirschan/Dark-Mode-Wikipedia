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


        // Search button text to white
        if (currentColor === 'rgb(32, 33, 34)') {
            element.style.color = '#c9d1d9'
        }
        // Headline text to white
        if (currentColor === 'rgb(0, 0, 0)') {
            element.style.color = '#c9d1d9'
        }
        // Grey text to white
        if (currentColor === 'rgb(84, 89, 93)') {
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
        if (currentBackgroundColor === 'rgb(247, 247, 247)') { // Bottom table: https://en.wikipedia.org/wiki/European_Defence_Agency#External_links
            element.style.backgroundColor = '#0d1117'
        }

    });

});