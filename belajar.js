<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animasi Sederhana</title>
  <style>
    body {
      background-color: #f0f0f0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #box {
      width: 100px;
      height: 100px;
      background-color: tomato;
      position: relative;
      border-radius: 10px;
    }
  </style>
</head>
<body>

  <div id="box"></div>

  <script>
    const box = document.getElementById('box');
    let posisi = 0;

    function gerak() {
      if (posisi < 300) { 
        posisi++;
        box.style.left = posisi + 'px';
        requestAnimationFrame(gerak); 
      }
    }

    gerak(); 
  </script>

</body>
</html>

