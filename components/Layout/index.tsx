import React, { Fragment, ReactNode } from 'react'
import { device } from '../../lib/utils/devices'
import Header from '../Header'

type Props = {
  children?: ReactNode
  title: string
}

const Layout = ( {children, title}: Props) => { 
  
  return (
    <Fragment>
    
      <div className='header'>
        <Header title={title}/>
      </div>

      <div className='body'>
      
          {children}

          <style jsx>{`

            .body {
                width: 65vw;
                margin: 0 2em;
            }

            @media ${device.laptopL} {
              .body  {
                  width: 75vw;
              }
            }

            @media ${device.laptop} {
              .body  {
                  width: auto;
              }
            }

            @media ${device.tablet} {
              .body  {
                  width: auto;
              }
            }

            @media ${device.mobile} {
              .body  {
                  width: auto;
                  margin: 0em;
              }
            }
          `}</style>
      
      </div>
    </Fragment>
  )
}

export default Layout

