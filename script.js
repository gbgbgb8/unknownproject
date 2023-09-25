document.getElementById('teslaBasePrice').addEventListener('input', updateCalculations);
document.getElementById('destinationFee').addEventListener('input', updateCalculations);
document.getElementById('additionalOptions').addEventListener('input', updateCalculations);
document.getElementById('federalTaxCredit').addEventListener('input', updateCalculations);
document.getElementById('referralLinkCredit').addEventListener('input', updateCalculations);
document.getElementById('plannedMilesDriven').addEventListener('input', updateCalculations);
document.getElementById('electricityCost').addEventListener('input', updateCalculations);
document.getElementById('gasolineCost').addEventListener('input', updateCalculations);
document.getElementById('yearsOfOwnership').addEventListener('input', updateCalculations);

document.getElementById('gasolineBasePrice').addEventListener('input', updateCalculations);
document.getElementById('gasolineDestinationFee').addEventListener('input', updateCalculations);
document.getElementById('gasolineAdditionalOptions').addEventListener('input', updateCalculations);
document.getElementById('gasolineFederalTaxCredit').addEventListener('input', updateCalculations);
document.getElementById('gasolineReferralLinkCredit').addEventListener('input', updateCalculations);
document.getElementById('gasolinePlannedMilesDriven').addEventListener('input', updateCalculations);
document.getElementById('gasolineMilesPerGallon').addEventListener('input', updateCalculations);
document.getElementById('gasolineGasolineCost').addEventListener('input', updateCalculations);
document.getElementById('gasolineYearsOfOwnership').addEventListener('input', updateCalculations);

function updateCalculations() {
    let teslaTotalCost = parseFloat(document.getElementById('teslaBasePrice').value.replace(/[^0-9.-]+/g, "")) || 0;
    let gasolineTotalCost = parseFloat(document.getElementById('gasolineBasePrice').value.replace(/[^0-9.-]+/g, "")) || 0;
    
    document.getElementById('tesla-results').innerText = `Total Cost: $${teslaTotalCost}`;
    document.getElementById('gasoline-results').innerText = `Total Cost: $${gasolineTotalCost}`;
    
    document.getElementById('teslaSummaryCost').innerText = `$${teslaTotalCost}`;
    document.getElementById('gasolineSummaryCost').innerText = `$${gasolineTotalCost}`;
    
    const comparisonText = teslaTotalCost < gasolineTotalCost ? 'Tesla is cheaper by: ' : 'Gasoline car is cheaper by: ';
    const difference = Math.abs(teslaTotalCost - gasolineTotalCost);
    document.getElementById('comparison-results').innerText = `${comparisonText} $${difference}`;
}
