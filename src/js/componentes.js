import '../css/componentes.css'
export const saludar = (nombre) => {
    console.log('Creandoe tiqueta H1, en el html');
    const h1 = document.createElement('h1');
    h1.innerHTML = `hola, ${nombre}, ¿Como estas?`;
    document.body.append(h1);
}