import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import HeaderBar from "./header/index";
import SearchBar from "./Header/SearchBar";
import UserIcon from "./Header/UserIcon";
import Logo from "./images/logo.jpg";

//React Code -- by Create Element -- normal React create Element
console.log("To check browser understands react", React);
// const first_element = React.createElement(
//   "h1",
//   { key: "1" },
//   "Hello People!!!"
// );


// const sec_element = React.createElement(
//   "h2",
//   { key: "2" },
//   "Hope you are doing great"
// );


// const container1 = React.createElement("div", { id: "container" }, [
//   first_element,
//   sec_element,
// ]);

/**** creating root to display it on DOM using ReactDOM */

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container1);
//Nested React CreateElement

// const container2 = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { id: "h_1", key: "h_1" }, "Premium series"),
//   React.createElement("h2", { id: "h_2", key: "h_2" }, "Rajguru NoteBooks"),
//   React.createElement("h3", { id: "h_3", key: "h_3" }, "Have a Bright Future"),
// ]);


/****
 * Error will occur bcz we are creating same root again , but as a reasult on the UI and DOM we get updated results.
 *
 *
 *  const root1 = ReactDOM.createRoot(document.getElementById('root'));
 *****/

//using JSX -- creating React Element
// const container3 = (
//   <div className="title">
//     <h1>Akshay, you are the Best</h1>
//     <h2>Parcel is a beast</h2>
//     <h3> JSX is html like syntax , not a HTML coding </h3>
//   </div>
// );

// root.render(container3);

//using Functional Component:
// const Title_3 = function () {
//   return (
//     <div className="title_3">
//       <h1>Akshay, you are the Best</h1>
//       <h2>Parcel is a beast</h2>
//       <h3> JSX is html like syntax , not a HTML coding </h3>
//     </div>
//   );
// };

//Nested Functional Coponent
// const Title1 = (props) => {
//   return (
//     <>
//       {/* Nested componenet */}
//       <div className="title">
//         {/* Normal React ELement in JSX */}
//         {container3}
//         {/* Functional Component */}
//         <Title_3 />
//         <h1>React React React</h1>
//         <h2> {props.name} avoid learning, but</h2>
//         <h3>
//           React Loves {props.name} , she can not avoid, so she code in React
//         </h3>
//       </div>
//     </>
//   );
// };
// const element = <Title1 name="Roopa" />
// const Header = () => {
//   return (
//     <div className="nav_bar">
//     <div className="img_logo">
//     <img src={Logo} alt="Rise up"/>
//     </div>
//     <i class="fa fa-search" aria-hidden="true"></i>
//     <SearchBar />
//     <UserIcon />
//     </div>
// )
//   }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderBar />)
