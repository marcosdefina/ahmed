import React, { Component } from 'react';
import * as data from '../data';
//import image from '../images/';

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
            console.log(this.state.data)
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
            <img src={require('../images/'+item.path)} alt="img"></img>
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