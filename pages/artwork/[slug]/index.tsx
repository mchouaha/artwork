import { NextPageContext } from "next"
import { Fragment, FunctionComponent } from "react"

import { getArtwork } from "../../../lib/api"
import { ArtworkType } from "../../../lib/Interfaces"

import Painting from "./Painting"
import Layout from "../../../components/Layout"
import Order from "./Order"
import MoreInfo from "./MoreInfo"
import Slider from "./Slider"
import { paintingsMock } from "../../../assets/mock"

type PageProps = {
  slug: number
  artwork: ArtworkType
}

export const Artwork: FunctionComponent<PageProps> = ({slug, artwork}) => {

    // console.log('artwork', artwork)
    // console.log('slug', slug)

    return (

      <Layout title={artwork.fullname}>

        <div className="main-container">
          <section>

            {/* <Painting imgUrl={artwork.imageUrl} name={artwork.fullname} /> */}

            {slug == 0 && 
                <Painting imgUrl={'/2997207-LEWATDHP-7.jpeg'} name={artwork.fullname} />}

            {slug == 1 && 
                <Painting imgUrl={'/7584428-BHHQLFRA-7.jpeg'} name={artwork.fullname} />}

              <MoreInfo
                description={artwork.description}
                subject={artwork.subjects}
                medium={artwork.mediums}
                styles={artwork.styles}
                materials={artwork.materials}
              />
          </section>

          <Order artwork={artwork}/>

        </div>

        <Slider paintingsUrl={paintingsMock}/>

        <style jsx>{`
          .main-container {
            display: flex;
            flex-wrap: wrap;
          }
        `}
          
        </style>

      </Layout>
      
    )
}

export default Artwork

export async function getServerSideProps(context: NextPageContext) {

  const slug = context.query.slug as string

  const artwork: ArtworkType = await getArtwork(slug)
  
  return {
    props: {
      slug: slug,
      artwork: artwork
    }
  }
}