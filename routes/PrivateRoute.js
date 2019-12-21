import Redirect from 'umi/redirect';
import { connect } from 'dva';

export default connect(state => ({ isLogin: !!state.user.token }))(props => {
  if (!props.isLogin) {
    console.log(props);

    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location.pathname } // 传递重定向地址
        }}
      />
    );
  }
  return (
    <div>
      <div>权限页面</div>
      {props.children}
    </div>
  );
});
