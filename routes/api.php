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
Route::get('/module_details/{id}', 'ModuleController@getModuleDetails');
Route::get('/register_student_module_details/{id}', 'ModuleController@getRegisterStudentModuleDetails');
Route::delete('/delete_module/{id}', 'ModuleController@destroy');
Route::get('/module_details/edit/{id}', 'ModuleController@edit');



//subject controller routers
Route::post('/register_subject', 'SubjectController@register_subject');
Route::get('/subject_details/{id}', 'SubjectController@getSubjectrDetails');
Route::get('/update_subject/edit/{id}', 'SubjectController@findDataFromSubject');
Route::delete('/delete_subject/{id}', 'SubjectController@destroy');

//notice controller


Route::post('/add_notice', 'Teachers@Add_notice');
Route::get('/notice_details/{id}', 'Teachers@get_notice');
Route::get('/all_notice_details', 'Teachers@get_all_notice');
Route::get('/all_subject_details', 'Teachers@get_all_subject');
Route::delete('/delete_notice/{id}', 'Teachers@destroy');




//Class shedul controller

Route::post('/add_class_schedul', 'ClassRoomSchedule@Add_ClassRoom_Shedule');
Route::get('/schedule_class_details/{id}', 'ClassRoomSchedule@Schedule_class_details');
Route::get('/schedule_class_detailsforstudents', 'ClassRoomSchedule@Schedule_class_details_forStudents');
Route::delete('/delete_shedule/{id}', 'ClassRoomSchedule@destroy');


//RegisterModuleStudent controller

Route::post('/student_register_module', 'RegisterModuleStudent@student_register_module');





