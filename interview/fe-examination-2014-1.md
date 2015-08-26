% FE校招笔试题 - 2014 - 1


`1.`  与“列表”相关的HTML标签有哪几组？他们的语义分别是什么？ （8分）

**答案：**

回答出以下任意三种即可。答出一种2分，两种5分，三种8分。

- ul, li: 无序列表
- ol, li: 有序列表
- dl, dt, dd: 定义列表
- select/optgroup, option: 可选列表
- menu, menuitem/li: 命令列表/目录列表 ([HTML5重定义](http://www.w3.org/html/wg/drafts/html/master/interactive-elements.html#the-menu-element))
- datalist, option: 选项列表 (HTML5新增)


`2.`  简单谈谈CSS选择器的优先级。 （8分）

**答案：** 

答到内联样式 &gt; id选择器 &gt; class类选择器 &gt; 类型选择器的优先级这种程度，可得6分。

能将以上四类按(a, b, c, d)排列计算优先级的可得8分。说明是读过[规范](http://www.w3.org/TR/CSS21/cascade.html#specificity)的，或者看过别人的[解析](http://yiminghe.iteye.com/blog/254094)。


`3.`  已知页面中有一元素，id 为 myElement，在坐标 (820, 917) 处，请写出让页面滚动到的该元素的DOM操作方法，至少两种。元素的HTML示例如下： （10分）

    <div id="myElement" style="position:absolute;left:820px;top:917px;">...</div>

**答案：** 

主要考查对 DOM 元素的获取与 scrollTo、scrollINtoView 等 API 的了解。回答出以下任意两种即可。

    window.scrollTo(820, 917);
    document.documentElement.scrollTop = 917;
    location.hash = '#myElement';
    document.getElementById('myElement').scrollIntoView();


`4.`  实现一个OrderedMap，OrderedMap是一个有序的key-value集合，其元素的顺序根据调用set的先后来决定。请按以下接口给予实现包括构造函数在内的所有函数： （12分）

    // 1. 构造函数
    {void} OrderedMap();
    // 2. 根据指定的key设定值。如果该key存在，则覆盖值，且顺序保持不变。否则添加并放在最后。
    {void} OrderedMap.prototype.set({string}key, {*}value);
    // 3. 根据key获取对应的值。如果key不存在则返回undefined
    {*} OrderedMap.prototype.get({string}key);
    // 4. 获取指定位置的元素
    {*} OrderedMap.prototype.item({number}index);
    // 5. 获取当前OrderedMap的元素数量
    {number} OrderedMap.prototype.count();

OrderedMap的实现要求满足如下结果：

    var map = new OrderedMap();
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    map.get('a'); // return 1
    // console 1, 2, 3
    for (var i = 0; i < map.count(); i++) {
        console.log(map.item(i));
    }



**答案：** 

内部维护一个array和一个map，set同时同步2个对象，count和item用array，get用map。

亮点：因为没有remove，所以map中的value存“在array中的index”的话，有助于set已有的key的时候快一点（否则要拿出oldValue，去array中for一下找oldValue，然后再替换）。



`5.`  HTTP Response Header中Content-Encoding: gzip是什么意思？这个字段有什么用？ （12分）

**答案：** 

告诉Client返回的内容是压缩过的，指明内容的压缩编码。压缩内容可以减少传输的内容，节约传输时间。


`6.`  页面中有四个容器（header, aside, section, footer），每个容器之间的距离为10px。请实现响应式布局，达到如下效果： （15分）

宽度大于等于500px时，aside为200px，section宽度自适应：

![图A](http://fe.baidu.com/~zhao_lei/test/1-a.png)

宽度小于500px时，四个容器依次排列：
 
![图B](http://fe.baidu.com/~zhao_lei/test/1-b.png)


**答案：** 

主要考察点有：

- 响应式布局（Media Queries）
- 包含页头页尾的左侧固定、右侧自适应布局（包括浏览器兼容性）
- HTML标签的合理使用


`7.`  有如下表单，请在表单提交前验证姓名和生日的合法性，输入非法时使表单项边框颜色变红。姓名必须为纯英文字母组成，生日必须为yyyy-M-d格式。 （15分）

    <form action="url" method="post" id="myForm">
        <input name="name" />
        <input name="birthday" />
        <input type="submit" value="submit" />
    </form>

**答案：** 

主要考察点有：

- form的onsubmit事件绑定
- 正则对name和birthday格式进行校验
- birthday中月份和日期是否超出范围的校验。可通过new Date后判断getMonth和getDate的值。
- 设置表单项的边框颜色。可直接style操作，用class更好。



`8.`  请简要描述web前端性能优化都需要考虑哪些方面，你的优化思路是什么？ （20分）

**答案：** 

性能优化需要考虑的方面：

1. 网络传输
2. 页面渲染
3. 脚本执行
4. 不同环境下的优化，包括网络环境，浏览器环境，终端等。

性能优化的思路和步骤：

1. 监控，监控真实用户性能情况，输出数据报表
2. 梳理出用户最关心的指标，并对其进行监控和优化  
3. 根据不同的情况对其差异化优化(网络，浏览器，登陆状态等) 


`9.` 【附加题】请描述一个你做过的最满意的技术研究（可以是对某个问题的深入研究、创新的想法等），可以但不限于从以下方面描述：

1.  为什么选择做这个技术研究？
2.  研究的过程？
3.  你在这个研究中的收获？

**答案：** 

主要考查stay hungry、学习能力、折腾能力、技术敏感性等。

该题为决定考生是否进行面试提供参考，不设分值，由阅卷人把握。
