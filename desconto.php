<?php

    $preco = $_GET["preco"];
    $desconto = 10;
    echo "Preço inicial: R$$preco <br>";
    echo "Desconto: R$$desconto <br>";

    $precoFinal = $preco-($preco*($desconto/100));
    echo "Preço final: R$$precoFinal";

?>