function bubbleSort(arr){
    let length = arr.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length-1-i;j++){
            if(a[j] > a[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export {bubbleSort};