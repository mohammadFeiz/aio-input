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
  
## type="text"
#### basic example
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
#### other props in type="text"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | --- | input placeholder
justNumber | Boolean or Array | false | When justNumber is set to true, the input field will only accept numerical values.When justNumber is an array of strings, the input field will accept numerical values along with the specified characters in the array.
maxLength | number | undefined | When maxLength is set to a number, the input field will limit the number of characters the user can input to the specified maximum length.
filter | array of strings | undefined | When filter is set to an array of strings, the input field will disallow the specified characters from being entered by the user.
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
inputAttrs | object | undefined | Use the inputAttrs prop to set any additional attributes for the <input> element.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | undefined | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret when options are provided. Set caret to a ReactNode to render a custom caret element instead of the default caret when options are provided.


## type="number"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState(0);
  return (
      <AIOInput
          type='number'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="number"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | --- | input placeholder
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
inputAttrs | object | undefined | Use the inputAttrs prop to set any additional attributes for the <input> element.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | undefined | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
max | number | undefined | Use the min prop to set the minimum value allowed for the input.
min | number | undefined | Use the min prop to set the maximum value allowed for the input.
swip | number | 0 | Use the swipe prop to enable swiping functionality on a number input.The value of swipe determines the speed of value change when swiping the mouse up or down.A non-zero value will enable swiping, where the absolute value indicates the speed of change.
spin | boolean | true | Set spin to false to hide the spin buttons of the input.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret when options are provided. Set caret to a ReactNode to render a custom caret element instead of the default caret when options are provided.


## type="password"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState();
  return (
      <AIOInput
          type='password'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="password"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | --- | input placeholder
justNumber | Boolean or Array | false | When justNumber is set to true, the input field will only accept numerical values.When justNumber is an array of strings, the input field will accept numerical values along with the specified characters in the array.
maxLength | number | undefined | When maxLength is set to a number, the input field will limit the number of characters the user can input to the specified maximum length.
filter | array of strings | undefined | When filter is set to an array of strings, the input field will disallow the specified characters from being entered by the user.
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
inputAttrs | object | undefined | Use the inputAttrs prop to set any additional attributes for the <input> element.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.


## type="textarea"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState();
  return (
      <AIOInput
          type='textarea'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="text"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | --- | input placeholder
justNumber | Boolean or Array | false | When justNumber is set to true, the input field will only accept numerical values.When justNumber is an array of strings, the input field will accept numerical values along with the specified characters in the array.
maxLength | number | undefined | When maxLength is set to a number, the input field will limit the number of characters the user can input to the specified maximum length.
filter | array of strings | undefined | When filter is set to an array of strings, the input field will disallow the specified characters from being entered by the user.
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
inputAttrs | object | undefined | Use the inputAttrs prop to set any additional attributes for the <input> element.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | undefined | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret when options are provided. Set caret to a ReactNode to render a custom caret element instead of the default caret when options are provided.


## type="select"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState();
  return (
      <AIOInput
          type='select'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="select"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | --- | input placeholder
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | Required | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret when options are provided. Set caret to a ReactNode to render a custom caret element instead of the default caret when options are provided.
deSelect | boolean or function | false | Set deSelect to true to make the value of the component undefined when the user clicks on a selected option again. Set deSelect to a function to call the provided function when the user clicks on a selected option again.
text | string | undefined | Use the text prop to specify the text to be displayed as the selected option in the select input. When text is set, the provided text will be displayed instead of the text of the selected option.


## type="multiselect"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState([]);
  return (
      <AIOInput
          type='multiselect'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="multiselect"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | Required | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret when options are provided. Set caret to a ReactNode to render a custom caret element instead of the default caret when options are provided.
text | string | undefined | Use the text prop to specify the text to be displayed as the text of multiselect input.
maxLength | number | undefined | Use the maxLength prop to define the maximum number of selected options allowed in the multiselect input.
hideTags | boolean | false | Set hideTags to true to hide the selected options as tags under the multiselect input.
checkIcon | object or array | undefined | Use the checkIcon prop to apply custom styles to the checkbox icon in the multiselect options.also can be an array with two members: the first member represents the unchecked custom checkbox, and the second member represents the checked custom checkbox.


## type="tabs"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState([]);
  return (
      <AIOInput
          type='tabs'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="tabs"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | Required | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
deSelect | boolean or function | false | Set deSelect to true to make the value of the component undefined when the user clicks on a selected option again. Set deSelect to a function to call the provided function when the user clicks on a selected option again.


## type="radio"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState('3');
  return (
      <AIOInput
          type='radio'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="radio"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | Required | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
multiple | boolean | false | Set multiple to true to allow selecting multiple options in the radio input.
maxLength | number | undefined | Use the maxLength prop to define the maximum number of selected options allowed in the radio input.use if multiple prop is true.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
checkIcon | object or array | undefined | Use the checkIcon prop to apply custom styles to the checkbox icon in the multiselect options.also can be an array with two members: the first member represents the unchecked custom checkbox, and the second member represents the checked custom checkbox.

## type="buttons"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState('2');
  return (
      <AIOInput
          type='buttons'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="buttons"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
options | array | Required | Use the options prop to provide a list of options to be displayed in a dropdown list below the input element.
multiple | boolean | false | Set multiple to true to allow selecting multiple options in the radio input.
maxLength | number | undefined | Use the maxLength prop to define the maximum number of selected options allowed in the radio input.use if multiple prop is true.
option | object of functions | undefined | Specifies custom properties for rendering and controlling each option in the dropdown list.
deSelect | boolean or function | false | Set deSelect to true to make the value of the component undefined when the user clicks on a selected option again. Set deSelect to a function to call the provided function when the user clicks on a selected option again.


## type="checkbox"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState(false);
  return (
      <AIOInput
          type='checkbox'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="checkbox"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
text | string | undefined | Use the text prop to specify the text to be displayed as the text of checkbox input.
checkIcon | object or array | undefined | Use the checkIcon prop to apply custom styles to the checkbox icon in the multiselect options.also can be an array with two members: the first member represents the unchecked custom checkbox, and the second member represents the checked custom checkbox.


## type="date"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState();
  return (
      <AIOInput
          type='date'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="date"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
text | string | undefined | Use the text prop to specify the text to be displayed as the text of checkbox input.this text is pattern of date.
checkIcon | object or array | undefined | Use the checkIcon prop to apply custom styles to the checkbox icon in the multiselect options.also can be an array with two members: the first member represents the unchecked custom checkbox, and the second member represents the checked custom checkbox.

#### date (text props)
##### Specifies the pattern for displaying the date and time in the date input.
##### Usage
- Use the text prop to define the pattern for displaying the date and time in the date input.
- You can use placeholders such as {weekDay}, {day}, {month}, {monthString}, {year}, and {hour} to represent the components of the date and time.
Available placeholders:
 - {weekDay}: Full name of the day of the week (e.g., Monday, Tuesday).
 - {day}: Day of the month (e.g., 01, 02, ..., 31).
 - {month}: Month of the year (e.g., 01, 02, ..., 12).
 - {monthString}: Full name of the month (e.g., January, February).
 - {year}: Year (e.g., 2022, 2023).
 - {hour}: Hour of the day (e.g., 00, 01, ..., 23).

``` javascript
<AIOInput
    type='date'
    value={value}
    onChange={(newValue)=>setValue(newValue)}
    
    text='{weekDay} {day} {monthString} {year}'
/>
```

