import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartBadge() {
  const { items } = useCart()
  const count = items.reduce((s,p)=>s+p.qty,0)
  return (
    <Link to="/cart" className="relative bg-primary text-white px-3 py-2 rounded-md flex items-center gap-2">
      <ShoppingCart className="w-5 h-5" />
      <span className="hidden sm:inline">Cart</span>
      {count>0 && <span className="badge absolute -top-2 -right-2">{count}</span>}
    </Link>
  )
}