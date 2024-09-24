//your JS code here. If required.
let squares=document.getElementsByClassName("square");
squares=Array.from(squares);
squares.forEach((square)=>{
square.addEventListener("mouseover", (e)=>{
	squares.forEach((s)=>{
		s.style.backgroundColor="#6F4E37";
	})
	e.target.style.backgroundColor="#E6E6FA";
})
square.addEventListener("mouseout", (e)=>{
	squares.forEach((s)=>{
		s.style.backgroundColor="#E6E6FA";
		})
	})
	})
	// e.style.backgroudColor="#E6E6FA";
// })



	