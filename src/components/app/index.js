import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import { Drawer, Button } from 'antd';
//import { Resizable, ResizableBox } from 'react-resizable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.ZH_CN,
      visible: false
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
      theme,
      visible
    } = this.state;
    return (
      <div className="app">
        app
               {console.log(this.state.theme)}
        <ThemeContext.Provider value={theme}>
          <ThemedButton onClick={this.toggleTheme}>
            {theme.components.app.buttonTitle}
          </ThemedButton>
          <Button type="primary" onClick={this.showDrawer}>Open</Button>
          {/* <ResizableBox width={200} height={200} draggableOpts={{ ...}}
            minConstraints={[100, 100]} maxConstraints={[300, 300]}>
            <span>Contents</span>
          </ResizableBox> */}
        </ThemeContext.Provider>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
}

export default App;