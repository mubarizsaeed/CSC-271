// Numeric variables for prices 
const basicPrice = 59.99;
const standardPrice = 89.99;
const premiumPrice = 119.99;
const basicMeals = 3;
const standardMeals = 5;
const premiumMeals = 7;

// String variables 
const basicFeatures = "3 chef-curated recipes per week, Meal prep delivery included, Basic nutritional guidance";
const standardFeatures = "5 chef-curated recipes per week, Meal prep delivery included, Personalized meal planning";
const premiumFeatures = "7 chef-curated recipes per week, Meal prep delivery included, Advanced meal planning, Weekly nutritionist consultation";

// Function using arithmetic operators to 
function calculateCostPerMeal(price, meals) {
    let costPerMeal = price / (meals * 4);
    return costPerMeal.toFixed(2);
}


document.addEventListener('DOMContentLoaded', function() {
    // Using different DOM selection 
    const planDisplay = document.getElementById('selected-plan');                    
    const featuresList = document.getElementsByClassName('plan-features')[0];
    const allParagraphs = document.getElementsByTagName('p');                        
    const priceDisplay = document.querySelector('#plan-price');                      
    
    // Update page content when plan is selected
    function updatePlanDisplay(planType) {
        if (planType === 'basic') {
            
            planDisplay.textContent = "Selected Plan: Basic";
            priceDisplay.textContent = "Monthly Price: $" + basicPrice;
            allParagraphs[0].textContent = "You selected our starter plan!";
            
            
            featuresList.innerHTML = `
                <h3>Basic Plan Features:</h3>
                <p><em>${basicFeatures}</em></p>
                <p><strong>Cost per meal: $${calculateCostPerMeal(basicPrice, basicMeals)}</strong></p>
            `;
        }
        else if (planType === 'standard') {
            // Using textContent to update text
            planDisplay.textContent = "Selected Plan: Standard";
            priceDisplay.textContent = "Monthly Price: $" + standardPrice;
            allParagraphs[0].textContent = "Great choice with our popular plan!";
            

            featuresList.innerHTML = `
                <h3>Standard Plan Features:</h3>
                <p><em>${standardFeatures}</em></p>
                <p><strong>Cost per meal: $${calculateCostPerMeal(standardPrice, standardMeals)}</strong></p>
            `;
        }
        else if (planType === 'premium') {
            
            planDisplay.textContent = "Selected Plan: Premium";
            priceDisplay.textContent = "Monthly Price: $" + premiumPrice;
            allParagraphs[0].textContent = "Welcome to our premium experience!";
            
            // Using innerHTML to update content with HTML formatting
            featuresList.innerHTML = `
                <h3>Premium Plan Features:</h3>
                <p><em>${premiumFeatures}</em></p>
                <p><strong>Cost per meal: $${calculateCostPerMeal(premiumPrice, premiumMeals)}</strong></p>
            `;
        }
    }

    // Add event listeners to radio buttons
    let radioButtons = document.getElementsByName('meal-plan');
    for(let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', function() {
            updatePlanDisplay(this.value);
        });
    }

    // Initialize with Basic plan selected
    updatePlanDisplay('basic');
});