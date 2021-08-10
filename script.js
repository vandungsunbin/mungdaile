var diemDanh = document.getElementById("current");
var notiScreen  = document.getElementById("noti");
var status = 0;

diemDanh.addEventListener("click",function(){
	if(status==0)
		notiScreen.style.display = "flex";
	this.classList.add("active");
	status=1;
})

var xacNhan = document.getElementById("confirm");
xacNhan.addEventListener("click",function(){
	notiScreen.style.display = "none";
})

window.onresize = function(){
	console.log(window.innerWidth, window.innerHeight);
}