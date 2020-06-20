import React from "react"
import Counter from "../components/Counter"
import { connect } from "react-redux"
import { increase, decrease } from "../modules/counter"
import { bindActionCreators } from "redux"
const CountContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// })

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CountContainer)
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CountContainer)
