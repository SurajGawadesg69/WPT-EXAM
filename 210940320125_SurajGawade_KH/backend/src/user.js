const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function connectionCheck() {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("Connection SUCCESS!!!!");

  await Connection.endAsync();
}

async function addRecord(user) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("Connection SUCCESS!!!!");

  const sql = `INSERT INTO user (sender,reciever,msg) VALUES  (?,?,?) `;
  await Connection.queryAsync(sql, [user.sender, user.reciever,user.msg]);

  await Connection.endAsync();
  console.log("Record Added!!");
}

async function getRecord(user) {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("Connection SUCCESS!!!!");

  const sql = `select * from user` ;
  const list=await Connection.queryAsync(sql, []);

  await Connection.endAsync();
  
  console.log(list);
  return list;
}

module.exports={addRecord,getRecord};
