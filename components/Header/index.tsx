import { FunctionComponent } from "react"

type HeaderProps = {
    title: string
}
const Header: FunctionComponent<HeaderProps> = ({title}) => {
    return (
        <div className="container">

            <h3>{'Home > Painting> MadeleinEister > '} <b>View of {title}</b></h3>

            <style jsx>{`
                .container h3 {
                    color: #9C9C9C;
                    margin: 0.5em 0 1em 1em;
                    font-size: 1em;
                }
                .container h3 b {
                    color: #000;
                }
            `}
            </style>
        </div> 
    )
}

export default Header