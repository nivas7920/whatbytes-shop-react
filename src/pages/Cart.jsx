import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, remove, setQty, total, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="card p-8 text-center">
        Cart is empty. <Link className="text-primary underline" to="/">Go shopping</Link>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_320px]">
      <div className="card">
        <div className="p-4 border-b font-semibold">Items</div>
        <ul className="divide-y">
          {items.map(item => (
            <li key={item.id} className="p-4 flex gap-4 items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">${item.price}</div>
              </div>
              <input type="number" min="1" value={item.qty} onChange={e=>setQty(item.id, Math.max(1, parseInt(e.target.value||'1',10)))} className="input w-20" />
              <button onClick={() => remove(item.id)} className="btn bg-gray-200">Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-6 h-fit">
        <div className="text-lg font-semibold mb-2">Summary</div>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span><span>${total().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span><span>$0.00</span>
        </div>
        <div className="flex justify-between font-bold text-xl mb-4">
          <span>Total</span><span>${total().toFixed(2)}</span>
        </div>
        <button className="btn-primary w-full mb-2">Checkout</button>
        <button onClick={clear} className="btn w-full bg-gray-200">Clear Cart</button>
      </div>
    </div>
  )
}