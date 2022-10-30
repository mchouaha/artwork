import { FunctionComponent, useEffect, useState } from "react"

type Props = {
    children: React.ReactNode
    triggerCollpase: Function
    collapse: boolean
    title: string
}

const DropDown: FunctionComponent<Props> = (props) => {

    const {children, triggerCollpase, collapse, title} = props
    
    const [ show, setShow] = useState<boolean>(false)
    const [ clicked, setClicked] = useState<boolean>(false)

    const handleClick = () => {
        triggerCollpase(true)
        setClicked(!clicked)
    }

    useEffect(() => {
        if (collapse) {
            setShow(false)
        }   
    }, [collapse])

    useEffect(() => {
        if(clicked) {
            setShow(!show)
            setClicked(false)
            triggerCollpase(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked])

    return (
        <div className="container" onClick={handleClick}>

            <h3>{title}</h3>

            <article id="toggle">
                { show && children}
            </article>
            
            <style jsx>{`

                h3 {
                    margin: 0.3em 0;
                    cursor: pointer;
                    font-weight: 600;
                }

                article {
                    max-height: ${show ? '500px' : '0px'};
                    overflow: hidden;
                    transition: max-height .8s ease-in-out;
                    padding: 0em 0.5em;  
                }  
            `}</style>
        </div>
    )
}

export default DropDown