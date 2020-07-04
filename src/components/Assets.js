import React, { Component } from 'react';
import * as data from '../data';
import image from '../images/Batman.jpg';

const { getAssetsByCollectionAsync } = data; 
class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
     }

     getAssetbycollection(){
        getAssetsByCollectionAsync(this.props.changeID)
        .then((response) => {
            this.setState({ data: response})
            this.forceUpdate();
        })
     }

    componentDidUpdate(prevProps) {
        if (prevProps.changeID !== this.props.changeID) {
          this.setState({
            ...this.state,
            stateId: this.props.changeID
          }, this.getAssetbycollection())
          console.log('new:'+this.props.changeID)
        }
      }

    componentDidMount(){
        this.getAssetbycollection();
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