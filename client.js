const net = require("net");

const connect = function () {

  console.log("Connecting ...");

  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: @@@');
    console.log("Connected");    


    for(let i = 0; i < 15; i++){
      setTimeout(()=>{
        conn.write('Move: up');
        console.log("Move up");
      }, 0+i*200);
      setTimeout(()=>{
        conn.write('Move: left')
        console.log("Move left");
      }, 500+i*200);
      setTimeout(()=>{
        conn.write('Move: down')
        console.log("Move down");
      }, 1000+i*200);      
      setTimeout(()=>{
        conn.write('Move: right')
        console.log("Move right");
      }, 1500+i*200);            
    }

  });

  // conn.on('data', (data) => {
  //   console.log('Server says: ', data);
  // });

  conn.on('data', (data) => {
    console.log('Server says: ', data);


  });

  return conn;
};

module.exports = connect;