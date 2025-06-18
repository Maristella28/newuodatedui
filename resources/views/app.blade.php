<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>@yield('title', 'Document')</title>

@viteReactRefresh
@vite(['resources/css/app.css', 'resources/js/app.jsx'])


</head>
<body class="bg-gray-100 font-sans">
  <div id="app"></div>

  {{-- Flowbite JS --}}
  <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
</body>
</html>
