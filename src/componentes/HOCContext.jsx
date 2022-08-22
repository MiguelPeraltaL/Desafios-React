import React from 'react'
import { createContext, useEffect, useState } from 'react'
export const myContext = createContext()

export default function HOCContext({ children }) {

    const [prod,setProd]=useState([])
    const [arregloCarro,setArregloCarro]=useState([])

  return (
    <div>
        <myContext.Provider value={{ prod, setProd, arregloCarro, setArregloCarro }}>{children}</myContext.Provider>
    </div>
  )
}
