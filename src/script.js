
var warnIng = document.getElementById('warning');
var errOr = document.getElementById('error');
var userName = document.getElementById('user');
var passWord = document.getElementById('pass');
var logIn = document.getElementById('log-in');

logIn.addEventListener('click', function() {
	if(userName.value != '' && passWord.value != ''){
		var allPnl = this.parentNode.parentNode.parentNode.children;
		for(var i=0; i<allPnl.length; i++){
			allPnl[i].classList.add('fold-'+(i+1));						
		}
		this.parentNode.parentNode.parentNode.classList.add('hide');
		document.getElementById('user-logged').innerText = userName.value;
		document.getElementById('user-name').innerText = userName.value;
		document.getElementById('date').innerText = new Date().toDateString();
		document.querySelector('textarea').focus();
		document.querySelector('.t-login').style.display='none';
		document.querySelector('.t-terminal').style.display='inline-block';
	} else {
		warnIng.classList.add('show');
		if(passWord.value == ''){ errOr.innerText = ' Password'; }
		if(userName.value == ''){ errOr.innerText = ' Username'; }
		warnIng.addEventListener('click', function() {
			warnIng.classList.remove('show');
		});
	}
});