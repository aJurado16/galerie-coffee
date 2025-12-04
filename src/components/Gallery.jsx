import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Aquí irán tus fotos reales después
  const galleryItems = [
    { 
      id: 1, 
      title: 'Espacio Creativo', 
      src: '/images/gallery/Sunset.jpg'
    },
    { 
      id: 2, 
      title: 'Café de Especialidad', 
      src: '/images/gallery/Caramelo-salado.jpg'
    },
    { 
      id: 3, 
      title: 'Arte en Cerámica', 
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    },
    { 
      id: 4, 
      title: 'Desayunos Mexicanos', 
      src: '/images/gallery/enfrijoladas.jpg'
    },
    { 
      id: 5, 
      title: 'Postres Artesanales', 
      emoji: '🍰',
    },
    { 
      id: 6, 
      title: 'Ambiente Acogedor', 
      emoji: '✨',
    },
  ]

  // Función para abrir el lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-galerie-brown mb-4">
            Galería
          </h2>
          <div className="w-24 h-1 bg-galerie-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Conoce nuestro espacio donde café y arte se encuentran
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square bg-gradient-to-br from-galerie-green/20 to-galerie-blue/20 rounded-2xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Placeholder - aquí irán tus fotos reales */}
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover"
                />

                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-galerie-brown/90 via-galerie-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end">
                    <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>
              
              {/* Indicador de que se puede hacer click */}
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={galleryItems.map(item => ({
                src: item.src,           // Usa la foto real
                title: item.title,
                description: item.description,
            }))}
            styles={{
                container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
            }}
        />

        {/* Llamado a la acción */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            ¿Listo para crear tu obra maestra mientras disfrutas un delicioso café?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-galerie-blue hover:bg-galerie-blue/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Visítanos Hoy
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery