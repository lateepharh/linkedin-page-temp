const like = document.querySelectorAll("#like");
var i = 0;
function onClick(n){
   if (n = true){
      count.innerHTML = ++i;
   }
}
const count = document.getElementById("demo");
like.addEventListener("click", (n)=>{
   onClick(n);
})