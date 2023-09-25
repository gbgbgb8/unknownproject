// Event listeners for Tesla calculator
document.getElementById('teslaBasePrice').addEventListener('input', calculateTeslaCost);

// Event listeners for Gasoline calculator
document.getElementById('gasolineBasePrice').addEventListener('input', calculateGasolineCost);

// Function to calculate Tesla cost
function calculateTeslaCost() {
  const basePrice = parseFloat(document.getElementById('teslaBasePrice').value) || 0;
  // Add other variables and calculations here
  
  // Display the results
  document.getElementById('tesla-results').innerText = `Total Cost: $${basePrice}`;
}

// Function to calculate Gasoline car cost
function calculateGasolineCost() {
  const basePrice = parseFloat(document.getElementById('gasolineBasePrice').value) || 0;
  // Add other variables and calculations here
  
  // Display the results
  document.getElementById('gasoline-results').innerText = `Total Cost: $${basePrice}`;
}

// Function to compare and show summary
function showComparison() {
  const teslaTotalCost = parseFloat(document.getElementById('tesla-results').innerText.split('$')[1]) || 0;
  const gasolineTotalCost = parseFloat(document.getElementById('gasoline-results').innerText.split('$')[1]) || 0;

  // Comparison logic here
  
  // Display the comparison
  document.getElementById('comparison-results').innerText = `Tesla is cheaper by: $${gasolineTotalCost - teslaTotalCost}`;
}

// Attach the comparison function to the calculators
document.getElementById('tesla-calculator').addEventListener('input', showComparison);
document.getElementById('gasoline-calculator').addEventListener('input', showComparison);
