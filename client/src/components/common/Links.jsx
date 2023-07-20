import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.li.attrs({
    className: 'nav-item',
})``

const DropDownItem = styled.li.attrs({
    className: 'nav-item dropdown',
})``


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Item>
                    <Link to="/boardgame/list" className="nav-link">
                        Listar
                    </Link>
                </Item>
                <DropDownItem>
                    <Link to="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="#" className="dropdown-item">
                            Teste 1
                        </Link>
                        <Link to="#" className="dropdown-item">
                            Teste 2
                        </Link>
                        <Link to="#" className="dropdown-item">
                            Teste 3
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="#" className="dropdown-item">
                            Teste 4
                        </Link>
                    </div>
                </DropDownItem>
            </React.Fragment>
        )
    }
}

export default Links