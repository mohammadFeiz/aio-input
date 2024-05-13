import React, { FC } from 'react';
import { AI, AI_indent, AI_option, AI_label } from './types.tsx';
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
    isDate?: boolean;
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
