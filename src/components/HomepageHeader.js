import React from 'react'
import styles from './HomepageHeader.module.css'

// NOTE: component workaround so purple main head can be managed from markdown
// <HomepageHeader>
//   # headline
//   ## sub
// </HomepageHeader>

export default function HomepageHeader(props, x) {
    const title = (props.children.match(/(?:^|\s)# ([^#\n]+)/)||[])[1];
    const subtitle = (props.children.match(/(?:^|\s)## ([^#\n]+)/)||[])[1];
    return (
        <div className={styles.full_width}>
          <div className={styles.unfull_width}>
            <header>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </header>
          </div>
        </div>
    )
}

// const Title = ({ children }) => {
//   return <h1>{children}</h1>;
// };
// 
// const SubTitle = ({ children }) => {
//   return <h3>{children}</h3>;
// };
// 
// HomepageHeader.Title = Title;
// HomepageHeader.SubTitle = SubTitle;
