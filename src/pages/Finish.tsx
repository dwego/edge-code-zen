import File from "../assets/file.png";
import Timer from "../assets/timer.png";
import Confirm from "../assets/confirm.png";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex gap-4">
          <div className="flex gap-4 w-full items-center border p-4 rounded-lg">
            <img src={Timer} alt="Timer" className="w-16 h-16 mb-4" />
            <div>
              <h1 className="font-bold text-lg">Tempo Alvo Atingido:</h1>
              <div className="flex gap-2 text-green-500 text-sm">
                <p>250ms</p> → <p>180ms</p>
              </div>
            </div>
          </div>
          <div onClick={() => navigate("./details")}  className="flex cursor-pointer w-full gap-4 items-center border p-4 rounded-lg">
            <img src={Confirm} alt="Confirm" className="w-16 h-16 mb-4" />
            <div>
              <h1 className="font-bold text-lg">Melhorias Atingidas</h1>
              <div className="flex gap-2 text-gray-500 text-sm">
                <p>Veja nossas sugestões.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex justify-center gap-4 w-full items-center border p-2 rounded-lg cursor-pointer" style={{backgroundColor: "rgba(255, 0, 0, 0.25)", borderColor: "#FF0000", textAlign: "center"}}>
              <h1 className="font-bold text-lg text-center" style={{color: "#FF0000"}}>Revisar Alterações</h1>
          </div>
           <div onClick={() => navigate("./waiting")} className="flex justify-center gap-4 w-full items-center border p-2 rounded-lg cursor-pointer" style={{backgroundColor: "rgba(0, 154, 46, 0.25)", borderColor: "#00910C"}}>
              <h1 className="font-bold text-lg" style={{color: "#00910C"}} >Aceitar & Gerar Código</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
