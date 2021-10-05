<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
/**
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $msg_subject = $_POST["msg_subject"];
}**/

$msg_subject = "Enquiry from website";

// MESSAGE
if (empty($_POST["enquiry"])) {
    $errorMSG .= "Message is required ";
} else {
    $enquiry = $_POST["enquiry"];
}


$EmailTo = "bhikhi19gc@gmail.com";
$Subject = "New Message Received";
$headers = "From:".$email."\r\n".
            "MIME-Version: 1.0"."\r\n".
            "Content-Type: text/html; charset=utf-8";
// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $enquiry;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, $headers);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>