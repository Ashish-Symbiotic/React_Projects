var bodyHeight = document.body;
               
                var outerDiv = document.getElementById("outerdiv");
                var outerDivOffsettop=outerDiv.offsetTop;
               
                var buttonDiv = document.getElementById("text");
                var buttonDivOffesttop=buttonDiv.offsetTop;
                var height= outerDiv.offsetHeight;
                var y = bodyHeight.scrollTop;
                console.log(outerDivOffsettop);
                console.log(y);
                console.log(buttonDivOffesttop);
            
            window.onscroll= function(){getData()};
            function getData(){
               
                var y = bodyHeight.scrollTop;
                
                if(window.pageYOffset >= outerDivOffsettop)
                {
                    console.log(y);
                    var x=buttonDivOffesttop-window.pageYOffset-height;
                    console.log(-x-50);
                        console.log("get to stikcy");
                        document.getElementById("imagescroll").style.transform = "translate("+x+"%,-50%)"; 
                        document.getElementById("img2").style.clipPath = "inset(0px  "+(-x+10)+"% 0px 0px)";
                }
            }