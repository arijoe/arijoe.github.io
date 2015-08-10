(function () {

  $.slideBar = function (el) {
    this.$el = $(el);
    this.initialize();
  };

  $.slideBar.prototype.initialize = function () {
    $(".logo").on("click", this.aboutMe.bind(this));
    $("#aboutme").on("click", this.aboutMe.bind(this));
  };

  $.slideBar.prototype.aboutMe = function () {
    $(".main").toggleClass("active");
    $(".sidebar").toggleClass("active");

    // this.$el.css("width");
  };

  $.fn.sideBar = function () {
    new $.slideBar(this);
  };
})();

$(document).on("ready", function () {
  $(".page").sideBar();
})
