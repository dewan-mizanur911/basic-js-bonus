const accessories = [
    {
        name: 'Apple watch', price: 12599
    },
    {
        name: 'Iphone XR', price: 120599
    },
    {
        name: 'Lenovo Laptop', price: 51999
    },
    {
        name: 'Apple Ipad Laptop', price: 122599
    },
    {
        name: 'LG Mobile', price: 31999
    },
    {
        name: 'OnePlus Mobile', price: 66599
    }
]
function searchProduct(products, searchText){
    const searched = [];
    for(const product of products){
        if(product.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
            searched.push(product);
        }
    }
    return searched;
}
const searchItem = searchProduct(accessories, 'LAPTOP');
console.log(searchItem);