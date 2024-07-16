import React, { useEffect } from 'react';
import { useAppDispatch } from './store';
import { testTree1 } from '../assets/data';
import './App.css';
import { setTree } from './slices/treeSlice';
import TreeView from '../components/pages/TreeView/TreeView';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTree(testTree1));
  }, [dispatch]);

  return <TreeView />;
}

export default App;
