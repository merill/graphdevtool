chrome.devtools.network.onRequestFinished.addListener(request => {
    request.getContent((body) => {
      if (request.request && request.request.url) {
          console.log(request.request.url);
        if (request.request.url.includes('graph.microsoft.com')) {
            console.log('graphreq');
            console.log(request);

            var cnt = document.getElementById('content');
            if(['PATCH', 'POST', 'PUT'].includes(request.request.method))
            {
                cnt.innerText += + "\r\n"+ "\r\n-------------------------"+ "\r\n"+   request.request.url + "\r\n" + request.request.method + "\r\n" + JSON.stringify(request.request.postData) + "\r\n" + "\r\n" + body;
            }

            //cnt.innerText = request.request.url + "\r\n" + JSON.stringify(request) + "\r\n" + body;
        }
      }
    });
  });