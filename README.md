# aio-input
#### generate all inputs in react.
### types
- text
- number
- password
- color
- textarea
- select
- multiselect
- date
- time
- radio
- checkbox
- tabs
- buttons
- table
- form
- tree
- acardion
- range
- list
- image
- file
  
### basic example of type="text"

``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState();
  return (
      <AIOInput
          type='text'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
