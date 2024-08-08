// Get the container div
const contsdiv = document.getElementById("heading");

contsdiv.style.backgroundColor = "white";
contsdiv.style.color = "black";
contsdiv.style.padding = "20px";
contsdiv.style.borderRadius = "10px";
contsdiv.style.textAlign = "center";
contsdiv.style.maxWidth = "400px";
contsdiv.style.margin = "auto";
contsdiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
document.body.style.backgroundColor = "#f0f0f0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

// Create the main heading
const mainhead = document.createElement("h1");
mainhead.innerHTML = "Background Switch";
contsdiv.appendChild(mainhead);

// Create the toggle switch
const switchLabel = document.createElement("label");
switchLabel.innerHTML = "Toggle Background: ";
switchLabel.style.display = "block";
switchLabel.style.marginBottom = "10px";
switchLabel.style.fontSize = "16px";
switchLabel.style.color = "black";
contsdiv.appendChild(switchLabel);

const switchInput = document.createElement("input");
switchInput.type = "checkbox";
switchInput.setAttribute("id", "backgroundSwitch");
switchInput.style.marginBottom = "20px";
contsdiv.appendChild(switchInput);

// Add event listener for the toggle switch
switchInput.addEventListener("change", function() {
    if (switchInput.checked) {
        document.body.style.backgroundColor = "white";
        contsdiv.style.backgroundColor = "white";
        contsdiv.style.color = "black";
        switchLabel.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        contsdiv.style.backgroundColor = "black";
        contsdiv.style.color = "white";
        switchLabel.style.color = "white";
    }
});
