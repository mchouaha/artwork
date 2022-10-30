import { FunctionComponent } from "react"

type Props = {
    placeholder?: string
}
const Input: FunctionComponent<Props> = ({placeholder}) => {
    return (
        <div className="container">
            <input placeholder={placeholder}/>

            <style jsx>{`

                    .container {
                        width: 50%;
                    }
                    input {
                        background-color: #D4D4D4;
                        text-transform: uppercase;
                        border: 2px solid #C1C1C1;
                        padding: 0.5em;
                        width: 90%;
                    }

                    input::placeholder {
                        text-transform: lowercase;
                    }
            `}</style>
        </div>
    )
}

export default Input