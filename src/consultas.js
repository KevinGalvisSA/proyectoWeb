export const abrigos = async () => {
    let res = await fetch("http://localhost:5501/abrigo");
    let data = await res.json();
    return data.map(val => ({
        name: val.nombre,
        image: val.imagen,
        price: val.precio,
        id: val.id
    }));
}

export const camisetas = async () => {
    let res = await fetch("http://localhost:5501/camiseta");
    let data = await res.json();
    return data.map(val => ({
        name: val.nombre,
        image: val.imagen,
        price: val.precio,
        id: val.id
    }));
}

export const pantalones = async () => {
    let res = await fetch("http://localhost:5501/pantalon");
    let data = await res.json();
    return data.map(val => ({
        name: val.nombre,
        image: val.imagen,
        price: val.precio,
        id: val.id
    }));
}

