/**
 * Created by priyankark on 7/8/16.
 */

list=new Meteor.Collection("list");

Meteor.methods({
  addToList:function(listData){
      if(this.userId) {
          listData.userId=this.userId;
          var l_id = list.insert(listData);
          return l_id;

      }



  }

});


/*
 Meteor.methods({
 addBook: function(bookData) {
 if (this.userId) {
 bookData.userID = this.userId;
 var bookID = Books.insert(bookData);
 return bookID;
 }
 }
 });
 */