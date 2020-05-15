# 单页应用懒加载时，显示加载js模块时显示loading

### 示例（以vue的router为例）
```
import HeadLoading from 'xxp-head-loading';

router.beforeEach((to, from, next) => {
  //显示导航loading
  HeadLoading.show();
  next();
});

router.afterEach((to, from, next) => {
  //隐藏导航loading
  HeadLoading.hide();
});
```
