import React from 'react'
import Item from "../app/Item"


const ItemList = ({props}) => {
    return (
        <div className='wrap'>
            {props.map((item, key) => {
                return <Item key = {item.id} image = {item.Image} title = {item.Title} price = {item.Price} props = {item}/>
            })}
        </div>
    ) 
} 

export default ItemList