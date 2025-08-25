import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project 1.png";
import project2 from "@/assets/project 2.png";
import project3 from "@/assets/project3.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Learn",
      description: "Full-stack Web Aplikasi untuk platform pembelajaran online bahasa inggris dengan fitur kursus, kuis, dan dilengkapi dengan integrasi AI untuk menunjang pembelajaran.",
      image: project1,
      technologies: ["HTML", "Node.js", "Typescript", "Tailwind", "Supabase"],
      github: "#",
      demo: "https://english-learning-website-two.vercel.app/",
      featured: true
    },
    {
      title: "Tebak Negara",
      description: "Aplikasi mobile untuk tebak-tebakan negara dengan pertanyaan seputar negara, seperti Geografi negara, Julukan Negara, dan informasi menarik lainnya.",
      image: project2,
      technologies: ["Kotlin", "Xml"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "SMAN 11 Surabaya Web Profile",
      description: "Website profil SMAN 11 Surabaya yang berisi informasi lengkap tentang profil sekolah, sejarah, identitas, dan struktur kepemimpinan sekolah.",
      image: project3,
      technologies: ["Typescript", "Vite", "React", "Tailwind"],
      github: "#",
      demo: "https://sman11-sby.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Portfolio <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beberapa project terbaru yang telah saya kerjakan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${project.featured ? 'lg:col-span-1' : ''}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-2 h-5 w-5" />
            Lihat Semua Project di GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
