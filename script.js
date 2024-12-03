
let matriz1 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matriz2 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matriz3 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

function gerarMatrizSecundaria(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            if(i+j == 6){
                matriz1[i][j] = 5
            }else{
                matriz1[i][j] = 0
            }
        }
    }
    console.table(matriz1)
}
function gerarMatrizPrincipal(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            if(i == j){
                matriz2[i][j] = 7
            }else{
                matriz2[i][j] = 0
            }
        }
    }
    console.table(matriz2)
}

function somarMatriz(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            matriz3[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    console.table(matriz3)
}


gerarMatrizSecundaria()
console.log('------------------------')
gerarMatrizPrincipal()
console.log('------------------------')
somarMatriz()
console.log('------------------------')


let matriz01 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matriz02 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matriz03 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

function gerarMatrizSecundaria(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            if(i+j == 6){
                matriz1[i][j] = 5
            }else{
                matriz1[i][j] = 0
            }
        }
    }
    console.table(matriz1)
}
function gerarMatrizPrincipal(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            if(i == j){
                matriz2[i][j] = 7
            }else{
                matriz2[i][j] = 0
            }
        }
    }
    console.table(matriz2)
}

function somarMatriz(){
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++){
            matriz3[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    console.table(matriz3)
}


gerarMatrizSecundaria()
console.log('------------------------')
gerarMatrizPrincipal()
console.log('------------------------')
somarMatriz()
console.log('------------------------')

let matriz =  [ [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],]

function gerarNumerosAleatorios(max,min){
    let valor = Math.floor(Math.random() * (max - min + 1)  + min)
    return valor
}


function gerarMatrizAleatoria(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            matriz[i][j] = gerarNumerosAleatorios(50,1)
        }
    }
    console.table(matriz)
}

function somarColunaImpares(){
    let somaImpares = 0
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(j % 2 == 1){
                somaImpares += matriz[i][j]
            }             
        }
    }
    console.log(somaImpares)
}

gerarMatrizAleatoria()
console.log('------------------------')
somarColunaImpares()


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }
    return arr;
  }
  

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  

  function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; 
    }
    return arr;
  }
  
  
  let arr = [5, 2, 9, 1, 5, 6];
  console.log(bubbleSort([...arr]));
  console.log(insertionSort([...arr]));
  console.log(selectionSort([...arr]));
  

  
function createDynamicList() {
 
    const ul = document.createElement('ul');
  
   
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    
   
    for (let i = 0; i < items.length; i++) {
     li = document.createElement('li'); 
      li.textContent = items[i]; 
      ul.appendChild(li); 
    }
  
    document.body.appendChild(ul);
  }
  

  createDynamicList();
  

  
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i); 
    }
  }
  printNumbers();

function print() {
    let i = 1; 
    while (i <= 10) { 
      console.log(i);  
      i++;  
    }
  }

  print();
  

  
function checkCategory(age) {
    if (age < 12) {
      console.log('Criança');
    } else if (age >= 12 && age <= 17) {
      console.log('Adolescente');
    } else if (age >= 18 && age <= 59) {
      console.log('Adulto');
    } else {
      console.log('Idoso');
    }
  }
  
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }
    return arr;
  }

  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }
    return arr;
  }
  