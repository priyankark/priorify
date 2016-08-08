/**
 * Created by priyankark on 7/8/16.
 */

requests=new Meteor.Collection('requests');

Meteor.methods({
    addToRequests:function(listData){
        if(this.userId) {
            listData.userId=listData.email;
            var r_id = requests.insert(listData);
            return r_id;

        }



    }

});








