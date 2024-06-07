import React, { FC } from 'react';
import { AP_position } from "./../../npm/aio-popup/index";
import { AIODate, DragClass } from './../../npm/aio-utils/index';
import './index.css';
type RN = React.ReactNode;
declare const AIOInput: FC<AI>;
export default AIOInput;
export type I_openState = boolean | undefined;
export type AI_Layout = {
    option?: AI_option;
    text?: RN;
    index?: number;
    properties?: any;
    indent?: AI_indent;
    toggle?: {
        open: I_openState;
    };
};
export declare const Acardion: FC;
type I_treeRowDetails = {
    level: number;
    index: number;
    isLastChild: boolean;
    isFirstChild: boolean;
};
export declare function Calendar(props: {
    onClose?: () => void;
}): JSX.Element;
type AI_sbp = (size: number, conf?: {
    half?: boolean;
    min?: number;
    max?: number;
    range?: number;
}) => number;
type AI_cbs = (str: string, type: 'offset' | 'radius') => {
    thickness: number;
    color: string;
    roundCap: boolean;
    full: boolean;
    radius: number;
};
type AI_rbs = (str: string) => {
    thickness: number;
    color: string;
    roundCap: boolean;
    offset: number;
};
export type I_RangeContext = {
    getXPByValue: (value: number) => number;
    fixAngle: (angle: number) => number;
    getAngleByValue: (value: number, extra?: number) => number;
    isValueDisabled: (value: number) => boolean;
    getSide: () => 'left' | 'right' | 'top' | 'bottom';
    getOffset: () => 'top' | 'left';
    rootProps: AI;
    dom: any;
    value: number[];
    getDefaultOffset: (type: 'point' | 'label' | 'scale') => number;
    getCircleByStr: AI_cbs;
    getRectByStr: AI_rbs;
    sbp: AI_sbp;
};
export type I_RangeLabelItem = {
    label: AI_label;
    itemValue: number;
};
export type AI_Sidemenu = {
    options: AI_Sidemenu_option[];
    onChange: (newValue: string) => void;
};
export type AI_Sidemenu_option = {
    text: string;
    value: string;
    badge?: AI_Sidemenu_badge | AI_Sidemenu_badge[];
    icon?: RN;
    options?: AI_Sidemenu_option[];
};
export type AI_Sidemenu_badge = {
    text: string;
    circle?: boolean;
    color: 'red' | 'green' | 'blue' | 'grey' | 'white' | 'orange' | 'yellow';
};
export declare const SideMenu: FC<AI_Sidemenu>;
export type AI_timeUnits = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export type AV_operator = 'contain' | '!contain' | 'required' | '=' | '!=' | '>' | '!>' | '>=' | '!>=' | '<' | '!<' | '<=' | '!<=' | 'startBy';
export type AV_props = {
    lang?: 'fa' | 'en';
    title: string;
    value: any;
    validations: AV_item[];
};
export type AV_item = string;
export declare class AIOValidation {
    contain: (target: any, value: any) => {
        result: boolean;
        unit: any;
    };
    startBy: (target: any, value: any) => {
        result: boolean;
        unit: any;
    };
    equal: (target: any, value: any, equal?: boolean) => {
        result: boolean;
        unit: any;
    };
    less: (target: any, value: any, equal?: boolean) => {
        result: boolean;
        unit: any;
    };
    greater: (target: any, value: any, equal?: boolean) => {
        result: boolean;
        unit: any;
    };
    between: (targets: any[], value: any, equal?: boolean) => {
        result: boolean;
        unit: any;
    };
    getMessage: (p: {
        operator: AV_operator;
        target: string;
        message?: string;
        title?: string;
        unit: string;
    }) => string;
    translate: (operator: AV_operator) => string;
    getResult: (p: {
        target: any;
        title: string;
        message?: string;
        value: any;
        operator: AV_operator;
    }) => string | undefined;
    getValidation: () => string | undefined;
    validate: () => string | undefined;
    fnMapper: (operatorName: any) => string;
    boolKey: (key: 'more' | 'less') => string;
    boolDic: any;
    getUnit: (value: any) => string;
    constructor(props: AV_props);
}
export declare function AIOInput_defaultProps(p: {
    [key in ('mapApiKeys')]?: any;
}): void;
export type AI_type = 'text' | 'number' | 'textarea' | 'password' | 'select' | 'map' | 'tree' | 'spinner' | 'slider' | 'tags' | 'button' | 'date' | 'color' | 'radio' | 'tabs' | 'list' | 'table' | 'image' | 'file' | 'checkbox' | 'form' | 'time' | 'buttons' | 'range' | 'acardion';
export type AI_optionKey = ('attrs' | 'text' | 'value' | 'disabled' | 'checkIcon' | 'checked' | 'before' | 'after' | 'justify' | 'subtext' | 'onClick' | 'className' | 'style' | 'tagAttrs' | 'tagBefore' | 'tagAfter' | 'close' | 'show' | 'toggleIcon');
export type AI_formNode = {
    field?: string;
    label?: string;
    addressField?: string;
    footer?: RN;
    input?: AI;
    labelAttrs?: any;
    errorAttrs?: any;
    validations?: any[];
    childs?: AI_formNode[];
    dir?: 'h' | 'v';
    html?: RN;
    className?: string;
    style?: any;
    attrs?: any;
    show?: boolean | (() => boolean);
    flex?: number;
    size?: number;
};
export type AI_table_column = {
    title?: any;
    value?: any;
    sort?: true | AI_table_sort;
    search?: boolean;
    id?: string;
    _id?: string;
    width?: any;
    minWidth?: any;
    input?: AI;
    onChange?: (newValue: any) => void;
    titleAttrs?: {
        [key: string]: any;
    } | string;
    template?: string | ((p: {
        row: any;
        column: AI_table_column;
        rowIndex: number;
    }) => RN);
    excel?: string;
    justify?: boolean;
    cellAttrs?: {
        [key: string]: any;
    } | ((p: {
        row: any;
        rowIndex: number;
        column: AI_table_column;
    }) => any) | string;
};
export type AI_date_unit = 'year' | 'month' | 'day' | 'hour';
export type AI_time_unit = {
    [key in ('year' | 'month' | 'day' | 'hour' | 'minute' | 'second')]?: boolean;
};
export type AI = {
    actions?: ({
        [key in keyof AI_option]?: any;
    }[]) | ((row: any, parent: any) => {
        [key in keyof AI_option]?: any;
    }[]);
    addText?: RN | ((value: any) => RN);
    after?: RN | ((p?: any) => RN);
    attrs?: any;
    blurChange?: boolean;
    before?: RN | ((p?: any) => RN);
    body?: (value?: any) => {
        attrs?: any;
        html?: RN;
    };
    caret?: boolean | RN;
    checkIcon?: AI_checkIcon;
    circles?: string[];
    className?: string;
    columnGap?: number;
    columns?: AI_table_column[] | ((p?: any) => AI_table_column[]);
    count?: number;
    data?: any;
    dateAttrs?: (p: {
        dateArray: number[];
        isToday: boolean;
        isActive: boolean;
        isMatch: (p: any[]) => boolean;
    }) => any;
    decay?: number;
    delay?: number;
    deSelect?: any;
    disabled?: boolean | any[];
    editable?: boolean;
    end?: number;
    endYear?: string | number;
    errorAttrs?: any;
    excel?: string;
    fill?: false | AI_fill | ((index: number) => AI_fill);
    filter?: string[];
    footer?: RN;
    getChilds?: (p: {
        row: any;
        details: I_treeRowDetails;
    }) => any[];
    getErrors?: (p: string[]) => void;
    getValue?: {
        [key: string]: (p: AI_table_param) => any;
    };
    handle?: AI_range_handle;
    headerAttrs?: any;
    height?: number | string;
    hideTags?: boolean;
    indent?: number;
    initialDisabled?: boolean;
    inputAttrs?: any;
    node?: AI_formNode;
    jalali?: boolean;
    justify?: boolean;
    justNumber?: boolean | (string[]);
    labels?: AI_labels;
    labelAttrs?: any;
    lang?: 'fa' | 'en';
    line?: (index: number, active: boolean) => {
        attrs?: any;
        html?: RN;
    };
    loading?: boolean | RN;
    mapConfig?: I_Map_config;
    max?: number;
    maxLength?: number;
    min?: number;
    move?: any;
    multiple?: boolean | number;
    onAdd?: {
        [key: string]: any;
    } | ((p?: any) => Promise<boolean | void | undefined>);
    onChange?: ((newValue: any, p?: any) => undefined | boolean | void) | ((newValue: any, p?: any) => Promise<undefined | boolean | void>);
    onChangePaging?: (newPaging: AI_table_paging) => void;
    onChangeSort?: (sorts: AI_table_sort[]) => Promise<boolean>;
    onClick?: () => void;
    onRemove?: true | ((p: {
        row: any;
        action?: Function;
        rowIndex?: number;
        parent?: any;
    }) => Promise<boolean | void>);
    onSwap?: true | ((newValue: any[], startRow: any, endRow: any) => void);
    onSearch?: true | ((searchValue: string) => void);
    open?: boolean;
    options?: any[] | ((p?: any) => any[]);
    option?: AI_optionProp;
    paging?: AI_table_paging;
    pattern?: string;
    placeholder?: React.ReactNode;
    popover?: AI_popover;
    point?: false | AI_point;
    popupConfig?: I_Map_config;
    preview?: boolean;
    ranges?: [number, string][];
    removeText?: string;
    reverse?: boolean;
    rotate?: number;
    round?: number;
    rowAfter?: (p: {
        row: any;
        rowIndex: number;
    }) => RN;
    rowAttrs?: (p: {
        row: any;
        rowIndex: number;
    }) => any;
    rowBefore?: (p: {
        row: any;
        rowIndex: number;
    }) => RN;
    rowGap?: number;
    rowsTemplate?: (rows: any[]) => RN;
    rowTemplate?: (p: {
        row: any;
        rowIndex: number;
        isLast: boolean;
    }) => RN;
    rtl?: boolean;
    search?: string;
    setChilds?: (p: {
        row: any;
        childs: any[];
        details: I_treeRowDetails;
    }) => void;
    showErrors?: boolean | string;
    size?: number;
    spin?: boolean;
    start?: number;
    startYear?: string | number;
    step?: number;
    stop?: number;
    style?: any;
    swip?: number;
    subtext?: RN | (() => RN);
    text?: RN | (() => RN);
    theme?: string[];
    toolbar?: RN | (() => RN);
    toolbarAttrs?: any;
    translate?: (text: string) => string;
    type: AI_type;
    unit?: AI_date_unit | AI_time_unit;
    value?: any;
    vertical?: boolean;
    width?: number | string;
};
export type AI_popover = {
    position?: AP_position;
    fitHorizontal?: boolean;
    body?: (close: any) => RN;
    limitTo?: string;
    fitTo?: string;
    header?: {
        attrs?: any;
        title?: string;
        subtitle?: string;
        onClose?: boolean;
        before?: RN;
        after?: RN;
    };
    maxHeight?: number | string;
    pageSelector?: string;
    setAttrs?: (key: 'backdrop' | 'modal' | 'header' | 'body' | 'footer') => any;
};
type I_optionDetails = {
    index: number;
    level?: number;
    change?: (v: any) => any;
    mainValue: any;
    active: boolean;
    defaultOptionProps?: {
        [key: string]: any;
    };
    isOpen?: (id: any) => boolean | undefined;
    toggle?: () => void;
};
export type AI_optionProp = {
    [key in AI_optionKey]?: string | ((option: any, details: I_optionDetails) => any);
};
export type AI_table_param = {
    row: any;
    column: AI_table_column;
    rowIndex: number;
};
export type AI_date_trans = 'Today' | 'Clear' | 'This Hour' | 'Today' | 'This Month' | 'Select Year';
export type AI_point = (index: number, p: any) => {
    offset?: number;
    html?: RN;
    attrs?: any;
};
export type AI_labels = AI_label[];
export type AI_label = {
    list?: number[];
    step?: number;
    dynamic?: boolean;
    autoHide?: boolean;
    zIndex?: number;
    setting: (value: number, p: {
        angle: number;
        disabled: boolean;
    }) => AI_labelItem;
};
export type AI_labelItem = {
    offset?: number;
    fixAngle?: boolean;
    html?: RN;
};
export type AI_range_handle = ((value: number, p: any) => AI_range_handle_config) | false;
export type AI_range_handle_config = {
    thickness?: number;
    size?: number;
    color?: string;
    offset?: number;
    sharp?: boolean;
};
export type AI_fill = {
    thickness?: number;
    color?: string;
    className?: string;
    style?: any;
};
export type AI_checkIcon = Object | [RN, RN];
export type AI_option = {
    object: any;
    active: boolean;
    show: any;
    checked: boolean;
    checkIcon: AI_checkIcon;
    after: RN | ((p?: any) => RN);
    before: RN | ((p?: any) => RN);
    draggable: boolean;
    text: RN;
    subtext: RN;
    justify: boolean;
    loading: boolean | RN;
    disabled: boolean;
    attrs: any;
    className: string;
    style: any;
    value: any;
    tagAttrs: any;
    tagBefore: any;
    tagAfter: any;
    toggleIcon: boolean | RN[];
    onClick?: (o1: any, o2?: any) => void;
    close?: boolean;
    level?: number;
    index: number;
    details: I_optionDetails;
};
export type AI_optionDic = {
    [key: string]: AI_option;
};
export type AI_options = {
    optionsList: AI_option[];
    optionsDic: AI_optionDic;
};
export type AI_getProp_param = {
    key: string;
    def?: any;
    preventFunction?: boolean;
};
export type AI_getProp = (p: AI_getProp_param) => any;
export type AI_addToAttrs = (attrs: any, p: {
    className?: string | (any[]);
    style?: any;
    attrs?: any;
}) => any;
export type AI_context = {
    rootProps: AI;
    showPassword: boolean;
    setShowPassword: (v?: boolean) => void;
    DragOptions: DragClass;
    datauniqid: string;
    touch: boolean;
    open: boolean;
    click: (e: any, dom: any) => void;
    optionClick: (option: AI_option, p?: any) => void;
    types: AI_types;
    DATE: AIODate;
    options: AI_options;
};
export type AI_types = {
    isMultiple: boolean;
    isInput: boolean;
    isDropdown: boolean;
    hasOption: boolean;
    hasPlaceholder: boolean;
    hasKeyboard: boolean;
    hasText: boolean;
    hasSearch: boolean;
};
export type AI_table_sort = {
    active?: boolean;
    dir?: 'dec' | 'inc';
    title?: RN;
    type?: 'string' | 'number';
    sortId?: string;
    getValue?: (row: any) => any;
};
export type type_table_temp = {
    start?: any;
    isInitSortExecuted?: boolean;
};
export type AI_table_paging = {
    serverSide?: boolean;
    number: number;
    size: number;
    length?: number;
    sizes?: number[];
};
export type AI_table_rows = {
    rows: any[];
    searchedRows: any[];
    sortedRows: any[];
    pagedRows: any[];
};
export type type_table_getCellAttrs = (p: {
    row: any;
    rowIndex: number;
    column: AI_table_column;
    type: 'title' | 'cell';
}) => any;
export type type_table_context = {
    rootProps: AI;
    columns: AI_table_column[];
    ROWS: {
        rows: any[];
        searchedRows: any[];
        sortedRows: any[];
        pagedRows: any[];
    };
    add: () => void;
    remove: (row: any, index: number) => void;
    search: (searchValue: string) => void;
    exportToExcel: () => void;
    sorts: AI_table_sort[];
    setSorts: (newSorts: AI_table_sort[]) => void;
    sortRows: (rows: any[], sorts: AI_table_sort[]) => any[];
    excelColumns: AI_table_column[];
    getRowAttrs: (row: any, rowIndex: number) => any;
    getCellAttrs: type_table_getCellAttrs;
    getDynamics: any;
};
export type AI_Popover_props = {
    getRootProps: () => AI;
    id: string;
    toggle: (popover: any) => void;
    types: AI_types;
};
export type type_time_value = {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
};
export type AI_indent = {
    size: number;
    isLastChild: boolean;
    isFirstChild: boolean;
    childsLength: number;
    level: number;
    index: number;
    parentIndent?: AI_indent;
    height: number;
};
export type I_list_temp = {
    dom: any;
    activeIndex: number;
    interval: any;
    moved: boolean;
    lastY: number;
    deltaY: number;
    so: {
        y: number;
        top: number;
        newTop?: number;
        limit: {
            top: number;
            bottom: number;
        };
    };
};
export type I_Map_config = {
    area?: I_Map_area;
    markers?: I_Map_marker[];
    zoom?: number;
    marker?: boolean | I_Map_marker;
    traffic?: boolean;
    zoomControl?: boolean;
    maptype?: any;
    poi?: boolean;
    search?: string;
    title?: string;
    draggable?: boolean;
    address?: boolean;
    submitText?: RN;
    isPopup?: boolean;
};
export type I_Map_area = {
    color: string;
    opacity: number;
    radius: number;
    lat: number;
    lng: number;
};
export type I_Map_marker = {
    size?: number;
    color?: string;
    html?: RN;
    text?: RN;
    lat?: number;
    lng?: number;
    popup?: (marker: I_Map_marker) => any;
};
export type I_Map_value = {
    lat: number;
    lng: number;
    address?: string;
};
export type I_MapUnit = {
    onClose?: () => void;
    value: I_Map_value;
    onChange: (value: I_Map_value) => void;
    mapConfig: I_Map_config;
    popupConfig?: I_Map_config;
    attrs: any;
    disabled: boolean;
};
export type I_Map_temp = {
    datauniqid: string;
    area: any;
    map: any;
    markers: any[];
    dom: any;
    L: any;
    atimeout: any;
    btimeout: any;
    mapMarker: any;
    lastChange: any;
};
export type I_Map_coords = {
    lat: number;
    lng: number;
};
export type I_mapApiKeys = {
    map: string;
    service: string;
};
export type I_Map_context = {
    mapApiKeys: I_mapApiKeys;
    value: I_Map_value;
    flyTo: (coords: I_Map_coords) => void;
    addressLoading: boolean;
    address: string;
    goToCurrent: () => void;
    mapConfig: I_Map_config;
    popupConfig?: I_Map_config;
    onClose?: () => void;
    onChange: (value: I_Map_value) => void;
};
