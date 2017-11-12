var query = firebase.database().ref("protests/");

query.once("value")
  .then(function(dataSnapshot){
    var div = document.createElement("div");
    dataSnapshot.forEach(function(childSnapshot){
      childSnapshot.forEach(function(secondSnapshot){
        var key = secondSnapshot.key;
        console.log(key);
        var childData = secondSnapshot.val();

        if (key == "protest"){
          var childHolder = document.createElement('h3');
          var tempHolder = document.createTextNode(childData);
          div.appendChild(childHolder);
        }
        else if (key == "description"){
          var childHolder = document.createElement("p");
          var tempHolder = document.createTextNode(childData);
          childHolder.appendChild(tempHolder);
          div.appendChild(childHolder);

        }
        else if (key == "location"){
          var childHolder = document.createElement("p");
          var tempHolder = document.createTextNode(childData);
          childHolder.appendChild(tempHolder);
          div.appendChild(childHolder);

        }
        else if (key == "datetime"){
          var childHolder = document.createElement("p");
          var tempHolder = document.createTextNode(childData);
          childHolder.appendChild(tempHolder);
          div.appendChild(childHolder);
        }

        else if (key == "owner_uid"){
          var childHolder = document.createElement("p");
          var tempHolder = document.createTextNode(childData);
          childHolder.appendChild(tempHolder);
          div.appendChild(childHolder);
        }

      })

      //datetime, descitption, location, owner,protest,twitter
    });
    document.body.appendChild(div);


  });
