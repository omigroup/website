import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Under Construction',
    Svg: require('/static/img/omi-logo.svg').default,
    description: (
      <>
        The OMI website is under construction... Check back soon!
      </>
    ),
  },
  {
    title: 'Link to Discord',
    Svg: require('/static/img/omi-logo.svg').default,
    description: (
      <>
        Link to join our <a href="https://discord.gg/QFV4QQK" target="_blank">discord server.</a>
      </>
    ),
  },
  {
    title: 'Follow on Twitter',
    Svg: require('/static/img/omi-logo.svg').default,
    description: (
      <>
        For updates and the latest news about OMI, follow us on <a href="https://twitter.com/open_metaverse">Twitter</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
