<?php

namespace App\Http\Controllers;



use Illuminate\Support\Facades\Auth;
use LaraMall\Admin\Sysinfo\Facades\Sysinfo;

/**
 * Class IndexController
 *
 * @package \App\Http\Controllers
 */
class IndexController extends Controller{

    public function index()
    {
        $info = [
          'server' => Sysinfo::server(),
            'cpu' => Sysinfo::cpu(),
            'memory' => Sysinfo::memory(),
            'laraver' => Sysinfo::laraver(),
            'timezone' => Sysinfo::timezone(),
            'safeMode' => Sysinfo::safeMode(),
            'upload_max_filesize' => Sysinfo::upload_max_filesize(),
            'mysql' => Sysinfo::mysql(),
            'php' => Sysinfo::php()
        ];

        return $this->success($info);
    }
}
