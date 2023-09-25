document.getElementById('teslaBasePrice').addEventListener('input', calculateTeslaCost);
document.getElementById('destinationFee').addEventListener('input', calculateTeslaCost);
document.getElementById('additionalOptions').addEventListener('input', calculateTeslaCost);
document.getElementById('federalTaxCredit').addEventListener('input', calculateTeslaCost);
document.getElementById('referralLinkCredit').addEventListener('input', calculateTeslaCost);
document.getElementById('plannedMilesDriven').addEventListener('input', calculateTeslaCost);
document.getElementById('electricityCost').addEventListener('input', calculateTeslaCost);
document.getElementById('gasolineCost').addEventListener('input', calculateTeslaCost);
document.getElementById('yearsOfOwnership').addEventListener('input', calculateTeslaCost);

function calculateTeslaCost() {
  const basePrice = parseFloat(document.getElementById('teslaBasePrice').value.replace(/[^0-9.-]+/g, "")) || 0;
  const destinationFee = parseFloat(document.getElementById('destinationFee').value.replace(/[^0-9.-]+/g, "")) || 0;
  const additionalOptions = parseFloat(document.getElementById('additionalOptions').value.replace(/[^0-9.-]+/g, "")) || 0;
  const federalTaxCredit = parseFloat(document.getElementById('federalTaxCredit').value.replace(/[^0-9.-]+/g, "")) || 0;
  const referralLinkCredit = parseFloat(document.getElementById('referralLinkCredit').value.replace(/[^0-9.-]+/g, "")) || 0;
  const plannedMilesDriven = parseFloat(document.getElementById('plannedMilesDriven').value.replace(/[^0-9.-]+/g, "")) || 0;
  const electricityCost = parseFloat(document.getElementById('electricityCost').value.replace(/[^0-9.-]+/g, "")) || 0;
  const gasolineCost = parseFloat(document.getElementById('gasolineCost').value.replace(/[^0-9.-]+/g, "")) || 0;
  const yearsOfOwnership = parseFloat(document.getElementById('yearsOfOwnership').value) || 0;
  document.getElementById('tesla-results').innerText = `Total Cost: $${basePrice}`;
}

document.getElementById('gasolineBasePrice').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineDestinationFee').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineAdditionalOptions').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineFederalTaxCredit').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineReferralLinkCredit').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolinePlannedMilesDriven').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineMilesPerGallon').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineGasolineCost').addEventListener('input', calculateGasolineCost);
document.getElementById('gasolineYearsOfOwnership').addEventListener('input', calculateGasolineCost);

function calculateGasolineCost() {
  const basePrice = parseFloat(document.getElementById('gasolineBasePrice').value.replace(/[^0-9.-]+/g, "")) || 0;
  const destinationFee = parseFloat(document.getElementById('gasolineDestinationFee').value.replace(/[^0-9.-]+/g, "")) || 0;
  const additionalOptions = parseFloat(document.getElementById('gasolineAdditionalOptions').value.replace(/[^0-9.-]+/g, "")) || 0;
  const federalTaxCredit = parseFloat(document.getElementById('gasolineFederalTaxCredit').value.replace(/[^0-9.-]+/g, "")) || 0;
  const referralLinkCredit = parseFloat(document.getElementById('gasolineReferralLinkCredit').value.replace(/[^0-9.-]+/g, "")) || 0;
  const plannedMilesDriven = parseFloat(document.getElementById('gasolinePlannedMilesDriven').value.replace(/[^0-9.-]+/g, "")) || 0;
  const milesPerGallon = parseFloat(document.getElementById('gasolineMilesPerGallon').value.replace(/[^0-9.-]+/g, "")) || 0;
  const gasolineCost = parseFloat(document.getElementById('gasolineGasolineCost').value.replace(/[^0-9.-]+/g, "")) || 0;
  const yearsOfOwnership = parseFloat(document.getElementById('gasolineYearsOfOwnership').value) || 0;
  document.getElementById('gasoline-results').innerText = `Total Cost: $${basePrice}`;
}

function showComparison() {
  const teslaTotalCost = parseFloat(document.getElementById('tesla-results').innerText.split('$')[1]) || 0;
  const gasolineTotalCost = parseFloat(document.getElementById('gasoline-results').innerText.split('$')[1]) || 0;
  document.getElementById('comparison-results').innerText = `Tesla is cheaper by: $${gasolineTotalCost - teslaTotalCost}`;
}

document.getElementById('tesla-calculator').addEventListener
