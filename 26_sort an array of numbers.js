let grades = [100,33, 35, 72, 73, 95, 18, 29];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}

function ascendingSort(x, y){
    return x - y;
}

function print(val){
    console.log(val);
}