<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RegisterModuleStudents;
use Illuminate\Support\Facades\DB;

class RegisterModuleStudent extends Controller
{
    public function student_register_module()
    {
        $value = RegisterModuleStudents::create([
            'user_id' => request('user_id'),
            'subject_code' => request('subject_code'),
            'module_no' => request('module_no')

        ]);
        


    }
}
