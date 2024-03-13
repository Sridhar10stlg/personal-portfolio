function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

// Add event listeners for hover and click
const socialIcons = document.querySelectorAll('.social-media-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', showTooltip);
    icon.addEventListener('mouseout', hideTooltip);
});

function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.title;

    document.body.appendChild(tooltip);

    // Position the tooltip above the icon
    tooltip.style.top = event.clientY - tooltip.offsetHeight - 10 + 'px';
    tooltip.style.left = event.clientX - tooltip.offsetWidth / 2 + 'px';
}

function hideTooltip() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => tooltip.remove());
}

// Change cursor style on hover
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        document.body.style.cursor = 'pointer';
    });
    icon.addEventListener('mouseout', () => {
        document.body.style.cursor = 'auto';
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


