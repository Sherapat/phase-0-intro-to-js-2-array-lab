const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const appends = [...cats, name];
    return appends;
}

function prependCat(name) {
    const prepends = [name, ...cats];
    return prepends;
}

function removeLastCat() {
    const cat = cats.slice(0, cats.length - 1);
    return cat;
}

function removeFirstCat() {
    const cat = cats.slice(1);
    return cat;
}