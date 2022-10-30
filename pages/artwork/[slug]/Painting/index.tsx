import { FunctionComponent } from "react"
import Image from 'next/image'

import VisibilityIcon from '@mui/icons-material/Visibility'
import ViewInArIcon from '@mui/icons-material/ViewInAr'

import { device } from "../../../../lib/utils/devices"

type Props = {
    imgUrl: string,
    name: string
 };

const Painting: FunctionComponent<Props> = ({imgUrl, name}) => {

    return (
        <div className="container">
            <section>
                <Image
                    src={imgUrl}
                    alt={name}
                    quality={100}
                    fill
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
            </section>

            <div className="actions">
                <span><VisibilityIcon fontSize="small"/>&nbsp; VIEW IN A ROOM</span>
                <span><ViewInArIcon fontSize="small"/>&nbsp; ARIEW</span>
            </div>
           
            <style jsx>{`

                section {
                    position: relative;
                    width: 560px;
                    height: 557px;

                }

                @media ${device.tablet} {
                    section {
                        height: 400px;
                        width: 420px;
                    }
                }
            

                @media ${device.mobile} {
                    section {
                        height: 300px;
                        width: 100vw;
                    }
        
                  }
            
                .actions {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    font-size: 0.75em;
                    font-weight: 700;
                    margin-top: 0.5em;
                }

                .actions > span {
                    margin: 0 20px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
            `}
                
            </style>
        </div>
    )
}

export default Painting