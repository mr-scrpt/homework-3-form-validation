import React, {Component} from 'react';

import './Form.css';
import {Field} from '../Field';


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
  /*onChangeText= (value) => {
    const name = Object.keys(value);

    const text = value[name];
    console.log(name, text);

    this.setState((state) => {
        state.inputs[name] = text;
    });

    console.log(this.state);
  };*/

  /*checkForm = () => {
      const {inputs, etalon} = this.state;
      for(let elem in inputs){

        if(inputs[elem] === etalon[elem]){
          console.log(etalon[elem], inputs[elem]);
          console.log('Правда');
        }else {
          console.log(etalon[elem], inputs[elem]);
          console.log('Не правда');
        }
      }

    };*/

  sendForm = (e) => {
    e.preventDefault();
    this.checkForm();
  };

  checkForm = () => {
    const {firstname, etalonFirst, lastname, etalonLast, password, etalonPassword} = this.state;

    if(firstname !== etalonFirst){
      this.setState({success: false});
      if(!firstname){
        this.setState({statusFirst: `empty`})
      }else {
        this.setState({statusFirst: `err`})
      }
    }else {
      this.setState({success: true})
    }

    if(lastname !== etalonLast){
      this.setState({success: false});
      if(!lastname){
        this.setState({statusLast: `empty`})
      }else {
        this.setState({statusLast: `err`})
      }
    }else {
      this.setState({success: true})
    }

    if(password !== etalonPassword){
      this.setState({success: false});
      if(!password){
        this.setState({statusPassword: `empty`})
      }else {
        this.setState({statusPassword: `err`})
      }
    }else {
      this.setState({success: true})
    }
  };

  onChangeText = (name,value) => {
    this.setState({
      [name]: value,
      statusFirst: ``,
      statusLast: ``,
      statusPassword: ``
    })
  };

  render() {
    const {statusFirst, statusLast, statusPassword, success} = this.state;
    const content = success
      ? <img src="./assets/bond_approve.jpg" alt="bond approve" className="t-bond-image" />
      : (
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
      );

    return(
      <div className='app-container'>
        {content}
      </div>

    )
  }
}