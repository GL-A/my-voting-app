const initialState = {
  react: 0,
  angular: 0,
  vue: 0
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'VOTE_ANGULAR':
    console.log( 'angular')
      return Object.assign( {}, state, {
        angular: state.angular + 1
      })
    case 'VOTE_REACT':
    console.log( 'react')
      return Object.assign( {}, state, {
        react: state.react + 1
      })
    case 'VOTE_VUE':
    console.log( 'vue')
      return Object.assign( {}, state, {
        vue: state.vue + 1
      })
    default:
      return state
  }
}
