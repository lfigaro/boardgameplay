import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src="/img/icon.png" width="40" height="40" alt="BoardGamePlay" />
            </Wrapper>
        )
    }
}

export default Logo