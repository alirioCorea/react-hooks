import { useState, useEffect } from "react"

export default function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <div className="characters">
            <div className="cards-container">
                {
                    characters.map(character => (
                        <div key={character.id} className="card-container">
                            <img src={character.image} alt={character.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
