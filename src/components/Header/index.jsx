import React from 'react'
import styled from 'styled-components';

const Title = styled.span`
    font-family: DimaSogand;
    font-size: 6rem;
    color: red;
`;

export default function index({ children, title, styleClass }) {
    return (
        <header>
            <div className="container-fluid">
                <div className={`${styleClass} row align-items-center`}>
                    <div className="col text-center">
                        <h1 className="text-light text-uppercase display-3">
                            <Title>
                                {title}
                            </Title>
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </header>
    )
}

index.defaultProps = {
    title: 'default title',
    styleClass: 'header-food'
}