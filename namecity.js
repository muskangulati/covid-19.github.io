arr =[]
function getel()
{
	var obj={
		name: String,
		city: String
	};
	obj.name=document.getElementById("p1").value
	obj.city=document.getElementById("p2").value
	document.getElementById("p1").value=""
	document.getElementById("p2").value=""
	arr.push(obj)
	return False
}

function print()
{
	
	console.log(arr)
}