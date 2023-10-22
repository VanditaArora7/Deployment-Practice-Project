'use client'
import { createContext } from 'react'

export const MyContext = createContext()

const Context = ({ children }) => {
  const userName = 'Vandita is Cutest of all :)'
  return (
    <div>
      <MyContext.Provider value={userName}>{children}</MyContext.Provider>
    </div>
  )
}
export default Context
