(function () {
  var BAR_AND_BANNER_CLEARANCE = 346;

  $.scrollFxn = function (el) {
    this.divs = ["#me", "#skills", "#portfolio"];

    this.$el = $(el);
    this.initialize();
  };

  $.scrollFxn.prototype.calculate = function () {
    this.scrollValues = [BAR_AND_BANNER_CLEARANCE];
    var that = this;
    var sv = this.scrollValues;

    this.divs.forEach(function(div) {
      sv.push(sv[sv.length - 1] + that.$el.find(div)[0].scrollHeight);
    });
  }

  $.scrollFxn.prototype.initialize = function () {
    $("#scroll-me").on("click", this.scrollToDiv.bind(this, 0));
    $("#scroll-skills").on("click", this.scrollToDiv.bind(this, 1));
    $("#scroll-portfolio").on("click", this.scrollToDiv.bind(this, 2));
  };

  $.scrollFxn.prototype.scrollToDiv = function (idx) {
    this.calculate();
    this.$el.scrollTop(this.scrollValues[idx]);
  };

  $.fn.scrollIt = function () {
    new $.scrollFxn(this);
  };
})();

$(document).on("ready", function () {
  $(".page").scrollIt();
})
