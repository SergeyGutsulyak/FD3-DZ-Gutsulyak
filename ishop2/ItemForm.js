var ItemForm=React.createClass({
    displayName:'ItemForm',

    getInitialState: function() {
        return { 
           curItem:this.props.item,
        };
    },

    propTypes:{

    },
    render:function(){
        //console.log(this.props.item);
        return React.DOM.div({className:'ItemForm'},
            React.DOM.div({className:''},
                React.DOM.img({src:this.props.item.imgURL})
            ),
            React.DOM.div({className:'Field ItemURL'},
                React.DOM.label(null,'URL фото: ',
                    React.DOM.input({type:'text'})
                ),
                React.DOM.span({className:'ErrorText'},'Неправильно введен')
            ),
            React.DOM.div({className:'Field Title'},
                React.DOM.label(null,'Название товара:',
                    React.DOM.input({type:'text'})
                ),
                React.DOM.span({className:'ErrorText'},'Неправильно введен')
            ),
            React.DOM.div({className:'Field Description',},
                React.DOM.label(null,'Описание товара: ',
                    React.DOM.textarea({rows:'10',cols:'30'})
                ),
                React.DOM.span({className:'ErrorText'},'Неправильно введен')
            ),
            React.DOM.div({className:'Field Price'},
                React.DOM.label(null,'Цена:',
                    React.DOM.input({type:'text'})
                ),
                React.DOM.span({className:'ErrorText'},'Неправильно введен')
            ),
            React.DOM.div({className:'Field Count'},
                React.DOM.label(null,'Количество:',
                    React.DOM.input({type:'text'})
                ),
                React.DOM.span({className:'ErrorText'},'Неправильно введен')
            ),
        );
    },
});