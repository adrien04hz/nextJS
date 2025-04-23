
export default async function ToyPage() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=123");
    const post = await data.json();

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Pagina de pokemones</h1>
            <ul>
                {
                    post.results.map((post : any) => (
                        <li key={post.name}>{post.url}</li>
                    ))
                }
            </ul>
        </div>

    );
}

// import { PokemonsReponse, SimplePokemon } from "@/app/pokemones/interfaces/";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
// import Image from 'next/image';
// const respuesta = async (limit =10, offset = 0):Promise<SimplePokemon[]> => {
//     //console.log(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
//     const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//     .then((response) => response.json())

//     const pokemons = data.results.map(       
//        pokemon => ({
//             id: pokemon.url.split('/').at(-2)!,
//             name: pokemon.name
//         })

//     );
//     return pokemons;
// }


// export default async function ToyPage(){
//     const lista = await respuesta(35);

//     //console.log(lista.results);

//     return (
//         <div>
//             PokemonsPage

//             {
//                 //JSON.stringify(lista)
//             }
//             <ul>

//             {
//               /*
//             lista.map((pokemon) => (
//               <li key={pokemon.name}>
//                 {pokemon.name} <a href={pokemon.id}> Ver más</a>
//               </li>
//             ))*/
//           }
//             </ul>

//             <div className='flex flex-column'>
//               <div className="flex flex-wrap gap-10 items-center justify-center">
//                   <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`}
//                     width={150}
//                     height={150}
//                     alt = "imagen pokemon"
//                   />
//               </div>

//             </div>
//         </div>
//     )
// }
