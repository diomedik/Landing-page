<?php 
$mail->CharSet = 'utf-8';

$name = $_POST['first_name'];
$lastName = $_POST['last_name'];
$country = $_POST['country'];
$countryPrefix = $_POST['country_prefix'];
$phone = $_POST['phone_num'];
$email = $_POST['user_email']

$to  = "<dan.shvidenkov@yandex.ru>" ; 

$subject = "Заголовок письма"; 

$message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 


mail($to, $subject, $message, $headers);
?>