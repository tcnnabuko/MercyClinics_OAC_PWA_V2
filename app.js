
function calculateOAC() {
    const iid = parseFloat(document.getElementById('iid').value);
    const icd = parseFloat(document.getElementById('icd').value);
    if (isNaN(iid) || isNaN(icd)) {
        document.getElementById('result').innerText = "Please enter valid IID and ICD values.";
        return;
    }
    const oac = Math.PI * Math.sqrt((iid**2 + icd**2) / 2);
    let severity = "";
    if (oac < 100) severity = "Severe Microstomia";
    else if (oac < 150) severity = "Moderate Microstomia";
    else severity = "Normal Range";
    document.getElementById('result').innerText = "OAC: " + oac.toFixed(2) + " mm (" + severity + ")";
}
