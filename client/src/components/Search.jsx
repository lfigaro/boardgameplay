function Search() {

    return (
        <form action="/boardgame/search" method="get">
            <input type="text" 
                id="searchTerm" 
                name="searchTerm" 
                placeholder="Search..."
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Search