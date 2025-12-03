import { useState } from 'react'
import { HiSparkles, HiClock } from 'react-icons/hi'

function Espressarte() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const pieces = [
    // Decorativo
    {
      id: 1,
      name: 'Abanico',
      category: 'decorativo',
      price: '$95',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=400&fit=crop',
      popular: true,
      description: 'Abanico de papel tradicional. Perfecto para pintar diseños coloridos y llevarte un recuerdo funcional y decorativo.',
    },
    {
      id: 2,
      name: 'Espejo',
      category: 'decorativo',
      price: '$150',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop',
      description: 'Espejo circular con marco para personalizar. Ideal para decorar tu espacio con un toque único y personal.',
    },
    {
      id: 3,
      name: 'Godete',
      category: 'decorativo',
      sizes: [
        { size: 'Chico', price: '$95' },
        { size: 'Mediano', price: '$130' },
        { size: 'Grande', price: '$145' },
      ],
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop',
      popular: true,
      description: 'Pieza de MDF cortada con láser en forma de godete de pintura. En su interior tiene figuras grabadas listas para pintar. ¡Una obra de arte dentro de otra!',
    },
    // Lienzos
    {
      id: 4,
      name: 'Lienzo Chico',
      category: 'lienzos',
      price: '$85',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
      description: 'Lienzo con marco de madera y tela de algodón con gesso. Tamaño mini que incluye su propio caballete. ¡Perfecto para empezar!',
      includes: 'Incluye mini caballete',
    },
    {
      id: 5,
      name: 'Lienzo Mediano',
      category: 'lienzos',
      price: '$98',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
      description: 'Lienzo con marco de madera y tela de algodón preparada con gesso. Tamaño ideal para crear composiciones más detalladas.',
    },
    {
      id: 6,
      name: 'Lienzo Grande',
      category: 'lienzos',
      price: '$130',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
      popular: true,
      description: 'Lienzo con marco de madera y tela de algodón con gesso. El tamaño más grande para quienes quieren crear algo impactante.',
    },
    // Barro y Concreto
    {
      id: 7,
      name: 'Maceta',
      category: 'barro',
      sizes: [
        { size: 'Chica', price: '$115' },
        { size: 'Grande', price: '$130' },
      ],
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
      popular: true,
      description: 'Maceta de barro natural. Pinta tu propia maceta y llévate una pieza única para tus plantas favoritas.',
    },
    {
      id: 8,
      name: 'Pieza de Concreto',
      category: 'barro',
      price: '$230',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      description: 'Charolita de concreto perfecta para organizar anillos, aretes o pequeñas alhajas. Una pieza moderna y elegante para tu tocador.',
    },
    // Textil
    {
      id: 9,
      name: 'Tote Bag',
      category: 'textil',
      price: '$110',
      singlePrice: true,
      image: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?w=400&h=400&fit=crop',
      description: 'Bolsa de manta 100% algodón. Diseña tu propia bolsa y úsala para ir de compras, a la escuela o donde quieras.',
    },
  ]

  const categories = [
    { id: 'all', name: 'Todas', icon: '🎨' },
    { id: 'barro', name: 'Barro y Concreto', icon: '🏺' },
    { id: 'lienzos', name: 'Lienzos', icon: '🖼️' },
    { id: 'decorativo', name: 'Decorativo', icon: '✨' },
    { id: 'textil', name: 'Textil', icon: '👜' },
  ]

  const includes = [
    { icon: '🎨', text: 'Pinturas acrílicas' },
    { icon: '🖌️', text: 'Pinceles y herramientas' },
    { icon: '✏️', text: 'Lápices y plumas' },
    { icon: '🎓', text: 'Asesoría de color' },
    { icon: '👕', text: 'Mandil protector' },
    { icon: '⏰', text: 'Sin límite de tiempo' },
  ]

  const filteredPieces = selectedCategory === 'all' 
    ? pieces 
    : pieces.filter(piece => piece.category === selectedCategory)

  return (
    <section id="espressarte" className="py-20 px-4 bg-gradient-to-b from-galerie-green/10 to-galerie-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-galerie-green/20 text-galerie-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HiSparkles className="text-lg" />
            Experiencia única
          </div>
          
          <h2 className="text-5xl font-bold text-galerie-brown mb-4">
            Espressarte
          </h2>
          <div className="w-24 h-1 bg-galerie-green mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-4">
            Pinta, crea y vive. Elige tu pieza y nosotros te damos todo lo necesario 
            para que crees tu obra maestra mientras disfrutas un buen café.
          </p>

          {/* Horario */}
          <div className="inline-flex items-center gap-2 bg-galerie-brown/10 text-galerie-brown px-4 py-2 rounded-full text-sm font-medium">
            <HiClock className="text-lg" />
            Último horario: 8:00 PM
          </div>
        </div>

        {/* Qué incluye */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-galerie-brown text-center mb-6">
            ¿Qué incluye tu experiencia?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {includes.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 bg-galerie-cream/50 rounded-2xl"
              >
                <span className="text-3xl mb-2">{item.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-galerie-green text-white shadow-lg'
                  : 'bg-white text-galerie-brown hover:bg-galerie-green/10 shadow'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Instrucción */}
        <p className="text-center text-gray-500 text-sm mb-8">
          👆 Toca una pieza para ver más detalles
        </p>

        {/* Grid de piezas con flip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="h-80 cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => toggleFlip(piece.id)}
            >
              <div 
                className="relative w-full h-full transition-transform duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[piece.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Frente de la card */}
                <div 
                  className={`absolute w-full h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                    piece.popular ? 'ring-2 ring-galerie-green' : ''
                  }`}
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={piece.image}
                      alt={piece.name}
                      className="w-full h-full object-cover"
                    />
                    {piece.popular && (
                      <span className="absolute top-3 right-3 bg-galerie-green text-white text-xs font-bold px-3 py-1 rounded-full">
                        ⭐ Popular
                      </span>
                    )}
                    {piece.includes && (
                      <span className="absolute bottom-3 left-3 bg-galerie-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        🎁 {piece.includes}
                      </span>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-galerie-brown mb-3">
                      {piece.name}
                    </h3>

                    {piece.singlePrice ? (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Toca para ver más</span>
                        <span className="text-2xl font-bold text-galerie-green">
                          {piece.price}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {piece.sizes.map((sizeOption, idx) => (
                          <span 
                            key={idx}
                            className="bg-galerie-cream px-3 py-1 rounded-full text-sm"
                          >
                            {sizeOption.size}: <span className="font-bold text-galerie-green">{sizeOption.price}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Reverso de la card */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-galerie-green to-galerie-blue rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col justify-between"
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {piece.name}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    {piece.includes && (
                      <p className="text-white font-semibold mb-3">
                        🎁 {piece.includes}
                      </p>
                    )}
                    
                    {piece.singlePrice ? (
                      <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                        <span className="text-3xl font-bold text-white">{piece.price}</span>
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                        <div className="flex flex-wrap justify-center gap-2">
                          {piece.sizes.map((sizeOption, idx) => (
                            <span key={idx} className="text-white text-sm">
                              {sizeOption.size}: <span className="font-bold">{sizeOption.price}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <p className="text-white/70 text-xs text-center mt-3">
                      Toca para regresar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-galerie-blue/10 rounded-2xl p-6 max-w-xl">
            <p className="text-galerie-blue font-medium mb-2">
              💡 ¿Primera vez pintando?
            </p>
            <p className="text-gray-600 text-sm">
              No te preocupes, nuestro equipo te puede dar una pequeña capacitación 
              sobre técnicas de color y pintura. ¡Todos son bienvenidos!
            </p>
          </div>
        </div>

        {/* Stock note */}
        <p className="text-center text-gray-500 text-sm mt-6 italic">
          * El stock puede variar durante el día
        </p>
      </div>
    </section>
  )
}

export default Espressarte