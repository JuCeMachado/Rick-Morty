export const getCharacter = async ({ params }) => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const data = await resp.json();
    
    return { character: data };
};