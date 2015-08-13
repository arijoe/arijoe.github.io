(function () {
  var BAR_AND_BANNER_CLEARANCE = 395;

  $.scrollFxn = function (el) {
    this.divs = ["#me", "#skills", "#portfolio"];

    this.$el = $(el);
    this.initialize();
  };

  $.scrollFxn.prototype.calculate = function () {
    this.scrollValues = [0, BAR_AND_BANNER_CLEARANCE];
    var that = this;
    var sv = this.scrollValues;

    this.divs.forEach(function(div) {
      sv.push(sv[sv.length - 1] + that.$el.find(div)[0].scrollHeight);
    });
  }

  $.scrollFxn.prototype.initialize = function () {
    $("#connect").on("click", this.scrollToDiv.bind(this, 0));
    $("#scroll-me").on("click", this.scrollToDiv.bind(this, 1));
    $("#scroll-skills").on("click", this.scrollToDiv.bind(this, 2));
    $("#scroll-portfolio").on("click", this.scrollToDiv.bind(this, 3));
  };

  $.scrollFxn.prototype.scrollToDiv = function (idx) {
    this.calculate();
    var targetPos = this.scrollValues[idx];
    var currentPos = this.$el.scrollTop();

    this.$el.animate({
      scrollTop: this.scrollValues[idx]
    }, 250);
  };

  $.fn.scrollIt = function () {
    new $.scrollFxn(this);
  };
})();

$(document).on("ready", function () {
  $(".page").scrollIt();
})
