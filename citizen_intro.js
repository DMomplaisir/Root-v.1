var query = firebase.database().ref("protests/").limitToLast(20);

query.once("value")
  .then(function(snapshot){
    var div = document.createElement("div");

    snapshot.forEach(function(childSnapshot){
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      if (key == "protest"){
        var childHolder = document.createElement("h3");
        var tempHolder = document.createTextNode(childData);
        childHolder.appendChild(tempHolder);
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
      else {
      }

      //datetime, descitption, location, owner,protest,twitter
    });
    document.body.appendChild(div);

  });
