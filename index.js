
function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
return newArr
}

writeCards(names);

function countDown(num) {
    while (num >= 0) {
        console.log (num);
        num--
    }
}


