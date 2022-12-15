import React from 'react'
import { ArticleStyled } from './styles'

interface ArticleProps {
    children: React.ReactNode
}

function Article({ children }: ArticleProps) {
    return (
        <ArticleStyled>{children}</ArticleStyled>
    )
}

export default Article