a=5
node1=document.createElement('ol')
function func1()
{
	var c=a+5;
	a=c;
	node2=document.createElement('li')
	node3=document.createTextNode(c)
	node4=document.getElementById('p1')
	node2.append(node3);
	node1.append(node2);
	node4.append(node1);

}