<?php
    $to = 'josegnacio118@gmail.com';
    // this is coreo to send 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $issue = $_POST['issue'];
    $message = $_POST['message'];

    // header formualrio 
    $header = 'send to pizzas lokas';
    $completeMessage = $message . "\nAtt:" . $name ;
    mail($to, $issue, $issue, $completeMessage, $header);
    echo "<script>alert('hello');</script>"
    echo "<script> setTimeout(\"location.href='thanks.html'\",1000);</script>"
?>