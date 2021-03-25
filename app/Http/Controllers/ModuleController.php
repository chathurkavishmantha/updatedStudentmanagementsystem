<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Module;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\Environment\Console;

class ModuleController extends Controller
{

    public function add_module()
    {
        $value = Module::create([
            'user_id' => request('user_id'),
            'subject_code' => request('subject_code'),
            'module_name' => request('module_name'),
            'module_no' => request('module_no'),
            'module_description' => request('module_description'),
            'module_upload_date' => request('module_upload_date'),
            'module_upload_file' => request('module_upload_file'),

        ]);
        


    }

    


    public function getModuleDetails($id)
    {
        
        $module = DB::table('modules')->where('user_id', $id)->get();
        return $module;
    }

    public function destroy($id)
    {
        DB::table('modules')->where('module_id', $id)->delete();
    }

    public function edit($id)
    {
        
       $data =  DB::table('modules')->where('module_id', $id)->get();
       return $data;
    }

    public function getRegisterStudentModuleDetails($id)
    {
        
        // return $module;

        DB::enableQueryLog();
        $value_1 = DB::table('register_module_students')->where('user_id', $id)->value('module_no');
        $value_2 = DB::table('register_module_students')->where('user_id', $id)->value('subject_code');
        $record = Module::where('module_no' , $value_1 )->where('subject_code' , $value_2)->get();
            // ->first();


     // dd($record->toArray());

        return $record;
    }
    
}
