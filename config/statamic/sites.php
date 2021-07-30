<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'newestnewhouse' => [
            'name' => 'Newest Newhouse',
            'locale' => 'en_US',
            'url' => env('NN_URL'),
        ],

        'andymnewhouse' => [
            'name' => 'Andy',
            'locale' => 'en_US',
            'url' => env('ANDY_URL'),
        ],

        'jessnewhouse' => [
            'name' => 'Jess',
            'locale' => 'en_US',
            'url' => env('JESS_URL'),
        ],

        'printing' => [
            'name' => 'Newhouse Printing',
            'locale' => 'en_US',
            'url' => env('NN_URL') . '/3d-printing/',
        ],

    ],
];
