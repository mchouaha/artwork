import { FunctionComponent } from "react"

type Props = {
    name: string
    bgColor?: string
    color?: string
}

const Button: FunctionComponent<Props> = ({name, bgColor='#000', color='#fff'}) => {
    return (
        <>
            <div className="button">{name}</div>

            <style jsx>{`
                .button {
                    border: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 17px;
                    cursor: pointer;
                    background-color: ${bgColor};
                    color: ${color};
                    padding: 0.5em 0;
                    font-size: 1.1em;
                    font-weight: 500;
                }
            `}
            </style>
        </>
    )
}

export default Button