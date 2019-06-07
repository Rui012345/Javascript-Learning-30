# JSDemo
web project demo
---
1.[CSS多列等高布局](https://rui012345.github.io/Javascript-Learning-30/CSS%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80.html)\
利用`padding-bottom`和`margin-bottom`正负相抵，以及父级盒子的`overflow：hidden`，实现视觉上的背景等高。\
2.[Flex弹性布局](https://rui012345.github.io/Javascript-Learning-30/flex.html)\
3.[jQuery学习](https://rui012345.github.io/Javascript-Learning-30/jQuerytest01/index.html)

Javascript 30
---
30 Day Vanilla JS Challenge https://JavaScript30.com  

1.JavaScript Drum Kit  

[效果预览](https://rui012345.github.io/Javascript-Learning-30/01%20-%20JavaScript%20Drum%20Kit/index-GREY.html)  

监听键盘触发的`keydown`事件，获取按下的键值所对应的`audio`，触发play方法，修改外部盒子的样式，使用`setTimeout`或者监听`transitionend`事件，移除css样式。
```
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if(!audio){
        return;//按键对应不到audio的data-key，停止所有操作
      }
      audio.currentTime = 0;//按下键每次都触发，播放都跳跃到开始时间。
      audio.play();
      key.classList.add('playing');
      //transition过渡效果结束，移除样式。70对应的css过渡时间。
      setTimeout(function(){
        key.classList.remove('playing');
      },70);
```  
2.JS and CSS Clock
[效果预览](https://rui012345.github.io/Javascript-Learning-30/02%20-%20JS%20and%20CSS%20Clock/index-GREY.html)  

利用间歇调用`setTnterval`函数，每隔1s，调用一次更新函数，更新函数：实例化Date对象，将时、分、秒转化为度数，修改`transform`属性的`rotate`角度  
`const secondHand = document.querySelector('.second-hand');`
```
    const now = new Date();
    const seconds = now.getSeconds();

    const secondsDegrees = ((seconds/60)*360) ;//角度

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
```
3.CSS Variables
[效果预览](https://rui012345.github.io/Javascript-Learning-30/03%20-%20CSS%20Variables/index-GREY.html)  

重点：使用了`:root`这一CSS伪类，匹配文档的`html`元素，可以在文档的任何位置访问到其自定义属性。自定义属性，是一个名称以两个连字符（ - ）开头的属性，如 --bgcolor。 定义后可以使用 var() 引用的变量。例如自定义变量bgcolor并使用它：  
```
:root{
--bgcolor:#f45783;
}
/*use*/
.theme{
background-color:var(--bgcolor,#f00);//##f45783,#f00为回退值，不包含变量则用#f00替换
}
```
使用JavaScript从一组预定义值或用户提交的值，动态设置 --bgcolor 的值，我们可以为用户提供许多彩色背景的可能性：`document.documentElement.style.setProperty("css属性"，属性的对应值)`

实现流程：定义css全局变量，利用js修改css全部变量。修改时需要监听`input`上的`change`和`mousemove`事件，事件触发后，利用`document.documentElement.style.setProperty("css属性"，属性的对应值)`修改全局变量`--Variablename`的值。  
```
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {

      const suffix = this.dataset.sizing||'';//获取data-sizing的值,px

      //修改css变量的值

      document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

    };

    inputs.forEach(input => input.addEventListener('change', handleUpdate));

    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```



