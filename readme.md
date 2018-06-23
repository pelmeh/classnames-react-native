# ClassNames for React Native

This library resolve styles merging in react-native 

Like package `classNames` for regular React


## Install

Step one:
> npm i classnames-react-native

Step two:
> Enjoy!

## API 

```
classnames([styleObject][, [styleObject, conditions]])
```


## Examples

Example #1

```js
import classNames from 'classnames-react-native'

const A = { padding: 10 }
const B = { backgroudColor: '#fff' }
const C = { margin: 10 }

classnames(A, [B, true], [C, false ])
// classNames(styleObject, [styleObject, conditions], [styleObject, conditions])


/*  classNames returns this styles:  */
{
  padding: 10, // from object A
  backgroudColor: "#fff", // from object B (conditions is positive)
  // object C is ignored (because conditions is negative)
}
```

Example #2

```js
import classNames from 'classnames-react-native'
import StyleGuide from '../../style/xxx'
import style from './style'

class Example extends Component {
  render() {
    const { wide = true, ghost = false } = this.props
    const style = classnames(
      StyleGuide.spacing.large,
      style.root,
      // or units style
      [style.wide, wide],
      // or union style
      [
        style.transparent, ghost,
        style.fill, true,
      ],
    )
    
    /*
     * classnames returns object, witch includes styles:
     * - spacing
     * - root
     * - wide
     * - fill
     */

    return (
        <View style={style}>
            ...
        </View>
    )
  }
}
```
