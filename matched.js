// const number=[45, 65, 23, 89, 19]
// for(let i=0; 1<number.length;i++){
//     const numbers=number[i]
//     console.log(numbers)
// }
const products=[
    {id:1, name:'Xiami Phone one night', price:19000},
    {id:2, name:'IPhone', price:19000},
    {id:3, name:'mac book air', price:190000},
    {id:4, name:'lenove yoga laptop 2025', price:19000},
    {id:5, name:'Del inspiron laptop', price:19000},
    {id:6, name:'Samsung Phone note 7', price:19000},
    {id:7, name:'Nokia old age Phone gone', price:19000},
    {id:8, name:'Phone one', price:19000},
    {id:8, name:'M2 chip not cheap LapTop', price:19000},
    
]
// for (const product of products) {
//     console.log(product);

// }
function matchedProducts(products, search) {
    const matched=[]
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}
const result=matchedProducts(products,'laptop')
console.log(result)