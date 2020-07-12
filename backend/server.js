const csv = require("csv-parser");
// const fs = require("fs");
const results = [];

const fs = require("fs").promises;

/**
 * ファイルの内容を表示
 *
 * @param {string} file ファイルパス
 */

let data;
const displayFile = async (file) => {
  try {
    const buff = await fs.readFile(file, "utf-8");
    return buff;
  } catch (e) {
    console.log(e.message);
  }
};

// 実行

// let result = () => {
//   fs.createReadStream("../data/season-1819_csv.csv")
//     .pipe(csv())
//     .on("data", (data) => results.push(data))
//     .on(
//       "end",
//       () => results
//       // [
//       //   { NAME: 'Daffy Duck', AGE: '24' },
//       //   { NAME: 'Bugs Bunny', AGE: '22' }
//       // ]
//     );
// };

const http = require("http");
const server = http.createServer();

displayFile("../data/season-1819_csv.csv").then((response) =>
  server.on("request", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(response);
    res.end();
  })
);

// function getdata(num) {
//   return num * num;
// }
// getdata(2); //output 4

const getdata = (num) => num * num;

let get = getdata(2);
console.log(get);
// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(3000);
