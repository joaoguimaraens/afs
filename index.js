function searchWithEnter(event) {
  if (event.key === 'Enter') {
    search();
  }
}

document.addEventListener('keydown', searchWithEnter);

function buildQuery(fileName) {
  const query = `${fileName} NOT access-restricted-item:true AND mediatype:(texts)`;
  return `https://archive.org/search?query=${encodeURIComponent(query)}`;
}

function search() {
  const fileName = document.getElementById('file-name').value;

  if (!fileName) {
    return;
  }

  const archiveSearch = buildQuery(fileName);

  if (document.getElementById('redirect').checked) {
    window.location.href = archiveSearch;
    return;
  }

  window.open(archiveSearch);
}
