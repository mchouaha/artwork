import { FunctionComponent, useState } from "react"
import Image from 'next/image'

import VisibilityIcon from '@mui/icons-material/Visibility'
import ViewInArIcon from '@mui/icons-material/ViewInAr'

import { device } from "../../../../lib/utils/devices"
import Loader from "../../../../components/Loader"

type Props = {
    imgUrl: string,
    name: string
 };

const Painting: FunctionComponent<Props> = ({imgUrl, name}) => {

    const [loading, setLoading] = useState<boolean>(true)

    return (
        <section className="container">
            {/* <picture className="picture">
                    <source srcSet={imgUrl} type="image/jpeg" />
                    <img src={imgUrl} alt={name} style={{width: 'inherit'}}/>
            </picture> */}

            <div className="picture">
                {loading && <Loader/>}
                <Image
                    onLoad={()=> setLoading(false)}
                    src={imgUrl}
                    alt={name}
                    quality={100}
                    fill
                    priority
                    sizes="`(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            <div className="actions">
                <span><VisibilityIcon fontSize="small"/>&nbsp; VIEW IN A ROOM</span>
                <span><ViewInArIcon fontSize="small"/>&nbsp; ARIEW</span>
            </div>
           
            <style jsx>{`

                .picture {
                    position: relative;
                    width: 550px;
                    height: 550px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media ${device.tablet} {
                    .picture {
                        width: 400px;
                        height: 400px;
                    }
                }
            
                @media ${device.mobile} {
                    .container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100vw;
                    }
                    
                    .picture {
                        width: 90vw;
                        height: 300px;
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
        </section>
    )
}

export default Painting