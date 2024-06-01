<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('banner', BannerController::class);
Route::resource('brand', BrandController::class);
Route::resource('category', CategoryController::class);
Route::resource('contact', ContactController::class);
Route::resource('menu', MenuController::class);
Route::resource('order', OrderController::class);
Route::resource('post', PostController::class);
Route::resource('product', ProductController::class);
Route::resource('topic', TopicController::class);
Route::resource('user', UserController::class);
