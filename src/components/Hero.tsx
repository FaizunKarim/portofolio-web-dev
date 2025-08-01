import profilePhoto from "@/assets/profile photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20 animate-float">
              <img 
                src={profilePhoto} 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full animate-glow opacity-70"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Halo, Saya <br /> Muhammad Faizun Karim</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate Full-stack developer dengan pengalaman dalam membangun 
              aplikasi web dan mobile yang inovatif dan robust. 
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;