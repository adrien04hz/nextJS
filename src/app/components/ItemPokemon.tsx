import Image from "next/image";
import { PokemonHabTyp } from "../interfaces/pokemonHabTyp";


export default function ItemPokemon({ id, name, abilities, types } : PokemonHabTyp) {
    return (

        
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b h-80">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        width={200}
                        height={200}
                        alt={name}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50">{name.charAt(0).toUpperCase()+name.slice(1)}</p>

                    {
                        types.map( (tipo, index) => (
                            <p key={index} className="text-sm text-gray-100">{tipo.charAt(0).toUpperCase()+tipo.slice(1)}</p>
                        ))
                    }
                    
                </div>
                <div className="border-b h-35 p-4 max-h-40 overflow-y-auto">
                    <p className="text-lg text-black-500">Abilities</p>
                    <div className="pt-2 pl-5">
                        {
                            abilities.map( (habilidad, index) => (
                                <p key={index} className="text-sm text-gray-500">{habilidad.charAt(0).toUpperCase()+habilidad.slice(1)}</p>
                            ))
                        }
                    </div>
                </div>

                <div className="">
                    <button className="w-full h-9 hover:bg-gray-100">
                        <p>Buy now!</p>
                    </button>
                </div>
            </div>
        </div>
        
    );
}
