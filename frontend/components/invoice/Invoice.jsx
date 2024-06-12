
'use client'

import React from 'react'
import Link from "next/link";
import moment from 'moment';

export default function InvoiceComponent ({data}) {
    const contactData = [
      { url: "#", text: "www.soulcation.com" },
      { url: "#", text: "invoice@soulcation.com" },
      { url: "#", text: "(123) 123-456" },
    ];
  
    const handlePrintClick = () => {
      window.print();
    };

  return (
    <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-10 col-lg-11">
              <div className="d-flex justify-end">
                <Link
                  href="/"
                  className="button -md -blue-1 bg-blue-1-05 text-blue-1 me-3"
                >
                  Back Home
                </Link>
                <button
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  onClick={handlePrintClick}
                >
                  Print
                  <i className="icon-bed text-20 ml-10" />
                </button>
              </div>
              <div className="bg-white rounded-4 mt-50">
                <div className="layout-pt-lg layout-pb-lg px-50">
                  <div className="row justify-between">
                    <div className="col-auto">
                      <img src="/img/general/logo-dark.png" alt="logo icon" width={200} height={80}/>
                    </div>
                    <div className="col-xl-4">
                      <div className="row items-center">
                        <div className="col-auto">
                          <div className="text-26 fw-600">Invoice #</div>
                        </div>
                        <div className="col-auto">
                          <div className="text-18 fw-500 text-light-1">
                            {data.bookingNumber}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row justify-between pt-50">
                    <div className="col-auto">
                      <div className="text-15 text-light-1">Booked date:</div>
                      <div className="text-15 fw-500 lh-15">{moment(data.createdAt).format('DD/MM/YYYY')}</div>
                    </div>
                    {/* end .col */}

                    <div className="col-xl-4">
                      <div className="text-15 text-light-1">Date of retreat:</div>
                      <div className="text-15 fw-500 lh-15">{moment(data.startDate).format('DD/MM/YYYY')} - {moment(data.endDate).format('DD/MM/YYYY')}</div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row justify-between pt-50">
                    <div className="col-auto">
                      <div className="text-20 fw-500">Retreat Detail:</div>
                      <div className="text-15 fw-500 mt-20">{data.retreat.title}</div>
                      <div className="text-15 text-light-1 mt-10">
                        Duration {data.retreat.retreatDuration} days
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-xl-4">
                      <div className="text-20 fw-500">Booked by:</div>
                      <div className="text-15 fw-500 mt-20">{data.name}</div>
                      <div className="text-15 text-light-1 mt-10">
                        {data.address.line1} {data.address.line2}, {data.address.state}, {data.address.country}
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row pt-50">
                    <div className="col-12">
                      <table className="table col-12">
                        <thead className="bg-blue-1-05 text-blue-1">
                          <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.attendee.map((item, index) => (
                            <tr key={index}>
                              <td>{item.name}</td>
                              <td>{item.gender}</td>
                              <td>{item.age}</td>
                            </tr>
                          ))}
                          <tr>
                            <td className="text-18 fw-500 text-right" colSpan={2}>Total Amount</td>
                            <td className="text-18 fw-500">${data.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End layout-pt */}

                <div className="border-top-light py-50">
                  <div className="row x-gap-60 y-gap-10 justify-center">
                    {contactData.map((contact, index) => (
                      <div className="col-auto" key={index}>
                        <a href={contact.url} className="text-14">
                          {contact.text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End border-top */}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
