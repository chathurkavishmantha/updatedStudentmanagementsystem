<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subject;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Mockery\Matcher\Subset;

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
        $details = DB::table('subjects')->where('user_id', $id)->get(); 
        return $details;
    }

    public function getAllSubjectrDetails($id)
    {
        $details = DB::table('subjects')->where('user_id', $id)->get(); 
        return $details;
    }

    public function findDataFromSubject($id)
    {
        $details = DB::table('subjects')->where('user_id', $id)->get(); 
        return $details;
    }

    public function destroy($id)
    {
        DB::table('subjects')->where('subject_id', $id)->delete();
    }

    

    

    

}
