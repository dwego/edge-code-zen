import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import File from "../assets/file.png";
import Codeai from "../assets/codeai.png";
import Performance from "../assets/performance.png";
import Arrow from "../assets/arrow.png";
import axios from "axios";
import {
  Zap,
  Upload as UploadIcon,
  FileCode,
  CheckCircle,
  Clock,
  Download,
} from "lucide-react";

// >>>> CLIENTE AXIOS CORRIGIDO
const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 60000,
  // withCredentials: true, // habilite se sua API usar cookies/sessão
});

// ————————————————————————
// Tipos esperados da API (ajuste conforme seu backend)
// ————————————————————————
type Metrics = {
  original_ms?: number;
  optimized_ms?: number;
  improvement_percent?: number; // ex.: 65
};

type UploadResponse = {
  optimized_code?: string; // Código Java otimizado
  metrics?: Metrics; // Métricas de tempo
  suggestions_count?: number; // Qtde de recomendações
  // job_id?: string;             // Caso faça processamento assíncrono
  // message?: string;
};

type ProcessStep = "upload" | "analyzing" | "optimizing" | "complete";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<ProcessStep>("upload");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [optimizedCode, setOptimizedCode] = useState<string>("");
  const [optimizationResults, setOptimizationResults] = useState({
    originalTime: "—",
    optimizedTime: "—",
    improvement: "—",
    suggestions: 0,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Utilitário para formatar ms em "Xs" com 1 casa
  const msToSeconds = (ms?: number) =>
    typeof ms === "number" ? `${(ms / 1000).toFixed(1)}s` : "—";

  // Faz upload + acompanha progresso + preenche resultados
  const uploadAndOptimize = async (file: File) => {
    setErrorMsg("");
    setOptimizedCode("");
    setCurrentStep("analyzing");
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Upload com progresso real
      const { data } = await api.post<UploadResponse>(
        "/upload/java",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (evt) => {
            if (!evt.total) {
              // alguns servers não mandam 'total'; evita NaN
              setProgress((prev) => (prev < 95 ? prev + 5 : 95));
              return;
            }
            const percent = Math.round((evt.loaded * 100) / evt.total);
            setProgress(percent);
          },
        }
      );

      // Avança para "optimizing" e faz uma animação curta (caso backend já tenha otimizado)
      setCurrentStep("optimizing");
      await animateToComplete(700, 20); // 0.7s animando a fase "optimizing"
      setCurrentStep("complete");

      // Extrai dados da resposta
      const metrics = data.metrics || {};
      const originalTime = msToSeconds(metrics.original_ms);
      const optimizedTime = msToSeconds(metrics.optimized_ms);
      const improvement =
        typeof metrics.improvement_percent === "number"
          ? `${metrics.improvement_percent}%`
          : "—";

      setOptimizationResults({
        originalTime,
        optimizedTime,
        improvement,
        suggestions: data.suggestions_count ?? 0,
      });

      setOptimizedCode(data.optimized_code || "");
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err?.response?.data?.detail ??
          err?.message ??
          "Falha ao enviar/otimizar o arquivo."
      );
      // Volta para upload para tentar de novo
      setCurrentStep("upload");
      setProgress(0);
    }
  };

  const goToInput = () => navigate("/input");
  // Pequena animação de progresso para a etapa "optimizing"
  const animateToComplete = (durationMs: number, stepMs: number) =>
    new Promise<void>((resolve) => {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next =
            prev + Math.max(1, Math.floor(100 * (stepMs / durationMs)));
          if (next >= 100) {
            clearInterval(interval);
            resolve();
            goToInput();
            return 100;
          }
          return next;
        });
      }, stepMs);
    });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".java")) {
      setErrorMsg("Selecione um arquivo .java");
      return;
    }
    setUploadedFile(file);
    uploadAndOptimize(file);
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".java")) {
      setErrorMsg("Selecione um arquivo .java");
      return;
    }
    setUploadedFile(file);
    uploadAndOptimize(file);
  };

  // Baixa o código otimizado como arquivo .java
  const handleDownload = () => {
    if (!optimizedCode) return;
    const blob = new Blob([optimizedCode], { type: "text/x-java-source" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const name = uploadedFile?.name
      ? uploadedFile.name.replace(/\.java$/i, "") + ".optimized.java"
      : "optimized.java";
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex-col items-center justify-center">
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
        <div className="items-center text-center flex-col">
          <div className="mb-12 flex flex-col gap-2">
            <h1 className="text-6xl">Compile.IQ</h1>
            <p>Otimização de código inteligente em Java.</p>
          </div>

          {/* Trio de features */}
          <div className="flex items-center justify-center gap-12">
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img src={File} alt="File logo" className="w-12 h-12" />
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #202020 0%, #868686 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Upload do <br />
                Código
              </h1>{" "}
            </div>
            <img src={Arrow} alt="Arrow" className="h-4" />
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img src={Codeai} alt="File logo" className="w-12 h-12" />
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #202020 0%, #868686 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IA <br />
                Especializada
              </h1>{" "}
            </div>
            <img src={Arrow} alt="Arrow" className="h-4" />
            <div className="flex flex-col p-4 justify-center items-center gap-2 text-center">
              <img src={Performance} alt="File logo" className="w-12 h-12" />
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #202020 0%, #868686 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mais <br />
                Performance
              </h1>{" "}
            </div>
          </div>

          <div className="relative mt-8">
            {currentStep === "upload" && (
              <Card>
                <CardContent className="p-8">
                  <div
                    className="border-2 border-dashed rounded-lg px-32 py-4 text-center hover:border-primary transition-colors cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadIcon className="w-12 h-12 mx-auto mb-4 " />
                    <h3 className="text-lg font-semibold mb-2">
                      Arraste seu arquivo aqui
                    </h3>
                    <p className="text-black/50 mb-4">
                      ou clique para selecionar
                    </p>
                    <Badge variant="outline" className="text-sm text-black/70">
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

                  {errorMsg && (
                    <p className="text-sm text-red-600 mt-3">{errorMsg}</p>
                  )}

                  <Button className="mt-6" onClick={goToInput}>
                    input (temporary)
                  </Button>
                </CardContent>
              </Card>
            )}

            {currentStep === "analyzing" && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FileCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Analisando Código
                  </h3>
                  <p className="text-white/70 mb-6">
                    Identificando padrões e oportunidades...
                  </p>
                  <p className="text-sm font-medium mb-2 text-white">
                    {uploadedFile?.name}
                  </p>
                  <Progress value={progress} className="w-full mb-2" />
                  <p className="text-xs text-white/60">{progress}% concluído</p>
                </CardContent>
              </Card>
            )}

            {currentStep === "optimizing" && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Otimizando Performance
                  </h3>
                  <p className="text-white/70 mb-6">
                    Aplicando melhorias baseadas em Edge AI...
                  </p>
                  <Progress value={progress} className="w-full mb-2" />
                  <p className="text-xs text-white/60">{progress}% concluído</p>
                </CardContent>
              </Card>
            )}

            {currentStep === "complete" && (
              <Card className="bg-card-gradient border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Otimização Concluída!
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background/10 rounded-lg">
                      <Clock className="w-6 h-6 text-red-400 mx-auto mb-1" />
                      <p className="text-xs text-white/70">Original</p>
                      <p className="text-lg font-bold text-red-400">
                        {optimizationResults.originalTime}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-background/10 rounded-lg">
                      <Zap className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <p className="text-xs text-white/70">Otimizado</p>
                      <p className="text-lg font-bold text-green-400">
                        {optimizationResults.optimizedTime}
                      </p>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="mb-4 border-green-400 text-green-400"
                  >
                    {optimizationResults.improvement} de melhoria
                  </Badge>

                  <div className="flex flex-col gap-2">
                    <Button
                      variant="hero"
                      size="sm"
                      className="text-sm"
                      onClick={handleDownload}
                      disabled={!optimizedCode}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Código
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm text-white border-white/20 hover:bg-white/10"
                      onClick={() => {
                        setCurrentStep("upload");
                        setUploadedFile(null);
                        setProgress(0);
                        setOptimizedCode("");
                        setOptimizationResults({
                          originalTime: "—",
                          optimizedTime: "—",
                          improvement: "—",
                          suggestions: 0,
                        });
                        setErrorMsg("");
                      }}
                    >
                      Novo Arquivo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Floating Code Snippet */}
            <div
              style={{ marginLeft: "25%" }}
              className="absolute bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border"
            >
              <code className="text-sm text-primary font-mono">
                // Otimização aplicada
                <br />
                <span className="text-accent">compilationTime:</span>{" "}
                <span className="text-destructive">5ms</span> ↓{" "}
                <span className="text-green-500">2ms</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
