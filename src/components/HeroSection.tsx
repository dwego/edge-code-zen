import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Brain, Target, Upload as UploadIcon, FileCode, CheckCircle, Clock, Download } from "lucide-react";

type ProcessStep = 'upload' | 'analyzing' | 'optimizing' | 'complete';

const HeroSection = () => {
  const [currentStep, setCurrentStep] = useState<ProcessStep>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [optimizationResults, setOptimizationResults] = useState({
    originalTime: '2.3s',
    optimizedTime: '0.8s',
    improvement: '65%',
    suggestions: 3
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith('.java')) {
      setUploadedFile(file);
      startOptimizationProcess();
    }
  };

  const startOptimizationProcess = () => {
    setCurrentStep('analyzing');
    setProgress(0);
    
    // Simulate analysis
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCurrentStep('optimizing');
          startOptimization();
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const startOptimization = () => {
    setProgress(0);
    
    // Simulate optimization
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCurrentStep('complete');
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.java')) {
      setUploadedFile(file);
      startOptimizationProcess();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-[25vw] animate-float">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Code className="w-6 h-6 text-primary" />
        </div>
      </div>
        
      <div className="absolute bottom-10 left-10 animate-float delay-150">
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
              Reduza tempos de compilação.
              <span className="block mt-2 text-accent font-medium">
                Melhore performance.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Target className="w-5 h-5 mr-2" />
                Começar Agora
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

          {/* Right Upload Section */}
          <div className="relative">
            {currentStep === 'upload' && (
              <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-8">
                  <div 
                    className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-white">Arraste seu arquivo aqui</h3>
                    <p className="text-white/70 mb-4">ou clique para selecionar</p>
                    <Badge variant="outline" className="text-sm">
                      Apenas arquivos .java
                    </Badge>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".java"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 'analyzing' && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FileCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analisando Código</h3>
                  <p className="text-white/70 mb-6">
                    Identificando padrões e oportunidades...
                  </p>
                  <p className="text-sm font-medium mb-2 text-white">{uploadedFile?.name}</p>
                  <Progress value={progress} className="w-full mb-2" />
                  <p className="text-xs text-white/60">{progress}% concluído</p>
                </CardContent>
              </Card>
            )}

            {currentStep === 'optimizing' && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Otimizando Performance</h3>
                  <p className="text-white/70 mb-6">
                    Aplicando melhorias baseadas em Edge AI...
                  </p>
                  <Progress value={progress} className="w-full mb-2" />
                  <p className="text-xs text-white/60">{progress}% concluído</p>
                </CardContent>
              </Card>
            )}

            {currentStep === 'complete' && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Otimização Concluída!</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background/10 rounded-lg">
                      <Clock className="w-6 h-6 text-red-400 mx-auto mb-1" />
                      <p className="text-xs text-white/70">Original</p>
                      <p className="text-lg font-bold text-red-400">{optimizationResults.originalTime}</p>
                    </div>
                    <div className="text-center p-4 bg-background/10 rounded-lg">
                      <Zap className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <p className="text-xs text-white/70">Otimizado</p>
                      <p className="text-lg font-bold text-green-400">{optimizationResults.optimizedTime}</p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-4 border-green-400 text-green-400">
                    {optimizationResults.improvement} de melhoria
                  </Badge>
                  
                  <div className="flex flex-col gap-2">
                    <Button variant="hero" size="sm" className="text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Código
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-sm text-white border-white/20 hover:bg-white/10"
                      onClick={() => {
                        setCurrentStep('upload');
                        setUploadedFile(null);
                        setProgress(0);
                      }}
                    >
                      Novo Arquivo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
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