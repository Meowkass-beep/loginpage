<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="container">
        <h1>Calcular preço final com desconto</h1>
        <form action="index.php" method="get">
            <label for="preco">Preço:</label>
            <input name="preco" type="number" placeholder="Digite o preço" required>
            <br>
            <br>
            <input type="submit">
        </form>

        <?php
        if (isset($_GET["preco"])) {
            $preco = $_GET["preco"];
            $desconto = 10;
            echo "Preço inicial: R$$preco <br>";
            echo "Desconto: $desconto% <br>";

            $precoFinal = $preco - ($preco * ($desconto / 100));
            echo "Preço final: R$$precoFinal";
        }
        ?>
    </div>
</body>

</html>