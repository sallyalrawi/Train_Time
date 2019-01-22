
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-_orkNuNUHamDNxucvu5HmwnocMNSb1I",
    authDomain: "train-time-2320f.firebaseapp.com",
    databaseURL: "https://train-time-2320f.firebaseio.com",
    projectId: "train-time-2320f",
    storageBucket: "train-time-2320f.appspot.com",
    messagingSenderId: "581033713776"
  };
  firebase.initializeApp(config);
//  Button for adding trains
  var database = firebase.database();
  $("#add-train").on("click", function(event) {
    event.preventDefault();

     // Grabs user input
       var trainName = $("#name-input").val().trim();
    //    console.log(trainName);
       var trainDistn = $("#destination-input").val().trim();
    //    console.log(trainDistn);
       var frstTrTime = moment($("#time-input").val().trim(), "hh:mm am/pm").format("X");
    //    console.log(firstTrainTime);
       var freq = $("#frequency-input").val().trim();
        //   console.log(frequency);
        
        // Creates local "temporary" object for holding train data
       var newTrain = {
        name: trainName,
        destination:trainDistn,
        firstTrainTime:frstTrTime,
        frequency: freq
      };

      // Uploads employee data to the database
         database.ref().push(newTrain);

         // Logs to console
            console.log(newTrain.trainName);
            console.log(newTrain.destination);
            console.log(newTrain.firstTrainTime);
            console.log(newTrain.frequency);

        // Clears all of the text-boxes
            $("#name-input").val("");
            $("#destination-input").val("");
            $("#time-input").val("");
            $("#frequency-input").val("");
});

//  Create Firebase event for adding train to the database and a row in the html when a user adds an entry
     database.ref().on("child_added", function(childSnapshot) {
         console.log(childSnapshot.val());

        var trainName  = childSnapshot.val().name;
        var trainDistn = childSnapshot.val().destination;
        var frstTrTime = childSnapshot.val().firstTrainTime;
        var freq       = childSnapshot.val(). frequency;

          // Train Info
            console.log(trainName);
            console.log(trainDistn);
            console.log(frstTrTime);
            console.log(freq);

       // Prettify the train start???????
          var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

        // Create the new row
            var newRow = $("<tr>").append(
                $("<td>").text(trainName),
                $("<td>").text(trainDistn),
                $("<td>").text(frstTrTime),
                $("<td>").text(frstTrTime),
                $("<td>").text( freq  )
            
            );

     // Append the new row to the table
         $("#train-schedule-table > tbody").append(newRow);
});



 

