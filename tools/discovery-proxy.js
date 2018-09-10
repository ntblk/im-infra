// logging socks proxy
// Copyright (C) NetBlocks.org

var socks = require('socksv5');
var port = 1090;

var srv = socks.createServer(function(info, accept, deny) {
  if (info.cmd === 'connect' && info.dstPort === 443) {
    var url = 'https://' + info.dstAddr;
    console.log(url);
  } else {
    console.error(info);
  }

  accept();
});

srv.listen(port, 'localhost', function() {
  console.error(`SOCKS server listening on port ${port}`);
});

srv.useAuth(socks.auth.None());
