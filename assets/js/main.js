(function ($) {
  new BotDetector({
    timeout: 1000,
    callback: function (result) {
      $('a.email-address').each(function (i, e) {
        var a = $(e);
        var address = a.data('username') + '@' + a.data('domain') + '.' + a.data('tld');
        if (result.isBot) {
          a.text('Please move your mouse or tap somewhere to view the email address.')
        } else {
          a.attr('href', 'mailto:' + address);
          a.text(address);
        }
      });
    }
  }).monitor();
}(jQuery));