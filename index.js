import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//new Date (Year, Month,day hours minutes ,);
 let currdate=new Date();
//  const curdate=new Date(currdate.getFullYear(),currdate.getMonth()+1,currdate.getDate());
 currdate =currdate.getHours();
 let greeting ="";
 let backgroundImage = ""; 
  const cssStyle={

 };

const css1={
  backgroundImage: backgroundImage,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
if(currdate >= 1 && currdate <= 12)
{
  greeting= "Good Morning";
  cssStyle.color= "Green";
  css1.backgroundColor="red";
   //  backgroundImage = "url('./Images/m1.jpg')"; // Set the background image for night
}
  

else if(currdate >=12 && currdate <=19)
{
  greeting= "Good Afternoon";
  cssStyle.color="Orange";
  css1.backgroundColor="#ADD8E6";

  //  backgroundImage = "url('./Images/a2.jpg')"; // Set the background image for night

}
else{
  greeting= "Good Night";
  cssStyle.color="black";
  css1.backgroundColor="gray";

  // backgroundImage = "url('./Images/n3.jpg')";

}
// css1.backgroundImage = backgroundImage; // Set the git add .



ReactDOM.render(
 
 < div style={css1}>
 <div className="container">
 <div className="H1">
  <h1>
    Hello Sir , <span style={cssStyle}> {greeting}</span>
  </h1> 
  </div>
  <div className="H2">
  <h1>
    Hello Sir , <span style={cssStyle}> {greeting}</span>
  </h1> 
  </div>
  <div className="H3">
  <h1>
    Hello Sir , <span style={cssStyle}> {greeting}</span>
  </h1> 
  </div>
  </div>
  </div>,document.getElementById("root")
);