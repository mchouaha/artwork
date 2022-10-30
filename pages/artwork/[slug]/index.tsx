import { NextPageContext } from "next"
import { FunctionComponent } from "react"

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

            {/* TODO: replace imgUrl by artwork.imgUrl when cross origin fixed */}

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

          <article>
            <Order artwork={artwork}/>
          </article>
        </div>

        <Slider paintingsUrl={paintingsMock}/>

        <style jsx>{`
          .main-container {
            display: flex;
            flex-wrap: wrap;
          }

          article {
            margin-left: 4em;
            width: 25vw;
          }

          @media (max-width: 375px) {
            article {
              flex-grow: 1;
              margin-left: 0;
              width: auto;
              padding: 0 1em;
            }

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