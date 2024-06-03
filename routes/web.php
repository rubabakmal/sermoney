<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PoBoxController;
use App\Http\Controllers\PoBoxNoController;
use App\Http\Controllers\PoBoxNoRegController;
use App\Http\Controllers\PoBoxRegController;
use App\Http\Controllers\RegistrationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});



Route::get('plan', function () {
    return view('plans');
})->name('plan2');


Route::get('Beneficious', function () {
    return view('Beneficious');
});


Route::get('service', function () {
    return view('service');
});
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::post('/po-box', [PoBoxNoController::class, 'store'])->name('po-box.store');
Route::get('/po-reg', [PoBoxNoRegController::class, 'create'])->name('po-reg.create');
Route::post('/submit', [PoBoxNoRegController::class, 'store'])->name('form.submit');
Route::post('/register', [PoBoxNoRegController::class, 'store'])->name('register.store');
Route::get('/po-box', [PoBoxNoController::class, 'createForm']);


Route::get('service', function () {
    return view('service');
});
Route::get('index', function () {
    return view('admindashboard/index');
})->name('index');

Route::get('carga', function () {
    return view('admindashboard/carga');
})->name('carga');

Route::get('carga2', function () {
    return view('admindashboard/carga2');
})->name('carga2');

Route::get('fractuion', function () {
    return view('admindashboard/fractuion');
})->name('fractuion');

Route::get('misl', function () {
    return view('admindashboard/misl');
})->name('misl');

Route::get('perfil', function () {
    return view('admindashboard/perfil');
})->name('perfil');



Route::get('/registrations/create', [RegistrationController::class, 'create'])->name('registrations.create');
Route::post('/registrations', [RegistrationController::class, 'store'])->name('registrations.store');