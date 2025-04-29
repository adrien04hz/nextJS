import ItemPokemon from "@/app/components/ItemPokemon";
import { PokemonEntero } from "@/app/interfaces/pokemonEntero";
import { PokemonHabTyp } from "@/app/interfaces/pokemonHabTyp";
import { PokemonsReponse } from "@/app/interfaces/pokemonResponse";
import { PokemonSimple } from "@/app/interfaces/pokemonSimple";

const getData = async (limit = 10, offset = 0) : Promise<PokemonHabTyp[]>  =>{
    
    const data : PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json());

    // obtener las habilidades

    const abilities = await Promise.all(
        data.results.map(
            async (item) => {
                const pokemon : PokemonEntero = await fetch(item.url)
                .then((response) => response.json());
                
                // desestructurar json
                const { id, name, abilities, types} = pokemon;

                return {
                    id: String(id),
                    name: name,
                    abilities: abilities.map((item) => String(item.ability?.name)),
                    types: types.map((item) => String(item.type?.name)),
                }
            }
        )
    );

    console.log(abilities);

    return abilities;
    
    
    // console.log(data);

    // const response: PokemonSimple[] = data.results.map(
    //     item => (
    //         {
    //             id: String(item.url.split('/').at(-2)),
    //             name: item.name,
    //         }
    //     )
    // );
    
    // return response;
}

export default async function PokemonPage() {
    const data = await getData(20);
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                data.map((item) => (
                    <div className="w-1/3 max-w-sm mb-4" key={item.id}>
                        <ItemPokemon id={item.id} name={item.name} abilities={item.abilities} types={item.types} />
                    </div>
                ))
            }
            {/* { JSON.stringify(data) } */}
        </div>
    );
}