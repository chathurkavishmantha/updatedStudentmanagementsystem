<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notice;
use App\Subject;
use App\User;
use Illuminate\Support\Facades\DB;

class Teachers extends Controller
{
    
    public function getTeacherDetails()
    {
        
        $teacher = DB::table('users')->where('type', 'teacher')->get(); 
        return $teacher;
    }

    public function Add_notice()
    {
         Notice::create([
            'user_id' => request('user_id'),
            'subject_name' => request('subject_name'),
            'notice_date' => request('notice_date'),
            'about_notice' => request('about_notice'),
            'study_year' => request('study_year')

        ]);

    }

    public function get_all_notice()
    {
        $notice = Notice::all(); 
        return $notice;
       
    }

    

    public function get_notice($id)
    {
        $notice = DB::table('notices')->where('user_id', $id)->get(); 
        return $notice;
       
    }

    public function get_all_subject()
    {
        $teacher = Subject::all();
        return $teacher;

    }

    public function destroy($id)
    {
        DB::table('notices')->where('notice_id', $id)->delete();
    }




    
}
