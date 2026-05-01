import { IME_APLIKACIJE } from "../constants";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from 'react';


export default function Home() {


                             
    

    useEffect(()=>{document.title='Početna, ' + IME_APLIKACIJE})

        



    return (
        <>
            <Row>
                <Col md={6}>
                    <p className="lead m-5 text-center">Dobrodošli na {IME_APLIKACIJE}</p>
                    
                    <p>Knjigovodstvo i računovodstvo za velike i male tvrtke i obrtnike.</p>

                   
                    {/*<div style={{ textAlign: 'center' }}>
                        <img src="" />
                    </div>*/}

                </Col>
               
            </Row>



        </>
    )
}





