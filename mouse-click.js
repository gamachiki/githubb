var msg = '<div class=\"header\"<a id=\"close\"href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'our sever are being updated between 3 and 4 am';
msg += 'during this time ,there may be minor disruption to service</div>';
 var elNote = document.createElementNS('div');
 elNote.setAttribute('id','note');
 elNote.innerHTML = msg;
 document.body.appendChild(elNote);
 function dismissNote(){
     document.body.removeChild(elNote);
 }
 var elClose =document.getElementById('close');
 elClose.addEventListener('click',dismissNote,false);