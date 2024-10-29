function searchText(event) {
    event.preventDefault();
    const searchBar = document.getElementById("searchBar");
    const content = document.getElementById("content");
    const searchTerm = searchBar.value.trim().toLowerCase();

    if (searchTerm === "") return; 

  
    const highlightedElements = content.querySelectorAll(".highlight");
    highlightedElements.forEach((element) => {
        element.outerHTML = element.textContent;
    });

    const regex = new RegExp(`(${searchTerm})`, "gi");
    content.innerHTML = content.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
}