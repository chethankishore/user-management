import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (

    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-700">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full px-4 md:px-10 py-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default RootLayout