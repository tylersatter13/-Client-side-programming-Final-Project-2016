function findWords(){
    var startingText = document.getElementById("text").value;   
    var letters = [];
    var prefix = "";
    var post = [];
    var index= 0;
    var result=[];
    
    
  /*  prefix="a";
    post[0]="b";
    post[1]="c";
    post[2]="d";
    combinations(prefix,post,index);*/
    
    for ( var i = 0; i< startingText.length; i++){ 
    letters[i]=startingText.charAt(i);//returns string value at certain 
    }
    
    for (i= 0; i< startingText.length; i++){
    
        // document.write("B");
     prefix=letters[i];
     var x =0;

     for( x=0; x<= startingText.length-1; x++)
            {
      //          document.write("C");
              if (i === x){
            //      document.write("D");
        //           document.write(x);
               } 
                else{
          //          document.write("E");
                    post.push(letters[x]);
                    }  
        //     
            }
    
  combinations(prefix,post,index);
        prefix=prefix+post[i];
    /* for (var z= 0; z< post.length; z++)
            {
                 document.write(post[z]);
            
             }  */

    document.writeln();
     for (var z= 0; z<= post.length; z++)
            {
                 post.splice(0,2);
             }  
  
  
}    
}


function combinations(prefix, post, index){
    document.writeln(prefix);
    for(var i=0; i< post.length; i++){
        document.write(prefix + post[i]);
        document.writeln();
    }
    
     
    if(post.length >1) // only when the post array has more then one letter does it need to be flipped.
           {
             for(v = 0; v< post.length; v++){
              var temp=post[0];
               post.shift();
      if(post.length >2){
        document.write(prefix);
        for(r =0; r< post.length; r++){
                document.write(post[r]);
            }
                 document.writeln();
        }

            post.push(temp);
            
            document.write(prefix);
            for(r =0; r< post.length; r++){
                document.write(post[r]);
            }
            document.writeln();
             
             }
    if(post.length >2){ 
               post.reverse();
            for(v =0; v< post.length; v++){
                
                temp =post[0];
                post.shift();
            
            document.write(prefix);
           for(r =0; r< post.length; r++){
                document.write(post[r]);
            }
                 document.writeln();

            post.push(temp);
            
            document.write(prefix);
            for(r =0; r< post.length; r++){
                document.write(post[r]);
            }
            document.writeln();
             }
            }
           }
}
    