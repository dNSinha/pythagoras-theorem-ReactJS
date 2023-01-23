function linearSearch1(list, item) {
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i
        }
    }
}

const linearSearch2 = (list, item) => {
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i
        }
    }
}

const linearSearch3 = (list, item) => {
    let i = 0;
    for (i=0; i<list.length; i++) {
        if (list[i] === item) {
            return i;
        }
    }
}

// O/P: 3
console.log(linearSearch1(['a', 'b', 'c', 'd'], 'd'));
console.log(linearSearch2(['a', 'b', 'c', 'd'], 'd'));
console.log(linearSearch3(['a', 'b', 'c', 'd'], 'd'));
