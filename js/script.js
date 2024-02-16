// Get Random image 
image_array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']

window.onload = function get_random_image() {
    // get random index
    random_index = Math.floor(Math.random() * image_array.length);
    // get an image in the random index
    selected_image = image_array[random_index]

    // display the image
    document.getElementById('image-id').src = `./images/menu/${selected_image}`;
}


// // Select Random Name from array
// let btn = document.getElementById('btn');
// let result = document.getElementById('title-item');

// let text_array = ['Chicken Corn Soup', 'Teriyaki Beef', 'Orange Chicken', 'Spicy Tuna Sushi Roll'];

// function getRandomNumber(min, max) {
//     let step1 = max - min + 1;
//     let step2 = Math.random() * step1;
//     let result = Math.floor(step2) + min;

//     return result
// }

// btn.addEventListener('click', () => {
//     let index = getRandomNumber(0, text_array.length - 1);
//     result.innerHTML = text_array[index];
// })
