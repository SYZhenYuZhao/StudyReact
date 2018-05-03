/*Context多层级组件间传值||方法*/
import React from 'react'
// 确保默认值按类型传递
// createContext() 匹配的属性是 Consumers 所期望的
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
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});