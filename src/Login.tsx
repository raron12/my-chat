import React, { Component } from 'react';
import { proxy } from './Proxy';
import { TextInput } from './TextInput';

const NEPTUN: string = "PHW7QE";
const FIRSTNAME: string = "AAron";

export class Login extends Component<{}, { email: string, password: string, displayName: string, register: boolean}>
{
    state = {email:"", password:"", displayName:"", register: false};
    render()
    {
        return (
            
            <div className="login">
                <img src="logo512.png" width="256" />
                {this.state.register &&
                <TextInput type="text" placeholder="Display Name" value={this.state.displayName}
                onChange={e => this.setState({displayName: e})} onEnter={() => this.onClick()} autofocus={true}/>
                }
                <TextInput type="email" placeholder="Email (someone@example.com)" value = {this.state.email}
                    onChange = {e=>{
                        this.onEmailChange(e)
                        this.setState({email:e})
                    }}
                    onEnter={() => this.onClick()} autofocus={true}/>
                <TextInput type="password" placeholder="Password" value = {this.state.password} onChange={e=> this.setState({password:e})} onEnter={() => this.onClick()} autofocus={true} />
                <button type="button" onClick={()=> this.onClick()}>
                    {this.state.register ? "Register" : "Login"}
                </button>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>
                <p>{ this.state.register ? "Switch back to " : "Have no account yet? Go and " }
                    <a href="" onClick={ e =>
                        {
                        e.preventDefault();
                        this.setState( state => ( { register: !state.register } ) ); // pass a function instead of object
                        } }>
                        { this.state.register ? "Login" : "Register" }
                    </a>
                </p>
            </div> );
    }
    onEmailChange(email:string)
    {
        if(email.toLowerCase() == NEPTUN.toLowerCase())
            this.setState({displayName: FIRSTNAME})
        
    }
    onClick()
    {
    if ( this.state.register )
        proxy.register(this.state.email, this.state.password, this.state.displayName)
    else
        proxy.login(this.state.email, this.state.password)
    }
}