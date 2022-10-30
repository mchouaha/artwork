import React, { Fragment, FunctionComponent, MouseEventHandler, useState } from "react"
import Image from 'next/image'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

type ArrowProps = {
  onClick?: MouseEventHandler
  show: boolean
  currentSlide?: number
}

function NextArrow(props: ArrowProps) {
  const { onClick, show } = props;

  return (
    <div onClick={onClick} className="arrow">
          <ChevronRightIcon fontSize="inherit"/>
          <style jsx>{`
            .arrow {
              display: flex;
              align-items: center;
              font-size: 5em;
              color: ${ show ? "#666666" :"#d0d0d06b"};
              cursor: pointer;
            }
          `}</style>
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick, currentSlide } = props;
  return (
    <div onClick={onClick} className="arrow">
          <ChevronLeftIcon fontSize="inherit"/>

          <style jsx>{`
            .arrow {
              display: flex;
              align-items: center;
              font-size: 5em;
              color: ${ currentSlide === 0 ? "#d0d0d06b" : "#666666"};
              cursor: pointer;
            }
          `}</style>
    </div>
  );
}

type SliderProps = {
  paintingsUrl: string[]
}

const SimpleSlider: FunctionComponent<SliderProps> = ({paintingsUrl}) => {

  const [show, setShow] = useState<boolean>(true)
  const [, setCurrentSlide] = useState<number>(0)

  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow show={show}/>,
    prevArrow: <PrevArrow show={show}/>,
    initialSlide: 0,
    beforeChange: function(_oldIndex: number, newIndex: number) {
      paintingsUrl.length-5 === newIndex ? setShow(false): setShow(true)
      setCurrentSlide(newIndex)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          beforeChange: function(_oldIndex: number, newIndex: number) {
            paintingsUrl.length-3 === newIndex ? setShow(false): setShow(true)
          },
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          beforeChange: function(_oldIndex: number, newIndex: number) {
            paintingsUrl.length-1 === newIndex ? setShow(false): setShow(true)
          },
        }
      },
    ],
  };

  return (

    <div className="container">
          <Slider {...settings} className="slider">

          { paintingsUrl?.map((url, index) => 
            <Fragment key={index}>
              <div className="item">
                <Image
                    src={url}
                    alt={'artwork'}
                    quality={10}
                    fill
                    sizes="(max-width: 768px) 20vw,
                    (max-width: 1200px) 30vw,
                    50vw"
                  />
              </div>
            </Fragment>
          )}
                  
        </Slider>

        <style jsx global>{`
            .item {
              width: 150px;
              height: 150px;
              position: relative;
            }
            
            .slider .slick-slide {
              padding: 0 1em;
              margin-top: 1em;
            }

            .slider  {
              display: flex;
            }

          `}</style>
    </div>

  );
}

export default SimpleSlider