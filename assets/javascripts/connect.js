(function () {

  $.slideBar = function (el) {
    this.$el = $(el);
    this.initialize();
  };

  $.slideBar.prototype.initialize = function () {
    $(".logo").on("click", this.connect.bind(this, false));
    $("#connect").on("click", this.connect.bind(this, true));
    $(".sidebar").find(".avatar").on("click", this.connect.bind(this, false));
  };

  $.slideBar.prototype.connect = function (option) {
    if (option && $(".sidebar").find(".active")[0] == null) {
      $(".main").addClass("active");
      $(".sidebar").addClass("active");
      $(".sidebar-info").addClass("active");
    } else if (option && !this.$el.scrollTop() == 0) {
      return;
    } else {
      $(".main").toggleClass("active");
      $(".sidebar").toggleClass("active");
      $(".sidebar-info").toggleClass("active");
    }
  };

  $.fn.sideBar = function () {
    new $.slideBar(this);
  };
})();

$(document).on("ready", function () {
  $(".page").sideBar();
})
