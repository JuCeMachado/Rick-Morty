export const getCharacters = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resp.json();
    
    return {characters: data.results}
};