# `Easter Eggs`

<p align="center">
    <a href="https://www.npmjs.com/package/@richi1717/easter-eggs">
      <img alt="npm" src="https://img.shields.io/npm/v/@richi1717/easter-eggs" />
    </a>
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@richi1717/easter-eggs" />
    <a href="https://github.com/richi1717/easter-eggs">
      <img src="https://img.shields.io/david/expressjs/express.svg?style=plastic" alt="Gitter">
    </a>
    <a href="https://github.com/richi1717/easter-eggs">
      <img src="https://img.shields.io/david/dev/expressjs/express.svg?style=plastic" alt="Gitter">
    </a>
</p>

### Installation

```javascript
$ yarn add @richi1717/easter-eggs
```

Then inside of your client entry point (E.G. `index.js`, `main.js`, `app.js`), add 

```
import '@richi1717/easter-eggs';
```

That's it!

Now whenever someone enters the code in your app it will (I believe) have an entertaining thing happen. 
Don't worry, I added cleanup so it will remove itself from your app once the animation is over.

### Available Codes

Currently the only available codes are the [konami code](https://contra.fandom.com/wiki/Konami_Code) and the 
[Sonic config code](https://www.gamespot.com/sonic-the-hedgehog/cheats/).

Konami: (`Start` would actually just be return/enter instead)  
<img src="https://vignette.wikia.nocookie.net/contra/images/4/49/Konami_Code_-_01.jpg/revision/latest/scale-to-width-down/300?cb=20171125105020" alt="Konami Code" />

When you enter the Konami code, velociryan will bounce in and out of the bottom of your app. 
A DELIGHT if I may say so myself. 

Sonic: `UP, c, DOWN, c, LEFT, c, RIGHT, c, a, Return`

When you enter the Sonic code, the original sonic screen will scroll up from the bottom.

### Enjoy

This was written to mainly enter into the world of open source and npm. 
I've always thought this would be a fun project to do even though it's "silly". 
People used to hold the 80s and 90s easter eggs in such high esteem and nostalgia 
and I wanted to give an easy way to honor that. In the future I'll add more codes
and a way to add your own images or gifs. My next addition is adding sonic since
that's the code I have remembered all these years from the original Sonic. I have
only tested these on Chrome, Firefox, and Safari. It obviously doesn't work on mobile
since you have to enter the codes.

### Demo

This is a taste of what you could see on your own site.

#### Konami Code
![](velociryan.gif)

#### Sonic
![](sonic.gif)
