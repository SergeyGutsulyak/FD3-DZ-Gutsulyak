import React from 'react';
import PropTypes from 'prop-types';

import './ItemForm.css';

class ItemForm extends React.Component{

    static propTypes={
        item:PropTypes.shape({
            imgURL: PropTypes.string.isRequired,
            title:  PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            count:PropTypes.number.isRequired,
            price:PropTypes.number.isRequired,
            code:PropTypes.number.isRequired,
        }),
        cbChangeItem:PropTypes.func.isRequired,
        cbCloseForm:PropTypes.func.isRequired,
    }
    state={
        curItem:this.props.item,
        chImgURL:{errText:'',err:0,data:this.props.item.imgURL},
        chCount:{errText:'',err:0,data:this.props.item.count},
        chTitle:{errText:'',err:0,data:this.props.item.title}, 
        chDescription:{errText:'',err:0,data:this.props.item.description},
        chPrice:{errText:'',err:0,data:this.props.item.price},
        chCode:this.props.item.code,
    }

    changeTitle=(EO)=>{
        if (EO.target.value==''){
            this.setState({chTitle:{errText:'Поле не может быть пустым',err:1}});
        }
        else this.setState({chTitle:{errText:'',err:0,data:EO.target.value}});
    }
    changeDescription=(EO)=>{
        if (EO.target.value==''){
            this.setState({chDescription:{errText:'Поле не может быть пустым',err:1}});
        }
        else this.setState({chDescription:{errText:'',err:0,data:EO.target.value}}); 
    }

    changePrice=(EO)=>{
        if (EO.target.value==''){
            this.setState({chPrice:{errText:'Поле не может быть пустым',err:1}});
        }
        else {
            var val=Number.parseFloat(EO.target.value);
            if(!val){
                this.setState({chPrice:{errText:'Значение должно быть числом',err:1}});
            }
            else if (val<0){
                this.setState({chPrice:{errText:'Значение должно быть больше нуля',err:1}});
            }
                else this.setState({chPrice:{errText:'',err:0,data:val}});
        } 
    }

    changeCount=(EO)=>{
        //console.log(EO.target.value)
        if (EO.target.value==''){
            this.setState({chCount:{errText:'Поле не может быть пустым',err:1}});
        } 
        else {
            var val=Number.parseInt(EO.target.value);
            if(!val){
                this.setState({chCount:{errText:'Значение должно быть числом',err:1}});
            }
            else if (val<0){
                this.setState({chCount:{errText:'Значение должно быть больше нуля',err:1}});
            }
                else this.setState({chCount:{errText:'',err:0,data:val}});
        }
            
    }

    saveItem=()=>{
        var elArr=[this.state.chImgURL,this.state.chCount,this.state.chTitle,this.state.chDescription,this.state.chPrice];
        var err=elArr.reduce((e,v)=>{e+=v.err;return e;},0);
        if (err==0){
            var chItem={
                imgURL:this.state.chImgURL.data,
                title:this.state.chTitle.data,
                description:this.state.chDescription.data,
                price:this.state.chPrice.data,
                count:this.state.chCount.data,
                code:this.props.item.code,
            };
            this.props.cbChangeItem({item:chItem});
        }
        else{alert('Проверьте правильность заполнения формы')}
    }

    cancelForm=()=>{
        this.props.cbCloseForm();
    }

    render(){
       return(
           <div className='ItemForm'>
                <div>
                    <img src={this.props.item.imgURL}/>
                </div>
                <div className='Field ItemURL'>
                    <label> URL фото:
                        <input 
                            type='text'
                            defaultValue={this.props.item.imgURL}
                            disabled={this.props.lockEdit}
                        />
                        {(this.state.lockEdit)?null:<input type='file' accept='image/*,image/jpeg' onChange={this.selectFile}/>}
                    </label>
                    <span className='ErrorText'> {this.state.chImgURL.errText}</span>
                </div>

                <div className='Field Title'>
                    <label>
                        Название товара:
                        <input 
                            type='text'
                            defaultValue={this.props.item.title}
                            disabled={this.props.lockEdit}
                            onChange={this.changeTitle}
                        />
                    </label>
                    <span className='ErrorText'> {this.state.chTitle.errText}</span>
                </div>

                <div className='Field Description'>
                    <label>
                        Описание товара:
                        <textarea
                            rows='10'
                            cols='30'
                            defaultValue={this.props.item.description}
                            disabled={this.props.lockEdit}
                            onChange={this.changeDescription}
                        />
                    </label>
                    <span className='ErrorText'> {this.state.chDescription.errText}</span>
                </div>
                <div className='Field Price'>
                    <label>
                        Цена:
                        <input 
                            type='text'
                            defaultValue={this.props.item.price}
                            disabled={this.props.lockEdit}
                            onChange={this.changePrice}
                        />
                    </label>
                    <span className='ErrorText'> {this.state.chPrice.errText}</span>
                </div>

                <div className='Field Count'>
                    <label>
                        Количество:
                        <input 
                            type='number'
                            defaultValue={this.props.item.count}
                            disabled={this.props.lockEdit}
                            onChange={this.changeCount}
                        />
                    </label>
                    <span className='ErrorText'> {this.state.chCount.errText}</span>
                </div>

                <div className='Field Buttoms'>
                    <input 
                        type='button'
                        value='Отмена'
                        onClick={this.cancelForm}
                    />
                    {
                        (!this.props.lockEdit)&&
                        <input type='button' value='Сохранить' onClick={this.saveItem}/>
                    }
                </div>
           </div>
       )

    }

}

