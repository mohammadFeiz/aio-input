function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as ReactDOMServer from 'react-dom/server';
import AIOPopup from 'aio-popup';
import $ from 'jquery';
export function getMainProperties(props, getProp, types) {
  let p = getProp;
  let {
    type,
    rtl
  } = props;
  let value = p('value');
  let loading = p('loading');
  let disabled = p('disabled');
  let className = p('className');
  let style = p('style');
  let onClick = p('onClick', undefined, true);
  let attrs = {
    ...p('attrs', {})
  };
  let justify = p('justify');
  if (className) {
    attrs.className = className;
  }
  if (style) {
    attrs.style = style;
  }
  if (onClick) {
    attrs.onClick = onClick;
  }
  let properties = {
    props: {
      ...props
    },
    value,
    type,
    rtl,
    loading,
    disabled: loading || disabled,
    attrs,
    justify,
    onChange: p('onChange', undefined, true),
    text: p('text'),
    before: p('before'),
    after: p('after'),
    subtext: p('subtext'),
    label: p('label'),
    className: p('className'),
    style: p('style')
  };
  if (types.hasOption) {
    properties = {
      ...properties,
      options: p('options'),
      optionText: p('optionText'),
      optionValue: p('optionValue'),
      optionAttrs: p('optionAttrs'),
      optionDisabled: p('optionDisabled'),
      optionClassName: p('optionClassName'),
      optionStyle: p('optionStyle'),
      optionShow: p('optionShow'),
      optionSubtext: p('optionSubtext'),
      optionCheckIcon: p('optionCheckIcon'),
      optionBefore: p('optionBefore'),
      optionAfter: p('optionAfter')
    };
  }
  if (types.isDropdown) {
    properties = {
      ...properties,
      caret: p('caret'),
      popover: p('popover')
    };
    if (types.hasOption) {
      properties = {
        ...properties,
        optionClose: p('optionClose'),
        onSwap: p('onSwap')
      };
    }
  }
  if (types.isInput) {
    properties = {
      ...properties,
      inputAttrs: p('inputAttrs'),
      blurChange: p('blurChange')
    };
  }
  if (types.hasPlaceholder) {
    properties = {
      ...properties,
      placeholder: p('placeholder')
    };
  }
  if (types.hasMultiple) {
    properties = {
      ...properties,
      multiple: p('multiple')
    };
  }
  if (types.hasSearch) {
    properties = {
      ...properties,
      search: p('search')
    };
  }
  if (types.hasKeyboard) {
    properties = {
      ...properties,
      maxLength: p('maxLength'),
      filter: p('filter'),
      justNumber: p('justNumber')
    };
  }
  if (type === 'number') {
    properties = {
      ...properties,
      swip: p('swip'),
      spin: p('spin', true)
    };
  } else if (type === 'password') {
    properties = {
      ...properties,
      visible: p('visible')
    };
  } else if (type === 'checkbox') {
    properties = {
      ...properties,
      checkIcon: p('checkIcon'),
      checked: !!value
    };
  } else if (type === 'image') {
    properties = {
      ...properties,
      preview: p('preview'),
      width: p('width'),
      height: p('height')
    };
  } else if (type === 'map') {
    properties = {
      ...properties,
      onChangeAddress: p('onChangeAddress'),
      popup: p('popup'),
      mapConfig: p('mapConfig', {})
    };
  } else if (type === 'multiselect') {
    properties = {
      ...properties,
      optionTagAttrs: p('optionTagAttrs'),
      optionTagBefore: p('optionTagBefore'),
      optionTagAfter: p('optionTagAfter'),
      hideTags: p('hideTags')
    };
  } else if (type === 'datepicker') {
    properties = {
      ...properties,
      calendarType: p('calendarType', 'gregorian'),
      unit: p('unit', 'day'),
      theme: p('theme', []),
      size: p('size', 180),
      startYear: p('startYear', '-10'),
      endYear: p('endYear', '+10'),
      pattern: p('pattern'),
      dateDisabled: p('dateDisabled'),
      dateAttrs: p('dateAttrs'),
      remove: p('remove'),
      close: p('close')
    };
  } else if (type === 'time') {
    properties = {
      ...properties,
      calendarType: p('calendarType', 'gregorian')
    };
  } else if (type === 'list') {
    properties = {
      ...properties,
      size: p('size', 48),
      width: p('width', 200),
      decay: p('decay', 8),
      stop: p('stop', 3),
      count: p('count', 3),
      move: p('move'),
      editable: p('editable', true)
    };
  } else if (type === 'slider') {
    properties = {
      ...properties,
      showValue: p('showValue'),
      lineStyle: p('lineStyle'),
      fillStyle: p('fillStyle'),
      pointStyle: p('pointStyle'),
      valueStyle: p('valueStyle'),
      labelStyle: p('labelStyle'),
      scaleStyle: p('scaleStyle'),
      getPointHTML: p('getPointHTML'),
      getScaleHTML: p('getScaleHTML'),
      direction: p('direction', rtl ? 'left' : 'right'),
      scaleStep: p('scaleStep'),
      labelStep: p('labelStep'),
      editLabel: p('editLabel'),
      start: p('start'),
      step: p('step'),
      end: p('end'),
      min: p('min'),
      max: p('max'),
      labelRotate: p('labelRotate')
    };
  } else if (type === 'form') {
    properties = {
      ...properties,
      onClose: p('onClose'),
      onBack: p('onBack'),
      headerAttrs: p('headerAttrs', {}),
      subtitle: p('subtitle'),
      header: p('header'),
      getErrors: p('getErrors'),
      footer: p('footer'),
      onSubmit: p('onSubmit'),
      footerAttrs: p('footerAttrs', {}),
      closeText: p('closeText', 'Close'),
      resetText: p('resetText', 'Reset'),
      submitText: p('submitText', 'Submit'),
      reset: p('reset'),
      inputs: p('inputs'),
      inputClassName: p('inputClassName'),
      inputStyle: p('inputStyle', {}),
      labelAttrs: p('labelAttrs'),
      lang: p('lang', 'en'),
      updateInput: p('updateInput', o => o)
    };
  } else if (type === 'table') {
    properties = {
      ...properties,
      columns: p('columns', []),
      getValue: p('getValue', {}),
      rowAttrs: p('rowAttrs'),
      toolbar: p('toolbar'),
      excel: p('excel'),
      toolbarAttrs: p('toolbarAttrs'),
      paging: p('paging'),
      rowGap: p('rowGap'),
      columnGap: p('columnGap'),
      onAdd: p('onAdd'),
      onRemove: p('onRemove'),
      onSearch: p('onSearch'),
      onSwap: p('onSwap'),
      onChangeSort: p('onChangeSort'),
      headerAttrs: p('headerAttrs'),
      rowTemplate: p('rowTemplate'),
      rowsTemplate: p('rowsTemplate'),
      rowAfter: p('rowAfter'),
      rowBefore: p('rowBefore')
    };
  }
  //if(type === 'datepicker'){debugger}
  return {
    ...properties
  };
}
export function Search(items, searchValue, getValue = o => o) {
  if (!searchValue) {
    return items;
  }
  function isMatch(keys, value) {
    for (let i = 0; i < keys.length; i++) {
      if (value.indexOf(keys[i]) === -1) {
        return false;
      }
    }
    return true;
  }
  let keys = searchValue.split(' ');
  return items.filter((o, i) => isMatch(keys, getValue(o, i)));
}
export function ExportToExcel(rows, config = {}) {
  let {
    promptText = 'Inter Excel File Name'
  } = config;
  let o = {
    fixPersianAndArabicNumbers(str) {
      if (typeof str !== 'string') {
        return str;
      }
      let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
      return str;
    },
    getJSON(rows) {
      let result = [];
      for (let i = 0; i < rows.length; i++) {
        let json = rows[i],
          fixedJson = {};
        for (let prop in json) {
          fixedJson[prop] = this.fixPersianAndArabicNumbers(json[prop]);
        }
        result.push(fixedJson);
      }
      return result;
    },
    export() {
      let name = window.prompt(promptText);
      if (!name || name === null || !name.length) {
        return;
      }
      ;
      var data = this.getJSON(rows);
      var arrData = typeof data != "object" ? JSON.parse(data) : data;
      var CSV = "";
      CSV += '\r\n\n';
      if (true) {
        let row = "";
        for (let index in arrData[0]) {
          row += index + ",";
        }
        row = row.slice(0, -1);
        CSV += row + "\r\n";
      }
      for (var i = 0; i < arrData.length; i++) {
        let row = "";
        for (let index in arrData[i]) {
          row += '"' + arrData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + "\r\n";
      }
      if (CSV === "") {
        alert("Invalid data");
        return;
      }
      var fileName = name.replace(/ /g, "_");
      var universalBOM = "\uFEFF";
      var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(universalBOM + CSV);
      var link = document.createElement("a");
      link.href = uri;
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return o.export();
}
export async function DownloadUrl(url, name) {
  fetch(url, {
    mode: 'no-cors'
  }).then(resp => resp.blob()).then(blob => {
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }).catch(() => alert('oh no!'));
}
export function JSXToHTML(html) {
  return ReactDOMServer.renderToStaticMarkup(html);
}
export function getDistance(p1, p2) {
  let {
    lat: lat1,
    lng: lon1
  } = p1;
  let {
    lat: lat2,
    lng: lon2
  } = p2;
  let rad = Math.PI / 180;
  let radius = 6371; //earth radius in kilometers
  return Math.acos(Math.sin(lat2 * rad) * Math.sin(lat1 * rad) + Math.cos(lat2 * rad) * Math.cos(lat1 * rad) * Math.cos(lon2 * rad - lon1 * rad)) * radius; //result in Kilometers
}

export class AIOInputValidate {
  constructor(props) {
    _defineProperty(this, "varTypes", {
      'object': true,
      'array': true,
      'string': true,
      'number': true,
      'boolean': true,
      'undefined': true,
      'any': true,
      'function': true,
      'null': true
    });
    _defineProperty(this, "titr", 'aio-input error =>');
    _defineProperty(this, "getTypes", () => {
      return ['text', 'number', 'textarea', 'color', 'password', 'file', 'image', 'select', 'multiselect', 'table', 'form', 'time', 'datepicker', 'list', 'checkbox', 'radio', 'tabs', 'slider', 'button', 'map'];
    });
    _defineProperty(this, "getType", v => {
      if (Array.isArray(v)) {
        return 'array';
      }
      return v === null ? 'undefined' : typeof v;
    });
    _defineProperty(this, "checkTypes", (value, types) => {
      if (types === 'any') {
        return;
      }
      types = types.split('|');
      let res;
      let passed = false;
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let error = this.checkType(value, type, types);
        if (error) {
          res = error;
        } else {
          passed = true;
        }
      }
      if (!passed) {
        return res;
      }
    });
    _defineProperty(this, "checkType", (value, type, types) => {
      let res = false,
        valueType = this.getType(value);
      if (this.varTypes[type]) {
        if (valueType === type) {
          res = true;
        }
      } else {
        let typeString;
        try {
          typeString = JSON.parse(type);
        } catch {
          typeString = type;
        }
        if (value === typeString) {
          res = true;
        }
      }
      if (res === false) {
        let res;
        try {
          res = JSON.stringify(value);
        } catch {
          res = value;
        }
        return `should be ${types.join('|')} but is ${res}`;
      }
    });
    _defineProperty(this, "getError", () => {
      let types = this.getTypes();
      let {
        type
      } = this.props;
      if (types.indexOf(type) === -1) {
        return `${this.titr} ${type} is invalid type`;
      }
      let error = this.getMessage(type);
      if (error) {
        return error;
      }
    });
    _defineProperty(this, "getValidateObject", type => {
      let options = 'array|undefined',
        optionText = 'any',
        optionValue = 'any',
        optionBefore = 'any',
        optionAfter = 'any',
        optionSubtext = 'any',
        optionDisabled = 'any',
        optionAttrs = 'any',
        optionCheckIcon = 'any',
        optionClassName = 'any',
        optionStyle = 'any';
      let style = 'function|object|undefined',
        disabled = 'boolean|undefined',
        subtext = 'number|string|function';
      let dic = {
        text: {
          type: '"text"',
          value: 'string|number|undefined',
          inputAttrs: "object|undefined",
          placeholder: 'any',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle,
          justNumber: "boolean|array|undefined",
          maxLength: 'number|undefined',
          filter: 'array',
          before: 'any',
          after: 'any',
          subtext,
          caret: 'any',
          popover: 'object|undefined',
          disabled,
          loading: 'any'
        },
        textarea: {
          type: '"textarea"',
          value: 'string|number|undefined',
          maxLength: 'number|undefined',
          popover: 'object|undefined',
          filter: 'array',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle,
          inputAttrs: "object|undefined",
          disabled,
          placeholder: 'any',
          caret: 'any',
          before: 'any',
          after: 'any',
          subtext,
          loading: 'any'
        },
        number: {
          type: '"number"',
          swip: 'boolean|undefined',
          popover: 'object|undefined',
          placeholder: 'any',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle,
          inputAttrs: "object|undefined",
          value: '""|number|undefined',
          caret: 'any',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any'
        },
        radio: {
          type: '"radio"',
          value: 'any',
          multiple: 'boolean|undefined',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle
        },
        tabs: {
          type: '"tabs"',
          value: 'any',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle
        },
        multiselect: {
          type: '"multiselect"',
          value: 'array|undefined',
          before: 'any',
          after: 'any',
          subtext,
          text: 'any',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle,
          popover: 'object|undefined',
          hideTags: 'boolean|undefined',
          search: 'boolean|undefined',
          onSwap: 'function|undefined',
          caret: 'any',
          disabled,
          loading: 'any',
          optionTagBefore: 'any',
          optionTagAfter: 'any',
          optionTagAttrs: 'any'
        },
        password: {
          type: '"password"',
          value: 'string|number|undefined',
          filter: 'array',
          disabled,
          loading: 'any',
          before: 'any',
          after: 'any',
          subtext,
          visible: 'boolean|undefined',
          placeholder: 'any',
          inputAttrs: "object|undefined",
          justNumber: "boolean|array|undefined",
          maxLength: 'number|undefined'
        },
        color: {
          type: '"color"',
          value: 'string|number|undefined',
          options,
          optionText,
          optionValue,
          optionAttrs,
          inputAttrs: "object|undefined",
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any'
        },
        checkbox: {
          type: '"checkbox"',
          value: 'boolean|undefined',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any',
          checkIcon: 'any'
        },
        select: {
          type: '"select"',
          value: 'number|string|undefined',
          caret: 'any',
          placeholder: 'any',
          search: 'boolean|undefined',
          disabled,
          loading: 'any',
          before: 'any',
          after: 'any',
          subtext,
          popover: 'object|undefined',
          onSwap: 'function|undefined',
          options,
          optionText,
          optionValue,
          optionBefore,
          optionAfter,
          optionSubtext,
          optionDisabled,
          optionAttrs,
          optionCheckIcon,
          optionClassName,
          optionStyle
        },
        file: {
          type: '"file"',
          value: 'any',
          multiple: 'boolean',
          before: 'any',
          after: 'any',
          subtext,
          inputAttrs: "object|undefined",
          disabled,
          loading: 'any',
          justify: 'boolean|undefined'
        },
        slider: {
          value: 'number|array|undefined',
          type: '"slider"',
          before: 'any',
          after: 'any',
          start: 'number|undefined',
          step: 'number|undefined',
          end: 'number|undefined',
          min: 'number|undefined',
          max: 'number|undefined',
          disabled,
          loading: 'any',
          showValue: 'boolean|"inline"|undefined',
          lineStyle: style,
          fillStyle: style,
          pointStyle: style,
          valueStyle: style,
          labelStyle: style,
          scaleStyle: style,
          multiple: 'boolean|undefined',
          getPointHTML: 'function|undefined',
          getScaleHTML: 'function|undefined',
          direction: '"left"|"right"|"top"|"bottom"|undefined',
          labelStep: 'number|array|undefined',
          scaleStep: 'number|array|undefined',
          editLabel: 'function|undefined',
          labelRotate: 'number|function|undefined'
        },
        form: {
          type: '"form"',
          inputs: 'object',
          value: 'object',
          disabled,
          inputClassName: 'string|function|undefined',
          inputStyle: style,
          submitText: 'string|undefined',
          closeText: 'string|undefined',
          labelAttrs: 'object|function|undefined',
          lang: '"en"|"fa"|undefined',
          updateInput: 'function|undefined',
          onSubmit: 'function|undefined',
          resetText: 'string|undefined'
        },
        datepicker: {
          type: '"datepicker"',
          value: 'any',
          caret: 'any',
          popover: 'object|undefined',
          before: 'any',
          after: 'any',
          subtext,
          placeholder: 'any',
          disabled,
          loading: 'any',
          calendarType: '"jalali"|"gregorian"|undefined',
          unit: '"month"|"day"|"hour"',
          theme: 'array|undefined',
          size: 'number|undefined',
          startYear: 'string|number|undefined',
          endYear: 'string|number|undefined',
          pattern: 'string|undefined',
          dateDisabled: 'array|undefined',
          dateAttrs: 'function|undefined',
          remove: 'boolean|undefined'
        },
        image: {
          type: '"image"',
          value: 'object|undefined',
          before: 'any',
          after: 'any',
          subtext,
          placeholder: 'any',
          attrs: 'object|undefined',
          preview: 'boolean|undefined',
          disabled,
          loading: 'any',
          width: 'string|number|undefined',
          height: 'string|number|undefined'
        },
        time: {
          type: '"time"',
          value: 'object|undefined',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any',
          calendarType: 'jalali|gregorian'
        },
        button: {
          type: '"button"',
          value: 'any',
          before: 'any',
          after: 'any',
          subtext,
          onClick: 'function|undefined',
          disabled,
          loading: 'any',
          caret: 'any',
          justify: 'boolean|undefined',
          popover: 'object|undefined'
        },
        list: {
          type: '"list"',
          value: 'any',
          options: 'array',
          size: 'number|undefined',
          width: 'number|undefined',
          decay: 'number|undefined',
          stop: 'number|undefined'
        },
        table: {
          type: '"table"',
          value: 'array|undefined',
          placeholder: 'any',
          onChangeSort: 'function|undefined',
          columns: 'array|undefined',
          onSwap: 'function|undefined|true',
          getValue: 'object|undefined',
          rowAttrs: 'function|undefined',
          excel: 'boolean|string|undefined',
          toolbar: 'any',
          toolbarAttrs: 'function|object|undefined',
          disabled,
          loading: 'any',
          paging: 'object|undefined',
          rowGap: 'number|undefined',
          columnGap: 'number|undefined',
          onAdd: 'function|object|undefined',
          onRemove: 'function|boolean|undefined',
          onSearch: 'function|boolean|undefined',
          headerAttrs: 'function|object|undefined',
          rowTemplate: 'function|undefined',
          rowsTemplate: 'function|undefined',
          rowAfter: 'function|undefined',
          rowBefore: 'function|undefined'
        },
        map: {
          type: '"map"',
          value: 'object|undefined',
          onChangeAddress: 'function|undefined',
          popup: 'object|undefined',
          mapConfig: 'object|undefined',
          before: 'any',
          after: 'any',
          subtext,
          disabled,
          loading: 'any'
        }
      };
      let privateObject = dic[type];
      if (!privateObject) {
        return;
      }
      let publicObject = {
        attrs: 'object|undefined',
        onChange: 'function|undefined',
        rtl: 'boolean|undefined',
        justify: 'boolean|undefined',
        className: 'string|undefined',
        style: 'object|undefined',
        text: 'any'
      };
      return {
        ...publicObject,
        ...privateObject
      };
    });
    _defineProperty(this, "getMessage", type => {
      let validProps = this.getValidateObject(type);
      if (!validProps) {
        return `${type} validator is not implement`;
      }
      for (let prop in this.props) {
        if (!validProps[prop]) {
          return `${this.titr} in type="${type}", ${prop} is invalid props`;
        }
        let error = this.checkTypes(this.props[prop], validProps[prop]);
        if (error) {
          return `${this.titr} in type="${type}", ${prop} props ${error}`;
        }
      }
    });
    this.props = props;
    let _error = this.getError();
    if (_error && !$('.aio-popup-alert-container').length) {
      let subtext;
      try {
        subtext = JSON.stringify(props);
      } catch {
        subtext = '';
      }
      new AIOPopup().addAlert({
        text: _error,
        type: 'error',
        subtext
      });
    }
  }
}
export function getInput(type, input, formItem) {
  function getOptions(type) {
    return {
      militaryservice: () => [{
        text: 'مشمول',
        value: 'mashmool'
      }, {
        text: 'معاف',
        value: 'moaf'
      }, {
        text: 'پایان خدمت',
        value: 'payan_khedmat'
      }],
      gender: () => [{
        text: 'آقا',
        value: 'male'
      }, {
        text: 'خانم',
        value: 'female'
      }],
      married: () => [{
        text: 'مجرد',
        value: false
      }, {
        text: 'متاهل',
        value: true
      }]
    }[type]();
  }
  return {
    fullname: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'نام و نام خانوادگی',
        field: 'value.fullname',
        ...formItem,
        validations: [['required']]
      };
    },
    firstname: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'نام',
        field: 'value.firstname',
        ...formItem,
        validations: [['required']]
      };
    },
    lastname: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'نام خانوادگی',
        field: 'value.lastname',
        ...formItem,
        validations: [['required']]
      };
    },
    username: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'نام کاربری',
        field: 'value.username',
        ...formItem,
        validations: [['required']]
      };
    },
    address: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'آدرس',
        field: 'value.address',
        ...formItem,
        validations: [['required']]
      };
    },
    location: () => {
      return {
        input: {
          type: 'map',
          ...input
        },
        label: 'موقعیت',
        field: 'value.location',
        ...formItem,
        validations: [['required']]
      };
    },
    email: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'ایمیل',
        field: 'value.email',
        ...formItem,
        validations: [['required']]
      };
    },
    phone: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'شماره تلفن',
        field: 'value.phone',
        ...formItem,
        validations: [['required']]
      };
    },
    mobile: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'شماره همراه',
        field: 'value.mobile',
        ...formItem,
        validations: [['required']]
      };
    },
    postal: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'کد پستی',
        field: 'value.postal',
        ...formItem,
        validations: [['required']]
      };
    },
    father: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'نام پدر',
        field: 'value.father',
        ...formItem,
        validations: [['required']]
      };
    },
    idcode: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'شماره شناسنامه',
        field: 'value.idcode',
        ...formItem,
        validations: [['required']]
      };
    },
    nationalcode: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'کد ملی',
        field: 'value.nationalcode',
        ...formItem,
        validations: [['required']]
      };
    },
    cardbank: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'شماره کارت',
        field: 'value.cardbank',
        ...formItem,
        validations: [['required']]
      };
    },
    state: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'استان',
        field: 'value.state',
        ...formItem,
        validations: [['required']]
      };
    },
    city: () => {
      return {
        input: {
          type: 'text',
          ...input
        },
        label: 'شهر',
        field: 'value.city',
        ...formItem,
        validations: [['required']]
      };
    },
    gender: () => {
      return {
        input: {
          type: 'radio',
          ...input
        },
        label: 'جنسیت',
        field: 'value.gender',
        ...formItem,
        validations: [['required']]
      };
    },
    married: () => {
      return {
        input: {
          type: 'radio',
          ...input
        },
        label: 'وضعیت تاهل',
        field: 'value.married',
        ...formItem,
        validations: [['required']]
      };
    },
    militaryservice: () => {
      return {
        input: {
          type: 'radio',
          ...input
        },
        label: 'وضعیت خدمت',
        field: 'value.militaryservice',
        ...formItem,
        validations: [['required']]
      };
    }
  }[type]();
}