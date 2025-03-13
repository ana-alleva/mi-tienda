import Royal from "../assets/royal.png";
import OldPrince from "../assets/old prince.png";
import DogPro from "../assets/dog pro.png";
import VitalCan from "../assets/vital can.png";

export default function Marcas() {
 
    return (
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="font-sm text-slate-400 text-center">Marcas que trabajan con Nosotros</p>
        <div className="flex items-end justify-center gap-12 flex-wrap">
            <img src={Royal} alt="Royal" />
            <img src={OldPrince} alt="Dog Pro" />
            <img src={DogPro} alt="Dog Pro" />
            <img src={VitalCan} alt="Dog Pro" />
        </div>
      </div>
    );
  }
  