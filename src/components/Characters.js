import { useState, useEffect,useContext } from "react"
import ThemeContext from '../context/ThemeContext';

export default function Characters() {

    const [characters, setCharacters] = useState([]);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <div className={theme ? "characters-1" : "characters-2"}>
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
