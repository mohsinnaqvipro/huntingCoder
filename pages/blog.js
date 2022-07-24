// ********** useEffect rendering **********

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
// // import Slug from "./blogpost/[slug]";

// // Step 1: Collect all the files from blogdata directory
// // Step 2: Iterate through the and Display them

// const Blog = () => {
//   const [first, setfirst] = useState([]);
//   useEffect(() => {
//     // console.warn("This is useEffect running");
//     fetch("http://localhost:3000/api/blog")
//       .then((a) => {
//         return a.json();
//       })
//       .then((parsed) => {
//         // console.warn(parsed);
//         setfirst(parsed);
//       });
//   }, []);

//   return (
//     <div>
//       {/* <h1>This is blog page</h1> */}
//       {/* <div className={styles.container}>
//         <main className={styles.main}> */}
//       {first.map((blogitems) => {
//         return (
//           <div key={blogitems.title}>
//             <div className={styles.container}>
//               <main className={styles.main}>
//                 <Link href={`/blogpost/${blogitems.slug}`}>
//                   <h2 className={styles.link_h2}>{blogitems.title}</h2>
//                 </Link>
//                 <p className={styles.link_p}>
//                   {blogitems.contact.substr(0, 200)}...
//                 </p>
//               </main>
//             </div>
//           </div>
//         );
//       })}
//       {/* <div className="blogs">
//             <div className="blogitem">
//               <h1>Popular Blogs</h1>
//               <Link href={"/blogpost/learn-javascript"}>
//                 <h2 className={styles.link_h2}>
//                   How to learn Javascript in 2022?
//                 </h2>
//               </Link>
//               <p>Javascript is a language used to design logic for the web</p>
//               <Link href={"/blogpost/learn-javascript"}>
//                 <h2 className={styles.link_h2}>
//                   How to learn Javascript in 2022?
//                 </h2>
//               </Link>
//               <p>Javascript is a language used to design logic for the web</p>
//               <Link href={"/blogpost/learn-javascript"}>
//                 <h2 className={styles.link_h2}>
//                   How to learn Javascript in 2022?
//                 </h2>
//               </Link>
//               <p>Javascript is a language used to design logic for the web</p>
//             </div>
//           </div> */}
//       {/* </main>
//       </div> */}
//     </div>
//   );
// };
// export default Blog;

// ********** server side rendering **********

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import fs from "fs";
// import Slug from "./blogpost/[slug]";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  // console.warn(props);
  const [first, setfirst] = useState(props.allBlogs);
  // useEffect(() => {
  //   // console.warn("This is useEffect running");
  //   fetch("http://localhost:3000/api/blog")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       // console.warn(parsed);
  //       setfirst(parsed);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>This is blog page</h1> */}
      {/* <div className={styles.container}>
        <main className={styles.main}> */}
      <div className={styles.margin}></div>
      {first.map((blogitems) => {
        return (
          <div key={blogitems.title}>
            {/* <div className={styles.margin}></div> */}
            <div className={styles.container}>
              <main className={styles.main}>
                <Link href={`/blogpost/${blogitems.slug}`}>
                  <h2 className={styles.link_h2}>{blogitems.title}</h2>
                </Link>
                <p className={styles.link_p}>
                  {blogitems.mediadesc.substr(0, 200)}...
                </p>
                <hr className={styles.full} />
              </main>
            </div>
          </div>
        );
      })}
      {/* <div className="blogs">
            <div className="blogitem">
              <h1>Popular Blogs</h1>
              <Link href={"/blogpost/learn-javascript"}>
                <h2 className={styles.link_h2}>
                  How to learn Javascript in 2022?
                </h2>
              </Link>
              <p>Javascript is a language used to design logic for the web</p>
              <Link href={"/blogpost/learn-javascript"}>
                <h2 className={styles.link_h2}>
                  How to learn Javascript in 2022?
                </h2>
              </Link>
              <p>Javascript is a language used to design logic for the web</p>
              <Link href={"/blogpost/learn-javascript"}>
                <h2 className={styles.link_h2}>
                  How to learn Javascript in 2022?
                </h2>
              </Link>
              <p>Javascript is a language used to design logic for the web</p>
            </div>
          </div> */}
      {/* </main>
      </div> */}
    </div>
  );
};
export async function getServerSideProps(context) {
  //server side rendering
  // export async function getStaticProps(context) {
  let data = await fetch("http://localhost:3000/api/blog"); //server side rendering
  let allBlogs = await data.json(); //server side rendering

  // let myFile;
  // let allBlogs = [];
  // let data = await fs.promises.readdir("blogdata");
  // //   console.warn(data);
  // for (let index = 0; index < data.length; index++) {
  //   const items = data[index];
  //   myFile = await fs.promises.readFile(`blogdata/${items}`);
  //   // console.warn(JSON.parse(myFile));
  //   allBlogs.push(JSON.parse(myFile));
  // }
  return {
    props: {
      allBlogs, // will be passed to the page component as props
    },
  };
}
export default Blog;
