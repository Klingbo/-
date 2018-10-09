# 百度前端学院作业
### layout1中存放的是CSS布局的作业，具体文件如下：
1. [2栏-左30%-右70%-flex](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左30-右70-flex.html)
2. [2栏-左30%-右70%-定位](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左30-右70-定位.html)
3. [2栏-左30%-右70%-浮动](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左30-右70-浮动.html)
4. [2栏-左变右固-flex](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左变右固-flex.html)
5. [2栏-左变右固-定位](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左变右固-定位.html)
6. [2栏-左变右固-浮动](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左变右固-浮动.html)
7. [2栏-左固右变-flex](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左固右变-flex.html)
8. [2栏-左固右变-定位1](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左固右变-定位1.html)
9. [2栏-左固右变-定位2](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左固右变-定位2.html)
10. [2栏-左固右变-浮动](https://klingbo.github.io/IFE-Homework/layout-1/2栏-左固右变-浮动.html)
11. [3栏-中变侧固-flex](https://klingbo.github.io/IFE-Homework/layout-1/3栏-中变侧固-flex.html)
12. [3栏-中变侧固-中间浮动-侧边绝对定位](https://klingbo.github.io/IFE-Homework/layout-1/3栏-中变侧固-中间浮动-侧边绝对定位.html)
13. [3栏-中变侧固-圣杯布局](https://klingbo.github.io/IFE-Homework/layout-1/3栏-中变侧固-圣杯布局.html)

### layout2中存放的是网页布局的作业，目标是创建一个拥有简单布局的页面
[简单布局](https://klingbo.github.io/IFE-Homework/layout-2/index.html)

### resume2.0存放的是简历作业，要求给同一个页面设计3种样式，只要更换CSS引用就能更改页面样式
[简历](https://klingbo.github.io/IFE-Homework/resume2.0/resume.html) 
我在页面上写了个js脚本用于切换3样式,但是后时候显示不出来,刷新一下就好.

### webpage存放的是一个简单的网页的作业
主要用到了flex布局，sass编写css,gulp-sass的安装与应用
点击[这里](https://klingbo.github.io/IFE-Homework/webpage/index.html)可以预览网页效果

### you_xuan_app是优选网APP作业，写了一个APP首页和购物车的页面。
+ 主要用到了百分比布局，flex弹性盒子布局;
+ 另外用了zepto库，iScroll库，swiper库。hotcss库;
+ 主要学习了弹性盒子在移动端的应用；1像素问题的处理：::before，尺寸设为200%再缩放为一半；点击穿透的处理：1.整个个页面都不使用click事件，2.取消默认事     件。此外还练习了scss样式的编写，gulp-sass的安装与使用;
+ 还学习了用js根据屏幕尺寸动态更改页面字号，配合rem进行弹性布;
+ 用js写了一个倒计时的小脚本;
+ 点击[这里](https://klingbo.github.io/IFE-Homework/you_xuan_app/src/index.html)可以预览首页;
+ 点击[这里](https://klingbo.github.io/IFE-Homework/you_xuan_app/src/cart.html)可以预览购物车.

### Complex_Web_Page是作业复杂页面布局的成果。
+ 我尝试了gulp工程化，自己配置了gulp-sass转化scss文件，imagemin压缩图片
+ 利用iconfont把所有的小图标转化为样式
+ 主要运用了flex弹性盒子布局，辅以浮动跟定位。
点击[这里](https://klingbo.github.io/IFE-Homework/Complex_Web_Page/index.html)可以进行预览

### table存放的是动态生成表格的页面。勾选页面上的地区，产品，利用js动态生成表格。
+ 在这个小项目里，我先在主页中完成了整个项目，然后把各函数打包到单独的js文件，最后用webpack打包引入。
+ 在打包输出函数要注意输出方式在输出过程遇到使用exports.函数名=函数的方式，会导致引用时函数变成一个对象，导致函数引用失败，使用module.exports=函数名的方式可以避免错误。
+ 点击[这里](https://klingbo.github.io/IFE-Homework/table/table-1.html)可以预览
