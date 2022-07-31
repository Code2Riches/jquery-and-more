// Creates Div
let div = $('<div>Hello World!</div>')

let body = $('body');

//adds our div to the body
body.append(div);

$('div').on('click', () => alert("Hello World!"));

div.on('click', function(){
    alert("Hello World!");
})