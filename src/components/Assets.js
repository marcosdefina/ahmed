import React, { Component } from 'react';
import * as data from '../data';
import image from '../images/Batman.jpg';

const { getAssetsByCollectionAsync } = data; 
class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            newid: this.props.changeID
        }
     }

     getAssetbycollection(){
        getAssetsByCollectionAsync(this.state.newid)
        .then((response) => {
            this.setState({ data: response})
        })
     }

     getID(){
        this.getAssetbycollection();
    }
    componentDidMount(){
            this.getID();
            console.log(this.state)
            console.log(this.props)
    }

    render(){
        let itemList = this.state.data.map(function(item) {
        return <div key={item.id}>
            <img src={image } alt="img"></img>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <button>Make Master</button>
            </div>
            });
            return (
                <ul>
                    {itemList}
                </ul>
            
        )
    }
}



export default Assets;