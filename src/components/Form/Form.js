import React, {Component} from 'react';

import './Form.css';
import {Field} from '../Field';
import bond from './assets/bond_approve.jpg';

export default class Form extends Component{
  state={
    firstname: ``,
    etalonFirst: `James`,
    statusFirst: ``,
    lastname: ``,
    etalonLast: `Bond`,
    statusLast: ``,
    password: ``,
    etalonPassword: `007`,
    statusPassword: ``,
    success: false
  };

  sendForm = (e) => {
    e.preventDefault();
    this.checkForm();
  };

  checkRow(value, etalon, stateLabel){
    if(value !== etalon){
      this.setState({success: false});
      if(!value){
        this.setState({[stateLabel]: `empty`})
      }else {
        this.setState({[stateLabel]: `err`})
      }
    }else {
      this.setState({success: true})
    }
  }
  checkForm = () => {
    const {firstname, etalonFirst, lastname, etalonLast, password, etalonPassword} = this.state;
    this.checkRow(firstname, etalonFirst, 'statusFirst');
    this.checkRow(lastname, etalonLast, 'statusLast');
    this.checkRow(password, etalonPassword, 'statusPassword');
  };

  onChangeText = (name,value) => {
    this.setState({
      [name]: value,
      statusFirst: ``,
      statusLast: ``,
      statusPassword: ``
    })
  };
  renderForm(){
    const {statusFirst, statusLast, statusPassword} = this.state;
    return(
      <form action="" method='post' className="form" onSubmit={this.sendForm}>
        <h1>Введите свои данные, агент</h1>
        <Field
          name="firstname"
          label="Имя"
          onChangeText={this.onChangeText}
          status={statusFirst}
          errMsg="Имя указано не верно"
          emptyMsg="Нужно указать имя"
        />
        <Field
          name="lastname"
          label="Фамилия"
          onChangeText={this.onChangeText}
          status={statusLast}
          errMsg="Фамилия указана не верно"
          emptyMsg="Нужно указать фамилию"
        />
        <Field
          name="password"
          label="Пароль"
          onChangeText={this.onChangeText}
          status={statusPassword}
          errMsg="Пароль указан не верно"
          emptyMsg="Нужно указать пароль"
        />
        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" />
        </div>
      </form>
    )
  }
  render() {
    const {success} = this.state;
    return(
      <div className='app-container'>
        {success ? <img src={bond} alt="bond approve" className="t-bond-image" /> : this.renderForm() }
      </div>
    )
  }
}