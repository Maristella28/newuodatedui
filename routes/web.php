<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/residents/login', function () {
    return view('user.residents.login.login');
})->name('residents.login');

Route::get('/residents/register', function () {
    return view('user.residents.login.register');
})->name('residents.register');

Route::get('/residents/dashboard', function () {
    return view('residents.dashboard');
})->name('residents.dashboard');

Route::get('/residents/document-request', function () {
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



// ADMIN SIDE
Route::get('/admin/AdminDashboard', function () {
    return view('/admin/AdminDashboard');  // This should match your blade filename without extension
})->name('admin.AdminDashboard');

Route::get('/admin/documentsRecords', function () {
    return view('/admin/documentsRecords');  // This should match your blade filename without extension
})->name('admin.records');

Route::get('/admin/residentsRecords', function () {
    return view('/admin/residentsRecords');  // This should match your blade filename without extension
})->name('admin.residentsRecords');

Route::get('/admin/householdRecords', function () {
    return view('/admin/householdRecords');  // This should match your blade filename without extension
})->name('admin.householdRecords');

Route::get('/admin/blotterRecords', function () {
    return view('/admin/blotterRecords');  // This should match your blade filename without extension
})->name('admin.blotterRecords');

Route::get('/admin/financialTracking', function () {
    return view('/admin/financialTracking');  // This should match your blade filename without extension
})->name('admin.financialTracking');

Route::get('/admin/barangayOfficials', function () {
    return view('/admin/barangayOfficials');  // This should match your blade filename without extension
})->name('admin.barangayOfficials');

Route::get('/admin/communicationAnnouncement', function () {
    return view('/admin/communicationAnnouncement');  // This should match your blade filename without extension
})->name('admin.communicationAnnouncement');

Route::get('/admin/disasterEmergency', function () {
    return view('/admin/disasterEmergency');  // This should match your blade filename without extension
})->name('admin.disasterEmergency');

Route::get('/admin/inventoryAssets', function () {
    return view('/admin/inventoryAssets');  // This should match your blade filename without extension
})->name('admin.inventoryAssets');

Route::get('/admin/projectManagement', function () {
    return view('/admin/projectManagement');  // This should match your blade filename without extension
})->name('admin.projectManagement');

Route::get('/admin/socialServices', function () {
    return view('/admin/socialServices');  // This should match your blade filename without extension
})->name('admin.socialServices');

Route::get('/{any}', function () {
    return view('app'); // or whatever blade file mounts React
})->where('any', '.*');
