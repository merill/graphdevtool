(function() {
    console.log("back");
    const tabStorage = {};
    const networkFilters = {
        urls: [
            "*://graph.microsoft.com/*"
        ]
    };

    chrome.webRequest.onBeforeRequest.addListener((details) => {
 
        console.log('onBeforeReq');
        console.log(details);

        const { tabId, requestId } = details;
        if (!tabStorage.hasOwnProperty(tabId)) {
            return;
        }

        tabStorage[tabId].requests[requestId] = {
            requestId: requestId,
            url: details.url,
            startTime: details.timeStamp,
            status: 'pending',
            body: details.requestBody
        };
        console.log(tabStorage[tabId].requests[requestId]);
    }, networkFilters, ['requestBody']);    

    // chrome.webRequest.onCompleted.addListener((details) => {
    //     console.log('onCompleted');
        

    //     const { tabId, requestId } = details;
    //     if (!tabStorage.hasOwnProperty(tabId)) {
    //         return;
    //     }

    //     console.log("no return");
    //     tabStorage[tabId].requests[requestId] = {
    //         requestId: requestId,
    //         url: details.url,
    //         timeStamp: details.timeStamp,
    //         status: details.status,
    //         body: details.requestBody
    //     };
    //     console.log(tabStorage[tabId].requests[requestId]);

    // }, networkFilters);

    // chrome.webRequest.onErrorOccurred.addListener((details)=> {
    //     const { tabId, requestId } = details;
    //     if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
    //         return;
    //     }

    //     const request = tabStorage[tabId].requests[requestId];
    //     Object.assign(request, {
    //         endTime: details.timeStamp,           
    //         status: 'error',
    //     });
    //     console.log(tabStorage[tabId].requests[requestId]);
    // }, networkFilters);

    chrome.tabs.onActivated.addListener((tab) => {
        const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
        if (!tabStorage.hasOwnProperty(tabId)) {
            tabStorage[tabId] = {
                id: tabId,
                requests: {},
                registerTime: new Date().getTime()
            };
        }
    });
    chrome.tabs.onRemoved.addListener((tab) => {
        const tabId = tab.tabId;
        if (!tabStorage.hasOwnProperty(tabId)) {
            return;
        }
        tabStorage[tabId] = null;
    });
}());