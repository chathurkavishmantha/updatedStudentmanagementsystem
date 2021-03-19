<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function register_subject()
    {
        
        $value = Subject::create([
            'user_id' => request('user_id'),
            'user_name' => request('user_name'),
            'subject_name' => request('subject_name'),
            'subject_code' => request('subject_code'),

        ]);
    }

    public function getSubjectrDetails($id)
    {
        $architects = DB::table('subjects')->where('user_id', $id)->get(); 
        return $architects;
    }

    

    

    

}
