// Plan prices and details
const basicPrice = 59.99;
const standardPrice = 89.99;
const premiumPrice = 119.99;
const basicMeals = 3;
const standardMeals = 5;
const premiumMeals = 7;

// Plan features
const basicFeatures = "3 chef-curated recipes per week, Meal prep delivery included, Basic nutritional guidance";
const standardFeatures = "5 chef-curated recipes per week, Meal prep delivery included, Personalized meal planning";
const premiumFeatures = "7 chef-curated recipes per week, Meal prep delivery included, Advanced meal planning, Weekly nutritionist consultation";

// Function to calculate cost per meal
function calculateCostPerMeal(price, meals) {
    let costPerMeal = price / (meals * 4);
    return costPerMeal.toFixed(2);
}

// Function to get welcome message based on plan
function getWelcomeMessage(planType) {
    if (planType === 'basic') {
        return "You selected our starter plan!";
    } else if (planType === 'standard') {
        return "Great choice with our popular plan!";
    } else {
        return "Welcome to our premium experience!";
    }
}

// Function to get plan features HTML
function getPlanFeaturesHtml(planType) {
    let features = '';
    let price = 0;
    let meals = 0;
    
    if (planType === 'basic') {
        features = basicFeatures;
        price = basicPrice;
        meals = basicMeals;
    } else if (planType === 'standard') {
        features = standardFeatures;
        price = standardPrice;
        meals = standardMeals;
    } else if (planType === 'premium') {
        features = premiumFeatures;
        price = premiumPrice;
        meals = premiumMeals;
    }
    
    return `
        <h3>${planType.charAt(0).toUpperCase() + planType.slice(1)} Plan Features:</h3>
        <p><em>${features}</em></p>
        <p><strong>Cost per meal: $${calculateCostPerMeal(price, meals)}</strong></p>
    `;
}

// Main function to update display
function updatePlanDisplay(planType) {
    const planDisplay = document.getElementById('selected-plan');
    const featuresList = document.getElementsByClassName('plan-features')[0];
    const allParagraphs = document.getElementsByTagName('p');
    const priceDisplay = document.querySelector('#plan-price');
    
    
    allParagraphs[0].textContent = getWelcomeMessage(planType);
    
    
    planDisplay.textContent = `Selected Plan: ${planType.charAt(0).toUpperCase() + planType.slice(1)}`;
    let price = planType === 'basic' ? basicPrice : 
                planType === 'standard' ? standardPrice : premiumPrice;
    priceDisplay.textContent = "Monthly Price: $" + price;
    
    
    featuresList.innerHTML = getPlanFeaturesHtml(planType);
}


document.addEventListener('DOMContentLoaded', function() {
    
    let radioButtons = document.getElementsByName('meal-plan');
    for(let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', function() {
            updatePlanDisplay(this.value);
        });
    }
    updatePlanDisplay('basic');
});