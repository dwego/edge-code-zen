import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileCode, Clock, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileCode,
    title: "1. Upload do Código",
    description: "Anexe seu arquivo Java e nosso sistema identifica automaticamente os parâmetros de tempo."
  },
  {
    icon: Clock,
    title: "2. Defina o Limite",
    description: "Escolha o tempo alvo (ms, s, m) para execução/compilação conforme sua necessidade."
  },
  {
    icon: Brain,
    title: "3. IA Otimiza",
    description: "Nossa base especializada em Java analisa o código e sugere otimizações precisas e seguras."
  },
  {
    icon: CheckCircle,
    title: "4. Espera Aprovação",
    description: "Revise as sugestões e aprove apenas as mudanças que fazem sentido para você."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como <span className="bg-primary-gradient bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente em 4 etapas para otimização inteligente do seu código Java.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
         

          {/* Cards */}
          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-background border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  {/* Mobile Icon */}
                  <div className="lg:hidden w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow-primary">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 text-primary font-medium">
            <Brain className="w-5 h-5 mr-2" />
            Resultado: Código mais eficiente em minutos
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;