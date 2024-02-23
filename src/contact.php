<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo 'clickecd';
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set up email parameters
    $to = "contact@thebrajeshsaini.com";  // Replace with the recipient's email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    // Send the email
    mail($to, $subject, $message, $headers);
}