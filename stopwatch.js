var min=0
var second=0
var centisec=0

var s_min
var s_second
var s_cs

var a
var start=false
function add()
{
	centisec=centisec+1
	if (centisec>=100){
		centisec=0
		second++}
	if (second>=60)
	{
		second=0
		min++
	}
	if(min<10){
		s_min='0'+min
	}
	else
	{
		s_min=min.toString()
	}
	if(second<10){
		s_second='0'+second
	}
	else
	{
		s_second=second.toString()
	}
	if(centisec<10){
		s_cs='0'+centisec
	}
	else
	{
		s_cs=centisec.toString()
	}
	document.getElementById('p1').innerHTML=`${s_min}:${s_second}${s_cs}`
}
function start()
{
	if(start===false)
	{
		start=true
	a=setInterval(add(),10)
}
}
document.getElementById('p1').innerHTML=`${s_min}:${s_second}${s_cs}`

function reset()
{
	clearInterval(a)
	document.getElementById('p1').innerHTML="00:00:00"
	min=0
	second=0
	centisec=0
}


function pause()
{
	clearInterval(a)
}