import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload as UploadIcon, FileCode, Zap, CheckCircle, Clock, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

type ProcessStep = 'upload' | 'analyzing' | 'optimizing' | 'complete';

const Upload = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Edge AI Optimizer
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {currentStep === 'upload' && (
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Anexe seu código Java</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Faça upload do seu arquivo .java e veja a otimização acontecer em tempo real
                </p>
              </CardHeader>
              <CardContent>
                <div 
                  className="border-2 border-dashed border-primary/50 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <UploadIcon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-2">Arraste seu arquivo aqui</h3>
                  <p className="text-muted-foreground mb-4">ou clique para selecionar</p>
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
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FileCode className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Analisando Código</CardTitle>
                <p className="text-muted-foreground">
                  Identificando padrões e oportunidades de otimização...
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Arquivo: {uploadedFile?.name}</p>
                  <Progress value={progress} className="w-full" />
                  <p className="text-xs text-muted-foreground mt-2">{progress}% concluído</p>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 'optimizing' && (
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Otimizando Performance</CardTitle>
                <p className="text-muted-foreground">
                  Aplicando melhorias baseadas em Edge AI...
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Progress value={progress} className="w-full" />
                  <p className="text-xs text-muted-foreground mt-2">{progress}% concluído</p>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 'complete' && (
            <div className="space-y-6">
              <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-green-700 dark:text-green-300">
                    Otimização Concluída!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-6 bg-background rounded-lg border">
                      <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Tempo Original</p>
                      <p className="text-2xl font-bold text-red-500">{optimizationResults.originalTime}</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg border">
                      <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Tempo Otimizado</p>
                      <p className="text-2xl font-bold text-green-500">{optimizationResults.optimizedTime}</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <Badge variant="outline" className="text-lg px-4 py-2 border-green-500 text-green-600">
                      {optimizationResults.improvement} de melhoria
                    </Badge>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button variant="default" size="lg">
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Código Otimizado
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => {
                        setCurrentStep('upload');
                        setUploadedFile(null);
                        setProgress(0);
                      }}
                    >
                      Otimizar Outro Arquivo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sugestões de Otimização Aplicadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-medium">Otimização de Loop</h4>
                        <p className="text-sm text-muted-foreground">
                          Substituído loop tradicional por stream paralelo - melhoria de 40%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-medium">Cache de Resultados</h4>
                        <p className="text-sm text-muted-foreground">
                          Implementado cache para evitar recálculos desnecessários - melhoria de 20%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-medium">Gerenciamento de Memória</h4>
                        <p className="text-sm text-muted-foreground">
                          Otimizado uso de heap e reduzido garbage collection - melhoria de 5%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;