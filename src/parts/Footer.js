import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-auto" style={{width: 350}}>
                    <IconText />
                    <p className="brand-tagline">
                    We keboom your beauty holiday instantly and memorable.
                    </p>
                </div>
                <div className="col-12 col-lg-auto mr-5">
                    <h6 className="mt-2"> For Beginners</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type='link'>
                            New Account</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type='link'>
                            Start Booking a Room</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type='link'>
                            Use Payments</Button>
                        </li>
                    </ul> 
                </div>
                <div className="col-12 col-lg-2 mr-5">
                <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type='link'>
                            Our Carrers</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type='link'>
                            Privacy</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type='link'>
                            Terms & Conditions</Button>
                        </li>
                    </ul> 
                </div>
                <div className="col-12 col-lg-3">
                <h6 className="mt-2">Connect Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type='link'>
                            Support@staycation.id</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type='link'>
                            021-2208-1996</Button>
                        </li>
                        <li className="list-group-item">
                            <span>Staycation, Kemang, Jakarta</span>
                        </li>
                    </ul> 
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center copyrights">
                    Copyright 2022 • All rights reserved • Staycation
                </div>
            </div>
        </div>
    </footer>
  )
}