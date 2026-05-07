import React, {useContext} from 'react';
import classNames from 'classnames';
import styles from './SettingsModal.module.css';
import scrollbarStyles from '../../../common/styles/Scrollbar.module.css';

export const PageScrollContext = React.createContext(null);

export function PageScrollBody({children, className, ...props}) {
  const ref = useContext(PageScrollContext);
  return (
    <div ref={ref} className={classNames(styles.pageScrollBody, scrollbarStyles.scroll, className)} {...props}>
      {children}
    </div>
  );
}

export default PageScrollBody;
