import React from 'react';

class Record extends React.Component {
    formatDateTime(dt){
        let year=dt.getFullYear();
        let month=dt.getMonth()+1;
        let day=dt.getDate();
        // let hours=dt.getHours();
        // let minutes=dt.getMinutes();
        // let seconds=dt.getSeconds();
        //  return str0l(day,2) + '.' + str0l(month,2) + '.' + year + ' ' + str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
        return str0l(day,2) + '.' + str0l(month,2) + '.' + year;

         function str0l(val,len) {
            let strVal=val.toString();
            while ( strVal.length < len )
            strVal='0'+strVal;
            return strVal;
        }
    }
    clickEdit=()=>{
        // console.log(this.elInput)
        this.elInput.focus();
        this.props.cbUnlock(this.props.id)
    }

    loceFocus=(EO)=>{
        this.props.cbEndEnter(this.props.id,EO.target.value)
    }
    render(){
        // console.log('rend')
        return (
            <div className="Record">
              <input type="text" defaultValue={this.props.body} disabled={this.props.lockEdit} onBlur={this.loceFocus} ref={el=>{this.elInput = el}}/>
              <input type="button" onClick={this.clickEdit}/>
              <span>{this.formatDateTime(this.props.dateStart)}</span>
              <span>{this.formatDateTime(this.props.dateEdit)}</span>
              <span>{this.formatDateTime(this.props.dateEnd)}</span>
            </div>
        );
    }

}

export default Record;