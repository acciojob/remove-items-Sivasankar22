// Function to remove the selected color from the dropdown list
function removeColor() {
    // Get the dropdown element
    var selectElement = document.getElementById("colorSelect");

    // Get the index of the selected option
    var selectedIndex = selectElement.selectedIndex;

    // Remove the selected option from the dropdown
    selectElement.remove(selectedIndex);
}

// Add event listener to the button
document.querySelector('input[type="button"]').addEventListener('click', removeColor);
