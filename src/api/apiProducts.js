import { collection, query, where, getDocs, getDoc,doc } from "firebase/firestore";
import { COLLECTION } from "../utils/constants";
import { db } from "./fireBase";



export async function getAllProducts(){
    try {
        const products=[]
        // const q = query(collection(db, "cities"), where("capital", "==", true));
        const q = query(collection(db, COLLECTION));
        const res = await getDocs(q);
        res.forEach((doc) => {
            products.push(doc.data())
          });
        console.log(products)

        return products
    } catch (error) {
        
    }
}

export const getProductsByCategory = async (categoryId) => { 
    try {
        const products=[]
        const q = query(collection(db, COLLECTION), where("category", "==", categoryId));
        const res = await getDocs(q);
        res.forEach((doc) => {
            products.push(doc.data())
          });
        console.log(products)

        return products
    } catch (error) {
        
    }
}

export const getProductsById = async (id) => { 
    try {
        const docRef = doc(db, COLLECTION, id);
        const product = await getDoc(docRef);
        return product.data()
    } catch (error) {
        
    }
}
