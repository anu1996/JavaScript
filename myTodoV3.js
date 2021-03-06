// Trello Version 3 in JS :

let myTodosMeet = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function (num) {
        this.meetings = this.meetings + num;
    },
    addMeetingDone:function (num) {
        this.meetings = this.meetings - num;
    } ,
    resetDay:function(){
        this.meetings = 0;
        this.meetDone = 0;
        return `Your day has been reseted, U have ${this.meetings} meetings and ${this.meetDone} done meetings.`
},
    summary: function () {
      return `You have ${this.meetings} meetings today!`
    }
}


let myTodosMeet1 = {
    day: 'Tuesday',
    meetings: 12,
    meetDone: 3,
    addMeeting: function () {
       // meetings = meetings;
    }

}

myTodosMeet.addMeeting(4)

//1. Handle meeting done
myTodosMeet.addMeetingDone(5)

console.log(myTodosMeet.summary())

//2. Create a fn that can reset entire day
console.log(myTodosMeet.resetDay())
//myTodosMeet1.addMeeting()
