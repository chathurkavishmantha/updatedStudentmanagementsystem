<?php

namespace App\Http\Controllers;

use App\Exams;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;


class ExamsController extends Controller
{
    public function add_exams(){
        $value = Exams::create([
            'user_id' => request('user_id'),
            'exam_name' => request('exam_name'),
            'subject_name' => request('subject_name'),
        ]);
    }

    public function get_exams($id)
    {
        
        $module = DB::table('exams')->where('exam_id', $id)->get();
        return $module;
    }


}
