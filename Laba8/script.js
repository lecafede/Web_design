
add.addEventListener("click", function(){
    // var node = document.getElementsByClassName("row1")[0];

    // document.getElementsByClassName("wrap")[0].appendChild(node);
    var node = '<div class="row1"><form class="form-inline"> <div class="form-row align-items-center"> <div class="col-auto"><label class="sr-only" for="inlineFormInput">Name</label><input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="First Name"></div><div class="col-auto"><label class="sr-only" for="inlineFormInputGroup">Username</label><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text">@</div></div><input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"></div></div><div class="col-auto my-1"><div class="form-check"><input class="form-check-input" type="checkbox" id="autoSizingCheck2"></div></div></form></div>';
    document.getElementsByClassName("wrap")[0].innerHTML =  document.getElementsByClassName("wrap")[0].innerHTML + node;
})


rem.addEventListener("click", function(){
    var node = document.getElementsByClassName("row1")[0];
    // var textnode = document.createTextNode("text");
    // node.appendChild(textnode);
    document.getElementsByClassName("wrap")[0].removeChild(node);
})


// clean.addEven  tListener("click", function(){
//     let y = document.getElementsByTagName("form");
//     for(var i = 0; i < y.length; i++){
//         y[i].value = '';
//     }
// })


// // Добавим обработчик для события "click", предоставив callback.
// // Теперь по клику на элемент будет всплывать подсказка.

// buttonElement.addEventListener('click', function (event) {
//   alert('События вызвано функцией!');
// }); 

// // Теперь привяжем обработчик через объект, содержащий функцию

// buttonElement.addEventListener('click', { 
//   handleEvent: function (event) { 
//     alert('Событие вызвал handleEvent!'); 
//   } 
// }); 



