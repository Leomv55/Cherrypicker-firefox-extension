
setInterval(function () {
    const githubCopyButtons = document.querySelectorAll('clipboard-copy.btn.btn-outline');
    const commitList = [];
    for (const element of githubCopyButtons)
        commitList.push(element.getAttribute('value'));
    browser.runtime.sendMessage({ type: 'CHERRY', text: `git cherry-pick ${commitList.join(" ")}` });
}, 400);
