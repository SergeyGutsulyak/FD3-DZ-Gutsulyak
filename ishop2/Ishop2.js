var Ishop2 = React.createClass({

  displayName: 'Ishop',

  getInitialState: function() {
    return { 
       curItemsArr:this.props.itemsArr,
       selectCode:0,
       curItem:null,
      };
  },
  //поиск позиции в массиве товаров по cod
  findItem:function(cod){
    var citm=null;
    for(i in this.state.curItemsArr){
      if (this.state.curItemsArr[i].code==cod) return this.state.curItemsArr[i];
    }
  },

  deleteItem:function(cod){
    this.state.curItemsArr.splice(this.findItem(this.state.curItemsArr,cod),1);
    this.setState({curItemsArr:this.state.curItemsArr});
    console.log(cod);
  },
  selectItem:function(cod){
    this.setState({selectCode:cod,curItem:this.findItem(cod)});
  },

  addItem:function(item){

  },

  changeItem:function(cod){

  },

  render: function() {
    //console.log('Рендер');
     
    var curItemCode=null;
    if (this.state.curItem){
      curItemCode=React.createElement(ItemForm,{item:this.state.curItem});
      //console.log(this.state.curItem);
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
        });
      itemsCode.push(itemCode);
    });

    return React.DOM.div( {className:'Ishop2'},
     React.DOM.h1( {className:'Category'}, this.props.category), 
     React.DOM.div( {className:'ItemsContainer'}, itemsCode),
     React.DOM.div( {className:'ItemsConf'}, curItemCode),
    );
  },

});