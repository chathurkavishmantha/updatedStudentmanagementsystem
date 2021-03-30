<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExamOption extends Controller
{
    public function add_option(){
        $value = Option::create([
            'option_txt' => request('option_txt'),
            'option_point' => request('option_point'),
            'question_id' => request('question_id'),
            'category_id' => request('category_id'),
        ]);
    }
    // public function get_exam_data($id)
    // {
        
    //      $record = Option::with(['Module_option_function'])->where('category_id',$id) ->get();

    //  // dd($record->toArray())

    //     return $record;
    // }

    // public function get_exam_option_data()
    // {
        
    //      $record = Option::with(['Module_question_function'])->values('category_id');

    //  // dd($record->toArray())

    //     return $record;
    // }

    public function get_exam_option_data()
    {
        $categories = Categories::with(['categoryQuestions' => function ($query) {$query->inRandomOrder()
                                ->with(['questionOptions' => function ($query) {$query->inRandomOrder();
                                    // ->with(['optionsCategory' => function ($query) {$query->inRandomOrder();
                    }]);
                // }]);
            }])
            ->whereHas('categoryQuestions')
            ->get();

        return $categories;
    }

    
    

}
