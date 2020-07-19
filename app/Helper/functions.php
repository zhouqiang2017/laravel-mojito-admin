<?php
//按长度分割含中文字符串的自定义函数
if ( !function_exists('mb_str_split')) {
    function mb_str_split($str, $length = 1, $encoding = 'UTF-8')
    {
        $arr = [];
        for ($i = 0;$i < mb_strlen($str, $encoding);$i += $length) {
            $arr[] = mb_substr($str, $i, $length, $encoding);
        }
        return $arr;
    }
}

