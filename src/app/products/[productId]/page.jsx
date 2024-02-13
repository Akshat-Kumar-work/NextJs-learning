import React from 'react'

//setting title dynamically
export const generateMetadata = ({params})=>{
  return {
    title: `Product ${params.productId}`
  }
}

const productId = ({params}) => {
  return (
    <div>productId {params.productId}</div>
  )
}

export default productId