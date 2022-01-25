

function setup() {
      createCanvas(0.5*windowWidth, 300, WEBGL);
      //light();
  }
    
  function draw() {
      background(255);
      fill(255);
      camera(mouseX-width/2, mouseY-height/2, 50, 0, 0, 0, 0, 1, 0);
      //translate(width/2, height/2);
    
    
      /*Control Panel*/
      let total = 2;
      let r = 25;
      let space = 1;
    

    
      /*Iterate through all the (longitude, latitude) 
      points and map them to (x, y, z) points*/
      for(i = 0; i <total; i+=space){ /*Longitude values*/
        let lon = map(i, 0, total, -PI, PI);
        
        for(j = 0; j <total; j+=space){ /*Latitude values*/
          let lat = map(j, 0, total, -HALF_PI, HALF_PI);

           
          let x = r * sin(lon) * cos(lat);
          let y = r * sin(lon) * sin(lat);
          let z = r * cos (lon);
          
          /*now, to draw the sphere*/
          stroke(1);
          strokeWeight(11.5);
          point(x, y, z);
        }
        
      }
    
  }