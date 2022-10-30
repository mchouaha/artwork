import { FunctionComponent, useState } from "react"

import DropDown from "../../../../components/DropDown"

type Props = {
    description?: string
    subject?: [string]
    medium?: [string]
    styles?: [string]
    materials?: [string]
 };

const MoreInfo: FunctionComponent<Props> = (props) => {

    const [collapse, setCollapse] = useState<boolean>(true)

    const {description, subject, medium, styles, materials} = props

    return (
        <article className="container">

            <DropDown 
                title="DESCRIPTION"
                triggerCollpase={setCollapse}
                collapse={collapse}>
                {description}
            </DropDown>  

            <hr/>
            
            <DropDown
                    title="SUBJECT, MEDIUM, STYLE, MATERIALS"
                    triggerCollpase={setCollapse}
                    collapse={collapse}>
                    <table>
                        <tbody>
                            <tr>
                                <td>SUBJECT</td>
                                <td>{subject}</td>
                            </tr>
                            <tr>
                                <td>STYLE</td>
                                <td>{styles}</td>
                            </tr>
                            <tr>
                                <td>MEDIUM</td>
                                <td>{medium}</td>
                            </tr>
                            <tr>
                                <td>MATERIALS</td>
                                <td>{materials}</td>
                            </tr>
                        </tbody>
                    </table>
                </DropDown>
                         
            <hr/>

            <style jsx>{`
                tr td:nth-child(1) {
                    font-weight: 700;
                    width: 7em;
                }
                hr {
                    height: 2px;
                }
            `}</style>

        </article>
        
    )
}

export default MoreInfo