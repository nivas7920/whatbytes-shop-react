import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <div className="card p-4 flex flex-col">
      <Link to={`/product/${p.id}`} className="mb-3">
        <img src={p.image} alt={p.title} className="w-full h-40 object-contain" />
      </Link>
      <div className="flex-1">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-gray-600">${p.price}</p>
        <div className="text-yellow-500" aria-label={`rating ${p.rating}`}>
          {"★".repeat(Math.round(p.rating))}{"☆".repeat(5 - Math.round(p.rating))}
        </div>
      </div>
      <button onClick={() => add(p,1)} className="btn-primary mt-3">Add to Cart</button>
    </div>
  )
}