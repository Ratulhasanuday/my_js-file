const prices =[20000, 17000, 50000, 100000, 12000, 30000, 40000, 20000]
function getMin(number) {
    let min=number[0]
    for (const num of number) {
        // console.log(num)
        if(num<min){
            min=num
        }
    }
    return min;
}
const cheap= getMin(prices);
console.log('cheapest one is:',cheap)