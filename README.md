# jQuery Focus Element Beta

This is the first version, so I'll leave it automated.

Jquery Plugin to focus on desired elements leaving the remaining with a black background or the color you want.

#### As still in beta step 4 is extremely important

![](gif-github.gif)

# Installation

1 - download the file and place it where you want

2 - Preference use require JS

3 - create a div in your code with the name focus-effect

4 - in your css add:

```css
 .focus-effect{ 
    position: fixed;
    cursor: pointer;
    background-color: rgba(0,0,0,.4);
    height: 100%;
    width: 100%;
    z-index: 90;
    top: 0;
    opacity: 0;
    left: 0;
    visibility: hidden;
    transition: 0.2s;
}
.focus-effect.active{
    display: block !important;
    opacity: 1;
    visibility: visible;
}

.object.active{
    position: relative;
    z-index: 100;
}
```

5 - in your JS:
```javascript
    $(document).on('click', '.focus-effect.ativo', function() {
        $(document).focus('hideBackground');
    });
```


6 - There is 5 methods: 

6.1 - show: it does the click function on the selected object. ex:
```javascript
  $('.field.search').focus('show', '.block-search');
```
6.2 - showManual: You have to do the function you want and than you have it inside. ex:
```javascript
  $('input').on('click' function(){
    $(document).focus('showManual', '.block-search');
  }) 
```

6.3 - hide: do the click function and remove the background. ex:
```javascript
  $('.field.search').focus('hide', '.block-search');
```

6.4 - hideManual: For manual removal of the selected background and object. ex:
```javascript
  $('input').on('click' function(){
    $(document).focus('hideManual', '.block-search');
  })
```
  
6.5 - hideBackground: It removes only the background (as it is still in the beta it is necessary to manually do this function).


