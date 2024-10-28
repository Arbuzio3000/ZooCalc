//Табы
const tabWeight = document.querySelector('.tab_weight'),
    tabClass = document.querySelector('.tab_class'),
    tabEconomy = document.querySelector('.tab_economy_main'),
    tabMedium = document.querySelector('.tab_medium_main'),
    tabPremium = document.querySelector('.tab_premium_main');

//Значения select
const selectAge = document.getElementById("select-age"),
    selectWeight = document.getElementById("select-weight"),
    selectClass = document.getElementById("select-class"); 

//Выбранное значение select
const selectedWeight = selectWeight.value,
    selectedClass = selectClass.value;

//Показ/скрытие табов
function showTab(tab) {
    tab.style.display = 'block';
}
function closeTab(tab) {
    tab.style.display = 'none';
}

// Изменение возраста собаки
selectAge.addEventListener("change", function() {
    const newValue = this.value;
    console.log("Новое выбранное значение:", newValue);

    if (newValue !== '1') {
        showTab(tabWeight);
    } else {
        showTab(tabWeight);
  }
});

//изменение веса собаки
selectWeight.addEventListener("change", function() {
    const newValue = this.value;
    console.log("Новое выбранное значение:", newValue);
    console.log(newValue)
    if (newValue !== '') {
        showTab(tabClass);
    } else {
        closeTab(tabClass);
  }
});

//изменение класса корма
selectClass.addEventListener("change", function() {
    const newValue = this.value;
    console.log("Новое выбранное значение:", newValue);

    if (newValue == 'Economy') {
        showTab(tabEconomy)
    } else closeTab(tabEconomy)

    if (newValue == 'Medium') {
        showTab(tabMedium)
    } else closeTab(tabMedium)

    if (newValue == 'Premium') {
        showTab(tabPremium)
    } else closeTab(tabPremium)
});




// var currentTab = 1; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }