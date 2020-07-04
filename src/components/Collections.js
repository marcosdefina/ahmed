import React, { Component } from 'react';
import AssetComponent from './Assets';
import * as data from '../data';

const { getCollectionsAsync } = data;
console.log(getCollectionsAsync());



class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
           collections: [],
           showComponent: null,
           assetId: 0,
        }
     }
     getCollections(){
        getCollectionsAsync()
        .then((response) => {
            this.setState({ collections: response });
        });
     }
     handleClick = (e, id) => {
        e.preventDefault();
        this.setState({
          ...this.state,
          assetId: id,
          showComponent: true
          
        })
      }

      componentWillReceiveProps(id) {
        this.setState({ assetId: id });  
      }

    componentDidMount(){
        this.getCollections();
    }

    render(){
        return (
            <div>
                {
                    this.state.collections.map(collection =>
                        <h3><button id={collection.id} onClick={e => this.handleClick (e, collection.id)}>{collection.id}
                        {collection.name}</button>
                        <h4>assetId: {this.state.assetId}</h4><h4>showComponent: {this.state.showComponent}</h4></h3>
                        
                    )
                }
                {this.state.showComponent? <AssetComponent changeID={this.state.assetId} /> :null}

            </div>
            
        )
    }
}



export default Collections;