var container = document.createElement('div');
document.body.append(container);
counter = 0

for (var i = 0; i < 81; i++) {
    //i %2 === 0 ? div.style.color = 'black';
    var div = document.createElement('div');
    container.append(div);
    counter ++;
    div.style.width = '10.9%'
    div.style.float = 'left'
    //div.style.background = 'red'
    div.style.paddingBottom = '11.1%'
    div.style.border = '1px solid black'
    div.id = counter;
    div.id %2 === 0 ? 
        div.style.background = 'black' : 
        div.style.background = 'red'
}

