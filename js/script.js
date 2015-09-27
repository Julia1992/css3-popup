function viewFlashBox() {  

    // Alias of object.
    var self = this;

    // Initial array of processed classes.
    //this.classes = ['.error', '.warning', '.success'];
    this.classes = { 
      error: { selector: '.error'}, 
      warning: { selector: '.warning'}, 
      success: { selector: '.success'} 
    }
    
    // Hide all boxes method.
    this.hideBoxes = function () { 
      for(var i in this.classes) {
		$(this.classes[i].selector).removeClass('md-show');;
      }
    }
    
    // Main method to attach callbacks.
    this.boxAction = function (action, name) {
      return function(){
        if (action == 'show') {
          self.hideBoxes();
          $(name).addClass('md-show');
          //$(name).fadeIn("slow");
        }
        else if (action == 'hide') {
		  $(name).removeClass('md-show');
          //$(name).fadeOut("slow");
        }
      }
    }
    
    // Init method.
    this.init = function () { 
      for(var i in this.classes) {
        $(this.classes[i].selector + 'show')
          .click(self.boxAction('show', this.classes[i].selector));
        $(this.classes[i].selector + 'hide')
          .click(self.boxAction('hide', this.classes[i].selector));
      }
    } 
  
}
(function( $ ) {
   $(document).ready(function(){
      var flashBox = new viewFlashBox();
      flashBox.init();
   });
})( jQuery );
