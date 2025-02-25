import { collection, query, where, getDocs, getDoc,doc, setDoc } from "firebase/firestore";
import { COLLECTION } from "../utils/constants";
import { db } from "./fireBase";




export async function getAllProducts(){
    try {
        const products=[]
        const q = query(collection(db, COLLECTION));
        const res = await getDocs(q);
        res.forEach((doc) => {
            products.push(doc.data())
          });


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
        

        return products
    } catch (error) {
        console.error(error)
    }
}

export const getProductsById = async (id) => { 
    try {
        const docRef = doc(db, COLLECTION, id);
        const product = await getDoc(docRef);
        return product.data()
    } catch (error) {
        console.error(error)
    }
}

export const getOrderById = async (id) => { 
    try {
        const docRef = doc(db, "order", id);
        const order = await getDoc(docRef);
        return order.data()
    } catch (error) {
        console.error(error)
    }
}

export const saveOrder = async (order) => {
    try {
        await setDoc(doc(db, "order" , order.id), order);
    } catch (error) {
        console.error(error)    }
}