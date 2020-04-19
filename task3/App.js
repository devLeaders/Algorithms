// 1. Funkcja, która wypisuje 1 wiersz oraz ostatnia kolumne.
// 2. 5x5 = 4x4 n-1 // Funkcja, która zwraca tablicę mniejszą o n-1 wierszy i n-1 kolumn
// 3. Fukcja, ktora obraca tablice o 180 stopni.
// 4. 

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

// snail(array) #=> [1,2,3,6,9,8,7,4,5]    

const printRow = (array) => {
    let newArray = []
    newArray = newArray.concat(array[0])
    return newArray
}

const printColumn = (array) => {
    const newArray = array.map((arr) => arr[arr.length-1])
    return newArray
}

const snail = (array) => {
    if(array.length < 1) {
        return [];
    } else {
        const firstRow = printRow(array)
        array.splice(0,1);
        const lastColumn = printColumn(array)
        array.forEach((arr) => arr.splice(arr.length-1, 1))
        array.reverse()
        array.forEach((arr) => arr.reverse()); 
        return [...firstRow, ...lastColumn, ...snail(array)];
    }
}

console.log(snail(array));