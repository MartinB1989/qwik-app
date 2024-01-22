import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  const pokemonId = useSignal(1)

  const changePokemonId = $((value: number) => {
    if((pokemonId.value + value)<= 0) return

    pokemonId.value += value
  })

  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-5xl">Hola Mundo</h1>
        <p class="text-4xl text-center">{pokemonId}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`} alt="pokemon-sprite" width="200" height="200" />
        <div>
          <button class="bg-orange-400 mx-4 py-3" onClick$={() => changePokemonId(-1)}>Anterior</button>
          <button class="bg-orange-400 mx-4 py-3" onClick$={() => changePokemonId(1)}>Siguiente</button>
        </div>
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
