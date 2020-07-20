<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoachTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coachs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unique()->comment('用户id');
            $table->string('name')->nullable()->comment('姓名');
            $table->tinyInteger('gender')->default(1)->comment('1: 男；2：女');
            $table->tinyInteger('age')->comment('年龄');
            $table->string('phone')->comment('联系电话');
            $table->tinyInteger('address')->comment('地址');
            $table->string('location')->comment('经纬度，用“,”隔开');
            $table->string('avatar')->comment('头像');
            $table->string('front')->comment('身份证正面');
            $table->string('rear')->comment('身份证反面');
            $table->string('handpiece')->comment('手持身份证');
            $table->string('coach_card')->comment("教练证");
            $table->string('no_crime')->comment("无犯罪证明");
            $table->decimal('service_fee')->comment('收费标准');
            $table->text('intro')->nullable()->comment('一句介绍');
            $table->tinyInteger('level')->default(5)->comment('等级，默认5星');
            $table->string('tag')->comment('标签');
            $table->tinyInteger('status')->default(1)->comment('-1：删除 0：待审核 1：驳回 2：审核通过 3：禁用 4:过期');
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
        Schema::dropIfExists('coach');
    }
}
