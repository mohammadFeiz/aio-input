import React, { FC } from 'react';
import { AP_position } from "aio-popup";
import { AIODate, DragClass } from 'aio-utils';
import './index.css';
declare const AIOInput: FC<AI>;
export default AIOInput;
export type AI_Layout = {
    option?: AI_option;
    text?: React.ReactNode;
    realIndex?: number;
    renderIndex?: number;
    properties?: any;
    indent?: AI_indent;
    toggle?: {
        state: 0 | 1 | 2;
        onClick: (e: any) => void;
    };
};
export declare const Acardion: FC;
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
export type AI_timeUnits = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export type AV_operator = 'contain' | '!contain' | 'required' | '=' | '!=' | '>' | '!>' | '>=' | '!>=' | '<' | '!<' | '<=' | '!<=';
export type AV_props = {
    lang?: 'fa' | 'en';
    title: string;
    value: any;
    validations: AV_item[];
};
export type AV_item = string;
export declare class AIOValidation {
    contain: (target: any, value: any) => boolean;
    equal: (target: any, value: any, equal?: boolean) => boolean;
    less: (target: any, value: any, equal?: boolean) => boolean;
    greater: (target: any, value: any, equal?: boolean) => boolean;
    between: (targets: any[], value: any, equal?: boolean) => boolean;
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
        unit: string;
        operator: AV_operator;
    }) => string | undefined;
    getValidation: () => string | undefined;
    validate: () => string | undefined;
    fnMapper: (operatorName: any) => string;
    boolKey: (key: 'more' | 'less') => string;
    boolDic: any;
    constructor(props: AV_props);
}
export declare function AIOInputSetStorage(name: string, value: any): void;
export type AI_type = 'text' | 'number' | 'textarea' | 'password' | 'select' | 'map' | 'tree' | 'spinner' | 'slider' | 'button' | 'date' | 'color' | 'radio' | 'tabs' | 'list' | 'table' | 'image' | 'file' | 'checkbox' | 'form' | 'time' | 'buttons' | 'range' | 'acardion';
export type AI_optionKey = ('attrs' | 'text' | 'value' | 'disabled' | 'checkIcon' | 'checked' | 'before' | 'after' | 'justify' | 'subtext' | 'onClick' | 'className' | 'style' | 'tagAttrs' | 'tagBefore' | 'tagAfter' | 'close' | 'show');
export type AI_formNode = {
    field?: string;
    label?: string;
    addressField?: string;
    footer?: React.ReactNode;
    input?: AI;
    labelAttrs?: any;
    errorAttrs?: any;
    validations?: any[];
    childs?: AI_formNode[];
    dir?: 'h' | 'v';
    html?: React.ReactNode;
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
    }) => React.ReactNode);
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
    addText?: React.ReactNode | ((value: any) => React.ReactNode);
    after?: React.ReactNode | ((p?: any) => React.ReactNode);
    attrs?: any;
    blurChange?: boolean;
    before?: React.ReactNode | ((p?: any) => React.ReactNode);
    body?: (value?: any) => {
        attrs?: any;
        html?: React.ReactNode;
    };
    caret?: boolean | React.ReactNode;
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
    footer?: React.ReactNode;
    getChilds?: (row: any) => any[];
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
        html?: React.ReactNode;
    };
    loading?: boolean | React.ReactNode;
    mapConfig?: I_Map_config;
    max?: number;
    maxLength?: number;
    min?: number;
    move?: any;
    multiple?: boolean | number;
    onAdd?: {
        [key: string]: any;
    } | ((p?: any) => Promise<boolean | void>);
    onChange?: (newValue: any, p?: any) => void;
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
    placeholder?: string;
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
    }) => React.ReactNode;
    rowAttrs?: (p: {
        row: any;
        rowIndex: number;
    }) => any;
    rowBefore?: (p: {
        row: any;
        rowIndex: number;
    }) => React.ReactNode;
    rowGap?: number;
    rowsTemplate?: (rows: any[]) => React.ReactNode;
    rowTemplate?: (p: {
        row: any;
        rowIndex: number;
        isLast: boolean;
    }) => React.ReactNode;
    rtl?: boolean;
    search?: string;
    setChilds?: (row: any, childs: any[]) => void;
    showErrors?: boolean | string;
    size?: number;
    spin?: boolean;
    start?: number;
    startYear?: string | number;
    step?: number;
    stop?: number;
    style?: any;
    swip?: number;
    subtext?: React.ReactNode | (() => React.ReactNode);
    text?: React.ReactNode | (() => React.ReactNode);
    theme?: string[];
    toolbar?: React.ReactNode | (() => React.ReactNode);
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
    body?: (close: any) => React.ReactNode;
    limitTo?: string;
    fitTo?: string;
    header?: {
        attrs?: any;
        title?: string;
        onClose?: boolean;
    };
    maxHeight?: number | string;
    pageSelector?: string;
    setAttrs?: (key: 'backdrop' | 'modal' | 'header' | 'body' | 'footer') => any;
};
export type AI_optionProp = {
    [key in AI_optionKey]?: any;
};
export type AI_table_param = {
    row: any;
    column: AI_table_column;
    rowIndex: number;
};
export type AI_date_trans = 'Today' | 'Clear' | 'This Hour' | 'Today' | 'This Month' | 'Select Year';
export type AI_point = (index: number, p: any) => {
    offset?: number;
    html?: React.ReactNode;
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
    html?: React.ReactNode;
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
export type AI_checkIcon = ((checked: boolean) => React.ReactNode) | Object;
export type AI_option = {
    object: any;
    show: any;
    checked: boolean;
    checkIcon: AI_checkIcon;
    after: React.ReactNode | ((p?: any) => React.ReactNode);
    before: React.ReactNode | ((p?: any) => React.ReactNode);
    draggable: boolean;
    text: React.ReactNode;
    subtext: React.ReactNode;
    justify: boolean;
    loading: boolean | React.ReactNode;
    disabled: boolean;
    attrs: any;
    className: string;
    style: any;
    value: any;
    tagAttrs: any;
    tagBefore: any;
    tagAfter: any;
    onClick?: (o1: any, o2?: any) => void;
    close?: boolean;
    level?: number;
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
    optionClick: (option: AI_option) => void;
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
    title?: React.ReactNode;
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
    submitText?: React.ReactNode;
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
    html?: React.ReactNode;
    text?: React.ReactNode;
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
