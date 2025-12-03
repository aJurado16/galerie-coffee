function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-galerie-brown mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-galerie-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-galerie-blue">
              Donde el café se encuentra con el arte
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold text-galerie-green">Galerie Coffee</span> creemos 
              que cada taza de café es una oportunidad para crear algo único. Somos más que una 
              cafetería, somos un espacio donde la creatividad fluye libremente.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ofrecemos lienzos, figuras de cerámica, pinturas, pinceles y todo lo que necesitas 
              para dar vida a tu imaginación, mientras disfrutas de nuestros deliciosos desayunos 
              mexicanos y café de especialidad.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-galerie-cream rounded-lg">
                <div className="text-4xl mb-2">🎨</div>
                <p className="font-semibold text-galerie-brown">Arte & Creatividad</p>
              </div>
              <div className="text-center p-4 bg-galerie-cream rounded-lg">
                <div className="text-4xl mb-2">☕</div>
                <p className="font-semibold text-galerie-brown">Café de Especialidad</p>
              </div>
              <div className="text-center p-4 bg-galerie-cream rounded-lg">
                <div className="text-4xl mb-2">🥐</div>
                <p className="font-semibold text-galerie-brown">Desayunos</p>
              </div>
              <div className="text-center p-4 bg-galerie-cream rounded-lg">
                <div className="text-4xl mb-2">🍰</div>
                <p className="font-semibold text-galerie-brown">Postres Deliciosos</p>
              </div>
            </div>
          </div>

          {/* Imagen placeholder - aquí irá tu foto real */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-galerie-green/30 to-galerie-blue/30 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">🖼️</p>
                <p className="text-galerie-brown font-semibold text-xl">
                  Aquí irá una foto de tu cafetería
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About