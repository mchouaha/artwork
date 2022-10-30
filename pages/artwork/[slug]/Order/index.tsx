import { FunctionComponent } from "react"

import StarBorder from '@mui/icons-material/StarBorder'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'
import DoneIcon from '@mui/icons-material/Done'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

import { ArtworkType } from "../../../../lib/Interfaces"

import Input from "../../../../components/Input"
import Button from "../../../../components/Button"

type Props = {
    artwork: ArtworkType
}

const Order: FunctionComponent<Props> = ({artwork}) => {
    
    return (
        <section className="container">

            <div className="header">
                <div className="fullname">View of {artwork?.fullname} </div>
                <StarBorder sx={{ cursor: 'pointer' }}/>
            </div>
           

            <div className="artistShort">
                <span className="fullname">{artwork?.artistShort && artwork?.artistShort.fullname}</span>
                <span className="country">{artwork?.artistShort && artwork?.artistShort.country}</span>
            </div>
            
            <br/>

            <div style={{color: '#8B8B8B'}}>
                <span>{ artwork?.category && artwork?.category.charAt(0) + artwork.category.substring(1).toLowerCase()}</span>
                <span>{ artwork?.creationYear && artwork?.creationYear}</span>
                <br/>
                <span>{artwork?.dimensions.width}W x  {artwork?.dimensions.height}H x {artwork?.dimensions.depth}D in</span>
                
            </div>
            
            <br/>

            <div className="price">
                {artwork?.price} €
            </div>

            <br/>

            <Button name="Acquire"/>
            <br/>
            <Button name="Make an Offer" bgColor={'#fff'} color={'#000'}/>


            <br/>

            <div className="row">
                <HourglassBottomIcon fontSize="medium"/>&nbsp; PRE RESERVE FOR 24HOURS
            </div>


            <div className="row">
                    <DoneIcon fontSize="medium"/>&nbsp; {artwork?.price - (artwork?.price * 0.1)} € estimated delivery fee for {artwork?.artistShort.country}
            </div>

            <br/>
            
            <div>
                In order to obtain an accurate delivery fee, please enter your country of residence and zip code:
            </div>

            <br/>

            <form>
                <Input placeholder="Enter Country"/>

                <Input placeholder="Enter Zip code"/>
            </form>
        
            <br/>

            <div className="row">
                <LocalShippingIcon fontSize="medium"/> &nbsp; Delivery fee is 129 €
            </div>

            <br/>

            <div className="row">
                <LocationOnIcon fontSize="medium"/> &nbsp; Try 4 days of home for free
            </div>

            <div className="row">
                <DoneIcon fontSize="medium"/> &nbsp; Free pick up in Bruxelles, Belgium
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    margin-left: 4em;
                    width: 25vw;
                }

                @media (max-width: 375px) {
                    .container {
                      flex-grow: 1;
                      margin-left: 0;
                      width: auto;
                      padding: 0 1em;
                    }
        
                  }

                .header > .fullname {
                    color: #2E2E2D;
                    font-weight: 800;
                    font-size: 1.5em;
                }

                .artistShort {
                    display: flex;
                    font-size: 1.1em;
                    margin-top: 0.2em;
                }

                .artistShort > .fullname {
                    color: #DFB792;
                    font-weight: 600;
                }

                .artistShort > .country {
                    color: #BCBCBC;
                    text-transform: capitalize;
                }

                .price {
                    font-weight: 900;
                    font-size: 1.5em;
                }

                span {
                    margin-right: 1em;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .row {
                    display: flex;
                    align-items: center;
                    font-size: 1em;
                    margin-bottom: 0.4em;
                }

                form {
                    display: flex;
                }
            `}</style>
        </section>
    )
}

export default Order