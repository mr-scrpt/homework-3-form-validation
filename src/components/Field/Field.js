import React, {Component} from 'react';


export class Field extends Component{
  state={
    value: ``,
    status: ``
  };

 /* componentDidUpdate(prevProps, prevState, snapshot) {
    const {status} = this.props;
    if (prevState.status !== status){
      this.setState({status})
    }
    console.log(this.state);

  }*/

  newValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const {onChangeText} = this.props;

    this.setState({
      value
    });

    onChangeText(name, value);

  };

  render(){
    /*let value = ``;
    switch (label) {
      case 'Имя':  value = `имя`; break;
      case 'Фамилия':  value = `фамилию`; break;
      case 'Пароль':  value = `пароль`; break;
    }*/

    const {name, label, status, errMsg, emptyMsg} = this.props;

    const classElem = `field__input field-input t-input-${name}`;
    const errorClass = `field__error field-error t-error-${name}`;

    const messageError = status === 'err' ?  errMsg : null;
    const messageEmpty = status === 'empty' ?  emptyMsg : null;


    return(
      <p className="field">
        <label className="field__label" htmlFor={name}>
          <span className="field-label">{label}</span>
        </label>
        <input className={classElem} type="text" name={name} value={this.state.value} onChange={this.newValue}/>
        <span className={errorClass} ref="errMsg">{messageError}{messageEmpty}</span>
      </p>
    )
  }
  


};

