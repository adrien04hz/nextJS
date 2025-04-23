
import type { Metadata } from "next";
import { Contador } from "../../components/Contador";

export const metadata: Metadata = {
  title: 'Mostrador',
  description: 'Contador de productos en el carrito',
};

export default function MostradorPage() {


    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <span>Productos en el carrito</span>     
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <Contador value={0} />
          
        </div>
        
      </div>
    );
  }