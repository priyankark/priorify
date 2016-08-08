import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './toDotemplates.html';

/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

    */

/*Template.toDoList.rendered=function(){
  Session.setDefault('list',[
    {description:'Study for the chem exams'},
    {description: 'Hit the gym'}


  ]);



}; */

Template.toDoList.helpers({
  'list':function(){return list.find({}).fetch(); }
});

Template.toDoList.events(
{
  "submit .addToList": function (event) {

    event.preventDefault();
  Meteor.call('addToList',{
    description:event.target.description.value
  })

}
}
);

/*Template.requests.rendered=function(){
  Session.setDefault('requests',[
    {description:'Meeting at 2pm'},
    {description: 'Date'}


  ]);



};


Template.requests.helpers({
  'requests':function(){return Session.get('requests'); }
});

*/

Template.requests.helpers({
    'requests':function(){return requests.find().fetch(); }
});

Template.addToRequests.events(
    {
        "submit .sendRequest": function (event) {

            event.preventDefault();
            Meteor.call('addToRequests',{
                email:event.target.email.value,
                description:event.target.description.value
            })

        }
    }
);
