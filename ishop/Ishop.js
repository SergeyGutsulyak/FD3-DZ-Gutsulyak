var Ishop = React.createClass({

  displayName: 'Ishop',

  getDefaultProps: function() {
    return { question: "Вопрос ни о чём" }
  },

  render: function() {

    var itemsCode=[];

    this.props.items.forEach(item => {
      var itemCode=
        React.DOM.div({key:item.code,className:'Item'},
          React.DOM.img({src:item.imgURL,className:'ItemImage'}),
          React.DOM.div({className:'ItemGroup'},
            React.DOM.div({className:'ItemDescription'},
            React.DOM.h2({className:'ItemTitle'},item.title),
            React.DOM.p({className:'dDescriptonText'},item.description),
            React.DOM.p({className:'count'},'В наличии: '+item.count)
            ),
          React.DOM.div({className:'price'},item.price+' р')
          )
        );
      itemsCode.push(itemCode);
    });
    return React.DOM.div( {className:'Ishop'},
     React.DOM.h1( {className:'Category'}, this.props.category), 
     React.DOM.div( {className:'ItemsContainer'}, itemsCode),
    );
  },

});