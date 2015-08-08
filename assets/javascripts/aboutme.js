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

(function () {

  $.slideBar = function (el) {
    this.$el = $(el);
    this.initialize();
  };

  $.slideBar.prototype.initialize = function () {
    $(".logo").on("click", this.aboutMe.bind(this));
  };

  $.slideBar.prototype.aboutMe = function () {
    $(".main").toggleClass("active");
    $(".sidebar").toggleClass("active");
    console.log($(".main"));
  };

  $.fn.sideBar = function () {
    new $.slideBar(this);
  };
})();

$(document).on("ready", function(){
  $(".wait-for-cat").waitCatify();
});

$(document).on("ready", function () {
  $(".content").sideBar();
})
