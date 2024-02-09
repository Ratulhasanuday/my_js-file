const mobiles=[
    {name:'Samsung', price:30000, camera:'20mp', color:'black'},
    {name:'Xoami', price:20000, camera:'20mp', color:'black'},
    {name:'Oppo', price:15000, camera:'20mp', color:'black'},
    {name:'Iphone', price:200000, camera:'20mp', color:'black'},
    {name:'Walton', price:35000, camera:'20mp', color:'black'},
    {name:'HTC', price:50000, camera:'20mp', color:'black'}

]
function getCheapestPhone(mobiles) {
    let min = mobiles[0]
    for (const phone of mobiles) {
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;

}
const cheap=getCheapestPhone(mobiles)
console.log("cheapest phone is:",cheap)