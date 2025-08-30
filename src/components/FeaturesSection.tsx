import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Timer, Database, UserCheck, Network, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Anexo Inteligente",
    description: "Upload de arquivos Java com detecção automática de parâmetros de tempo para compilação otimizada."
  },
  {
    icon: Timer,
    title: "Tempo Dinâmico",
    description: "Sistema adapta limites de tempo baseado no tamanho do arquivo - precisão de milissegundos."
  },
  {
    icon: Database,
    title: "Base Java Especializada",
    description: "Documentação pré-definida em Java funciona como referência para análises precisas."
  },
  {
    icon: UserCheck,
    title: "Controle Total",
    description: "Modificações só acontecem após sua confirmação - transparência e segurança garantidas."
  },
  {
    icon: Network,
    title: "RAG Personalizado",
    description: "Aprendizado contínuo individual que evolui com suas interações e padrões únicos."
  },
  {
    icon: Lightbulb,
    title: "Inteligência Coletiva",
    description: "Conectividade em rede permite beneficiar-se da experiência de outros desenvolvedores."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Recursos <span className="bg-primary-gradient bg-clip-text text-transparent">Avançados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta que combina Edge AI, otimização de performance e aprendizado contínuo 
            para revolucionar o desenvolvimento Java.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border border-border/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;