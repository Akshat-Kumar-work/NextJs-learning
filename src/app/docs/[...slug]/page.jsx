
import React from 'react'

const AllSegmentPage = ({params}) => {

    if(params.slug?.length===2){
        return (<h1>
            Viewing Docs for Feature {params.slug[0]}
            and concept {params.slug[1]}
        </h1>);
    }else if(params.slug?.length===1) {
        return (<h1>Viewing Docs for feature {params.slug[0]} </h1>);
    }
    
  return (
   <div>
    Docs Home Page
   </div>
  )
}

export default AllSegmentPage