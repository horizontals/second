const makefriends=()=>{
	alert("........");
	const btn=document.getElementById("btn");
	btn.innerHTML="We are FRIENDS!!!!";
	const table=document.getElementById("table");
	table.innerHTML="female";
	table.style.color="red";
}

window.onload=setup=()=>{
	const table=document.getElementById("table");
	table.innerHTML="&nbsp;&nbsp;&ensp;male";
}

setup();
