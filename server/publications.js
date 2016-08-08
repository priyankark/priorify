/**
 * Created by priyankark on 7/8/16.
 */

Meteor.publish('list',function(){
    return list.find({userID: this.userID});
});

Meteor.publish('requests',function(){
    return requests.find({userID:this.userID});
});

