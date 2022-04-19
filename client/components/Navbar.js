// import React from 'react'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

// const Navbar = ({handleClick, isLoggedIn, lineItems}) => (
//   <div>
//     <h1>FS-App-Template</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//           <Link to="/cart">Cart ({lineItems.length})</Link>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/home">Home</Link>
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//           <Link to="/cart">Cart ({lineItems.length})</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

// const mapState = state => {
//   return {
//     lineItems: state.lineItems,
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
