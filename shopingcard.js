const products=[
    {name:'shampoo', price:300, quantity:2      },
    {name:'chiruni', price:100, quantity:1      },
    {name:'shirt',   price:500, quantity:5      },
    {name:'pant ',   price:600, quantity:4      },
    {name:'shows',   price:300, quantity:3      }
]
function cartTota(products) {
    let total=0;

    for (const product of products) {
        const thisProductCost=product.price*product.quantity;
        total=total+thisProductCost;
    }
    return total;
}
const shopingCost=cartTota(products)
console.log(shopingCost)