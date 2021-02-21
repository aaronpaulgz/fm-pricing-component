let $pricingSwitch = document.getElementById("pricing-switch");
let $monthly = document.getElementsByClassName("monthly");
let $annual = document.getElementsByClassName("annual");

const changePrice = () => {
  if ($pricingSwitch.checked === true) {
    $annual[0].style.display = "none";
    $annual[1].style.display = "none";
    $annual[2].style.display = "none";

    $monthly[0].style.display = "block";
    $monthly[1].style.display = "block";
    $monthly[2].style.display = "block";
  } else if ($pricingSwitch.checked === false) {
    $annual[0].style.display = "block";
    $annual[1].style.display = "block";
    $annual[2].style.display = "block";

    $monthly[0].style.display = "none";
    $monthly[1].style.display = "none";
    $monthly[2].style.display = "none";
  } else {
  }
};
