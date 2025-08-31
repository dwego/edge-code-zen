import File from "../assets/file.png";
import Timer from "../assets/timer.png";
import Performance from "../assets/performance.png";
import { useNavigate } from "react-router-dom";

const Waiting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-12">
        <div className="flex flex-col p-4 justify-center items-center gap-2 text-center opacity-25">
          <img src={File} alt="File logo" className="w-12 h-12" />
          <h1>
            Upload do <br />
            Código
          </h1>{" "}
        </div>

        <div className="flex flex-col p-4 justify-center items-center gap-2 text-center shadow-lg rounded-lg bg-white/10 backdrop-blur-md">
          <img src={Timer} alt="File logo" className="w-12 h-12 animate-pulse" />
          <h1 className="animate-pulse">
            Aguarde
          </h1>{" "}
          <p className="text-sm text-gray-300">
            Estamos análisando <br/> sua estrutura...
          </p>
          <button onClick={() => navigate("/finish")} className="mt-4 px-4 py-2 bg-blue-600 w-full text-white rounded-md hover:bg-blue-700 transition">
            Avançar (Temporario)
          </button>
        </div>

        <div className="flex flex-col p-4 justify-center items-center gap-2 text-center opacity-25">
          <img src={Performance} alt="File logo" className="w-12 h-12" />
          <h1>
            Mais <br />
            Performance
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Waiting;
