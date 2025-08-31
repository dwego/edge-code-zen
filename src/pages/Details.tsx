import File from "../assets/file.png";
import Timer from "../assets/timer.png";
import Close from "../assets/close.png";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center border p-8 rounded-lg">
        <img
          src={Close}
          alt="Close"
          className="cursor-pointer w-6 h-6 mb-4 self-end"
          onClick={() => navigate(-1)}
        />
        <div>
          <h1 className="text-xl font-bold">Melhorias Atingidas</h1>
          <p>Resumo gerado por IA → Revisão antes da aplicação</p>
        </div>
        <line className="border-b w-full my-4" />
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
