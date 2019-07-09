var openSearch = document.getElementById('show-search');
var innerSearch = document.querySelector('.inner-search');
var search = document.querySelector('.search');


openSearch.onclick = function () {
	if (openSearch.classList.contains('acrive')) {
		openSearch.classList.remove('acrive');
		openSearch.innerText = 'Open Search';
		search.style.height = 'auto';
		innerSearch.style.display = 'none';
	} else {
		openSearch.classList.add('acrive');
		openSearch.innerText = 'Hide Search';
		search.style.height = 'auto';
		innerSearch.style.display = 'flex';

	}
}

var searchType = document.querySelector('.make-select');

searchType.dataset.selected = searchType.selectedOptions[0].value;



searchType.addEventListener('change', setDataAttr);



function setDataAttr () {

	var dataValue = searchType.selectedOptions[0].value;

	searchType.dataset.selected = dataValue;

}