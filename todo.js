// getting elements from html page
var tname = document.querySelector('input');
var butn = document.querySelector('button');
var tasks = document.querySelector('ul');

var div = document.querySelector('div');
var detail = document.querySelector('p');

butn.onclick = newtask;

// create elements fro new task 
function newtask() {
	var main = document.createElement('li');
	tasks.prepend(main);
	var chkbox = document.createElement('input');
	main.appendChild(chkbox);
	var text = document.createElement('h3');
	main.appendChild(text);
	var butn2 = document.createElement('button');
	main.appendChild(butn2)
	chkbox.type= "Checkbox";
	text.textContent = tname.value ? tname.value : "Undefined Task";
	text.style.display = "inline";
	butn2.textContent = "Remove"
	
	chkbox.onclick = addtocomplete;
	butn2.onclick = removefromlist;
	
}

// complete task action
function addtocomplete(evt) {
	let select = evt.target;
	if(select.checked)
	{
		tasks.appendChild(select.parentNode);
		select.nextSibling.style.textDecoration = 'line-through';
	}
	else
	{
		tasks.prepend(select.parentNode);
		select.nextSibling.style.textDecoration = 'none';
	}
}

// delete task action
function removefromlist(evt)
{
		tasks.removeChild(evt.target.parentNode);
}

// initialize google map
function initmap() {
	new google.maps.Map(
        div, {
            zoom: 8,
            center: {
        lat: 44.350649, 
        lng: -79.712588
    }
        })
}

// add location
navigator.geolocation.getCurrentPosition((details) => {
	detail.textContent = "Your Exact Location have been traced as : Latitude = "+details.coords.latitude + " , Longitude = "+details.coords.longitude;
	var link = document.createElement('a');
	link.textContent = "View";
	link.href = "https://www.openstreetmap.org/#map=15/"+details.coords.latitude+"/"+details.coords.longitude;
	var br = document.createElement('br');
	detail.appendChild(br);
	detail.appendChild(link);
	});