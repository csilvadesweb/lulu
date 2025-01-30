<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tudo sobre o Maltês</title>
    <style>
        /* Estilos gerais */
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }

        /* Cabeçalho estilizado */
        header {
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            padding: 20px;
            font-size: 28px;
            font-weight: bold;
            color: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            animation: slideDown 1s ease-in-out;
        }

        /* Container principal */
        .container {
            width: 90%;
            max-width: 800px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
        }

        /* Imagens */
        .image {
            width: 100%;
            max-height: 350px;
            object-fit: cover;
            border-radius: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Efeito hover nas imagens */
        .image:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Lista estilizada */
        ul {
            text-align: left;
            padding: 0;
            list-style: none;
        }

        ul li {
            background: #ffebee;
            margin: 5px 0;
            padding: 10px;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }

        ul li:hover {
            transform: scale(1.05);
            background: #ffcdd2;
        }

        /* Rodapé */
        footer {
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            padding: 15px;
            color: white;
            margin-top: 20px;
            font-size: 16px;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
            animation: slideUp 1s ease-in-out;
        }

        /* Animações */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideDown {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body>

<header>
    🐶 Tudo sobre o Maltês 🐶
</header>

<div class="container">
    <h2>Sobre a Raça</h2>
    <p>O Maltês é um cachorro pequeno, famoso por sua pelagem branca e macia, além de ser extremamente carinhoso e fiel.</p>
    
    <h2>Características</h2>
    <ul>
        <li>🐾 Porte pequeno</li>
        <li>🐾 Pelagem longa e branca</li>
        <li>🐾 Temperamento dócil e brincalhão</li>
        <li>🐾 Ótimo para apartamentos</li>
        <li>🐾 Expectativa de vida: 12 a 15 anos</li>
    </ul>

    <h2>Galeria de Fotos</h2>
    
    <img src="file-MdUcBU6aUB88YSKWfpRaGx.jpg" alt="Maltês fofo" class="image">
    <img src="file-XXE4tuHXbkJHeB1jFzYMTL.jpg" alt="Maltês com laço azul" class="image">
    <img src="file-Tq9Lv8EpWQBdCcpk4hzB6F.jpg" alt="Maltês em estúdio fotográfico" class="image">
</div>

<footer>
    &copy; 2025 Tudo sobre o Maltês 🐶💖
</footer>

</body>
</html>
