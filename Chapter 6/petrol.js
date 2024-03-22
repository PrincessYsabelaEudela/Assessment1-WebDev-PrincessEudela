// waits for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // get the calcuoate btn element, to trigger the calculation
    const calculateBtn = document.getElementById("calculate-btn");

    // adds a click event to the button, and when the button is clicked it triggers the function calculateTotalCost
    calculateBtn.addEventListener("click", calculateTotalCost);
  
    // function to calculate the total cost
    function calculateTotalCost() {
      // get the petrol cost and liters purchased input values as numbers
      const petrolCost = parseFloat(document.getElementById("petrol-cost").value);
      const litersPurchased = parseFloat(document.getElementById("liters-purchased").value);
  
      // calculation of the total cost
      const totalCost = petrolCost * litersPurchased;

      // checks if total cost is negative
      if (litersPurchased < 0.00){

      // display "Invalid" if the Liters purchased is negative
      document.getElementById("total-cost").textContent = `Invalid`;
      }

      // display the total cost
      else {
      document.getElementById("total-cost").textContent = `Total Cost: AED ${totalCost.toFixed(2)}`;
      }
    }
  });
  