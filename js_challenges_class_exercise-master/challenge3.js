function challenge3() {
   
    const standingSelected = document.querySelector('input[name="standing"]:checked') !== null;
    const gradDateSelected = document.querySelector('input[name="gradDate"]:checked') !== null;
    
    if (!standingSelected || !gradDateSelected) {
        alert('Please select an option in both categories before proceeding.');
        return false; 
    }
    
    return true; 
}
