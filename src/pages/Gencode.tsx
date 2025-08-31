import { useNavigate } from "react-router-dom";

const Gencode = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col border p-8 rounded-lg">
        <h1 className="text-xl font-bold">Obrigado por usar nosso produto!</h1>
        <p>Seu código 100% melhorado!</p>
        <line className="border-b w-full my-4" />
        <div>
          <code className="bg-gray-100 p-4 rounded-lg block whitespace-pre-wrap">
            {`// Código Melhorado
const soma = (a, b) => a + b;`}
          </code>
          <button>Run MS!</button>
        </div>
        <p className="mt-5">
          Aproveite e entre na nossa{" "}
          <a className="font-bold" href="https://discord.com/invite/programador">comunidade</a> do discord!
        </p>        
      </div>
    </div>
  );
};

export default Gencode;
