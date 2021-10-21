function Spot(i,j){
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.i = i;
  this.j = j;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if(random() < 0.5){
    this.wall = true;
  }

  this.show = function(col){
    fill(col);
    if(this.wall){
      fill(0);
    }
    noStroke();
    rect(this.i * w,this.j * h,w -1,h-1);
  }

  this.addNeighbors = function(grid){
    var i = this.i;
    var j = this.j;
    if(i > 0){
      this.neighbors.push(grid[i - 1][j]);
    }
    if(i < cols - 1){
      this.neighbors.push(grid[i + 1][j]);
    }
    if(j > 0){
      this.neighbors.push(grid[i][j - 1]);
    }
    if(j < rows - 1){
      this.neighbors.push(grid[i][j + 1]);
    }
    //diagonal
    if(i > 0 && j > 0){
      this.neighbors.push(grid[i -1][j -1]);
    }
    if(i < cols - 1&& j >0){
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if(i > 0 && j < rows - 1){
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if(i < cols - 1 && j < rows - 1){
      this.neighbors.push(grid[i + 1][j + 1]);
    }
  }

}
