import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
                setLoading(false) // Se establece el estado de loading en falso una vez que los datos han sido cargados
            })
            .catch(error =>
                console.log(error))
    }, [categoryId])

    if (loading) {
        // Aquí puedes agregar un indicador de carga si lo deseas
        return <p>Cargando...</p>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer