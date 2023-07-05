const products = [
    {
        id: '1',
        name: 'Camiseta Boca',
        price: 28000,
        category: 'Camisetas',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b5db73b38faa44fc9d9de43ac0c03a97_9366/Camiseta_Tercer_Uniforme_Boca_Juniors_23-24_Azul_HT9916_01_laydown.jpg',
        stock: '10',
        description: 'Camiseta alternativa Boca Juniors 2023'
    },
    {
        id: '2',
        name: 'Camiseta River',
        price: 26000,
        category: 'Camisetas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/36bb2f547c3c405d9401af01014a31bc_9366/Camiseta_de_juego_alternativa_River_Plate_22-23_Rojo_GB7587_01_laydown.jpg',
        stock: '10',
        description: 'Camiseta alternativa River Plate 2023'
    },

    {
        id: '3',
        name: 'Camiseta Seleccion Argentina',
        price: 30000,
        category: 'Camisetas',
        img: 'https://sporting.vtexassets.com/arquivos/ids/745385-800-800?v=638144070712970000&width=800&height=800&aspect=true',
        stock: '10',
        description: 'Camiseta Argentina 3 estrellas'
    },

    {
        id: '4',
        name: 'Buzo Seleccion Argentina',
        price: 32000,
        category: 'Buzos',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/545/691/products/1b107a00-cbd6-4564-b76e-0d4c8a7fe5501-b9fafe70199e20fc5c16745902544142-640-0.jpeg',
        stock: '10',
        description: 'Camiseta Argentina 3 estrellas'
    },

    {
        id: '5',
        name: 'Buzo Boca Juniors',
        price: 32000,
        category: 'Buzos',
        img: 'https://bocashop.vteximg.com.br/arquivos/ids/169035-1000-1000/HC1000_1.jpg?v=638019164469500000',
        stock: '10',
        description: 'Camiseta Argentina 3 estrellas'
    },

    {
        id: '6',
        name: 'Campera Seleccion Argentina',
        price: 34000,
        category: 'Camperas',
        img: 'https://sporting.vtexassets.com/arquivos/ids/802402-800-800?v=638205320017830000&width=800&height=800&aspect=true',
        stock: '10',
        description: 'Camiseta Argentina 3 estrellas'
    },

    {
        id: '7',
        name: 'Campera Boca Juniors',
        price: 38000,
        category: 'Camperas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da049f8eb47f41da8237e8297e2f0c79_9366/Campera_de_Invierno_Boca_Juniors_Condivo_22_Azul_HC0999_01_laydown.jpg',
        stock: '10',
        description: 'Camiseta Argentina 3 estrellas'
    },
]

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
} 

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}