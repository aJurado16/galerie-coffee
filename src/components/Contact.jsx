import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-galerie-cream">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-galerie-brown mb-4">
            Encuéntranos
          </h2>
          <div className="w-24 h-1 bg-galerie-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Ven a crear, disfrutar y compartir momentos únicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-galerie-brown mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <p className="font-semibold text-galerie-blue mb-1">Dirección</p>
                    <p className="text-gray-700">
                      Calle Pino Suarez #1206<br />
                      Zona Centro<br />
                      Durango, Dgo.
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                        <div className="flex-1">
                            <p className="font-semibold text-galerie-blue mb-2">Teléfono / WhatsApp</p>
                            <div className="flex items-center gap-4 flex-wrap">
                                <p className="text-gray-700 text-lg">(618) 369-15-07</p>
                                <a 
                                    href="https://wa.me/message/RVCSL4JR6T5WN1?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20Galerie%20Coffee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all transform hover:scale-105"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Chatea
                                </a>
                            </div>
                        </div>
                </div>

                {/* Redes sociales */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="font-semibold text-galerie-blue mb-2">Síguenos</p>
                    <div className="flex gap-3">
                        <a 
                            href="https://www.instagram.com/galerie.coffee?igsh=MTVzaG4yY2ZmM3dzdw%3D%3D&utm_source=qr" 
                            className="text-3xl text-pink-600 hover:scale-110 transition-transform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://www.facebook.com/share/1KAV1H9G8m/?mibextid=wwXIfr" 
                            className="text-3xl text-blue-600 hover:scale-110 transition-transform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-galerie-brown mb-6">
                Horarios
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-galerie-blue">Lunes</span>
                  <span className="text-gray-700">Cerrado</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-galerie-blue">Martes - Domingo</span>
                  <span className="text-gray-700">9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-full min-h-[400px]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.5345728181375!2d-104.67487316997497!3d24.02130997542082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc96ee3f64195%3A0x77ad52e6ba796344!2sGalerie%20Coffee!5e0!3m2!1ses-419!2smx!4v1759361188273!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Galerie Coffee"
            ></iframe>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact