// script.js

// Add an event listener to the launch button
document.getElementById("launchButton").addEventListener("click", function() {
    // Get the selected version from the select element
    var selectedVersion = document.getElementById("minecraftVersion").value;
    
    // Redirect to the corresponding HTML page based on the selected version
    if (selectedVersion === "1.5.2") {
        window.location.href = "1.5.2/index.html";
    } else if (selectedVersion === "resent") {
        window.location.href = "resent/index.html";
    } else if (selectedVersion === "yse") {
        window.location.href = "reborn/index.html";
    }else if (selectedVersion === "veryold") {
        window.location.href = "beta1.3/index.html"
    }else if (selectedVersion === "1.8.8") {
        window.location.href = "1.8.8/index.html"
    }else if (selectedVersion === "kone") {
        window.location.href = "kone/index.html"
    }else if (selectedVersion === "uwu") {
        window.location.href = "uwu/index.html"
    }
});
