import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { toggleNode } from '../slices/nodeSlice';

const useSession = (): string[] => {
  const dispatch = useAppDispatch();
  const openNodes = useAppSelector((store) => store.nodes.openNodes);

  useEffect(() => {
    const storedOpenNodes = sessionStorage.getItem('openNodes');
    if (storedOpenNodes) {
      try {
        const parsedOpenNodes: string[] = JSON.parse(storedOpenNodes) as string[];
        parsedOpenNodes.forEach((nodeName: string) => {
          if (!openNodes.includes(nodeName)) {
            dispatch(toggleNode(nodeName));
          }
        });
      } catch (error) {
        console.error('Failed to parse openNodes from sessionStorage:', error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem('openNodes', JSON.stringify(openNodes));
  }, [openNodes]);

  return openNodes;
};

export default useSession;
