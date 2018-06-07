var FilterBlock=React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        stringArr:React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        ),
    },

    getInitialState: function() {
        return { 
            stringArr: this.props.stringArr.slice(), 
            stringArrSort: this.props.stringArr.slice().sort(),
            sortStaus:false,
            workArr:this.props.stringArr,
            dispArr:this.props.stringArr,
            subStr:'',
        };
      },
   
    //функция формирующая массив строк с вхождением части строки
    createSubArrayStrings: function(origArr,subStr){
        return origArr.filter(value=>{
            if (value.indexOf(subStr)==-1) return false;
            return true;
            }
        );
    },
    //изменение checkbox
    sortChange:function(EO){
        if (this.state.sortStaus){
            this.setState({workArr:this.state.stringArr});
            this.setState({dispArr:this.createSubArrayStrings(this.state.stringArr,this.state.subStr)});
        }
        else {
           
            this.setState({workArr:this.state.stringArrSort});
            this.setState({dispArr:this.createSubArrayStrings(this.state.stringArrSort,this.state.subStr)});
        }
        this.setState( {sortStaus:this.state.sortStaus?false:true});
    },
    //изменение строки в тексте
    subStrChange:function(EO){
        this.setState({dispArr:this.createSubArrayStrings(this.state.workArr,EO.target.value)});
        this.setState({subStr:EO.target.value});
    },
    render: function(){
       return React.DOM.div({className:'FilterBlock'},
        React.DOM.input({type:'checkbox',onClick:this.sortChange,checked:this.state.sortStaus}),
        React.DOM.input({type:'text',defaultValue:this.state.subStr,onChange:this.subStrChange}),
        React.createElement(StringsList,{stringArr:this.state.dispArr}),
     );
    },

});