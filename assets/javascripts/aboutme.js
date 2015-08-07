(function(){

  $.WaitCat = function(el){
    this.$el = $(el);
    this.bindEvents();
  }

  $.WaitCat.prototype.bindEvents = function(){
    this.$el.find("button").on("click", this.clickButton.bind(this));
  }

  $.WaitCat.prototype.clickButton = function(event){
    this.$el.find(".window").toggleClass("active");
  }

  $.fn.waitCatify = function(){
    return this.each(function(){
      new $.WaitCat(this);
    });
  };

})();

$(document).on("ready", function(){
  $(".wait-for-cat").waitCatify();
});
