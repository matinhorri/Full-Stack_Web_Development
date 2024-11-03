var mysql = require("mysql");

var connPool = mysql.createPool({
    connectionLimit : 5,
    host: "cse-mysql-classes-01.cse.umn.edu",
    user: "C4131F22U40",
    database: "C4131F22U40",
    password: "1995" // we really shouldn't be saving this here long-term.
  });
//host: "127.0.0.1",
  function getlist(){
    return new Promise((resolve, reject) => {
        const sql = "select * from todo order by task_id desc";
        connPool.query(sql, (err, rows) => {
          if(err){
          reject(err);
        } else if(rows.length>0){
            resolve(rows);
        } else {
          resolve(undefined);
        }
        })
      })
    }
  exports.getlist=getlist;

  function newtask(title, date, priority, message, status){
    return new Promise((resolve, reject) => {
        const sql = "insert into todo (title, date, priority, message, status) values (?, ?, ?, ?, 'not_done')";
        connPool.query(sql, [title, date, priority, message, status], (err, rows) => {
          if (err) {
            reject(err);
          } else if(rows.length>0){
              resolve(rows);
          } else {
            resolve(undefined);
          }
        })
      })
    }
   exports.newtask=newtask;

   function deletetask(title){
    return new Promise((resolve, reject) => {
        const sql = "delete from todo WHERE title = ?";
        connPool.query(sql, [title], (err, rows) => {
          if (err) {
            reject(err);
          } else if(rows.length>0){
              resolve(rows);
          } else {
            resolve(undefined);
          }
        })
      })
    }
   exports.deletetask=deletetask;

  
   function notdone(){
    return new Promise((resolve, reject) => {
        const sql = "select * from todo WHERE status = 'not_done'";
        connPool.query(sql, (err, rows) => {
          if(err){
          reject(err);
        } else if(rows.length>0){
            resolve(rows);
        } else {
          resolve(undefined);
        }
        })
      })
    }
  exports.notdone=notdone;

  function done(){
    return new Promise((resolve, reject) => {
        const sql = "select * from todo WHERE status = 'done'";
        connPool.query(sql, (err, rows) => {
          if(err){
          reject(err);
        } else if(rows.length>0){
            resolve(rows);
        } else {
          resolve(undefined);
        }
        })
      })
    }
  exports.done=done;

  function changedone(title){
    return new Promise((resolve, reject) => {
        const sql = "Update todo set status = 'done' where title = ?";
        connPool.query(sql, [title], (err, rows) => {
          if (err) {
            reject(err);
          } else if(rows.length>0){
              resolve(rows);
          } else {
            resolve(undefined);
          }
        })
      })
    }
   exports.changedone=changedone;

   function changenotdone(title){
    return new Promise((resolve, reject) => {
        const sql = "Update todo set status = 'not_done' where title = ?";
        connPool.query(sql, [title], (err, rows) => {
          if (err) {
            reject(err);
          } else if(rows.length>0){
              resolve(rows);
          } else {
            resolve(undefined);
          }
        })
      })
    }
   exports.changenotdone=changenotdone;

  //  async function test() {
  //      console.log(await done())
  //  }
  //  test();

//    async function test() {
//     await deletetask('Task_1')
//     console.log(await getlist())
// }
// test();