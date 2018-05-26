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

var introduction = document.getElementById('introduction');
document.getElementById("link-introduction").addEventListener('click', function (e)
{
    e.preventDefault();
    introduction.scrollIntoView({ block: 'start', behavior: "smooth" });
});

var portfolio = document.getElementById('portfolio');
document.getElementById("link-portfolio").addEventListener('click', function (e) {
    e.preventDefault();
    portfolio.scrollIntoView({ block: 'start', behavior: "smooth" });
});

var contact = document.getElementById('contact');
document.getElementById("link-contact").addEventListener('click', function (e) {
    e.preventDefault();
    contact.scrollIntoView({ block: 'start', behavior: "smooth" });
});

var profession = document.getElementById('profession');
document.getElementById('arrowButton').addEventListener('click', function (e) {
    profession.scrollIntoView({ block: 'start', behavior: "smooth" });
});