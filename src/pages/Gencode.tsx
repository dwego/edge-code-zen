import { useNavigate } from "react-router-dom";

const Gencode = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col border p-8 rounded-lg">
          <h1 className="text-xl font-bold">Obrigado Por Usar Nosso Produto!</h1>
          <p>Seu código 100% melhorado!</p>
        <line className="border-b w-full my-4" />
        <div>
          Code here.
        </div>
        <p className="mt-5">Aproveite e entre na nossa <span className="font-bold">comunidade</span> do discord!</p>
      </div>
    </div>
  );
};

export default Gencode;
