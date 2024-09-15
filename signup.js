function Signup(){
	let tel=document.getElementById('tel').value;
	let username=document.getElementById("username").value
	let password=document.getElementById("password").value;
	let repassword=document.getElementById("repassword").value;
	if(tel.match(/[a-zA-Z]/g)!=null){
		alert("Enter the correct telephone number");
	}
	else if(username.length<5){
		alert("user name must at least 6 characters");
	}
	else if(password!=repassword){
		alert("Error in Password conformation");
	}
	
}
