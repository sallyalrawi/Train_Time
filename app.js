
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNNBSPJI__eQS2SOG8FctS8AL700H9YP4",
    authDomain: "chocho-3c065.firebaseapp.com",
    databaseURL: "https://chocho-3c065.firebaseio.com",
    projectId: "chocho-3c065",
    storageBucket: "chocho-3c065.appspot.com",
    messagingSenderId: "431471295360"
  };
  firebase.initializeApp(config);
//  Button for adding trains
  var database = firebase.database();
  $("#add-train").on("click", function(event) {
    event.preventDefault();

     // Grabs user input
       var trainName = $("#name-input").val().trim();
       console.log(trainName);
       var trainDistn = $("#destination-input").val().trim();
       console.log(trainDistn);
       var firstTrainTime= $("#time-input").val().trim();
       console.log(firstTrainTime);
       var frequency = $("#frequency-input").val().trim();
          console.log(frequency);
        
        // Creates local "temporary" object for holding train data
       var newTrain= {
        name: trainName,
        destination:trainDistn,
        trainTime:firstTrainTime,
        freq:frequency
      };

      // Uploads train data to the database
         database.ref().push(newTrain);

         // Logs to console
            console.log(newTrain.name);
            console.log(newTrain.destination);
            console.log(newTrain.trainTime);
            console.log(newTrain.freq);

        // Clears all of the text-boxes
            $("#name-input").val("");
            $("#destination-input").val("");
            $("#time-input").val("");
            $("#frequency-input").val("");
});

// //  Create Firebase event for adding train to the database and a row in the html when a user adds an entry
     database.ref().on("child_added", function(childSnapshot) {
         console.log(childSnapshot.val());

        var trainName     = childSnapshot.val().name;
        var trainDistn    = childSnapshot.val().destination;
        var firstTrainTime= childSnapshot.val().trainTime;
        var frequency     = childSnapshot.val(). freq;

          // Train Info
            console.log(trainName);
            console.log(trainDistn);
            console.log(firstTrainTime);
            console.log(frequency);

       // Prettify the train start???????
       
      //  moment().format("hh:mm");
      //  var frstTrTime = moment($("#time-input").val().trim().format("hh:mm));
          

        // Create the new row
            var newRow = $("<tr>").append(
                $("<td>").text(trainName),
                $("<td>").text(trainDistn),
                $("<td>").text(frequency),
                $("<td>").text(firstTrainTime)
               
            
            );

     // Append the new row to the table
         $("#train-schedule-table > tbody").append(newRow);
});



 

