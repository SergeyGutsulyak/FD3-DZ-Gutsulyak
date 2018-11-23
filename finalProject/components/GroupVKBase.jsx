import React from 'react';
// import './GroupVK.css';

class GroupVKBase extends React.PureComponent {
    
  /*
    static propTypes = {
      client:PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        canEdit:PropTypes.boolean.isRequired,
      })
    };
    */
  
  constructor(props){
    super(props);
     
    if (props.groupData['description'].length>170){
      var currentTextDescription=props.groupData['description'].slice(0,171);
      var isHaveFull=true;
    }
    else {
      var currentTextDescription=props.groupData['description'];
      var isHaveFull=false;
    }

    this.state={
      isDescriptionFull:0,
      textDescription:currentTextDescription,
      isHaveFull:isHaveFull,
   }
  }


  showDescription=()=>{
    this.setState({isDescriptionFull:1,textDescription:this.props.groupData['description']})
  }
  hideDescription=()=>{
    this.setState({isDescriptionFull:0,textDescription:this.props.groupData['description'].slice(0,151)})
  }
    render(){
      //console.log(this.props.userData['maiden_name']);
      return (
        <div className='groupVK'>
            <div className='groupPhoto clearfix'>
              <a href={'https://vk.com/'+this.props.groupData['screen_name']} target="_blank">
                <img
                  src={this.props.groupData['photo_100']}
                />
              </a>
            </div>
            <div className='groupInfo'>
                <div className='groupName'>
                  <a href={'https://vk.com/'+this.props.groupData['screen_name']} target="_blank">
                  {this.props.groupData['name']}
                  </a>
                </div>
                <div className="groupRegion">
                  {this.props.groupData['country']} || {this.props.groupData['city']}
                </div>
                <div className='groupDescription'>
                  <p>
                    {this.state.textDescription}
                  </p>
                  {(this.state.isHaveFull)&&((this.state.isDescriptionFull)?(
                    <input type="button" value="Скрыть" onClick={this.hideDescription}/>
                  ):(
                    <input type="button" value="...Ещё >" onClick={this.showDescription}/>
                  ))}
                </div>
            </div>
        </div>
      )};    
  };
  
  export default GroupVKBase