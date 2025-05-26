<?php
include 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$phone = $_POST['phone'];

$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'gkpremium@inbox.ru'; // Ваш email на mail.ru
    $mail->Password = 'kjn6vYAQF5rLjZ54YpnE'; // Пароль приложения mail.ru
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // или 'ssl'
    $mail->Port = 465;

    // От кого и кому
    $mail->setFrom('gkpremium@inbox.ru', 'Гостиничный комплекс Premium');
    $mail->addAddress('hotelpremium2016@yandex.ru'); // Кому отправлять

    // Контент письма
    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя: $name<br>Телефон: $phone";

    $mail->send();
    echo 'ok';
} catch (Exception $e) {
    echo "Ошибка: {$mail->ErrorInfo}";
}