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
    selected:React.PropTypes.bool.isRequired,
    },
    changeItem:function(){
        
    },
    deleteItem:function(EO){
        this.props.cbDeleteItem(this.props.item.code);
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
          React.DOM.input({type:'button',value:'Изменить',onClick:this.changeItem}),
          React.DOM.input({type:'button',value:'Удалить',onClick:this.deleteItem}),
          ),
        React.DOM.div({className:'price'},this.props.item.price+' р')
        )
      );
    }
});