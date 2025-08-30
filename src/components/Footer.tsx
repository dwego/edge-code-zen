import { Code2, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center mr-3">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EdgeJava AI</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Revolucionando o desenvolvimento Java com Edge AI e otimização inteligente em tempo real.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 EdgeJava AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;