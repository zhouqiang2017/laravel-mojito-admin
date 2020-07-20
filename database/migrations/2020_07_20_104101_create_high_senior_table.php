<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHighSeniorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('high_seniors', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('标题');
            $table->string('intro')->nullable()->comment('简介');
            $table->string('cover')->comment('图片');
            $table->text('regular')->nullable()->comment('规则');
            $table->tinyInteger('sequence')->default(0)->comment('排序值，值大在前');
            $table->tinyInteger('type')->default(1)->comment('1:正常 2：列外');
            $table->tinyInteger('status')->default(1)->comment('-1：删除 0：禁用 1：使用');
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
        Schema::dropIfExists('high_senior');
    }
}
