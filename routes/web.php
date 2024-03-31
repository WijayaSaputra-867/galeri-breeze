<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Route Dashboard
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->middleware('verified')->name('dashboard');

    // Route Profil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile', [ProfileController::class, 'upload'])->name('profile.upload-image');

    // Route Galeri
    Route::resource('/galleries', GalleryController::class);

    // Route Foto
    Route::resource('/photos', PhotoController::class);

    // Route Suka
    Route::post('/galleries/{id}/likes', [LikeController::class, 'hasLiked'])->name('galleries.like');

    // Route Komentar
    Route::post('/galleries/{id}/comment', [CommentController::class, 'hasComment'])->name('galleries.comment');
    Route::get('/galleries/{id}/comment', [CommentController::class, 'seeComment'])->name('galleries.seecomment');

    // Route Pengguna
    Route::resource('/user', UserController::class);
});

require __DIR__.'/auth.php';
