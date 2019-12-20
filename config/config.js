export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  //  以pages为根目录
  routes: [
    { 
      path: "/",
      component: "../layout",
      routes:[
        {
          path: '/about',
          component: './about',
          Routes: ['./routes/PrivateRoute.js'], // 权限：这里相对根目录，文件名后缀不能少
        },
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/goods',
          component: './goods',
          Routes: ['./routes/PrivateRoute.js'], // 权限：这里相对根目录，文件名后缀不能少
        },
        {
          path: '/',
          component: './index',
        },
        {
          path: '/users',
          component: './users/_layout',
          routes: [
            {
              path: '/users/',
              component: './users/index',
            },
            {
              path: '/users/:id',
              component: './users/$id',
            },
          ],
          Routes: ['./routes/PrivateRoute.js'], // 权限：这里相对根目录，文件名后缀不能少
        },
        {
          component: './NotFound',
        },
      ]
    },
    
  ],
};
