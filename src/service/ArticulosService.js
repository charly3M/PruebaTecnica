import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Importa la configuración de Firebase

export const ProductService = {
    async getProductsData() {
        const datos = [];
        const querySnapshot = await getDocs(collection(db, 'Articulos'));
        querySnapshot.forEach((doc) => {
            datos.push(doc.data());
        });
        return datos;
    }
};
