// const buyNow = document.getElementsByClassName("buy-submit")[0];
// const placeholder = document.getElementsByClassName("field-placeholder").placeholder = "Type name here..";
// const usrInput = document.querySelector('.field-input')
// const userLetterPreviw = document.querySelector('.plaque-prev')
// const userPricePreviw = document.querySelector('#plaquePrice')
// const printLength = document.querySelector('#buy-submit')
//
// buyNow.addEventListener("click", myFunction);
//
// function myFunction() {
//   alert ("Hello World!");
// }

const purchase = document.querySelector('.buy-submit')
buyNow=() =>{
    if (userLeterPreview.textContent === 'Your Name') {
        alert('Enter a new text')
}
    if (userInput.value === '') {
        alert('input letters')
}
    else if (userInput.value.length > 15) {
        alert('your msg here')
}
    // else {
    //     alert('your msg here')

}
purchase.addEventListener('click', buyNow)


// const countLetters = (some_data) =>{
//
//   const optName = some_data.replaceAll(' ', '')
//   const price = optName.length *5;
//   userLetterPreviw.textContent = some_data;
//   userPricePreviw.textContent = '$'+ price;
//
// }
//
// usrInput.oninput = (e)=>{
//   countLetters(e.target.value)
// }
