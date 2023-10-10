// Your web app's Firebase configuration
  var firebaseConfig = {

	apiKey: "AIzaSyCZZWJW6NWf8S2L-pSPWsip4rdlSxALp0E",
    authDomain: "queue-system-65796.firebaseapp.com",
    databaseURL: "https://queue-system-65796.firebaseio.com",
    projectId: "queue-system-65796",
    storageBucket: "queue-system-65796.appspot.com",
    messagingSenderId: "403176121088",
    appId: "1:403176121088:web:ef9170a100bc3e6dcbc9e5",

};
  // Initialize Firebase
  	firebase.initializeApp(firebaseConfig);

	
	
	function signOut(){
		
		firebase
		.auth()
		.signOut();
		alert("Signed Out");
		window.location.href="http://localhost/queuesystem/home.html";
		
	}


	firebase
	.auth()
	.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}	
		
	});

			document.getElementById("insertB").addEventListener("click", function() {
                let loopV = document.getElementById("loopboxB").value;
                let numV = document.getElementById("numboxB").value;

                firebase
                    .database()
                    .ref("COUNTER A/CURRENT NUMBER")
                    .set({
                        i: numV,
                        
                    });


                 firebase
                    .database()
                    .ref("COUNTER A/" + loopV)
                    .remove();



            });

            document.getElementById("selectB").addEventListener("click", function(){
                let loopV = document.getElementById("loopboxB")
                    .value;
                let numV = document.getElementById("numboxB")
                    .value;

                firebase
                    .database()
                    .ref("COUNTER A/" +loopV)
                    .on("value", function(snapshot){

                        document.getElementById("numboxB")
                        .value = snapshot.val();

                        
                    });     

            });