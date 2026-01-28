import React from 'react'
import ColorButtons from './ColorButtons'

const ButtonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Coloring Buttons
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Click buttons to assign colors
        </p>
      </header>

      <main className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <ColorButtons />
      </main>

    </div>
  </div>
  )
}

export default ButtonPage
