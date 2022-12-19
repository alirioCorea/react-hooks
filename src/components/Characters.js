import { useState, useEffect,useContext, useMemo} from "react"
import ThemeContext from '../context/ThemeContext';

export default function Characters() {

    const [characters, setCharacters] = useState([]);
    const {theme} = useContext(ThemeContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const filteredUsers = useMemo(() => characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    }),[characters, search]);

    return (
        <div className={theme ? "characters-1" : "characters-2"}>
            <div className="search">
                <form>
                    <label className="buscador">
                        <span className="buscador-tittle">Buscar Personaje:</span>
                        <input className="buscador-input" type="text" value={search} onChange={handleSearch} />
                    </label>
                </form>
            </div>
            <div className="cards-container">
                {
                    filteredUsers.map(character => (
                        <div key={character.id} className="card-container">
                            <img src={character.image} alt={character.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
