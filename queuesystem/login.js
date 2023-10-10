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

	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		firebase
		.auth()
		.createUserWithEmailAndPassword(email.value, password.value)
		.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		firebase
		.auth()
		.signInWithEmailAndPassword(email.value, password.value)
		.then((user) => {
			window.location.href="http://localhost/queuesystem/counter.html";
		})
		.catch(e => alert(e.message));
				
	}
	
	
	function signOut(){
		
		firebase
		.auth()
		.signOut();
		alert("Signed Out");
		window.location.href="http://localhost/queuesystem/home.html";
		
	}

	function counterA(){

		window.location.href="http://localhost/queuesystem/counterA.html"

	}
	
	function counterB(){

		window.location.href="http://localhost/queuesystem/counterB.html"

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

			document.getElementById("insertA").addEventListener("click", function() {
                let loopV = document.getElementById("loopboxA").value;
                let numV = document.getElementById("numboxA").value;

                firebase
                    .database()
                    .ref("COUNTER B/CURRENT NUMBER")
                    .set({
                        i: numV,
                        
                    });


                 firebase
                    .database()
                    .ref("COUNTER B/" + loopV)
                    .remove();



            });

            document.getElementById("selectA").addEventListener("click", function(){
                let loopV = document.getElementById("loopboxA")
                    .value;
                let numV = document.getElementById("numboxA")
                    .value;

                firebase
                    .database()
                    .ref("COUNTER B/" +loopV)
                    .on("value", function(snapshot){

                        document.getElementById("numboxA")
                        .value = snapshot.val();

                        
                    });     

            });

            
