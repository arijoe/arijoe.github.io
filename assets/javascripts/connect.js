(function () {

  $.slideBar = function (el) {
    this.$el = $(el);
    this.initialize();
  };

  $.slideBar.prototype.initialize = function () {
    $(".logo").on("click", this.connect.bind(this));
    $("#connect").on("click", this.connect.bind(this));
    $(".sidebar").find(".avatar").on("click", this.connect.bind(this));
  };

  $.slideBar.prototype.connect = function () {
    $(".main").toggleClass("active");
    $(".sidebar").toggleClass("active");
  };

  $.fn.sideBar = function () {
    new $.slideBar(this);
  };
})();

$(document).on("ready", function () {
  $(".page").sideBar();
})
