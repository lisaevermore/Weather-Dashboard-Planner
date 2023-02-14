let displayed = document.querySelector('.list-group')
// let listOfcitys = JSON.parse(localStorage.getItem('city')) || [];






// let listOfcitys = JSON.parse(localStorage.getItem('city'));

var searchInput = $(".search-button")

$(".search-button").on('click', function(){
    var input = document.getElementById('search-input').value;
    let listOfcitys = JSON.parse(localStorage.getItem('city')) || [];

    //  let listOfcitys = JSON.parse(localStorage.getItem('city'));

    if (listOfcitys === null){
        listOfcitys = [];
        listOfcitys.push(input);
        localStorage.setItem('listOfcitys', JSON.stringify(listOfcitys));
    } else {
        listOfcitys.push(input);
        localStorage.setItem('listOfcitys', JSON.stringify(listOfcitys));

    }
    for (let i = 0; i < listOfcitys.length; i++){
        var listEl = $("<li>").text(listOfcitys[i])
        displayed.append(listEl);
     }
   
});



//  for (let i = 0; i < listOfcitys.length; i++){
//     var listEl = $("<li>").text(listOfcitys[i])
//     displayed.append(listEl);
//  }