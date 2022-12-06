import React from "react";
import {GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api'


const containerStyle = {
    width: '1200px',
    height: '750px'
};

const centers = [{
    lat: 42.350498,
    lng: -71.105400
},
//Boston Orthotics & Prosthetics
    {
        lat: 42.33982,
        lng: -71.10615
    },
//Orthotics & Prosthetics Center of Boston
    {
        lat: 42.35206,
        lng: -71.06613
    },
//Hanger Clinic: Prosthetics & Orthotics
    {
        lat: 42.36747,
        lng: -71.06961
    },
//Medical Center Orthotics & Prosthetics Boston
    {
        lat: 42.36042,
        lng: -71.12906
    },
//Rogerson Orthotics & Prosthetics
    {
        lat: 42.33551,
        lng: -71.05945
    },
//Oped Inc
    {
        lat: 42.37285,
        lng: -71.24197
    },
//Boston Orthotics & Prosthetics
    {
        lat: 42.37483,
        lng: -71.25230
    },

//United Prosthetics, INC.
    {
        lat: 42.31422,
        lng: -71.07649
    },

//Medical Center Orthotics & Prosthetics - Milton
    {
        lat: 42.25830,
        lng: -71.07708
    },

//United Prosthetics, INC.
    {
        lat: 42.23932,
        lng: -71.01458
    },

//Med Techna
    {
        lat: 42.25162,
        lng: -71.16201
    },

//Our Location
    {
        lat: 42.34027,
        lng: -71.09001
    }
];


export const Find = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='subtitlesLeft'>
                        <h1>Finding a Prosthetist Near You</h1>
                    </p>
                    <p>
                    </p>
                    <p className="textBodyLeft">
                        Step 1: Research clinics in your area
                    </p>
                    <p className="textBodyLeft">
                        Step 2: Verify the clinic has an upper limb specialist
                    </p>
                    <p className="textBodyLeft">Step 3: Contact the clinic to inquire about insurance coverage and
                        appointment availability
                    </p>
                    <p className="textBodyLeft">
                        Step 4: Set up your first appointment with your clinic </p>

                </div>

                <div className="col">
                    <LoadScript
                        googleMapsApiKey="AIzaSyAg3gyl1n_zcZDvmG9CREbN2h4bxbBsxA4"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={centers[0]}
                            zoom={10}

                        >
                            <MarkerF

                                position={centers[1]}
                                label="Boston Orthotics & Prosthetics"
                            />
                            <MarkerF

                                position={centers[2]}
                                label="Orthotics & Prosthetics Center of Boston"
                            />

                            <MarkerF

                                position={centers[3]}
                                label="Hanger Clinic: Prosthetics & Orthotics"
                            />

                            <MarkerF

                                position={centers[4]}
                                label="Medical Center Orthotics & Prosthetics Boston"
                            />

                            <MarkerF

                                position={centers[5]}
                                label="Rogerson Orthotics & Prosthetics"
                            />

                            <MarkerF

                                position={centers[6]}
                                label="Oped Inc"
                            />

                            <MarkerF

                                position={centers[7]}
                                label="Boston Orthotics & Prosthetics"
                            />

                            <MarkerF

                                position={centers[8]}
                                label="United Prosthetics, INC."
                            />

                            <MarkerF

                                position={centers[9]}
                                label="Medical Center Orthotics & Prosthetics - Milton"
                            />

                            <MarkerF

                                position={centers[10]}
                                label="United Prosthetics, INC."
                            />

                            <MarkerF

                                position={centers[11]}
                                label="Med Techna"
                            />

                            <MarkerF
                                position={centers[12]}
                                label="My Location"

                            />

                            <></>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
};