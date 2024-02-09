const products=[
    {name:'shampoo',price:300},
    {name:'chiruni', price:100},
    {name:'shirt',price:500},
    {name:'pant ',price:600},
    {name:'shows',price:300}
]
function getShopingTotal(products) {
    let sum=0;
    for (const product of products) {
        // console.log(product)
     
        sum=sum+product.price
            
        }
        return sum;
    }
const total=getShopingTotal(products)
console.log('total ajke khosabe:',total)