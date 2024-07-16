import React from 'react';
import { useAppSelector } from '../../../app/store';
import Container from '../../ui/Container/Container';

function TreeView(): JSX.Element {
  const tree = useAppSelector((store) => store.tree.tree);
  return <Container nodes={tree} />;
}

export default TreeView;
