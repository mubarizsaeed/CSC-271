// Get all the elements we need
const deliveryCheckbox = document.querySelector('#delivery');
const mealSelect = document.querySelector('#mealCount');
const dietaryCheckbox = document.querySelector('#dietary');
const resultDiv = document.querySelector('#result');
const priceDiv = document.querySelector('#price');
const mealListDiv = document.querySelector('#mealList');

// Function to calculate meal plan
function calculatePlan() {
    // First decision: Check delivery
    if (!deliveryCheckbox.checked) {
        resultDiv.textContent = "Store Pickup Only - Please select delivery to continue";
        priceDiv.textContent = "";
        return;
    }

    // Second decision: Check meal count 
    let basePrice = 0;
    let planName = "";
    
    if (mealSelect.value === "3") {
        basePrice = 59.99;
        planName = "Basic Plan";
    } else if (mealSelect.value === "5") {
        basePrice = 89.99;
        planName = "Standard Plan";
    } else if (mealSelect.value === "7") {
        basePrice = 119.99;
        planName = "Premium Plan";
    }

    
    let finalPrice = basePrice;
    if (dietaryCheckbox.checked && deliveryCheckbox.checked) {
        finalPrice += 5; 
    }

    // Display results
    resultDiv.textContent = `Selected Plan: ${planName}`;
    priceDiv.textContent = `Total Price: $${finalPrice.toFixed(2)}`;
}


const inputs = document.querySelectorAll('input, select');
inputs.forEach(function(input) {
    input.addEventListener('change', calculatePlan);
});

// Sample meals 
const sampleMeals = [
    "Grilled Chicken Salad",
    "Vegetable Stir Fry",
    "Quinoa Bowl"
];

// Display sample meals 
let i = 0;
while (i < sampleMeals.length) {
    const mealItem = document.createElement('p');
    mealItem.textContent = `• ${sampleMeals[i]}`;
    mealListDiv.appendChild(mealItem);
    i++;
}


calculatePlan();