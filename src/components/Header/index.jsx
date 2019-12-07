import React from 'react'

export default function index({ children, title, styleClass }) {
    return (
        <header>
            <div className="container-fluid">
                <div className={`${styleClass} row align-items-center`}>
                    <div className="col text-center">
                        <h1 className="text-light text-uppercase display-3 text-slanted" style={{ fontFamily: 'DimaSogand', fontSize: '6rem' }}>
                            {title}
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