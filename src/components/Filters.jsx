import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Filters() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const [category, setCategory] = useState(params.get('category') ?? 'all')
  const [price, setPrice] = useState(Number(params.get('price') ?? 1000))
  const [brand, setBrand] = useState(params.get('brand') ?? 'all')

  useEffect(() => {
    setCategory(params.get('category') ?? 'all')
    setPrice(Number(params.get('price') ?? 1000))
    setBrand(params.get('brand') ?? 'all')
  }, [params])

  function update(newCat, newPrice, newBrand) {
    const sp = new URLSearchParams(params.toString())
    if (newCat === 'all') sp.delete('category'); else sp.set('category', newCat)
    if (newPrice === 1000) sp.delete('price'); else sp.set('price', String(newPrice))
    if (newBrand === 'all') sp.delete('brand'); else sp.set('brand', newBrand)
    navigate({ search: sp.toString() })
  }

  return (
    <aside className="sidebar">
      <h3 className="text-lg font-semibold">Filters</h3>
      <div>
        <p className="font-medium mb-2">Category</p>
        {['all','electronics','clothing','home'].map(c => (
          <label key={c} className="flex items-center gap-2 py-1">
            <input type="radio" name="cat" checked={category===c} onChange={()=>{ setCategory(c); update(c, price, brand); }} />
            <span className="capitalize">{c}</span>
          </label>
        ))}
      </div>

      <div className="pt-4">
        <p className="font-medium mb-2">Price</p>
        <input type="range" min="0" max="1000" value={price} onChange={e=>{ const v = Number(e.target.value); setPrice(v); update(category, v, brand); }} className="w-full" />
        <div className="mt-1 text-sm">${price}</div>
      </div>

      <div className="pt-4">
        <p className="font-medium mb-2">Brand (optional)</p>
        {['all','Runner','Soundify','BagIt','Wristly','ShadeCo','Photon','Cottony','Fonez'].map(b => (
          <label key={b} className="flex items-center gap-2 py-1">
            <input type="radio" name="brand" checked={brand===b} onChange={()=>{ setBrand(b); update(category, price, b); }} />
            <span className="capitalize">{b}</span>
          </label>
        ))}
      </div>
    </aside>
  )
}