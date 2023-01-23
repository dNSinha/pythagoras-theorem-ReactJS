const swap = (arr, first_Index, second_Index) => {
    let temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

const selectionSort = (inputArr) => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            swap(inputArr, i, min);
        }
    }
    return inputArr;
}

console.log(selectionSort([3, 0, 2, 5, -1, 4, 1]));
