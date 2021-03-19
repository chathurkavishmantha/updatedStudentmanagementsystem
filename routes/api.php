<?php

// use Illuminate\Routing\Route;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('register', 'AuthController@register');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

}); 



//module controller routes
Route::post('/addmodule', 'ModuleController@add_module');
Route::get('/module_details', 'ModuleController@getModuleDetails');


//subject controller routers
Route::post('/register_subject', 'SubjectController@register_subject');
Route::get('/subject_details/{id}', 'SubjectController@getSubjectrDetails');

//notice controller


Route::post('/add_notice', 'Teachers@Add_notice');
Route::get('/notice_details/{id}', 'Teachers@get_notice');
Route::get('/all_notice_details', 'Teachers@get_all_notice');
Route::get('/all_subject_details', 'Teachers@get_all_subject');







