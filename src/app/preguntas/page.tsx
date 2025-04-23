import React from 'react';
import { ElementoPregunta } from '../components/elementoPregunta';
import Image from 'next/image';

const preguntas = [
    {
        num: 1,
        question: '¿Qué es la Fórmula 1?',
        answer: 'La Fórmula 1 es la categoría más alta de automovilismo de monoplazas organizada por la FIA.'
    },
    {
        num: 2,
        question: '¿Cuántas carreras hay en una temporada de Fórmula 1?',
        answer: 'El número de carreras varía, pero generalmente hay entre 20 y 23 Grandes Premios por temporada.'
    },
    {
        num: 3,
        question: '¿Quién tiene más campeonatos de Fórmula 1?',
        answer: 'Lewis Hamilton y Michael Schumacher comparten el récord con 7 campeonatos cada uno.'
    },
    {
        num: 4,
        question: '¿Qué es un Gran Premio?',
        answer: 'Un Gran Premio es una carrera individual de Fórmula 1 que forma parte del campeonato mundial.'
    },
    {
        num: 5,
        question: '¿Qué equipos participan en la Fórmula 1?',
        answer: 'Equipos como Mercedes, Red Bull, Ferrari, McLaren, entre otros, participan en la Fórmula 1.'
    },
    {
        num: 6,
        question: '¿Qué es el DRS en Fórmula 1?',
        answer: 'El DRS (Drag Reduction System) es un sistema que reduce la resistencia aerodinámica para facilitar adelantamientos.'
    },
    {
        num: 7,
        question: '¿Qué tipo de neumáticos se usan en la Fórmula 1?',
        answer: 'Se usan neumáticos de diferentes compuestos (blandos, medios, duros) y para diferentes condiciones (seco, lluvia).'
    },
    {
        num: 8,
        question: '¿Qué es la pole position?',
        answer: 'La pole position es el primer lugar en la parrilla de salida, obtenido en la sesión de clasificación.'
    },
    {
        num: 9,
        question: '¿Qué motor usan los autos de Fórmula 1?',
        answer: 'Actualmente, los autos usan motores híbridos V6 turboalimentados de 1.6 litros.'
    },
    {
        num: 10,
        question: '¿Qué es el Safety Car?',
        answer: 'El Safety Car es un coche que entra en pista para reducir la velocidad en caso de incidentes o condiciones peligrosas.'
    }
];

export default function Preguntas() {
    return(
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                        <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <Image
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg"
                                alt="search"
                                width={30}
                                height={30}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                

                {
                    preguntas.map((pregunta) => (
                        <ElementoPregunta key={pregunta.num} num={pregunta.num.toString()} question={pregunta.question} answer={pregunta.answer} />
                    ))
                }
                <hr className="w-full lg:mt-10 my-8" />
            </div>
        </div>

    );
}