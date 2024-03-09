import React from 'react'
import { useState } from 'react'

import { ListView } from '../listView/ListView'
import { CardsView } from '../cardsView/CardsView'
import { IconSwitch } from '../iconSwitch/IconSwitch'

export const Store = ({ itemList }) => {

    const [viewType, setViewType] = useState("view_list")
    const onSwitch = () => {
        setViewType(viewType => (viewType === "view_list"? "view_module" : "view_list"))
    }

  return (
    <>
        <IconSwitch iconType={ viewType } onSwitch={ onSwitch } />
        {viewType === "view_list" ? <CardsView itemList={itemList} /> : <ListView itemList={itemList} />}
    </>
  )
}
