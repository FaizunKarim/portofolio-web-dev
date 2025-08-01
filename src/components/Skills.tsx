import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { title } from "process";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Html", "CSS", "React", "Tailwind CSS", "Typescript JSX"]
    },
    {
      category: "Backend",
      skills: ["Javascript", "PHP", "Node.js", "Python"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Kotlin"]
    },
    {
      category: "Cloud & Tools",
      skills: ["Github", "Git", "Oracle"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Keahlian <span className="bg-gradient-primary bg-clip-text text-transparent">Teknis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun Website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-center text-lg">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Tools & Workflow</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["VS Code", "Figma", "Android Studio", "Oracle", "Jupyter Notebook", "Notion"].map((tool, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;