import styles from "./login.css";
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';
import { connect } from "dva";

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect()
export default class LoginDemo extends React.Component {
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true,
  };
  onSubmit = (err, values) => {
    console.log('value collected ->', {
      ...values,
      autoLogin: this.state.autoLogin,
    });
    if (!err){
      //登录
      this.props.dispatch({type: 'user/login', payload: values})
    } 
  };
  render() {
    return (
      <div className={styles.loginForm}>
        <Login onSubmit={this.onSubmit}>
            <UserName name="username" />
            <Password name="password" />
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}