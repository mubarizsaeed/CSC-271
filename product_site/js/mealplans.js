// Get all the elements we need
const deliveryCheckbox = document.querySelector('#delivery');
const mealSelect = document.querySelector('#mealCount');
const dietaryCheckbox = document.querySelector('#dietary');
const resultDiv = document.querySelector('#result');
const priceDiv = document.querySelector('#price');
const mealListDiv = document.querySelector('#mealList');

// Function to check if delivery is selected
function checkDeliveryOption() {
    if (!deliveryCheckbox.checked) {
        return false;
    }
    return true;
}

// Function to get plan price 
function getPlanDetails(mealCount) {
    let basePrice = 0;
    let planName = "";
    
    if (mealCount === "3") {
        basePrice = 59.99;
        planName = "Basic Plan";
    } else if (mealCount === "5") {
        basePrice = 89.99;
        planName = "Standard Plan";
    } else if (mealCount === "7") {
        basePrice = 119.99;
        planName = "Premium Plan";
    }

    return {
        price: basePrice,
        name: planName
    };
}

// Function to calculate final price 
function calculateFinalPrice(basePrice, hasDietary) {
    let finalPrice = basePrice;
    if (hasDietary) {
        finalPrice += 5;
    }
    return finalPrice;
}

// Main function to calculate plan
function calculatePlan() {
    // First check delivery
    if (!checkDeliveryOption()) {
        resultDiv.textContent = "Store Pickup Only - Please select delivery to continue";
        priceDiv.textContent = "";
        return;
    }

    // Get plan details
    const planDetails = getPlanDetails(mealSelect.value);
    
    // Calculate final price
    const finalPrice = calculateFinalPrice(planDetails.price, dietaryCheckbox.checked);

    // Display results
    resultDiv.textContent = `Selected Plan: ${planDetails.name}`;
    priceDiv.textContent = `Total Price: $${finalPrice.toFixed(2)}`;
}

// Function to display sample 
function displaySampleMeals() {
    const sampleMeals = [
        "Grilled Chicken Salad",
        "Vegetable Stir Fry",
        "Quinoa Bowl"
    ];

    mealListDiv.innerHTML = ""; 
    
    let i = 0;
    while (i < sampleMeals.length) {
        const mealItem = document.createElement('p');
        mealItem.textContent = `• ${sampleMeals[i]}`;
        mealListDiv.appendChild(mealItem);
        i++;
    }
}

// Add event listeners
const inputs = document.querySelectorAll('input, select');
inputs.forEach(function(input) {
    input.addEventListener('change', calculatePlan);
});

// Initialize the page
displaySampleMeals();
calculatePlan();