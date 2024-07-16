import React, { useState } from 'react';
import styles from './node.module.css';
import useSession from '../../../app/hooks/useSession';
import type { Tree } from '../../../app/types/tree';
import { useAppDispatch } from '../../../app/store';
import { toggleNode } from '../../../app/slices/nodeSlice';

function Node({ node }: { node: Tree }): JSX.Element {
  const openNodes = useSession();
  const isOpen = openNodes.includes(node.name);
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggle = (): void => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        dispatch(toggleNode(node.name));
        setIsClosing(false);
      }, 250);
    } else {
      dispatch(toggleNode(node.name));
    }
  };

  return (
    <>
      <div className={styles.node}>
        {node.name}
        {node.children && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div className={styles.icon} onClick={handleToggle}>
            <img
              className={`${styles.cross} ${isOpen ? styles.rotate : ''}`}
              src="/cross.svg"
              alt="Cross Icon"
            />
          </div>
        )}
      </div>
      {isOpen && node.children && (
        <div className={`${styles.children} ${isClosing ? styles.closing : styles.open}`}>
          {node.children.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Node key={index} node={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Node;
