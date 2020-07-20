<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSourceStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('source_stores', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('文件名');
            $table->tinyInteger('type')->default(1)->comment('1:图片 2:音频 3：视频 4:其它');
            $table->string('url')->comment('资源路径');
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
        Schema::dropIfExists('source_stores');
    }
}
