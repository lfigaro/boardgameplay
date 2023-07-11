import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src="/img/icon.png" width="50" height="50" alt="BoardGamePlay" />
            </Wrapper>
        )
    }
}

export default Logo