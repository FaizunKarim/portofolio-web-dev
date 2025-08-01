const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tentang <span className="bg-gradient-primary bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seorang web developer yang tertarik dalam 
            mengembangkan website yang inovatif dan user-friendly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Perjalanan Saya</h3>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Dimulai dari keingintahuan tentang bagaimana sebuah aplikasi dan website bekerja, 
              saya memutuskan untuk masuk kuliah di jurusan Teknik Informatika pada tahun 2023, dan
              mulai belajar coding untuk membuat website sederhana hingga kompleks.
            </p>
            <p>
              Saat ini saya fokus belajar dan mengembangkan keahlian di bidang 
              <span className="font-semibold"> Fullstack Web Development</span>, menggunakan 
              framework modern seperti React, Node.js, dan berbagai tools DevOps lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;