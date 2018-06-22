Example #1
```js
import classnames from 'classnames-react-native'

const A = { padding: 10 }
const B = { backgroudColor: '#fff' }
const C = { margin: 10 }

classnames(A, [B, true], [C, false ])


/*  classnames returns this styles:  */
{
  padding: 10, // from object A
  backgroudColor: "#fff", // from object B (conditions is positive)
  // object C is ignored (because conditions is negative)
}
```

Example #2

```js
import classnames from 'classnames-react-native'
import StyleGuide from '../../style/xxx'
import style from './style'

class Example extends Component {
    ...
    render() {
        const { wide = true, ghost = false } = this.props
        const style = classnames(
            StyleGuide.spacing.large,
            style.root,
            [style.wide, wide],
            [style.transparent, ghost],
        )
        
        /*
         * classnames returns object, witch includes styles:
         * spacing
         * root
         * wide
         */
    
        return (
            <View style={style}>
                ...
            </View>
        )
    }
}
```