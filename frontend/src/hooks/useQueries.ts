import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useRandomFact() {
  const { actor } = useActor();

  return useMutation<string, Error, void>({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getRandomFact();
    },
  });
}
