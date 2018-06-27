import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';
class Item extends React.Component{

    static  propTypes={
        item:PropTypes.shape({
            imgURL: PropTypes.string.isRequired,
            title:  PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            count:PropTypes.number.isRequired,
            price:PropTypes.number.isRequired,
            code:PropTypes.number.isRequired,
        }),
        cbDeleteItem:PropTypes.func.isRequired,
        cbSelectItem:PropTypes.func.isRequired,
        cbSelectChItem:PropTypes.func.isRequired,
        selected:PropTypes.bool.isRequired,
    };

    selectChItem=(EO)=>{
        this.props.cbSelectChItem(this.props.item.code);
        EO.stopPropagation();
    }

    deleteItem=(EO)=>{
        if (confirm('Удалть элемент?')){
            this.props.cbDeleteItem(this.props.item.code);
            EO.stopPropagation();
        }
    }

    selectIem=()=>{
        this.props.cbSelectItem(this.props.item.code); 
    }
    render(){
        var strClass='';
        if (this.props.selected) strClass=' Active';
        return (
          <div className={'Item'+strClass}
            onClick={this.selectIem}>
            <img src={this.props.item.imgURL} className='ItemImage'/>
            <div className='ItemGroup'>
                <div className='ItemDescription'>
                    <h2 className='ItemTitle'>{this.props.item.title}</h2>
                    <p className='dDescriptonText'>{this.props.item.description}</p>
                    <p className='count'>{'В наличии: '+this.props.item.count}</p>
                    <input type='button' value='Изменить' onClick={this.selectChItem}/>
                    <input type='button' value='Удалить' onClick={this.deleteItem}/>
                </div>
            </div>
            <div className='price'>
                {this.props.item.price+' р'}
            </div>  
          </div>
        )

    }

}

/*
var Item=React.createClass({
    displayName: 'Item',

    propTypes:{
        item:React.PropTypes.shape({
            imgURL: React.PropTypes.string.isRequired,
            title:  React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            count:React.PropTypes.number.isRequired,
            price:React.PropTypes.number.isRequired,
            code:React.PropTypes.number.isRequired,
        }),
    cbDeleteItem:React.PropTypes.func.isRequired,
    cbSelectItem:React.PropTypes.func.isRequired,
    cbSelectChItem:React.PropTypes.func.isRequired,
    selected:React.PropTypes.bool.isRequired,
    },
    selectChItem:function(EO){
        this.props.cbSelectChItem(this.props.item.code);
        EO.stopPropagation();
    },
    deleteItem:function(EO){
        if (confirm('Удалть элемент?')){
            this.props.cbDeleteItem(this.props.item.code);
            EO.stopPropagation();
        }
    },

    selectIem:function(){
        this.props.cbSelectItem(this.props.item.code); 
    },
    
    render: function(){
        var strClass='';
        if (this.props.selected) strClass=' Active';
        return React.DOM.div({className:'Item'+strClass,onClick:this.selectIem},
        React.DOM.img({src:this.props.item.imgURL,className:'ItemImage'}),
        React.DOM.div({className:'ItemGroup'},
          React.DOM.div({className:'ItemDescription'},
          React.DOM.h2({className:'ItemTitle'},this.props.item.title),
          React.DOM.p({className:'dDescriptonText'},this.props.item.description),
          React.DOM.p({className:'count'},'В наличии: '+this.props.item.count),
          React.DOM.input({type:'button',value:'Изменить',onClick:this.selectChItem}),
          React.DOM.input({type:'button',value:'Удалить',onClick:this.deleteItem}),
          ),
        React.DOM.div({className:'price'},this.props.item.price+' р')
        )
      );
    }
});

*/

export default Item;