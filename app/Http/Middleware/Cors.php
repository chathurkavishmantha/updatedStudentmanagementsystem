<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
        // _>header('Access-Control-Allow-Origin',"*")
        // _>header('Access-Control-Allow-Methods', "PUT,POST,DELETE,GET,OPTIONS")
        // _>header('Access-Control-Allow-Headers',"Accept,Athorization,Content-Type");
    }
}
