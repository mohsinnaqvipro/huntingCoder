// // **********useEffect rendering**********

// import React, { useEffect, useState } from "react";
// import styles from "../../styles/Home.module.css";
// import { useRouter } from "next/router";

// // Step 1: Find the files corresponding to the slug
// // Step 2: Populate them inside the page

// const Slug = () => {
//   const [first, setfirst] = useState();
//   const router = useRouter();
//   // const { slug } = router.query;
//   useEffect(() => {
//     if (!router.isReady) {
//       return;
//     }
//     const { slug } = router.query;
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//       .then((a) => {
//         return a.json();
//       })
//       .then((parsed) => {
//         setfirst(parsed);
//       });
//   }, [router.isReady]);

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1>{first && first.title}</h1>
//         <p className={styles.link_p}>
//           {first && first.contact.substr(0, 150)}...
//         </p>
//       </main>
//     </div>
//   );
// };

// export default Slug;

// ********** server side rendering **********

import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
// import fs from "fs";
// import { useRouter } from "next/router";

// Step 1: Find the files corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
  // <div className={styles.margin}></div>;
  function createMarkup(c) {
    return { __html: c };
  }
  const [first, setfirst] = useState(props.myBlog);
  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   }
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setfirst(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <div className={styles.margin}></div>
      <main className={styles.main}>
        <h1>{first && first.title}</h1>
        <hr />
        <div className={styles.link_p}>
          {/* {first && first.mediadesc.substr(0, 150)}... */}
          {first && (
            <div dangerouslySetInnerHTML={createMarkup(first.code)}></div>
          )}
        </div>
      </main>
    </div>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "how-to-learn-flask" } },
//       { params: { slug: "how-to-learn-javascript" } },
//       { params: { slug: "how-to-learn-nextjs" } },
//     ],
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`); // server side rendering
  let myBlog = await data.json(); // server side rendering
  // let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: {
      // myBlog: JSON.parse(myBlog),
      myBlog,
    },
  };
}

export default Slug;