export default ItemForm;
/*
var ItemForm=React.createClass({
    displayName:'ItemForm',

    getInitialState: function() {
        return { 
           curItem:this.props.item,
           chImgURL:{errText:'',err:0,data:this.props.item.imgURL},
           chCount:{errText:'',err:0,data:this.props.item.count},
           chTitle:{errText:'',err:0,data:this.props.item.title}, 
           chDescription:{errText:'',err:0,data:this.props.item.description},
           chPrice:{errText:'',err:0,data:this.props.item.price},
           chCode:this.props.item.code,
        }
    },

    propTypes:{
        item:React.PropTypes.shape({
            imgURL: React.PropTypes.string.isRequired,
            title:  React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            count:React.PropTypes.number.isRequired,
            price:React.PropTypes.number.isRequired,
            code:React.PropTypes.number.isRequired,
        }),
        cbChangeItem:React.PropTypes.func.isRequired,
        cbCloseForm:React.PropTypes.func.isRequired,
    },
    selectFile:function(EO){
        //console.log(EO.target.files[0]);
       // console.log(EO.target.value);
        //this.setState({src:EO.target.value});
    },
    changeTitle:function(EO){
        if (EO.target.value==''){
            this.setState({chTitle:{errText:'Поле не может быть пустым',err:1}});
        }
        else this.setState({chTitle:{errText:'',err:0,data:EO.target.value}});
    },
    changeDescription:function(EO){
        if (EO.target.value==''){
            this.setState({chDescription:{errText:'Поле не может быть пустым',err:1}});
        }
        else this.setState({chDescription:{errText:'',err:0,data:EO.target.value}}); 
    },
    changePrice:function(EO){
        if (EO.target.value==''){
            this.setState({chPrice:{errText:'Поле не может быть пустым',err:1}});
        }
        else {
            var val=Number.parseFloat(EO.target.value);
            if(!val){
                this.setState({chPrice:{errText:'Значение должно быть числом',err:1}});
            }
            else if (val<0){
                this.setState({chPrice:{errText:'Значение должно быть больше нуля',err:1}});
            }
                else this.setState({chPrice:{errText:'',err:0,data:val}});
        } 
    },
    changeCount:function(EO){
        //console.log(EO.target.value)
        if (EO.target.value==''){
            this.setState({chCount:{errText:'Поле не может быть пустым',err:1}});
        } 
        else {
            var val=Number.parseInt(EO.target.value);
            if(!val){
                this.setState({chCount:{errText:'Значение должно быть числом',err:1}});
            }
            else if (val<0){
                this.setState({chCount:{errText:'Значение должно быть больше нуля',err:1}});
            }
                else this.setState({chCount:{errText:'',err:0,data:val}});
        }
            
    },

    cancelForm:function(){

    },

    saveItem:function(){
        var elArr=[this.state.chImgURL,this.state.chCount,this.state.chTitle,this.state.chDescription,this.state.chPrice];
        var err=elArr.reduce((e,v)=>{e+=v.err;return e;},0);
        if (err==0){
            var chItem={
                imgURL:this.state.chImgURL.data,
                title:this.state.chTitle.data,
                description:this.state.chDescription.data,
                price:this.state.chPrice.data,
                count:this.state.chCount.data,
                code:this.props.item.code,
            };
            this.props.cbChangeItem({item:chItem});
        }
        else{alert('Проверьте правильность заполнения формы')}
    },
    cancelForm:function(){
        this.props.cbCloseForm();
    },
    render:function(){
        //console.log(this.props.item);
        return React.DOM.div({className:'ItemForm'},
            React.DOM.div({className:''},
                React.DOM.img({src:this.props.item.imgURL})
                //React.DOM.img({src:this.state.src})
            ),
            React.DOM.div({className:'Field ItemURL'},
                React.DOM.label(null,'URL фото: ',
                    React.DOM.input({type:'text',defaultValue:this.props.item.imgURL,disabled:this.props.lockEdit}),
                    (this.state.lockEdit)?null:React.DOM.input({type:'file',accept:'image/*,image/jpeg',onChange:this.selectFile}),
                ),
                React.DOM.span({className:'ErrorText'},this.state.chImgURL.errText)
            ),

            React.DOM.div({className:'Field Title'},
                React.DOM.label(null,'Название товара:',
                    React.DOM.input({type:'text',defaultValue:this.props.item.title,disabled:this.props.lockEdit,onChange:this.changeTitle})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chTitle.errText)
            ),

            React.DOM.div({className:'Field Description',},
                React.DOM.label(null,'Описание товара: ',
                    React.DOM.textarea({rows:'10',cols:'30',defaultValue:this.props.item.description,disabled:this.props.lockEdit,onChange:this.changeDescription})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chDescription.errText)
            ),

            React.DOM.div({className:'Field Price'},
                React.DOM.label(null,'Цена:',
                    React.DOM.input({type:'text',defaultValue:this.props.item.price,disabled:this.props.lockEdit,onChange:this.changePrice})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chPrice.errText)
            ),

            React.DOM.div({className:'Field Count'},
                React.DOM.label(null,'Количество:',
                    React.DOM.input({type:'number',defaultValue:this.props.item.count,disabled:this.props.lockEdit,onChange:this.changeCount})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chCount.errText)
            ),

            React.DOM.div({className:'Field Buttoms'},
                React.DOM.input({type:'button',value:'Отмена',onClick:this.cancelForm}),
                (this.state.lockEdit)?null:React.DOM.input({type:'button',value:'Сохранить',onClick:this.saveItem}),
            ),
        );
    },
});

*/