const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// Function #1: Array Slice

let modifiedFood =[]
modifiedFood.push(foods.slice(1,4))
console.log(modifiedFood);


//Function #2: Array Splice

modifiedFood =["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood.splice(2,0,'noodles','icecream');
console.log(modifiedFood);

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
    let evenNumbers=numberArray.filter(num => (num%2==0))
    return evenNumbers;
}
console.log(isEven(numberArray));

function isPrime(numberArray)
{
    let primearray =numberArray.filter(num => {
        var c=0
        for (var i=2;i<num;i++) 
        {
          if (num%i ==0)
          {
            c=1
          }
        }
        if(c==0){
            return num
        }  
    })
    return primearray
}
console.log(isPrime(numberArray));

//Function #4: Reject
function nonPrime(numberArray)
{
    let nonprimearray =numberArray.filter(num => {
        for (var i=2;i<num;i++) 
        {
          if (num%i ==0)
          {
            return num
          }
        } 
    })
    return nonprimearray
}
console.log(nonPrime(numberArray));


// Function #5: Lambda

function isEven(numberArray)
{
    let evenNumbers=numberArray.filter(num => (num%2==0))
    return evenNumbers;
}
console.log(isEven(numberArray));


// Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    let sqarray = myArray.map(element => element*element)
    return sqarray
}
console.log(findSquareOfNumbers(myArray));


// Function #7: Reduce
myArray1=[2, 3, 5, 10]
function multiply(myArray1)
{
    let multipval = myArray1.reduce((currentval,ele) => {
        return currentval*ele;
    } )
    return multipval
}
console.log(multiply(myArray1));
    
        
