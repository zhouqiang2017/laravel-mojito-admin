<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBannersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('名');
            $table->string('intro')->nullable('介绍');
            $table->string('url')->comment('地址');
            $table->tinyInteger('sequence')->default(0)->comment('排序值，值大在前');
            $table->tinyInteger('type')->default(1)->comment('1:内链 2：外联');
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
        Schema::dropIfExists('banners');
    }
}
