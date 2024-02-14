import React from 'react'
import Card from '@/components/card'

//default route are used to render the component when its parallel route have any
//wrong route it will render the default route of the other or that component
const DefaultUserRoute = () => {
  return (
    <Card>user default route</Card>
  )
}

export default DefaultUserRoute