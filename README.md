# Sasso

#### NPM

```shell
$ npm i -D sasso
```

#### main.js
```js
@import 'sasso'
```

### Usage
#### Flexbox Grid

Holy Grail Layout example

```sass
main
  @extend .row
  nav
    +grid(1, 8)
    @extend .col
  article
    +grid(5, 8)
  aside
    +grid(2, 8)
```

```scss
main {
  @extend .row;
  nav {
    @include grid(3, 12);
    @extend .col;
  }
  article {
    @include grid(6, 12);
  }
  aside {
    @include grid(3, 12);
  }
}
```    

#### Breakpoints & Media queries

```sass
//480px
+break(xs)

//768px
+break(sm)

//992px
+break(md)

//1200px
+break(lg)

//or use a custom size
+break(672px)
```

> Example

```sass
main
  @extend .row
  +break(sm)
    flex-flow: column
  nav
    +grid(1, 8)
    +break(xs)
      display: none
  article
    +grid(5, 8)
  aside
    +grid(2, 8)
```


#### Colors
From Material design color [palette](https://material.io/guidelines/style/color.html)

```sass

div
  background: color(indigo)
```
#### Custom buttons, links and panels
Use the same palette.

```sass
//Create a custom Button with white background and black color
button
  +button-color(white)

//The oposite case
button
  +button-color(black)

div
  a
    +link-color(lightblue)

div
  +panel(bluegray)
```

#### Navbars & footers
Custom horizontal lists. Use `justify-content` values as input. The default value is `flex-start`

```sass
header
  ul
    +navbar(center)

footer
  ul
    +footer(flex-start)    
```
#### Helpers
```sass
+size(100%, auto)
// width & height

+position(center, center)
// flex justify-content & align-items

+font(16px, 200)
// font-size & font-weight

+b(green)
// border: 2px solid green
// default color red
```
#### Resets
[Normalize.css](https://necolas.github.io/normalize.css/) is included
