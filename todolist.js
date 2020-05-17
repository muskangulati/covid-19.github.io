var arr=[]
var node=document.createElement('ul')
function updatedom()
{
 var nodel=document.getElementById('p2').innerHTML=" "
 for (let i=0;i<arr.length;i++)
 {
 	if (arr[i].present===true)
 	{
 		var node1=document.createElement('l1')
 		var node2=document.createElement('button')
 	    node2.append('Done')
 		var node4=document.createTextNode(arr[i].sentence)
 		node2.onclick=function func()
 		{
 			arr[i].present=false
 			updatedom();
 		}
 		node.append(node1);
 		node.append(node4);
 		node.append(node2);
 		nodel.append(node);


 	}
 }
}
function func1()
{
	var obj={
		sentence:String,
		present:Boolean
	}
	obj.sentence=document.getElementById('p1').value
	document.getElementById('p1').value=" "
	obj.present=true
	arr.push(obj)
	updatedom();
	return false

}