

// import { Link,Outlet } from "react-router-dom";

// const Layout=()=>{
//     return(
//         <>
//     <Link to="home">Home</Link>
//     <Link to="about">About Us</Link>
//     <Link to="contact">Contact us</Link>

//     <hr size="4" color="red"/>
//    <Outlet/>

//     <hr size="4" color="red"/>

//     www.company.com
//         </>
//     )
// }
// export default Layout;


import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
    <Link to="home">Home</Link>
    <Link to="about">About Us</Link>
    <Link to="contact">Contact us</Link>

    <hr size="4" color="red"/>
   <Outlet/>

    <hr size="4" color="red"/>

    www.company.com
        </>
    )
}
export default Layout;