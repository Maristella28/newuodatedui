<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Resident Register | Barangay e-Governance</title>
</head>
<body class="relative bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">

<!-- ✨ Abstract Blobs SVG Background -->
<div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <svg class="w-full h-full opacity-25" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#60A5FA; stop-opacity:1" />
                <stop offset="100%" style="stop-color:#34D399; stop-opacity:1" />
            </linearGradient>
            <filter id="blur">
                <feGaussianBlur stdDeviation="50" />
            </filter>
        </defs>

        <circle cx="200" cy="150" r="100" fill="url(#grad1)" filter="url(#blur)">
            <animate attributeName="cy" values="150;450;150" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="300" r="120" fill="url(#grad1)" filter="url(#blur)">
            <animate attributeName="cy" values="300;100;300" dur="25s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="500" r="80" fill="url(#grad1)" filter="url(#blur)">
            <animate attributeName="cy" values="500;200;500" dur="18s" repeatCount="indefinite" />
        </circle>
    </svg>
</div>

<section class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md bg-white/60 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6 ring-1 ring-gray-300 dark:ring-gray-600">

        <!-- Logo + Header -->
        <div class="flex flex-col items-center space-y-3">
            <img class="w-20 h-20 rounded-full shadow-lg" src="{{ asset('assets/images/logo.jpg') }}" alt="logo" />
            <h1 class="text-3xl font-extrabold text-gray-800 dark:text-white text-center leading-tight tracking-wide">
                Barangay e-Governance
            </h1>
            <p class="text-base text-gray-600 dark:text-gray-300 text-center font-medium">
                Resident's Registration Portal
            </p>
        </div>

        <!-- Register Form -->
        <form class="space-y-4" action="#" method="POST">
            @csrf
            <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label for="password" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label for="confirm-password" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    required
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div class="flex items-center space-x-3">
                <input
                    id="terms"
                    type="checkbox"
                    required
                    class="w-5 h-5 rounded border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <label for="terms" class="text-sm font-light text-gray-600 dark:text-gray-300">
                    I accept the
                    <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-400">Terms and Conditions</a>
                </label>
            </div>

            <button
                type="submit"
                class="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-150 ease-in-out"
            >
                Create an Account
            </button>
        </form>

        <!-- Login Link -->
        <div class="text-center pt-2">
            <p class="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a href="{{ route('residents.login') }}" class="font-semibold text-blue-600 hover:underline dark:text-blue-400">Login here</a>
            </p>
        </div>

    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
</body>
</html>
