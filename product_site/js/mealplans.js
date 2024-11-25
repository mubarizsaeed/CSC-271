function MealPlan(name, mealsPerWeek, price, features) {
    this.name = name;
    this.mealsPerWeek = mealsPerWeek;
    this.basePrice = price;
    this.features = features;
    this.hasDelivery = false;
    this.hasDietaryRestrictions = false;

    this.calculatePrice = function() {
        let total = this.basePrice;
        if (this.hasDietaryRestrictions) {
            total += 5;
        }
        return total.toFixed(2);
    };

    this.getDescription = function() {
        return `${this.name} Plan includes ${this.mealsPerWeek} meals per week`;
    };
}

const basicPlan = new MealPlan(
    "Basic", 
    3, 
    59.99,
    ["3 chef-curated recipes", "Basic nutritional guidance"]
);

const premiumPlan = new MealPlan(
    "Premium", 
    7, 
    119.99,
    ["7 chef-curated recipes", "Weekly nutritionist consultation", "Premium support"]
);

const deliveryCheckbox = document.getElementById('delivery');
const mealSelect = document.getElementById('mealCount');
const dietaryCheckbox = document.getElementById('dietary');
const resultDiv = document.getElementById('result');
const priceDiv = document.getElementById('price');
const selectedPlanDiv = document.getElementById('selected-plan');
const planPriceDiv = document.getElementById('plan-price');
const planFeaturesDiv = document.querySelector('.plan-features');

function displayPlanInfo(planId, plan) {
    const planElement = document.getElementById(planId);
    if (planElement) {
        planElement.innerHTML = `
            <div class="plan-card">
                <h3>${plan.getDescription()}</h3>
                <p class="price">$${plan.calculatePrice()}</p>
                <p class="delivery-status">${plan.hasDelivery ? "Delivery included" : "Pick-up only"}</p>
                <h4>Features:</h4>
                <ul class="features-list">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="dietary-options">
                    <label>
                        <input type="checkbox" 
                            ${plan.hasDietaryRestrictions ? 'checked' : ''} 
                            onchange="updateDietary('${planId}', this.checked)">
                        Add Dietary Restrictions (+$5)
                    </label>
                </div>
            </div>
        `;
    }
}

function updateDietary(planId, hasRestrictions) {
    if (planId === 'basicPlanInfo') basicPlan.hasDietaryRestrictions = hasRestrictions;
    if (planId === 'premiumPlanInfo') premiumPlan.hasDietaryRestrictions = hasRestrictions;
    updateDisplay();
}

function updateDisplay() {
    let currentPlan = mealSelect.value === "3" ? basicPlan : premiumPlan;
    basicPlan.hasDelivery = deliveryCheckbox.checked;
    premiumPlan.hasDelivery = deliveryCheckbox.checked;

    if (!deliveryCheckbox.checked) {
        resultDiv.textContent = "Store Pickup Only - Please select delivery to continue";
        priceDiv.textContent = "";
    } else {
        resultDiv.textContent = `Selected Plan: ${currentPlan.name}`;
        priceDiv.textContent = `Total Price: $${currentPlan.calculatePrice()}`;
    }

    selectedPlanDiv.textContent = `Selected Plan: ${currentPlan.name}`;
    planPriceDiv.textContent = `Monthly Price: $${currentPlan.basePrice}`;
    planFeaturesDiv.innerHTML = `
        <p><em>${currentPlan.features.join(", ")}</em></p>
        <p><strong>Cost per meal: $${(currentPlan.basePrice / (currentPlan.mealsPerWeek * 4)).toFixed(2)}</strong></p>
    `;

    displayPlanInfo('basicPlanInfo', basicPlan);
    displayPlanInfo('premiumPlanInfo', premiumPlan);
}

deliveryCheckbox.addEventListener('change', updateDisplay);
mealSelect.addEventListener('change', updateDisplay);
dietaryCheckbox.addEventListener('change', updateDisplay);

updateDisplay();