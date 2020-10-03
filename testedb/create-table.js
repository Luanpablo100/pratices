//Utilizando um servidor local MySql

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : 'qwert12345',
  database : 'inventory'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Conectou!');
  addRows(connection);
})

function createTable(conn){
 
  const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
              "ID int NOT NULL AUTO_INCREMENT,\n"+
              "Nome varchar(150) NOT NULL,\n"+
              "CPF char(11) NOT NULL,\n"+
              "PRIMARY KEY (ID)\n"+
              ");";
  
  conn.query(sql, function (error, results, fields){
      if(error) return console.log(error);
      console.log('criou a tabela!');
  });
}

function addRows(conn){
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
      ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}