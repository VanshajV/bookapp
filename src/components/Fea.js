import React from 'react'

export default function Fea() {
    const skills=[{title:"Exchange",img:"1.jpeg",p:"Exchange-facilitate exchange of your old books and other ammenities."},
    {title:"Audio Feature" ,img:"2.jpeg",p:"Audiobook-upload audio recordings of books/stories",cl:"bg-[#222222]"},
   
    {title:"Credits",img:"credits.avif",p:"Credits-earn redeemable credits thorugh eco friendly practices"},
    {title:"Market place",img:"1.jpeg",p:"Promote your sustainable eco-friendly business."}
    
];
  return (
    
    <>
  
     
  {
  skills.map((x)=>(
      <div className='flex flex-col justify-between w-96 bg-white p-7  border-[1px] border-black rounded-sm  h-[400px] items-center'>
      
      
      <img src={x.img} alt="" />

      <div className='flex flex-col'>
      <p className='text-2xl font-semibold'>{x.title}</p>
      <div className='h-[1px] bg-black my-1'></div>

      <div id="info" className='h-10'>{x.p}</div>
      </div>
      
      </div>
      
  ))
}
</>

  )
}
