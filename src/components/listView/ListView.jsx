import React from 'react'
import './ListView.css'

export const ListView = ({ itemList }) => {
  return (
    <div >
        { itemList.map(
            item => (
                <div className='list-item'>
                    <img src={ item.img } alt={ item.name } />
                    <h3>{ item.name }</h3>
                    <h3>{ item.color }</h3>
                    <span>{ item.price }</span>
                    <button>Add to cart</button>
                </div>
        )) }
    </div>
  )
}
