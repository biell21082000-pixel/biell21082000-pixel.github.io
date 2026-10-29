document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}})});
const contentSearch=document.getElementById('content-search-input');
if(contentSearch){
  const searchableCards=[...document.querySelectorAll('.section .cards .feature')];
  const status=document.getElementById('content-search-status');
  contentSearch.addEventListener('input',()=>{
    const query=contentSearch.value.trim().toLocaleLowerCase('pt-BR');
    let visible=0;
    searchableCards.forEach(card=>{
      const matches=card.textContent.toLocaleLowerCase('pt-BR').includes(query);
      card.hidden=!matches;
      if(matches) visible++;
    });
    if(status) status.textContent=query ? (visible ? visible+' conteúdo(s) encontrado(s).' : 'Nenhum conteúdo encontrado. Tente outra palavra.') : 'Pesquise por tema, dúvida ou palavra-chave.';
  });
}
