import styled from 'styled-components'

const Item = styled.li.attrs({
    className: 'nav-item',
})``

function Search() {

    return (
        <Item>
            <form action="/boardgame/search" method="get">
                <input type="text"
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Search..."
                />
                <button type="submit">Buscar</button>
            </form>
        </Item>

    )
}

export default Search