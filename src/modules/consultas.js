export const dataAbrigos = async()=>{
    try{
        let res = await fetch("http://localhost:5501/abrigo")
        let data = await res.json()
        let dataUpdate = []
        data.forEach(val =>{
            dataUpdate.push({
                name: val.nombre,
                imagen: val.imagen,
                precio: val.precio,
                id: val.id
            })
        })
        return dataUpdate
    } catch (error) {
        console.error("Error al obtener los pedidos:", error);
        return [];
    }
} 
export const dataCamisetas = async()=>{
    try{
        let res = await fetch("http://localhost:5501/camiseta")
        let data = await res.json()
        let dataUpdate = []
        data.forEach(val =>{
            dataUpdate.push({
                name: val.nombre,
                imagen: val.imagen,
                precio: val.precio,
                id: val.id
            })
        })
        return dataUpdate
    } catch (error) {
        console.error("Error al obtener los pedidos:", error);
        return [];
    }
} 
export const dataPantalones = async()=>{
    try{    
        let res = await fetch("http://localhost:5501/pantalon")
        let data = await res.json()
        let dataUpdate = []
        data.forEach(val =>{
            dataUpdate.push({
                name: val.nombre,
                imagen: val.imagen,
                precio: val.precio,
                id: val.id
            })
        })
        return dataUpdate
    } catch (error) {
        console.error("Error al obtener los pedidos:", error);
        return [];
    }
} 

export const dataCarrito = async () => {
    try {
        let res = await fetch("http://localhost:5501/carrito");
        let data = await res.json();
        let dataUpdate = data.map(order => {
            let item = {};
            if (order.abrigoId) {
                item.id = order.abrigoId;
            } else if (order.pantalonId) {
                item.id = order.pantalonId;
            } else if (order.camisetaId) {
                item.id = order.camisetaId;
            }
            item.cantidad = order.cantidad;
            item.orderId = order.id;
            return item;
        });
        console.log(dataUpdate);
        return dataUpdate;
    } catch (error) {
        console.error("Error al obtener los pedidos:", error);
        return [];
    }
};

export const descripcionObjeto = async () => {
    try {
        let ordersRes = await fetch("http://localhost:5501/carrito");
        let ordersData = await ordersRes.json();

        let coatsRes = await fetch("http://localhost:5501/abrigo");
        let coatsData = await coatsRes.json();

        let shirtsRes = await fetch("http://localhost:5501/camiseta");
        let shirtsData = await shirtsRes.json();

        let pantsRes = await fetch("http://localhost:5501/pantalon");
        let pantsData = await pantsRes.json();
        
        let combinedData = ordersData.map(order => {
            let product = null;
            let type = null;
    
            if ('abrigoId' in order) {
                product = coatsData.find(coat => coat.id === order.abrigoId.toString());
                type = 'Abrigo';
            } else if ('camisetaId' in order) {
                product = shirtsData.find(shirt => shirt.id === order.camisetaId.toString());
                type = 'Camiseta';
            } else if ('pantalonId' in order) {
                product = pantsData.find(pant => pant.id === order.pantalonId.toString());
                type = 'Pantalon';
            }
            if (product) {
                return {
                    nombre: product.nombre,
                    imagen: product.imagen,
                    cantidad: order.cantidad,
                    precio: product.precio,
                    subtotal: order.cantidad * product.precio,
                    productId:order.id
                };
            }
        });
        return combinedData.filter(item => item);
    } catch (error) {
        console.error("Error al obtener los datos combinados: ", error);
        return [];
    }
};