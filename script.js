const rowShow = document.getElementById('html-show')

for ( let index = 1; index <= 100 ; index++) {
    
     

    if (index % 3 == 0 && index % 5 == 0) {
        console.log('FizzBuzz');
    
    } else if (index % 3 == 0) {
        console.log('Fizz');

    } else if (index % 5 == 0) {
        console.log('Buzz');

    } else {
        console.log(index);
    }

    const showIndex = document.createElement('div');
    showIndex.classList.add('col-2');
    showIndex.innerHTML = index;


    rowShow.append(showIndex);
    
   
   
}




