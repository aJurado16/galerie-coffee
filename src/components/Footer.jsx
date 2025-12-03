import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-galerie-brown text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Sobre nosotros */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-galerie-green">
              Galerie Coffee
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Donde el café se encuentra con el arte. Crea, disfruta y comparte momentos únicos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-galerie-green transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-galerie-green transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-galerie-green transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-galerie-green transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Durango, Dgo.</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>(618) 369-15-07</span>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/galerie.coffee?igsh=MTVzaG4yY2ZmM3dzdw%3D%3D&utm_source=qr" 
                className="text-2xl hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/share/1KAV1H9G8m/?mibextid=wwXIfr" 
                className="text-2xl hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-gray-400">
          <p>© 2025 Galerie Coffee. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer