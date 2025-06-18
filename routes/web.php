<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Residents Auth Views
Route::get('/residents/login', function () {
    return view('user.residents.login.login');
})->name('residents.login');

Route::get('/residents/register', function () {
    return view('user.residents.login.register');
})->name('residents.register');

// Residents Pages
Route::get('/residents/dashboard', function () {
    return view('residents.dashboard');
})->name('residents.dashboard');

Route::get('/residents/documentRequest', function () {
    return view('residents.pages.document-request');
})->name('residents.document-request');

Route::get('/residents/blotterAppointment', function () {
    return view('residents.blotterAppointment');
})->name('residents.blotterAppointment');

Route::get('/residents/projects', function () {
    return view('residents.projects');
})->name('residents.projects');

Route::get('/residents/requestAssets', function () {
    return view('residents.requestAssets');
})->name('residents.requestAssets');

Route::get('/residents/organizationalChart', function () {
    return view('residents.organizationalChart');
})->name('residents.organizationalChart');

// ✅ NEW Route for statusAssetRequests (React)
Route::get('/residents/statusassetrequests', function () {
    return view('app'); // This should be the Blade file that mounts your React app
})->name('residents.statusassetrequests');

// Admin Pages
Route::get('/admin/AdminDashboard', function () {
    return view('/admin/AdminDashboard');
})->name('admin.AdminDashboard');

Route::get('/admin/documentsRecords', function () {
    return view('/admin/documentsRecords');
})->name('admin.records');

Route::get('/admin/residentsRecords', function () {
    return view('/admin/residentsRecords');
})->name('admin.residentsRecords');

Route::get('/admin/addResident', function () {
    return view('/admin/addResident');
})->name('admin.addResident');

Route::get('/admin/householdRecords', function () {
    return view('/admin/householdRecords');
})->name('admin.householdRecords');

Route::get('/admin/blotterRecords', function () {
    return view('/admin/blotterRecords');
})->name('admin.blotterRecords');

Route::get('/admin/financialTracking', function () {
    return view('/admin/financialTracking');
})->name('admin.financialTracking');

Route::get('/admin/barangayOfficials', function () {
    return view('/admin/barangayOfficials');
})->name('admin.barangayOfficials');

Route::get('/admin/communicationAnnouncement', function () {
    return view('/admin/communicationAnnouncement');
})->name('admin.communicationAnnouncement');

Route::get('/admin/disasterEmergency', function () {
    return view('/admin/disasterEmergency');
})->name('admin.disasterEmergency');

Route::get('/admin/inventoryAssets', function () {
    return view('/admin/inventoryAssets');
})->name('admin.inventoryAssets');

Route::get('/admin/projectManagement', function () {
    return view('/admin/projectManagement');
})->name('admin.projectManagement');

Route::get('/admin/socialServices', function () {
    return view('/admin/socialServices');
})->name('admin.socialServices');

// React fallback route
Route::get('/{any}', function () {
    return view('app'); // Blade that mounts your React app
})->where('any', '.*');
