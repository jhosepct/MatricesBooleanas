import React from 'react'
import { NavLink } from 'react-router-dom'
import Article from '../../Components/Article'
import Header from '../../Components/Header'
import Information from '../../Components/Information'
import { Wrapper } from './styles'

function IndexPage() {
    return (
        <Wrapper>
            <Header />
            <Article>
                <Information />
            </Article>
        </Wrapper>
    )
}

export default IndexPage