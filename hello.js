// const firstColorField = document.querySelector('.field1')
// const secondColorField = document.querySelector('.field2')
// const thirdColorField = document.querySelector('.field3')

// firstColorField.addEventListener('click', () => {


// if(firstColorField.classList.contains('orange')  && thirdColorField.classList.contains('purple')) {

//     firstColorField.classList.remove('orange')
//     firstColorField.classList.add('purple')
//     thirdColorField.classList.remove('purple')
//     thirdColorField.classList.add('orange')
// } 
// else if (firstColorField.classList.contains('purple') && secondColorField.classList.contains('pink') && thirdColorField.classList.contains('orange')) {
//     firstColorField.classList.remove('purple')
//     firstColorField.classList.add('orange')
//     thirdColorField.classList.remove('orange')
//     thirdColorField.classList.add('purple')
// } 

// });


// secondColorField.addEventListener('click', () => {


//     if(secondColorField.classList.contains('pink')  && thirdColorField.classList.contains('purple')) {
    
//         secondColorField.classList.remove('pink')
//         secondColorField.classList.add('purple')
//         thirdColorField.classList.remove('purple')
//         thirdColorField.classList.add('pink')
//     } 
//     else if (firstColorField.classList.contains('purple') && secondColorField.classList.contains('pink') && thirdColorField.classList.contains('orange')) {
//         firstColorField.classList.remove('purple')
//         firstColorField.classList.add('orange')
//         thirdColorField.classList.remove('orange')
//         thirdColorField.classList.add('purple')
//     } 
    
//     });


// Get the fields by their class names
const firstColorField = document.querySelector('.field1')
const secondColorField = document.querySelector('.field2')
const thirdColorField = document.querySelector('.field3')


// Define a function that will swap the colors of two fields
function swapColors(field1, field2) {
  // Get the current color classes of the fields
  let color1 = field1.className.split(' ')[1]
  let color2 = field2.className.split(' ')[1]
  let text1 = field1.innerHTML
  let text2 = field2.innerHTML
  // Remove the current color classes and add the opposite ones
  field1.classList.remove(color1)
  field1.classList.add(color2)
  field2.classList.remove(color2)
  field2.classList.add(color1)
  field1.innerHTML = text2
  field2.innerHTML = text1
}



// Add event listeners to each field that will call the swap function
firstColorField.addEventListener('click', () => {
  // Swap the colors of the first and third fields
  swapColors(firstColorField, thirdColorField)
})

secondColorField.addEventListener('click', () => {
  // Swap the colors of the second and third fields
  swapColors(secondColorField, thirdColorField)
})

thirdColorField.addEventListener('click', () => {
  // Swap the colors of the first and second fields
  swapColors(firstColorField, secondColorField)
})