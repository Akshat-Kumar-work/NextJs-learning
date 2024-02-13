import { notFound } from 'next/navigation';

import React from 'react'

const reviewId = ({params}) => {
  if(parseInt(params.reviewId)>100){
    return notFound();
  }
  return (
    <h1>
        Review page id {params.reviewId} for product id {params.productId} 
    </h1>
  )
}

export default reviewId