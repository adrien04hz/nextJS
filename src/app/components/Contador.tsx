'use client';
import { useState } from "react";

interface Props {
    value?: number;
}

export const Contador = ({ value = 0} : Props) => {
    const [count, setCount] = useState(value);

    return (
        <>
            <span className='text-7xl'>
                {count}
            </span>

            <div className = "flex flex-row gap-2 py-2">
                <button
                    onClick={() => setCount(count + 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>

            <button
                onClick={() => console.log('Agregar producto')} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[200px]">
                Agregar producto
          </button> 
        </>
    );
};
