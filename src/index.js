'use strict'
var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5;
 rectangle1={
    top:0,
    left:0,
    width:20,
    height:20
}
 rectangle2={
    top:10,
    left:10, 
    width:25,
    height:25
 }
  rectangle3={
    top:10,
    left:15, 
    width:20,
    height:20
 }
  rectangle4={
    top:10,
    left:10, 
    width:0,
    height:25
 }
  rectangle5={
    top:10,
    left:100, 
    width:5,
    height:5
 }


   var areIntersected=function(rectangle1,rectangle2){
       var x1=rectangle1.left;
       var y1=rectangle1.top;
       var x2=rectangle1.left+rectangle1.width;
       var y2=rectangle1.top-rectangle1.height;
       var x3=rectangle2.left;
       var y3=rectangle2.top;
       var x4=rectangle2.left+rectangle2.width;
       var y4=rectangle2.top-rectangle2.height;

      if(x3>=x2||x4<=x1||y3<=y2||y4>=y1) { 
         return false;//не пересекаются
      }
      else{
         return true;
      }
    };
console.log(areIntersected(rectangle1,rectangle2))
 
var rectangles=[rectangle2,rectangle3,rectangle4,rectangle5];


var filterVisible=function(rectangle1,rectangles){
    var array=rectangles.filter(function(el){
      if(areIntersected(rectangle1,el)&&(el.width*el.height!==0)){
          return(el)
        }
      })
    return(array);
  }
console.log(filterVisible(rectangle1,rectangles))

















