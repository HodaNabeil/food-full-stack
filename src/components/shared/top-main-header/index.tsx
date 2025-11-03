import React from 'react'

export default function TopMainHeader({subTitle, title}:{subTitle:string, title:string}) {
  return (
   <>
   
         <span className="text-accent uppercase font-bold">{subTitle} </span>
             <h2 className="capitalize text-4xl font-bold italic text-primary">
       {title }

             </h2></>
  )
}
