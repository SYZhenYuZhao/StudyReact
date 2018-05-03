/*Context多层级组件间传值*/
import React from 'react'
export const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);