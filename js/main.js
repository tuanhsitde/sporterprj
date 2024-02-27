//learn more/see details
// function changeDetail() {
//     let getDetails = document.querySelector('.details .changeDetail');
//     if (getDetails.innerHTML === "FREE AND EASY RETURN") {
//         document.querySelector('.details .changeDetail').immerHTML = "FREE SHIPPING ON ORDER OVER $10"
//     } else {
//         document.querySelector('.details .changeDetail').innerHTML = "FREE AND EASY RETURN";
//     }
//     return getDetails.innerHTML;
// }
// setInterval( changeDetail(), 4000);




//getVoucher
let closeAds = document.querySelector('#closeX').addEventListener('click', () => {
    const addClass = document.querySelector('.btnGetVoucher').classList.add('closeAds');
});