// get value/price function
function getComponentCost(component) {
    const ComponentCost = document.getElementById(component + "-cost").innerText;
    return parseFloat(ComponentCost);
}

// set value/price function
function setComponentCost(component, amount) {
    const componentCostField = document.getElementById(component + "-cost");
    componentCostField.innerText = amount;
}

// calculate total function
function calculateTotal() {
    const memoryCost = getComponentCost("memory");
    const storageCost = getComponentCost("storage");
    const delivaryCost = getComponentCost("delivary");
    const bestPrice = getComponentCost("best");

    const totalPrice = bestPrice + memoryCost + storageCost + delivaryCost;
    setComponentCost("total", totalPrice);
    setComponentCost("grand-total", totalPrice);
}

// Memory options
document.getElementById("memory-8gb").addEventListener("click", function () {
    setComponentCost("memory", 0);
    calculateTotal();
});
document.getElementById("memory-16gb").addEventListener("click", function () {
    setComponentCost("memory", 180);
    calculateTotal();
});

//storage options
document.getElementById("storage-256gb").addEventListener("click", function () {
    setComponentCost("storage", 0);
    calculateTotal();
});
document.getElementById("storage-512gb").addEventListener("click", function () {
    setComponentCost("storage", 100);
    calculateTotal();
});
document.getElementById("storage-1tb").addEventListener("click", function () {
    setComponentCost("storage", 180);
    calculateTotal();
});

// delivary options
document.getElementById("standart-delivary").addEventListener("click", function () {
    setComponentCost("delivary", 0);
    calculateTotal();
});

document.getElementById("fast-delivary").addEventListener("click", function () {
    setComponentCost("delivary", 20);
    calculateTotal();
});


// Promo code
document.getElementById("apply-btn").addEventListener("click", function () {
    const promoCodeInput = document.getElementById("promo-code");
    const promoCode = promoCodeInput.value;
    if (promoCode == "stevekaku") {
        const totalPrice = getComponentCost("total");
        const priceCut = (totalPrice * 20) / 100;
        const discountedPrice = totalPrice - priceCut;

        setComponentCost("grand-total", discountedPrice);
        promoCodeInput.value = "";
        document.getElementById("coupon-error").style.display = "none";
    } else {
        document.getElementById("coupon-error").style.display = "block";
    }
});