const swap = (arr, first_Index, second_Index) => {
    let temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

const bubbleSort = (arr) => {

    let len = arr.length;
    let i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));
