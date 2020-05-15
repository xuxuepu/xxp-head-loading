/**
 * @name headLoading
 * @author epo
 * @description 导航栏loading，加载程序时显示
 * create 2020-05-14
 */

let headLoadingTime = null;

/**
 * 显示loading
 */
const show = () => {
  //写style
  let styleDom = document.getElementById('app-head-style');
  if(!styleDom){
    let style = document.createElement('style');
    style.setAttribute('id', 'app-head-style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes app-head-load {
        0% {
            width: 0%;
        }
        100% {
            width: 99%;
        }
      }
      /*旋转动画*/
      @keyframes moveover {
        0%   {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
      }
      .loading-box{
        position: absolute;
        right: 2px;
        top: 4px;
        width:14px;
        height:14px;
        /*整体旋转*/
        animation: moveover 3s linear infinite;
      }
      .loading-box1{
        position:absolute;
        width: 7px;
        height: 14px;
        border-radius:7px 0 0 7px;
        /* 起始最深颜色为 #999，过渡到中间颜色为 #d0cfcf */
        background: linear-gradient(#999, #d0cfcf);
        background-color: red;
        z-index:2;
      }
      .loading-box2{
        position:absolute;
        width: 7px;
        height: 14px;
        border-radius:0 7px 7px 0;
        left:50%;
        /* 过渡到中间颜色为 #d0cfcf 最终末尾颜色为 #eee */
        background: linear-gradient(#eee,#d0cfcf);
        z-index:1;
      }
      .loading-box3{
        position:absolute;
        width:10px;
        height:10px;
        top:2px;
        left:2px;
        border-radius:50%;
        background-color: #fff;
        z-index:2;
      }
    `;
    let first = document.head.firstChild; //得到页面的第一个元素
    document.head.insertBefore(style, first);
  }
  //写dom
  let dom = document.getElementById('app-head-loading');
  if (dom) return;
  headLoadingTime = setTimeout(()=>{
    let html = document.createElement('div');
    html.setAttribute('id', 'app-head-loading');
    html.setAttribute('style', 'position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 2px;');
    html.innerHTML = `
      <div style="height: 2px; background: #00ADE7; width: 99%; animation: app-head-load 3s linear;"></div>
      <div class='loading-box'>
        <div class="loading-box1"></div>
        <div class="loading-box2"></div>
        <div class="loading-box3"></div>
      </div>
    `;
    let first = document.body.firstChild; //得到页面的第一个元素
    document.body.insertBefore(html, first);
  }, 500);
}

/**
 * 隐藏loading
 */
const hide = () => {
  if(headLoadingTime) clearTimeout(headLoadingTime);
  setTimeout(()=>{
    let dom = document.getElementById('app-head-loading');
    if (dom){
      document.body.removeChild(dom);
    };
  }, 0);
}

export default { show, hide };
