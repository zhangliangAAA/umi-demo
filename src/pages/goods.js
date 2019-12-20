import styles from './goods.css';
import { connect } from 'dva';
import { Button, Card } from 'antd';
import { useEffect } from 'react'
export default connect(
  state => ({
    loading: state.loading,
    goodsList: state.goods, // 获取指定命名空间的模型状态
  }),
  {
    addGood: title => ({
      type: 'goods/addGood', // action的type需要以命名空间为前缀+reducer名称
      title,
    }),
    getList: () => ({
      type: 'goods/getList' // action的type需要以命名空间为前缀+reducer名称
    }),
  }
)(function({ goodsList, addGood,getList,loading }) {
  //执行一次
  useEffect(()=> {
    getList() 
  },[])
  return (
    <div className={styles.normal}>
      <div>
        {/* 商品列表 */}{' '}
        <div>
          {loading.models.goods && <p>loading...</p>}
          {goodsList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            );
          })}
          <div>
            <Button onClick={() => addGood('商品' + new Date().getTime())}>添加商品</Button>
          </div>
        </div>
      </div>
    </div>
  );
});
