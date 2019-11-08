# 'Penguin-Game'  

![Image anchors 'Sink a ship baby'](https://i.imgur.com/9RnsXFm.png)

```
Sink_Ships
├──background.png
├──ice.png
├──iceberg.js
├──index.html
├──penguin.js
├──Penguin.png
├──Pinguien.jpg
└──sketch.js
```


### Overview 
![Image anchors 'Northern light'](https://i.imgur.com/QxJsQio.png)

It's my variant of Google’s Dinosaur Game (T-Rex run!) with an icy twist – controlling the dinosaur (penguin) with a ML Speech Commands model!

### Brief:
![Image anchors 'Northern light'](https://i.imgur.com/QxJsQio.png)
* Deploy game online, using Github Pages, where the rest of the world can access it;
* Design logic for winning & visually displayed;
* Implement ML Speech Commands model;
* Include separate HTML / CSS / JavaScript files;
* Random obstacles timeframe;
* Use Javascript  for DOM manipulation;
* Use semantic markup for HTML and CSS (adhere to best practices).


### Technologies Used:
![Image anchors 'Northern light'](https://i.imgur.com/QxJsQio.png)
* CSS3 with animation;
* Git;
* GitHub;
* HTML5 with HTML5 audio;
* JavaScript (ES6);
* OOP.

##### Approach Taken
![Image anchors 'Northern light'](https://i.imgur.com/QxJsQio.png)

Crete objects and classes : 

```

class Iceberg {

  constructor() {
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 12;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

  }

}
```

### Functionality (Main functtiions)
![Image anchors 'Northern light'](https://i.imgur.com/QxJsQio.png)
`function preload()` 
Loads voice recognition and background 

`function mousePressed()`{
Creates new iceberg

`function setup()` 
 CreateCanvas(1400, 450);
 Penguin = new Penguin();

`function keyPressed()` {
 Make a penguing jump 


### Final Product:

![Image of a game desktop 'Sink a ship baby'](https://i.imgur.com/2OMN1b0.png)


### Future Enhancement
 There are several potential future features that can be implemented, such as:

* More game complexity variations;
* Ability to choose from a variety of themes/ aninmals/ locations- backgrounds/ styles;
* Authentication so users can keep track of their highest scores, compare it to other players globally.
* Mobile version (Responsive)
















