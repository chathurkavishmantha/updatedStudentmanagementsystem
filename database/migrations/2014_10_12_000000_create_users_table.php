<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type');            
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('address');
            $table->string('gender');
            $table->string('admition_date');
            $table->string('gurdian_number');
            $table->string('city');
            $table->string('gurdian_name');
            $table->string('father_name');
            $table->string('father_occupation');
            $table->string('father_nic');
            $table->string('mother_name');
            $table->string('mother_occupation');
            $table->string('mother_nic');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
