<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('nickname')->comment('昵称');
            $table->string('openid')->nullable()->comment('openid');
            $table->string('session_key')->nullable()->comment('session_key');
            $table->string('union_id')->nullable()->comment('union_id');
            $table->string('phone')->nullable()->comment('联系电话');
            $table->string('gender')->nullable()->comment('性别');
            $table->string('district')->nullable()->comment('所在区域');
            $table->string('avatar')->nullable()->comment('头像');
            $table->string('location')->comment('经纬度，用“,”隔开');
            $table->tinyInteger('status')->default(1)->comment('0：禁用，1：启用');
            $table->decimal('balance')->default(0)->comment('余额');
            $table->decimal('cash')->default(0)->comment('可提现');
            $table->tinyInteger('is_coach')->default(0)->comment('0：不是 1：已申请，2：已是');
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
        Schema::dropIfExists('members');
    }
}
