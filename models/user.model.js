var db=require('../database');

var User={

    getAllUsers:function(callback){
        return db.query("Select * from user",callback);
    },
    getUserById:function(id,callback){
        return db.query("select * from user where id=?",[id],callback);
    },
    addUser:function(User,callback){
        return db.query("Insert into user(name,type,email,password) values(?,?,?,?)",[User.name,User.type,User.email,User.password],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user where id=?",[id],callback);
    },
    updateUser:function(id,User,callback){
        return db.query("update user set name=? type=? email=? password=?  where id=?",[User.name,User.type,User.email,User.password,id],callback);
    }
}
module.exports=User;
