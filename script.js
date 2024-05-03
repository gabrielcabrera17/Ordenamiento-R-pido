function particionHoare(arr, bajo, alto) {
    const pivote = arr[bajo];
    let i = bajo - 1;
    let j = alto + 1;
    
    while (true) {
        do {
            i++;
        } while (arr[i] < pivote);
        
        do {
            j--;
        } while (arr[j] > pivote);
        
        if (i >= j) return j;
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quicksort(arr, bajo = 0, alto = arr.length - 1) {
    if (bajo < alto) {
        const indicePivote = particionHoare(arr, bajo, alto);
        quicksort(arr, bajo, indicePivote);
        quicksort(arr, indicePivote + 1, alto);
    }
}

// Ejemplo de uso:
const arreglo = [29, 10, 14, 37, 13];
quicksort(arreglo);
console.log("Arreglo ordenado:", arreglo);
