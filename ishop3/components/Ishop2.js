
import React from 'react';
import PropTypes from 'prop-types';

import './Ishop2.css'

import Item from './Item'
import ItemForm from './ItemForm'

class Ishop2 extends React.Component{
  state={
    curItemsArr:this.props.itemsArr,
    selectCode:0,
    curItem:null,
  }

   //поиск позиции в массиве товаров по cod
   findItem=(cod)=>{
    //console.log('Вызывается поиск');
    for(var i in this.state.curItemsArr){
      if (this.state.curItemsArr[i].code==cod) return {el:this.state.curItemsArr[i],index:i};
    }
    console.log('Не найден');
    return null;
  }

  deleteItem=(cod)=>{
    var fObj=this.findItem(cod); 
    this.state.curItemsArr.splice(fObj.index,1);
    this.setState({curItemsArr:this.state.curItemsArr,curItem:null});
    //console.log(cod);
  }

  selectItem=(cod)=>{
    var fObj=this.findItem(cod);
    //сначала закрываем, потом снова создаем, чтобы обнавились defaultValue
    this.setState({curItem:null},()=>this.setState({selectCode:cod,curItem:fObj.el,lockEdit:true}));
  }

  selectChItem=(cod)=>{

    var fObj=this.findItem(cod);
    //сначала закрываем, потом снова создаем, чтобы обнавились defaultValue
    this.setState({curItem:null},()=>this.setState({selectCode:cod,curItem:fObj.el,lockEdit:false}));
    console.log('Изменение разрешено');
  }

//обработчик нажатия кнопки добавить
  addedItem=(EO)=>{
    //поиск максимального значение кода, новый код максимум старый +1
    var newCode=Math.max(this.state.curItemsArr.reduce((e,v)=>{return Math.max(v.code,e)},0))+1;
    //this.setState({selectCode:newCode});
    //создание пустого товара
    var newI= {title:'',description:'',price:0,imgURL:'images/frs1.jpg', count:0, code:newCode};
    this.setState({curItem:null},()=>this.setState({selectCode:newCode,curItem:newI}));
  }

   changeItem=(newI)=>{
    //console.log(item);
    //console.log(this.state.curItemsArr);
    var fObj=this.findItem(newI.item.code);
    console.log(fObj)
    if (fObj){ 
      this.state.curItemsArr[fObj.index]=newI.item;
      this.setState({curItemsArr:this.state.curItemsArr});
    }
    else{
      this.state.curItemsArr.push(newI.item);
      this.setState({curItemsArr:this.state.curItemsArr});
    }
  }

  closeForm=()=>{
    this.setState({curItem:null})
  }
  render(){
    var curItemForm=null;
    if (this.state.curItem){
      //console.log(this.state.curItem)
      curItemForm=<ItemForm
        item={this.state.curItem}
        cbChangeItem={this.changeItem}
        cbCloseForm={this.closeForm}
        lockEdit={this.state.lockEdit}
      />

      //console.log(this.state.lockEdit);
      //console.log(this.state.curItem);
    }

    var itemsCode=[];
    this.state.curItemsArr.forEach(itemEl => {
      var selIt=false;
      if(itemEl.code==this.state.selectCode){
        selIt=true;
      }
      var itemCode=<Item
        key={itemEl.code}
        selected={selIt}
        item={itemEl}
        cbDeleteItem={this.deleteItem}
        cbSelectItem={this.selectItem}
        cbSelectChItem={this.selectChItem}
      />
      itemsCode.push(itemCode);
    });
    return(
      <div className='Ishop2'>
        <h1 className='Category'>{this.props.category}</h1>
        <div className='ItemsContainer'>
        {itemsCode}
        <input 
          className='ButtonAdd'
          type='button'
          value='Добавить'
          onClick={this.addedItem}
        />
        </div>
        {curItemForm}
      </div>
      
    );
    
  }

}

export default Ishop2;
/*
var Ishop2 = React.createClass({

  displayName: 'Ishop2',

  getInitialState: function() {
    return { 
       curItemsArr:this.props.itemsArr,
       selectCode:0,
       curItem:null,
      // lockEdit:false,
      };
  },
  //поиск позиции в массиве товаров по cod
  findItem:function(cod){
    //console.log('Вызывается поиск');
    for(i in this.state.curItemsArr){
      if (this.state.curItemsArr[i].code==cod) return {el:this.state.curItemsArr[i],index:i};
    }
    console.log('Не найден');
    return null;
  },

  deleteItem:function(cod){
    var fObj=this.findItem(cod); 
    this.state.curItemsArr.splice(fObj.index,1);
    this.setState({curItemsArr:this.state.curItemsArr,curItem:null});
    //console.log(cod);
  },
  selectItem:function(cod){
    var fObj=this.findItem(cod);
    //сначала закрываем, потом снова создаем, чтобы обнавились defaultValue
    this.setState({curItem:null},()=>this.setState({selectCode:cod,curItem:fObj.el,lockEdit:true}));
  },
  selectChItem:function(cod){

    var fObj=this.findItem(cod);
    //сначала закрываем, потом снова создаем, чтобы обнавились defaultValue
    this.setState({curItem:null},()=>this.setState({selectCode:cod,curItem:fObj.el,lockEdit:false}));
    console.log('Изменение разрешено');
  },
//обработчик нажатия кнопки добавить
  addedItem:function(EO){
    //поиск максимального значение кода, новый код максимум старый +1
    var newCode=Math.max(this.state.curItemsArr.reduce((e,v)=>{return Math.max(v.code,e)},0))+1;
    //this.setState({selectCode:newCode});
    //создание пустого товара
    var newI= {title:'',description:'',price:0,imgURL:'images/frs1.jpg', count:0, code:newCode};
    this.setState({curItem:null},()=>this.setState({selectCode:newCode,curItem:newI}));
  },

  addItem:function(){

  },

  changeItem:function(newI){
    //console.log(item);
    //console.log(this.state.curItemsArr);
    var fObj=this.findItem(newI.item.code);
    console.log(fObj)
    if (fObj){ 
      this.state.curItemsArr[fObj.index]=newI.item;
      this.setState({curItemsArr:this.state.curItemsArr});
    }
    else{
      this.state.curItemsArr.push(newI.item);
      this.setState({curItemsArr:this.state.curItemsArr});
    }
  },

  closeForm:function(){
    this.setState({curItem:null})
  },
  
  render: function() {
    //console.log('Рендер');
     
    var curItemForm=null;
    if (this.state.curItem){
      //console.log(this.state.curItem)
      curItemForm=React.createElement(ItemForm,
        {item:this.state.curItem,
         cbChangeItem:this.changeItem,
         cbCloseForm:this.closeForm,
         lockEdit:this.state.lockEdit});
         console.log(this.state.lockEdit);
    }

    var itemsCode=[];
    this.state.curItemsArr.forEach(itemEl => {
      var selIt=false;
      if(itemEl.code==this.state.selectCode){
        selIt=true;
      }
      var itemCode=
        React.createElement(Item,{key:itemEl.code,selected:selIt,item:itemEl,
          cbDeleteItem:this.deleteItem,
          cbSelectItem:this.selectItem,
          cbSelectChItem:this.selectChItem,
        });
      itemsCode.push(itemCode);
    });

    return React.DOM.div( {className:'Ishop2'},
     React.DOM.h1( {className:'Category'}, this.props.category), 
     React.DOM.div( {className:'ItemsContainer'}, itemsCode,React.DOM.input({className:'ButtonAdd',type:'button',value:'Добавить',onClick:this.addedItem})),
     curItemForm,
    );
  },

});
*/