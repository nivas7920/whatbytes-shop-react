import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [term, setTerm] = useState(params.get('q') ?? '')

  useEffect(()=> setTerm(params.get('q') ?? ''), [params])

  function onSubmit(e) {
    e.preventDefault()
    const sp = new URLSearchParams(params.toString())
    if (term) sp.set('q', term); else sp.delete('q')
    navigate({ search: sp.toString() })
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 w-full">
      <div className="flex items-center bg-white border rounded-md overflow-hidden flex-1">
        <div className="px-3"><Search className="w-5 h-5" /></div>
        <input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Search for products..." className="input border-0 flex-1" />
      </div>
      <button className="btn-primary">Search</button>
    </form>
  )
}