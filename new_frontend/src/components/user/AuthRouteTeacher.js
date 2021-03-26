// import React from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';

// const AuthRoute = ({ component: Component, ...rest }) => {

//   // Route authentication
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           rest.loggedIn ? (
//             rest.type == 'teacher'?(
//             <Component {...props}/>
//             )
//             :
//             (
//                 <Redirect
//                     to={{
//                         pathname:"/teacher_profile",
//                         state: {from: props.location}
//                     }}
//                 />
//             )
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }

//   const mapStateToProps = state => {
//     return {
//         loggedIn : state.auth.loggedIn,
//         type: state.auth.user.type
//     }
// }

// export default connect(mapStateToProps)(AuthRoute)