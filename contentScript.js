// Waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements on the page
    const allElements = document.querySelectorAll('*');

    // Iterate through each element and check its computed color
    allElements.forEach(element => {
        const computedStyles = window.getComputedStyle(element);
        const currentColor = computedStyles.color;
        const currentBackgroundColor = computedStyles.backgroundColor

        // Search button text to white color
        if (currentColor === 'rgb(32, 33, 34)') {
            element.style.color = '#c9d1d9'
        }
        // Headline text to white color
        if (currentColor === 'rgb(0, 0, 0)') {
            element.style.color = '#c9d1d9'
        }

        // Grey background to lighter dark background
        if (currentBackgroundColor === 'rgb(240, 240, 240)') {
            element.style.backgroundColor = '#21262d'
        }
        if (currentColor === 'rgb(234, 236, 240)') {
            element.style.backgroundColor = '#21262d'
        }

    });

});