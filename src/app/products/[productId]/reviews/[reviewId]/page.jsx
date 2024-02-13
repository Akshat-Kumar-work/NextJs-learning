import React from 'react'

const reviewId = ({params}) => {
  return (
    <h1>
        Review page id {params.reviewId} for product id {params.productId} 
    </h1>
  )
}

export default reviewId