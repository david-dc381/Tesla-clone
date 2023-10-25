(()=> {

  const year = document.getElementById('year');
  const actualYear = new Date();

  year.textContent = actualYear.getFullYear();

})()