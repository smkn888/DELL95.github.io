<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Form Sederhana</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background:  green;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    form {
      background: tomato;
      padding: 20px;
      width: 300px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .row {
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
      color: black;
    }

    label {
      margin-bottom: 4px;
      font-weight: bold;
    }

    input {
      padding: 6px;
    
    }

    button {
      padding: 8px;
      cursor: pointer;
      background-color: blue;
    }
  </style>
</head>
<body>

<form id="formData">

  <div class="row">
    <label for="nama">Nama</label>
    <input type="text" id="nama">
  </div>

  <div class="row">
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>

  <div class="row">
    <label for="password">password</label>
    <input type="password" id="password">
  </div>

  <button type="submit">Kirim</button>
  <button type="submit">Batal 👮‍♂️</button>

</form>

<script>
  const form = document.getElementById("formData");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop reload

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    alert("Halo " + nama + "!\nEmail kamu: " + email);
  });
</script>

</body>
</html>
