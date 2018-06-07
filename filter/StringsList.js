var StringsList=React.createClass({

    displayNmae: 'StringList',

    propTypes: {
        stringArr:React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        ),
    },

    render: function(){
        var stringsCode=[];
        stringsCode=this.props.stringArr.map(v=>
            React.DOM.li(null,v)
        );
        return React.DOM.ul({className:"StringList"},
            stringsCode
        );
    },
});