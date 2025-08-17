import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

function applyFilters(products, params) {
  let list = products
  const q = params.get('q')
  const cat = params.get('category')
  const price = Number(params.get('price') ?? 1000)
  const brand = params.get('brand')

  if (q) {
    const s = q.toLowerCase()
    list = list.filter(p => p.title.toLowerCase().includes(s))
  }
  if (cat) list = list.filter(p => p.category === cat)
  if (brand) list = list.filter(p => p.brand === brand)
  list = list.filter(p => p.price <= price)
  return list
}

export default function Home() {
  const [params] = useSearchParams()
  const filtered = applyFilters(PRODUCTS, params)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
      <Filters />
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
        {filtered.length === 0 ? (
          <div className="card p-8 text-center">No products found. Try changing filters.</div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </section>
    </div>
  )
}