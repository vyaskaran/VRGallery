import React from 'react';
import 'aframe';
import {Entity,Scene,Sky,Box,Sphere,Cylinder,Dodecahedron,Plane } from 'aframe-react';


class AssetSphere extends React.Component {

    render() {
        const src = this.props.src;
        // const src ='./360image.jpg';/

        let material = {
            shader: 'flat',

        };
        if (src) {
            material.src = src;
        } else {
            material.color = '#73CFF0';
        }


        if(!material.src) return <p>Loading...</p>
        return (

            /*<Scene>
                 <Entity id="sphere"
                         geometry={{primitive: 'sphere', radius: 5000}}
                         material={material} scale="1 1 -1" />

            </Scene>
*/
                <a-scene >

                    <a-sky  src={material.src} />
                </a-scene>





        );
       /*<Nav {...this.props}/>*/
    }
};

export default AssetSphere;