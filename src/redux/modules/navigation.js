const NAVIGATION_UPDATE = 'dhguissepe.com/navigation/UPDATE'

export default function reducer(state = [], action) {
  switch (action.type) {
    case NAVIGATION_UPDATE:
      const {pageIndex} = state
      let {navbarLinks} = state

      navbarLinks[pageIndex].state = false
      navbarLinks[action.payload.pageIndex].state = 'active'

      return {
        ...state,
        pageIndex: action.payload.pageIndex,
        navbarLinks: navbarLinks
      }
    default:
      return state
  }
}

export function navigationUpdate(pageIndex) {
  return {
    type: NAVIGATION_UPDATE,
    payload: {
      pageIndex: pageIndex
    }
  }
}