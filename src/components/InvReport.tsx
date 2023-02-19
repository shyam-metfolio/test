import React from 'react'
import {toAbsoluteUrl} from '../_metronic/helpers/AssetHelpers'
import '../_metronic/assets/sass/style.scss'
import { ReactComponent as SearchIcon } from '../assets/search.svg';
type Props = {
  className: string
}

const InvReport: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'> 
          <span className='card-label fw-bold fs-3 mb-1'>Create Inventory Report</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Enter grams purchased from suppliers</span>
        </h3>
        
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light1-primary'>
            Start Now
          </a>
        </div>
        
      </div>
      </div>
  )
}

export {InvReport}