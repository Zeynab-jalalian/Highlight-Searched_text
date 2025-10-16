function search() {
  let textToSearch = document.getElementById("text-to-search").value;
  let par = document.getElementById("par");

  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  let pattern= new RegExp(`${textToSearch}`,"gi");

  par.innerHTML=par.textContent.replace(pattern,match=>`<mark>${match}</mark>`);
}
