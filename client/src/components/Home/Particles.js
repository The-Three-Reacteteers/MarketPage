import React from 'react'
import Particles from "react-particles-js";
import "./Particles.css"
const ParticlesJS = () => {
    return (
<Particles
    params={{
        "particles": {
            "number": {
                "value": 55,
                "density": {
                    "enable": true,
                    "value_area": 700
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image"
                ],
                "image": [
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/8/81/Book_SVG.svg",
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": "https://png.clipart.me/istock/previews/3827/38270152-books-on-black-background.jpg",
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        },
        "retina_detect": false
    }} />
    )
}
export default ParticlesJS