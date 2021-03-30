<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Question;
use Illuminate\Http\Request;

class ExamQuestion extends Controller
{
    public function add_questions(){
        $value = Question::create([
            'category_id' => request('category_id'),
            'question_description' => request('question_description'),
        ]);
    }
    public function get_all_questions($id)
    {
        
         $record = Question::with(['Module_category_function'])->where('category_id',$id) ->get();

     // dd($record->toArray())

        return $record;
    }
}
