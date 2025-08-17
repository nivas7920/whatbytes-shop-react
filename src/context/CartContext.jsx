import React, { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from '../lib/useLocalStorage'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('cart', [])

  const api = useMemo(() => ({
    items,
    add(product, qty = 1) {
      setItems(prev => {
        const idx = prev.findIndex(p => p.id === product.id)
        if (idx >= 0) {
          const copy = [...prev]
          copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
          return copy
        }
        return [...prev, { ...product, qty }]
      })
    },
    remove(id) { setItems(prev => prev.filter(p => p.id !== id)) },
    setQty(id, qty) { setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p)) },
    clear() { setItems([]) },
    total() { return items.reduce((s,p)=>s+p.price*p.qty,0) }
  }), [items, setItems])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}