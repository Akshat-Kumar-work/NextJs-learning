"use client"

import { notFound } from 'next/navigation';


import React from 'react'

const reviewId = ({params}) => {



  if(parseInt(params.reviewId)>100){
    return notFound();
  }

  const random = 2;
  if(random ===1){
    throw new Error("Error loading review")
  }
  return (
    <h1>
        Review page id {params.reviewId} for product id {params.productId} 
    </h1>
  )
}

export default reviewId