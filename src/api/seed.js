/*este archivo sirve para poblar de productos la base de datos de manera recursiva*/
import { nanoid } from "nanoid";
import { db } from "./fireBase";
import { doc, setDoc } from "firebase/firestore";
import { getProducts } from "../utils/asyncProducts";
import { COLLECTION } from "../utils/constants";


async function save(product) {
  try {
    const productId = nanoid();
    await setDoc(doc(db, COLLECTION, productId), { ...product, id: productId });
  } catch (error) {}
}
export async function seedProducts() {
  const products = await getProducts();
  products.forEach((p) => {
    save(p);
  });
}
