import { create } from 'zustand'

interface PageState {
  animationDirection: 'right' | 'left'
  actions: PageActions
}
interface PageActions {
  setAnimationDirection: (direction: PageState['animationDirection']) => void
}

export const usePageStore = create<PageState>((set) => ({
  animationDirection: 'right',

  actions: {
    setAnimationDirection: async (
      direction: PageState['animationDirection']
    ) => {
      set({
        animationDirection: direction,
      })
    },
  },
}))

export const usePageActions = () => usePageStore((state) => state.actions)
