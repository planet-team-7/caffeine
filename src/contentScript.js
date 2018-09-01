// alert('Reload 할 때마다 뜹니다ㅎㅎ');

const textbar = document.getElementById('searchtext');
textbar.setAttribute('onkeypress', 'alert("키가 눌렸다!")');
