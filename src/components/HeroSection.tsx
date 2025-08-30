import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Brain, Target } from "lucide-react";
import heroImage from "@/assets/hero-edge-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Code className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-75">
        <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
          <Zap className="w-4 h-4 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float delay-150">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Edge AI
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                para Código Java
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Otimização inteligente em tempo real com aprendizado contínuo.
              <span className="block mt-2 text-accent font-medium">
                Reduza tempos de compilação. Melhore performance.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Target className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/70">Redução no Tempo</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-white/70">Integridade do Código</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">∞</div>
                <div className="text-sm text-white/70">Aprendizado Contínuo</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Card className="bg-card-gradient border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={heroImage} 
                  alt="Edge AI Code Optimization" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
            
            {/* Floating Code Snippet */}
            <div className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
              <code className="text-sm text-primary font-mono">
                // Otimização aplicada<br/>
                <span className="text-accent">compilationTime:</span> <span className="text-destructive">5ms</span> ↓ <span className="text-green-500">2ms</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;