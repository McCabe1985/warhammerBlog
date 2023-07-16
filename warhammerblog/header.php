<?php ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head()?>
    <title>Document</title>
</head>
<body>
    <nav class="nav__container">
        <div class="logo__container"><img src="<?php echo get_theme_file_uri("/images/logo.svg"); ?>" alt="Warmonger logo" class="nav__logo"></div>
        <ul class="nav__links-container">
            <li class="nav__item">Wargaming</li>
            <li class="nav__item">Roleplaying</li>
            <li class="nav__item">Modelling</li>
            <li class="nav__item">3D Prints</li>
            <li class="nav__item">About us</li>
            <li class="nav__item">Contact</li>
        </ul>
    </nav>

