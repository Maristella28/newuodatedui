<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>@yield('title', 'Document')</title>

    {{-- Load Vite compiled assets --}}
  @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>
<body>
    <div id="app"></div> <!-- React mounts here -->
    
    {{-- Flowbite for UI elements --}}
    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
</body>
</html>
