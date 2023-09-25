// script.js

// Add an event listener to the launch button
document.getElementById("launchButton").addEventListener("click", function() {
    // Get the selected version from the select element
    var selectedVersion = document.getElementById("minecraftVersion").value;
    
    // Redirect to the corresponding HTML page based on the selected version
    if (selectedVersion === "1.5.2") {
        window.location.href = "1.5.2/1.5.2.html";
    } else if (selectedVersion === "reborn") {
        window.location.href = "reborn/1.8.8.html";
    } else if (selectedVersion === "resent") {
        window.location.href = "resent/index.html";
    }
});
