import React from 'react';
import locales from './locales';
export const contextContent = {
    locales: locales['ZH-CN']
};
  
export const Context = React.createContext(
    contextContent// 默认值
);