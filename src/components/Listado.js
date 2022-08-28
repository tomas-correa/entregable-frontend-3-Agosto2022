import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item'
import data from './data.json'

export default function Listado(props) {

const productoJSON = JSON.stringify(data)
const productos = JSON.parse(productoJSON);

  return (
    <div className='container'>
      {productos.map(p => <Item nombre={p.producto.nombre} descripcion = {p.producto.descripcion} stock={p.stock} sumarAlCarrito={props.sumar} />)}
    </div>
  )
}
