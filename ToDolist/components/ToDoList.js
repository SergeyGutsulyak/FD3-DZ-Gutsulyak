import React from 'react';

import Record from './Record.js';

class ToDolist extends React.Component {
    state={
        records:[
            {body:"record1",
             dateStart:new Date(2018, 5, 28),
             dateEdit:new Date(2018, 10, 23),
             dateEnd:new Date(2019, 1, 10),
             id:1,
             lockEdit:true,
            },
            {body:"record2",
             dateStart:new Date(2017, 5, 28),
             dateEdit:new Date(2018, 9, 23),
             dateEnd:new Date(2019, 1, 10),
             id:2,
             lockEdit:true,
            },
            {body:"record3",
             dateStart:new Date(2016, 5, 28),
             dateEdit:new Date(2018, 10, 23),
             dateEnd:new Date(2019, 10, 10),
             id:3,
             lockEdit:true,
            },
        ]
    }
    unLock=(id)=>{
        // console.log(id)
        for (let elKey in this.state.records){
            let el=this.state.records[elKey];
            
            if (el.id==id){
                // console.log('Редактирование')
                let newRecords=[...this.state.records]
                newRecords[elKey].lockEdit=false;
                this.setState({records:newRecords});
            }
        }
    }
    endEndter=(id,newRecord)=>{
        for (let elKey in this.state.records){
            let el=this.state.records[elKey];
            
            if (el.id==id){
                // console.log('Редактирование')
                let newRecords=[...this.state.records]
                newRecords[elKey].lockEdit=true;
                newRecords[elKey].body=newRecord;
                this.setState({records:newRecords});
            }
        }
    }
    render(){
         let elementsRecord=[];
        // console.log(this.state.records)
         for (let elKey in this.state.records){
             let el=this.state.records[elKey];
            //  console.log(el);
             let recordCode=<Record 
                body={el.body} 
                key={el.id}
                dateStart={el.dateStart}
                dateEdit={el.dateEdit}
                dateEnd={el.dateEnd}
                lockEdit={el.lockEdit}
                id={el.id}
                cbUnlock={this.unLock}
                cbEndEnter={this.endEndter}
            s/>;
            
             
             elementsRecord.push(recordCode);
         };
        // console.log(elementsRecord);
        return(
            <div>
                {elementsRecord}
            </div>
        );
    }

}

export default ToDolist;