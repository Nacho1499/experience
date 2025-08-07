import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#F5F5F5] py-10 text-center text-sm text-gray-500 py-10 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2">Built for modern entrepreneurs, creators, and change-makers.</p>
          <div className="flex justify-center gap-4 text-xs">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Use</span>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer