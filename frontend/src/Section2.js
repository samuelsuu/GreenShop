import React from 'react'
import './Section2.css'

const items = [
    {
        id: 1,
        image: '/images/community.png',
        title: "Large Network",
        description: "You can reach out to more customers. There is no limit to your  customer expansion",
    },
    {
        id: 2,
        image: '/images/sellMore.png',
        title: "Sell More",
        description: "You can sell your products any day, anytime and anywhere due to the fast buying process.",
    },
    {
        id: 3,
        image: '/images/training.png',
        title: "Free Training",
        description: "Become an expert, learn the basics of marketing and implement it on your green shop.",
    },
    {
        id: 4,
        image: '/images/mask.png',
        title: "Customer Support",
        description: "For a smooth experience, we provide adequate support from our online and offline agent.", 
    },
]
function Section2() {
  return (
    <div className='why'>
        <h2 className='why__heading'>Why Sell on Green Shop</h2>
        <div className="why__cover1">
        {items.map((item)=>(
            <div className="why__cover2">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Section2