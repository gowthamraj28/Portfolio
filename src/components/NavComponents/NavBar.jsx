// import React from "react";

// const navLinks = [
//   {
//     href: "#about",
//     label: "About",
//   },
//   {
//     href: "#education",
//     label: "Education",
//   },
//   {
//     href: "#skills",
//     label: "Skills",
//   },
//   {
//     href: "#projects",
//     label: "Projects",
//   },
//   {
//     href: "#experience",
//     label: "Experience",
//   },
//   {
//     href: "#contact",
//     label: "Contact",
//   },
// ];

// const NavBar = () => {
//   return (
//     <div>
//       <div className="hidden md:flex items-center gap-1">
//         <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
//           {navLinks.map((link, i) => {
//             return (
//               <a
//                 href={link.href}
//                 key={i}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden glass-strong">
//         <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
//           {navLinks.map((link, i) => {
//             return (
//               <a
//                 href={link.href}
//                 key={i}
//                 className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
