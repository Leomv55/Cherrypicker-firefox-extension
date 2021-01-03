browser.runtime.onMessage.addListener((request, sender, sendResponse)=>{
   if (request.type == 'CHERRY') {
       localStorage.setItem('git-cherry',request.text)
   }
})
