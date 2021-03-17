<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class AuthController extends Controller
{
   /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login' , 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['errors' => ['result' => 'Unauthorized']], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function register()
    {
        $value = User::create([
            'type' => request('type'),
            'name' => request('name'),
            'email' => request('email'),
            'password' =>Hash::make( request('password')),
            'password_confirmation' => request('password_confirmation'),
            'address' => request('address'),
            'gender' => request('gender'),
            'admition_date' => request('admition_date'),
            'gurdian_number' => request('gurdian_number'),
            'city' => request('city'),
            'gurdian_name' => request('gurdian_name'),
            'father_name' => request('father_name'),
            'father_occupation' => request('father_occupation'),
            'father_nic' => request('father_nic'),
            'mother_name' => request('mother_name'),
            'mother_occupation' => request('mother_occupation'),
            'mother_nic' => request('mother_nic'),

        ]);
        return $this->login(request());





    }


    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
