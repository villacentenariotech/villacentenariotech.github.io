export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <p className="text-lg mb-8">¿Tienes un proyecto en mente? ¡Contáctanos!</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Nombre" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Mensaje" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </section>
  );
}