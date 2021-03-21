import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <p>Coding by Bedriye Nur GENÇ</p>
            </div>

            <style jsx>
                {`
                    .footer {
                        font-size: 1.3rem;
                        background-color: #c5aca1;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    )
}

export default Footer
