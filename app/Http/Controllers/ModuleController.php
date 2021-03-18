<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Module;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class ModuleController extends Controller
{

    public function add_module()
    {
        $value = Module::create([
            'module_name' => request('module_name'),
            'module_no' => request('module_no'),
            'module_description' => request('module_description'),
            'module_upload_date' => request('module_upload_date'),
            'module_upload_file' => request('module_upload_file'),

        ]);
        


    }

    public function getModuleDetails()
    {
        
        $module = Module::all();
        return $module;
    }
   
}
