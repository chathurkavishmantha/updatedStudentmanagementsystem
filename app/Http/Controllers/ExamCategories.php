<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Option;
use App\Question;
use Illuminate\Http\Request;

class ExamCategories extends Controller
{
    public function add_categories(){
        $value = Categories::create([
            'user_id' => request('user_id'),
            'category_name' => request('category_name'),
            'subject_name' => request('subject_name'),
        ]);
    }

    

    
}
