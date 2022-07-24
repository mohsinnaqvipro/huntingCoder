// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  let myFile;
  let allBlogs = [];
  let data = await fs.promises.readdir("blogdata");
  //   console.warn(data);
  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    myFile = await fs.promises.readFile(`blogdata/${items}`);
    // console.warn(JSON.parse(myFile));
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);

  //   data.map((items) =>  {
  //     console.warn(items);
  //   });
}

//   fs.readdir("blogdata", "utf-8", (err, data) => {
//     console.warn("");
//     data.map((items) => {
//       console.warn(items);
//     });
//     // res.status(200).json(JSON.parse(data));
//     res.status(200).json(data);
//   });
