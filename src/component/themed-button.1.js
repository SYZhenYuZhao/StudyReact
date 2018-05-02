import React from 'react'
import { ThemeContext } from './theme-context';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => {
                console.log(props,theme)
                return(
                <button
                    {...props}
                    style={{ backgroundColor: theme.background }}
                />
            )}}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;