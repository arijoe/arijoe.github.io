(function () {

  $.hoverify = function (el) {
    this.$el = $(el);
    this.initialize();
  };

  $.hoverify.prototype.initialize = function () {
    this.$el.on("mouseenter", this.showColor.bind(this));
    this.$el.on("mouseleave", this.showColor.bind(this));
  };

  $.hoverify.prototype.showColor = function () {
    this.$el.find("i").toggleClass("colored");
  };

  $.fn.hoverIcon = function () {
    $(".skill").each( function () {
      new $.hoverify(this);
    });
  };
})();

$(document).on("ready", function () {
  $(".devicons").hoverIcon();
})
