import React, { Component } from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import { Button } from 'antd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: themes.ZH_CN,
        };
    
        this.toggleTheme = () => {
          this.setState(state => ({
            theme:
              state.theme === themes.ZH_CN
                ? themes.EN_US
                : themes.ZH_CN,
          }));
        };
    }
    render() {
        let {
            theme
        }=this.state;
        return (
            <div className="app">
               app
               {console.log(this.state.theme)}
                <ThemeContext.Provider value={theme}>
                    <ThemedButton onClick={this.toggleTheme}>
                       {theme.components.app.buttonTitle}
                    </ThemedButton>
                    <Button type="primary">Primary</Button>
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;