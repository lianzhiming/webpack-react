import React from 'react';
import Chinese from '../../common/locales/zh-cn';
import English from '../../common/locales/en-us';

export const themes = {
    ZH_CN: Chinese,
    EN_US: English,
  };
  
export const ThemeContext = React.createContext(
    themes.ZH_CN // 默认值
);  