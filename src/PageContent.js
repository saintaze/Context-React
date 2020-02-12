import React, { useContext } from "react";
import {ThemeContext} from './ThemeContext';

const PageContent = props => {
  const {isDarkMode} = useContext(ThemeContext);
  
  const styles = {
    backgroundColor: isDarkMode ? '#ffdf00' : 'salmon',
    height: '100vh',
    width: '100vw'
  }
  
  return <div style={styles}>{props.children}</div>;

}
 
export default PageContent;