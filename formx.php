<?php
// несколько получателей
$to  = 'gogistyle1919@gmail.com.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['text'] . '<br />
Связяться с ним можно по tel:' . $_POST['tel'] . '">'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Simon <gogistyle1919@gmail.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['tel'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>