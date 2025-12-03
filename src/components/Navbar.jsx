import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Cierra el menú móvil después de hacer clic
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
            <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                <img 
                    src="/images/icons/Galerie-Coffee_VersiónE-01.png" 
                    alt="Galerie Coffee Logo" 
                    className="h-12 w-auto"
                />
                <span className="text-2xl font-bold text-galerie-brown hover:text-galerie-green transition-colors">
                    Galerie Coffee
                </span>
            </button>

          {/* Links de navegación - Desktop */}
            <div className="hidden md:flex gap-8">
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
                >
                    Nosotros
                </button>
                <button
                    onClick={() => scrollToSection('menu')}
                    className="text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
                >
                    Menú
                </button>
                <button
                    onClick={() => scrollToSection('espressarte')} 
                    className="text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
                >
                    EspressArte
                </button>
                <button
                    onClick={() => scrollToSection('gallery')}
                    className="text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
                >
                    Galería
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-galerie-green hover:bg-galerie-green/90 text-white px-6 py-2 rounded-full font-semibold transition-all"
                >
                    Contacto
                </button>
            </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-galerie-brown"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
            >
            Nosotros
            </button>
            <button
            onClick={() => scrollToSection('menu')}
            className="block w-full text-left py-2 text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
            >
            Menú
            </button>
            <button
            onClick={() => scrollToSection('espressarte')} 
            className="block w-full text-left py-2 text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
            >
            Actividades
            </button>
            <button
            onClick={() => scrollToSection('gallery')}
            className="block w-full text-left py-2 text-galerie-brown hover:text-galerie-green font-semibold transition-colors"
            >
            Galería
            </button>
            <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 bg-galerie-green text-white px-4 rounded-lg font-semibold"
            >
            Contacto
            </button>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar