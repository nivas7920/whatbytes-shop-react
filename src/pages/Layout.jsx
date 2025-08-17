import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import CartBadge from '../components/CartBadge'
import { User } from 'lucide-react'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-white">
        <div className="container flex items-center justify-between py-4 gap-4">
          <Link to="/" className="text-2xl font-extrabold text-white bg-primary px-4 py-2 rounded-md">Logo</Link>
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>
          <div className="flex items-center gap-2">
            <CartBadge />
            <div className="flex items-center gap-1 bg-primary text-white px-3 py-2 rounded-md">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 flex-1">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Filters</h4>
            <p>All &nbsp; Electronics</p>
            <p className="mt-6 text-sm opacity-75">© 2024 American</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">f</div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">t</div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">ig</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}