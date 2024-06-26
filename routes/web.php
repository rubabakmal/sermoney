<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PoBoxController;
use App\Http\Controllers\PoBoxNoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PoBoxRegController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TrackingCorntoller;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\PoBoxNoRegController;
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
    return view('Plans');
})->name('plan2');


Route::get('Beneficious', function () {
    return view('Beneficious');
});


Route::get('/service', function () {
    return view('Service');
});
require __DIR__ . '/auth.php';
Route::middleware('auth')->group(function () {

    Route::get('/useerpanel', function () {
        return view('admindashboard/index');
    })->name('useerpanel');
});
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/carga', function () {
        return view('admindashboard/carga');
    })->name('carga');
    Route::get('admin', function () {
        return view('admindashboard/index');
    })->name('index');
    Route::get('/dashboard', function () {
        return view('dashboard');
    });
    Route::get('admin/warehouse', [WarehouseController::class, 'show'])->name('warehouse');

    // Route::get('misl', function () {
    //     return view('admindashboard/misl');
    // })->name('misl');
    Route::get('/misl', [WarehouseController::class, 'index'])->name('misl');

    Route::post('/warehouses', [WarehouseController::class, 'store'])->name('warehouses.store');
    Route::get('/get-states/{country_id}', [WarehouseController::class, 'getStates']);
    Route::get('/get-cities/{state_id}', [WarehouseController::class, 'getCities']);

    Route::get('/adminprofile', [ProfileController::class, 'adminPanel'])->name('adminprofile');
    Route::get('/adminprofile/edit', [ProfileController::class, 'edit'])->name('adminprofile.edit');
    Route::patch('/adminprofile', [ProfileController::class, 'update'])->name('adminprofile.update');
    Route::delete('/adminprofile', [ProfileController::class, 'destroy'])->name('adminprofile.destroy');
    Route::get('fractuion', [RegisterController::class, 'index'])->name('fractuion');
    Route::get('/users/{id}', [RegisterController::class, 'view'])->name('show');
    Route::put('/users/{id}/status', [RegisterController::class, 'updateStatus']);
});


Route::post('/po-box', [PoBoxNoController::class, 'store'])->name('po-box.store');
Route::get('/po-reg', [PoBoxNoRegController::class, 'create'])->name('po-reg.create');
Route::post('/submit', [PoBoxNoRegController::class, 'store'])->name('form.submit');
Route::post('/register', [PoBoxNoRegController::class, 'store'])->name('register.store');
Route::get('/po-box', [PoBoxNoController::class, 'createForm']);

Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
Route::get('/addresses', [WarehouseController::class, 'display'])->name('addresses');

Route::get('/usertracking/tracking', [TrackingCorntoller::class, 'index'])->name('user.tracking');


Route::get('carga2', function () {
    return view('admindashboard/carga2');
})->name('carga2');



Route::get('perfil', [ProfileController::class, 'index'])->name('perfil');
Route::post('/profile/update', [ProfileController::class, 'update'])->name('update');


Route::get('/registrations/create', [RegistrationController::class, 'create'])->name('registrations.create');
Route::post('/registrations', [RegistrationController::class, 'store'])->name('registrations.store');
// =====================Warehouse Update Delete==

Route::get('warehouses/{warehouse}/edit', [WarehouseController::class, 'edit'])->name('warehouses.getWarehouse');
Route::put('warehouses/{warehouse}', [WarehouseController::class, 'update'])->name('warehouses.update');
Route::delete('warehouses/{warehouse}', [WarehouseController::class, 'destroy'])->name('warehouses.destroy');
Route::get('/states/{countryId}', [WarehouseController::class, 'getStatesByCountry'])->name('getStatesByCountry');
Route::get('/cities/{stateId}', [WarehouseController::class, 'getCitiesByState'])->name('getCitiesByState');
