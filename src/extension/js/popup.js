

//   chrome.tabs.query(
//     {
//       active: true,
//       lastFocusedWindow: true,
//     },
//     function (tabs) {
//       myTabUrl = tabs[0].url;
//       //alert("Second " + myTabUrl);
//       var cnt = document.getElementById('content');
//       cnt.innerText = myTabUrl;
    
//     }
//   );
  
// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
//       var myTabUrl = "default";

//       chrome.tabs.query(
//         {
//           active: true,
//           lastFocusedWindow: true,
//         },
//         function (tabs) {
//           myTabUrl = tabs[0].url;
//           //alert("Second " + myTabUrl);

//         }
//       );
      
//     }, false);
//   }, false);
  