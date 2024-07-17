<!DOCTYPE html>
<html>
<head>
    <title>Speech Recognition Drawing</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
</head>
<body>
    <button onclick="start()">Start Recognition</button>
    <p id="status"></p>
    <script>
        var x = 0;
        var y = 0;
        var draw_circle = "";
        var draw_rect = "";
        var draw_triangle = "";
        var draw_polygon = "";
        var draw_star = "";
        var draw_cuboid = "";

        var speechRecognition = window.webkitSpeechRecognition;
        var recognition = new speechRecognition();

        function start(){
            document.getElementById("status").innerHTML="System is listening, please speak";
            recognition.start();
        }

        recognition.onresult = function(event){
            console.log(event);
            content = event.results[0][0].transcript;
            document.getElementById("status").innerHTML = "Speech has been recognized as - " + content;

            if(content == "circle"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_circle = "set";
            }

            if(content == "rectangle"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_rect = "set";
            }

            if(content == "triangle"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_triangle = "set";
            }

            if(content == "polygon"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_polygon = "set";
            }

            if(content == "star"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_star = "set";
            }

            if(content == "cuboid"){
                x = Math.floor(Math.random()*900);
                y = Math.floor(Math.random()*600);
                draw_cuboid = "set";
            }
        }

        function setup(){
            canvas = createCanvas(900, 600);
        }

        function draw(){
            if(draw_circle == "set"){
                radius = Math.floor(Math.random()*100);
                circle(x, y, radius);
                document.getElementById("status").innerHTML = "Circle is drawn";
                draw_circle = "";
            }

            if(draw_rect == "set"){
                rect(x, y, 100, 50);
                document.getElementById("status").innerHTML = "Rectangle is drawn";
                draw_rect = "";
            }

            if(draw_triangle == "set"){
                triangle(x, y, x+50, y-100, x+100, y);
                document.getElementById("status").innerHTML = "Triangle is drawn";
                draw_triangle = "";
            }

            if(draw_polygon == "set"){
                polygon(x, y, 50, 5);
                document.getElementById("status").innerHTML = "Polygon is drawn";
                draw_polygon = "";
            }

            if(draw_star == "set"){
                star(x, y, 30, 70, 5);
                document.getElementById("status").innerHTML = "Star is drawn";
                draw_star = "";
            }

            if(draw_cuboid == "set"){
                drawCuboid(x, y, 100, 50, 50);
                document.getElementById("status").innerHTML = "Cuboid is drawn";
                draw_cuboid = "";
            }
        }

        function polygon(x, y, radius, npoints) {
            let angle = TWO_PI / npoints;
            beginShape();
            for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius;
                let sy = y + sin(a) * radius;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }

        function star(x, y, radius1, radius2, npoints) {
            let angle = TWO_PI / npoints;
            let halfAngle = angle / 2.0;
            beginShape();
            for (let a = 0; a < TWO_PI; a += angle) {
                let sx = x + cos(a) * radius2;
                let sy = y + sin(a) * radius2;
                vertex(sx, sy);
                sx = x + cos(a + halfAngle) * radius1;
                sy = y + sin(a + halfAngle) * radius1;
                vertex(sx, sy);
            }
            endShape(CLOSE);
        }

        function drawCuboid(x, y, w, h, d) {
            beginShape();
            vertex(x, y);
            vertex(x + w, y);
            vertex(x + w, y + h);
            vertex(x, y + h);
            endShape(CLOSE);
            
            beginShape();
            vertex(x, y);
            vertex(x + d, y - d);
            vertex(x + w + d, y - d);
            vertex(x + w, y);
            endShape(CLOSE);
            
            beginShape();
            vertex(x + w, y);
            vertex(x + w + d, y - d);
            vertex(x + w + d, y + h - d);
            vertex(x + w, y + h);
            endShape(CLOSE);
            
            beginShape();
            vertex(x + w, y + h);
            vertex(x + w + d, y + h - d);
            vertex(x + d, y + h - d);
            vertex(x, y + h);
            endShape(CLOSE);
        }
    </script>
</body>
</html>
