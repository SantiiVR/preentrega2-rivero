import { COLLECTION } from "./constants";

export function saveProduct(product){
const savedProducts=getProducts()
const productExist=savedProducts?.find((p) => p.id===product.id)
if (!productExist) {
    savedProducts.push(product)
    localStorage.setItem(COLLECTION , JSON.stringify(savedProducts))
} else {
    const newProducts = savedProducts?.filter((p) => p.id !== product.id )
    newProducts.push(product)
    localStorage.setItem(COLLECTION , JSON.stringify(newProducts))
}

}
function getProducts(){
    const products= JSON.parse(localStorage.getItem(COLLECTION))
    if (!products) return []
    return products
}