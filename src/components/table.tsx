/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../_metronic/helpers/AssetHelpers'
import '../_metronic/assets/sass/style.scss'
import { ReactComponent as SearchIcon } from '../assets/search.svg';
type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'> 
          <span className='card-label fw-bold fs-3 mb-1'>Buy Orders</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>£5,000,000 Total orders last 1 month</span>
        </h3>
        
        <div className="search-box">
      <SearchIcon className="search-box__icon" />
      <input
        className="search-box__input"
        type="text"
        placeholder="Search"
      />
    </div>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            Export
          </a>
          
          
          <a href='#' className='btn btn-sm btn-light1-primary'>
            Create
          </a>
        </div>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>User</th>
                <th className='min-w-125px'>Value(£)</th>
                <th className='min-w-125px'>Quantity(g)</th>
                <th className='min-w-200px'>Method</th>
                <th className='min-w-150px'>Order Type</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/Group1.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Meeren Raniga
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Android
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  £8,000.00
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Fixed Fee:£450.00</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    50.454 g
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Google Pay
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Low Risk</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Buy
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>PG Account</span>
                </td>
                <td className='text-end'>
                <a href='#' className='btn btn-sm btn-light-primary'>
                View Order
                </a>
                  

                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/Group2.png')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Shyam Vikram
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Android
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  £23,000,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Fixed Fee:£250.00</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    42.343 g
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Pay With Bank
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Low Risk</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Buy
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Goal Account</span>
                </td>
                <td className='text-end'>
                <a href='#' className='btn btn-sm btn-light-primary'>
                View Order
                </a>
                  

                </td>
              </tr><tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/Group3.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Priyen Raniga
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        IOS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  £34,000,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    10.456 g
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Card
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Medium Risk</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Buy
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>PG Account</span>
                </td>
                <td className='text-end'>
                <a href='#' className='btn btn-sm btn-light-primary'>
                View Order
                </a>
                  

                </td>
              </tr><tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/Group4.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Abishek Chakram
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        IOS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  £2,600,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    100.000 g
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Pay With Bank
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>High Risk</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Buy
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>PG Account</span>
                </td>
                <td className='text-end'>
                <a href='#' className='btn btn-sm btn-light-primary'>
                View Order
                </a>
                  

                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget11}
