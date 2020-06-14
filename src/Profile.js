import React from 'react'

export default function Profile(p)
{
   return(
       <div>
            <h1>{p.text.name}</h1>
            <h1>{p.data}</h1>
       </div>
   )
} 