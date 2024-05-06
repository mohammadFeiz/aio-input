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
  
# type="text"
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


# type="number"
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


# type="password"
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


# type="textarea"
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


# type="select"
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
placeholder | string | undefined | input placeholder
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


# type="multiselect"
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


# type="tabs"
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


# type="radio"
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

# type="buttons"
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


# type="checkbox"
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


# type="date"
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
placeholder | string | undefined | input placeholder
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
text | string | undefined | Specifies the pattern for displaying the date and time in the date input.
unit | 'year' or 'month' or 'day' or 'hour' | 'day' | Use the unit prop to specify the unit for adjusting the date input. Available options are 'year', 'month', 'day', and 'hour'.The default unit is 'day'.
jalali | boolean | false | Set jalali to true to use the Jalali (Persian) calendar for the date input. When jalali is set to true, the date input will display and accept dates according to the Persian calendar.
theme | array of strings | undefined | An array containing two color values. styling calendar by this colors.
size | number | 180 | Set the size of the calendar.
deSelect | boolean or function | false | If set true, onChange will be called with undefined when clearing the value. If set as a function, this function will be called after clicking on the clear button.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret. Set caret to a ReactNode to render a custom caret element instead of the default caret.
changeClose | boolean | false | If set to true, the calendar popover will close after selecting a date.
dateAttrs | function returns attrs object | undefined | A function to customize the attributes of each date element in the calendar. It receives an object with properties dateArray, isToday, isDisabled, isActive, and isMatch and should return an object with styles to apply to the date element.

## date (text props)
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
![alt text](/images/date-text.gif)

## date (dateAttrs props)
##### The dateAttrs prop allows you to customize the attributes of each date element in the calendar. It is a function that receives an object with properties dateArray, isToday, isActive, and isMatch.
##### also you can disabled each date element for prevent select by user
Here's what each property represents:
- `dateArray` : An array containing the year, month, and day of the date.
- `isToday` : A boolean indicating whether the date is today's date.
- `isActive` : A boolean indicating whether the date is currently selected or active.
- `isMatch` : A boolean indicating whether the date matches any predefined criteria.

The dateAttrs function should return an object with styles to apply to the date element. Depending on your use case, you can customize the styles of each date element based on these properties. For example, you can change the background color of today's date or disable specific dates.

Here's an example of how you can use the dateAttrs prop:

``` javascript
<AIOInput
    type='date'
    value={value}
    onChange={(newValue) => setValue(newValue)}
    dateAttrs={({ dateArray, isToday, isDisabled, isActive, isMatch }) => {
        let styles = {};

        if (isToday) {
            styles.background = 'orange';
        }

        if (isDisabled) {
            styles.opacity = 0.5;
        }

        return { style: styles };
    }}
/>.
```
#### isMatch Function in dateAttrs Prop
The isMatch function within the dateAttrs prop allows you to define custom logic to match specific date elements in the calendar based on various conditions. It takes an array of strings representing date comparison conditions and returns true if any of the conditions are met for the current date element.
``` javascript
dateAttrs={({ isMatch }) => {
    if (isMatch(['<,2022/02/03'])) {
        return { color: 'red' };
    }
    if (isMatch(['<>,2022/03/03,2023/04/05'])) {
        return { color: 'orange' };
    }
}}
```
#### Date Comparison Conditions
Each string in the array represents a date comparison condition in the format operator,date1[,date2]:

- operator: The comparison operator. Available operators include:
- '<' : Less than
- '>' : Greater than
- '<=' : Less than or equal to
- '>=' : Greater than or equal to
- '=' : Equal to
- '!=' : Not equal to
- '<>' : Between (inclusive)
- '!<>' : Not between (inclusive)
- '<=>' : Between or equal to (inclusive)
- '!<=>' : Not between or equal to (inclusive)
- date1: The reference date for comparison in the format YYYY/MM/DD.
- date2 (optional): The second reference date for comparison in the format YYYY/MM/DD. Required for <>, !<>, and <=> operators.

``` javascript
<AIOInput
    type='date'
    value={value}
    onChange={(newValue) => setValue(newValue)}
    dateAttrs={({ isMatch }) => {
        let attrs = {}
        if (isMatch(['<,2022/02/03'])) {
            attrs.style = { color: 'red' };
        }
        if (isMatch(['<>,2022/03/03,2023/04/05'])) {
            attrs.style = { color: 'orange' };
        }
        if(isMatch([>,2024/4/5])){
          attrs.disabled = true
        }
        return attrs
    }}
/>
```
#### In this example:

- Dates before February 3, 2022, will have the color red.
- Dates between March 3, 2022, and April 5, 2023, will have the color orange.
- Dates after 2024/4/5 will be disabled


# type="time"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState({year:2022,month:4,day:12});
  return (
      <AIOInput
          type='time'
          value={value}
          unit={{year:true,month:true,day:true}}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="time"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | undefined | input placeholder
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
text | string | undefined | Specifies the pattern for displaying the date and time in the time input.
unit | object contain 'year','month','day','hour','minute','second' | {year:true,month:true,day:true} | Use the unit prop to specify the unit for adjusting the time input. Available options are 'year', 'month', 'day', 'hour', 'minute' and 'second'.
jalali | boolean | false | Set jalali to true to use the Jalali (Persian) calendar for the time input. When jalali is set to true, the time input will display and accept dates according to the Persian calendar.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret. Set caret to a ReactNode to render a custom caret element instead of the default caret.

## time (unit prop)
``` javascript
<AIOInput
    type='time'
    value={value}
    onChange={(newValue)=>setValue(newValue)}
    
    unit={{hour:true,minute:true,second:true}}
/>
```
![alt text](/images/time-unit-hour-minute-second.gif)

``` javascript
<AIOInput
    type='time'
    value={value}
    onChange={(newValue)=>setValue(newValue)}
    
    unit={{month:true,day:true}}
/>
```
![alt text](/images/time-unit-month-day.gif)

# type="image"
#### basic example
``` javascript
import AIOInput from "aio-input";
function Example(){
  let [value,setValue] = useState('https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg');
  return (
      <AIOInput
          type='image'
          value={value}
          onChange={(newValue)=>setValue(newValue)}
      />
  )
}
```
#### other props in type="image"
Props | Type | Default | Description
----- | ---- | ------- | -----------
disabled | boolean | false | make input disabled
placeholder | string | undefined | input placeholder
attrs | object | undefined | Use the attrs prop to set any additional attributes for the parent <div> element of input.
style | object | undefined | Use the style prop to apply custom CSS styles to the input element.
className | string | undefined | custom clasName
after | html/jsx | undefined | Use the after prop to render additional content after the input element within your component.
before | html/jsx | undefined | Use the before prop to render additional content before the input element within your component.
subtext | string | undefined | Use the subtext prop to display additional text below the input element.
loading | boolean | false | Set loading to true to disable the input and display a spinning loader icon after the input.
deSelect | boolean or function | false | If set true, onChange will be called with undefined when clearing the value. If set as a function, this function will be called after clicking on the clear button.
preview | boolean | false | If set to true, a preview button will be shown on the image. Clicking it will open the image in a popup window.
width | number or string | undefined | The width of the image input.
height | number or string | undefined | The height of the image input.


