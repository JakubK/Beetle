var circles = document.querySelectorAll('#skills > div > svg > circle');
var radius;
var circumference;
var percent;
for (var i = 0; i < circles.length; i++)
{
    percent = circles[i].getAttribute('percent');
    radius = circles[i].r.baseVal.value;
    circumference = radius * 2 * Math.PI;
    circles[i].style.strokeDasharray = circumference;
    circles[i].style.strokeDashoffset = circumference - percent / 100 * circumference
}