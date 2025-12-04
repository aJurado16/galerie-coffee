function Hero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-galerie-cream via-galerie-green/20 to-galerie-blue/30 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-galerie-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-galerie-blue rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-galerie-brown">
          Galerie Coffee
        </h1>
        
        <p className="text-2xl md:text-3xl text-galerie-blue font-medium mb-4">
          Café · Arte · Creatividad
        </p>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Disfruta de un delicioso café mientras das vida a tu creatividad. 
          Pintamos, creamos y compartimos momentos únicos.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-galerie-green hover:bg-galerie-green/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Ver Menú
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="bg-galerie-blue hover:bg-galerie-blue/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Conoce Nuestro Arte
          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-galerie-brown text-4xl">↓</div>
      </div>
    </section>
  )
}

export default Hero