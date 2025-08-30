import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow delay-75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm border border-border/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-gradient rounded-full flex items-center justify-center shadow-glow-primary">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pronto para <span className="bg-primary-gradient bg-clip-text text-transparent">Acelerar</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Junte-se à revolução do desenvolvimento Java com Edge AI. 
              Otimização inteligente, aprendizado contínuo e resultados imediatos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="cta" size="lg" className="text-lg px-10 py-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-muted-foreground/30">
                Falar com Especialista
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Setup em 5 minutos
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Sem comprometimento
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Suporte 24/7
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;