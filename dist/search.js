(function(root){
  'use strict';
  function normalize(value){return String(value).normalize('NFKC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/[^\p{L}\p{N}]/gu,'').toLowerCase();}
  function findStudents(students,query,department){const key=normalize(query);if(key.length<3)return[];return students.filter(s=>(!department||s.department===department)&&normalize(s.name).includes(key)).sort((a,b)=>Number(normalize(b.name)===key)-Number(normalize(a.name)===key)||a.id-b.id);}
  const api={normalize,findStudents};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AdmissionSearch=api;
})(typeof window!=='undefined'?window:globalThis);
