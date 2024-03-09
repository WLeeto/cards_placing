import React from "react";
import './CardsView.css'

export function CardsView({ itemList }) {
    console.log(itemList)
    return (
      <div>
        { itemList.map(
            item => (
                <div className="card-item">
                    <h1>{ item.name }</h1>
                    <h3>{ item.color }</h3>
                    <img src={ item.img } alt={ item.name } />
                    <div className="card-footer">
                        <span>${ item.price }</span>
                        <button>Add to cart</button>
                    </div>
                </div>
            )
        ) }
      </div>
    )
  }