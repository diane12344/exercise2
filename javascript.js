// javascript.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to change the color of the heading when clicked
    var heading = document.querySelector("h1");
    heading.addEventListener("click", function() {
        this.style.color = getRandomColor();
    });

    // Function to change the color of the paragraph when hovered
    var paragraph = document.querySelector("p");
    paragraph.addEventListener("mouseenter", function() {
        this.style.color = getRandomColor();
    });
    paragraph.addEventListener("mouseleave", function() {
        this.style.color = "#666";
    });
});

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

