const rowShow = document.getElementById('html-show')

for ( let index = 1; index <= 100 ; index++) {
    
     let message;

    if (index % 3 == 0 && index % 5 == 0) {
        console.log('FizzBuzz');
        message = "FizzBuzz";

    
    } else if (index % 3 == 0) {
        console.log('Fizz');
        message = "Fizz";

    } else if (index % 5 == 0) {
        console.log('Buzz');
        message = "Buzz";


    } else {
        console.log(index);
        message = index;

    }

    const showIndex = document.createElement('div');
    showIndex.classList.add('col-2');
    showIndex.innerHTML = message;


    rowShow.append(showIndex);
    
   
   
}




