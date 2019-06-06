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
