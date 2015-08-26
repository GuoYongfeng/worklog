% 笔试题 - 2014 - 2


`1.`  请写出至少5个HTML5中新增的标签，以及他们的语义。 （8分）

**答案：**


[HTML5 标签](http://w3school.com.cn/html5/html5_reference.asp)列表中标明`new`的部分，回答其中任一五个即可，语义见`描述`部分。


`2.`  请说出CSS中“position”属性可能的取值，并分别描述他们。 （8分）

**答案：** 

- absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
- relative：生成相对定位的元素，相对于其正常位置进行定位。
- fixed：生成绝对定位的元素，相对于浏览器窗口进行定位。
- static：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

答出以上部分即可。若知道`inherit`说明了解CSS的继承。若知道`sticky`、`center`、`page`说明该同学关注行业动态，关注新标准。




`3.`  实现isDomContains函数，判断A元素是否在B元素中。 （10分）

    function isDomContains(A, B) {
        // Implementation
    } 
    // return true when HTML is <div id=”B”><div><div id=”A”></div></div></div>
    // return false when HTML is <div id=”B”></div><div id=”A”></div>
    isDomContains (document.getElementById('A'), document.getElementById('B')); 

**答案：** 

主要考查对 contains 和 compareDocumentPosition API 的了解。能通过遍历方式实现的也算正确。

普通：

    whie (A.parentNode !== document.body) {
        if ( A.parentNode === B ) {
            return true;
        }
        A = A.parentNode;
    }
    return false;

稍差：

    var els = B.getElementsByTagName('*');
    for (var i = 0, l = els.length; i < l; i++) {
        if (els[i] === A) {
            return true;
        }
    }
    return false;

知道有 contains 或 compareDocumentPosition API 的：

    return B.contains(A);
    return !! (A.compareDocumentPosition(B) & 8);
    return !! (B.compareDocumentPosition(A) & 16);

最优：

    return B.contains
        ? B !== A && B.contains(A)
        : !!(A.compareDocumentPosition(B) & 8);


`4.`  实现一个LRUCache。请按以下接口给予实现包括构造函数在内的所有函数： （12分）

    1. 构造函数，创建一个LRU缓存池。size为缓存的容量
    {void} LRUCache({number}size);
    2. 往缓存池中添加项
    {void} LRUCache.prototype.add({string}key, {*}value);
    3. 获取项
    {*} LRUCache.prototype.get({string}key); 


**答案：** 

使用数组存储数据，当add的时候，如果已经有这个key就移到最前，没有就unshift在最前面。超出容量时pop最后一个。

优化：额外加一个map存储项在数组中的索引，用于add的时候快速找到数组中的位置并移到最前。



`5.`  HTTP Response Header中Expires, E-Tag, Cache-Control, Last-Modified都是跟缓存的功能相关的，能介绍一下它们之间的区别吗？ （12分）

**答案：** 

`Expires`和`Last-Modified`是在HTTP/1.0里就支持的。`E-Tag`和`Cache-Control`在HTTP/1.1里面引入的。

通过使用`E-Tag`，相比`Last-Modified-Since`可以更精确的验证一个资源是否过期。

`Cache-Control`使用`max-age`来控制过期时间，相比`Expires`更准确一些。


`6.`  请用HTML、CSS实现图中相册封面的布局。右图为鼠标移到封面图片后的状态，图片上的文字垂直、水平居中，封面图片整个区域为跳转链接；图片的宽度为236px，高度不固定。 （15分）

注：背景颜色、文字颜色、阴影、下方头像尺寸、文字大小等请跟着自己的直觉写。



![图A](http://fe.baidu.com/~zhao_lei/test/2.png)


**答案：** 

主要考察点有：

- 高度不固定的容器内，多行文本水平、垂直居中
- 图片下方头像与文字左右布局的实现
- HTML标签的合理使用


`7.`  在没有任何样式的页面，通过JS将所有className包含red的元素内的文字设置为红色粗体。 （15分）


**答案：** 

考查对动态创建 CSS 规则和 API 兼容方面的了解。通过遍历DOM添加样式也算正确。

普通：

    var els = document.getElementsByClassName('red');
    for (var i = 0, l = els.length; i < l; i++) {
        els[i].style.color = 'red';
        els[i].style.fontWeight = 700;
    }

较好：

    var style = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(style);

    var rule = '.red {font-weight: 700; color: red; }';
    if ('textContent' in style) {
        style.textContent = rule;
    }
    else {
        style.innerText = rule;
    }

更好：

    var selector = '.red' + className;
    var rules = 'font-weight: 700; color: red;';
    var style = document.createElement('style');
    (document.head || document.getElementsByTagName('head')[0])
        .appendChild(style);
    var sheet = style.sheet || style.styleSheet;
    if (sheet.addRule) {
        sheet.addRule(selector, rules);
    }
    else {
        sheet.insertRule(selector + '{' + rules + '}', 0);
    }




`8.`  如何让页面渲染的更快？请简述你的思路。 （20分）

**答案：** 

1. 减少reflow，repaint
2. 减少首次渲染的DOM量
3. 在不影响页面展现的情况下，尽量把JS靠后放置
4. 对css选择器做优化


`9.` 【附加题】请描述一个你做过的最满意的技术研究（可以是对某个问题的深入研究、创新的想法等），可以但不限于从以下方面描述：

1.  为什么选择做这个技术研究？
2.  研究的过程？
3.  你在这个研究中的收获？

**答案：** 

主要考查stay hungry、学习能力、折腾能力、技术敏感性等。

该题为决定考生是否进行面试提供参考，不设分值，由阅卷人把握。
