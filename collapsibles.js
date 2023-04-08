const modules = document.getElementsByClassName('module-button');
const moduleContent = document.getElementsByClassName('module-content');
const moduleName = document.getElementsByClassName('module-name');
const collapsibleCol = document.getElementsByClassName('collapsibles-col');
const collapsiblesGrid = document.getElementById('collapsibles');

function toggleExpand(content) {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.parentElement.classList.remove('expanded');
        content.parentElement.classList.add('collapsed');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px'
        content.parentElement.classList.remove('collapsed');
        content.parentElement.classList.add('expanded');
    }
};

function collapseNeighbors() {
    const contents = moduleContent;
    for (const content of contents) {
        if (content.classList.contains('active')) {
            content.classList.remove('active');                       
            toggleExpand(content);   
        }
    }
};

for(const module of modules)
module.addEventListener('click', function() {
    if (!this.lastElementChild.classList.contains('active')) {
        collapseNeighbors();
    };
    this.lastElementChild.classList.toggle('active');
    toggleExpand(this.lastElementChild)
});