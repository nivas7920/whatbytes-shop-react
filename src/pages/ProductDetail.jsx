import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)
  const { add } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) return <div className="card p-8">Product not found.</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="card p-4 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
      </div>
      <div className="card p-6 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="text-2xl font-semibold">${product.price}</div>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut volutpat nunc.</p>
        <div>Category: <span className="capitalize">{product.category}</span></div>
        <div className="flex items-center gap-2">
          <label className="font-medium">Qty</label>
          <input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1, parseInt(e.target.value||'1',10)))} className="input w-24" />
        </div>
        <button onClick={() => add(product, qty)} className="btn-primary">Add to Cart</button>
        <Link to="/" className="underline text-primary block">← Back to products</Link>
      </div>
    </div>
  )
}