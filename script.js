let displayed = document.querySelector('.list-group')



var input = document.getElementById('search-input').value;

$('.search-button').on('click', function(){
    var input = document.getElementById('search-input').value;
    let listOfcitys = JSON.parse(localStorage.getItem('listOfcitys')) || [];

    //  let listOfcitys = JSON.parse(localStorage.getItem('city'));

    if (listOfcitys === null){
        listOfcitys = [];
        listOfcitys.push(input);
        localStorage.setItem('listOfcitys', JSON.stringify(listOfcitys));
    } else {
        listOfcitys.push(input);
        localStorage.setItem('listOfcitys', JSON.stringify(listOfcitys));

    }
    console.log(input);

   
});

