function monthlySavings(arr,livingCost) {
    let savings=0;
    if ( arr.isArray!==false &&  livingCost!=="number") {
        return 'invalid input';
    }
 
    for(const newArray of arr){
        if(newArray >= 3000){
            savings= savings + newArray-(newArray*0.20) ;
        }
        else{
            savings= savings + newArray;
        }
    }
    savings = savings-livingCost;
    if (savings<0) {
        return 'earn more';
    }
    return savings;  
}
const add =5500;
const livingCost=[1000,2000,3000]
console.log(monthlySavings(add,livingCost))

