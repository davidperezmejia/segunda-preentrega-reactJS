const products =[
    {
        id: '1',
        name:'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70036997.jpg',
        stock: 25,
        description: 'Descripcion del Ipone 12'
    },
    {
        id: '2',
        name:'Iphone 13',
        price: 1000,
        category: 'celular',
        img: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70042949.jpg',
        stock: 25,
        description: 'Descripcion del Ipone 13'
    },
    {
        id: '3',
        name:'Iphone 14',
        price: 1000,
        category: 'celular',
        img: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70050666.jpg',
        stock: 25,
        description: 'Descripcion del Ipone 14'
    },
]
 export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
} 

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById =  (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod =>
           prod.id === productId))
              }, 500)
    })
  }


