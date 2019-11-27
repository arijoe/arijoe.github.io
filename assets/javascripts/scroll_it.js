(function () {
  var BANNER_CLEARANCE = document.getElementById("banner").offsetHeight;

  $.scrollFxn = function (el) {
    this.divs = ["#me", "#skills", "#portfolio"];

    this.$el = $(el);
    this.initialize();
  };

  $.scrollFxn.prototype.calculate = function () {
    this.scrollValues = [0, BANNER_CLEARANCE];
    var that = this;
    var sv = this.scrollValues;

    this.divs.forEach(function(div) {
      sv.push(sv[sv.length - 1] + that.$el.find(div)[0].offsetHeight);
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

    window.scroll({
      top: targetPos,
      behavior: 'smooth'
    });
  };

  $.fn.scrollIt = function () {
    new $.scrollFxn(this);
  };
})();

$(document).on("ready", function () {
  $(".page").scrollIt();
})
