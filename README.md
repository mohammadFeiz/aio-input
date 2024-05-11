
<details>

<summary>    
  
# type="date"  

</summary>

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
text | string | undefined | Specifies the text for displaying in the date input.
pattern | string | undefined | Specifies the pattern for displaying the date and time in the date input.
unit | 'year' or 'month' or 'day' or 'hour' | 'day' | Use the unit prop to specify the unit for adjusting the date input. Available options are 'year', 'month', 'day', and 'hour'.The default unit is 'day'.
jalali | boolean | false | Set jalali to true to use the Jalali (Persian) calendar for the date input. When jalali is set to true, the date input will display and accept dates according to the Persian calendar.
theme | array of strings | undefined | An array containing two color values. styling calendar by this colors.
size | number | 180 | Set the size of the calendar.
deSelect | boolean or function | false | If set true, onChange will be called with undefined when clearing the value. If set as a function, this function will be called after clicking on the clear button.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret. Set caret to a ReactNode to render a custom caret element instead of the default caret.
dateAttrs | function returns attrs object | undefined | A function to customize the attributes of each date element in the calendar. It receives an object with properties dateArray, isToday, isDisabled, isActive, and isMatch and should return an object with styles to apply to the date element.
option | object | {} | Configure calendar popover. 

### pattern prop

##### Specifies the pattern for displaying the date and time in the date input.

##### Usage

- Use the pattern prop to define the pattern for displaying the date and time in the date input.
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
    
    pattern='{weekDay} {day} {monthString} {year}'
/>
```

![alt text](/images/date-pattern.png)

### jalali prop

make jalali calendar.

``` javascript
jalali={true}
```
![alt text](/images/date-jalali.png)

### unit prop

- month
  ``` javascript
  unit='month'
  ```
  ![alt text](/images/date-unit-month.png)
- day
  ``` javascript
  unit='day'
  ```
  ![alt text](/images/date-unit-day.png)
- hour
  ``` javascript
  unit='hour'
  ```
  ![alt text](/images/date-unit-hour.png)

### theme prop

set array of 2 colors to design calendar.

``` javascript
theme={['lightblue','#666']}
```
![alt text](/images/date-theme.png)

### size prop

set a number to set size of calendar.

``` javascript
size={120}
```
![alt text](/images/date-size.png)


### dateAttrs prop

##### The dateAttrs prop allows you to customize the attributes of each date element in the calendar. It is a function that receives an object with properties dateArray, isToday, isActive, and isMatch.

##### also you can disabled each date element for prevent select by user

Here's what each property represents:
- `dateArray` : An array containing the year, month, day and hour of the date.
- `isToday` : A boolean indicating whether the date is today's date.
- `isActive` : A boolean indicating whether the date is currently selected or active.
- `isMatch` : A boolean indicating whether the date matches any predefined criteria.

The dateAttrs function should return an object with styles to apply to the date element. Depending on your use case, you can customize the styles of each date element based on these properties. For example, you can change the background color of today's date or disable specific dates.

Here's an example of how you can use the dateAttrs prop:

``` javascript
dateAttrs={({ dateArray, isToday, isActive, isMatch }) => {
    let styles = {};
    if (isToday) {
        styles.background = 'orange';
    }
    return { style: styles };
}}
```
in this example today element will get background orange

``` javascript
dateAttrs={({ dateArray, isToday, isActive, isMatch }) => {
    if (isActive) {
        return {
          className:'active-date'
        }
    }
}}
```
in this example active date element will get className:'active-date'

### isMatch function parameter in dateAttrs Prop function.

The isMatch function within the dateAttrs prop allows you to define custom logic to match specific date elements in the calendar based on various conditions. It takes an array of strings representing date comparison conditions and returns true if any of the conditions are met for the current date element.

``` javascript
dateAttrs={({ isMatch }) => {
    if (isMatch(['<,2022/02/03'])) {
        return { color: 'red' };
    }
    if (isMatch(['<>,2022/03/03,2023/04/05'])) {
        return { disabled: true };
    }
}}
```

### Date Comparison Conditions

Each string in the array represents a date comparison condition in the format 'operator,date1,date2':

##### Operators

The comparison operator

Operator | Example | Example Description
-------- | ----------- | -------
'<' | isMatch(['<,2024/2/3']) | target is all dates before 2024/2/3
'<=' | isMatch(['<,2024/2/3']) | target is all dates before or equal 2024/2/3
'>' | isMatch(['>,2024/2/3']) | target is all dates after 2024/2/3
'>=' | isMatch(['>=,2024/2/3']) | target is all dates after or equal 2024/2/3
'=' | isMatch(['=,2024/2/3']) | target is all dates equal 2024/2/3
'=' | isMatch(['=,2024/2/3,2024/2/4']) | target is all dates equal 2024/2/3 or 2024/2/4
'!=' | isMatch(['!=,2024/2/3']) | target is all dates not equal 2024/2/3
'!=' | isMatch(['!=,2024/2/3,2024/2/4']) | target is all dates that is not equal 2024/2/3 or 2024/2/4
'<>' | isMatch(['<,2024/2/3,2025/1/1']) | target is all dates between 2024/2/3 and 2025/1/1
'<=>' | isMatch(['<,2024/2/3,2025/1/1']) | target is all dates that is between or equal 2024/2/3 and 2025/1/1
'!<>' | isMatch(['<,2024/2/3,2025/1/1']) | target is all dates that is not between 2024/2/3 and 2025/1/1
'!<=>' | isMatch(['<,2024/2/3,2025/1/1']) | target is all dates that is not between or equal 2024/2/3 and 2025/1/1
'w' | isMatch(['w,5']) | target is all days that is 5th day of week. index from 0
'w' | isMatch(['w,5,6']) | target is all days that is 5th or 6th day of week. index from 0
'!w' | isMatch(['!w,5']) | target is all days that is not 5th day of week. index from 0
'!w' | isMatch(['!w,5,6']) | target is all days that is not 5th or 6th day of week. index from 0

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

##### In this example:

- Dates before February 3, 2022, will have the color red.
- Dates between March 3, 2022, and April 5, 2023, will have the color orange.
- Dates after 2024/4/5 will be disabled

### option prop

this will cause to close popover after select date.

``` javascript
option={{
  close:true
}}
```

</details>

<details>
<summary>    
  
# type="time"  

</summary> 

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
unit | string contain 'year','month','day','hour','minute','second' | 'year,month,day' | Use the unit prop to specify the unit for adjusting the time input. Available options are `year`, `month`, `day`, `hour`, `minute` and `second`.
jalali | boolean | false | Set jalali to true to use the Jalali (Persian) calendar for the time input. When jalali is set to true, the time input will display and accept dates according to the Persian calendar.
caret | boolean or jsx/html | true | Set caret to false to hide the default caret. Set caret to a ReactNode to render a custom caret element instead of the default caret.

### unit prop

``` javascript
<AIOInput
    type='time'
    value={value}
    onChange={(newValue)=>setValue(newValue)}
    
    unit='hour,minute,second'
