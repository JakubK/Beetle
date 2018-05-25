var circles = document.querySelectorAll('#skills > div > div > svg > circle');
var radius;
var circumference;
var percent;
for (var i = 0; i < circles.length; i++)
{
    percent = circles[i].getAttribute('percent');
    radius = circles[i].r.baseVal.value;
    circumference = radius * 2 * Math.PI;
    circles[i].style.strokeDasharray = circumference;
    circles[i].style.strokeDashoffset = circumference - percent / 100 * circumference;
}


var navigationElements = document.querySelectorAll("#navigation > li");
var j = 0;
navigationElements.forEach(function()
{
    var d = j;
    navigationElements[d].addEventListener('click',function(e)
    {
        e.preventDefault(); //prevent default scroll
        ScrollToSection(navigationElements[d].childNodes[0]);
        MapNavigation(d,navigationElements); //assign 'active' class only to the clicked element
    },false);
    j++;
});

function MapNavigation(tIndex, navigationElements)
{
    navigationElements.forEach(function(x,navigationElements)
    {
        x.classList.remove('active');
    });
    navigationElements[tIndex].classList.add('active');
}

var element;

function ScrollToSection(link)
{
    if(link != '')
    {
        link = link.getAttribute('href').substring(1);

        if(link == '')
        {
            element = document.getElementsByTagName("header")[0];
        }
        else
        {
            element = document.getElementById(link);            
        }

        if(element !== null)
        {
            element.scrollIntoView({block : 'start',behavior : 'smooth'});
            element.scrollTop -= 30;            
        }
    }
}

document.querySelector('#arrowButton').addEventListener('click',function(e)
{
    e.target.scrollIntoView({block : 'start',behavior : 'smooth'});
    e.target.scrollTop -= 30;   
});