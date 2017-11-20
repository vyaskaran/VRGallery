
import React from 'react';
import Image from './Image.jsx';
import AssetSphere from "./AssetSphere.js";



class App extends React.Component{

    constructor(){
        super();
        this.state= {
            items:[
                {
                    "pano": "https://s-media-cache-ak0.pinimg.com/originals/a2/ba/09/a2ba09c212716ae8e5646daf93e1bda6.jpg",
                    "name": "Landscape_first"
                },
                {
                    "pano": "http://www.360p.co.uk/wp-content/uploads/2011/05/360-panoramas-truro-park-3-1200x600.jpg",
                    "name": "Truro Park"
                },
                {
                    "pano": "http://www.paris-360.com/pictures/louvre_pyramide_ficheok.jpg",
                    "name": "Paris"
                },
                {
                    "pano": "http://www.roadtovr.com/wp-content/uploads/2014/09/Venice.Still001.jpeg",
                    "name": "Venice"
                },
                {
                    "pano": "https://s-media-cache-ak0.pinimg.com/originals/a2/ba/09/a2ba09c212716ae8e5646daf93e1bda6.jpg",
                    "name": "Landscape"
                }
            ],
            index :0
        };



        // this.state.url = this.state.items[0].pano;

    }

    /*  componentDidMount(){
          let root = this;
          fetch('https://demo0813639.mockable.io/getPanos')
              .then(
                  response => response.json())
               .then(function(data){
                  root.setState(
                      {
                          items:data,
                          url:data[0].pano
                      }

                  );
               })
      }*/

    createImage (image,index) {
        return <Image index= {index} source={image.pano} key={image.name} />;
    };

    createImages (images,index) {
        return images.map(this.createImage,index);
    };

    clickedImage (myindex){
        if(myindex < 4)
        document.getElementById(myindex+1).style.border ='5px solid white';

        if(myindex > -1)
            document.getElementById(myindex).style.border ='none';


        if(this.state.index > 3 )  {
            this.setState({ index: 0 })
        }else{
            this.setState({ index: this.state.index+1 })

        }

    };

    render () {

        if(!this.state.items)  return;

        let items = this.state.items;
        let style = {
            width: '150px',
            height:'50px',
            fontSize : '20px',
            margin: '10px 0px 10px 500px',
        };
        let containerSttyle = {
            margin :0
        };

        let assetSphereStyle ={
            marginTop : '12px',
            marginLeft:'-15px',
            marginBottom:'20px'
        };


        return (

            <div>
                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                        {this.createImages(items,this.state.index)}
                    </div>
                    <div  className="col-sm-2 col-md-2 col-lg-2 ">
                        <button style={style} type="button" className="btn btn-default" onClick={this.clickedImage.bind(this, this.state.index)}>Next >></button>
                    </div>
                </div>

                <div >
                    <div style={assetSphereStyle} className="col-sm-12 col-md-12 col-lg-12 ">
                        <AssetSphere src={this.state.items[this.state.index].pano}/>
                    </div>

                </div>
            </div>

        );
    }
}

export default App;