/>
```

![alt text](/images/time-unit-hour-minute-second.gif)

``` javascript
<AIOInput
    type='time'
    value={value}
    onChange={(newValue)=>setValue(newValue)}
    unit='year,month,day'
/>
```

![alt text](/images/time-unit-year-month-day.gif)

</details>

<details>
<summary>    
  
# type="image"  

</summary> 

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

</details>

<details>
  <summary>
    
  # type="spinner"
  
  </summary> 
  
  this input type is a round range selector. its configuration is same as slider input type.
  
  ### spinner props:
  
  Props | Type | Default | Description
  ----- | ---- | ------- | -----------
  value | number | undefined | The current value of the range.
  start	| number | 0 | The start value of the range.
  end	| number | 100 | The end value of the range.
  step | number |	1	| The step size for change the range value.
  onChange | function	| undefined |	A callback function to handle value changes.
  labels | array of { step: number,list:array of numbers,dynamic:boolean,setting:function } | undefined | Configuration for displaying labels on the spinner.
  handle | function	| undefined | A function to customize the appearance of the handle. get value and details object as parameter and returns an object contain handle configuration.
  point | function	| undefined | A function to customize the appearance of the range point. get value and details object as parameter and returns an object contain point configuration.
  round | number | 1 | The extent of the circular slider in terms of a fraction of a full circle (0 to 1).
  reverse |	boolean |	false |	Whether to reverse the direction of the slider (clockwise vs. counterclockwise).
  disabled | boolean or array of numbers | false | Specifies whether the spinner is disabled or an array of values to disable partially.
  rotate | number(0 to 360) |	0	| Rotate all elements of the spinner (including scales, labels, point and handle) by the specified degree.
  ranges | function | ()=>[[end, `1 100 #ddd`]] | A function that get spinner value as parameter and returns An array of ranges where each range is defined by a value and a configuration string as array.
  circles | array of strings | [] | An array of circles by a configuration string as array.
  
  ### handle prop
  The handle function takes the current value of the spinner and details object as parameter and returns an object with properties to customize the appearance of the handle:
  - `size` (number): The size of the handle as percentage of spinner size prop. default is 90.
  - `thickness` (number): The thickness of the handle as percentage of spinner size prop. default is 10.
  - `offset` (number): The distance of the handle from the center of the slider as percentage of spinner size prop. default is 0.
  - `color` (string): The css color of the handle. default is '#000'.
  - `attrs` (object): the custom attributes of handle. default is {}
  ----------------------------------------------------------------------
  ### point prop
  The point prop is a function that takes the current value of the slider as a parameter and returns an object with properties to customize the appearance and behavior of the slider's thumb (point):
  - `offset` (number): The distance of the point from the center of the spinner. default value is 100
  - `attrs` (object): the custom attributes of point. default is {}
  - `html` (jsx/html): The HTML content of the point. default is spinner value number.
  ----------------------------------------------------------------------
  ### labels prop
  The labels prop is an array object with the following properties:
  
  - `step` (number): The step size for displaying labels on the spinner.
  - `list` (array of numbers): The exact values for displaying labels on the spinner.
  - `dynamic` (boolean): Determines whether labels should be updated in each render. Setting dynamic to true may cause performance issues, especially with a large number of labels. **default is false**.
  - `zIndex` (number): z-index css property of labels set. **default is 0**.
  - `setting` (function): setting property is a function that takes the current value of the slider and details object as parameter and returns an object with properties to customize the appearance and content of labels. returned object is contain:
  
      Property | Type | Default | Description
      -------- | ---- | ------- | -----------
      offset | number | 60 | The distance of the label from the center of the spinner by percentage related to size of spinner. (0 is on center and 50 is on edge of spinner).
      html | JSX/HTML | '' | The HTML content of the label. It can be a React element or a string. If it's a React element, it will be rendered as is. If it's a string, it will be displayed as plain text.
      fixAngle | boolean | false | fix label content angle.
  ---------------------------------------------------------------------
  ### ranges prop
  Each range in the ranges prop is defined by an array containing two elements:
  
  1- Value (number): The value at which the range begins.
  2- Configuration string (string): A string containing four parameters separated by a space:
  - `Thickness`: The thickness of the range indicator.
  - `Distance` from edge: The distance of the range indicator from the edge of the slider.
  - `Color`: The color of the range indicator.
  - `Round line cap`: A boolean value (0 or 1) indicating whether the line cap of the range should be rounded.
  
  for example `[100,'3 100 #555 1']` means :
  range line to 100 value by Thickness : 3%, Distance from center : 100%, Color : #555 and Round Cap : true
  ---------------------------------------------------------------------------------
  ### basic example
  ``` javascript
  import AIOInput from "aio-input";
  function MyComponent() {
      const [value, setValue] = useState(50);
      return (
        <AIOInput
          type='spinner'
          value={value}
          start={0}
          end={100}
          size={200}
          onChange={setValue}
          labels={[
              {
                  step:10,
                  setting:(value)=>{
                      let style = value === 50?{color:'orange'}:{}
                      let content = value === 50 ? <Icon path={mdiAccount} size={0.6}/> : value; 
                      return {
                          html: <div style={style}>{content}</div>,
                          color:'#333',
                          offset:60,
                          fixAngle:true
                      };
                  }
              },
              {
                  step:2,
                  setting:(value)=>{
                      let offset,height,width,background;
                      if(value % 10 === 0){
                          offset = 42;
                          height = 5;
                          width = 5;
                          background = '#333'
                      }
                      else {
                          offset = 43;
                          height = 2;
                          width = 2;
                          background = '#888';
                      }
                      let style = {height,width,background}
                      return {
                          html:<div style={style}></div>,
                          offset
                      }
                  }
              }
          ]}
          point={()=>{
              return {
                  offset:124,
                  attrs:{
                      style:{
                          color:'dodgerblue',
                          background:'#f2f2f2'
                      }
                  }
              }
          }}
          handle={(value) => {
              return {
                  thickness: 12,
                  size: 80,
                  offset: 5,
                  color: '#333',
              }
          }}
          disabled={[0, 25, 75]} // Array of values to disable partially
          circles={[
              '3 8 #333',
              '1 92 #ccc'
          ]}
          ranges={()=>[
            [20, '5 80 #ff0000'], // Range from 0 to 20
            [70, '5 80 orange'], // Range from 20 to 100
            [100, '5 80 green'] // Range from 20 to 100
          ]}
      />
    );
  }
  ```
![alt text](/images/spinner1.gif)

</details>


