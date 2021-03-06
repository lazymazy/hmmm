

Meteor.startup(function () {
 createCoursesIfNone();
});


/*
Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("parties", function () {
  return Parties.find(
    {$or: [{"public": true}, {invited: this.userId}, {owner: this.userId}]});
});

*/

function createCoursesIfNone(){
    // erstelle neue Kurse, wenns keine in der DB hat
    if (Courses.find().count() === 0) {
        createCourses();
    }
}




function createCourses(){
    // erstelle ein String-Array f�r die Namen der Kurse
    var names = ["ASZ Geek-Noob-Nerd Treffen",
                 "Deutschkurs",
                 "Photoshop für Fortgeschrittene",
                 "Onanie",
                 "Nikola Tesla - Ein Leben in Einsamkeit",
                 "Unbenannter Kurs"];

    //erstelle ein String-Array f�r die Kursbeschreibungen
    var description = ["ein treffen für alle die sich für technologie und so interessieren",
                 "German: Ja, Nein, Vielleicht, Gut gut.",
                 "How to put the Bling-Effect.",
                 "DIY or DIE!",
                 "Wir werden einen Text über Nikola Teslas Kindheit lesen, anhand dessen wir sein Werk in in einen Historischen Kontext zu stellen versuchen.",
                 "Bitte hier Kursbeschreibung eintragen"];

    // erstelle so viele Kurse, wie der Namens-Array lang ist
    for (var i = 0; i < names.length; i++)
      Courses.insert({name: names[i], description: description[i], score: Math.floor(Random.fraction()*10)*5});
}

