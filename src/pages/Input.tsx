import File from "../assets/file.png";
import Timer from "../assets/timer.png";
import Performance from "../assets/performance.png";
import { useNavigate } from "react-router-dom";

const Input = () => {
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
          <img src={Timer} alt="File logo" className="w-12 h-12" />
          <h1>
            Defina o limite de tempo <br />
            de execução do código
          </h1>{" "}
          <div className="flex flex-row gap-2">
            <select className="mt-2 p-2 rounded-md border text-gray-800">
              <option value="0">ms</option>
              <option value="1">s</option>
              <option value="2">min</option>
            </select>
            <input
              type="number"
              min={0}
              max={1000}
              className="mt-2 p-2 rounded-md border text-gray-800 w-24 text-center"
            />
          </div>
          <button onClick={() => navigate("/waiting")} className="mt-4 px-4 py-2 bg-blue-600 w-full text-white rounded-md hover:bg-blue-700 transition">
            Compilar Código
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

export default Input;
