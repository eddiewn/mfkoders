const apiURL = "https://pokeapi.co/api/v2/"

export const getPokemon = async(pokemon = 1) => {
    try {
        const response = await fetch(`${apiURL}/pokemon/${pokemon}`);

        if(!response.ok) throw new Error("Failed to fetch pokemon");

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
