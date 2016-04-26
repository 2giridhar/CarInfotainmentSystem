function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
	  document.getElementById()
      i++;                     //  increment the counter
      if (i%2 == 0) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 1000)
}

myLoop();                      //  start the loop
