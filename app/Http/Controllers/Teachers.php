<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;

class Teachers extends Controller
{
    
    public function getTeacherDetails()
    {
        
        $teacher = DB::table('users')->where('type', 'teacher')->get(); 
        return $teacher;
    }

    
}
