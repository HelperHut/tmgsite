import React from 'react'
import SearchBar from './SearchBar'

const layout = ({children}) => {
  return (
    <section>
        <SearchBar/>
        {children}
    </section>
  )
}

export default layout