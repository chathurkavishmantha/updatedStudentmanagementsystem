<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $fillable = [
        'user_id',
        'subject_name',
        'notice_date',
        'about_notice',
        'study_year'
    ];
}


// $value_1 = DB::table('register_module_students')->where('user_id', $id)->value('module_no');
//         $value_2 = DB::table('register_module_students')->where('user_id', $id)->value('subject_code');
//         // $data    = DB::table('modules')->where('user_id', $value_2)->get();
//         $record = Module::where('module_no' , $value_1 )->where('subject_code' , $value_2)
//             ->first();


//      // dd($record->toArray());

//         // return view('some-view')->with('users', $users);
//         return $record;