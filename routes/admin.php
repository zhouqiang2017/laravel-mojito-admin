<?php

Route::get('dashboard', 'IndexController@index')->middleware('auth:sanctum');
Route::post('image', 'ImagesController@store')->middleware('auth:sanctum');

// banner
Route::resource('banner', 'BannerController')->middleware(['auth:sanctum', 'mojito.permission']);
// 中考体育
Route::resource('senior', 'SeniorController')->middleware(['auth:sanctum', 'mojito.permission']);
