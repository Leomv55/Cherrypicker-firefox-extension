const commits = document.getElementById('commits');
setInterval(() => {
    commits.innerHTML = localStorage.getItem('git-cherry');
    localStorage.removeItem('git-cherry')
}, 400);

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', () => {
    copyToClipboard(commits.innerHTML);
    alert('Command copied to clipboard')
});

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};