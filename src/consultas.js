export const abrigos = async (code) => {
    let res = await fetch("http://localhost:5501/abrigo");
    let data = await res.json();
    let dataAbrigos = [];
    data.forEach(val => {
        dataAbrigos.push({
            name: val.nombre,
            image: val.imagen,
            price: val.precio,
            id: val.id
        });
    });
}