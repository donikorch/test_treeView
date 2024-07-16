import React from 'react';
import type { Tree } from '../../../app/types/tree';
import Node from '../Node/Node';
import styles from './container.module.css';

function Container({ nodes }: { nodes: Tree[] }): JSX.Element {
  return (
    <div className={styles.container}>
      {nodes.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Node key={index} node={item} />
      ))}
    </div>
  );
}

export default Container;
